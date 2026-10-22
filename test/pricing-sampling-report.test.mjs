import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizePricingSamples } from '../scripts/summarize-pricing-samples.mjs';
test('sampling report separates raw extraction, gaps and private evidence without publication', () => {
 const record={timestamp:'20250601000000',capturedAt:'2025-06-01T00:00:00.000Z',originalUrl:'https://sample.example.com/pricing',digest:null,mimeType:'text/html'};
 const journal={version:1,inputs:{ids:['sample','missing']},products:[{id:'sample',status:'review_pending',stage:'complete',done:true,landingLookup:{record:{...record,originalUrl:'https://sample.example.com/'}},candidateResults:[{lookup:{record},extracted:{plans:[{name:'Unreviewed fragment',offers:[{literal:'Free trial',amount:'0',currency:null,source:{locator:'offset:1-10',text:'PRIVATE FRAGMENT'}}]}]},rawHtml:'PRIVATE HTML'}],reservation:{checkedAt:'2026-10-22',checkpoint:{private:'PRIVATE CHECKPOINT'}},proposal:{reviewState:'proposed',plans:[{name:'Pro',status:'paid',source:{text:'PRIVATE NARRATIVE'},features:[{name:'Feature',source:{text:'PRIVATE FEATURE'}}],offers:[{amount:'9007199254740993',source:{text:'PRIVATE OFFER'}}]}]}},{id:'missing',status:'missing_landing',done:true}],requests:[{productId:'sample',url:'https://web.archive.org/example',status:200,body:'PRIVATE BODY',headers:{'content-type':'text/html','set-cookie':'PRIVATE COOKIE','authorization':'PRIVATE AUTH'}}]};
 const result=summarizePricingSamples(journal),serialized=JSON.stringify(result);
 assert.equal(result.report.summary.products,2);assert.equal(result.report.summary.completed,2);
 assert.equal(result.report.summary.rawProposals,1);assert.equal(result.report.summary.rawCandidateFragments,1);assert.equal(result.report.summary.nonemptyCandidateExtractions,1);assert.equal(result.report.summary.rawOffers,1);
 assert.equal(result.report.automaticallyConfirmed,0);assert.equal(result.report.historicalComplete,false);
 assert.equal(result.report.products[0].observation.plans[0].offers[0].amount,'9007199254740993');
 assert.equal(result.report.summary.rawCandidateOffers,1);
 assert.deepEqual(result.report.products[0].candidateResults[0].unvalidatedFragments[0].offers[0],
   {literal:'Free trial',amount:'0',currency:null,sourceLocator:'offset:1-10'});
 assert.equal(result.evidence.length,2);assert.deepEqual(result.evidence.map(e=>e.kind),['landing','pricing']);
 assert.doesNotMatch(serialized,/PRIVATE/);assert.equal(result.requests[0].headers['content-type'],'text/html');
});
test('mixed candidate gaps and digest errors remain visible without changing product status', () => {
 const journal={version:1,products:[{id:'adobe-acrobat',status:'missing_pricing',done:true,errorCode:null,candidateResults:[
  {status:'missing_pricing',errorCode:null,candidate:{url:'https://www.adobe.com/acrobat/pricing/students'},rawHtml:'PRIVATE FIRST BODY'},
  {status:'error',errorCode:'archive_digest_mismatch',error:'PRIVATE ERROR DETAIL',candidate:{url:'https://www.adobe.com/acrobat/pricing/compare-versions.html'},rawHtml:'PRIVATE SECOND BODY'},
 ]}],requests:[]};
 const result=summarizePricingSamples(journal),{summary,products}=result.report;
 assert.equal(summary.products,1);assert.deepEqual(summary.statuses,{missing_pricing:1});assert.equal(products[0].status,'missing_pricing');assert.equal(products[0].errorCode,null);
 assert.equal(summary.candidates,2);assert.equal(summary.productsWithCandidateErrors,1);assert.equal(summary.productsWithMixedCandidateOutcomes,1);
 assert.deepEqual(summary.candidateStatuses,{missing_pricing:1,error:1});assert.deepEqual(summary.candidateErrorCodes,{archive_digest_mismatch:1});
 assert.deepEqual(products[0].candidateSummary,{candidates:2,statuses:{missing_pricing:1,error:1},errorCodes:{archive_digest_mismatch:1},hasErrors:true,mixedOutcomes:true});
 assert.equal(summary.rawProposals,0);assert.equal(result.report.automaticallyConfirmed,0);assert.doesNotMatch(JSON.stringify(result),/PRIVATE/);
 assert.deepEqual(summarizePricingSamples(journal),result);
});
test('candidate facets count products once and support old journals without candidate outcomes',()=>{
 const result=summarizePricingSamples({version:1,products:[{id:'same-errors',status:'error',candidateResults:[{status:'error',errorCode:'archive_timeout'},{status:'error',errorCode:'archive_timeout'}]},{id:'legacy',status:'missing_landing'}],requests:[]}).report;
 assert.equal(result.summary.products,2);assert.equal(result.summary.candidates,2);assert.equal(result.summary.productsWithCandidateErrors,1);assert.equal(result.summary.productsWithMixedCandidateOutcomes,0);assert.deepEqual(result.summary.candidateErrorCodes,{archive_timeout:2});
 assert.deepEqual(result.products[1].candidateSummary,{candidates:0,statuses:{},errorCodes:{},hasErrors:false,mixedOutcomes:false});
});
