const RightMenus={defaultEvent:["copyText","copyLink","copyPaste","copyAll","copyCut","copyImg","printMode","readMode"],defaultGroup:["navigation","inputBox","seletctText","elementCheck","articlePage"],messageRightMenu:volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.rightmenu.enable,urlRegx:/^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,initialMenu:()=>{RightMenus.fun.init(),volantis.pjax.send((()=>{RightMenus.fun.hideMenu(),volantis.isReadModel&&RightMenus.fun.readMode()}))},readClipboard:async()=>{const e=await navigator.permissions.query({name:"clipboard-read"});return"granted"===e.state||"prompt"===e.state?navigator.clipboard.readText().then((e=>e)).catch((e=>Promise.reject(e))):Promise.reject(e)},writeClipText:e=>navigator.clipboard.writeText(e).then((()=>Promise.resolve())).catch((e=>Promise.reject(e))),writeClipImg:async(e,t,n)=>{const o=new Image;o.crossOrigin="Anonymous",o.addEventListener("load",(()=>{let e=document.createElement("canvas"),i=e.getContext("2d");e.width=o.width,e.height=o.height,i.drawImage(o,0,0),e.toBlob((e=>{navigator.clipboard.write([new ClipboardItem({"image/png":e})]).then((e=>{t(e)})).catch((e=>{n(e)}))}),"image/png")}),!1),o.src=e},insertAtCaret:(e,t)=>{const n=e.selectionStart,o=e.selectionEnd;if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(n||"0"==n){var i=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length,e.scrollTop=i}else e.value+=t,e.focus()}};RightMenus.fun=(()=>{const e=volantis.GLOBAL_CONFIG.plugins.rightmenus,t={},n=document.getElementById("rightmenu-wrapper"),o=document.getElementById("rightmenu-content"),i=document.querySelectorAll("#rightmenu-content li.menuLoad-Content"),a=document.getElementById("read_bkg"),r=document.getElementById("menuMusic"),l=document.querySelector("#menuMusic .backward"),s=document.querySelector("#menuMusic .toggle"),c=document.querySelector("#menuMusic .forward"),u=document.querySelectorAll("#rightmenu-content hr");let d={mouseEvent:null,isInputBox:!1,selectText:"",inputValue:"",isLink:!1,linkUrl:"",isMediaLink:!1,mediaLinkUrl:"",isPngImg:!1,isArticle:!1,pathName:"",isReadClipboard:!1,readClipboard:"",isShowMusic:!1,statusCheck:!1};const m=Object.assign({},d);return t.initEvent=()=>{t.elementAppend(),t.contextmenu(),t.menuEvent()},t.elementAppend=()=>{a&&a.parentNode.removeChild(a);const e=document.createElement("div");e.className="common_read_bkg common_read_hide",e.id="read_bkg",window.document.body.appendChild(e)},t.menuPosition=e=>{try{let i=e.clientX,a=e.clientY,r=document.documentElement.clientWidth||document.body.clientWidth,l=document.documentElement.clientHeight||document.body.clientHeight;n.style.display="block",t.menuControl(e);let s=o.offsetWidth,c=o.offsetHeight,u=i+s>r?i-s+10:i,d=a+c>l?a-c+10:a;d=a+c>l&&d<c&&a<c?d+(l-c-d-10):d,n.style.left=`${u}px`,n.style.top=`${d}px`,volantis.GLOBAL_CONFIG.plugins.message.rightmenu.notice&&t.menuNotic()}catch(e){return volantis.GLOBAL_CONFIG.debug&&console.error(e),t.hideMenu(),!0}return!1},t.menuControl=n=>{t.globalDataSet(n),r&&(r.style.display=d.isShowMusic?"block":"none"),i.forEach((t=>{t.style.display="none";const n=t.firstElementChild.nodeName,o=t.firstElementChild.getAttribute("data-group"),i=t.firstElementChild.getAttribute("data-event");if(d.statusCheck||d.isArticle)switch(o){case"inputBox":d.isInputBox&&(t.style.display="block"),"copyCut"!==i||d.selectText||(t.style.display="none"),"copyPaste"===i&&RightMenus.readClipboard().then((e=>{e?(d.isReadClipboard=!0,d.readClipboard=e):t.style.display="none"})).catch((()=>{t.style.display="none"}));break;case"seletctText":d.selectText&&(t.style.display="block");break;case"elementCheck":(d.isLink||d.isMediaLink)&&(t.style.display="block"),"copyImg"!==i||d.isPngImg||(t.style.display="none");break;case"articlePage":d.isArticle&&(t.style.display="block");break;default:t.style.display="A"===n?d.isArticle&&!d.statusCheck&&e.options.articleShowLink?"block":"none":"block"}else("A"===n||RightMenus.defaultGroup.every((e=>o!==e)))&&(t.style.display="block")})),u.forEach((e=>{e.style.display=d.statusCheck?"none":"block"}))},t.globalDataSet=t=>{d=Object.assign({},m),d.mouseEvent=t,d.selectText=window.getSelection().toString(),"input"!==t.target.tagName.toLowerCase()&&"textarea"!==t.target.tagName.toLowerCase()||(d.isInputBox=!0,d.inputValue=t.target.value),t.target.href&&RightMenus.urlRegx.test(t.target.href)&&(d.isLink=!0,d.linkUrl=t.target.href),t.target.currentSrc&&RightMenus.urlRegx.test(t.target.currentSrc)&&(d.isMediaLink=!0,d.mediaLinkUrl=t.target.currentSrc),d.isMediaLink&&(d.isPngImg=!0),document.querySelector("#post.article")&&(d.isArticle=!0,d.pathName=window.location.pathname),volantis.GLOBAL_CONFIG.plugins.aplayer.enable&&"undefined"!=typeof RightMenuAplayer&&void 0!==RightMenuAplayer.APlayer.player&&(e.options.musicAlwaysShow||"play"===RightMenuAplayer.APlayer.status||"undefined"===RightMenuAplayer.APlayer.status)&&(d.isShowMusic=!0),(d.selectText||d.isInputBox||d.isLink||d.isMediaLink)&&(d.statusCheck=!0)},t.contextmenu=()=>{window.document.oncontextmenu=e=>e.ctrlKey||document.body.offsetWidth<=500?(t.hideMenu(),!0):t.menuPosition(e),n.oncontextmenu=e=>(e.stopPropagation(),e.preventDefault(),!1),window.removeEventListener("blur",t.hideMenu),window.addEventListener("blur",t.hideMenu),document.body.removeEventListener("click",t.hideMenu),document.body.addEventListener("click",t.hideMenu)},t.menuEvent=()=>{i.forEach((n=>{let o=n.firstElementChild.getAttribute("data-event");const i=n.firstElementChild.getAttribute("id"),a=n.firstElementChild.getAttribute("data-group");"A"!==n.firstElementChild.nodeName&&n.addEventListener("click",(()=>{try{RightMenus.defaultEvent.every((e=>o!==e))?"seletctText"===a?RightMenusFunction[i](d.selectText):"elementCheck"===a?RightMenusFunction[i](d.isLink?d.linkUrl:d.mediaLinkUrl):RightMenusFunction[i]():t[o]()}catch(t){volantis.GLOBAL_CONFIG.debug&&console.error({id:i,error:t,globalData:d,groupName:a,eventName:o}),RightMenus.messageRightMenu&&VolantisApp.message("错误提示",t,{icon:e.options.iconPrefix+" fa-exclamation-square red",time:"15000"})}}))})),c&&s&&c&&(l.onclick=e=>{e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerBackward()},s.onclick=e=>{e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerToggle()},c.onclick=e=>{e.preventDefault(),e.stopPropagation(),RightMenuAplayer.aplayerForward()})},t.hideMenu=()=>{n.style.display=null,n.style.left=null,n.style.top=null},t.menuNotic=()=>{const t="true"===localStorage.getItem("NoticeRightMenu");RightMenus.messageRightMenu&&!t&&VolantisApp.message("右键菜单","唤醒原系统菜单请使用：<kbd>Ctrl</kbd> + <kbd>右键</kbd>",{icon:e.options.iconPrefix+" fa-exclamation-square red",displayMode:1,time:9e3},(()=>{localStorage.setItem("NoticeRightMenu","true")}))},t.copyText=()=>{VolantisApp.utilWriteClipText(d.selectText).then((()=>{RightMenus.messageRightMenu&&VolantisApp.messageCopyright()})).catch((t=>{RightMenus.messageRightMenu&&VolantisApp.message("系统提示",t,{icon:e.options.iconPrefix+" fa-exclamation-square red",displayMode:1,time:9e3})}))},t.copyLink=()=>{VolantisApp.utilWriteClipText(d.linkUrl||d.mediaLinkUrl).then((()=>{RightMenus.messageRightMenu&&VolantisApp.messageCopyright()})).catch((t=>{RightMenus.messageRightMenu&&VolantisApp.message("系统提示",t,{icon:e.options.iconPrefix+" fa-exclamation-square red",displayMode:1,time:9e3})}))},t.copyAll=()=>{d.mouseEvent.target.select()},t.copyPaste=()=>{RightMenus.insertAtCaret(d.mouseEvent.target,d.readClipboard)},t.copyCut=()=>{const e=d.mouseEvent.target.selectionStart,n=d.mouseEvent.target.selectionEnd,o=d.inputValue;t.copyText(d.selectText),d.mouseEvent.target.value=o.substring(0,e)+o.substring(n,o.length),d.mouseEvent.target.selectionStart=e,d.mouseEvent.target.selectionEnd=e,d.mouseEvent.target.focus()},t.copyImg=()=>{RightMenus.writeClipImg(d.mediaLinkUrl,(t=>{RightMenus.messageRightMenu&&VolantisApp.message("系统提示","图片复制成功！",{icon:e.options.iconPrefix+" fa-images"})}),(t=>{console.error(t),RightMenus.messageRightMenu&&VolantisApp.message("系统提示","复制失败："+t,{icon:e.options.iconPrefix+" fa-exclamation-square red",time:9e3})}))},t.printMode=()=>{if(window.location.pathname===d.pathName)if(RightMenus.messageRightMenu){const e='是否打印当前页面？<br><em style="font-size: 80%">建议打印时勾选背景图形</em><br>';VolantisApp.question("",e,{time:9e3},(()=>{t.printHtml()}))}else t.printHtml()},t.printHtml=()=>{volantis.isReadModel&&t.readMode(),DOMController.setAttribute("details","open","true"),DOMController.removeList([".cus-article-bkg",".iziToast-overlay",".iziToast-wrapper",".prev-next","footer","#l_header","#l_cover","#l_side","#comments","#s-top","#BKG","#rightmenu-wrapper",".nav-tabs",".parallax-mirror",".new-meta-item.share","div.footer"]),DOMController.setStyleList([["body","backgroundColor","unset"],["#l_main","width","100%"],["#post","boxShadow","none"],["#post","background","none"],["#post","padding","0"],["h1","textAlign","center"],["h1","fontWeight","600"],["h1","fontSize","2rem"],["h1","marginBottom","20px"],[".tab-pane","display","block"],[".tab-content","borderTop","none"],[".highlight>table pre","whiteSpace","pre-wrap"],[".highlight>table pre","wordBreak","break-all"],[".fancybox img","height","auto"],[".fancybox img","weight","auto"]]),setTimeout((()=>{window.print(),document.body.innerHTML="",window.location.reload()}),50)},t.readMode=()=>{"function"==typeof ScrollReveal&&ScrollReveal().clean("#comments"),DOMController.fadeToggleList([document.querySelector("#l_header"),document.querySelector("footer"),document.querySelector("#s-top"),document.querySelector(".article-meta#bottom"),document.querySelector(".prev-next"),document.querySelector("#l_side"),document.querySelector("#comments")]),DOMController.toggleClassList([[document.querySelector("#l_main"),"common_read"],[document.querySelector("#l_main"),"common_read_main"],[document.querySelector("#l_body"),"common_read"],[document.querySelector("#safearea"),"common_read"],[document.querySelector("#pjax-container"),"common_read"],[document.querySelector("#read_bkg"),"common_read_hide"],[document.querySelector("h1"),"common_read_h1"],[document.querySelector("#post"),"post_read"],[document.querySelector("#l_cover"),"read_cover"],[document.querySelector(".widget.toc-wrapper"),"post_read"]]),volantis.isReadModel=void 0===volantis.isReadModel||!volantis.isReadModel,volantis.isReadModel?(RightMenus.messageRightMenu&&VolantisApp.message("系统提示","阅读模式已开启，您可以点击屏幕空白处退出。",{backgroundColor:"var(--color-read-post)",icon:e.options.iconPrefix+" fa-book-reader",displayMode:1,time:5e3}),document.querySelector("#l_body").removeEventListener("click",t.readMode),document.querySelector("#l_body").addEventListener("click",(e=>{DOMController.hasClass(e.target,"common_read")&&t.readMode()}))):(document.querySelector("#l_body").removeEventListener("click",t.readMode),document.querySelector("#post").removeEventListener("click",t.readMode),document.querySelector(".prev-next").style.display="flex")},{init:t.initEvent,hideMenu:t.hideMenu,readMode:t.readMode}})(),Object.freeze(RightMenus),volantis.requestAnimationFrame((()=>{"loading"!==document.readyState?RightMenus.initialMenu():document.addEventListener("DOMContentLoaded",(function(){RightMenus.initialMenu()}))}));
//# sourceMappingURL=../../maps/js/plugins/rightMenus.604f5b4c.js.map
