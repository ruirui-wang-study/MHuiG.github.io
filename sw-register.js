navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js?v=20200305091756").then(function(){navigator.serviceWorker.addEventListener("message",function(e){if("sw.update"===e.data){var a=document.querySelector("meta[name=theme-color]"),r=document.createElement("div");a&&(a.content="#000"),r.innerHTML='<style>.app-refresh{background:#000;height:0;line-height:52px;overflow:hidden;position:fixed;top:0;left:0;right:0;z-index:10001;padding:0 18px;transition:all .3s ease;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;}.app-refresh-wrap{display:flex;color:#fff;font-size:15px;}.app-refresh-wrap label{flex:1;}.app-refresh-show{height:52px;}</style><div class="app-refresh" id="app-refresh"><div class="app-refresh-wrap" onclick="location.reload()"><label>已更新最新版本</label><span>点击刷新</span></div></div>',document.body.appendChild(r),setTimeout(function(){document.getElementById("app-refresh").className+=" app-refresh-show"},16)}})});