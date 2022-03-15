importScripts("/lib/workbox-cdn/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"/lib/workbox-cdn/workbox/"});const{core:core,precaching:precaching,routing:routing,strategies:strategies,expiration:expiration,cacheableResponse:cacheableResponse,backgroundSync:backgroundSync}=workbox,{CacheFirst:CacheFirst,NetworkFirst:NetworkFirst,NetworkOnly:NetworkOnly,StaleWhileRevalidate:StaleWhileRevalidate}=strategies,{ExpirationPlugin:ExpirationPlugin}=expiration,{CacheableResponsePlugin:CacheableResponsePlugin}=cacheableResponse,cacheSuffixVersion="-000115",maxEntries=100;self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(!e.includes("-000115"))return caches.delete(e)}))))))})),core.setCacheNameDetails({prefix:"mhuig-blog",suffix:"-000115"}),core.skipWaiting(),core.clientsClaim(),precaching.cleanupOutdatedCaches(),precaching.precacheAndRoute([{url:"/css/style.css",revision:null},{url:"/js/app.js",revision:null},{url:"/js/search/hexo.js",revision:null}]),routing.registerRoute(/.*nocache.*/,new NetworkOnly),routing.registerRoute(/.*cdn\.jsdelivr\.net/,new CacheFirst({cacheName:"static-immutable-000115",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*cdnjs\.cloudflare\.com/,new CacheFirst({cacheName:"static-immutable-000115",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*npm\.elemecdn\.com/,new CacheFirst({cacheName:"static-immutable-000115",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*static\.mhuig\.top/,new CacheFirst({cacheName:"static-immutable-000115",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*m7\.music\.126\.net/,new CacheFirst({cacheName:"static-immutable-000115",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*stream\.qqmusic\.qq\.com/,new CacheFirst({cacheName:"static-immutable-000115",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/.*api\.mhuig\.top.*/,new NetworkOnly),routing.registerRoute(/.*captcha.*/,new NetworkOnly),routing.registerRoute(/.*token.*/,new NetworkOnly),routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new StaleWhileRevalidate),routing.registerRoute(/.*\.(css|js)/,new StaleWhileRevalidate),routing.registerRoute("/jquery.js",new StaleWhileRevalidate),routing.setDefaultHandler(new NetworkFirst({networkTimeoutSeconds:3}));