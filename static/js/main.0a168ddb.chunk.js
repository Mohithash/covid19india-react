(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[5],{23:function(a,n,e){"use strict";e.d(n,"d",(function(){return t})),e.d(n,"k",(function(){return o})),e.d(n,"o",(function(){return i})),e.d(n,"r",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"j",(function(){return l})),e.d(n,"s",(function(){return u})),e.d(n,"c",(function(){return d})),e.d(n,"a",(function(){return s})),e.d(n,"p",(function(){return T})),e.d(n,"q",(function(){return p})),e.d(n,"i",(function(){return h})),e.d(n,"h",(function(){return g})),e.d(n,"g",(function(){return f})),e.d(n,"f",(function(){return v})),e.d(n,"e",(function(){return j})),e.d(n,"n",(function(){return D})),e.d(n,"l",(function(){return S})),e.d(n,"m",(function(){return w}));var t={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},o=["confirmed","active","recovered","deceased"],i=[].concat(o,["tested"]),r=[].concat(o,["tested"]),c=300,l=20,u="Unknown",d="T00:00:00+05:30",s={confirmed:"#ff073a",active:"#007bff",recovered:"#28a745",deceased:"#6c757d",tested:"#4b1eaa"},T={total:"Cumulative",delta:"Daily"},p={BEGINNING:"Beginning",MONTH:"1 Month",TWO_WEEKS:"2 Weeks"},h={CHOROPLETH:0,BUBBLES:1},g={STATES:0,DISTRICTS:1},f={COUNTRY:0,STATE:1},m="/mini_maps",v={AP:{geoDataFile:"".concat(m,"/andhrapradesh.json"),mapType:f.STATE},AR:{geoDataFile:"".concat(m,"/arunachalpradesh.json"),mapType:f.STATE},AS:{geoDataFile:"".concat(m,"/assam.json"),mapType:f.STATE},BR:{geoDataFile:"".concat(m,"/bihar.json"),mapType:f.STATE},CT:{name:"Chhattisgarh",geoDataFile:"".concat(m,"/chhattisgarh.json"),mapType:f.STATE},GA:{geoDataFile:"".concat(m,"/goa.json"),mapType:f.STATE},GJ:{geoDataFile:"".concat(m,"/gujarat.json"),mapType:f.STATE},HR:{geoDataFile:"".concat(m,"/haryana.json"),mapType:f.STATE},HP:{geoDataFile:"".concat(m,"/himachalpradesh.json"),mapType:f.STATE},JK:{geoDataFile:"".concat(m,"/jammukashmir.json"),mapType:f.STATE},JH:{geoDataFile:"".concat(m,"/jharkhand.json"),mapType:f.STATE},KA:{geoDataFile:"".concat(m,"/karnataka.json"),mapType:f.STATE},KL:{geoDataFile:"".concat(m,"/kerala.json"),mapType:f.STATE},MP:{geoDataFile:"".concat(m,"/madhyapradesh.json"),mapType:f.STATE},MH:{geoDataFile:"".concat(m,"/maharashtra.json"),mapType:f.STATE},MN:{geoDataFile:"".concat(m,"/manipur.json"),mapType:f.STATE},ML:{geoDataFile:"".concat(m,"/meghalaya.json"),mapType:f.STATE},MZ:{geoDataFile:"".concat(m,"/mizoram.json"),mapType:f.STATE},NL:{geoDataFile:"".concat(m,"/nagaland.json"),mapType:f.STATE},OR:{geoDataFile:"".concat(m,"/odisha.json"),mapType:f.STATE},PB:{geoDataFile:"".concat(m,"/punjab.json"),mapType:f.STATE},RJ:{geoDataFile:"".concat(m,"/rajasthan.json"),mapType:f.STATE},SK:{geoDataFile:"".concat(m,"/sikkim.json"),mapType:f.STATE},TN:{geoDataFile:"".concat(m,"/tamilnadu.json"),mapType:f.STATE},TG:{geoDataFile:"".concat(m,"/telangana.json"),mapType:f.STATE},TR:{geoDataFile:"".concat(m,"/tripura.json"),mapType:f.STATE},UT:{geoDataFile:"".concat(m,"/uttarakhand.json"),mapType:f.STATE},UP:{geoDataFile:"".concat(m,"/uttarpradesh.json"),mapType:f.STATE},WB:{geoDataFile:"".concat(m,"/westbengal.json"),mapType:f.STATE},AN:{name:"Andaman and Nicobar Islands",geoDataFile:"".concat(m,"/andamannicobarislands.json"),mapType:f.STATE},CH:{geoDataFile:"".concat(m,"/chandigarh.json"),mapType:f.STATE},DN:{geoDataFile:"".concat(m,"/dnh-and-dd.json"),mapType:f.STATE},DL:{geoDataFile:"".concat(m,"/delhi.json"),mapType:f.STATE},LA:{geoDataFile:"".concat(m,"/ladakh.json"),mapType:f.STATE},LD:{geoDataFile:"".concat(m,"/lakshadweep.json"),mapType:f.STATE},PY:{geoDataFile:"".concat(m,"/puducherry.json"),mapType:f.STATE},TT:{geoDataFile:"".concat(m,"/india.json"),mapType:f.COUNTRY}},j=50,D={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India",UN:"Unassigned"},y=[],A={};Object.keys(D).map((function(a,n){return A[D[a]]=a,y.push({code:a,name:D[a]}),null}));var S=A,w=y;new Date(2020,0,1),new Date(2020,3,19),new Date(2020,3,20),new Date(2020,3,26),new Date(2020,3,27),new Date(2020,4,9),new Date(2020,4,10),new Date(2020,4,23),new Date(2020,4,24),new Date(2020,5,4),new Date(2020,5,5),new Date},30:function(a,n,e){"use strict";e.d(n,"k",(function(){return s})),e.d(n,"g",(function(){return T})),e.d(n,"h",(function(){return p})),e.d(n,"i",(function(){return h})),e.d(n,"e",(function(){return g})),e.d(n,"l",(function(){return f})),e.d(n,"d",(function(){return m})),e.d(n,"f",(function(){return j})),e.d(n,"a",(function(){return D})),e.d(n,"b",(function(){return y})),e.d(n,"j",(function(){return A})),e.d(n,"c",(function(){return S}));var t=e(23),o=e(58),i=e(60),r=e(71),c=e(72),l=e(59),u=e(21),d=null,s=function(){return!1},T=function(){return Object(l.a)(new Date,"Asia/Kolkata")},p=function(){return Object(o.a)(T(),{representation:"date"})},h=function(){return Object(o.a)(Object(i.a)(T(),1),{representation:"date"})},g=function(a){return e.e(38).then(e.bind(null,77)).then((function(a){d=a[t.d[u.a.language||window.localStorage.i18nextLng]]})),Object(r.a)(new Date(a),new Date,{locale:d})},f=function(a){return new Date(a+t.c)},m=function(a,n){"string"===typeof a&&a.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)&&(a+=t.c);var e=Object(l.a)(new Date(a),"Asia/Kolkata");return Object(c.a)(e,n,{locale:d})};var v=function(a){return a<1e3?a:a>=1e3&&a<1e6?+(a/1e3).toFixed(1)+"K":a>=1e6&&a<1e9?+(a/1e6).toFixed(1)+"M":a>=1e9&&a<1e12?+(a/1e9).toFixed(1)+"B":a>=1e12?+(a/1e12).toFixed(1)+"T":void 0},j=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long";if(isNaN(a))return"-";var e=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2});return"short"===n?v(a):e.format(a)},D=function(a){return"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)},y=function(a){if("string"!==typeof a)return"";for(var n=a.toLowerCase().split(" "),e=0;e<n.length;e++)n[e]=D(n[e]);return n.join(" ")},A=function(a,n,e){var t,o,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("active"===e){var r,c,l,u,d=(null===a||void 0===a||null===(r=a[n])||void 0===r?void 0:r.confirmed)||0,s=(null===a||void 0===a||null===(c=a[n])||void 0===c?void 0:c.deceased)||0,T=(null===a||void 0===a||null===(l=a[n])||void 0===l?void 0:l.recovered)||0,p=(null===a||void 0===a||null===(u=a[n])||void 0===u?void 0:u.migrated)||0;o=d-s-T-p}else{var h;o=(null===a||void 0===a||null===(h=a[n])||void 0===h?void 0:h[e])||0}return i?1e6*o/(null===a||void 0===a||null===(t=a.meta)||void 0===t?void 0:t.population)||0:o},S=function(a){return fetch(a).then((function(a){return a.json()}))}},61:function(a,n,e){a.exports=e(70)},70:function(a,n,e){"use strict";e.r(n);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(a,n){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var e=a.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(a)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(a)))})}})).catch((function(a){console.error("Error during service worker registration:",a)}))}var i=e(30),r=e(21),c=e(52),l=e(53),u=e(76);r.a.use(l.a).use(c.a).use(u.e).init({debug:Object(i.k)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(i.k)()&&!1,interpolation:{escapeValue:!1}});r.a;var d=e(0),s=e.n(d),T=e(42),p=e(35),h=Object(d.lazy)((function(){return Promise.all([e.e(9),e.e(14)]).then(e.bind(null,250))})),g=document.getElementById("root"),f=function(){return Object(T.render)(s.a.createElement(d.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(p.a,null,s.a.createElement(h,null))),g)};window.requestIdleCallback&&window.IntersectionObserver?f():function(a,n){var e=document.createElement("script");e.src=a,e.onload=function(){n()},e.onerror=function(){n(new Error("Failed to load script "+a))},document.head.appendChild(e)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",f),function(a){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var n="".concat("","/service-worker.js");t?(!function(a,n){fetch(a,{headers:{"Service-Worker":"script"}}).then((function(e){var t=e.headers.get("content-type");404===e.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.reload()}))})):o(a,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(n,a)}),3e3)}))}}()}},[[61,6,7]]]);
//# sourceMappingURL=main.0a168ddb.chunk.js.map