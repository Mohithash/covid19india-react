(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36],{103:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[U]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[K]||!!e.constructor[K]||s(e)||p(e))}function c(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:L)(e).forEach((function(r){return t(r,e[r],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function a(e){var t=e[U];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:s(e)?2:p(e)?3:0}function u(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function f(e,t){return 2===a(e)?e.get(t):e[t]}function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function s(e){return I&&e instanceof Map}function p(e){return M&&e instanceof Set}function y(e){return e.o||e.t}function d(e,t){if(void 0===t&&(t=!1),Array.isArray(e))return e.slice();var r=Object.create(Object.getPrototypeOf(e));return c(e,(function(o){if(o!==U){var i=Object.getOwnPropertyDescriptor(e,o),c=i.value;i.get&&(t||n(1),c=i.get.call(e)),i.enumerable?r[o]=c:Object.defineProperty(r,o,{value:c,writable:!0,configurable:!0})}})),r}function h(e,t){o(e)||v(e)||!i(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&c(e,(function(e,t){return h(t,!0)}),!0))}function b(){n(2)}function v(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=B[e];return t||n(19,e),t}function m(){return _}function g(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function j(e){P(e),e.p.forEach(E),e.p=null}function P(e){e===_&&(_=e.l)}function w(e){return _={p:[],l:_,h:e,m:!0,_:0}}function E(e){var t=e[U];0===t.i||1===t.i?t.j():t.O=!0}function x(e,t){t._=t.p.length;var r=t.p[0],o=void 0!==e&&e!==r;return t.h.g||O("ES5").S(t,e,o),o?(r[U].P&&(j(t),n(4)),i(e)&&(e=k(t,e),t.l||S(t,e)),t.u&&O("Patches").M(r[U],e,t.u,t.s)):e=k(t,r,[]),j(t),t.u&&t.v(t.u,t.s),e!==W?e:void 0}function k(e,t,r){if(v(t))return t;var n=t[U];if(!n)return c(t,(function(o,i){return A(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return S(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=d(n.k,!0):n.o;c(o,(function(t,i){return A(e,n,o,t,i,r)})),S(e,o,!1),r&&e.u&&O("Patches").R(n,r,e.u,e.s)}return n.o}function A(e,t,r,n,c,s){if(o(c)){var p=k(e,c,s&&t&&3!==t.i&&!u(t.D,n)?s.concat(n):void 0);if(d=n,h=p,2===(b=a(y=r))?y.set(d,h):3===b?(y.delete(d),y.add(h)):y[d]=h,!o(p))return;e.m=!1}var y,d,h,b;if((!t||!l(c,f(t.t,n)))&&i(c)){if(!e.h.N&&e._<1)return;k(e,c),t&&t.A.l||S(e,c)}}function S(e,t,r){void 0===r&&(r=!1),e.h.N&&e.m&&h(t,r)}function C(e,t){var r=e[U],n=Reflect.getOwnPropertyDescriptor(r?y(r):e,t);return n&&n.value}function D(e){if(!e.P){if(e.P=!0,0===e.i||1===e.i){var t=e.o=d(e.t);c(e.p,(function(e,r){t[e]=r})),e.p=void 0}e.l&&D(e.l)}}function R(e){e.o||(e.o=d(e.t))}function z(e,t,r){var n=s(t)?O("MapSet").T(t,r):p(t)?O("MapSet").F(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:e,k:null,p:{},o:null,j:null,C:!1},o=n,i=J;r&&(o=[n],i=q);var c=Proxy.revocable(o,i),a=c.revoke,u=c.proxy;return n.k=u,n.j=a,u}(t,r):O("ES5").J(t,r);return(r?r.A:m()).p.push(n),n}var N,_,F="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),I="undefined"!=typeof Map,M="undefined"!=typeof Set,T="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=F?Symbol("immer-nothing"):((N={})["immer-nothing"]=!0,N),K=F?Symbol("immer-draftable"):"__$immer_draftable",U=F?Symbol("immer-state"):"__$immer_state",L=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),B={},J={get:function(e,t){if(t===U)return e;var r=e.p;if(!e.P&&u(r,t))return r[t];var n=y(e)[t];if(e.I||!i(n))return n;if(e.P){if(n!==C(e.t,t))return n;r=e.o}return r[t]=z(e.A.h,n,e)},has:function(e,t){return t in y(e)},ownKeys:function(e){return Reflect.ownKeys(y(e))},set:function(e,t,r){if(!e.P){var n=C(e.t,t);if(r?l(n,r)||r===e.p[t]:l(n,r)&&t in e.t)return!0;R(e),D(e)}return e.D[t]=!0,e.o[t]=r,!0},deleteProperty:function(e,t){return void 0!==C(e.t,t)||t in e.t?(e.D[t]=!1,R(e),D(e)):e.D[t]&&delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=y(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&(n.writable=!0,n.configurable=1!==e.i||"length"!==t),n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},q={};c(J,(function(e,t){q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),q.deleteProperty=function(e,t){return J.deleteProperty.call(this,e[0],t)},q.set=function(e,t,r){return J.set.call(this,e[0],t,r,e[0])};var X=new(function(){function e(e){this.g=T,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,r){if("function"==typeof e&&"function"!=typeof t){var o=t;t=e;var c=this;return function(e){var r=this;void 0===e&&(e=o);for(var n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return c.produce(e,(function(e){var n;return(n=t).call.apply(n,[r,e].concat(i))}))}}var a;if("function"!=typeof t&&n(6),void 0!==r&&"function"!=typeof r&&n(7),i(e)){var u=w(this),f=z(this,e,void 0),l=!0;try{a=t(f),l=!1}finally{l?j(u):P(u)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return g(u,r),x(e,u)}),(function(e){throw j(u),e})):(g(u,r),x(a,u))}if((a=t(e))!==W)return void 0===a&&(a=e),this.N&&h(a,!0),a},t.produceWithPatches=function(e,t){var r,n,o=this;return"function"==typeof e?function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(n))}))}:[this.produce(e,t,(function(e,t){r=e,n=t})),r,n]},t.createDraft=function(e){i(e)||n(8);var t=w(this),r=z(this,e,void 0);return r[U].C=!0,P(t),r},t.finishDraft=function(e,t){var r=(e&&e[U]).A;return g(r,t),x(void 0,r)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){T||n(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var i=O("Patches").U;return o(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(r+1))}))},e}()),$=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseProxies.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);t.a=$},111:function(e,t,r){"use strict";var n=r(7),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,r=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,a=e.children,u=e.foregroundColor,f=e.foregroundOpacity,l=e.gradientRatio,s=e.uniqueKey,p=e.interval,y=e.rtl,d=e.speed,h=e.style,b=e.title,v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),O=s||Math.random().toString(36).substring(6),m=O+"-diff",g=O+"-animated-diff",j=O+"-aria",P=y?{transform:"scaleX(-1)"}:null,w="0; "+p+"; 1",E=d+"s";return Object(n.createElement)("svg",o({"aria-labelledby":j,role:"img",style:o(o({},h),P)},v),b?Object(n.createElement)("title",{id:j},b):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+m+")",style:{fill:"url("+c+"#"+g+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:m},a),Object(n.createElement)("linearGradient",{id:g},Object(n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-l+"; "+-l+"; 1",keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:u,stopOpacity:f},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-l/2+"; "+-l/2+"; "+(1+l/2),keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+l),keyTimes:w,dur:E,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(n.createElement)(i,o({},e)):Object(n.createElement)(a,o({},e))},a=function(e){return Object(n.createElement)(c,o({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c},251:function(e,t,r){"use strict";var n=r(7),o=r.n(n),i=r(88),c=r.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,c=void 0===i?24:i,f=u(e,["color","size"]);return o.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("polyline",{points:"12 16 16 12 12 8"}),o.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));f.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},f.displayName="ArrowRightCircle",t.a=f},298:function(e,t,r){"use strict";var n=r(7),o=r.n(n),i=r(88),c=r.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,c=void 0===i?24:i,f=u(e,["color","size"]);return o.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),o.a.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),o.a.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));f.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},f.displayName="Link",t.a=f}}]);
//# sourceMappingURL=36.7cc8c19b.chunk.js.map