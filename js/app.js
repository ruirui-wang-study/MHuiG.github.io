var customSearch,Debounce=function(a,e){var o=e||200,n=void 0;return function(){var e=this,t=arguments;n&&clearTimeout(n),n=setTimeout(function(){n=null,a.apply(e,t)},o)}};!function(s){"use strict";var e=/mobile/i.test(window.navigator.userAgent),n=80,d=s(".l_header");function v(e,t){var a=1<arguments.length&&void 0!==t?t:n,o=e.href?s(decodeURI(e.getAttribute("href"))):s(e);window.scrollTo({top:o.offset().top-a,behavior:"smooth"})}function i(){var t=s(".menu .active"),a=s(".s-top"),o=s("h1.title","#header-meta"),n=s(".safearea");t.length&&n&&t.click(function(e){e.preventDefault(),e.stopPropagation(),"/"!=t.attr("href")&&v(n),e.stopImmediatePropagation(),t.unbind("click")}),o.length&&n&&o.click(function(e){e.preventDefault(),e.stopPropagation(),v(n),e.stopImmediatePropagation(),o.unbind("click")}),a.length&&n&&a.click(function(e){e.preventDefault(),e.stopPropagation(),v(n),e.stopImmediatePropagation()});var e,i=s("#pjax-enable-cover").text(),c=0,r=0;!i||(e=s(".cover-wrapper"))[0]&&("none"!==s(".cover-wrapper#half").css("display")&&(r=240),c=e[0].clientHeight-r);var l=document.body.scrollTop+r;s(document,window).scroll(Debounce(function(){var e=s(window).scrollTop(),t=(e+=r)-l;240<(l=e)?(a.addClass("show"),0<t?a.removeClass("hl"):a.addClass("hl")):a.removeClass("show").removeClass("hl"),-1<e-c?d.addClass("show"):d.removeClass("show")}))}function c(){var a,e,t,o,n;"true"==s.trim(s("#pjax-ispage").text())&&(window.subData={title:s.trim(s("#pjax-pageTitle").text()),tools:!0}),window.subData&&(a=s("header .wrapper"),e=s(".s-comment",a),t=s(".s-toc",a),a.find(".nav-sub .title").text(window.subData.title),o=document.body.scrollTop,s(document,window).scroll(Debounce(function(){var e=s(window).scrollTop(),t=e-o;50<=t&&100<e?(o=e,a.addClass("sub")):t<=-50&&(o=e,a.removeClass("sub"))})),s(".l_body article#comments").length?e.click(function(e){e.preventDefault(),e.stopPropagation(),v(s(".l_body article#comments")),e.stopImmediatePropagation()}):e.remove(),(n=s(".l_body .toc-wrapper")).length&&n.children().length?(t.click(function(e){e.stopPropagation(),n.toggleClass("active"),t.toggleClass("active")}),s(document).click(function(e){e.stopPropagation(),n.removeClass("active"),t.removeClass("active")}),s(document,window).scroll(Debounce(function(){n.removeClass("active"),t.removeClass("active")},100))):t.remove())}function r(){var e=s("body .navigation");e.find("li a.active").removeClass("active"),e.find("div a.active").removeClass("active");var t=null,a=location.pathname.replace(/\/|%|\./g,"");0==a.length&&(a="home");var o=a.match(/page\d{0,}$/g);o&&(o=o[0],a=a.split(o)[0]);var n=a.match(/index.html/);n&&(n=n[0],a=a.split(n)[0]),(a=a.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&e&&((t=s("#"+a,e))&&t.length&&t.addClass("active").siblings().removeClass("active"))}function l(){e&&(s(document).click(function(e){s(".m-phone .list-v").hide()}),s(window).scroll(Debounce(function(){s(".m-phone .list-v").hide()})))}function u(){var e=s(".tabs");if(0!==e.length){for(var t=e.find(".nav-tabs .tab"),a=0;a<t.length;a++){var o=e.find(t[a].children[0]);o.addClass(o.attr("href")),o.removeAttr("href")}s(".tabs .nav-tabs").on("click","a",function(e){e.preventDefault(),e.stopPropagation();var t=s(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),t.find(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(s(e.target).attr("class")).addClass("active"),!1})}}d[0]&&(n=d[0].clientHeight+16),s(function(){var t,a,o;c(),r(),e?s(".m-phone li").click(function(e){e.stopPropagation(),s(s(e.currentTarget).children("ul")).show()}):s(".m-pc li > a[href]").parent().click(function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&s(".m-pc .list-v").hide()}),l(),t=s(".l_header .switcher .s-search"),a=s(".l_header"),o=s(".l_header .m_search"),0!==t.length&&(t.click(function(e){e.stopPropagation(),a.toggleClass("z_search-open"),t.toggleClass("active"),o.find("input").focus()}),s(document).click(function(e){a.removeClass("z_search-open"),t.removeClass("active")}),o.click(function(e){e.stopPropagation()}),a.ready(function(){a.bind("keydown",function(e){if(9==e.keyCode)return!1;var t,a=!!document.all,o=a?(t=window.event.keyCode,window.event):(t=e.which,e);9==t&&(a?(o.keyCode=0,o.returnValue=!1):(o.which=0,o.preventDefault()))})})),i(),u(),s(".scroll-down").on("click",function(){v(".safearea")});try{document.addEventListener("pjax:complete",function(){s(function(){n=80,(d=s(".l_header"))[0]&&(n=d[0].clientHeight+16),c(),r(),l(),i(),u();var t=s(".l_header .switcher .s-search"),a=s(".l_header");0!==t.length&&s(document).click(function(e){a.removeClass("z_search-open"),t.removeClass("active")})})},{passive:!0})}catch(e){}})}(jQuery);