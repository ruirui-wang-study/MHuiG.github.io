"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(A){l=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var r=e&&e.prototype instanceof d?e:d,i=Object.create(r.prototype),a=new C(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return x()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var l=w(a,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=c(t,e,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var u={};function d(){}function f(){}function m(){}var h={};l(h,r,(function(){return this}));var v=Object.getPrototypeOf,p=v&&v(v(_([])));p&&p!==e&&n.call(p,r)&&(h=p);var g=m.prototype=d.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(r,i,a,l){var s=c(t[r],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==_typeof(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,l)}),(function(t){o("throw",t,a,l)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,l)}))}l(s.arg)}var r;this._invoke=function(t,n){function i(){return new e((function(e,r){o(t,n,e,r)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(undefined===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=undefined,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var o=c(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,u;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,u):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=undefined,e.done=!0,e};return i.next=i}}return{next:x}}function x(){return{value:undefined,done:!0}}return f.prototype=m,l(g,"constructor",m),l(m,"constructor",f),f.displayName=l(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(b.prototype),l(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new b(s(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),l(g,a,"Generator"),l(g,r,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function o(){for(;e.length;){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},t.values=_,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=undefined),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),u}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=undefined),u}},t}function asyncGeneratorStep(t,e,n,o,r,i,a){try{var l=t[i](a),s=l.value}catch(c){return void n(c)}l.done?e(s):Promise.resolve(s).then(o,r)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){asyncGeneratorStep(i,o,r,a,l,"next",t)}function l(t){asyncGeneratorStep(i,o,r,a,l,"throw",t)}a(undefined)}))}}function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(s){l=!0,r=s}finally{try{a||null==n["return"]||n["return"]()}finally{if(l)throw r}}return i}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _createForOfIteratorHelper(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,i=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(l)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}document.addEventListener("DOMContentLoaded",(function(){volantis.requestAnimationFrame((function(){VolantisApp.init(),VolantisApp.subscribe(),VolantisFancyBox.init(),highlightKeyWords.startFromURL(),locationHash(),volantis.pjax.push((function(){VolantisApp.pjaxReload(),VolantisFancyBox.init(),sessionStorage.setItem("domTitle",document.title),highlightKeyWords.startFromURL()}),"app.js"),volantis.pjax.send((function(){volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js")}))}));var locationHash=function(){if(window.location.hash){var t=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),e=document.getElementById(t);e&&setTimeout((function(){window.location.hash.startsWith("#fn")?volantis.scroll.to(e,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant",observer:!0}):volantis.scroll.to(e,{addTop:5,behavior:"instant",observer:!0})}),1e3)}};Object.freeze(locationHash);var VolantisApp=function(){var t={},e=80;t.init=function(){volantis.dom.header&&(e=volantis.dom.header.clientHeight+16),window.onresize=function(){document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(t.setGlobalHeaderMenuEvent(),t.setHeader(),t.setHeaderSearch())},volantis.scroll.push(t.scrollEventCallBack,"scrollEventCallBack")},t.event=function(){var e;if(null===(e=volantis.dom.$(document.getElementById("scroll-down")))||void 0===e||e.on("click",(function(){t.scrolltoElement(volantis.dom.bodyAnchor)})),volantis.GLOBAL_CONFIG.sidebar.for_page.includes("webinfo")||volantis.GLOBAL_CONFIG.sidebar.for_post.includes("webinfo")){var n=volantis.GLOBAL_CONFIG.sidebar.webinfo.lastupd;document.getElementById("last-update-show")&&n.enable&&n.friendlyShow&&(document.getElementById("last-update-show").innerHTML=t.utilTimeAgo(volantis.GLOBAL_CONFIG.lastupdate))}if(document.getElementById("webinfo-runtime-count")){var o=new Date(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.data),r=(new Date).getTime()-o.getTime(),i=Math.floor(r/864e5);document.getElementById("webinfo-runtime-count").innerHTML="".concat(i," ").concat(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.unit)}document.body.oncopy=function(){t.messageCopyright()}},t.restData=function(){e=volantis.dom.header?volantis.dom.header.clientHeight+16:80},t.setIsMobile=function(){document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},t.scrolltoElement=function(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:e;volantis.scroll.to(t,{top:t.offsetTop-n})},t.scrollEventCallBack=function(){var t=volantis.dom.bodyAnchor.offsetTop-e,n=volantis.scroll.getScrollTop();volantis.dom.topBtn&&(n>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),volantis.scroll.del>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl")),volantis.dom.header&&(n-t>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")),pdata.ispage&&volantis.dom.wrapper&&(volantis.scroll.del>0&&n>100?volantis.dom.wrapper.addClass("sub"):volantis.scroll.del<0&&volantis.dom.wrapper.removeClass("sub")),volantis.isMobile&&(pdata.ispage&&volantis.dom.tocTarget&&volantis.dom.toc&&(volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")),volantis.dom.mPhoneList&&volantis.dom.mPhoneList.forEach((function(t){volantis.dom.$(t).hide()})))},t.setScrollAnchor=function(){volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((function(e){e.preventDefault(),e.stopPropagation(),t.scrolltoElement(volantis.dom.bodyAnchor),e.stopImmediatePropagation()}))},t.setHeader=function(){pdata.ispage&&(volantis.dom.wrapper.find(".nav-sub .title").html(document.title.split(" - ")[0]),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((function(e){e.preventDefault(),e.stopPropagation(),t.scrolltoElement(volantis.dom.commentTarget),e.stopImmediatePropagation()})):volantis.dom.comment.style.display="none",volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((function(t){t.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(t){t.stopPropagation(),volantis.dom.tocTarget&&volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}))):volantis.dom.toc.style.display="none"))},t.setHeaderMenuSelection=function(){volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((function(t){var e=volantis.dom.$(t).find("li a.active");e&&e.removeClass("active");var n=volantis.dom.$(t).find("div a.active");n&&n.removeClass("active")}));var t=location.pathname.replace(/\/|%|\./g,"");0==t.length&&(t="home");var e=t.match(/page\d{0,}$/g);e&&(e=e[0],t=t.split(e)[0]);var n=t.match(/index.html/);n&&(n=n[0],t=t.split(n)[0]),(t=t.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((function(e){var n=e.querySelector("[active-action=action-"+t+"]");n&&volantis.dom.$(n).addClass("active")}))},t.setGlobalHeaderMenuEvent=function(){volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(t){t.querySelector(".list-v")&&volantis.dom.$(t).click((function(t){t.stopPropagation(),t.currentTarget.parentElement.childNodes.forEach((function(t){"[object HTMLLIElement]"==Object.prototype.toString.call(t)&&t.childNodes.forEach((function(t){"[object HTMLUListElement]"==Object.prototype.toString.call(t)&&volantis.dom.$(t).hide()}))}));for(var e=t.currentTarget.children,n=0;n<e.length;n++){var o=e[n];"menu"===volantis.dom.$(o).title?volantis.dom.$(o).display="flex":volantis.dom.$(o).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(t){volantis.dom.$(t.parentElement).click((function(t){t.stopPropagation(),t.target.origin==t.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach((function(t){volantis.dom.$(t).hide()}))}),0)})),t.setPageHeaderMenuEvent()},t.setPageHeaderMenuEvent=function(){volantis.isMobile&&volantis.dom.$(document).click((function(t){volantis.dom.mPhoneList.forEach((function(t){volantis.dom.$(t).hide()}))}))},t.setHeaderSearch=function(){volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(t){t.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")}),!1),volantis.dom.$(document).click((function(t){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}),!1),volantis.dom.search.click((function(t){t.stopPropagation()}),!1))},t.setTabs=function(){var t=document.querySelectorAll("#l_main .tabs .nav-tabs");t&&t.forEach((function(t){t.querySelectorAll("a").forEach((function(t){volantis.dom.$(t).on("click",(function(t){t.preventDefault(),t.stopPropagation();var e=volantis.dom.$(t.target.parentElement.parentElement.parentElement);return e.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(t.target.parentElement).addClass("active"),e.find(".tab-content .active").removeClass("active"),e.find(t.target.className).addClass("active"),!1}))}))}))},t.footnotes=function(){var t=document.querySelectorAll("#l_main .footnote-backref, #l_main .footnote-ref > a");t.forEach((function(e,n){t[n].click=function(){},volantis.dom.$(e).on("click",(function(t){t.stopPropagation(),t.preventDefault();var e=decodeURI(t.target.hash.split("#")[1]).replace(/\ /g,"-"),n=document.getElementById(e);n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"})}))}))},t.utilCopyCode=function(e){document.querySelectorAll(e).forEach((function(e){e.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fa-solid fa-copy"></i><span>COPY</span></button>');var n=e.previousSibling;n.onclick=function(o){o.stopPropagation();var r=n.querySelector("i"),i=n.querySelector("span");e.focus();var a=new Range;a.selectNodeContents(e),document.getSelection().removeAllRanges(),document.getSelection().addRange(a);var l=document.getSelection().toString();t.utilWriteClipText(l).then((function(){t.messageCopyright(),n.classList.add("copied"),r.classList.remove("fa-copy"),r.classList.add("fa-check-circle"),i.innerText="COPIED",setTimeout((function(){r.classList.remove("fa-check-circle"),r.classList.add("fa-copy"),i.innerText="COPY"}),2e3)}))["catch"]((function(t){VolantisApp.message("系统提示",t,{icon:"fa fa-exclamation-circle red"}),n.classList.add("copied-failed"),r.classList.remove("fa-copy"),r.classList.add("fa-exclamation-circle"),i.innerText="COPY FAILED",setTimeout((function(){r.classList.remove("fa-exclamation-circle"),r.classList.add("fa-copy"),i.innerText="COPY"}))}))}}))},t.utilWriteClipText=function(t){return navigator.clipboard.writeText(t).then((function(){return Promise.resolve()}))["catch"]((function(e){var n=document.createElement("textarea");n.setAttribute("readonly","readonly"),document.body.appendChild(n),n.innerHTML=t,n.select();try{var o=document.execCommand("copy");return document.body.removeChild(n),o&&"unsuccessful"!==o?Promise.resolve():Promise.reject("复制文本失败!")}catch(e){return document.body.removeChild(n),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}))},t.utilTimeAgo=function(t){var e=6e4,n=36e5,o=24*n,r=(new Date).getTime()-t,i=r/e,a=r/n,l=r/o,s=r/6048e5,c=r/2592e6;if(r<0)result="";else if(c>=1&&c<7)result=" "+parseInt(c)+" 月前";else if(s>=1&&s<4)result=" "+parseInt(s)+" 周前";else if(l>=1&&l<7)result=" "+parseInt(l)+" 天前";else if(a>=1&&a<24)result=" "+parseInt(a)+" 小时前";else if(i>=1&&i<60)result=" "+parseInt(i)+" 分钟前";else if(r>=0&&r<=e)result="刚刚";else{var u=new Date;u.setTime(t);var d=u.getFullYear(),f=u.getMonth()+1<10?"0"+(u.getMonth()+1):u.getMonth()+1,m=u.getDate()<10?"0"+u.getDate():u.getDate();u.getHours()<10?u.getHours():u.getHours(),u.getMinutes()<10?u.getMinutes():u.getMinutes(),u.getSeconds()<10?u.getSeconds():u.getSeconds();result=d+"-"+f+"-"+m}return result},t.message=function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;function r(t,e,n,o){var r,i=n.icon,a=n.time,l=n.position,s=n.transitionIn,c=n.transitionOut,u=n.messageColor,d=n.titleColor,f=n.backgroundColor,m=n.zindex,h=n.displayMode;iziToast.show((_defineProperty(r={layout:"2",icon:"Fontawesome",closeOnEscape:"true",displayMode:h||"replace",transitionIn:s||volantis.GLOBAL_CONFIG.plugins.message.transitionIn,transitionOut:c||volantis.GLOBAL_CONFIG.plugins.message.transitionOut,messageColor:u||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:d||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:f||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:m||volantis.GLOBAL_CONFIG.plugins.message.zindex},"icon",i||volantis.GLOBAL_CONFIG.plugins.message.icon["default"]),_defineProperty(r,"timeout",a||volantis.GLOBAL_CONFIG.plugins.message.time["default"]),_defineProperty(r,"position",l||volantis.GLOBAL_CONFIG.plugins.message.position),_defineProperty(r,"title",t),_defineProperty(r,"message",e),_defineProperty(r,"onClosed",(function(){o&&o()})),r))}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.cdn.izitoast_css),volantis.js(volantis.GLOBAL_CONFIG.cdn.izitoast_js,(function(){r(t,e,n,o)}))):r(t,e,n,o)},t.question=function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null,i=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;function a(t,e,n,o,r,i){var a,l=n.icon,s=n.time,c=(n.position,n.transitionIn,n.transitionOut),u=n.messageColor,d=n.titleColor,f=n.backgroundColor,m=n.zindex;iziToast.question((_defineProperty(a={id:"question",icon:"Fontawesome",close:!1,overlay:!0,displayMode:"once",position:"center",messageColor:u||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:d||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:f||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:m||volantis.GLOBAL_CONFIG.plugins.message.zindex},"icon",l||volantis.GLOBAL_CONFIG.plugins.message.icon.quection),_defineProperty(a,"timeout",s||volantis.GLOBAL_CONFIG.plugins.message.time.quection),_defineProperty(a,"title",t),_defineProperty(a,"message",e),_defineProperty(a,"buttons",[["<button><b>是</b></button>",function(t,e){t.hide({transitionOut:c||"fadeOut"},e,"button"),o&&o(t,e)}],["<button><b>否</b></button>",function(t,e){t.hide({transitionOut:c||"fadeOut"},e,"button"),r&&r(t,e)}]]),_defineProperty(a,"onClosed",(function(t,e,n){i&&i(t,e,n)})),a))}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.cdn.izitoast_css),volantis.js(volantis.GLOBAL_CONFIG.cdn.izitoast_js,(function(){a(t,e,n,o,r,i)}))):a(t,e,n,o,r,i)},t.hideMessage=function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,e=document.querySelector(".iziToast");function n(t){iziToast.hide({},e),t&&t()}e?"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.cdn.izitoast_css),volantis.js(volantis.GLOBAL_CONFIG.cdn.izitoast_js,(function(){n(t)}))):n(t):t&&t()};var n=0;return t.messageCopyright=function(){volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.copyright.enable&&n<1&&(n++,VolantisApp.message(volantis.GLOBAL_CONFIG.plugins.message.copyright.title,volantis.GLOBAL_CONFIG.plugins.message.copyright.message,{icon:volantis.GLOBAL_CONFIG.plugins.message.copyright.icon,transitionIn:"flipInX",transitionOut:"flipOutX",displayMode:1}))},{init:function(){t.init(),t.event()},subscribe:function(){t.setIsMobile(),t.setHeader(),t.setHeaderMenuSelection(),t.setGlobalHeaderMenuEvent(),t.setHeaderSearch(),t.setScrollAnchor(),t.setTabs(),t.footnotes()},pjaxReload:function(){t.event(),t.restData(),t.setHeader(),t.setHeaderMenuSelection(),t.setPageHeaderMenuEvent(),t.setScrollAnchor(),t.setTabs(),t.footnotes(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(t){t.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style"),n=0},utilCopyCode:t.utilCopyCode,utilWriteClipText:t.utilWriteClipText,utilTimeAgo:t.utilTimeAgo,message:t.message,question:t.question,hideMessage:t.hideMessage,messageCopyright:t.messageCopyright,scrolltoElement:t.scrolltoElement}}();Object.freeze(VolantisApp);var VolantisFancyBox=function(){var t={loadFancyBox:function(t){volantis.css(volantis.GLOBAL_CONFIG.cdn.fancybox_css),volantis.js(volantis.GLOBAL_CONFIG.cdn.fancybox_js).then((function(){t&&t()}))},init:function(){var e=!(arguments.length>0&&arguments[0]!==undefined)||arguments[0],n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t.groupBind;!document.querySelector(".md .gallery img, .fancybox")&&e||("undefined"==typeof Fancybox?t.loadFancyBox(n):n())},elementHandling:function(t,e){document.querySelectorAll(t).forEach((function(t){if(!t.hasAttribute("fancybox")){t.setAttribute("fancybox","");var n=document.createElement("a");n.setAttribute("href",t.src),n.setAttribute("data-caption",t.alt),n.setAttribute("data-fancybox",e),n.classList.add("fancybox"),n.append(t.cloneNode()),t.replaceWith(n)}}))},bind:function(e){t.init(!1,(function(){Fancybox.bind(e,{groupAll:!0,Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(t,e,n){return n.$trigger.alt||null}})}))},groupBind:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,e=new Set;document.querySelectorAll(".gallery").forEach((function(t){t.querySelector("img")&&e.add(t.getAttribute("data-group")||"default")})),t&&e.add(t);var n,o=_createForOfIteratorHelper(e);try{for(o.s();!(n=o.n()).done;){var r=n.value;Fancybox.unbind('[data-fancybox="'+r+'"]'),Fancybox.bind('[data-fancybox="'+r+'"]',{Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1}})}}catch(i){o.e(i)}finally{o.f()}}};return{init:t.init,bind:t.bind,groupBind:function(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"default";try{t.elementHandling(e,n),t.init(!1,(function(){t.groupBind(n)}))}catch(o){console.error(o)}}}}();Object.freeze(VolantisFancyBox);var highlightKeyWords=function(){var t={markNum:0,markNextId:-1,startFromURL:function(){var e=decodeURI(new URL(location.href).searchParams.get("keyword")),n=e?e.split(" "):[],o=document.querySelector("#l_main");1==n.length&&"null"==n[0]||(t.start(n,o),t.scrollToFirstHighlightKeywordMark())},scrollToFirstHighlightKeywordMark:function(){volantis.cleanContentVisibility(),t.scrollToNextHighlightKeywordMark("0")||volantis.requestAnimationFrame(t.scrollToFirstHighlightKeywordMark)},scrollToNextHighlightKeywordMark:function(e){var n=e||(t.markNextId+1)%t.markNum;t.markNextId=parseInt(n);var o=document.getElementById("keyword-mark-"+t.markNextId);return o||(t.markNextId=(t.markNextId+1)%t.markNum,o=document.getElementById("keyword-mark-"+t.markNextId)),o&&volantis.scroll.to(o,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),o},scrollToPrevHighlightKeywordMark:function(e){var n=e||(t.markNextId-1+t.markNum)%t.markNum;t.markNextId=parseInt(n);var o=document.getElementById("keyword-mark-"+t.markNextId);return o||(t.markNextId=(t.markNextId-1+t.markNum)%t.markNum,o=document.getElementById("keyword-mark-"+t.markNextId)),o&&volantis.scroll.to(o,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),o},start:function(e,n){if(t.markNum=0,e.length&&n&&(1!=e.length||"null"!=e[0])){console.log(e);for(var o=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null),r=[];o.nextNode();)o.currentNode.parentNode.matches("button, select, textarea")||r.push(o.currentNode);r.forEach((function(n){var o=_slicedToArray(t.getIndexByWord(e,n.nodeValue),1)[0];if(o.length){var r=t.mergeIntoSlice(0,n.nodeValue.length,o);t.highlightText(n,r,"keyword"),t.highlightStyle()}}))}},getIndexByWord:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined&&arguments[2],o=[],r=new Set;return t.forEach((function(t){var i=document.createElement("div");i.innerText=t;var a=(t=i.innerHTML).length;if(0!==a){var l=0,s=-1;for(n||(e=e.toLowerCase(),t=t.toLowerCase());(s=e.indexOf(t,l))>-1;)o.push({position:s,word:t}),r.add(t),l=s+a}})),o.sort((function(t,e){return t.position!==e.position?t.position-e.position:e.word.length-t.word.length})),[o,r]},mergeIntoSlice:function(t,e,n){for(var o=n[0],r=o,i=r.position,a=r.word,l=[],s=new Set;i+a.length<=e&&0!==n.length;){s.add(a),l.push({position:i,length:a.length});var c=i+a.length;for(n.shift();0!==n.length&&(i=(o=n[0]).position,a=o.word,c>i);)n.shift()}return{hits:l,start:t,end:e,count:s.size}},highlightText:function(e,n,o){var r,i=e.nodeValue,a=n.start,l=[],s=_createForOfIteratorHelper(n.hits);try{for(s.s();!(r=s.n()).done;){var c=r.value,u=c.position,d=c.length,f=document.createTextNode(i.substring(a,u));a=u+d;var m=document.createElement("mark");m.className=o,(m=t.highlightStyle(m)).appendChild(document.createTextNode(i.substr(u,d))),l.push(f,m)}}catch(h){s.e(h)}finally{s.f()}e.nodeValue=i.substring(a,n.end),l.forEach((function(t){e.parentNode.insertBefore(t,e)}))},highlightStyle:function(e){if(e)return e.id="keyword-mark-"+t.markNum,t.markNum++,e.style.background="transparent",e.style["border-bottom"]="1px dashed #ff2a2a",e.style.color="#ff2a2a",e.style["font-weight"]="bold",e},cleanHighlightStyle:function(){document.querySelectorAll(".keyword").forEach((function(t){t.style.background="transparent",t.style["border-bottom"]=null,t.style.color=null,t.style["font-weight"]=null}))}};return{start:function(e,n){t.start(e,n)},startFromURL:function(){t.startFromURL()},scrollToNextHighlightKeywordMark:function(e){t.scrollToNextHighlightKeywordMark(e)},scrollToPrevHighlightKeywordMark:function(e){t.scrollToPrevHighlightKeywordMark(e)},cleanHighlightStyle:function(){t.cleanHighlightStyle()}}}();Object.freeze(highlightKeyWords);var DOMController={visible:function(t){var e=!(arguments.length>1&&arguments[1]!==undefined)||arguments[1];t&&(t.style.display=!0===e?"block":"none")},remove:function(t){document.querySelectorAll(t).forEach((function(t){t.remove()}))},removeList:function(t){t.forEach((function(t){DOMController.remove(t)}))},setAttribute:function(t,e,n){document.querySelectorAll(t).forEach((function(t){t.setAttribute(e,n)}))},setAttributeList:function(t){t.forEach((function(t){DOMController.setAttribute(t[0],t[1],t[2])}))},setStyle:function(t,e,n){document.querySelectorAll(t).forEach((function(t){t.style[e]=n}))},setStyleList:function(t){t.forEach((function(t){DOMController.setStyle(t[0],t[1],t[2])}))},fadeIn:function(t){if(t)return t.style.visibility="visible",t.style.opacity=1,t.style.display="block",t.style.transition="all 0.5s linear",t},fadeOut:function(t){if(t)return t.style.visibility="hidden",t.style.opacity=0,t.style.display="none",t.style.transition="all 0.5s linear",t},fadeToggle:function(t){if(t)return t="hidden"==t.style.visibility?DOMController.fadeIn(t):DOMController.fadeOut(t)},fadeToggleList:function(t){t.forEach((function(t){DOMController.fadeToggle(t)}))},hasClass:function(t,e){if(t)return t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},addClass:function(t,e){if(t)return t.classList.add(e),t},removeClass:function(t,e){if(t)return t.classList.remove(e),t},toggleClass:function(t,e){if(t)return DOMController.hasClass(t,e)?DOMController.removeClass(t,e):DOMController.addClass(t,e),t},toggleClassList:function(t){t.forEach((function(t){DOMController.toggleClass(t[0],t[1])}))}};Object.freeze(DOMController);var VolantisRequest={timeoutFetch:function(t,e,n){var o,r=new AbortController;null===(o=n.signal)||void 0===o||o.addEventListener("abort",(function(){return r.abort()}));var i=fetch(t,_objectSpread(_objectSpread({},n),{},{signal:r.signal}));if(e>0){var a=setTimeout((function(){return r.abort()}),e);i["finally"]((function(){clearTimeout(a)}))}return i=i["catch"]((function(e){throw"AbortError"===(e||{}).name?new Error("Fetch timeout: ".concat(t)):e}))},Fetch:function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,n){var o,r,i,a=arguments;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.length>2&&a[2]!==undefined?a[2]:15e3,e.next=3,VolantisRequest.timeoutFetch(t,o,n);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Fetch error: ".concat(t," | ").concat(r.status));case 6:return e.next=8,r.json();case 8:if((i=e.sent).success){e.next=11;break}throw i;case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(e,n){return t.apply(this,arguments)}}(),POST:function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,n){var o,r,i;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"POST"},n&&(r=new FormData,Object.keys(n).forEach((function(t){return r.append(t,String(n[t]))})),o.body=r),e.next=4,VolantisRequest.Fetch(t,o);case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(e,n){return t.apply(this,arguments)}}(),Get:function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,n){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,VolantisRequest.Fetch(t+(n?"?".concat(new URLSearchParams(n)):""),{method:"GET"});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(e,n){return t.apply(this,arguments)}}()};Object.freeze(VolantisRequest);
//# sourceMappingURL=../maps/js/app.js.map
