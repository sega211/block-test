(()=>{"use strict";var e,t,n,r={21:(e,t,n)=>{let r;function a(){if(!r)return;document.querySelectorAll("[data-i18n]").forEach((e=>{const t=e.getAttribute("data-i18n");e.textContent=r.t(t)}));const e={footerText:document.querySelector("footer p"),pageTitle:document.querySelector(".page-title"),pageContent:document.querySelector(".page-content")},t=document.body.dataset.page;t&&(e.pageTitle&&(e.pageTitle.textContent=r.t(`${t}.title`)),e.pageContent&&(e.pageContent.textContent=r.t(`${t}.content`)))}document.addEventListener("DOMContentLoaded",(async()=>{!function(e){const t=document.querySelector(".language-switcher"),n=document.querySelector(".header__burger"),r=document.querySelector(".header__nav");t&&e&&t.addEventListener("click",(async t=>{if("BUTTON"===t.target.tagName){const n=t.target.dataset.lang;try{await e.changeLanguage(n)}catch(e){}}})),n&&n.addEventListener("click",(()=>{r.classList.toggle("active"),n.classList.toggle("active")}))}(await async function(){if(r)return r;const{default:e}=await Promise.all([n.e(96),n.e(768)]).then(n.bind(n,768));return r=await e(),r.on("languageChanged",a),document.addEventListener("DOMContentLoaded",a),r}()),function(){const e=document.getElementById("scrollToTopBtn");e&&(window.addEventListener("scroll",(()=>{window.scrollY>300?e.style.display="flex":e.style.display="none"})),e.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})))}()}))}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,r,a]=e[s],l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,r,a]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"js/"+(96===e?"vendors":e)+"."+{96:"4ed7cea9ce54d1656367",768:"777be09acb12e57ce4a0"}[e]+".js",o.miniCssF=e=>{},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="multilang:",o.l=(e,r,a,i)=>{if(t[e])t[e].push(r);else{var l,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+a){l=u;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",n+a),l.src=e),t[e]=[r];var g=(n,r)=>{l.onerror=l.onload=null,clearTimeout(f);var a=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(r))),n)return n(r)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=g.bind(null,l.onerror),l.onload=g.bind(null,l.onload),c&&document.head.appendChild(l)}},o.p="/landings/multilang/",(()=>{var e={962:0,256:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(256!=t){var a=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=a);var i=o.p+o.u(t),l=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}}),"chunk-"+t,t)}else e[t]=0},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,l,c]=n,d=0;if(i.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var s=c(o)}for(t&&t(n);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},n=self.webpackChunkmultilang=self.webpackChunkmultilang||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[256],(()=>o(21)));i=o.O(i)})();