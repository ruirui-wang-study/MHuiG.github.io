const e=["itfYWOeqWO9RjCkMvSk0oSoBbK1dpg8lzH3dSIa2D1HOzJRcSCkdW6LUCJddT8ktW59DWRtdLNhdPSoAWQeJW6RdMYRdKXS=","WOacgmouCCoUzuqAxu/cKZRdP8orcq==","k1/cV8oHjvtdSXy6sdXbCW==","vwxdQmoEhSk9W5PqgG==","W5ddOmk1W6pcJSoblK0zW5uBjmkr","oCoAW5q=","mWZcU0K=","kK7cUCo8p0pcUW0fsJXbD1JcUmkb","BSoyhSonv8kj","W5SGsIxdM8kQjmoIB2KwjSoC","v8oBrmkEWR3cNCkPWQtdKwlcNxVdSSk3W6iBW7i=","W5FcOmoTW5xdUCoEiafmpuFcKHq=","AmkAWQRdRMnqW78mW7j/DMSWW58=","WQpdHmoEW4y5W6VdHConyxvxzNe=","WQi8W6RdHwddKSoFg8kgueL8WO4KrMiWp8ocW70FvCkmmIJcOCo8lLVdQbJcV8oEW5NdSGFdRCkVEKtcKxdcVZifkbeFW7BcR8kzlSkiy8kG","WOtdN0Ch","zYSVWOGyWPXua38=","WRRdUmoM","WRZdVmoVW6G=","W6VcK8kslJFcMfaGW5VdK1uv","WP/dMKSD","kLhcSCo4auhdVXabss4=","WQnmW6eTx3CCjmkYimkwW7tdGfJcOJu=","W4hcUmkWWQSqfe9sWQFcUvBcR18=","W57dOc/cMNdcQCoUW4xdPbC=","o8oAW50lW7CrdhRdKJKdmgjNWQhdSL5SxSorW5q=","cSkeigRcSv/cNIGGWPVcTmkjzG==","r8orqSkP","b8oBy3FcUGFdImka","v8klnNBcP1NcGNqyWOC=","WRxdHmkElW==","W4RcQmoJW4G=","W55gsCkqkmk1Eq==","oIbYWRicW5ySB8klu8k3CCo1ef1howOo"];!function(e,o){!function(o){for(;--o;)e.push(e.shift())}(++o)}(e,429);const o=function(c,n){let t=e[c-=0];if(o.nBZDUp===undefined){const e=function(e,o){let c,n,t=[],r=0,d="",i="";for(let s=0,W=(e=function(e){const o=String(e).replace(/=+$/,"");let c="";for(let n,t,r=0,d=0;t=o.charAt(d++);~t&&(n=r%4?64*n+t:t,r++%4)?c+=String.fromCharCode(255&n>>(-2*r&6)):0)t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);return c}(e)).length;s<W;s++)i+="%"+("00"+e.charCodeAt(s).toString(16)).slice(-2);for(e=decodeURIComponent(i),n=0;n<256;n++)t[n]=n;for(n=0;n<256;n++)r=(r+t[n]+o.charCodeAt(n%o.length))%256,c=t[n],t[n]=t[r],t[r]=c;n=0,r=0;for(let s=0;s<e.length;s++)n=(n+1)%256,r=(r+t[n])%256,c=t[n],t[n]=t[r],t[r]=c,d+=String.fromCharCode(e.charCodeAt(s)^t[(t[n]+t[r])%256]);return d};o.GSuDkm=e,o.XkHNEN={},o.nBZDUp=!0}const r=o.XkHNEN[c];return r===undefined?(o.TlyKjG===undefined&&(o.TlyKjG=!0),t=o.GSuDkm(t,n),o.XkHNEN[c]=t):t=r,t},c=o;importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js"),workbox[c("0x1d","oXs&")]({modulePathPrefix:c("0x1b","]SN*")});const{core:n,precaching:t,routing:r,strategies:d,expiration:i,cacheableResponse:s,backgroundSync:W}=workbox,{CacheFirst:x,NetworkFirst:k,NetworkOnly:u,StaleWhileRevalidate:m}=d,{ExpirationPlugin:a}=i,{CacheableResponsePlugin:l}=s,S=c("0xb","^$0o");self.addEventListener("activate",e=>{const o=c;e[o("0x10","OjPn")](caches[o("0x1f","k(M1")]()[o("0x21","!OsF")](e=>{const c=o;return Promise[c("0x12","J5^t")](e[c("0x1e","k(M1")](e=>{const o=c;if(!e[o("0x7","MqR^")](S))return caches[o("0x15","7RGo")](e)}))}))}),n[c("0xc","BuFR")]({prefix:c("0x3","j38S"),suffix:S}),n[c("0x0","(%DV")](),n[c("0x20","GTTh")](),t[c("0x4","J5^t")](),t[c("0x1","]Oz$")]([{url:c("0x19","i]5k"),revision:null},{url:c("0x11","[zHc"),revision:null},{url:c("0xd","BuFR"),revision:null}]),r.registerRoute(/.*cdn\.jsdelivr\.net/,new x({cacheName:c("0xe","^$0o")+S,fetchOptions:{mode:c("0x6","#vQA"),credentials:c("0x9","N1D0")},plugins:[new a({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[c("0x2","@m7K")](/.*cdnjs\.cloudflare\.com/,new x({cacheName:c("0x14","(%DV")+S,fetchOptions:{mode:"cors",credentials:c("0xa","gGSY")},plugins:[new a({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[c("0x18","gGSY")](/.*m7\.music\.126\.net/,new x({cacheName:"static-immutable"+S,fetchOptions:{mode:c("0x13","zQII"),credentials:c("0x1c","!OsF")},plugins:[new a({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[c("0x1a","6jkk")](/.*baidu\.com.*/,new u),r[c("0xf","(%DV")](/https:\/\/ip\..*/,new u),r[c("0x5","&w1D")](/.*jq\.mhuig\.top.*/,new u),r[c("0x2","@m7K")](/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new m),r[c("0x16","IZtZ")](/.*\.(css|js)/,new m),r.registerRoute(c("0x8","&w1D"),new m),r[c("0x17","#vQA")](new k({networkTimeoutSeconds:3}));