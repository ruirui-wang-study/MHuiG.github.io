var customSearch,checkExist;function isSupportWebp(){try{return 0===document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")}catch(e){return!1}}function LogoChange(){"undefined"!=typeof jQuery&&(isSupportWebp()||($("section.widget.blogger> div > a > img").attr("src","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn/assets/avatar/avatar-240.png"),$("#header-meta > div > div.new-meta-item.author > a > img").attr("src","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn/assets/avatar/avatar-16.png")))}!function(l){"use strict";var s=80,d=l(".l_header");function u(e,t){var n=1<arguments.length&&void 0!==t?t:s,o=e.href?l(decodeURI(e.getAttribute("href"))):l(e);l("html, body").animate({scrollTop:o.offset().top-n},600)}function a(){var t=l(".menu .active"),n=l(".s-top"),o=l("h1.title","#header-meta"),a=l(".safearea");t.length&&a&&t.click(function(e){e.preventDefault(),e.stopPropagation(),"/"!=t.attr("href")&&u(a),e.stopImmediatePropagation(),t.unbind("click")}),o.length&&a&&o.click(function(e){e.preventDefault(),e.stopPropagation(),u(a),e.stopImmediatePropagation(),o.unbind("click")}),n.length&&a&&n.click(function(e){e.preventDefault(),e.stopPropagation(),u(a),e.stopImmediatePropagation()});var e=l(".cover-wrapper"),c=l("#pjax-enable-cover").text(),i=0;e[0]&&"true"==c&&"none"!==l(".cover-wrapper#half").css("display")&&(i=e[0].clientHeight-240);var r=document.body.scrollTop;"true"==c&&"none"===l(".cover-wrapper#half").css("display")&&(r+=240),l(document,window).scroll(function(){var e=l(window).scrollTop();"true"==c&&"none"===l(".cover-wrapper#half").css("display")&&(e+=240);var t=e-r;240<(r=e)?(n.addClass("show"),0<t?n.removeClass("hl"):n.addClass("hl")):n.removeClass("show").removeClass("hl"),-1<e-i?d.addClass("show"):d.removeClass("show")})}function c(){var n,e,t,o,a;"true"==l.trim(l("#pjax-ispage").text())&&(window.subData={title:l.trim(l("#pjax-pageTitle").text()),tools:!0}),window.subData&&(n=l("header .wrapper"),e=l(".s-comment",n),t=l(".s-toc",n),n.find(".nav-sub .title").text(window.subData.title),o=document.body.scrollTop,l(document,window).scroll(function(){var e=l(window).scrollTop(),t=e-o;50<=t&&100<e?(o=e,n.addClass("sub")):t<=-50&&(o=e,n.removeClass("sub"))}),l(".l_body .comments").length?e.click(function(e){e.preventDefault(),e.stopPropagation(),u(l(".l_body .comments")),e.stopImmediatePropagation()}):e.remove(),(a=l(".l_body .toc-wrapper")).length&&a.children().length?(t.click(function(e){e.stopPropagation(),a.toggleClass("active"),t.toggleClass("active")}),l(document).click(function(e){e.stopPropagation(),a.removeClass("active"),t.removeClass("active")}),l(document,window).scroll(function(){a.removeClass("active"),t.removeClass("active")})):t.remove())}function i(){var e=l("body .navigation");e.find("li a.active").removeClass("active"),e.find("div a.active").removeClass("active");var t=null,n=location.pathname.replace(/\/|%|\./g,"");0==n.length&&(n="home");var o=n.match(/page\d{0,}$/g);o&&(o=o[0],n=n.split(o)[0]);var a=n.match(/index.html/);a&&(a=a[0],n=n.split(a)[0]),n&&e&&((t=l("#"+n,e))&&t.length&&t.addClass("active").siblings().removeClass("active"))}function r(){l(document).click(function(e){l(".m-phone .list-v").hide()}),l(window).scroll(function(){l(".m-phone .list-v").hide()})}function m(){var a,c,i,r,e,t,n=l(".toc-wrapper");0!==n.length&&(n.click(function(e){e.stopPropagation(),n.addClass("active")}),l(document).click(function(){return n.removeClass("active")}),n.on("click","a",function(e){e.preventDefault(),e.stopPropagation(),"A"===e.target.tagName?u(e.target,0):"SPAN"===e.target.tagName&&u(e.target.parentElement,0),n.removeClass("active");var t=l(".s-toc");0<t.length&&t.removeClass("active")}),a=Array.from(n.find("li a")),i=(c=function(){return a.map(function(e){return Math.floor(l(decodeURI(e.getAttribute("href"))).offset().top-s)})})(),r=l(document).height(),e=function(){var e=l("html").scrollTop()||l("body").scrollTop();if(l(document).height()!=r&&(e=l("html").scrollTop()||l("body").scrollTop(),r=l(document).height(),i=c()),i){for(var t=0,n=i.length-1,o=void 0;t<n;)i[o=t+n+1>>1]===e?t=n=o:i[o]<e?t=o:n=o-1;l(a).removeClass("active").eq(t).addClass("active")}},l(window).scroll(function(){e()}),t=null,l(window).bind("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){i=c(),e()},100)}),e())}function h(){var e=l(".tabs");if(0!==e.length){for(var t=e.find(".nav-tabs .tab"),n=0;n<t.length;n++){var o=e.find(t[n].children[0]);o.addClass(o.attr("href")),o.removeAttr("href")}l(".tabs .nav-tabs").on("click","a",function(e){e.preventDefault(),e.stopPropagation();var t=l(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),t.find(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(l(e.target).attr("class")).addClass("active"),!1})}}d[0]&&(s=d[0].clientHeight+16),l(function(){var t,n,o,e;c(),i(),l(".m-pc li > a[href]").parent().click(function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&l(".m-pc .list-v").hide()}),l(".m-phone li").click(function(e){e.stopPropagation(),l(l(e.currentTarget).children("ul")).show()}),r(),t=l(".l_header .switcher .s-search"),n=l(".l_header"),o=l(".l_header .m_search"),0!==t.length&&(t.click(function(e){e.stopPropagation(),n.toggleClass("z_search-open"),t.toggleClass("active"),o.find("input").focus()}),l(document).click(function(e){n.removeClass("z_search-open"),t.removeClass("active")}),o.click(function(e){e.stopPropagation()}),n.ready(function(){n.bind("keydown",function(e){if(9==e.keyCode)return!1;var t,n=!!document.all,o=n?(t=window.event.keyCode,window.event):(t=e.which,e);9==t&&(n?(o.keyCode=0,o.returnValue=!1):(o.which=0,o.preventDefault()))})})),m(),a(),e="https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/","google"===SEARCH_SERVICE?customSearch=new GoogleCustomSearch({apiKey:GOOGLE_CUSTOM_SEARCH_API_KEY,engineId:GOOGLE_CUSTOM_SEARCH_ENGINE_ID,imagePath:e}):"algolia"===SEARCH_SERVICE?customSearch=new AlgoliaSearch({apiKey:ALGOLIA_API_KEY,appId:ALGOLIA_APP_ID,indexName:ALGOLIA_INDEX_NAME,imagePath:e}):"hexo"===SEARCH_SERVICE?customSearch=new HexoSearch({imagePath:e}):"azure"===SEARCH_SERVICE?customSearch=new AzureSearch({serviceName:AZURE_SERVICE_NAME,indexName:AZURE_INDEX_NAME,queryKey:AZURE_QUERY_KEY,imagePath:e}):"baidu"===SEARCH_SERVICE&&(customSearch=new BaiduSearch({apiId:BAIDU_API_ID,imagePath:e})),h(),l(".scroll-down").on("click",function(){u(".safearea")});try{document.addEventListener("pjax:complete",function(){l(function(){s=80,(d=l(".l_header"))[0]&&(s=d[0].clientHeight+16),c(),i(),r(),m(),a(),h();var t=l(".l_header .switcher .s-search"),n=l(".l_header");0!==t.length&&l(document).click(function(e){n.removeClass("z_search-open"),t.removeClass("active")})})},{passive:!0})}catch(e){}}),l(".darkbtn").parents(".header").on("click",function(e){window.darkmode.toggle(),window.darkmode.isActivated()?(l(".darkbtn").removeClass("fa-moon"),l(".darkbtn").addClass("fa-sun")):(l(".darkbtn").removeClass("fa-sun"),l(".darkbtn").addClass("fa-moon"))})}(jQuery),window.location.hash&&(checkExist=setInterval(function(){"undefined"!=typeof jQuery&&$("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).length&&($("html, body").animate({scrollTop:$("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).offset().top-40},500),clearInterval(checkExist))},100)),$("figcaption").click(function(){window.CodeBlockFullscreen?($("#post").removeClass("code-block-fullscreen"),$(this).parent().removeClass("code-block-fullscreen"),$(this).parent().removeClass("code-block-fullscreen-overflow-auto"),$("html").removeClass("code-block-fullscreen-html-scroll"),$(".highlight>table .gutter").removeClass("code-block-fullscreen-gutter"),window.CodeBlockFullscreen=!1):($("#post").addClass("code-block-fullscreen"),$(this).parent().addClass("code-block-fullscreen"),$(this).parent().addClass("code-block-fullscreen-overflow-auto"),$("html").addClass("code-block-fullscreen-html-scroll"),$(".highlight>table .gutter").addClass("code-block-fullscreen-gutter"),window.CodeBlockFullscreen=!0)}),setInterval("LogoChange()",1e3);var titleTime,OriginTitle=document.title;function click(e){document.all&&(2!=event.button&&3!=event.button||(oncontextmenu="return false")),document.layers&&3==e.which&&(oncontextmenu="return false")}document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="shortcut icon"]').attr("href","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn@master/assets/favicon/Error.ico"),document.title="╭(°A°`)╮ 页面崩溃啦 ~",clearTimeout(titleTime)):($('[rel="shortcut icon"]').attr("href","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn@master/assets/favicon/favicon.ico"),document.title="(ฅ>ω<*ฅ) 噫又好了~"+OriginTitle,titleTime=setTimeout(function(){document.title=OriginTitle},2e3))},{passive:!0}),setTimeout(function(){!function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js",e.defer=!0;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}()},5e3),setInterval(function(){document.onselectstart=function(e){return!1},document.onselectstart=function(e){return!1},document.layers&&document.captureEvents(Event.MOUSEDOWN),document.onmousedown=click,document.oncontextmenu=new Function("return false;"),document.onkeydown=document.onkeyup=document.onkeypress=function(){if(123==window.event.keyCode||73==window.event.keyCode||121==window.event.keyCode)return window.event.returnValue=!1}},100);