(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10],{20:function(e,a,n){"use strict";n.d(a,"j",(function(){return m})),n.d(a,"f",(function(){return T})),n.d(a,"g",(function(){return y})),n.d(a,"d",(function(){return v})),n.d(a,"k",(function(){return g})),n.d(a,"c",(function(){return j})),n.d(a,"e",(function(){return b})),n.d(a,"a",(function(){return A})),n.d(a,"m",(function(){return S})),n.d(a,"h",(function(){return D})),n.d(a,"i",(function(){return k})),n.d(a,"b",(function(){return F})),n.d(a,"l",(function(){return E}));var t=n(30),o=n(5),i=n(59),r=n(70),c=n(71),l=n(72),d=n(73),s=n(36),u=n(22),p=null,f=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),m=function(){return!1},h=function(){return Object(s.a)(new Date,"Asia/Kolkata")},T=function(){return Object(i.a)(h(),{representation:"date"})},y=function(){return Object(i.a)(Object(r.a)(h(),1),{representation:"date"})},v=function(e){return n.e(12).then(n.t.bind(null,78,7)).then((function(e){p=e[o.i[u.a.language||window.localStorage.i18nextLng]]})),Object(c.a)(new Date(e),new Date,{locale:p})},g=function(e){return e?(e.match(o.h)&&(e+=o.g),Object(s.a)(new Date(e),"Asia/Kolkata")):h()},j=function(e,a){if(!e)return"";"string"===typeof e&&e.match(o.h)&&(e+=o.g);var n=Object(s.a)(new Date(e),"Asia/Kolkata");return Object(l.a)(n,a,{locale:p})},b=function(e,a,n){return n&&o.p.includes(n)&&0===e&&(e=NaN),isNaN(e)?"-":"short"===a?(t=e,Math.abs(t)<1e3?f.format(t):Math.abs(t)>=1e3&&Math.abs(t)<1e5?f.format(t/1e3)+"K":Math.abs(t)>=1e5&&Math.abs(t)<1e7?f.format(t/1e5)+"L":Math.abs(t)>=1e7&&Math.abs(t)<1e10?f.format(t/1e7)+"Cr":Math.abs(t)>=1e10&&Math.abs(t)<1e14?f.format(t/1e10)+"K Cr":Math.abs(t)>=1e14?f.format(t/1e14)+"L Cr":void 0):("int"===a&&(e=Math.floor(e)),f.format(e)+("%"===a?"%":""));var t},A=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},S=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},D=function e(a,n,i){var r,c,l,d,s,u,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},f=p.perMillion,m=void 0!==f&&f,h=p.movingAverage,T=void 0!==h&&h,y=Object(t.a)(Object(t.a)({},o.x[i]),m&&!(null===(r=o.x[i])||void 0===r?void 0:r.normalizeByKey)&&o.q),v=y.key,g=y.normalizeByKey,j=(null===(c=o.x[i])||void 0===c?void 0:c.multiplyFactor)||1;(j*=!(null===(l=o.x[i])||void 0===l?void 0:l.normalizeByKey)&&m&&(null===o.q||void 0===o.q?void 0:o.q.multiplyFactor)||1,"delta"===n&&T)&&(n="delta7",j*=(null===(d=o.x[i])||void 0===d?void 0:d.normalizeByKey)?1:1/7);if("population"===v)s="total"===n?null===a||void 0===a||null===(u=a.meta)||void 0===u?void 0:u.population:0;else if("tested"===v){var b;s=null===a||void 0===a||null===(b=a[n])||void 0===b?void 0:b.tested}else if("active"===v){var A,S,D,k,F=(null===a||void 0===a||null===(A=a[n])||void 0===A?void 0:A.confirmed)||0,E=(null===a||void 0===a||null===(S=a[n])||void 0===S?void 0:S.deceased)||0,w=(null===a||void 0===a||null===(D=a[n])||void 0===D?void 0:D.recovered)||0,N=(null===a||void 0===a||null===(k=a[n])||void 0===k?void 0:k.other)||0;s=F-E-w-N}else{var O;s=null===a||void 0===a||null===(O=a[n])||void 0===O?void 0:O[v]}return g&&(s/=e(a,"population"===g?"total":n,g)),j*(isFinite(s)&&s||0)},k=function(e,a,n,t){var i,r,c=("tested"===o.x[a].key||"tested"===o.x[a].normalizeByKey)&&Object(d.a)(t,g(null===(i=e.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.last_updated))>o.A;return{total:c?0:D(e,"total",a,n),delta:c?0:D(e,"delta",a,n)}},F=function(e){return fetch(e).then((function(e){return e.json()}))};function E(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(t,o){e().then(t).catch((function(i){setTimeout((function(){1!==a?E(e,a-1,n).then(t,o):o(i)}),n)}))}))}},5:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"d",(function(){return r})),n.d(a,"i",(function(){return c})),n.d(a,"w",(function(){return s})),n.d(a,"x",(function(){return u})),n.d(a,"q",(function(){return p})),n.d(a,"p",(function(){return f})),n.d(a,"r",(function(){return m})),n.d(a,"b",(function(){return h})),n.d(a,"y",(function(){return T})),n.d(a,"z",(function(){return y})),n.d(a,"D",(function(){return v})),n.d(a,"G",(function(){return g})),n.d(a,"e",(function(){return j})),n.d(a,"c",(function(){return b})),n.d(a,"o",(function(){return A})),n.d(a,"A",(function(){return S})),n.d(a,"E",(function(){return D})),n.d(a,"F",(function(){return k})),n.d(a,"f",(function(){return F})),n.d(a,"h",(function(){return E})),n.d(a,"g",(function(){return w})),n.d(a,"s",(function(){return N})),n.d(a,"B",(function(){return O})),n.d(a,"C",(function(){return M})),n.d(a,"n",(function(){return K})),n.d(a,"m",(function(){return P})),n.d(a,"l",(function(){return C})),n.d(a,"k",(function(){return L})),n.d(a,"j",(function(){return U})),n.d(a,"v",(function(){return R})),n.d(a,"t",(function(){return z})),n.d(a,"u",(function(){return J}));var t=n(23),o=n(41),i="https://api.covid19india.org",r="".concat(i,"/v4/min"),c={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},l={confirmed:{displayName:"confirmed",color:"#ff073a",format:"int",options:{key:"confirmed"}},active:{displayName:"active",color:"#007bff",format:"int",options:{key:"active"},hideDelta:!0},recovered:{displayName:"recovered",color:"#28a745",format:"int",options:{key:"recovered"}},deceased:{displayName:"deceased",color:"#6c757d",format:"int",options:{key:"deceased"}},other:{displayName:"other",format:"int",options:{key:"other"}},tested:{displayName:"tested",color:"#4b1eaa",format:"short",options:{key:"tested"}},vaccinated:{displayName:"vaccine doses administered",color:"#fb5581",format:"short",options:{key:"vaccinated"}},activeRatio:{displayName:"active ratio",format:"%",options:{key:"active",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",options:{key:"recovered",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},cfr:{displayName:"case fatality ratio",format:"%",options:{key:"deceased",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},tpr:{displayName:"test positivity ratio",format:"%",options:{key:"confirmed",normalizeByKey:"tested",multiplyFactor:100},color:"#fd7e14",hideDelta:!0},population:{displayName:"population",format:"short",options:{key:"population"},hideDelta:!0}},d=Object.keys(l).reduce((function(e,a){var n=l[a],t=n.options,i=Object(o.a)(n,["options"]);return e.options[a]=t,e.configs[a]=i,e}),{options:{},configs:{}}),s=d.configs,u=d.options,p={normalizeByKey:"population",multiplyFactor:1e6},f=["tested","vaccinated","tpr","population"],m=["confirmed","active","recovered","deceased"],h=["other","deceased","recovered","active"],T=[].concat(m,["tested","vaccinated"]),y=Object.keys(l),v=[].concat(m,["tested","vaccinated"]),g=5,j=40,b=300,A=20,S=7,D="UN",k="Unknown",F="2020-04-26",E=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,w="T00:00:00+05:30",N={clamp:!0,precision:1},O={total:"Cumulative",delta:"Daily"},M=[null,90,30],K={CHOROPLETH:0,BUBBLES:1},P={STATES:0,DISTRICTS:1},C={COUNTRY:0,STATE:1},B="/mini_maps",L={AP:{geoDataFile:"".concat(B,"/andhrapradesh.json"),mapType:C.STATE},AR:{geoDataFile:"".concat(B,"/arunachalpradesh.json"),mapType:C.STATE},AS:{geoDataFile:"".concat(B,"/assam.json"),mapType:C.STATE},BR:{geoDataFile:"".concat(B,"/bihar.json"),mapType:C.STATE},CT:{geoDataFile:"".concat(B,"/chhattisgarh.json"),mapType:C.STATE},GA:{geoDataFile:"".concat(B,"/goa.json"),mapType:C.STATE},GJ:{geoDataFile:"".concat(B,"/gujarat.json"),mapType:C.STATE},HR:{geoDataFile:"".concat(B,"/haryana.json"),mapType:C.STATE},HP:{geoDataFile:"".concat(B,"/himachalpradesh.json"),mapType:C.STATE},JK:{geoDataFile:"".concat(B,"/jammukashmir.json"),mapType:C.STATE},JH:{geoDataFile:"".concat(B,"/jharkhand.json"),mapType:C.STATE},KA:{geoDataFile:"".concat(B,"/karnataka.json"),mapType:C.STATE},KL:{geoDataFile:"".concat(B,"/kerala.json"),mapType:C.STATE},MP:{geoDataFile:"".concat(B,"/madhyapradesh.json"),mapType:C.STATE},MH:{geoDataFile:"".concat(B,"/maharashtra.json"),mapType:C.STATE},MN:{geoDataFile:"".concat(B,"/manipur.json"),mapType:C.STATE},ML:{geoDataFile:"".concat(B,"/meghalaya.json"),mapType:C.STATE},MZ:{geoDataFile:"".concat(B,"/mizoram.json"),mapType:C.STATE},NL:{geoDataFile:"".concat(B,"/nagaland.json"),mapType:C.STATE},OR:{geoDataFile:"".concat(B,"/odisha.json"),mapType:C.STATE},PB:{geoDataFile:"".concat(B,"/punjab.json"),mapType:C.STATE},RJ:{geoDataFile:"".concat(B,"/rajasthan.json"),mapType:C.STATE},SK:{geoDataFile:"".concat(B,"/sikkim.json"),mapType:C.STATE},TN:{geoDataFile:"".concat(B,"/tamilnadu.json"),mapType:C.STATE},TG:{geoDataFile:"".concat(B,"/telangana.json"),mapType:C.STATE},TR:{geoDataFile:"".concat(B,"/tripura.json"),mapType:C.STATE},UT:{geoDataFile:"".concat(B,"/uttarakhand.json"),mapType:C.STATE},UP:{geoDataFile:"".concat(B,"/uttarpradesh.json"),mapType:C.STATE},WB:{geoDataFile:"".concat(B,"/westbengal.json"),mapType:C.STATE},AN:{geoDataFile:"".concat(B,"/andamannicobarislands.json"),mapType:C.STATE},CH:{geoDataFile:"".concat(B,"/chandigarh.json"),mapType:C.STATE},DN:{geoDataFile:"".concat(B,"/dnh-and-dd.json"),mapType:C.STATE},DL:{geoDataFile:"".concat(B,"/delhi.json"),mapType:C.STATE},LA:{geoDataFile:"".concat(B,"/ladakh.json"),mapType:C.STATE},LD:{geoDataFile:"".concat(B,"/lakshadweep.json"),mapType:C.STATE},PY:{geoDataFile:"".concat(B,"/puducherry.json"),mapType:C.STATE},TT:{geoDataFile:"".concat(B,"/india.json"),mapType:C.COUNTRY}},U=50,R=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},D,"Unassigned"),x=[],H={};Object.keys(R).map((function(e,a){return H[R[e]]=e,x.push({code:e,name:R[e]}),null}));var z=H,J=x},69:function(e,a,n){"use strict";n.r(a);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=n(5),r=n(20),c=n(22),l=n(53),d=n(54),s=n(77);c.a.use(d.a).use(l.a).use(s.e).init({debug:Object(r.j)()&&false,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"".concat(i.a,"/locales/locale_{{lng}}.json"),addPath:"http://localhost:9999/"},saveMissing:Object(r.j)()&&false,interpolation:{escapeValue:!1}});c.a;var u=n(2),p=n(40),f=n(38),m=n(18),h=Object(u.lazy)((function(){return Object(r.l)((function(){return Promise.all([n.e(14),n.e(23)]).then(n.bind(null,716))}))})),T=document.getElementById("root"),y=function(){return Object(p.render)(Object(m.jsx)(u.Suspense,{fallback:Object(m.jsx)("div",{}),children:Object(m.jsx)(f.a,{children:Object(m.jsx)(u.StrictMode,{children:Object(m.jsx)(h,{})})})}),T)};window.requestIdleCallback&&window.IntersectionObserver?y():function(e,a){var n=document.createElement("script");n.src=e,n.onload=function(){a()},n.onerror=function(){a(new Error("Failed to load script "+e))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",y),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var a="".concat("","/service-worker.js");t?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}),3e3)}))}}()}},[[69,11,13]]]);
//# sourceMappingURL=main.25a33a04.chunk.js.map