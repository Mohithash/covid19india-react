(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[37],{234:function(e,a,t){"use strict";t.r(a);var n=t(31),c=t(72),l=t(71),r=t(0),s=t.n(r),u=new Date,d=u;a.default=function(e){var a=e.updates;return Object(r.useLayoutEffect)((function(){d=u})),s.a.createElement("div",{className:"updates"},s.a.createElement("div",{className:"updates-header"},s.a.createElement("h2",null,Object(c.a)(d,"d MMM"))),a.slice(-5).reverse().map((function(e,a){e.update=e.update.replace(/\n/g,"<br/>");var t=new Date(1e3*e.timestamp);return s.a.createElement(s.a.Fragment,{key:a},t.getDate()!==d.getDate()?(d=t,s.a.createElement(s.a.Fragment,null,0===a?s.a.createElement("div",{className:"update"},s.a.createElement("h4",null,"No updates yet!")):"",s.a.createElement("div",{className:"updates-header"},s.a.createElement("h2",null,Object(c.a)(t,"d MMM"))))):" ",s.a.createElement("div",{key:a,className:"update"},s.a.createElement("h5",null,Object(n.a)(Object(l.a)(new Date(1e3*e.timestamp),new Date))+" ago"),s.a.createElement("h4",{dangerouslySetInnerHTML:{__html:e.update}})))})))}}}]);
//# sourceMappingURL=37.a138e5df.chunk.js.map