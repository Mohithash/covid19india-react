(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[34],{246:function(e,t,a){"use strict";a.r(t);var i=a(94),l=a(78),n=a(23),s=a(31),d=a(79),c=a.n(d),o=a(82),r=a.n(o),m=a(0),u=a.n(m),v=a(81),g=u.a.memo((function(e){var t=e.statistic,a=e.data,l=e.isPerMillion,d=n.r[t],o=Object(i.a)(Object(i.a)({},d.options),{},{perMillion:l}),r=Object(s.i)(a,"total",d.key,o),m=Object(s.i)(a,"delta",d.key,o),g=Object(v.c)({total:r,delta:m,config:n.n});return u.a.createElement("div",{className:"cell statistic"},!d.hideDelta&&u.a.createElement(v.a.div,{className:c()("delta","is-".concat(d.key))},g.delta.interpolate((function(e){return e>0?"\u2191"+Object(s.e)(e,d.format):e<0?"\u2193"+Object(s.e)(Math.abs(e),d.format):""}))),u.a.createElement(v.a.div,{className:"total"},g.total.interpolate((function(e){return Object(s.e)(e,d.format)}))))}),(function(e,t){var a,i,l,n;return!!r()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!r()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&!!r()(e.isPerMillion,t.isPerMillion))})),b=a(99),h=a(85),N=a(89),E=a(250);var j=u.a.memo((function(e){var t,a=e.stateCode,i=e.districtName,l=e.data,s=e.isPerMillion,d=e.regionHighlighted,o=e.setRegionHighlighted,r=e.expandTable,v=Object(E.a)().t,j=Object(m.useCallback)((function(){d.districtName!==i&&o(Object(N.a)(d,(function(e){e.stateCode=a,e.districtName=i})))}),[d,i,o,a]),p=r?n.t:n.s;return u.a.createElement("div",{className:c()("row","district",{"is-highlighted":(null===d||void 0===d?void 0:d.districtName)===i}),onMouseEnter:j},u.a.createElement("div",{className:"cell"},u.a.createElement("div",{className:"state-name"},v(i)),(null===l||void 0===l||null===(t=l.meta)||void 0===t?void 0:t.notes)&&u.a.createElement(b.a,{data:l.meta.notes},u.a.createElement(h.j,{size:16}))),p.map((function(e){return u.a.createElement(g,Object.assign({key:e},{statistic:e,data:l,isPerMillion:s}))})))}),(function(e,t){var a,i,l,n,s,d;return!!r()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!r()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!r()(null===(s=e.data)||void 0===s?void 0:s.last_updated,null===(d=t.data)||void 0===d?void 0:d.last_updated)&&(!!r()(e.isPerMillion,t.isPerMillion)&&(!(!r()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(r()(e.regionHighlighted.districtName,e.districtName)||r()(t.regionHighlighted.districtName,t.districtName)))&&!!r()(e.expandTable,t.expandTable)))))})),p=a(145),C=a(5),O=a(213);t.default=u.a.memo((function(e){var t,a,d=this,o=e.data,r=e.stateCode,v=e.districtName,f=e.isPerMillion,k=e.regionHighlighted,H=e.setRegionHighlighted,M=e.expandTable,y=Object(m.useState)(!1),P=Object(l.a)(y,2),T=P[0],w=P[1],x=Object(O.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),A=Object(l.a)(x,2),D=A[0],S=A[1],R=Object(C.g)(),_=Object(E.a)().t,q=Object(m.useRef)(),z=Object(m.useCallback)((function(e){S(Object(N.a)(D,(function(t){t.isAscending=!D.isAscending,t.sortColumn=e})))}),[D,S]),F=Object(m.useCallback)((function(e,t){if("districtName"!==D.sortColumn){var a=n.r[D.sortColumn],l=Object(i.a)(Object(i.a)({},a.options),{},{perMillion:f}),d=Object(s.i)(o.districts[e],D.delta?"delta":"total",a.key,l)||0,c=Object(s.i)(o.districts[t],D.delta?"delta":"total",a.key,l)||0;return D.isAscending?d-c:c-d}return D.isAscending?e.localeCompare(t):t.localeCompare(e)}),[D,o,f]),I=Object(m.useCallback)((function(){r?k.stateCode!==r&&H(Object(N.a)(k,(function(e){e.stateCode=r,e.districtName=null}))):v&&(k.districtName===v&&k.stateCode===o.stateCode||H(Object(N.a)(k,(function(e){e.stateCode=o.stateCode,e.districtName=v}))))}),[o.stateCode,v,k,H,r]),J=Object(m.useCallback)((function(){o.districts&&w(!T)}),[T,o]),U=v;v===n.y&&(U="".concat(_(n.y)," [").concat(_(n.q[o.stateCode]),"]"));var V=Object(m.useCallback)((function(e){R.push("state/".concat(e))}),[R]),B=Object(m.useCallback)((function(){w(!1),q.current.scrollIntoView({block:"start"})}),[r]),G=M?n.t:n.s;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:c()("row",{"is-total":"TT"===r},{"is-highlighted":r&&(null===k||void 0===k?void 0:k.stateCode)===r||v&&(null===k||void 0===k?void 0:k.districtName)===v&&(null===k||void 0===k?void 0:k.stateCode)===o.stateCode}),onMouseEnter:I,onClick:J,ref:q},u.a.createElement("div",{className:"cell"},u.a.createElement("div",{className:"state-name fadeInUp"},_(n.q[r])||U),(null===o||void 0===o||null===(t=o.meta)||void 0===t?void 0:t.notes)&&u.a.createElement(b.a,{data:o.meta.notes},u.a.createElement(h.j,{size:16}))),G.map((function(e){return u.a.createElement(g,Object.assign({key:e},{data:o,statistic:e,isPerMillion:f}))}))),T&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"state-meta"},u.a.createElement("div",{className:"state-meta-top"},(null===o||void 0===o||null===(a=o.meta)||void 0===a?void 0:a.last_updated)&&u.a.createElement("p",{className:"last-updated"},u.a.createElement(h.c,null),Object(s.a)("".concat(Object(s.d)(o.meta.last_updated)," ").concat(_("ago")))),u.a.createElement("div",{className:"state-page",onClick:V.bind(this,r)},u.a.createElement(h.h,null),u.a.createElement("span",null,_("See more details on {{state}}",{state:r})))),n.y in o.districts&&u.a.createElement("div",{className:"state-meta-bottom"},u.a.createElement("div",{className:c()("disclaimer")},u.a.createElement(h.a,null),u.a.createElement("span",null,_("District-wise data not available in state bulletin"))))),u.a.createElement("div",{className:c()("row","heading")},u.a.createElement("div",{className:"cell heading",onClick:z.bind(this,"districtName")},u.a.createElement("div",{className:"district-name"},_("District")),"districtName"===D.sortColumn&&u.a.createElement("div",{className:c()("sort-icon",{invert:!D.isAscending})},u.a.createElement(h.e,{size:10}))),G.map((function(e){return u.a.createElement(p.a,Object.assign({key:e},{statistic:e,sortData:D,setSortData:S},{handleSort:z.bind(d,e)}))})))),T&&Object.keys(o.districts).sort((function(e,t){return F(e,t)})).map((function(e){return u.a.createElement(j,Object.assign({data:o.districts[e],key:e},{districtName:e,regionHighlighted:k,setRegionHighlighted:H,stateCode:r,isPerMillion:f,expandTable:M}))})),T&&u.a.createElement("div",{className:"spacer-row"},u.a.createElement("div",{className:"spacer"},u.a.createElement("p",null,"End of ".concat(_(n.q[r]),"'s districts")),u.a.createElement("div",{className:"fold",onClick:B},u.a.createElement(h.g,null)))))}),(function(e,t){var a,i,l,n;return!!r()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!r()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!r()(e.isPerMillion,t.isPerMillion)&&(!(!r()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&r()(e.regionHighlighted.stateCode,e.stateCode)||r()(t.regionHighlighted.stateCode,t.stateCode))&&(!(!r()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&r()(e.regionHighlighted.districtName,e.districtName)||r()(t.regionHighlighted.districtName,t.districtName))&&!!r()(e.expandTable,t.expandTable)))))}))}}]);
//# sourceMappingURL=34.8c0821ee.chunk.js.map