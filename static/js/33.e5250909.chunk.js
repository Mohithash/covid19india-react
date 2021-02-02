(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[33],{105:function(e,t,a){"use strict";var c=a(20),n=a(82),o=a(103),i=a(1),r=a(90),s=void 0;t.a=function(e){var t=e.data,a=e.children,l=Object(i.useState)(!1),d=Object(n.a)(l,2),j=d[0],b=d[1],u=Object(r.f)(j,null,{from:o.j,enter:o.i,leave:o.j,config:{mass:1,tension:210,friction:20}}),h=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(c.jsxs)("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:b.bind(s,!0),onMouseLeave:b.bind(s,!1),onClick:h.bind(s),children:[a,u.map((function(e){var a=e.item,n=e.key,o=e.props;return a?Object(c.jsx)(r.a.div,{style:o,children:Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}})})},n):Object(c.jsx)(r.a.div,{},n)}))]})}},265:function(e,t,a){"use strict";a.r(t);var c=a(20),n=a(33),o=a(105),i=a(91);var r=function(e){var t=e.title,a=e.statistic,r=e.total,s=e.formula,l=e.date,d=e.description,j=e.className;return Object(c.jsxs)("div",{className:"meta-item ".concat(j),children:[Object(c.jsxs)("div",{className:"meta-item-top",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)(o.a,Object(n.a)(Object(n.a)({},{data:s}),{},{children:Object(c.jsx)(i.j,{size:16})}))]}),Object(c.jsx)("h1",{children:a}),Object(c.jsx)("h5",{children:l}),r&&Object(c.jsx)("h5",{children:"India has ".concat(r," CPM")}),Object(c.jsx)("p",{children:d})]})},s=a(6),l=a(32),d=a(59),j=a(76),b=a(1),u=a.n(b),h=a(21),v=a.n(h);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)a=o[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)a=o[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=Object(b.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,i=O(e,["color","size"]);return u.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),u.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),u.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));m.propTypes={color:v.a.string,size:v.a.oneOfType([v.a.string,v.a.number])},m.displayName="Compass";var f=m;function y(e){var t,a,n,o,i,b=e.stateCode,u=e.data,h=e.timeseries,v=Object.keys(h||{}).filter((function(e){return e<=Object(l.g)()})),p=v[v.length-1],O=Object(l.h)(null===h||void 0===h?void 0:h[p],"total","confirmed"),m=O-Object(l.h)(null===h||void 0===h?void 0:h[p],"delta7","confirmed"),y=Object(d.a)(Object(j.a)(Object(l.k)(p),7)),x=Object(l.h)(u[b],"total","confirmed",{perMillion:!0}),g=Object(l.h)(u[b],"total","tested",{perMillion:!0}),M=Object(l.h)(u.TT,"total","confirmed",{perMillion:!0}),w=Object(l.h)(u[b],"total","activeRatio"),N=Object(l.h)(u[b],"total","recoveryRatio"),k=Object(l.h)(u[b],"total","cfr"),C=100*(Math.pow(O/m,1/7)-1);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"StateMeta population",children:[Object(c.jsxs)("div",{className:"meta-item population",children:[Object(c.jsx)("h3",{children:"Population"}),Object(c.jsx)("h1",{children:Object(l.e)(null===(t=u[b])||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.population)})]}),Object(c.jsxs)("div",{className:"alert",children:[Object(c.jsx)(f,{}),Object(c.jsxs)("div",{className:"alert-right",children:["Based on 2019 population projection by NCP"," ",Object(c.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(c.jsxs)("div",{className:"StateMeta",children:[Object(c.jsx)(r,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(l.e)(x),total:Object(l.e)(M),formula:"(confirmed / state population) * 1 Million",description:"\n            ~".concat(Object(l.e)(Math.round(x))," out of every 10 lakh people in ").concat(s.t[b]," have tested positive for the virus.\n            ")}),Object(c.jsx)(r,{className:"active",title:"Active Ratio",statistic:"".concat(Object(l.e)(w,"%")),formula:"(active / confirmed) * 100",description:w>0?"For every 100 confirmed cases, ~".concat(Object(l.e)(Math.round(w))," are currently infected."):"Currently, there are no active cases in this state."}),Object(c.jsx)(r,{className:"recovery",title:"Recovery Ratio",statistic:"".concat(Object(l.e)(N,"%")),formula:"(recovered / confirmed) * 100",description:N>0?"For every 100 confirmed cases, ~".concat(Object(l.e)(Math.round(N))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),Object(c.jsx)(r,{className:"mortality",title:"Case Fatality Ratio",statistic:"".concat(Object(l.e)(k,"%")),formula:"(deceased / confirmed) * 100",description:k>0?"For every 100 confirmed cases, ~".concat(Object(l.e)(Math.round(k))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),Object(c.jsx)(r,{className:"gr",title:"Avg. Growth Rate",statistic:C>0?"".concat(Object(l.e)(C,"%")):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(l.c)(y,"dd MMM")," - ").concat(Object(l.c)(p,"dd MMM")),description:C>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(l.e)(C,"%"),"\n              every day."):"There has been no growth in the number of infections in last one week."}),Object(c.jsx)(r,{className:"tpm",title:"Tests Per Million",statistic:"".concat(Object(l.e)(g)),formula:"(total tests in state / total population of state) * 1 Million",date:g?"As of ".concat(Object(l.d)(null===(n=u[b])||void 0===n||null===(o=n.meta)||void 0===o||null===(i=o.tested)||void 0===i?void 0:i.last_updated)," ago"):"",description:g>0?"For every 10 lakh people in ".concat(s.t[b],",\n                ~").concat(Object(l.e)(Math.round(g))," samples were tested."):"No tests have been conducted in this state yet."})]})]})}var x=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(b.memo)(y,x)}}]);
//# sourceMappingURL=33.e5250909.chunk.js.map