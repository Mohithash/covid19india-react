(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[12],{142:function(e,t,n){"use strict";var a=n(24),r=n(31),i=n(88),l=n(79),c=n.n(l),o=n(82),s=n.n(o),u=n(89),m=n(0),d=n.n(m),f=n(251),g=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},v=function(e,t){var n=void 0===t?{}:t,a=n.isPreventDefault,r=void 0===a||a,i=n.delay,l=void 0===i?300:i,c=Object(m.useRef)(),o=Object(m.useRef)(),s=Object(m.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",g,{passive:!1}),o.current=t.target),c.current=setTimeout((function(){return e(t)}),l)}),[e,l]),u=Object(m.useCallback)((function(){c.current&&clearTimeout(c.current),r&&o.current&&o.current.removeEventListener("touchend",g)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}},b=function(e){return void 0===e&&(e={laptopL:1440,laptop:1024,tablet:768}),function(){var t=Object(m.useState)(0),n=t[0],a=t[1];Object(m.useEffect)((function(){var e=function(){a(window.innerWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var r=Object(m.useMemo)((function(){return Object.entries(e).sort((function(e,t){return e[1]>=t[1]?1:-1}))}),[e]);return r.reduce((function(e,t){var a=t[0],r=t[1];return n>=r?a:e}),r[0][0])}}({S:768});t.a=d.a.memo((function(e){var t=e.handleSort,n=e.sortData,l=e.setSortData,o=e.statistic,s=b(),m=Object(f.a)().t,g=v((function(){n.sortColumn===o&&l(Object(u.a)(n,(function(e){e.delta=!n.delta})))}),{isPreventDefault:!1});return d.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,o)},g,{title:Object(r.a)(o)}),n.sortColumn===o&&d.a.createElement("div",{className:c()("sort-icon",Object(a.a)({invert:n.isAscending},"is-".concat(o),n.delta))},d.a.createElement(i.e,{size:10})),d.a.createElement("div",null,"S"===s?Object(r.a)(o.slice(0,1)):m(Object(r.a)(o))))}),(function(e,t){return!!s()(e.sortData,t.sortData)}))},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(18),l=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,l=void 0===i?24:i,s=o(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Info",t.a=s},172:function(e,t,n){var a=n(173),r=["getDistricts"];e.exports=function(){var e=new Worker(n.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return a(e,r),e}},173:function(e,t){e.exports=function(e,t){var n=0,a={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var r=a[n.id];r&&(delete a[n.id],n.error?r[1](Object.assign(Error(n.error.message),n.error)):r[0](n.result))}else{var i=document.createEvent("Event");i.initEvent(n.method,!1,!1),i.data=n.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(i,l){var c=++n;a[c]=[i,l],e.postMessage({type:"RPC",id:c,method:t,params:[].slice.call(r)})}))}}))}},245:function(e,t,n){"use strict";n.r(t);var a=n(78),r=n(142),i=n(0),l=n.n(i),c=n(90),o=function(){var e=window.innerWidth,t=e>769?448:e;return l.a.createElement("div",{className:"TableLoader"},l.a.createElement(c.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},l.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),l.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),l.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))},s=n(23),u=n(88),m=n(79),d=n.n(m),f=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=window.setTimeout((function(){r((function(e){return e===s.r.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[n]),l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:d()("is-".concat(s.r[n]))},l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Delta [long press]"))},g=n(96),v=n(31),b=n(82),h=n.n(b),p=n(89),E=n(171),O=n(251),j=n(37),y=n(81),w=n(214),C=n(172),N=n.n(C),k=Object(i.lazy)((function(){return n.e(28).then(n.bind(null,246))}));t.default=l.a.memo((function(e){var t=this,n=e.data,c=e.regionHighlighted,m=e.setRegionHighlighted,b=Object(O.a)().t,h=Object(w.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),C=Object(a.a)(h,2),x=C[0],S=C[1],T=Object(i.useCallback)((function(e){x.sortColumn!==e?S(Object(p.a)(x,(function(t){t.sortColumn=e}))):S(Object(p.a)(x,(function(e){e.isAscending=!x.isAscending})))}),[x,S]),D=Object(y.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:y.b.wobbly}),P=Object(i.useState)(),R=Object(a.a)(P,2),z=R[0],H=R[1],L=Object(i.useState)("States"),M=Object(a.a)(L,2),A=M[0],U=M[1],I=Object(i.useState)(!1),W=Object(a.a)(I,2),B=W[0],q=W[1],F=Object(i.useState)(!1),G=Object(a.a)(F,2),J=G[0],K=G[1],X=Object(i.useCallback)((function(e,t){if("regionName"!==x.sortColumn){var a=Object(v.j)((null===z||void 0===z?void 0:z[e])||n[e],x.delta?"delta":"total",x.sortColumn,B),r=Object(v.j)((null===z||void 0===z?void 0:z[t])||n[t],x.delta?"delta":"total",x.sortColumn,B);return x.isAscending?a-r:r-a}return x.isAscending?e.localeCompare(t):t.localeCompare(e)}),[z,B,x.delta,x.isAscending,x.sortColumn,n]),Q=Object(i.useCallback)((function(){U((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(i.useEffect)((function(){var e=N()();e.getDistricts(n),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(H(t.data),e.terminate())}))}),[A,n]);var V=Object(y.f)(J,null,{from:g.h,enter:g.g,leave:g.h});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-top"},l.a.createElement(y.a.div,{className:d()("option-toggle",{"is-highlighted":"Districts"===A}),onClick:Q,style:D[0]},l.a.createElement(u.j,{size:14})),l.a.createElement(y.a.div,{className:d()("million-toggle",{"is-highlighted":B}),onClick:q.bind(this,!B),style:D[0]},l.a.createElement("span",null,"1M")),l.a.createElement(y.a.div,{className:d()("info-toggle",{"is-highlighted":J}),onClick:K.bind(this,!J),style:D[0]},l.a.createElement(u.l,{size:14})),l.a.createElement(y.a.div,{className:"scroll-right-helper",style:D[1]},l.a.createElement("span",null,"Scroll Right \u2192"))),V.map((function(e){var t=e.item,n=e.key,a=e.props;return t?l.a.createElement(y.a.div,{key:n,className:"table-helper",style:a},l.a.createElement("div",{className:"helper-top"},l.a.createElement("div",{className:"helper-left"},l.a.createElement("div",{className:"info-item"},l.a.createElement("span",null,l.a.createElement(u.j,{size:14})),l.a.createElement("p",null,"Toggle between States/Districts")),l.a.createElement("div",{className:"info-item"},l.a.createElement("h5",null,"1M"),l.a.createElement("p",null,"Per Million of Population")),l.a.createElement("div",{className:"info-item sort"},l.a.createElement("span",null,l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Descending")),l.a.createElement("div",{className:"info-item sort invert"},l.a.createElement("span",null,l.a.createElement(u.e,{size:14})),l.a.createElement("p",null,"Sort by Ascending")),l.a.createElement("div",{className:"info-item sort"},l.a.createElement(f,null)),l.a.createElement("div",{className:"info-item notes"},l.a.createElement("span",null,l.a.createElement(E.a,{size:15})),l.a.createElement("p",null,"Notes"))),l.a.createElement("div",{className:"helper-right"},l.a.createElement("div",{className:"info-item"},l.a.createElement("h5",null,"C"),l.a.createElement("p",null,"Confirmed")),l.a.createElement("div",{className:"info-item notes"},l.a.createElement("h5",null,"A"),l.a.createElement("p",null,"Active")),l.a.createElement("div",{className:"info-item"},l.a.createElement("h5",null,"R"),l.a.createElement("p",null,"Recovered")),l.a.createElement("div",{className:"info-item notes"},l.a.createElement("h5",null,"D"),l.a.createElement("p",null,"Deceased")),l.a.createElement("div",{className:"info-item notes"},l.a.createElement("h5",null,"T"),l.a.createElement("p",null,"Tested")))),l.a.createElement("h5",{className:"text"},b("Compiled from State Govt. numbers"),","," ",l.a.createElement(j.b,{to:"/about"},b("know more"),"!"))):null})),l.a.createElement("div",{className:"table fadeInUp"},l.a.createElement("div",{className:"table-wrapper"},l.a.createElement("div",{className:"row heading"},l.a.createElement("div",{className:"cell heading",onClick:T.bind(this,"regionName")},l.a.createElement("div",null,b("States"===A?"State/UT":"District")),"regionName"===x.sortColumn&&l.a.createElement("div",{className:d()("sort-icon",{invert:!x.isAscending})},l.a.createElement(u.e,{size:10}))),s.r.map((function(e){return l.a.createElement(r.a,Object.assign({key:e},{statistic:e,sortData:x,setSortData:S},{handleSort:T.bind(t,e)}))}))),"States"===A&&Object.keys(n).filter((function(e){var t;return"TT"!==e&&(null===(t=n[e].total)||void 0===t?void 0:t.confirmed)&&!(e===s.v&&B)})).sort((function(e,t){return X(e,t)})).map((function(e){return l.a.createElement(k,Object.assign({key:e,data:n[e]},{stateCode:e,isPerMillion:B,regionHighlighted:c,setRegionHighlighted:m}))})),"Districts"===A&&!z&&l.a.createElement(o,null),"Districts"===A&&z&&Object.keys(z).sort((function(e,t){return X(e,t)})).slice(0,s.d).map((function(e){return l.a.createElement(k,Object.assign({key:e,data:z[e],districtName:z[e].districtName},{isPerMillion:B,regionHighlighted:c,setRegionHighlighted:m}))})),l.a.createElement(k,Object.assign({key:"TT",data:n.TT,stateCode:"TT"},{isPerMillion:B,regionHighlighted:c,setRegionHighlighted:m})))))}),(function(e,t){var n,a,r,i;return!!h()(null===(n=e.regionHighlighted)||void 0===n?void 0:n.districtName,null===(a=t.regionHighlighted)||void 0===a?void 0:a.districtName)&&(!!h()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&!!h()(e.data.TT.total.confirmed,t.data.TT.total.confirmed))}))},90:function(e,t,n){"use strict";var a=n(0),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,n=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,c=e.children,o=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,m=e.uniqueKey,d=e.interval,f=e.rtl,g=e.speed,v=e.style,b=e.title,h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=m||Math.random().toString(36).substring(6),E=p+"-diff",O=p+"-animated-diff",j=p+"-aria",y=f?{transform:"scaleX(-1)"}:null,w="0; "+d+"; 1",C=g+"s";return Object(a.createElement)("svg",r({"aria-labelledby":j,role:"img",style:r(r({},v),y)},h),b?Object(a.createElement)("title",{id:j},b):null,Object(a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+O+")"}}),Object(a.createElement)("defs",{role:"presentation"},Object(a.createElement)("clipPath",{id:E},c),Object(a.createElement)("linearGradient",{id:O},Object(a.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:w,dur:C,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:w,dur:C,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:w,dur:C,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var l=function(e){return e.children?Object(a.createElement)(i,r({},e)):Object(a.createElement)(c,r({},e))},c=function(e){return Object(a.createElement)(l,r({viewBox:"0 0 476 124"},e),Object(a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=l}}]);
//# sourceMappingURL=12.317ee810.chunk.js.map