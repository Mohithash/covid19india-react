(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[15],{336:function(e,t,a){"use strict";a.r(t);var o=a(26),n=a(89),i=a(17),c=a(7),l=a.n(c),d=a(111),r=function(e){var t=e.width,a=e.statistic,o=window.innerWidth;t||(t=o>769?480:o);var n=(o>769?.9:1)*t/.885,c=42+i.f+n;return l.a.createElement(d.a,{viewBox:"0 0 ".concat(t," ").concat(c),height:c,width:t,speed:2,backgroundColor:i.a[a]},l.a.createElement("circle",{cx:.4*t,cy:c/2,r:"5"}),l.a.createElement("circle",{cx:.5*t,cy:c/2,r:"5"}),l.a.createElement("circle",{cx:.6*t,cy:c/2,r:"5"}))},s=a(24),u=a(112),m=a(98),p=a.n(m),T=a(102),v=a.n(T),h=a(103),E=a(32),O=a.n(E),f=a(298),S=a(251),j=a(334),b=a(93),N=a(96),C=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(31),a.e(16)]).then(a.bind(null,337))}));t.default=l.a.memo((function(e){var t,a,d=e.stateCode,m=e.data,T=e.regionHighlighted,v=e.setRegionHighlighted,E=e.anchor,g=e.setAnchor,I=e.mapStatistic,k=e.setMapStatistic,w=e.isCountryLoaded,R=void 0===w||w,y=Object(j.a)().t,L=Object(b.g)(),_=Object(c.useRef)(),A=Object(c.useState)({code:d,view:i.k.DISTRICTS,option:i.g[d].mapType===i.j.COUNTRY?i.h.HOTSPOTS:i.h.TOTAL}),M=Object(n.a)(A,2),P=M[0],x=M[1],D=i.g[P.code],H=D.mapType===i.j.COUNTRY?m:Object(o.a)({},P.code,m[P.code]);Object(c.useEffect)((function(){if(T.districtName){if(P.code!==T.stateCode&&(D.mapType!==i.j.COUNTRY||P.view!==i.k.DISTRICTS)){if(!i.g[T.stateCode])return;x({code:T.stateCode,view:i.k.DISTRICTS,option:P.option===i.h.PER_MILLION?i.h.TOTAL:P.option})}}else R&&D.mapType===i.j.STATE&&x({code:"TT",view:P.option===i.h.ZONES?i.k.DISTRICTS:i.k.STATES,option:P.option})}),[R,T.stateCode,T.districtName,P.code,P.option,P.view,D.mapType]);var U=Object(c.useCallback)((function(e){var t=i.g[e];if(t)if(t.mapType===i.j.STATE){var a=m[e].districts||{},o=Object.keys(a).sort((function(e,t){return Object(s.j)(a[t],"total",I)-Object(s.j)(a[e],"total",I)}))[0];O.a.unstable_batchedUpdates((function(){v({stateCode:e,districtName:o}),x({code:e,view:i.k.DISTRICTS,option:P.option===i.h.PER_MILLION?i.h.TOTAL:P.option})}))}else O.a.unstable_batchedUpdates((function(){x({code:"TT",view:P.option===i.h.HOTSPOTS?i.k.DISTRICTS:i.k.STATES,option:P.option}),v({stateCode:"TT",districtName:null})}))}),[m,P.option,I,v]);Object(c.useEffect)((function(){U(d)}),[d,U]);var Y=Object(c.useMemo)((function(){var e=P.view===i.k.STATES?T.stateCode:P.code,t=m[e]||{};return Object(h.a)(t,(function(t){t.state=i.r[e]}))}),[m,T.stateCode,P.view,P.code]),Z=Object(c.useMemo)((function(){var e,t,a=(T.districtName?null===(e=m[T.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[T.districtName]:m[T.stateCode])||{};return Object(h.a)(a,(function(e){e.name=T.districtName||i.r[T.stateCode],T.districtName||(e.population_millions=i.t[T.stateCode])}))}),[m,T.stateCode,T.districtName]),W=Object(N.d)(i.i.length,i.i.map((function(e){return{total:Object(s.j)(Y,"total",e),delta:Object(s.j)(Y,"delta",e),from:{total:Object(s.j)(Y,"total",e),delta:Object(s.j)(Y,"delta",e)},config:{tension:500,clamp:!0}}})));return l.a.createElement("div",{className:p()("MapExplorer",{stickied:"mapexplorer"===E},{hidden:E&&"mapexplorer"!==E})},window.innerWidth>769&&l.a.createElement("div",{className:p()("anchor",{stickied:"mapexplorer"===E}),onClick:function(){g("mapexplorer"===E?null:"mapexplorer")}},l.a.createElement(u.g,null)),l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"TT"===P.code?y("India"):y(i.r[P.code])," ",y("Map")),l.a.createElement("h6",null,y("{{action}} over a {{mapType}} for more details",{action:y(window.innerWidth<=769?"Tap":"Hover"),mapType:y(D.mapType===i.j.COUNTRY?"state/UT":"District")}))),l.a.createElement("div",{className:"map-stats"},i.i.map((function(e,t){var a,o;return l.a.createElement("div",{key:e,className:p()("stats",e,{focused:e===I}),onClick:function(){return k(e)}},l.a.createElement("h5",null,y(Object(s.a)(e))),l.a.createElement("div",{className:"stats-bottom"},l.a.createElement(N.a.h1,null,W[t].total.interpolate((function(e){return Object(s.f)(Math.floor(e))}))),"tested"!==e&&"active"!==e&&l.a.createElement(N.a.h6,null,W[t].delta.interpolate((function(e){return e>0?"+".concat(Object(s.f)(Math.floor(e))):"\xa0"}))),"tested"===e&&l.a.createElement("h6",null,(null===Y||void 0===Y||null===(a=Y.total)||void 0===a?void 0:a.tested)&&y("As of {{date}}",{date:Object(s.d)(Y.meta.tested.last_updated,"dd MMM")}))),"tested"===e&&(null===Y||void 0===Y||null===(o=Y.total)||void 0===o?void 0:o.tested)&&l.a.createElement("a",{href:Y.meta.tested.source,target:"_noblank"},l.a.createElement(f.a,null)))}))),l.a.createElement("div",{className:"meta"},D.mapType===i.j.STATE&&l.a.createElement("div",{className:"map-button",onClick:function(){return L.push("state/".concat(P.code))}},y("Visit state page"),l.a.createElement(S.a,null)),D.mapType!==i.j.STATE&&(null===Y||void 0===Y||null===(t=Y.meta)||void 0===t?void 0:t.last_updated)&&l.a.createElement("div",{className:"last-update"},l.a.createElement("h6",null,y("Last updated")),l.a.createElement("h3",null,"".concat(Object(s.e)(Y.meta.last_updated)," ").concat(y("ago")))),l.a.createElement("h2",{className:p()(I,Object(o.a)({},null===Z||void 0===Z?void 0:Z.zone,P.option===i.h.ZONES))},y(Z.name),Z.name===i.x&&" (".concat(y(i.r[T.stateCode]),")")),D.mapType===i.j.STATE&&l.a.createElement("div",{className:"map-button",onClick:function(){return U("TT")}},y("Back")),P.option!==i.h.ZONES&&(P.view===i.k.DISTRICTS&&T.districtName||P.view===i.k.STATES&&P.option!==i.h.TOTAL)&&l.a.createElement("h1",{className:p()("district",I)},Object(s.f)(Object(s.j)(Z,"total",I,P.option===i.h.PER_MILLION?Z.population_millions:1)),l.a.createElement("br",null),l.a.createElement("span",null,y(I),P.option===i.h.PER_MILLION&&" ".concat(y("per million"))))),l.a.createElement("div",{ref:_},I&&l.a.createElement(c.Suspense,{fallback:l.a.createElement(r,Object.assign({className:"map-loader"},{width:null===(a=_.current)||void 0===a?void 0:a.clientWidth,statistic:I}))},l.a.createElement(C,{currentMap:P,data:H,changeMap:U,regionHighlighted:T,setRegionHighlighted:v,statistic:I,isCountryLoaded:R}))),l.a.createElement("div",{className:"tabs-map"},Object.values(i.h).map((function(e){return l.a.createElement("div",{key:e,className:p()("tab",{focused:P.option===e}),onClick:function(){return function(e){switch(e){case i.h.TOTAL:return x({code:P.code,view:D.mapType===i.j.COUNTRY?i.k.STATES:i.k.DISTRICTS,option:i.h.TOTAL}),void(D.mapType===i.j.COUNTRY&&v({stateCode:T.stateCode,districtName:null}));case i.h.PER_MILLION:if(D.mapType===i.j.STATE)return;return x({code:P.code,view:i.k.STATES,option:i.h.PER_MILLION}),void v({stateCode:T.stateCode,districtName:null});case i.h.HOTSPOTS:return void x({code:P.code,view:i.k.DISTRICTS,option:i.h.HOTSPOTS});case i.h.ZONES:return x({code:P.code,view:i.k.DISTRICTS,option:i.h.ZONES}),void(D.mapType===i.j.COUNTRY&&v({stateCode:"TT",districtName:null}));default:return}}(e)}},l.a.createElement("h4",null,y(e),e===i.h.PER_MILLION&&l.a.createElement("sup",null,"\u2020")))}))),l.a.createElement("h6",{className:p()("footnote")},"\u2020 ","".concat(y("Based on 2019 population projection by NCP, see ")),l.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",style:{color:"#6c757d"}},y("source"))))}),(function(e,t){var a,o,n,i,c,l,d,r,s,u;return!!v()(e.stateCode,t.stateCode)&&(!!v()(e.regionHighlighted,t.regionHighlighted)&&(!!v()(e.mapStatistic,t.mapStatistic)&&(!!v()(e.anchor,t.anchor)&&(!!v()(null===(a=e.data)||void 0===a||null===(o=a.TT)||void 0===o||null===(n=o.meta)||void 0===n?void 0:n.last_updated,null===(i=t.data)||void 0===i||null===(c=i.TT)||void 0===c||null===(l=c.meta)||void 0===l?void 0:l.last_updated)&&!!v()(null===(d=e.data)||void 0===d||null===(r=d.TT)||void 0===r?void 0:r.total,null===(s=t.data)||void 0===s||null===(u=s.TT)||void 0===u?void 0:u.total)))))}))}}]);
//# sourceMappingURL=MapExplorer.f32df1cf.chunk.js.map