(()=>{"use strict";var r={524:(r,n,e)=>{e.d(n,{Z:()=>u});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),c=e(667),s=e.n(c),d=new URL(e(851),e.b),l=i()(o()),p=s()(d);l.push([r.id,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-bottom: 0;\r\n}\r\nbody {\r\n  font-family: 'Mulish', sans-serif;\r\n  font-size: 16px;\r\n\r\n  /* background: linear-gradient(130deg, #86e3ce, #d0e6a5); */\r\n  /* background: linear-gradient(33deg, #d5eaf5, #ededed); */\r\n  /* background: linear-gradient(360deg, #d5d5d5, #fcfcfc); */\r\n  /* background: linear-gradient(250deg, #e4e8f1, #fbfbfb); */\r\n  /* background-color: #f3f3f3; */\r\n  /* background-color: white; */\r\n\r\n  /* background-color: #d5d5d5; */\r\n  background-image: url("+p+");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\n/* ////// SCROLL BAR /////// */\r\n\r\n/* width */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: darkgrey;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: grey;\r\n}\r\n\r\n.search {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  margin-top: 1%;\r\n  width: 50%;\r\n}\r\n\r\n.input_search {\r\n  position: relative;\r\n  width: 20em;\r\n  height: 2.5em;\r\n  border-radius: 1vw;\r\n  font-size: 1.2em;\r\n  text-align: center;\r\n  font-family: 'Mulish', sans-serif;\r\n  /* margin-left: 5%;\r\n  margin-right: 0.5%; */\r\n  border: 1px solid rgb(189, 189, 189);\r\n  box-shadow: 0 1em 1em #cdcdcd;\r\n  margin-left: 12%;\r\n  margin-right: 1%;\r\n  cursor: default;\r\n}\r\n\r\n.input_search:focus {\r\n  outline: none;\r\n  cursor: text;\r\n}\r\n\r\n.button_search {\r\n  /* position: absolute; */\r\n  /* right: 40em; */\r\n  width: 6em;\r\n  height: 3em;\r\n  border-radius: 1vw;\r\n  font-size: 1em;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: 'Mulish', sans-serif;\r\n  border: 1px solid rgb(189, 189, 189);\r\n  background: #1266f1;\r\n  cursor: pointer;\r\n  box-shadow: 0 1em 1em #cdcdcd;\r\n}\r\n\r\n.button_search:hover {\r\n  background: #0b59d8;\r\n  transition: all 1s;\r\n}\r\n.main_container {\r\n  height: 50em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.app_main {\r\n  width: 60em;\r\n\r\n  /* border: 1px solid black; */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2%;\r\n  border-radius: 8em;\r\n  background: white;\r\n  box-shadow: 0 1rem 10rem rgba(0, 0, 0, 0.3);\r\n  transition: all 1s;\r\n}\r\n\r\n.app_main:hover {\r\n  transform: translateY(-20px);\r\n  cursor: pointer;\r\n}\r\n\r\n.app_description {\r\n  text-align: center;\r\n  font-size: 1.3em;\r\n  line-height: 2.5em;\r\n}\r\n\r\n.title_main {\r\n  height: 0.5em;\r\n}\r\n\r\n.img_main {\r\n  width: 20%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.link_div {\r\n  width: 6.5em;\r\n  padding: 0.7em;\r\n  margin: auto;\r\n  margin-top: 2%;\r\n  background: #1266f1;\r\n  border-radius: 2em;\r\n  box-shadow: 0 1em 1em #cdcdcd;\r\n}\r\n.link_info {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 1em;\r\n  /* padding: 10%; */\r\n}\r\n\r\n.link_div:hover {\r\n  background: #0b59d8;\r\n}\r\n\r\n.article_container {\r\n  /* display: none; */\r\n  width: 70%;\r\n  margin: auto;\r\n  /* border: 2px solid black; */\r\n  border-radius: 5em;\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n  margin-top: 3%;\r\n  transform: translateX(200px);\r\n  background-color: white;\r\n  opacity: 0;\r\n  box-shadow: 0 0 1rem 1rem rgba(0, 0, 0, 0.1);\r\n  transition: all 1s;\r\n}\r\n\r\n.title_summary {\r\n  text-align: center;\r\n}\r\n.summary_description {\r\n  padding: 1%;\r\n\r\n  text-align: center;\r\n}\r\n.summary_description p {\r\n  font-family: 'Mulish', sans-serif;\r\n  font-weight: 500;\r\n  /* color: #4a4a4a; */\r\n  line-height: 1.7em;\r\n  font-size: 1.1em;\r\n  padding-left: 15%;\r\n  padding-right: 15%;\r\n}\r\n.city_score {\r\n  text-align: center;\r\n}\r\n.title_categories {\r\n  padding: 4%;\r\n}\r\n\r\n.title_categories h2 {\r\n  font-size: 1.4em;\r\n}\r\n\r\n.container_categories {\r\n  /* display: none; */\r\n\r\n  width: 50%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* border: 2px solid black; */\r\n  padding-bottom: 5%;\r\n  margin-top: 3%;\r\n  border-radius: 5em;\r\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\r\n  transform: translateX(-200px);\r\n  opacity: 0;\r\n  background-color: white;\r\n  transition: all 1s;\r\n}\r\n\r\n.section_categories {\r\n  width: 70%;\r\n  height: 1.9em;\r\n  margin-bottom: 0.9%;\r\n}\r\n.categories {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  text-align: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.progressBar {\r\n  position: absolute;\r\n  left: 40%;\r\n\r\n  /* right: 8vw; */\r\n  width: 45%;\r\n  background-color: #d5d5d5;\r\n  height: 0.6em;\r\n  border-radius: 20px;\r\n  transition: 2s;\r\n}\r\n\r\n.value {\r\n  width: 80%;\r\n  height: 0.6em;\r\n  border-radius: 2em;\r\n  background-color: black;\r\n  align-items: initial;\r\n  opacity: 1;\r\n}\r\n\r\nspan {\r\n  /* position: absolute; */\r\n  top: 3%;\r\n  /* right: 60%; */\r\n  font-size: 0.5em;\r\n  font-weight: 500;\r\n}\r\n\r\n.error {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.footer_container {\r\n  margin-top: 0;\r\n  display: block;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  height: 9em;\r\n  /* border-top: 2px solid black; */\r\n  /* background-color: rgba(0, 0, 0, 0.9); */\r\n  background: #37383d;\r\n  border-radius: 0.5em 0.5em 0 0;\r\n}\r\n.link {\r\n  display: flex;\r\n  width: 10%;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n}\r\n\r\n.copyright_div {\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.footer_container .footer {\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 15px;\r\n}\r\n.footerContainer .footer .icon {\r\n  padding: 30px;\r\n  width: 85px;\r\n}\r\n.footer_container .footer .email {\r\n  color: white;\r\n}\r\n.footer_container .footer .copyright {\r\n  padding-bottom: 10px;\r\n}\r\n.footer_container .footer .github {\r\n  color: white;\r\n}\r\n\r\n.footer_container .footer .email:hover,\r\n.footer_container .footer .github:hover {\r\n  color: #d5d5d5;\r\n}\r\n",""]);const u=l},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},851:r=>{r.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27 viewBox=%270 0 1600 800%27%3E%3Cg %3E%3Cpath fill=%27%23dddddd%27 d=%27M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z%27/%3E%3Cpath fill=%27%23e6e6e6%27 d=%27M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z%27/%3E%3Cpath fill=%27%23eeeeee%27 d=%27M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z%27/%3E%3Cpath fill=%27%23f7f7f7%27 d=%27M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z%27/%3E%3Cpath fill=%27%23FFFFFF%27 d=%27M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z%27/%3E%3Cpath fill=%27%23f8f8f8%27 d=%27M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z%27/%3E%3Cpath fill=%27%23f0f0f0%27 d=%27M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z%27/%3E%3Cpath fill=%27%23e9e9e9%27 d=%27M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z%27/%3E%3Cpath fill=%27%23e1e1e1%27 d=%27M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z%27/%3E%3Cpath fill=%27%23DADADA%27 d=%27M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z%27/%3E%3C/g%3E%3C/svg%3E"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.m=r,e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.p="dist/img/",e.b=document.baseURI||self.location.href;var t={};(()=>{let r,n,o,a,i,c;e.d(t,{zy:()=>k,hi:()=>_,F4:()=>S,dK:()=>T,Nf:()=>E,Qg:()=>z}),console.log("ciao belli");var s=e(379),d=e.n(s),l=e(795),p=e.n(l),u=e(569),f=e.n(u),m=e(565),g=e.n(m),h=e(216),b=e.n(h),y=e(589),v=e.n(y),x=e(524),w={};w.styleTagTransform=v(),w.setAttributes=g(),w.insert=f().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=b(),d()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals,e.p,e.p,e.p,e.p,e.p,e.p;const _=document.querySelector(".container_categories"),C=document.querySelector(".article_container"),k=document.querySelector(".summary_description"),E=document.querySelector(".input_search"),M=document.querySelector(".button_search"),z=document.querySelector(".title"),L=document.querySelector(".main_container"),S=document.querySelector(".error"),T=document.querySelector(".footer_container"),H=async function(e){const t=await async function(r){try{return await axios.get(`https://api.teleport.org/api/urban_areas/slug:${r}/scores/`).then((r=>({dataTeleport:r,summary:r.data.summary,cityScoreData:r.data.teleport_city_score.toFixed(1)})))}catch(r){E.value="",S.style.opacity=1,S.innerText=`Error${r.response.status}. City not found. Please try again!`}}(e);console.log("stupid thing"),function(r,n){const e=document.createElement("h3"),t=document.createElement("div"),o=document.createElement("h2"),a=document.createElement("div"),i=document.createElement("a");i.setAttribute("href",`https://teleport.org/cities/${n}/`),i.setAttribute("target","_blank"),e.classList.add("city_score"),t.classList.add("title_categories"),a.classList.add("link_div"),i.classList.add("link_info"),k.insertAdjacentHTML("afterbegin",r.summary),k.appendChild(e),_.append(t),t.appendChild(o),k.appendChild(a),a.append(i),z.textContent=`${n.toUpperCase().replace("-"," ")}`,e.textContent=`CITY SCORE: ${r.cityScoreData}%`,o.textContent="LIFE SCORE QUALITY",i.textContent="More info"}(t,e),t.dataTeleport.data.categories.forEach((e=>{r=document.createElement("section"),n=document.createElement("div"),o=document.createElement("span"),a=document.createElement("span"),i=document.createElement("div"),c=document.createElement("div"),r.classList.add("section_categories"),n.classList.add("categories"),a.classList.add("percentage"),c.classList.add("value"),i.classList.add("progressBar");const t=10*e.score_out_of_10.toFixed(1);!function(e,t,i){_.appendChild(r),r.appendChild(n),o.append(e.name),n.append(o),a.append(`${t}%`),n.appendChild(i),i.appendChild(c),n.append(a)}(e,t,i),function(r,n){c.style.width=`${r}%`,c.style.backgroundColor=n.color}(t,e),T.style.display="block",T.style.marginTop="10%",E.value="",j()}))},j=function(){C.style.opacity=1,_.style.opacity=1,C.style.transform="translateX(0)",C.style.transition="all 1.5s",_.style.transform="translateX(0)",_.style.transition="all 1.5s"};M.addEventListener("click",(function(){C.style.opacity=0,_.style.opacity=0,C.style.transition="all 0.4s",_.style.transition="all 0.4s",S.style.opacity=0,k.innerHTML="",_.innerHTML="",z.innerHTML="",L.style.display="none",T.style.display="none",H(E.value.toLowerCase().replace(" ","-"))}))})()})();