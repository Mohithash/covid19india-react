(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[29],{116:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(78),r=n(117),c=n(0),i=function(t){var e=Object(c.useState)(null),n=Object(a.a)(e,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){var e=t.current,n=new r.a((function(t,e){t.forEach((function(t,e){o(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}),[t]),i}},225:function(t,e,n){"use strict";n.r(e);var a=n(78),r=n(23),c=n(116),i=n(30),o=n(79),s=n.n(o),l=n(168),u=n(169),f=n(167),j=n(102),d=n(115),b=n(238),m=n(118),O=n(135),h=n(253),v=n(219),p=n(245),x=n(224),y=(n(101),n(58)),g=n(60),k=n(82),E=n.n(k),M=n(0),A=n.n(M),N=n(256);e.default=A.a.memo((function(t){var e=t.timeseries,n=t.dates,o=t.chartType,k=t.isUniform,E=t.isLog,w=Object(N.a)().t,T=Object(M.useRef)([]),L=Object(M.useRef)(),R=Object(c.a)(L),C=Object(M.useState)(),U=Object(a.a)(C,2),P=U[0],S=U[1];Object(M.useEffect)((function(){S(n[n.length-1])}),[n]),Object(M.useEffect)((function(){var t=n.length,a=R||L.current.getBoundingClientRect(),c=a.width,s=a.height,y=15,g=25,M=c-35,A=s-25,N=Object(b.a)().clamp(!0).domain([Object(i.l)(n[0]),Object(i.l)(n[t-1])]).range([g,M]),w=c<480?4:7,C=function(t){return t.attr("class","x-axis").call(Object(j.a)(N).ticks(w).tickFormat((function(t){return Object(i.d)(t,"dd MMM")})))},U=function(t,e){t.attr("class","x-axis2").call(Object(j.a)(N).tickValues([]).tickSize(0)).select(".domain").style("transform","translateY(".concat(e(0),"px)")),e(0)!==A?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},P=function(t,e){return t.attr("class","y-axis").call(Object(j.b)(e).ticks(4,"0~s").tickPadding(4))},Y=Object(l.a)(n,(function(t){return Object(i.j)(e[t],o,"active")})),F=Object(u.a)(n,(function(t){return Math.max(Object(i.j)(e[t],o,"confirmed"),Object(i.j)(e[t],o,"recovered"),Object(i.j)(e[t],o,"deceased"))})),J=Object(m.a)().clamp(!0).domain([Y,Math.max(1,1.2*F)]).nice(4).range([A,y]),z=Object(O.a)().clamp(!0).domain([Math.max(1,Y),Math.max(10,1.2*F)]).nice(4).range([A,y]);function B(){var t=Object(h.a)(this)[0],e=N.invert(t),a=(0,Object(f.a)((function(t){return Object(i.l)(t)})).left)(n,e,1),r=n[a-1],c=n[a];S(e-Object(i.l)(r)<Object(i.l)(c)-e?r:c)}function D(){S(n[t-1])}T.current.forEach((function(a,c){var s=Object(v.a)(a),f=s.transition().duration(r.b),j=r.r[c],b=function(t){return k&&"total"===o&&E&&"tested"!==t?z:k&&"tested"!==t?J:"total"===o&&E?Object(O.a)().clamp(!0).domain([Math.max(1,Object(l.a)(n,(function(n){return Object(i.j)(e[n],o,t)}))),Math.max(10,1.2*Object(u.a)(n,(function(n){return Object(i.j)(e[n],o,t)})))]).nice(4).range([A,y]):Object(m.a)().clamp(!0).domain([1.1*Math.min(0,Object(l.a)(n,(function(n){return Object(i.j)(e[n],o,t)}))),Math.max(1,1.2*Object(u.a)(n,(function(n){return Object(i.j)(e[n],o,t)})))]).nice(4).range([A,y])}(j),h=r.a[j];if(s.select(".x-axis").style("transform","translateY(".concat(A,"px)")).transition(f).call(C),s.select(".x-axis2").transition(f).call(U,b),s.select(".y-axis").style("transform","translateX(".concat(M,"px)")).transition(f).call(P,b),s.selectAll("circle").data(n,(function(t){return t})).join((function(t){return t.append("circle").attr("fill",h).attr("stroke",h).attr("r",2).attr("cy",A).attr("cx",(function(t){return N(Object(i.l)(t))}))})).transition(f).attr("cx",(function(t){return N(Object(i.l)(t))})).attr("cy",(function(t){return b(Object(i.j)(e[t],o,j))})),"total"===o){s.selectAll(".stem").transition(f).attr("y1",b(0)).attr("y2",b(0)).remove();var g,w=Object(p.a)().curve(x.a).x((function(t){return N(Object(i.l)(t))})).y((function(t){return b(Object(i.j)(e[t],o,j))}));s.selectAll(".trend").data(t?[n]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke",h+"50").attr("stroke-width",4).attr("d",w).attr("stroke-dasharray",(function(){return g=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",g).transition(f).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition(f).attrTween("d",(function(t){var e=Object(v.a)(this).attr("d"),n=w(t);return Object(d.interpolatePath)(e,n)}))})),s.selectAll(".trend").data(t?[n]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke",h+"50").attr("stroke-width",4).attr("d",w).attr("stroke-dasharray",(function(){return g=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",g).transition(f).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition(f).attrTween("d",(function(t){var e=Object(v.a)(this).attr("d"),n=w(t);return Object(d.interpolatePath)(e,n)}))}))}else s.selectAll(".trend").remove(),s.selectAll(".stem").data(n,(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").attr("x1",(function(t){return N(Object(i.l)(t))})).attr("y1",A).attr("x2",(function(t){return N(Object(i.l)(t))})).attr("y2",A)})).transition(f).attr("x1",(function(t){return N(Object(i.l)(t))})).attr("y1",b(0)).attr("x2",(function(t){return N(Object(i.l)(t))})).attr("y2",(function(t){return b(Object(i.j)(e[t],o,j))}));s.selectAll("*").attr("pointer-events","none"),s.on("mousemove",B).on("touchmove",B).on("mouseout",D).on("touchend",D)}))}),[o,R,k,E,e,n]),Object(M.useEffect)((function(){T.current.forEach((function(t){Object(v.a)(t).selectAll("circle").attr("r",(function(t){return t===P?4:2}))}))}),[P]);var Y=Object(M.useCallback)((function(t){if(P){var n=Object(i.j)(null===e||void 0===e?void 0:e[P],"delta",t);if("total"===o)return n;var a=Object(y.a)(Object(g.a)(Object(i.l)(P),1),{representation:"date"});return n-Object(i.j)(null===e||void 0===e?void 0:e[a],"delta",t)}}),[e,P,o]),F=Object(M.useMemo)((function(){var t=[];return[0,0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]);return A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:"Timeseries"},r.r.map((function(t,n){var a=Y(t,n);return A.a.createElement("div",{key:t,className:s()("svg-parent fadeInUp","is-".concat(t)),ref:L,style:F[n]},P&&A.a.createElement("div",{className:s()("stats","is-".concat(t))},A.a.createElement("h5",{className:"title"},w(Object(i.a)(t))),A.a.createElement("h5",{className:"title"},Object(i.d)(P,"dd MMMM")),A.a.createElement("div",{className:"stats-bottom"},A.a.createElement("h2",null,Object(i.f)(Object(i.j)(null===e||void 0===e?void 0:e[P],o,t))),A.a.createElement("h6",null,"".concat(a>=0?"+":"").concat(Object(i.f)(a))))),A.a.createElement("svg",{ref:function(t){T.current[n]=t},preserveAspectRatio:"xMidYMid meet"},A.a.createElement("g",{className:"x-axis"}),A.a.createElement("g",{className:"x-axis2"}),A.a.createElement("g",{className:"y-axis"})))}))))}),(function(t,e){return!!E()(e.chartType,t.chartType)&&(!!E()(e.isUniform,t.isUniform)&&(!!E()(e.isLog,t.isLog)&&(!!E()(e.stateCode,t.stateCode)&&!!E()(e.dates,t.dates))))}))}}]);
//# sourceMappingURL=29.89bd5195.chunk.js.map