/*! For license information please see 22.aa230a01.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{133:function(t,e,n){"use strict";n.r(e);var i=n(24),a=n(78),c=n(23),r=n(79),o=n.n(r),u=n(0),s=n.n(u),f=n(43),b=n.n(f),l=n(81),d=n(145);e.default=s.a.memo((function(t){var e=t.mapStatistic,n=t.setMapStatistic,r=Object(d.a)(),f=Object(a.a)(r,2),p=f[0],h=f[1].width,v=Object(u.useState)(!1),m=Object(a.a)(v,2),O=m[0],j=m[1],y=Object(u.useState)(0),g=Object(a.a)(y,2),w=g[0],x=g[1],S=Object(l.c)((function(){return{opacity:0,background:"".concat(c.b[e],"20"),transform:"translateX(".concat(h*c.m.indexOf(e)*.25,"px)"),config:l.b.gentle}})),k=Object(a.a)(S,2),E=k[0],R=k[1];Object(u.useEffect)((function(){h>0&&b.a.unstable_batchedUpdates((function(){R({transform:"translateX(".concat(h*c.m.indexOf(e)*.25,"px)"),opacity:1,background:"".concat(c.b[e],"20"),delay:0===w?1500:0,onStart:j.bind(void 0,!0),onRest:j.bind(void 0,!1)})}))}),[w,e,R,h]);var M=Object(u.useCallback)((function(t){x((function(t){return t+1})),n(t)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:p},s.a.createElement(l.a.div,{className:"highlight",style:E}),c.m.map((function(t,e){return s.a.createElement("div",{key:e,className:o()("clickable",Object(i.a)({},"is-".concat(t),!O)),onClick:M.bind(void 0,t)})})))}),(function(t,e){return t.mapStatistic===e.mapStatistic}))},145:function(t,e,n){"use strict";var i=n(0),a="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,c=n(86),r={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=c.a&&window.ResizeObserver?function(){var t=Object(i.useState)(null),e=t[0],n=t[1],c=Object(i.useState)(r),o=c[0],u=c[1],s=Object(i.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,i=e.y,a=e.width,c=e.height,r=e.top,o=e.left,s=e.bottom,f=e.right;u({x:n,y:i,width:a,height:c,top:r,left:o,bottom:s,right:f})}}))}),[]);return a((function(){if(e)return s.observe(e),function(){s.disconnect()}}),[e]),[n,o]}:function(){return[function(){},r]}},79:function(t,e,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var c=typeof i;if("string"===c||"number"===c)t.push(i);else if(Array.isArray(i)&&i.length){var r=a.apply(null,i);r&&t.push(r)}else if("object"===c)for(var o in i)n.call(i,o)&&i[o]&&t.push(o)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(i=function(){return a}.apply(e,[]))||(t.exports=i)}()}}]);
//# sourceMappingURL=22.aa230a01.chunk.js.map