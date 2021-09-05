var t,e;t="undefined"!=typeof global?global:window||this.window||this.global,e=function(t){"use strict";var e={},o="iziToast",n=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},d=568,c={};e.children={};var u={id:null,"class":"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var p=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(t,e,o){if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(o,t[n],n,t);else if(t)for(var i=0,s=t.length;s>i;i++)e.call(o,t[i],i,t)},g=function(t,e){var o={};return m(t,(function(e,n){o[n]=t[n]})),m(e,(function(t,n){o[n]=e[n]})),o},f=function(t){var e=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=t;o.firstChild;)e.appendChild(o.firstChild);return e},v={move:function(t,e,n,a){var r,l=.3,d=180;0!==a&&(t.classList.add(o+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?l>(r=(d-a)/d)&&e.hide(g(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag"):l>(r=(d+a)/d)&&e.hide(g(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag"),t.style.opacity=r,l>r&&((i||s)&&(t.style.left=a+"px"),t.parentNode.style.opacity=l,this.stopMoving(t,null)))},startMoving:function(t,e,o,n){n=n||window.event;var i=a?n.touches[0].clientX:n.clientX,s=t.style.transform.replace("px)",""),r=i-(s=s.replace("translateX(",""));o.transitionIn&&t.classList.remove(o.transitionIn),o.transitionInMobile&&t.classList.remove(o.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(n){n.preventDefault();var i=(n=n||window.event).touches[0].clientX-r;v.move(t,e,o,i)}:document.onmousemove=function(n){n.preventDefault();var i=(n=n||window.event).clientX-r;v.move(t,e,o,i)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(o+"-dragged")&&(t.classList.remove(o+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout((function(){t.style.transition=""}),400))}};return e.setSetting=function(t,o,n){e.children[t][o]=n},e.getSetting=function(t,o){return e.children[t][o]},e.destroy=function(){m(document.querySelectorAll("."+o+"-overlay"),(function(t,e){t.remove()})),m(document.querySelectorAll("."+o+"-wrapper"),(function(t,e){t.remove()})),m(document.querySelectorAll("."+o),(function(t,e){t.remove()})),this.children={},document.removeEventListener(o+"-opened",{},!1),document.removeEventListener(o+"-opening",{},!1),document.removeEventListener(o+"-closing",{},!1),document.removeEventListener(o+"-closed",{},!1),document.removeEventListener("keyup",{},!1),c={}},e.settings=function(t){e.destroy(),c=t,u=g(u,t||{})},m(l,(function(t,o){e[o]=function(e){var o=g(c,e||{});o=g(t,o||{}),this.show(o)}})),e.progress=function(t,e,n){var i=this,s=e.getAttribute("data-iziToast-ref"),a=g(this.children[s],t||{}),r=e.querySelector("."+o+"-progressbar div");return{start:function(){"undefined"==typeof a.time.REMAINING&&(e.classList.remove(o+"-reseted"),null!==r&&(r.style.transition="width "+a.timeout+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.START=(new Date).getTime(),a.time.END=a.time.START+a.timeout,a.time.TIMER=setTimeout((function(){clearTimeout(a.time.TIMER),e.classList.contains(o+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof n&&n.apply(i))}),a.timeout),i.setSetting(s,"time",a.time))},pause:function(){if("undefined"!=typeof a.time.START&&!e.classList.contains(o+"-paused")&&!e.classList.contains(o+"-reseted")){if(e.classList.add(o+"-paused"),a.time.REMAINING=a.time.END-(new Date).getTime(),clearTimeout(a.time.TIMER),i.setSetting(s,"time",a.time),null!==r){var t=window.getComputedStyle(r).getPropertyValue("width");r.style.transition="none",r.style.width=t}"function"==typeof n&&setTimeout((function(){n.apply(i)}),10)}},resume:function(){"undefined"!=typeof a.time.REMAINING?(e.classList.remove(o+"-paused"),null!==r&&(r.style.transition="width "+a.time.REMAINING+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.END=(new Date).getTime()+a.time.REMAINING,a.time.TIMER=setTimeout((function(){clearTimeout(a.time.TIMER),e.classList.contains(o+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof n&&n.apply(i))}),a.time.REMAINING),i.setSetting(s,"time",a.time)):this.start()},reset:function(){clearTimeout(a.time.TIMER),delete a.time.REMAINING,i.setSetting(s,"time",a.time),e.classList.add(o+"-reseted"),e.classList.remove(o+"-paused"),null!==r&&(r.style.transition="none",r.style.width="100%"),"function"==typeof n&&setTimeout((function(){n.apply(i)}),10)}}},e.hide=function(t,e,i){"object"!=typeof e&&(e=document.querySelector(e));var s=this,a=g(this.children[e.getAttribute("data-iziToast-ref")],t||{});a.closedBy=i||null,delete a.time.REMAINING,e.classList.add(o+"-closing"),function(){var t=document.querySelector("."+o+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),n=(e=e.split(",")).indexOf(String(a.ref));-1!==n&&e.splice(n,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout((function(){t.remove()}),700))}}(),a.transitionIn&&e.classList.remove(a.transitionIn),a.transitionInMobile&&e.classList.remove(a.transitionInMobile),n||window.innerWidth<=d?a.transitionOutMobile&&e.classList.add(a.transitionOutMobile):a.transitionOut&&e.classList.add(a.transitionOut);var r=e.parentNode.offsetHeight;e.parentNode.style.height=r+"px",e.style.pointerEvents="none",(!n||window.innerWidth>d)&&(e.parentNode.style.transitionDelay="0.2s");try{var l=new CustomEvent(o+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(c){console.warn(c)}setTimeout((function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout((function(){delete s.children[a.ref],e.parentNode.remove();try{var t=new CustomEvent(o+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(n){console.warn(n)}"undefined"!=typeof a.onClosed&&a.onClosed.apply(null,[a,e,i])}),1e3)}),200),"undefined"!=typeof a.onClosing&&a.onClosing.apply(null,[a,e,i])},e.show=function(t){var i=this,s=g(c,t||{});if((s=g(u,s)).time={},null===s.id&&(s.id=function(t){return btoa(encodeURIComponent(t)).replace(/=/g,"")}(s.title+s.message+s.color)),1===s.displayMode||"once"==s.displayMode)try{if(document.querySelectorAll("."+o+"#"+s.id).length>0)return!1}catch(l){console.warn("["+o+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}if(2===s.displayMode||"replace"==s.displayMode)try{m(document.querySelectorAll("."+o+"#"+s.id),(function(t,e){i.hide(s,t,"replaced")}))}catch(l){console.warn("["+o+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}s.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[s.ref]=s;var p,y={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:s.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};y.toast.setAttribute("data-iziToast-ref",s.ref),y.toast.appendChild(y.toastBody),y.toastCapsule.appendChild(y.toast),function(){if(y.toast.classList.add(o),y.toast.classList.add(o+"-opening"),y.toastCapsule.classList.add(o+"-capsule"),y.toastBody.classList.add(o+"-body"),y.toastTexts.classList.add(o+"-texts"),n||window.innerWidth<=d?s.transitionInMobile&&y.toast.classList.add(s.transitionInMobile):s.transitionIn&&y.toast.classList.add(s.transitionIn),s["class"]){var t=s["class"].split(" ");m(t,(function(t,e){y.toast.classList.add(t)}))}s.id&&(y.toast.id=s.id),s.rtl&&(y.toast.classList.add(o+"-rtl"),y.toast.setAttribute("dir","rtl")),s.layout>1&&y.toast.classList.add(o+"-layout"+s.layout),s.balloon&&y.toast.classList.add(o+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?y.toast.style.maxWidth=s.maxWidth:y.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||y.toast.classList.add(o+"-theme-"+s.theme),s.color&&(function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)}(s.color)?y.toast.style.background=s.color:y.toast.classList.add(o+"-color-"+s.color)),s.backgroundColor&&(y.toast.style.background=s.backgroundColor,s.balloon&&(y.toast.style.borderColor=s.backgroundColor))}(),s.image&&(y.cover.classList.add(o+"-cover"),y.cover.style.width=s.imageWidth+"px",function(t){try{return btoa(atob(t))==t}catch(e){return!1}}(s.image.replace(/ /g,""))?y.cover.style.backgroundImage="url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":y.cover.style.backgroundImage="url("+s.image+")",s.rtl?y.toastBody.style.marginRight=s.imageWidth+10+"px":y.toastBody.style.marginLeft=s.imageWidth+10+"px",y.toast.appendChild(y.cover)),s.close?(y.buttonClose=document.createElement("button"),y.buttonClose.type="button",y.buttonClose.classList.add(o+"-close"),y.buttonClose.addEventListener("click",(function(t){t.target,i.hide(s,y.toast,"button")})),y.toast.appendChild(y.buttonClose)):s.rtl?y.toast.style.paddingLeft="18px":y.toast.style.paddingRight="18px",s.progressBar&&(y.progressBar=document.createElement("div"),y.progressBarDiv=document.createElement("div"),y.progressBar.classList.add(o+"-progressbar"),y.progressBarDiv.style.background=s.progressBarColor,y.progressBar.appendChild(y.progressBarDiv),y.toast.appendChild(y.progressBar)),s.timeout&&(s.pauseOnHover&&!s.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){i.progress(s,y.toast).pause()})),y.toast.addEventListener("mouseleave",(function(t){i.progress(s,y.toast).resume()}))),s.resetOnHover&&(y.toast.addEventListener("mouseenter",(function(t){i.progress(s,y.toast).reset()})),y.toast.addEventListener("mouseleave",(function(t){i.progress(s,y.toast).start()})))),s.iconUrl?(y.icon.setAttribute("class",o+"-icon"),y.icon.setAttribute("src",s.iconUrl)):s.icon&&(y.icon.setAttribute("class",o+"-icon "+s.icon),s.iconText&&y.icon.appendChild(document.createTextNode(s.iconText)),s.iconColor&&(y.icon.style.color=s.iconColor)),(s.icon||s.iconUrl)&&(s.rtl?y.toastBody.style.paddingRight="33px":y.toastBody.style.paddingLeft="33px",y.toastBody.appendChild(y.icon)),s.title.length>0&&(y.strong=document.createElement("strong"),y.strong.classList.add(o+"-title"),y.strong.appendChild(f(s.title)),y.toastTexts.appendChild(y.strong),s.titleColor&&(y.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?y.strong.style.fontSize=s.titleSize:y.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?y.strong.style.lineHeight=s.titleLineHeight:y.strong.style.lineHeight=s.titleLineHeight+"px")),s.message.length>0&&(y.p=document.createElement("p"),y.p.classList.add(o+"-message"),y.p.appendChild(f(s.message)),y.toastTexts.appendChild(y.p),s.messageColor&&(y.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?y.p.style.fontSize=s.messageSize:y.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?y.p.style.lineHeight=s.messageLineHeight:y.p.style.lineHeight=s.messageLineHeight+"px")),s.title.length>0&&s.message.length>0&&(s.rtl?y.strong.style.marginLeft="10px":2===s.layout||s.rtl||(y.strong.style.marginRight="10px")),y.toastBody.appendChild(y.toastTexts),s.inputs.length>0&&(y.inputs.classList.add(o+"-inputs"),m(s.inputs,(function(t,e){y.inputs.appendChild(f(t[0])),(p=y.inputs.childNodes)[e].classList.add(o+"-inputs-child"),t[3]&&setTimeout((function(){p[e].focus()}),300),p[e].addEventListener(t[1],(function(e){return(0,t[2])(i,y.toast,this,e)}))})),y.toastBody.appendChild(y.inputs)),s.buttons.length>0&&(y.buttons.classList.add(o+"-buttons"),m(s.buttons,(function(t,e){y.buttons.appendChild(f(t[0]));var n=y.buttons.childNodes;n[e].classList.add(o+"-buttons-child"),t[2]&&setTimeout((function(){n[e].focus()}),300),n[e].addEventListener("click",(function(e){return e.preventDefault(),(0,t[1])(i,y.toast,this,e,p)}))}))),y.toastBody.appendChild(y.buttons),s.message.length>0&&(s.inputs.length>0||s.buttons.length>0)&&(y.p.style.marginBottom="0"),(s.inputs.length>0||s.buttons.length>0)&&(s.rtl?y.toastTexts.style.marginLeft="10px":y.toastTexts.style.marginRight="10px",s.inputs.length>0&&s.buttons.length>0&&(s.rtl?y.inputs.style.marginLeft="8px":y.inputs.style.marginRight="8px")),y.toastCapsule.style.visibility="hidden",setTimeout((function(){var t=y.toast.offsetHeight,e=y.toast.currentStyle||window.getComputedStyle(y.toast),o=e.marginTop;o=o.split("px"),o=parseInt(o[0]);var n=e.marginBottom;n=n.split("px"),n=parseInt(n[0]),y.toastCapsule.style.visibility="",y.toastCapsule.style.height=t+n+o+"px",setTimeout((function(){y.toastCapsule.style.height="auto",s.target&&(y.toastCapsule.style.overflow="visible")}),500),s.timeout&&i.progress(s,y.toast).start()}),100),function(){var t=s.position;if(s.target)y.wrapper=document.querySelector(s.target),y.wrapper.classList.add(o+"-target"),s.targetFirst?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+o+"] Incorrect position.\nIt can be › "+r);t=n||window.innerWidth<=d?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?o+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?o+"-wrapper-topCenter":o+"-wrapper-center":o+"-wrapper-"+t,y.wrapper=document.querySelector("."+o+"-wrapper."+t),y.wrapper||(y.wrapper=document.createElement("div"),y.wrapper.classList.add(o+"-wrapper"),y.wrapper.classList.add(t),document.body.appendChild(y.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?y.wrapper.insertBefore(y.toastCapsule,y.wrapper.firstChild):y.wrapper.appendChild(y.toastCapsule)}isNaN(s.zindex)?console.warn("["+o+"] Invalid zIndex."):y.wrapper.style.zIndex=s.zindex}(),s.overlay&&(null!==document.querySelector("."+o+"-overlay.fadeIn")?(y.overlay=document.querySelector("."+o+"-overlay"),y.overlay.setAttribute("data-iziToast-ref",y.overlay.getAttribute("data-iziToast-ref")+","+s.ref),isNaN(s.zindex)||null===s.zindex||(y.overlay.style.zIndex=s.zindex-1)):(y.overlay.classList.add(o+"-overlay"),y.overlay.classList.add("fadeIn"),y.overlay.style.background=s.overlayColor,y.overlay.setAttribute("data-iziToast-ref",s.ref),isNaN(s.zindex)||null===s.zindex||(y.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(y.overlay)),s.overlayClose?(y.overlay.removeEventListener("click",{}),y.overlay.addEventListener("click",(function(t){i.hide(s,y.toast,"overlay")}))):y.overlay.removeEventListener("click",{})),function(){if(s.animateInside){y.toast.classList.add(o+"-animateInside");var t=[200,100,300];"bounceInLeft"!=s.transitionIn&&"bounceInRight"!=s.transitionIn||(t=[400,200,400]),s.title.length>0&&setTimeout((function(){y.strong.classList.add("slideIn")}),t[0]),s.message.length>0&&setTimeout((function(){y.p.classList.add("slideIn")}),t[1]),(s.icon||s.iconUrl)&&setTimeout((function(){y.icon.classList.add("revealIn")}),t[2]);var e=150;s.buttons.length>0&&y.buttons&&setTimeout((function(){m(y.buttons.childNodes,(function(t,o){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150}))}),s.inputs.length>0?150:0),s.inputs.length>0&&y.inputs&&(e=150,m(y.inputs.childNodes,(function(t,o){setTimeout((function(){t.classList.add("revealIn")}),e),e+=150})))}}(),s.onOpening.apply(null,[s,y.toast]);try{var h=new CustomEvent(o+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(h)}catch(b){console.warn(b)}setTimeout((function(){y.toast.classList.remove(o+"-opening"),y.toast.classList.add(o+"-opened");try{var t=new CustomEvent(o+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(e){console.warn(e)}s.onOpened.apply(null,[s,y.toast])}),1e3),s.drag&&(a?(y.toast.addEventListener("touchstart",(function(t){v.startMoving(this,i,s,t)}),!1),y.toast.addEventListener("touchend",(function(t){v.stopMoving(this,t)}),!1)):(y.toast.addEventListener("mousedown",(function(t){t.preventDefault(),v.startMoving(this,i,s,t)}),!1),y.toast.addEventListener("mouseup",(function(t){t.preventDefault(),v.stopMoving(this,t)}),!1))),s.closeOnEscape&&document.addEventListener("keyup",(function(t){27==(t=t||window.event).keyCode&&i.hide(s,y.toast,"esc")})),s.closeOnClick&&y.toast.addEventListener("click",(function(t){i.hide(s,y.toast,"toast")})),i.toast=y.toast},e},"function"==typeof define&&define.amd?define([],e()):"object"==typeof exports?module.exports=e():t.iziToast=e();