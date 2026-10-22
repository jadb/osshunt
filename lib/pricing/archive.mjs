import { validateLandingUrl, ArchiveError } from '../history/archive.mjs';
export { ArchiveError };
const USER_AGENT='OSSHuntHistory/0.1 (+https://osshunt.com)';
const FIELDS=['timestamp','original','mimetype','statuscode','digest'];
export const sha256=async value=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',typeof value==='string'?new TextEncoder().encode(value):value))].map(n=>n.toString(16).padStart(2,'0')).join('');
export const timestampFor=iso=>new Date(iso).toISOString().replace(/[-:TZ.]/g,'').slice(0,14);
function captureAt(timestamp) { if(!/^\d{14}$/.test(timestamp)) throw new ArchiveError('archive_bad_response','Invalid capture date'); const at=`${timestamp.slice(0,4)}-${timestamp.slice(4,6)}-${timestamp.slice(6,8)}T${timestamp.slice(8,10)}:${timestamp.slice(10,12)}:${timestamp.slice(12,14)}.000Z`; if(!Number.isFinite(Date.parse(at))||timestampFor(at)!==timestamp) throw new ArchiveError('archive_bad_response','Invalid capture date'); return at; }
export const archiveUrl=record=>`https://web.archive.org/web/${record.timestamp}id_/${validateLandingUrl(record.originalUrl).href}`;
function retryAfter(response){const raw=response.headers.get('retry-after');if(!raw)return null;if(/^\d+$/.test(raw))return Number(raw);return Math.max(1,Math.ceil((Date.parse(raw)-Date.now())/1000))||null;}
async function request(url,fetchImpl,signal,accept,maxBytes) {
  const timeout=AbortSignal.timeout(15000), combined=signal?AbortSignal.any([signal,timeout]):timeout;
  let response;
  try {
    response=await fetchImpl(url,{signal:combined,redirect:'manual',headers:{Accept:accept,'User-Agent':USER_AGENT}});
    if(response.status>=300&&response.status<400) throw new ArchiveError('archive_redirect','Archive redirected the exact request');
    if(!response.ok) throw new ArchiveError(response.status===429?'archive_rate_limited':'archive_unavailable',`Archive returned HTTP ${response.status}`,{retryAfter:retryAfter(response)});
    if(response.url&&response.url!==url) throw new ArchiveError('archive_timestamp_mismatch','Archive changed the requested URL');
    if(Number(response.headers.get('content-length'))>maxBytes) throw new ArchiveError('archive_too_large','Archive response exceeds limit');
    const reader=response.body?.getReader(); if(!reader) throw new ArchiveError('archive_bad_response','Archive returned no body');
    let size=0;const chunks=[];
    try {while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>maxBytes)throw new ArchiveError('archive_too_large','Archive response exceeds limit');chunks.push(value);}}
    finally {await reader.cancel();}
    const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
    return {response,bytes};
  } catch(error) {if(response)await response.body?.cancel().catch(()=>{});if(error instanceof ArchiveError)throw error;throw new ArchiveError(combined.aborted?'archive_timeout':'archive_unavailable','Archive request failed',{cause:error});}
}
export async function queryHtmlPage(input,{cutoff,from=null,resumeKey=null,fetchImpl=fetch,signal,limit=100}={}) {
  const original=validateLandingUrl(input).href;
  if(!Number.isSafeInteger(limit)||limit<1||limit>500)throw new RangeError('Invalid CDX page limit');
  if(resumeKey!==null&&(typeof resumeKey!=='string'||resumeKey.length>8192))throw new TypeError('Invalid CDX cursor');
  const query=new URL('https://web.archive.org/cdx/search/cdx');query.search=new URLSearchParams({url:original,matchType:'exact',output:'json',fl:FIELDS.join(','),filter:'statuscode:200',to:timestampFor(cutoff),limit:String(limit),showResumeKey:'true'}).toString();
  query.searchParams.append('filter','mimetype:text/html');if(from)query.searchParams.set('from',timestampFor(from));if(resumeKey)query.searchParams.set('resumeKey',resumeKey);
  const {bytes}=await request(query.href,fetchImpl,signal,'application/json',2*1024*1024);
  let data;try{data=JSON.parse(new TextDecoder().decode(bytes));}catch{throw new ArchiveError('archive_bad_response','Invalid CDX JSON');}
  if(!Array.isArray(data)||data.length&&(!Array.isArray(data[0])||FIELDS.some((f,i)=>data[0][i]!==f)))throw new ArchiveError('archive_bad_response','Invalid CDX columns');
  const rows=data.slice(1);let next=null;
  if(rows.at(-1)?.length===1){next=rows.pop()[0];if(rows.pop()?.length!==0||typeof next!=='string'||!next)throw new ArchiveError('archive_incomplete','Malformed CDX continuation');}
  if(rows.length>limit||next===resumeKey&&next)throw new ArchiveError('archive_incomplete','CDX continuation exceeded boundary');
  const records=rows.map(row=>{
    if(!Array.isArray(row)||row.length!==5||row.some(v=>typeof v!=='string'))throw new ArchiveError('archive_bad_response','Malformed CDX row');
    const [timestamp,target,mimeType,status,digest]=row,capturedAt=captureAt(timestamp);
    if(validateLandingUrl(target).href!==original||mimeType!=='text/html'||status!=='200'||Date.parse(capturedAt)>Date.parse(cutoff)||(from&&Date.parse(capturedAt)<Date.parse(from)))throw new ArchiveError('archive_bad_response','Unrelated CDX record');
    if(digest!=='-'&&!/^(?:sha1:)?[A-Z2-7]{32}$/i.test(digest))throw new ArchiveError('archive_bad_response','Invalid archive digest');
    return {timestamp,capturedAt,originalUrl:target,digest:digest==='-'?null:digest,mimeType};
  });
  if(next&&!records.length)throw new ArchiveError('archive_incomplete','Empty CDX continuation');
  return {records,resumeKey:next,complete:!next,query:{url:query.href,status:200}};
}
export async function fetchHtml(record,{fetchImpl=fetch,signal,maxBytes=2*1024*1024,clock=Date.now}={}) {
  const url=archiveUrl(record);
  if(captureAt(record.timestamp)!==record.capturedAt)throw new ArchiveError('archive_timestamp_mismatch','Capture date differs from record');
  const {bytes,response}=await request(url,fetchImpl,signal,'text/html',maxBytes);
  if(!/^text\/html(?:;|$)/i.test(response.headers.get('content-type')||''))throw new ArchiveError('archive_bad_response','Expected HTML');
  const memento=response.headers.get('memento-datetime');if(memento!==null&&Date.parse(memento)!==Date.parse(record.capturedAt))throw new ArchiveError('archive_timestamp_mismatch','Archive substituted capture date');
  const digest=response.headers.get('x-archive-orig-digest');if(digest&&record.digest&&digest.replace(/^sha1:/i,'').toUpperCase()!==record.digest.replace(/^sha1:/i,'').toUpperCase())throw new ArchiveError('archive_digest_mismatch','Archive digest differs from inventory');
  return {bytes,metadata:{sha256:await sha256(bytes),digest:record.digest,originalUrl:record.originalUrl,capturedAt:record.capturedAt,archiveUrl:url,fetchedAt:new Date(clock()).toISOString(),mimeType:'text/html'}};
}
