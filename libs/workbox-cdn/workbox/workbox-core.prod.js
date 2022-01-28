this.workbox=this.workbox||{},this.workbox.core=function(e){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}const t=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class n extends Error{constructor(e,n){super(t(e,n)),this.name=e,this.details=n}}const s=new Set;const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[r.prefix,e,r.suffix].filter(e=>e&&e.length>0).join("-"),o={updateDetails:e=>{(e=>{for(const t of Object.keys(r))e(t)})(t=>{"string"==typeof e[t]&&(r[t]=e[t])})},getGoogleAnalyticsName:e=>e||i(r.googleAnalytics),getPrecacheName:e=>e||i(r.precache),getPrefix:()=>r.prefix,getRuntimeName:e=>e||i(r.runtime),getSuffix:()=>r.suffix};async function a(){for(const e of s)await e()}const c=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),""),u=(e,t)=>e.filter(e=>t in e),l=async({request:e,mode:t,plugins:n=[]})=>{const s=u(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},f=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const i=await self.caches.open(e),o=await l({plugins:r,request:t,mode:"read"});let a=await i.match(o,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;a=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:a,request:o})}return a},h={put:async({cacheName:e,request:t,response:s,event:r,plugins:i=[],matchOptions:o})=>{const h=await l({plugins:i,request:t,mode:"write"});if(!s)throw new n("cache-put-with-no-response",{url:c(h.url)});const w=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,i=!1;for(const t of s)if("cacheWillUpdate"in t){i=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return i||(r=r&&200===r.status?r:void 0),r||null})({event:r,plugins:i,response:s,request:h});if(!w)return;const p=await self.caches.open(e),d=u(i,"cacheDidUpdate"),g=d.length>0?await f({cacheName:e,matchOptions:o,request:h}):null;try{await p.put(h,w)}catch(e){throw"QuotaExceededError"===e.name&&await a(),e}for(const t of d)await t.cacheDidUpdate.call(t,{cacheName:e,event:r,oldResponse:g,newResponse:w,request:h})},match:f};let w,p;function d(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}class g{constructor(e,t,{onupgradeneeded:n,onversionchange:s}={}){this.t=null,this.s=e,this.i=t,this.o=n,this.u=s||(()=>this.close())}get db(){return this.t}async open(){if(!this.t)return this.t=await new Promise((e,t)=>{let n=!1;setTimeout(()=>{n=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const s=indexedDB.open(this.s,this.i);s.onerror=()=>t(s.error),s.onupgradeneeded=e=>{n?(s.transaction.abort(),s.result.close()):"function"==typeof this.o&&this.o(e)},s.onsuccess=()=>{const t=s.result;n?t.close():(t.onversionchange=this.u.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:n=null,direction:s="next",count:r,includeKeys:i=!1}={}){return await this.transaction([e],"readonly",(o,a)=>{const c=o.objectStore(e),u=t?c.index(t):c,l=[],f=u.openCursor(n,s);f.onsuccess=()=>{const e=f.result;e?(l.push(i?e:e.value),r&&l.length>=r?a(l):e.continue()):a(l)}})}async transaction(e,t,n){return await this.open(),await new Promise((s,r)=>{const i=this.t.transaction(e,t);i.onabort=()=>r(i.error),i.oncomplete=()=>s(),n(i,e=>s(e))})}async l(e,t,n,...s){return await this.transaction([t],n,(n,r)=>{const i=n.objectStore(t),o=i[e].apply(i,s);o.onsuccess=()=>r(o.result)})}close(){this.t&&(this.t.close(),this.t=null)}}g.prototype.OPEN_TIMEOUT=2e3;const y={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(y))for(const n of t)n in IDBObjectStore.prototype&&(g.prototype[n]=async function(t,...s){return await this.l(n,t,e,...s)});const m={fetch:async({request:e,fetchOptions:t,event:s,plugins:r=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=u(r,"fetchDidFail"),o=i.length>0?e.clone():null;try{for(const t of r)if("requestWillFetch"in t){const n=t.requestWillFetch,r=e.clone();e=await n.call(t,{request:r,event:s})}}catch(e){throw new n("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let n;n="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of r)"fetchDidSucceed"in e&&(n=await e.fetchDidSucceed.call(e,{event:s,request:a,response:n}));return n}catch(e){for(const t of i)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:o.clone(),request:a.clone()});throw e}}};function q(e){return new Promise(t=>setTimeout(t,e))}var v=Object.freeze({__proto__:null,assert:null,cacheNames:o,cacheWrapper:h,canConstructReadableStream:function(){if(void 0===w)try{new ReadableStream({start(){}}),w=!0}catch(e){w=!1}return w},canConstructResponseFromBodyStream:d,dontWaitFor:function(e){e.then(()=>{})},DBWrapper:g,Deferred:class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}},deleteDatabase:async e=>{await new Promise((t,n)=>{const s=indexedDB.deleteDatabase(e);s.onerror=()=>{n(s.error)},s.onblocked=()=>{n(new Error("Delete blocked"))},s.onsuccess=()=>{t()}})},executeQuotaErrorCallbacks:a,fetchWrapper:m,getFriendlyURL:c,logger:null,resultingClientExists:async function(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const n=new Set(t.map(e=>e.id));let s;const r=performance.now();for(;performance.now()-r<2e3&&(t=await self.clients.matchAll({type:"window"}),s=t.find(t=>e?t.id===e:!n.has(t.id)),!s);)await q(100);return s},timeout:q,WorkboxError:n});const x={get googleAnalytics(){return o.getGoogleAnalyticsName()},get precache(){return o.getPrecacheName()},get prefix(){return o.getPrefix()},get runtime(){return o.getRuntimeName()},get suffix(){return o.getSuffix()}};return e._private=v,e.cacheNames=x,e.clientsClaim=function(){self.addEventListener("activate",()=>self.clients.claim())},e.copyResponse=async function(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,i=d()?n.body:await n.blob();return new Response(i,r)},e.registerQuotaErrorCallback=function(e){s.add(e)},e.setCacheNameDetails=function(e){o.updateDetails(e)},e.skipWaiting=function(){self.addEventListener("install",()=>self.skipWaiting())},e}({});


