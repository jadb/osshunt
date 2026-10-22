import {ancestor,attr,evidence,nodes,text} from './html.mjs';
import {emptyQualifications,offerContextText} from './extract-offers.mjs';
const hasClass=(node,value)=>(attr(node,'class')||'').split(/\s+/).includes(value);
const hidden=n=>attr(n,'hidden')!==null||attr(n,'aria-hidden')==='true'||/display\s*:\s*none/i.test(attr(n,'style')||'');
const decimal=value=>typeof value==='string'&&/^\d+(?:\.\d{1,2})?$/.test(value)?value:null;
export function webflowPlans(doc,{originalUrl,issues=[]}={}) {
  let url;try{url=new URL(originalUrl);}catch{return [];}
  if(url.hostname.replace(/^www\./,'')!=='webflow.com'||url.pathname.replace(/\/$/,'')!=='/pricing')return [];
  const grid=nodes(doc,n=>attr(n,'id')==='site-plan-grid-control')[0];
  if(!grid)return [];
  const comparison=nodes(doc,n=>attr(n,'id')==='site-plan-compare')[0];
  const footnote=comparison&&nodes(comparison,n=>n.tagName&&!hidden(n)&&!ancestor(n,hidden)&&/^All prices are in USD and charged per site with applicable taxes added at checkout\.$/.test(offerContextText(n)))
    .find(n=>!nodes(n,c=>c!==n&&c.tagName&&text(c)===text(n)).length);
  const plans=[];
  for(const card of nodes(grid,n=>hasClass(n,'pricing-card'))){
    const header=nodes(card,n=>hasClass(n,'pricing-card-header'))[0];
    if(!header)continue;
    const title=nodes(header,n=>hasClass(n,'pill')&&/^(Basic|CMS)$/.test(text(n)))[0];
    if(!title)continue;
    const prices=nodes(header,n=>n.tagName==='div'&&hasClass(n,'price')&&attr(n,'data-monthly-price')!==null);
    if(prices.length!==1)continue;
    const price=prices[0],monthly=decimal(attr(price,'data-monthly-price')),annual=decimal(attr(price,'data-yearly-price'));
    const billing=nodes(header,n=>attr(n,'data-billing-monthly')==='billed monthly'&&attr(n,'data-billing-yearly')==='billed yearly')[0];
    if(monthly===null||annual===null||!billing||!/\/\s*mo\b/.test(text(header)))continue;
    const source=evidence(header);
    if(footnote){source.locator+='|'+evidence(footnote).locator;source.text+=' | '+text(footnote);}
    source.text+=` | data-monthly-price="${monthly}" | data-yearly-price="${annual}" | data-billing-monthly="billed monthly" | data-billing-yearly="billed yearly"`;
    const offers=[['monthly',monthly],['annual',annual]].map(([commitment,amount])=>({
      literal:`data-${commitment==='annual'?'yearly':'monthly'}-price="${amount}"; /mo; billed ${commitment==='annual'?'yearly':'monthly'}`,
      amount,currency:footnote?'USD':null,billingPeriod:'month',commitment,unit:footnote?'site':null,minimumQuantity:null,
      qualifications:{...emptyQualifications(),tax:footnote?'Applicable taxes added at checkout':null,billingVariant:'unknown-active-variant'},source:{...source},
    }));
    plans.push({name:text(title),order:plans.length,popular:null,kind:'plan',status:'paid',offers,features:[],source});
  }
  if(plans.length)issues.push('Only fixed general Site Basic/CMS rates recovered; Starter, variable Business, Enterprise, Ecommerce and Workspace groups omitted',
    'Webflow data-yearly-price is a monthly equivalent billed yearly; both attribute variants retained without executing scripts',
    ...(footnote?[]:['Currency and per-site denominator remain unknown; dollar symbol alone does not establish USD']));
  return plans;
}
