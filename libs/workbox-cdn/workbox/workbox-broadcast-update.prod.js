this.workbox=this.workbox||{},this.workbox.broadcastUpdate=function(t,a,o,s){"use strict";try{self["workbox:broadcast-update:5.1.3"]&&_()}catch(t){}const e=(t,a,o)=>!o.some(o=>t.headers.has(o)&&a.headers.has(o))||o.every(o=>{const s=t.headers.has(o)===a.headers.has(o),e=t.headers.get(o)===a.headers.get(o);return s&&e}),n=["content-length","etag","last-modified"],i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function c(t){return{cacheName:t.cacheName,updatedURL:t.request.url}}class r{constructor({headersToCheck:t,generatePayload:a}={}){this.t=t||n,this.o=a||c}async notifyIfUpdated(t){if(t.oldResponse&&!e(t.oldResponse,t.newResponse,this.t)){const s={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this.o(t)};if("navigate"===t.request.mode){let s;t.event instanceof FetchEvent&&(s=t.event.resultingClientId),await o.resultingClientExists(s)&&!i||await a.timeout(3500)}const e=await self.clients.matchAll({type:"window"});for(const t of e)t.postMessage(s)}}}return t.BroadcastCacheUpdate=r,t.BroadcastUpdatePlugin=class{constructor(t){this.cacheDidUpdate=async t=>{s.dontWaitFor(this.s.notifyIfUpdated(t))},this.s=new r(t)}},t.responsesAreSame=e,t}({},workbox.core._private,workbox.core._private,workbox.core._private);


