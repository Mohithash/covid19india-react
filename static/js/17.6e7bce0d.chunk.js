(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[17,24],{135:function(e,t,a){"use strict";var r=a(0),i=a(86),n=function(){};t.a=function(e,t,a){if(!i.a)return[t,n,n];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=a?a.raw?function(e){return e}:a.deserializer:JSON.parse,s=Object(r.useState)((function(){try{var r=a?a.raw?String:a.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?c(i):(t&&localStorage.setItem(e,r(t)),t)}catch(s){return t}})),l=s[0],o=s[1],d=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(l):t;if("undefined"===typeof r)return;var i=void 0;i=a?a.raw?"string"===typeof r?r:JSON.stringify(r):a.serializer?a.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,i),o(c(i))}catch(s){}}),[e,o]),u=Object(r.useCallback)((function(){try{localStorage.removeItem(e),o(void 0)}catch(s){}}),[e,o]);return[l,d,u]}},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(60),i=a(4),n=a(2),c=a(1);function s(e,t){Object(c.a)(2,arguments);var a=Object(n.a)(e),r=Object(i.a)(t);if(isNaN(r))return new Date(NaN);if(!r)return a;var s=a.getDate(),l=new Date(a.getTime());l.setMonth(a.getMonth()+r+1,0);var o=l.getDate();return s>=o?l:(a.setFullYear(l.getFullYear(),l.getMonth(),s),a)}function l(e,t){Object(c.a)(2,arguments);var a=Object(i.a)(t);return s(e,-a)}function o(e,t){if(Object(c.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(i.a)(t.years):0,s="months"in t?Object(i.a)(t.months):0,o="weeks"in t?Object(i.a)(t.weeks):0,d="days"in t?Object(i.a)(t.days):0,u="hours"in t?Object(i.a)(t.hours):0,m="minutes"in t?Object(i.a)(t.minutes):0,b="seconds"in t?Object(i.a)(t.seconds):0,f=l(Object(n.a)(e),s+12*a),O=Object(r.a)(f,d+7*o),h=m+60*u,g=b+60*h,j=1e3*g,p=new Date(O.getTime()-j);return p}},202:function(e,t,a){"use strict";a.r(t);var r=a(108),i=a(78),n=a(0),c=a.n(n),s=a(90),l=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(s.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},o=a(23),d=a(97),u=a(31),m=a(88),b=a(79),f=a.n(b),O=a(58),h=a(201),g=a(82),j=a.n(g),p=a(256),y=a(135),v=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(18),a.e(30)]).then(a.bind(null,226))}));t.default=c.a.memo((function(e){var t=this,a=e.stateCode,s=e.timeseries,b=e.date,g=e.regionHighlighted,j=e.setRegionHighlighted,E=e.anchor,N=e.setAnchor,C=Object(p.a)().t,k=Object(n.useState)(o.s.MONTH),w=Object(i.a)(k,2),x=w[0],S=w[1],T=Object(y.a)("chartType","total"),M=Object(i.a)(T,2),J=M[0],H=M[1],P=Object(y.a)("isUniform",!0),U=Object(i.a)(P,2),z=U[0],D=U[1],I=Object(y.a)("isLog",!1),R=Object(i.a)(I,2),L=R[0],F=R[1],K=Object(n.useRef)(),W=Object(d.a)(K,{once:!0}),q=Object(n.useMemo)((function(){var e;return(null===s||void 0===s||null===(e=s[g.stateCode])||void 0===e?void 0:e.districts)?{stateCode:g.stateCode,districtName:g.districtName}:{stateCode:g.stateCode,districtName:null}}),[s,g.stateCode,g.districtName]),B=Object(n.useMemo)((function(){var e,t,a,r;return q.districtName?null===s||void 0===s||null===(e=s[q.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[q.districtName])||void 0===a?void 0:a.dates:null===s||void 0===s||null===(r=s[q.stateCode])||void 0===r?void 0:r.dates}),[s,q.stateCode,q.districtName]),Y=Object(n.useMemo)((function(){var e=Object.keys(s||{}).filter((function(e){return e!==a})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(s||{}).reduce((function(e,t){var a;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===s||void 0===s||null===(a=s[t])||void 0===a?void 0:a.districts)||{}).reduce((function(e,a){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:a,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[s,a]),A=Object(n.useMemo)((function(){var e=b||Object(u.i)(),t=Object.keys(B||{}).filter((function(t){return t<=e}));if(x===o.s.TWO_WEEKS){var a=Object(O.a)(Object(h.a)(Object(u.l)(e),{weeks:2}),{representation:"date"});return t.filter((function(e){return e>=a}))}if(x===o.s.MONTH){var r=Object(O.a)(Object(h.a)(Object(u.l)(e),{months:1}),{representation:"date"});return t.filter((function(e){return e>=r}))}return t}),[B,b,x]),G=Object(n.useCallback)((function(e){var t=e.target;j(JSON.parse(t.value))}),[j]),X=Object(n.useCallback)((function(){j({stateCode:a,districtName:null})}),[a,j]);return c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===E}),style:{display:"mapexplorer"===E?"none":""},ref:K},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===E}),onClick:N&&N.bind(this,"timeseries"===E?null:"timeseries")},c.a.createElement(m.j,null)),c.a.createElement("h1",null,C("Spread Trends")),c.a.createElement("div",{className:"tabs"},Object.entries(o.r).map((function(e,a){var r=Object(i.a)(e,2),n=r[0],s=r[1];return c.a.createElement("div",{className:"tab ".concat(J===n?"focused":""),key:n,onClick:H.bind(t,n)},c.a.createElement("h4",null,C(s)))}))),c.a.createElement("div",{className:"scale-modes"},c.a.createElement("label",{className:"main"},C("Scale Modes")),c.a.createElement("div",{className:"timeseries-mode"},c.a.createElement("label",{htmlFor:"timeseries-mode"},C("Uniform")),c.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:z,"aria-label":C("Checked by default to scale uniformly."),onChange:D.bind(this,!z)})),c.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==J?"disabled":"")},c.a.createElement("label",{htmlFor:"timeseries-logmode"},C("Logarithmic")),c.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===J&&L,className:"switch",disabled:"total"!==J,onChange:F.bind(this,!L)})))),Y&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(q),onChange:G},Y.filter((function(e){return o.p[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?C(e.districtName):C(o.p[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:X},c.a.createElement(m.l,null))),W&&c.a.createElement(n.Suspense,{fallback:c.a.createElement(l,null)},c.a.createElement(v,Object.assign({timeseries:B,regionHighlighted:q},{dates:A,chartType:J,isUniform:z,isLog:L}))),!W&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement("div",{className:"pills"},Object.values(o.s).map((function(e){return c.a.createElement("button",{key:e,type:"button",className:f()({selected:x===e}),onClick:function(){return S(e)}},C(e))}))),c.a.createElement("div",{className:"alert"},c.a.createElement(m.h,{size:24}),c.a.createElement("div",{className:"alert-right"},C("Tested chart is independent of uniform scaling"))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!j()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!j()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!j()(t.date,e.date)&&!!j()(t.anchor,e.anchor)))))}))},90:function(e,t,a){"use strict";var r=a(0),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,a=e.backgroundColor,n=e.backgroundOpacity,c=e.baseUrl,s=e.children,l=e.foregroundColor,o=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,b=e.rtl,f=e.speed,O=e.style,h=e.title,g=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),j=u||Math.random().toString(36).substring(6),p=j+"-diff",y=j+"-animated-diff",v=j+"-aria",E=b?{transform:"scaleX(-1)"}:null,N="0; "+m+"; 1",C=f+"s";return Object(r.createElement)("svg",i({"aria-labelledby":v,role:"img",style:i(i({},O),E)},g),h?Object(r.createElement)("title",{id:v},h):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+p+")",style:{fill:"url("+c+"#"+y+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:p},s),Object(r.createElement)("linearGradient",{id:y},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:o},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(n,i({},e)):Object(r.createElement)(s,i({},e))},s=function(e){return Object(r.createElement)(c,i({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=17.6e7bce0d.chunk.js.map