const e={requestAPI:(e,t,r)=>{let n=5;!function s(){return new Promise(((a,o)=>{let c=0,l=setTimeout((()=>{0===c&&(c=2,l=null,o("请求超时"),0==n&&r())}),5e3);fetch(e).then((function(e){if(2!==c&&(clearTimeout(l),a(e),l=null,c=1),e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){n=0,t(e)}))["catch"]((function(e){n>0?(n-=1,setTimeout((()=>{s()}),5e3)):r()}))}))}()},layout:t=>{const r=t.el;e.requestAPI(t.api,(function(e){r.querySelector(".loading-wrap").remove();const n=e.content;var s="";n.forEach(((e,r)=>{var n='<div class="site-card">';n+='<a class="card-link" target="_blank" rel="external noopener noreferrer" href="'+e.url+'">',n+='<img alt="'+e.title+'" src="'+(e.screenshot||"https://image.thum.io/get/width/1024/crop/768/"+e.url)+'" onerror="javascript:this.src=\''+t.screenshot+"';\"/>",n+='<div class="info">',n+='<img alt="'+e.title+'" src="'+(e.avatar||t.avatar)+'" onerror="javascript:this.src=\''+t.avatar+"';\"/>",n+='<span class="title">'+e.title+"</span>",n+='<span class="desc">'+(e.description||e.url)+"</span>",n+="</div>",n+="</a>",s+=n+="</div>"})),r.querySelector(".group-body").innerHTML=s}),(function(){try{r.querySelector(".loading-wrap svg").remove(),r.querySelector(".loading-wrap p").innerText("加载失败，请稍后重试。")}catch(e){}}))},start:t=>{const r=document.getElementsByClassName("sitesjs-wrap");for(var n=0;n<r.length;n++){const s=r[n],a=s.getAttribute("api");if(null!=a)(t=new Object)["class"]=s.getAttribute("class"),t.el=s,t.api=a,t.avatar="https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/link/8f277b4ee0ecd.svg",t.screenshot="https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/cover/76b86c0226ffd.svg",e.layout(t)}}};e.start(),document.addEventListener("pjax:complete",(function(){e.start()}));