(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[32],{113:function(e,t,n){"use strict";var i=n(37),c=n(2),s={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(a(!0),n.unobserve(e.current))}))}),s).observe(e.current)}),[e]),r}},720:function(e,t,n){"use strict";n.r(t);var i=n(30),c=n(37),s=n(6),r=n(113),a=n(29),l=n(85),o=n.n(l),d=n(2),j=n.n(d),u=n(19),b=n.n(u);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var h=Object(d.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,c=e.size,s=void 0===c?24:c,r=v(e,["color","size"]);return j.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),j.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),j.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),j.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),j.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));h.propTypes={color:b.a.string,size:b.a.oneOfType([b.a.string,b.a.number])},h.displayName="Smile";var f=h,m=n(133),x=n(722),p=n(5),y=n(675),g=n(125),w=n(18),k=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(20)]).then(n.bind(null,687))})),N=Object(d.lazy)((function(){return n.e(6).then(n.bind(null,177))})),C=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,677))})),S=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,678))})),z=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(42)]).then(n.bind(null,724))})),M=Object(d.lazy)((function(){return n.e(9).then(n.bind(null,679))})),P=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(10)]).then(n.bind(null,680))})),E=Object(d.lazy)((function(){return n.e(11).then(n.bind(null,725))})),I=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,716))})),R=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,660))}));function U(){var e,t,n,l,j,u,b,O,v=Object(x.a)().t,h=Object(p.i)().stateCode.toUpperCase(),U=Object(y.a)("mapStatistic","active"),H=Object(c.a)(U,2),T=H[0],L=H[1],W=Object(d.useState)(!1),B=Object(c.a)(W,2),F=B[0],J=B[1],V=Object(d.useState)({stateCode:h,districtName:null}),D=Object(c.a)(V,2),q=D[0],A=D[1];Object(d.useEffect)((function(){q.stateCode!==h&&(A({stateCode:h,districtName:null}),J(!1))}),[q.stateCode,h]);var G=Object(g.a)("".concat(s.a,"/timeseries-").concat(h,".min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}),K=G.data,Q=G.error,X=Object(g.a)("".concat(s.a,"/data.min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,Y=Object(d.useMemo)((function(){var e;if(X){var t=window.innerWidth>=540?3:2,n=(null===(e=X[h])||void 0===e?void 0:e.districts)?Object.keys(X[h].districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(n/t)}}),[X,h]),Z=Object(d.useRef)(),$=Object(r.a)(Z),_=Object(d.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),ee=F?window.innerWidth>=540?10:8:6;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(m.a,{children:[Object(w.jsxs)("title",{children:["Coronavirus Outbreak in ",s.u[h]," - covid19india.org"]}),Object(w.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(s.u[h],": Latest Map and Case Count")})]}),Object(w.jsxs)("div",{className:"State",children:[Object(w.jsxs)("div",{className:"state-left",children:[Object(w.jsx)(E,{data:null===X||void 0===X?void 0:X[h],stateCode:h}),Object(w.jsxs)("div",{style:{position:"relative"},children:[Object(w.jsx)(M,{mapStatistic:T,setMapStatistic:L}),Object(w.jsx)(C,{data:null===X||void 0===X?void 0:X[h]}),Object(w.jsx)(P,{timeseries:null===K||void 0===K||null===(e=K[h])||void 0===e?void 0:e.dates,stateCode:h,forceRender:!!Q})]}),(null===X||void 0===X||null===(t=X[h])||void 0===t||null===(n=t.total)||void 0===n?void 0:n.vaccinated)&&Object(w.jsx)(S,{data:null===X||void 0===X?void 0:X[h]}),X&&Object(w.jsx)(d.Suspense,{fallback:Object(w.jsx)("div",{style:{minHeight:"50rem"}}),children:Object(w.jsx)(z,{stateCode:h,data:X,regionHighlighted:q,setRegionHighlighted:A,mapStatistic:T,setMapStatistic:L})}),Object(w.jsx)("span",{ref:Z}),$&&X&&Object(w.jsx)(d.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsx)(I,{stateCode:h,data:X,timeseries:null===K||void 0===K||null===(l=K[h])||void 0===l?void 0:l.dates})})]}),Object(w.jsx)("div",{className:"state-right",children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"district-bar",children:[Object(w.jsxs)("div",{className:o()("district-bar-top",{expanded:F}),children:[Object(w.jsxs)("div",{className:"district-bar-left",children:[Object(w.jsx)("h2",{className:o()(T,"fadeInUp"),style:_[0],children:v("Top districts")}),Object(w.jsx)("div",{className:"districts fadeInUp ".concat(F?"is-grid":""),style:F?Object(i.a)({gridTemplateRows:"repeat(".concat(Y,", 2rem)")},_[1]):_[1],children:Object.keys((null===X||void 0===X||null===(j=X[h])||void 0===j?void 0:j.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var n=X[h].districts[e],i=X[h].districts[t];return Object(a.h)(i,"total",T)-Object(a.h)(n,"total",T)}(e,t)})).slice(0,F?void 0:5).map((function(e){var t=Object(a.h)(X[h].districts[e],"total",T),n=Object(a.h)(X[h].districts[e],"delta",T);return Object(w.jsxs)("div",{className:"district",children:[Object(w.jsx)("h2",{children:Object(a.e)(t)}),Object(w.jsx)("h5",{children:v(e)}),"active"!==T&&Object(w.jsx)("div",{className:"delta",children:Object(w.jsx)("h6",{className:T,children:n>0?"\u2191"+Object(a.e)(n):""})})]},e)}))})]}),Object(w.jsxs)("div",{className:"district-bar-right fadeInUp",style:_[2],children:[K&&("confirmed"===T||"deceased"===T)&&Object(w.jsx)("div",{className:"happy-sign",children:Object.keys((null===(u=K[h])||void 0===u?void 0:u.dates)||{}).slice(-ee).every((function(e){return 0===Object(a.h)(K[h].dates[e],"delta",T)}))&&Object(w.jsxs)("div",{className:"alert ".concat("confirmed"===T?"is-green":""),children:[Object(w.jsx)(f,{}),Object(w.jsxs)("div",{className:"alert-right",children:["No new ",T," cases in the past five days"]})]})}),Object(w.jsx)(k,{timeseries:null===K||void 0===K||null===(b=K[h])||void 0===b?void 0:b.dates,statistic:T,stateCode:h,lookback:ee,forceRender:!!Q})]})]}),Object(w.jsx)("div",{className:"district-bar-bottom",children:Object.keys((null===X||void 0===X||null===(O=X[h])||void 0===O?void 0:O.districts)||{}).length>5?Object(w.jsx)("button",{className:"button fadeInUp",onClick:function(){J(!F)},style:_[3],children:Object(w.jsx)("span",{children:v(F?"View less":"View all")})}):Object(w.jsx)("div",{style:{height:"3.75rem",flexBasis:"15%"}})})]}),Object(w.jsx)(d.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsx)(R,{stateCode:h,timeseries:K,regionHighlighted:q,setRegionHighlighted:A,forceRender:!!Q})})]})})]}),Object(w.jsx)(N,{})]})}t.default=Object(d.memo)(U)}}]);
//# sourceMappingURL=32.3dc9c370.chunk.js.map