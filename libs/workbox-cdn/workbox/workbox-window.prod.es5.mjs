try{self["workbox:window:5.1.3"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var i=new MessageChannel;i.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[i.port2])}))}function t(n,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}try{self["workbox:core:5.1.3"]&&_()}catch(n){}var r=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function i(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var e=function(n,t){this.type=n,Object.assign(this,t)};function o(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function u(){}var a=function(u){var a,f;function s(n,t){var a,c;return void 0===t&&(t={}),(a=u.call(this)||this).t={},a.i=0,a.o=new r,a.u=new r,a.s=new r,a.v=0,a.h=new Set,a.l=function(){var n=a.g,t=n.installing;a.i>0||!i(t.scriptURL,a.m)||performance.now()>a.v+6e4?(a.P=t,n.removeEventListener("updatefound",a.l)):(a.p=t,a.h.add(t),a.o.resolve(t)),++a.i,t.addEventListener("statechange",a.k)},a.k=function(n){var t=a.g,r=n.target,i=r.state,o=r===a.P,u=o?"external":"",c={sw:r,originalEvent:n};!o&&a.j&&(c.isUpdate=!0),a.dispatchEvent(new e(u+i,c)),"installed"===i?a.O=self.setTimeout((function(){"installed"===i&&t.waiting===r&&a.dispatchEvent(new e(u+"waiting",c))}),200):"activating"===i&&(clearTimeout(a.O),o||a.u.resolve(r))},a.R=function(n){var t=a.p;t===navigator.serviceWorker.controller&&(a.dispatchEvent(new e("controlling",{sw:t,originalEvent:n,isUpdate:a.j})),a.s.resolve(t))},a.S=(c=function(n){var t=n.data,r=n.source;return o(a.getSW(),(function(){a.h.has(r)&&a.dispatchEvent(new e("message",{data:t,sw:r,originalEvent:n}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),a.m=n,a.t=t,navigator.serviceWorker.addEventListener("message",a.S),a}f=u,(a=s).prototype=Object.create(f.prototype),a.prototype.constructor=a,a.__proto__=f;var v,h,w,l=s.prototype;return l.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var u=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return c(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return u.j=Boolean(navigator.serviceWorker.controller),u.U=u.B(),o(u.L(),(function(n){u.g=n,u.U&&(u.p=u.U,u.u.resolve(u.U),u.s.resolve(u.U),u.U.addEventListener("statechange",u.k,{once:!0}));var t=u.g.waiting;return t&&i(t.scriptURL,u.m)&&(u.p=t,Promise.resolve().then((function(){u.dispatchEvent(new e("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),u.p&&(u.o.resolve(u.p),u.h.add(u.p)),u.g.addEventListener("updatefound",u.l),navigator.serviceWorker.addEventListener("controllerchange",u.R,{once:!0}),u.g}))}))}catch(n){return Promise.reject(n)}},l.update=function(){try{return this.g?c(this.g.update()):void 0}catch(n){return Promise.reject(n)}},l.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(n){return Promise.reject(n)}},l.messageSW=function(t){try{return o(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},l.B=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.m)?n:void 0},l.L=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return o(navigator.serviceWorker.register(n.m,n.t),(function(t){return n.v=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},v=s,(h=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&t(v.prototype,h),w&&t(v,w),s}(function(){function n(){this.M=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this._(n).add(t)},t.removeEventListener=function(n,t){this._(n).delete(t)},t.dispatchEvent=function(n){n.target=this;var t=this._(n.type),r=Array.isArray(t),i=0;for(t=r?t:t[Symbol.iterator]();;){var e;if(r){if(i>=t.length)break;e=t[i++]}else{if((i=t.next()).done)break;e=i.value}e(n)}},t._=function(n){return this.M.has(n)||this.M.set(n,new Set),this.M.get(n)},n}());function c(n,t){if(!t)return n&&n.then?n.then(u):Promise.resolve()}export{a as Workbox,n as messageSW};

