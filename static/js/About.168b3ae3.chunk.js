(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[5],{264:function(e,t,n){"use strict";n.r(t);var a=n(62),c=n(6),i=n.n(c),o=n(84);t.default=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),s=n[0],r=n[1];Object(c.useEffect)((function(){l()}),[]),Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]);var l=function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){r(e.faq)})).catch((function(e){console.log(e)}))};return i.a.createElement("div",{className:"FAQ"},i.a.createElement(o.a,null,i.a.createElement("title",null,"FAQ - covid19india.org"),i.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),s.map((function(e,t){return i.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},i.a.createElement("h2",{className:"question"},e.question),i.a.createElement("h2",{className:"answer",dangerouslySetInnerHTML:{__html:e.answer}}))})))}}}]);
//# sourceMappingURL=About.168b3ae3.chunk.js.map