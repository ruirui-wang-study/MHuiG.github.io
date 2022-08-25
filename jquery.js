"use strict";function _createForOfIteratorHelper(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==t["return"]||t["return"]()}finally{if(i)throw o}}}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},r=Object.prototype,t=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{i({},"")}catch(A){i=function(e,r,t){return e[r]=t}}function u(e,r,t,n){var a=r&&r.prototype instanceof p?r:p,o=Object.create(a.prototype),c=new k(n||[]);return o._invoke=function(e,r,t){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(t.method=a,t.arg=o;;){var c=t.delegate;if(c){var i=w(c,t);if(i){if(i===l)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var u=s(e,r,t);if("normal"===u.type){if(n=t.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(n="completed",t.method="throw",t.arg=u.arg)}}}(e,t,c),o}function s(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(A){return{type:"throw",arg:A}}}e.wrap=u;var l={};function p(){}function f(){}function h(){}var g={};i(g,a,(function(){return this}));var m=Object.getPrototypeOf,d=m&&m(m(C([])));d&&d!==r&&t.call(d,a)&&(g=d);var y=h.prototype=p.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(r){i(e,r,(function(e){return this._invoke(r,e)}))}))}function v(e,r){function n(a,o,c,i){var u=s(e[a],e,o);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==_typeof(p)&&t.call(p,"__await")?r.resolve(p.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):r.resolve(p).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,i)}))}i(u.arg)}var a;this._invoke=function(e,t){function o(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(o,o):o()}}function w(e,r){var t=e.iterator[r.method];if(undefined===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=undefined,w(e,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(t,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var a=n.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=undefined),r.delegate=null,l):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function _(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function x(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function C(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(t.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=undefined,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:undefined,done:!0}}return f.prototype=h,i(y,"constructor",h),i(h,"constructor",f),f.displayName=i(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(v.prototype),i(v.prototype,o,(function(){return this})),e.AsyncIterator=v,e.async=function(r,t,n,a,o){void 0===o&&(o=Promise);var c=new v(u(r,t,n,a),o);return e.isGeneratorFunction(t)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(y),i(y,c,"Generator"),i(y,a,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function n(){for(;r.length;){var t=r.pop();if(t in e)return n.value=t,n.done=!1,n}return n.done=!0,n}},e.values=C,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(t,n){return c.type="throw",c.arg=e,r.next=t,n&&(r.method="next",r.arg=undefined),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=t.call(o,"catchLoc"),u=t.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&t.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=r,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(c)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),l},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),x(t),l}},"catch":function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var a=n.arg;x(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:C(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=undefined),l}},e}function asyncGeneratorStep(e,r,t,n,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void t(s)}i.done?r(u):Promise.resolve(u).then(n,a)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function c(e){asyncGeneratorStep(o,n,a,c,i,"next",e)}function i(e){asyncGeneratorStep(o,n,a,c,i,"throw",e)}c(undefined)}))}}function _asyncIterator(e){var r,t,n,a=2;for("undefined"!=typeof Symbol&&(t=Symbol.asyncIterator,n=Symbol.iterator);a--;){if(t&&null!=(r=e[t]))return r.call(e);if(n&&null!=(r=e[n]))return new AsyncFromSyncIterator(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(e){function r(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var r=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:r}}))}return AsyncFromSyncIterator=function(e){this.s=e,this.n=e.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},"return":function(e){var t=this.s["return"];return void 0===t?Promise.resolve({value:e,done:!0}):r(t.apply(this.s,arguments))},"throw":function(e){var t=this.s["return"];return void 0===t?Promise.reject(e):r(t.apply(this.s,arguments))}},new AsyncFromSyncIterator(e)}var prefix="MHuiG-Blog",cacheSuffixVersion="00000016-::cacheSuffixVersion::",CACHE_NAME=prefix+"-v"+cacheSuffixVersion,PreCachlist=["/css/style.css","/js/app.js","/js/search/hexo.js"],npm_package_name="@mhg/blog",npm_package_version="1.0.1661391707522",status_npm_mirror=!0,status_npm_tarball=!0,debug=!1;"localhost"==location.hostname&&(debug=!0)&&(status_npm_mirror=!1);var tarball="https://registry.npmjs.org/@mhg/blog/-/blog-".concat(npm_package_version,".tgz"),cors_anywhere="https://cors.mhuig.top?url=",uuid=null,setUUID=function(e){return uuid||(uuid=e),uuid},handleFetch=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){var t,n;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.request,n=e.request.url,"GET"===t.method){r.next=4;break}return r.abrupt("return",fetch(t));case 4:if(!/nocache/.test(n)){r.next=8;break}return r.abrupt("return",NetworkOnly(e));case 8:if(!/cdn-cgi/.test(n)){r.next=12;break}return r.abrupt("return",NetworkOnly(e));case 12:if(!/vues/.test(n)){r.next=16;break}return r.abrupt("return",NetworkOnly(e));case 16:if(!/api\.mhuig\.top/.test(n)){r.next=20;break}return r.abrupt("return",NetworkOnly(e));case 20:if(!/captcha/.test(n)){r.next=24;break}return r.abrupt("return",NetworkOnly(e));case 24:if(!/token/.test(n)){r.next=28;break}return r.abrupt("return",NetworkOnly(e));case 28:if(!/@latest/.test(n)){r.next=32;break}return r.abrupt("return",CacheFirst(e));case 32:if(!/cdnjs\.cloudflare\.com/.test(n)){r.next=36;break}return r.abrupt("return",CacheAlways(e));case 36:if(!/music\.126\.net/.test(n)){r.next=40;break}return r.abrupt("return",CacheAlways(e));case 40:if(!/qqmusic\.qq\.com/.test(n)){r.next=44;break}return r.abrupt("return",CacheAlways(e));case 44:if(!/jsdelivr\.net/.test(n)){r.next=48;break}return r.abrupt("return",CacheAlways(e));case 48:if(!/static\.mhuig\.top/.test(n)){r.next=52;break}return r.abrupt("return",CacheAlways(e));case 52:if(!/npm\.elemecdn\.com/.test(n)){r.next=56;break}return r.abrupt("return",CacheAlways(e));case 56:if(!/unpkg\.com/.test(n)){r.next=60;break}return r.abrupt("return",CacheAlways(e));case 60:if(!/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)$/.test(n)){r.next=64;break}return r.abrupt("return",CacheAlways(e));case 64:if(!/.*\.(css|js)$/.test(n)){r.next=68;break}return r.abrupt("return",CacheAlways(e));case 68:return r.abrupt("return",CacheFirst(e));case 69:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),cdn={gh:{jsdelivr:"https://cdn.jsdelivr.net/gh",fastly:"https://fastly.jsdelivr.net/gh",gcore:"https://gcore.jsdelivr.net/gh",testingcf:"https://testingcf.jsdelivr.net/gh",test1:"https://test1.jsdelivr.net/gh",mhuig:"https://static.mhuig.top/gh"},combine:{jsdelivr:"https://cdn.jsdelivr.net/combine",fastly:"https://fastly.jsdelivr.net/combine",gcore:"https://gcore.jsdelivr.net/combine",testingcf:"https://testingcf.jsdelivr.net/combine",test1:"https://test1.jsdelivr.net/combine"},npm:{jsdelivr:"https://cdn.jsdelivr.net/npm",fastly:"https://fastly.jsdelivr.net/npm",gcore:"https://gcore.jsdelivr.net/npm",testingcf:"https://testingcf.jsdelivr.net/npm",test1:"https://test1.jsdelivr.net/npm",unpkg:"https://unpkg.com",mhuig:"https://static.mhuig.top/npm"},cdnjs:{cdnjs:"https://cdnjs.cloudflare.com/ajax/libs",baomitu:"https://lib.baomitu.com",bootcdn:"https://cdn.bootcdn.net/ajax/libs",bytedance:"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M",mhuig:"https://static.mhuig.top/ajax/libs"}},cdn_match_list=[];for(var type in cdn)for(var key in cdn[type])cdn_match_list.push({type,key:cdn[type][key]});self.db={read:function(e,r){return r||(r={type:"text"}),new Promise((function(r,t){caches.open(prefix).then((function(t){t.match(new Request("https://LOCALCACHE/".concat(encodeURIComponent(e)))).then((function(e){e||r(null),e.text().then((function(e){return r(e)}))}))["catch"]((function(){r(null)}))}))}))},write:function(e,r){return new Promise((function(t,n){caches.open(prefix).then((function(n){n.put(new Request("https://LOCALCACHE/".concat(encodeURIComponent(e))),new Response(r)),t()}))["catch"]((function(){n()}))}))}};var _console=console,color={black:"#000000",red:"#FF0000",green:"#008000",yellow:"#FFFF00",blue:"#0000FF",magenta:"#FF00FF",cyan:"#00FFFF",white:"#FFFFFF"},add=function(){for(var e=[[]],r=0;r<arguments.length;r++){var t=r<0||arguments.length<=r?undefined:arguments[r],n=_toArray(t),a=n[0],o=n.slice(1);e[0]+=a,e=e.concat(o)}return e},createlog=function(e){return function(){for(var r="error"==e?_console[e]:_console.log,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];r.apply(void 0,n)}},creategroup=function(e){return function(){for(var e=_console.groupCollapsed,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];e.apply(void 0,t)}},colorUtils={bold:function(e){if("string"==typeof e||"number"==typeof e)return"".concat(e,";font-weight: bold;");for(var r=1;r<e.length;r++)e[r]+=";font-weight: bold;";return e}},colorHash={log:"black",wait:"cyan",error:"red",warn:"yellow",ready:"green",info:"blue",event:"magenta"},createChalk=function(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if("object"!==_typeof(t[0])){var a=t;"string"!=typeof t&&"number"!=typeof t||(a=colorUtils[colorHash[e]](t)),createlog(e).apply(void 0,_toConsumableArray(add(colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] "))),a)))}else createlog(e).apply(void 0,_toConsumableArray(add.apply(void 0,[colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] ")))].concat(t))))}},createChalkBg=function(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if("object"!==_typeof(t[0])){var a=t;"string"!=typeof t&&"number"!=typeof t||(a=colorUtils[colorHash[e]](t)),createlog(e).apply(void 0,_toConsumableArray(add(colorUtils.bold(colorUtils["bg".concat(firstToUpperCase(colorHash[e]))]("[".concat(firstToUpperCase(e),"] "))),a)))}else createlog(e).apply(void 0,_toConsumableArray(add.apply(void 0,[colorUtils.bold(colorUtils["bg".concat(firstToUpperCase(colorHash[e]))]("[".concat(firstToUpperCase(e),"] ")))].concat(t))))}},createChalkGroup=function(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if("object"!==_typeof(t[0])){var a=t;"string"!=typeof t&&"number"!=typeof t||(a=colorUtils[colorHash[e]](t)),creategroup(e).apply(void 0,_toConsumableArray(add(colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] "))),a)))}else creategroup(e).apply(void 0,_toConsumableArray(add.apply(void 0,[colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] ")))].concat(t))))}},chalk={group:{end:_console.groupEnd},bg:{}};Object.keys(colorHash).forEach((function(e){chalk[e]=createChalk(e),chalk.group[e]=createChalkGroup(e),chalk.bg[e]=createChalkBg(e)}));var firstToUpperCase=function(e){return e.toLowerCase().replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))};Object.keys(color).forEach((function(e){colorUtils[e]=function(r){if("string"==typeof r||"number"==typeof r)return["%c".concat(r),"color:".concat(color[e])];for(var t=1;t<r.length;t++)r[t]+=";color:".concat(color[e]);return r},colorUtils["bg".concat(firstToUpperCase(e))]=function(r){if("string"==typeof r||"number"==typeof r)return["%c".concat(r),"padding: 2px 4px; border-radius: 3px; color: ".concat("white"===e?"#000":"#fff","; font-weight: bold; background:").concat(color[e],";")];for(var t=1;t<r.length;t++)r[t]+=";padding: 2px 4px; border-radius: 3px; font-weight: bold; background:".concat(color[e],";");return r}})),self.logger=_objectSpread(_objectSpread({add},chalk),colorUtils),debug||(logger={log:function(){},wait:function(){},error:function(){},warn:function(){},ready:function(){},info:function(){},event:function(){},group:{log:function(){},wait:function(){},error:function(){},warn:function(){},ready:function(){},info:function(){},event:function(){},end:function(){}},bg:{log:function(){},wait:function(){},error:function(){},warn:function(){},ready:function(){},info:function(){},event:function(){}}},console.log=function(){});var generate_uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var r=16*Math.random()|0;return("x"==e?r:3&r|8).toString(16)}))},compareVersion=function(e,r){for(var t=e.split("."),n=r.split("."),a=Math.max(t.length,n.length);t.length<a;)t.push("0");for(;n.length<a;)n.push("0");for(var o=0;o<a;o++){var c=parseInt(t[o]),i=parseInt(n[o]);if(c>i)return e;if(c<i)return r}return e},mirrors=["https://registry.npmjs.org/".concat(npm_package_name,"/latest"),"https://registry.npmmirror.com/".concat(npm_package_name,"/latest"),"https://mirrors.cloud.tencent.com/npm/".concat(npm_package_name,"/latest")],getLocalVersion=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,db.read("npm_package_version");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=npm_package_version;case 5:npm_package_version=e.t0,logger.bg.info("Local Version: ".concat(npm_package_name,"@").concat(npm_package_version));case 7:case"end":return e.stop()}}),r)})));return function(){return e.apply(this,arguments)}}(),mirror_time=0,setNewestVersion=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(){var e;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(status_npm_mirror){r.next=2;break}return r.abrupt("return");case 2:return e=null,e=mirror_time%(mirrors.length+1)?fetch(mirrors[mirror_time%(mirrors.length+1)-1]):fetchAny(mirrors),mirror_time++,r.abrupt("return",e.then((function(e){return e.json()})).then(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){var t;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.version){r.next=2;break}throw"No Version Found!";case 2:return r.next=4,db.read("npm_package_version");case 4:if(r.t0=r.sent,r.t0){r.next=7;break}r.t0=npm_package_version;case 7:if(t=r.t0,npm_package_version=compareVersion(e.version,t),logger.bg.ready("".concat(npm_package_name,"@").concat(npm_package_version)),t===npm_package_version){r.next=21;break}return r.next=13,db.write("status_npm_mirror","true");case 13:return r.next=15,db.write("status_npm_tarball","false");case 15:return tarball=e.dist.tarball,r.next=18,db.write("tarball",tarball);case 18:logger.bg.ready("[CacheAlways] NPM Mirror Enabled!"),caches["delete"](CACHE_NAME+"-npmtarball"),logger.ready("deleted cache npmtarball");case 21:return r.next=23,getNpmTarball();case 23:return r.next=25,db.write("npm_package_version",npm_package_version);case 25:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}())["catch"]((function(e){logger.error("[Set Newest Version] "+(e.stack||e))})));case 6:case"end":return r.stop()}}),r)})));return function(){return e.apply(this,arguments)}}();setInterval(_asyncToGenerator(_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setNewestVersion();case 2:case"end":return e.stop()}}),e)}))),6e4),setTimeout(_asyncToGenerator(_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setNewestVersion();case 2:case"end":return e.stop()}}),r)}))),5e3);var installFunction=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getLocalVersion();case 2:return e.abrupt("return",caches.open(CACHE_NAME+"-precache").then(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){var t;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,db.read("uuid");case 2:if(r.sent){r.next=5;break}return r.next=5,db.write("uuid",setUUID(generate_uuid()));case 5:return r.next=7,db.read("status_npm_mirror");case 7:if(r.sent){r.next=10;break}return r.next=10,db.write("status_npm_mirror",status_npm_mirror);case 10:return r.next=12,db.read("status_npm_tarball");case 12:if(r.sent){r.next=15;break}return r.next=15,db.write("status_npm_tarball","false");case 15:return r.next=17,db.read("tarball");case 17:if(!r.sent){r.next=21;break}return r.next=20,db.read("tarball");case 20:tarball=r.sent;case 21:return r.next=23,db.write("status_downloading_npm_tarball","false");case 23:return r.next=25,db.write("status_worker_channel","false");case 25:PreCachlist.length&&(logger.group.event("Precaching ".concat(PreCachlist.length," files.")),t=0,PreCachlist.forEach((function(r){e.match(new Request(r)).then((function(n){n?logger.ready("Precaching ".concat(r)):(logger.wait("Precaching ".concat(r)),e.add(new Request(r))),++t===PreCachlist.length&&(logger.ready("Precached ".concat(PreCachlist.length," files.")),logger.group.end())}))})));case 26:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}())["catch"]((function(e){logger.error("[install] "+(e.stack||e))})));case 3:case"end":return e.stop()}}),r)})));return function(){return e.apply(this,arguments)}}();self.addEventListener("install",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:logger.bg.event("service worker install event listening");try{self.skipWaiting(),e.waitUntil(installFunction()),logger.bg.ready("service worker install sucess!")}catch(t){logger.error("[install] "+(t.stack||t))}case 2:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}()),self.addEventListener("activate",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return logger.bg.event("service worker activate event listening"),r.prev=1,e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){e.includes(cacheSuffixVersion)||prefix===e||(caches["delete"](e),logger.bg.ready("Deleted Outdated Cache: "+e))})))}))["catch"]((function(e){logger.error("[activate] "+(e.stack||e))}))),r.next=5,self.clients.claim();case 5:logger.bg.ready("service worker activate sucess!"),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),logger.error("[activate] "+(r.t0.stack||r.t0));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()),self.addEventListener("fetch",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.respondWith(handleFetch(e)["catch"]((function(r){logger.error("[fetch] "+e.request.url+"\n[error] "+(r.stack||r))})));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}());var NetworkOnly=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return logger.group.info("NetworkOnly: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),logger.group.end(),r.abrupt("return",fetch(e.request));case 4:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),CacheFirst=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",caches.match(e.request).then(function(){var r=_asyncToGenerator(_regeneratorRuntime().mark((function t(r){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(logger.group.info("CacheFirst: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),!r){t.next=21;break}return logger.group.ready("Cache Hit"),console.log(r),logger.group.end(),logger.group.end(),t.next=9,db.read("status_npm_mirror");case 9:if(t.t1=t.sent,t.t0="false"===t.t1,!t.t0){t.next=13;break}t.t0=new RegExp(location.origin).test(e.request.url);case 13:if(!t.t0){t.next=17;break}logger.ready("[CacheAlways] NPM Tarball Source Enabled! NPM Mirror Disabled!"),t.next=18;break;case 17:e.waitUntil(CacheRuntime(e.request));case 18:return t.abrupt("return",r);case 21:return logger.warn("Cache Miss"),logger.group.end(),t.abrupt("return",CacheRuntime(e.request));case 24:case"end":return t.stop()}}),t)})));return function(e){return r.apply(this,arguments)}}()));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),CacheAlways=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",caches.match(e.request).then((function(r){return logger.group.info("CacheAlways: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),r?(logger.group.ready("Cache Hit"),console.log(r),logger.group.end(),logger.group.end(),r):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))})));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),matchCache=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",caches.match(e.request).then((function(r){return logger.group.info("service worker fetch: "+e.request.url),r?(logger.group.ready("Cache Hit"),console.log(r),logger.group.end(),logger.group.end(),r):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))})));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}();function CacheRuntime(e){return _CacheRuntime.apply(this,arguments)}function _CacheRuntime(){return(_CacheRuntime=_asyncToGenerator(_regeneratorRuntime().mark((function e(r){var t,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL(r.url),e.next=3,matchCDN(r);case 3:if(n=e.sent){e.next=8;break}return e.next=7,fetch(r)["catch"]((function(){return null}));case 7:n=e.sent;case 8:if(logger.group.event("Cache Runtime ".concat(t.pathname)),logger.wait("Caching url: ".concat(r.url)),console.log(n),"GET"!==r.method||"https:"!=t.protocol){e.next=19;break}return e.next=14,caches.open(CACHE_NAME+"-runtime");case 14:e.sent.put(r,n.clone())["catch"]((function(e){logger.error("[Cache Runtime] "+(e.stack||e)),"QuotaExceededError"===e.name&&(caches["delete"](CACHE_NAME+"-runtime"),logger.ready("deleted cache"))})),logger.ready("Cached url: ".concat(r.url)),e.next=20;break;case 19:logger.warn("Not Cached url: ".concat(r.url));case 20:return logger.group.end(),e.abrupt("return",n);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var matchCDN=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){var t,n,a,o,c,i,u,s,l,p,f,h,g,m,d,y,b,v,w;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=navigator,n=t.connection||t.mozConnection||t.webkitConnection||{},a=n.saveData,o=n.effectiveType,!a&&!/2g/.test(o)){r.next=5;break}return logger.warn("Slow Network: Transparent Proxy"),r.abrupt("return",fetch(e));case 5:if(c=[],i=new URL(e.url),u=i.pathname.split("/")[1],s="",r.t1=status_npm_mirror,!r.t1){r.next=15;break}return r.next=13,db.read("status_npm_mirror");case 13:r.t2=r.sent,r.t1="true"===r.t2;case 15:if(r.t0=r.t1,!r.t0){r.next=18;break}r.t0=new RegExp(location.origin).test(e.url);case 18:if(!r.t0){r.next=22;break}for(l in logger.group.ready("Match NPM Mirror: "+e.url),cdn.npm)p=cdn.npm[l]+"/"+npm_package_name+"@"+npm_package_version+e.url.replace(location.origin,""),p=fullPath(fullPath(p)),console.log(p),c.push(p);logger.group.end();case 22:if(c.length){r.next=43;break}f=_createForOfIteratorHelper(cdn_match_list),r.prev=24,f.s();case 26:if((h=f.n()).done){r.next=34;break}if(g=h.value,!new RegExp(g.key).test(e.url)){r.next=32;break}return u=g.type,s=new RegExp(g.key).exec(e.url)[0],r.abrupt("break",34);case 32:r.next=26;break;case 34:r.next=39;break;case 36:r.prev=36,r.t3=r["catch"](24),f.e(r.t3);case 39:return r.prev=39,f.f(),r.finish(39);case 42:for(m in cdn)if(m===u){for(d in logger.group.ready("Match CDN ".concat(u,": ")+e.url),cdn[m])y=cdn[m][d]+e.url.replace(s,""),console.log(y),c.push(y);logger.group.end()}case 43:return(b=c.length?fetchAny(c):fetch(e))&&status_npm_mirror&&new RegExp(location.origin).test(e.url)&&(v=fullPath(fullPath(e.url)).split(".").pop(),w=getContentType(v),b=b.then((function(e){return e.arrayBuffer()})).then((function(e){return new Response(e,{headers:{"Content-Type":w}})}))["catch"]((function(){return null}))),r.abrupt("return",b);case 46:case"end":return r.stop()}}),r,null,[[24,36,39,42]])})));return function(r){return e.apply(this,arguments)}}(),fullPath=function(e){if((e=e.split("?")[0].split("#")[0]).endsWith("/"))e+="index.html";else{var r=e.split("/");-1===r[r.length-1].indexOf(".")&&(e+=".html")}return e};function progress(e){return _progress.apply(this,arguments)}function _progress(){return(_progress=_asyncToGenerator(_regeneratorRuntime().mark((function e(r){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Response,e.next=3,r.arrayBuffer();case 3:return e.t1=e.sent,e.t2={status:r.status,headers:r.headers},e.abrupt("return",new e.t0(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function createPromiseAny(){Promise.any=function(e){return new Promise((function(r,t){var n=(e=Array.isArray(e)?e:[]).length,a=[];if(0===n)return t(new AggregateError("All promises were rejected"));e.forEach((function(e){e instanceof Promise?e.then((function(e){return r(e)}),(function(e){n--,a.push(e),0===n&&t(new AggregateError(a))})):t(e)}))}))}}function fetchAny(e){var r=new AbortController,t=r.signal,n=e.map((function(e){return new Promise((function(n,a){fetch(e,{signal:t}).then(progress).then((function(e){var t=e.clone();200!==t.status&&a(null),r.abort(),n(t)}))["catch"]((function(){return a(null)}))}))}));return Promise.any||createPromiseAny(),Promise.any(n).then((function(e){return e}))["catch"]((function(){return null}))}var getContentType=function(e){switch(e){case"js":return"text/javascript";case"html":return"text/html";case"css":return"text/css";case"json":case"map":return"application/json";case"webp":return"image/webp";case"jpg":case"jpeg":return"image/jpeg";case"png":return"image/png";case"gif":return"image/gif";case"xml":case"xsl":return"text/xml";case"webmanifest":return"text/webmanifest";case"bcmap":case"wbmp":return"image/vnd.wap.wbmp";case"bmp":return"image/bmp";case"ico":return"image/vnd.microsoft.icon";case"tiff":case"tif":return"image/tiff";case"svg":case"svgz":return"image/svg+xml";case"woff":return"application/font-woff";case"woff2":return"application/font-woff2";case"ttf":return"application/font-ttf";case"otf":return"application/font-otf";case"eot":return"application/vnd.ms-fontobject";case"zip":return"application/zip";case"tar":return"application/x-tar";case"gz":return"application/gzip";case"bz2":return"application/x-bzip2";case"rar":return"application/x-rar-compressed";case"7z":return"application/x-7z-compressed";case"doc":return"application/msword";case"docx":return"application/vnd.openxmlformats-officedocument.wordprocessingml.document";case"xls":return"application/vnd.ms-excel";case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"ppt":return"application/vnd.ms-powerpoint";case"pptx":return"application/vnd.openxmlformats-officedocument.presentationml.presentation";case"pdf":return"application/pdf";case"txt":default:return"text/plain";case"rtf":return"application/rtf";case"mp3":return"audio/mpeg";case"wav":return"audio/x-wav";case"ogg":return"audio/ogg";case"mp4":return"video/mp4";case"m4v":return"video/x-m4v";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"wmv":return"video/x-ms-wmv";case"flv":return"video/x-flv";case"swf":return"application/x-shockwave-flash";case"mpg":case"mpeg":case"mpe":case"mpv":case"m2v":return"video/mpeg";case"m4a":return"audio/mp4";case"aac":return"audio/aac";case"m3u":return"audio/x-mpegurl";case"m3u8":return"application/vnd.apple.mpegurl";case"pls":return"audio/x-scpls";case"cue":return"application/x-cue";case"wma":return"audio/x-ms-wma";case"flac":return"audio/flac";case"aif":case"aiff":case"aifc":return"audio/x-aiff";case"au":case"snd":return"audio/basic";case"mid":case"midi":case"kar":return"audio/midi"}},putNpmSource=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e,t){var n,a,o,c;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.name.replace(/^package/,location.origin),a=n.split(".").pop(),o=n.replace(/index.html$/,"").replace(/.html$/,""),c=getContentType(a),e.put(new Request(o),new Response(t.buffer,{headers:{"Content-Type":c}}));case 5:case"end":return r.stop()}}),r)})));return function(r,t){return e.apply(this,arguments)}}();importScripts("/untgz.js");var getNpmTarball=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(){var e,t;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(status_npm_tarball){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,db.read("status_npm_tarball");case 4:if(r.t0=r.sent,"true"!==r.t0){r.next=7;break}return r.abrupt("return");case 7:if(tarball){r.next=9;break}return r.abrupt("return");case 9:return r.next=11,db.read("status_downloading_npm_tarball");case 11:if(r.t1=r.sent,"true"!==r.t1){r.next=14;break}return r.abrupt("return");case 14:return r.next=16,db.write("status_downloading_npm_tarball","true");case 16:logger.wait("Downloading NPM Source: "+tarball),e=tarball.replace("https://registry.npmmirror.com/","https://registry.npmjs.org/"),t=cors_anywhere+e,caches.open(CACHE_NAME+"-npmtarball").then(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,FetchUntgz(t).then(function(){var r=_asyncToGenerator(_regeneratorRuntime().mark((function t(r){var n,a,o,c,i,u;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,a=!1,t.prev=2,c=_asyncIterator(r);case 4:return t.next=6,c.next();case 6:if(!(n=!(i=t.sent).done)){t.next=14;break}return u=i.value,console.log(u),t.next=11,putNpmSource(e,u);case 11:n=!1,t.next=4;break;case 14:t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](2),a=!0,o=t.t0;case 20:if(t.prev=20,t.prev=21,!n||null==c["return"]){t.next=25;break}return t.next=25,c["return"]();case 25:if(t.prev=25,!a){t.next=28;break}throw o;case 28:return t.finish(25);case 29:return t.finish(20);case 30:return t.next=32,db.write("status_npm_mirror","false");case 32:return t.next=34,db.write("status_npm_tarball","true");case 34:return t.next=36,db.write("status_downloading_npm_tarball","false");case 36:logger.bg.ready("[CacheAlways] NPM Mirror Disabled!");case 37:case"end":return t.stop()}}),t,null,[[2,16,20,30],[21,,25,29]])})));return function(e){return r.apply(this,arguments)}}());case 2:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}())["catch"](function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,db.write("status_downloading_npm_tarball","false");case 2:logger.error("[Cache Npm Tarball Source] "+(e.stack||e));case 3:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}());case 20:case"end":return r.stop()}}),r)})));return function(){return e.apply(this,arguments)}}();
//# sourceMappingURL=maps/jquery.js.map
