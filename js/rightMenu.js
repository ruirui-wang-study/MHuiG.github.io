$((function(){e.init(),volantis.pjax.send(()=>{e.hideMenu()})}));const e=(()=>{const e={},t=$("#printHtml"),n=$("#menuDarkBtn"),o=$(".menuLoad-Content"),i=$("#rightmenu-wrapper")[0],r=$("#rightmenu-content")[0],c=$('.menu-Option[data-fn-type="copyText"]'),a=$('.menu-Option[data-fn-type="copyPaste"]'),s=$('.menu-Option[data-fn-type="copySelect"]'),l=$('.menu-Option[data-fn-type="copyCut"]'),d=$('.menu-Option[data-fn-type="copyHref"]'),h=$('.menu-Option[data-fn-type="copySrc"]'),u=$('.menu-Option[data-fn-type="copyImg"]'),g=$('.menu-Option[data-fn-type="openTab"]'),m=/^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;return e.init=()=>{$(".menu-Option").hide()},e.initEvent=()=>{window.document.oncontextmenu=t=>t.ctrlKey||$(window).width()<=500?(e.hideMenu(),!0):e.popMenu(t),i.oncontextmenu=e=>(e.stopPropagation(),e.preventDefault(),!1),$(window).off("click.rightMenu").on("click.rightMenu",()=>{e.hideMenu()}),$(window).off("blur.rightMenu").on("blur.rightMenu",()=>{e.hideMenu()}),$(i).off("blur.rightMenu").on("blur.rightMenu",()=>{e.hideMenu()})},e.popMenu=t=>{let n=t.clientX,o=t.clientY,c=document.documentElement.clientWidth||document.body.clientWidth,a=document.documentElement.clientHeight||document.body.clientHeight;try{e.setMenuItem(t),$(i).focus(),i.style.display="block",i.style.zIndex="-2147483648";let s=r.offsetWidth,l=r.offsetHeight,d=n+s>c?n-s+10:n,h=o+l>a?o-l+10:o;h=o+l>a&&h<l&&o<l?h+(a-l-h-10):h,i.style.left=d+"px",i.style.top=h+"px",i.style.zIndex="2147483648"}catch(s){return $(i).blur(),console.error(s),!0}return!1},e.setMenuItem=i=>{let r=!1;const p=i.target,f=window.getSelection().toString();if(g.hide(),n&&n.off("click.rightMenu").one("click.rightMenu",e=>{n.children().toggleClass("<%= theme.rightmenu.darkmode.dark %>"),n.children().toggleClass("<%= theme.rightmenu.darkmode.white %>")}),$(p).is("input")||$(p).is("textarea")){const t=$(p).val();t.length>0?(s.show(),s.off("click.rightMenu").one("click.rightMenu",()=>{$(p).select()})):s.hide(),f?(l.show(),l.off("click.rightMenu").one("click.rightMenu",()=>{const n=p.selectionStart,o=p.selectionEnd;e.copyString(f),$(p).val(t.substring(0,n)+t.substring(o,t.length)),p.selectionStart=n,p.selectionEnd=n,$(p).focus()})):l.hide(),e.readClipboard().then(t=>{t?(a.show(),a.off("click.rightMenu").one("click.rightMenu",()=>{e.insertAtCaret($(p),t)})):a.hide()})["catch"](e=>{console.error(e),a.hide()})}else s.hide(),a.hide(),l.hide();const w=p.href;w&&m.test(w)?(r=!0,d.show(),g.show(),d.off("click.rightMenu").one("click.rightMenu",()=>{e.copyString(w)}),g.off("click.rightMenu").one("click.rightMenu",()=>{window.open(w)})):d.hide();const y=p.currentSrc;y&&m.test(y)?(r=!0,h.show(),g.show(),h.off("click.rightMenu").one("click.rightMenu",()=>{e.copyString(y)}),g.off("click.rightMenu").one("click.rightMenu",()=>{window.open(y)})):h.hide(),y&&m.test(y)&&y.trimEnd().endsWith(".png")?(r=!0,u.show(),u.off("click.rightMenu").one("click.rightMenu",()=>{e.writeClipImg(i,()=>{volantis.message("操作提示","复制成功！","success")},e=>{volantis.message("操作提示","复制失败："+e,"error")})})):u.hide(),f?(r=!0,c.show(),c.off("click.rightMenu").one("click.rightMenu",()=>{e.copyString(f)})):c.hide();const M=$("#post.article").html()||null,b=window.location.pathname;M?(t.show(),t.off("click.rightMenu").one("click.rightMenu",t=>{window.location.pathname===b?e.printHtml():e.hideMenu()})):t.hide(),r?o.hide():o.show(),(volantis.rightMenu.music=!0)&&volantis.APlayerController.APlayerLoaded&&MainAPlayer.checkAPlayer()},e.hideMenu=()=>{i.style.display="none"},e.copyString=t=>{e.writeClipText(t).then(()=>{volantis.message("操作提示",t.length>120?t.substring(0,120)+"...":t,"info")})["catch"](e=>{volantis.message("操作提示",e,"error")})},e.writeClipText=e=>{try{return navigator.clipboard.writeText(e).then(()=>Promise.resolve())["catch"](e=>Promise.reject(e))}catch(t){const n=document.createElement("input");n.setAttribute("readonly","readonly"),document.body.appendChild(n),n.setAttribute("value",e),n.select();try{let e=document.execCommand("copy");return document.body.removeChild(n),e&&"unsuccessful"!==e?Promise.resolve():Promise.reject("复制文本失败!")}catch(t){return document.body.removeChild(n),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}},e.writeClipImg=async function(e,t,n){const o=e.target.currentSrc,i=e.target.parentElement;try{const e=await fetch(o),i=await e.blob();await navigator.clipboard.write([new ClipboardItem({[i.type]:i})]).then(()=>{t()},e=>{console.error("图片复制失败：",e),n(e)})}catch(r){const e=document;try{if(e.body.createTextRange){const e=document.body.createTextRange();e.moveToElementText(i),e.select()}else if(window.getSelection){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(i),e.removeAllRanges(),e.addRange(t)}document.execCommand("copy"),window.getSelection().removeAllRanges(),t()}catch(r){console.error(r),n("不支持复制当前图片！")}}},e.readClipboard=async()=>{const e=await navigator.permissions.query({name:"clipboard-read"});return"granted"===e.state||"prompt"===e.state?navigator.clipboard.readText().then(e=>e)["catch"](e=>Promise.reject(e)):Promise.reject(e)},e.insertAtCaret=(e,t)=>{const n=e[0],o=n.selectionStart,i=n.selectionEnd;if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(o||"0"==o){var r=n.scrollTop;n.value=n.value.substring(0,o)+t+n.value.substring(i,n.value.length),e.focus(),n.selectionStart=o+t.length,n.selectionEnd=o+t.length,n.scrollTop=r}else e.value+=t,e.focus()},e.printHtml=()=>{volantis.isReadModel&&e.readingModel(),!0===volantis.rightMenu.defaultStyles&&($("body").css({backgroundColor:"unset"}),$("#l_header").hide(),$("#l_cover").hide(),$("#l_side").hide(),$("#l_main").css({width:"100%"}),$("#post").css({"box-shadow":"none",background:"none",padding:"0"}),$("h1").css({"text-align":"center","font-weight":"600","font-size":"2rem","margin-bottom":"20px"}),$(".prev-next").hide(),$("#bottom").children().append('<div class="new-meta-item"><a class="tag" href="'+window.location.href+'" rel="nofollow" data-pjax-state=""><i class="fad fa-external-link fa-fw" aria-hidden="true"></i><p>本文地址：'+window.location.href+"</p></a></div>"),$("#comments").hide(),$("#s-top").hide(),$("footer").hide(),$("#rightmenu-wrapper").hide(),$("details").attr("open","true"),$(".tab-pane").css({display:"block"}),$(".tab-content").css({"border-top":"none"}),$(".highlight>table pre").css({"white-space":"pre-wrap","word-break":"break-all"}),$(".nav-tabs").hide(),$(".backstretch").hide(),$(".fancybox img").css({height:"auto",weight:"auto"}),$("#common_bkg").hide(),$("img").removeAttr("srcset data-srcset").removeClass("img lazyload loaded")),!0===volantis.rightMenu.printJs&&volantis.rightMenu.printJsFun(),$(document).click(),setTimeout(()=>{window.print(),document.body.innerHTML="",window.location.reload()},50)},{init:(t=!1)=>{e.init(),e.initEvent(),t&&volantis.message("操作提示","自定义右键注册成功。","success")},destroy:(t=!1)=>{e.hideMenu(),$(window).off("click.rightMenu"),$(window).off("blur.rightMenu"),$(i).off("blur.rightMenu"),window.document.oncontextmenu=()=>!0,t&&volantis.message("操作提示","自定义右键注销成功。","success")},hideMenu:()=>{e.hideMenu()}}})();Object.freeze(e);