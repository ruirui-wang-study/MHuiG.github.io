const e=["WRb/W5mr","W67cTIS9fNxdHJWCa8kbW43dJmoMWQtdTW==","WRhdS8kOfCozWQv0W4K8W6xdQchcQmkib8oCWQe3WQ0vW74=","fmkAW4VcIuqZtSongmoUW4W+WR8=","WRurpqnJymk9jSk1W5i7","eSo2W7THWQ3dOHO7","WOzsW5tdP8k5xuD3W69JAmkul8k9WO/cLam=","ndFdMG/dQCkKW6NcVK7dR0tdKmkU","WPrIhCodWQqGbfJcQuFdR2VcTeeoW5W=","W7/cOSobW4ibq8kImYPMDcNdRa==","W79lrLddOSoQea==","h2q5WRi=","W619WQq2","WOXjW7zRrmoiWPGKcmoAW7Dv","WQVcH8o8yq==","WO5AWOjL","t1mYW4hcLri=","W4qrW5JdQmoXt1JdOYFdI2/dKYG=","WPGHivxcH8kNsSoyCMz1p8k6amo2pW==","vMFcN8k7WOddOcfEcLFdImkXWRa=","WRPREa==","c2OIWRugb3JcGqm=","W7HPE20UW6m/aWdcOLhcNYPt","W7CEW50RW5mMscWHpw1PCZVdIX8wW7vm","W6n8WQe=","WQddUSkQhCoeWQrHW7qBW77dUttcUq==","rwBcNmkxWOxdSsPyffhdJSkXWRddGCo2qa==","W4tcLmk/WO7cUYXaW5OeWRDzgLC7WRRdGMzIeCo1WQ47W5zJjSoSW6BdSx1lvSo/WRfgWR/cLSkWpmoHet4UWP7cKfRdVGe6WQ8NW7VcRgPGh8oLW5VdPqFdO0vpW50IWRyIAKq=","WOHxWObIDXemp8krW7NdGCoxW7u="];!function(e,o){!function(o){for(;--o;)e.push(e.shift())}(++o)}(e,478);const o=function(t,n){let c=e[t-=0];if(o.SDZzHH===undefined){const e=function(e,o){let t,n,c=[],r=0,W="",i="";for(let d=0,s=(e=function(e){const o=String(e).replace(/=+$/,"");let t="";for(let n,c,r=0,W=0;c=o.charAt(W++);~c&&(n=r%4?64*n+c:c,r++%4)?t+=String.fromCharCode(255&n>>(-2*r&6)):0)c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(c);return t}(e)).length;d<s;d++)i+="%"+("00"+e.charCodeAt(d).toString(16)).slice(-2);for(e=decodeURIComponent(i),n=0;n<256;n++)c[n]=n;for(n=0;n<256;n++)r=(r+c[n]+o.charCodeAt(n%o.length))%256,t=c[n],c[n]=c[r],c[r]=t;n=0,r=0;for(let d=0;d<e.length;d++)n=(n+1)%256,r=(r+c[n])%256,t=c[n],c[n]=c[r],c[r]=t,W+=String.fromCharCode(e.charCodeAt(d)^c[(c[n]+c[r])%256]);return W};o.wtCpBa=e,o.FriHEv={},o.SDZzHH=!0}const r=o.FriHEv[t];return r===undefined?(o.qggEKt===undefined&&(o.qggEKt=!0),c=o.wtCpBa(c,n),o.FriHEv[t]=c):c=r,c},t=o;importScripts(t("0xd","Cmby")),workbox.setConfig({modulePathPrefix:"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/"});const{core:n,precaching:c,routing:r,strategies:W,expiration:i,cacheableResponse:d,backgroundSync:s}=workbox,{CacheFirst:a,NetworkFirst:m,NetworkOnly:f,StaleWhileRevalidate:u}=W,{ExpirationPlugin:x}=i,{CacheableResponsePlugin:g}=d,l=t("0x19","ffqc");self[t("0xc","aAaM")]("activate",e=>{const o=t;e[o("0x7","ccfB")](caches[o("0xf","a7My")]()[o("0x1","12V6")](e=>{const t=o;return Promise[t("0xa","SC!g")](e[t("0x6","PQef")](e=>{const o=t;if(!e[o("0x14","ybrC")](l))return caches[o("0x2","jLmh")](e)}))}))}),n[t("0x9","ZtuT")]({prefix:"mhuig-blog",suffix:l}),n[t("0x13","6sr!")](),n[t("0x1c","gLEU")](),c[t("0x11","Jk)9")](),c[t("0x17","*&%c")]([{url:t("0x8","PQef"),revision:null},{url:t("0x18","ckv4"),revision:null},{url:"https://cdn.jsdelivr.net/npm/mhg@0.0.6/js/search.js",revision:null}]),r[t("0x3","Q7EA")](/.*cdn\.jsdelivr\.net/,new a({cacheName:t("0x10","M%V4")+l,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new x({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[t("0xe","12V6")](/.*cdnjs\.cloudflare\.com/,new a({cacheName:"static-immutable"+l,fetchOptions:{mode:t("0x0","P[WE"),credentials:t("0x1b","SC!g")},plugins:[new x({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[t("0xb","Jk)9")](/.*m7\.music\.126\.net/,new a({cacheName:t("0x4","gJ1w")+l,fetchOptions:{mode:t("0x1a","ccfB"),credentials:"omit"},plugins:[new x({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r.registerRoute(/.*baidu\.com.*/,new f),r[t("0x5","aAaM")](/https:\/\/ip\..*/,new f),r[t("0x16","NTUq")](/.*jq\.mhuig\.top.*/,new f),r.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new u),r[t("0x12","GnCf")](/.*\.(css|js)/,new u),r[t("0x16","NTUq")]("/jquery.js",new u),r[t("0x15","mZHJ")](new m({networkTimeoutSeconds:3}));