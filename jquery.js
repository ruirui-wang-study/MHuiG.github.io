const e=["WOpdT8oFdG==","W4jscCkaWOJdRKHhC8ouycPWW4C=","W4VdHmoAj8kdqmkMW4JdKmozWQW=","WQRcTs4=","oMdcJ8oiCdKSWQ5qrqumW5VcGXZdRgKLvG==","drddSsfxW5T+W44haePYW5ZdUcKB","WOhdJc5r","a1FdMCkJWOBcM1FdHCk8WPFdM8kUAsVcGmkeW40=","W55hWPnfEKT5c39sm2RcPG==","xu5OWRS=","W7dcM8klW5q=","W6FcNCkYj8oTx0HvhHXmjgNcHchcOYRdVa/dVwRdHSodW4D3l2RcNqtcVmo5wguFjCoLW4WnWR3cGc7dQJddG8kQWQ1/mbmNW6DvWOitreXdvCkhW5eLwwzDW6DvW77dVa==","WRRdNGxdR8oluvpcHszJrICnrWDS","DqtdQmo4tSoUACkjxG==","W6FcNCkYj8oTx0HvhHXmjgNcHchcOYRdVa/dVwRdHSodW4D3l2RcNqtcVmo5wguFjCoLW4WnWR3cGc7dQJddG8kQWQ1/mbmNW6DvWOitra==","W5lcM8kx","WOFcRmk6WRqRBvdcTv7dSCkXW44s","WO5zW7hdLgJcKCk9z1JdVCosWQT5osrD","WQ8PW5S7W5qCaSoSh8oNmCktW7e=","w3pdQNNdS2Pm","BCo0DmocW4bpW4LRW4NdVSkzW612","W6FcNCkYj8oTx0HvhHXmjgNcHchcOYRdVa/dVwRdHSodW4D3l2RcNqtcPSo+tu5nzmkTW49yW7BcHb3dSg3cL8oLW6WZl1i/W78=","WP9uhCkAW5tdQvLmtCoEoZ1M","W6pdHZ8+CWPJaCohW6rOFeC=","turUWOSGnCoTyb8=","WR8vr8k0WP/dKeddNbVdOGT4W5u=","W7ZcMCkqW5m=","jSo7A8kiW55B","igVcMmoNzd4HWRG=","WP5fg8khW47dVHfxCSoCoZ1IW5z/WRG="];!function(e,o){!function(o){for(;--o;)e.push(e.shift())}(++o)}(e,449);const o=function(c,t){let n=e[c-=0];if(o.dUjDBh===undefined){const e=function(e,o){let c,t,n=[],d=0,r="",W="";e=function(e){const o=String(e).replace(/=+$/,"");let c="";for(let t,n,d=0,r=0;n=o.charAt(r++);~n&&(t=d%4?64*t+n:n,d++%4)?c+=String.fromCharCode(255&t>>(-2*d&6)):0)n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);return c}(e);for(let i=0,s=e.length;i<s;i++)W+="%"+("00"+e.charCodeAt(i).toString(16)).slice(-2);for(e=decodeURIComponent(W),t=0;t<256;t++)n[t]=t;for(t=0;t<256;t++)d=(d+n[t]+o.charCodeAt(t%o.length))%256,c=n[t],n[t]=n[d],n[d]=c;t=0,d=0;for(let i=0;i<e.length;i++)t=(t+1)%256,d=(d+n[t])%256,c=n[t],n[t]=n[d],n[d]=c,r+=String.fromCharCode(e.charCodeAt(i)^n[(n[t]+n[d])%256]);return r};o.POJRtp=e,o.SJxUxk={},o.dUjDBh=!0}const d=o.SJxUxk[c];return d===undefined?(o.onagKR===undefined&&(o.onagKR=!0),n=o.POJRtp(n,t),o.SJxUxk[c]=n):n=d,n},c=o;importScripts(c("0xc","waiX")),workbox[c("0x19","cltS")]({modulePathPrefix:c("0xf","waiX")});const{core:t,precaching:n,routing:d,strategies:r,expiration:W,cacheableResponse:i,backgroundSync:s}=workbox,{CacheFirst:a,NetworkFirst:u,NetworkOnly:x,StaleWhileRevalidate:m}=r,{ExpirationPlugin:l}=W,{CacheableResponsePlugin:h}=i,g=c("0x14","RDKr");self[c("0x6","q8$v")]("activate",e=>{const o=c;e[o("0xe","uwU9")](caches[o("0x7","#dA]")]()[o("0x1","TEio")](e=>{const c=o;return Promise[c("0x4","]yRj")](e[c("0x10","9CCe")](e=>{const o=c;if(!e[o("0x1d","p!d]")](g))return caches[o("0x1c","Q%W8")](e)}))}))}),t[c("0x5","p!d]")]({prefix:"mhuig-blog",suffix:g}),t[c("0x3","ePiP")](),t.clientsClaim(),n.cleanupOutdatedCaches(),n[c("0x12","mpoG")]([{url:c("0x2","&Rqe"),revision:null},{url:c("0x15","Q%W8"),revision:null},{url:c("0x16","waiX"),revision:null}]),d[c("0x1a","AupU")](/.*cdn\.jsdelivr\.net/,new a({cacheName:c("0x0","&Rqe")+g,fetchOptions:{mode:c("0xb","PYJb"),credentials:"omit"},plugins:[new l({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),d.registerRoute(/.*cdnjs\.cloudflare\.com/,new a({cacheName:"static-immutable"+g,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new l({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),d.registerRoute(/.*m7\.music\.126\.net/,new a({cacheName:c("0xd","h5M[")+g,fetchOptions:{mode:c("0xa","cltS"),credentials:c("0x1b","PYJb")},plugins:[new l({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),d[c("0x18","Y^Bs")](/.*baidu\.com.*/,new x),d[c("0x18","Y^Bs")](/https:\/\/ip\..*/,new x),d[c("0x11","Y7n9")](/.*jq\.mhuig\.top.*/,new x),d[c("0x17","&Rqe")](/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new m),d[c("0x13","m&is")](/.*\.(css|js)/,new m),d[c("0x9","EcaV")]("/jquery.js",new m),d[c("0x8","j9!x")](new u({networkTimeoutSeconds:3}));