(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[0],{208:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[T]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[W]||!!t.constructor[W]||s(t)||p(t))}function c(t,e,r){void 0===r&&(r=!1),0===u(t)?(r?Object.keys:J)(t).forEach((function(r){return e(r,t[r],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function u(t){var e=t[T];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:s(t)?2:p(t)?3:0}function a(t,e){return 2===u(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function f(t,e){return 2===u(t)?t.get(e):t[e]}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function s(t){return K&&t instanceof Map}function p(t){return M&&t instanceof Set}function d(t){return t.o||t.t}function y(t,e){if(void 0===e&&(e=!1),Array.isArray(t))return t.slice();var r=Object.create(Object.getPrototypeOf(t));return c(t,(function(o){if(o!==T){var i=Object.getOwnPropertyDescriptor(t,o),c=i.value;i.get&&(e||n(1),c=i.get.call(t)),i.enumerable?r[o]=c:Object.defineProperty(r,o,{value:c,writable:!0,configurable:!0})}})),r}function h(t,e){o(t)||v(t)||!i(t)||(u(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&c(t,(function(t,e){return h(e,!0)}),!0))}function b(){n(2)}function v(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=q[t];return e||n(19,t),e}function O(){return z}function g(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function P(t){j(t),t.p.forEach(E),t.p=null}function j(t){t===z&&(z=t.l)}function w(t){return z={p:[],l:z,h:t,m:!0,_:0}}function E(t){var e=t[T];0===e.i||1===e.i?e.j():e.O=!0}function x(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||m("ES5").S(e,t,o),o?(r[T].P&&(P(e),n(4)),i(t)&&(t=A(e,t),e.l||k(e,t)),e.u&&m("Patches").M(r[T],t,e.u,e.s)):t=A(e,r,[]),P(e),e.u&&e.v(e.u,e.s),t!==I?t:void 0}function A(t,e,r){if(v(e))return e;var n=e[T];if(!n)return c(e,(function(o,i){return S(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return k(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=y(n.k,!0):n.o;c(o,(function(e,i){return S(t,n,o,e,i,r)})),k(t,o,!1),r&&t.u&&m("Patches").R(n,r,t.u,t.s)}return n.o}function S(t,e,r,n,c,s){if(o(c)){var p=A(t,c,s&&e&&3!==e.i&&!a(e.D,n)?s.concat(n):void 0);if(y=n,h=p,2===(b=u(d=r))?d.set(y,h):3===b?(d.delete(y),d.add(h)):d[y]=h,!o(p))return;t.m=!1}var d,y,h,b;if((!e||!l(c,f(e.t,n)))&&i(c)){if(!t.h.N&&t._<1)return;A(t,c),e&&e.A.l||k(t,c)}}function k(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&h(e,r)}function C(t,e){var r=t[T],n=Reflect.getOwnPropertyDescriptor(r?d(r):t,e);return n&&n.value}function D(t){if(!t.P){if(t.P=!0,0===t.i||1===t.i){var e=t.o=y(t.t);c(t.p,(function(t,r){e[t]=r})),t.p=void 0}t.l&&D(t.l)}}function R(t){t.o||(t.o=y(t.t))}function N(t,e,r){var n=s(e)?m("MapSet").T(e,r):p(e)?m("MapSet").F(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:O(),P:!1,I:!1,D:{},l:e,t:t,k:null,p:{},o:null,j:null,C:!1},o=n,i=L;r&&(o=[n],i=X);var c=Proxy.revocable(o,i),u=c.revoke,a=c.proxy;return n.k=a,n.j=u,a}(e,r):m("ES5").J(e,r);return(r?r.A:O()).p.push(n),n}var _,z,F="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),K="undefined"!=typeof Map,M="undefined"!=typeof Set,U="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,I=F?Symbol("immer-nothing"):((_={})["immer-nothing"]=!0,_),W=F?Symbol("immer-draftable"):"__$immer_draftable",T=F?Symbol("immer-state"):"__$immer_state",J=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),q={},L={get:function(t,e){if(e===T)return t;var r=t.p;if(!t.P&&a(r,e))return r[e];var n=d(t)[e];if(t.I||!i(n))return n;if(t.P){if(n!==C(t.t,e))return n;r=t.o}return r[e]=N(t.A.h,n,t)},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,r){if(!t.P){var n=C(t.t,e);if(r?l(n,r)||r===t.p[e]:l(n,r)&&e in t.t)return!0;R(t),D(t)}return t.D[e]=!0,t.o[e]=r,!0},deleteProperty:function(t,e){return void 0!==C(t.t,e)||e in t.t?(t.D[e]=!1,R(t),D(t)):t.D[e]&&delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=d(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&(n.writable=!0,n.configurable=1!==t.i||"length"!==e),n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},X={};c(L,(function(t,e){X[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),X.deleteProperty=function(t,e){return L.deleteProperty.call(this,t[0],e)},X.set=function(t,e,r){return L.set.call(this,t[0],e,r,t[0])};var $=new(function(){function t(t){this.g=U,this.N=!1,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var c=this;return function(t){var r=this;void 0===t&&(t=o);for(var n=arguments.length,i=Array(n>1?n-1:0),u=1;u<n;u++)i[u-1]=arguments[u];return c.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(i))}))}}var u;if("function"!=typeof e&&n(6),void 0!==r&&"function"!=typeof r&&n(7),i(t)){var a=w(this),f=N(this,t,void 0),l=!0;try{u=e(f),l=!1}finally{l?P(a):j(a)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(t){return g(a,r),x(t,a)}),(function(t){throw P(a),t})):(g(a,r),x(u,a))}if((u=e(t))!==I)return void 0===u&&(u=t),this.N&&h(u,!0),u},e.produceWithPatches=function(t,e){var r,n,o=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){i(t)||n(8);var e=w(this),r=N(this,t,void 0);return r[T].C=!0,j(e),r},e.finishDraft=function(t,e){var r=(t&&t[T]).A;return g(r,e),x(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){U||n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=m("Patches").U;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}()),B=$.produce;$.produceWithPatches.bind($),$.setAutoFreeze.bind($),$.setUseProxies.bind($),$.applyPatches.bind($),$.createDraft.bind($),$.finishDraft.bind($);e.a=B},233:function(t,e,r){"use strict";var n=r(0),o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var i=function(t){var e=t.animate,r=t.backgroundColor,i=t.backgroundOpacity,c=t.baseUrl,u=t.children,a=t.foregroundColor,f=t.foregroundOpacity,l=t.gradientRatio,s=t.uniqueKey,p=t.interval,d=t.rtl,y=t.speed,h=t.style,b=t.title,v=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),m=s||Math.random().toString(36).substring(6),O=m+"-diff",g=m+"-animated-diff",P=m+"-aria",j=d?{transform:"scaleX(-1)"}:null,w="0; "+p+"; 1",E=y+"s";return Object(n.createElement)("svg",o({"aria-labelledby":P,role:"img",style:o(o({},h),j)},v),b?Object(n.createElement)("title",{id:P},b):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+O+")",style:{fill:"url("+c+"#"+g+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:O},u),Object(n.createElement)("linearGradient",{id:g},Object(n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},e&&Object(n.createElement)("animate",{attributeName:"offset",values:-l+"; "+-l+"; 1",keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:a,stopOpacity:f},e&&Object(n.createElement)("animate",{attributeName:"offset",values:-l/2+"; "+-l/2+"; "+(1+l/2),keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},e&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+l),keyTimes:w,dur:E,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(t){return t.children?Object(n.createElement)(i,o({},t)):Object(n.createElement)(u,o({},t))},u=function(t){return Object(n.createElement)(c,o({viewBox:"0 0 476 124"},t),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};e.a=c},457:function(t,e,r){"use strict";var n=r(0),o="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,i=r(51),c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&window.ResizeObserver?function(){var t=Object(n.useState)(null),e=t[0],r=t[1],i=Object(n.useState)(c),u=i[0],a=i[1],f=Object(n.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,r=e.x,n=e.y,o=e.width,i=e.height,c=e.top,u=e.left,f=e.bottom,l=e.right;a({x:r,y:n,width:o,height:i,top:c,left:u,bottom:f,right:l})}}))}),[]);return o((function(){if(e)return f.observe(e),function(){f.disconnect()}}),[e]),[r,u]}:function(){return[function(){},c]}}}]);
//# sourceMappingURL=0.6b427113.chunk.js.map