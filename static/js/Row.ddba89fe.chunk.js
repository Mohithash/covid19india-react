(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{140:function(e,t,a){"use strict";var i=a(89),n=a(7),c=a.n(n),r=a(96),l={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},o={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"};t.a=function(e){var t=e.data,a=e.children,s=Object(n.useState)(!1),d=Object(i.a)(s,2),m=d[0],u=d[1],g=Object(r.f)(m,null,{from:o,enter:l,leave:o,config:{mass:1,tension:210,friction:20}});return c.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)}},a,g.map((function(e){var a=e.item,i=e.key,n=e.props;return a?c.a.createElement(r.a.div,{key:i,style:n},c.a.createElement("div",{className:"message"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):c.a.createElement(r.a.div,{key:i})})))}},241:function(e,t,a){"use strict";var i=a(7),n=a.n(i),c=a(88),r=a.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=Object(i.forwardRef)((function(e,t){var a=e.color,i=void 0===a?"currentColor":a,c=e.size,r=void 0===c?24:c,s=o(e,["color","size"]);return n.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),n.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},s.displayName="Info",t.a=s},265:function(e,t,a){"use strict";a.r(t);var i=a(89),n=a(26),c=a(140),r=a(17),l=a(24),o=a(112),s=a(98),d=a.n(s),m=a(102),u=a.n(m),g=a(103),v=a(7),f=a.n(v),b=a(241),h=a(333),p=a(93),j=a(96),O=a(299),E=a(159),N=Object(O.a)({S:768});var C=f.a.memo((function(e){var t=e.statistic,a=e.data,i=Object(l.j)(a,"total",t),n=Object(l.j)(a,"delta",t),c=Object(j.c)({total:i,delta:n,from:{total:i,delta:n}},j.b.gentle);return f.a.createElement("div",{className:"cell statistic"},"active"!==t&&f.a.createElement(j.a.div,{className:d()("delta","is-".concat(t))},c.delta.interpolate((function(e){return e>0?"\u2191"+Object(l.f)(Math.floor(e)):e<0?"\u2193"+Object(l.f)(Math.floor(Math.abs(e))):""}))),f.a.createElement(j.a.div,{className:"total"},c.total.interpolate((function(e){return Object(l.f)(Math.floor(e))}))))}),(function(e,t){return!!u()(e.data.total,t.data.total)&&!!u()(e.data.delta,t.data.delta)}));function y(e){var t=e.handleSortClick,a=e.statistic,i=e.sortData,c=N(),r=Object(h.a)().t;return f.a.createElement("div",{className:"cell heading",onClick:function(){return t(a)}},i.sortColumn===a&&f.a.createElement("div",{className:d()("sort-icon",{invert:i.isAscending})},f.a.createElement(o.b,{size:10})),f.a.createElement("div",{className:d()(Object(n.a)({},"is-".concat(a),"S"===c)),title:Object(l.a)(a)},"S"===c?Object(l.a)(a.slice(0,1)):r(Object(l.a)(a))))}var k=f.a.memo((function(e){var t,a=e.stateCode,i=e.districtName,n=e.data,l=e.regionHighlighted,o=e.setRegionHighlighted,s=Object(h.a)().t,m=Object(v.useCallback)((function(){l.districtName!==i&&o(Object(g.a)(l,(function(e){e.stateCode=a,e.districtName=i})))}),[l,i,o,a]);return f.a.createElement("div",{className:d()("row","district",{"is-highlighted":(null===l||void 0===l?void 0:l.districtName)===i}),onMouseEnter:m},f.a.createElement("div",{className:"cell"},f.a.createElement("div",{className:"state-name"},s(i)),(null===n||void 0===n||null===(t=n.meta)||void 0===t?void 0:t.notes)&&f.a.createElement(c.a,{data:n.meta.notes},f.a.createElement(b.a,{size:16}))),r.n.map((function(e){return f.a.createElement(C,Object.assign({key:e},{statistic:e},{data:n}))})))}),(function(e,t){var a,i,n,c,r,l;return!!u()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!u()(null===(n=e.data)||void 0===n?void 0:n.delta,null===(c=t.data)||void 0===c?void 0:c.delta)&&(!!u()(null===(r=e.data)||void 0===r?void 0:r.last_updated,null===(l=t.data)||void 0===l?void 0:l.last_updated)&&!(!u()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(u()(e.regionHighlighted.districtName,e.districtName)||u()(t.regionHighlighted.districtName,t.districtName)))))}));t.default=f.a.memo((function(e){var t,a,n=e.stateCode,s=e.data,m=e.regionHighlighted,u=e.setRegionHighlighted,O=Object(v.useState)(!1),N=Object(i.a)(O,2),H=N[0],w=N[1],x=Object(E.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1}),S=Object(i.a)(x,2),z=S[0],M=S[1],A=Object(p.g)(),I=Object(h.a)().t,T=Object(v.useRef)(),_=Object(v.useCallback)((function(e){M(Object(g.a)(z,(function(t){t.isAscending=!z.isAscending,t.sortColumn=e})))}),[z,M]),R=Object(v.useCallback)((function(e,t){return"districtName"!==z.sortColumn?z.isAscending?Object(l.j)(s.districts[e],"total",z.sortColumn)-Object(l.j)(s.districts[t],"total",z.sortColumn):Object(l.j)(s.districts[t],"total",z.sortColumn)-Object(l.j)(s.districts[e],"total",z.sortColumn):z.isAscending?e.localeCompare(t):t.localeCompare(e)}),[z,s]),D=Object(v.useCallback)((function(){m.stateCode!==n&&u(Object(g.a)(m,(function(e){e.stateCode=n,e.districtName=null})))}),[m,u,n]),L=Object(v.useCallback)((function(){s.districts&&w(!H)}),[H,s]),P=Object(j.c)({from:{opacity:0},to:{opacity:1},config:j.b.gentle});return f.a.createElement(f.a.Fragment,null,f.a.createElement(j.a.div,{className:d()("row",{"is-total":"TT"===n},{"is-highlighted":(null===m||void 0===m?void 0:m.stateCode)===n}),onMouseEnter:D,onClick:L,style:P,ref:T},f.a.createElement("div",{className:"cell"},f.a.createElement("div",{className:"state-name"},I(r.r[n])),(null===s||void 0===s||null===(t=s.meta)||void 0===t?void 0:t.notes)&&f.a.createElement(c.a,{data:s.meta.notes},f.a.createElement(b.a,{size:16}))),r.n.map((function(e){return f.a.createElement(C,Object.assign({key:e},{data:s,statistic:e}))}))),H&&f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"state-meta"},(null===s||void 0===s||null===(a=s.meta)||void 0===a?void 0:a.last_updated)&&f.a.createElement("p",{className:"last-updated"},f.a.createElement(o.a,null),Object(l.a)("".concat(Object(l.e)(s.meta.last_updated)," ").concat(I("ago")))),f.a.createElement("div",{className:"state-page",onClick:function(){A.push("state/".concat(n))}},f.a.createElement(o.d,null),f.a.createElement("span",null,I("See more details on {{state}}",{state:n})))),f.a.createElement("div",{className:d()("row","heading")},f.a.createElement("div",{className:"cell heading",onClick:function(){return _("districtName")}},f.a.createElement("div",{className:"district-name"},I("District")),"districtName"===z.sortColumn&&f.a.createElement("div",{className:d()("sort-icon",{invert:!z.isAscending})},f.a.createElement(o.b,{size:10}))),r.n.map((function(e){return f.a.createElement(y,Object.assign({key:e},{statistic:e,sortData:z,handleSortClick:_}))})))),H&&Object.keys(s.districts).sort((function(e,t){return R(e,t)})).map((function(e){return f.a.createElement(k,Object.assign({key:e},{districtName:e,regionHighlighted:m,setRegionHighlighted:u,stateCode:n},{data:s.districts[e]}))})),H&&f.a.createElement("div",{className:"spacer"},f.a.createElement("p",null,"End of ".concat(r.r[n],"'s districts")),f.a.createElement("div",{className:"fold",onClick:function(){w(!1),T.current.scrollIntoView({behavior:"smooth",block:"start"})}},f.a.createElement(o.c,null))))}),(function(e,t){var a,i,n,c;return!!u()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!u()(null===(n=e.data)||void 0===n?void 0:n.delta,null===(c=t.data)||void 0===c?void 0:c.delta)&&(!(!u()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&u()(e.regionHighlighted.stateCode,e.stateCode)||u()(t.regionHighlighted.stateCode,t.stateCode))&&!(!u()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&u()(e.regionHighlighted.districtName,e.districtName)||u()(t.regionHighlighted.districtName,t.districtName))))}))}}]);
//# sourceMappingURL=Row.ddba89fe.chunk.js.map