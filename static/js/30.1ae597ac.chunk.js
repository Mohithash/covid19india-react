(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[30],{104:function(e,t,a){"use strict";var n=a(82),c=a(1),i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){e.current&&new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(r(!0),a.unobserve(e.current))}))}),i).observe(e.current)}),[e]),s}},268:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(33),i=a(82),s=a(6),r=a(104),l=a(50),j=a(94),b=a(1),d=a(212),o=a(117);var O=function(e,t,a){for(var n=Object(b.useState)(a),s=Object(i.a)(n,2),r=s[0],O=s[1],u=arguments.length,h=new Array(u>3?u-3:0),x=3;x<u;x++)h[x-3]=arguments[x];var v=o.a.apply(void 0,[e,t,r].concat(h)),f=v.data,p=v.isValidating,m=v.error,g=Object(l.a)(v,["data","isValidating","error"]);return Object(d.a)((function(){O(Object(j.a)(r,(function(e){e.initialData=f})))}),[f]),Object(c.a)(Object(c.a)({},g),{},{isValidating:p,error:m,data:f})},u=a(32),h=a(84),x=a.n(h),v=a(122),f=a(5),p=a(175),m=a(225),g=a(262),T=Object(b.lazy)((function(){return Promise.all([a.e(28),a.e(37)]).then(a.bind(null,272))})),y=Object(b.lazy)((function(){return a.e(6).then(a.bind(null,155))})),S=Object(b.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,229))})),k=Object(b.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,230))})),z=Object(b.lazy)((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,273))})),C=Object(b.lazy)((function(){return a.e(9).then(a.bind(null,231))})),H=Object(b.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(10)]).then(a.bind(null,232))})),P=Object(b.lazy)((function(){return a.e(39).then(a.bind(null,258))})),I=Object(b.lazy)((function(){return a.e(11).then(a.bind(null,274))})),M=Object(b.lazy)((function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,261))})),N=Object(b.lazy)((function(){return Promise.all([a.e(0),a.e(25)]).then(a.bind(null,211))}));t.default=function(){var e,t,a=Object(b.useState)({stateCode:"TT",districtName:null}),l=Object(i.a)(a,2),j=l[0],d=l[1],o=Object(p.a)("anchor",null),h=Object(i.a)(o,2),w=h[0],R=h[1],A=Object(p.a)("expandTable",!1),E=Object(i.a)(A,2),V=E[0],D=E[1],F=Object(m.a)("mapStatistic","active"),J=Object(i.a)(F,2),L=J[0],q=J[1],B=Object(b.useState)(""),G=Object(i.a)(B,2),K=G[0],Q=G[1],U=Object(f.h)(),W=O("".concat(s.a,"/timeseries.min.json"),u.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,X=O("".concat(s.a,"/data").concat(K?"-".concat(K):"",".min.json"),u.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,Y=Object(b.useRef)(),Z=Object(r.a)(Y),$=Object(g.a)().width;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(v.a,{children:[Object(n.jsx)("title",{children:"Coronavirus Outbreak in India - covid19india.org"}),Object(n.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(n.jsxs)("div",{className:"Home",children:[Object(n.jsxs)("div",{className:x()("home-left",{expanded:V}),children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(b.Suspense,{fallback:Object(n.jsx)("div",{}),children:Object(n.jsx)(P,{})}),W&&Object(n.jsx)(b.Suspense,{fallback:Object(n.jsx)("div",{style:{minHeight:"56px"}}),children:Object(n.jsx)(T,Object(c.a)({},{setDate:Q,dates:Object.keys(null===(e=W.TT)||void 0===e?void 0:e.dates).reverse(),date:K}))})]}),Object(n.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[X&&Object(n.jsxs)(b.Suspense,{fallback:Object(n.jsx)("div",{style:{height:"50rem"}}),children:[$>769&&Object(n.jsx)(C,Object(c.a)({},{mapStatistic:L,setMapStatistic:q})),Object(n.jsx)(S,{data:X.TT})]}),W&&Object(n.jsx)(b.Suspense,{fallback:Object(n.jsx)("div",{style:{height:"50rem"}}),children:Object(n.jsx)(H,Object(c.a)({timeseries:null===(t=W.TT)||void 0===t?void 0:t.dates},{date:K}))})]}),X&&Object(n.jsx)(k,{data:X.TT}),X&&Object(n.jsx)(b.Suspense,{fallback:Object(n.jsx)("div",{}),children:Object(n.jsx)(M,Object(c.a)({},{data:X,regionHighlighted:j,setRegionHighlighted:d,expandTable:V,setExpandTable:D}))})]}),Object(n.jsx)("div",{className:x()("home-right",{expanded:V}),ref:Y,children:(Z||U.hash)&&Object(n.jsxs)(n.Fragment,{children:[X&&Object(n.jsx)("div",{className:x()("map-container",{expanded:V}),children:Object(n.jsxs)(b.Suspense,{fallback:Object(n.jsx)("div",{style:{height:"50rem"}}),children:[Object(n.jsx)(I,{data:X.TT,stateCode:"TT"}),Object(n.jsx)(z,Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({stateCode:"TT"},{data:X}),{mapStatistic:L,setMapStatistic:q}),{regionHighlighted:j,setRegionHighlighted:d}),{anchor:w,setAnchor:R}),{expandTable:V}))]})}),W&&Object(n.jsx)(b.Suspense,{fallback:Object(n.jsx)("div",{}),children:Object(n.jsx)(N,Object(c.a)({stateCode:"TT"},{timeseries:W,date:K,regionHighlighted:j,setRegionHighlighted:d,anchor:w,setAnchor:R,expandTable:V}))})]})})]}),Z&&Object(n.jsx)(b.Suspense,{fallback:Object(n.jsx)("div",{}),children:Object(n.jsx)(y,{})})]})}}}]);
//# sourceMappingURL=30.1ae597ac.chunk.js.map