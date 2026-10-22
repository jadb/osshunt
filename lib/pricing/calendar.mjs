const time = value => { const ms=Date.parse(value); if(!Number.isFinite(ms)) throw new TypeError('Invalid date'); return ms; };
export function addSixMonths(iso) {
  const date=new Date(time(iso)), day=date.getUTCDate();
  date.setUTCDate(1); date.setUTCMonth(date.getUTCMonth()+6);
  const last=new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth()+1,0)).getUTCDate();
  date.setUTCDate(Math.min(day,last)); return date.toISOString();
}
export function historicalAnchors(records,cutoff) {
  const end=time(cutoff), ordered=records.map(r=>time(r.capturedAt)).sort((a,b)=>a-b), result=[];
  if(!ordered.length) return result;
  for(let at=new Date(ordered[0]).toISOString(); time(at)<=end; at=addSixMonths(at)) { if(result.length>=1000) throw new RangeError('Too many historical anchors'); result.push(at); }
  return result;
}
export function selectAtOrBefore(records,anchor,maxAgeDays=30) {
  const end=time(anchor), start=end-maxAgeDays*86400000;
  return records.filter(r=>time(r.capturedAt)<=end&&time(r.capturedAt)>=start).sort((a,b)=>time(b.capturedAt)-time(a.capturedAt)||String(a.originalUrl).localeCompare(String(b.originalUrl)))[0]||null;
}
