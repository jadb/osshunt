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
