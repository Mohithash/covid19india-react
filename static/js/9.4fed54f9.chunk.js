(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[9],{631:function(e,t,a){"use strict";a.r(t);var n=a(55),c=a(3),l=a(0),i=a.n(l),s=a(602);var r=i.a.memo((function(e){return i.a.createElement("div",{className:"DownloadBlock fadeInUp",style:{animationDelay:"0.5s"}},i.a.createElement("a",{className:"button",target:"_noblank",href:"https://raw.githubusercontent.com/covid19india/api/gh-pages/raw_data.json"},i.a.createElement(s.a,null)," ",i.a.createElement("span",null,"JSON")),i.a.createElement("a",{className:"button",target:"_noblank",href:"https://raw.githubusercontent.com/covid19india/api/gh-pages/csv/latest/raw_data.csv"},i.a.createElement(s.a,null)," ",i.a.createElement("span",null,"CSV")))}),(function(){return!0})),d=a(103),m=a(313);var o=function(e){var t=e.logs,a=e.summary,n=e.setModal,c=e.setPatient,l=e.expand,s=e.applyClass;return i.a.createElement("div",{className:"Patients fadeInUp",style:{animationDelay:"1s"}},Object.keys(t).slice(a?-1:0).map((function(e,r){return"Invalid Date"!==e?i.a.createElement(i.a.Fragment,{key:r},i.a.createElement("h5",{className:"daylabel"},Object(m.a)(new Date(e),"dd MMM, yyyy")," ","("+t[e].length+")"),i.a.createElement("div",{key:r,className:"day ".concat(a?"summary":"")},t[e].slice(a?-40:0).map((function(e,t){return i.a.createElement("div",{key:t,className:s(e),onClick:function(){n(!0),c(e)}},i.a.createElement("h3",null,l?"P".concat(e.patientnumber):""))})))):null})))},u=a(57),E=a(601),h=a(303),p=a(628);var y=function(e){var t=Object(l.useState)(e.patients),a=Object(c.a)(t,2),n=a[0],s=a[1],r=Object(l.useState)(e.patients.slice(-1)),d=Object(c.a)(r,2),m=d[0],y=d[1],f=Object(l.useState)({}),v=Object(c.a)(f,2),b=v[0],g=v[1],N=Object(l.useState)(!1),j=Object(c.a)(N,2),O=j[0],k=j[1];Object(h.a)(O),window.onclick=function(e){var t=document.getElementById("modal");e.target===t&&k(!1)},Object(p.a)("Escape",(function(){k(!1)})),Object(l.useEffect)((function(){s(e.patients)}),[e.patients]);var w=Object(l.useCallback)((function(e){for(var t={},a=0;a<e.length;a++){var n=new Date(Object(u.a)(e[a].dateannounced,"dd/MM/yyyy",new Date));if(n in t){var c=t[n];c.push(e[a]),t[n]=c}else{var l=[];l.push(e[a]),t[n]=l}}g(t)}),[]);return Object(l.useEffect)((function(){n.length&&w(n)}),[w,n]),i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{logs:b,setModal:k,setPatient:y,expand:e.expand,applyClass:function(t){switch(t){case"genders":return function(t){return"patient-card ".concat("F"===t.gender?"is-femme":"M"===t.gender?"is-male":""," ").concat(e.expand?"":"is-small")};case"transmission":return function(t){return"patient-card ".concat("Local"===t.typeoftransmission?"is-local":"Imported"===t.typeoftransmission?"is-imported":""," ").concat(e.expand?"":"is-small")};case"nationality":return function(t){return"patient-card ".concat("India"===t.nationality?"is-in":"Myanmar"===t.nationality?"is-mm":"Indonesia"===t.nationality?"is-id":"United Kingdom"===t.nationality?"is-uk":"United States of America"===t.nationality?"is-us":"Thailand"===t.nationality?"is-th":"Phillipines"===t.nationality?"is-ph":"Italy"===t.nationality?"is-it":"Canada"===t.nationality?"is-ca":""," ").concat(e.expand?"":"is-small")};case"age":default:return function(t){return"patient-card ".concat(e.expand?"":"is-small")}}}(e.colorMode)}),O&&i.a.createElement("div",{className:"modal",id:"modal"},i.a.createElement("div",{className:"modal-content ".concat(O?"fadeInUp":"fadeOutDown")},i.a.createElement("div",{className:"close-button"},i.a.createElement(E.a,{onClick:function(){k(!1)}})),i.a.createElement("div",{className:"modal-top"},i.a.createElement("h1",null,"#",m.patientnumber)),i.a.createElement("div",{className:"meta"},i.a.createElement("h5",null,"Date Announced"),i.a.createElement("h3",null,m.dateannounced?m.dateannounced:"?"),i.a.createElement("h5",null,"Contracted from"),i.a.createElement("h3",{className:"contracted-from",onClick:function(){!function(e){if(""!==e)try{var t=e.slice(1);n.map((function(e,a){e.patientnumber===t&&y(e)}))}catch(a){console.log(a)}}(m.contractedfromwhichpatientsuspected)}},m.contractedfromwhichpatientsuspected?m.contractedfromwhichpatientsuspected:"?"),i.a.createElement("h5",null,"Detected City"),i.a.createElement("h3",null,m.detectedcity?m.detectedcity:"?"),i.a.createElement("h5",null,"Detected District"),i.a.createElement("h3",null,m.detecteddistrict?m.detecteddistrict:"?"),i.a.createElement("h5",null,"Detected State"),i.a.createElement("h3",null,m.detectedstate?m.detectedstate:"?"),i.a.createElement("h5",null,"Nationality"),i.a.createElement("h3",null,m.nationality?m.nationality:"?"),i.a.createElement("h5",null,"Age"),i.a.createElement("h3",null,m.agebracket?m.agebracket:"?"),i.a.createElement("h5",null,"Gender"),i.a.createElement("h3",null,m.gender?m.gender:"?"),i.a.createElement("h5",null,"State Patient Number"),i.a.createElement("h3",null,m.statepatientnumber?m.statepatientnumber:"?"),i.a.createElement("h5",null,"Type of transmission"),i.a.createElement("h3",null,m.typeoftransmission?m.typeoftransmission:"?")),i.a.createElement("div",{className:"notes"},i.a.createElement("h5",null,"Notes"),i.a.createElement("h3",null,m.notes)),i.a.createElement("h5",null,"Source 1"),i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:m.source1,target:"_noblank"},m.source1)),i.a.createElement("h5",null,"Source 2"),i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:m.source2,target:"_noblank"},m.source2)),i.a.createElement("h5",null,"Source 3"),i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:m.source3,target:"_noblank"},m.source3)))))},f=a(28),v=a.n(f),b=a(301),g=a(518),N=a.n(g),j=a(600),O=a(60),k=a(35),w=a(286),D=a(96);function S(e,t){var a=Object.keys(t);return e.filter((function(e){return a.every((function(a){return!t[a].length||e[a]===t[a]}))}))}t.default=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),s=a[0],o=a[1],u=Object(l.useState)([]),h=Object(c.a)(u,2),p=h[0],f=h[1],g=Object(l.useState)([]),I=Object(c.a)(g,2),C=I[0],M=I[1],x=Object(k.h)().pathname,A=Object(l.useState)("genders"),U=Object(c.a)(A,2),_=U[0],P=U[1],B=Object(l.useState)(!1),T=Object(c.a)(B,2),V=T[0],F=T[1],J=Object(l.useState)(Object(b.a)(new Date,1)),G=Object(c.a)(J,2),L=G[0],q=G[1],z=Object(w.a)("showReminder",!0),K=Object(c.a)(z,2),R=K[0],H=K[1],Q=Object(l.useState)(!1),W=Object(c.a)(Q,2),X=W[0],Y=W[1],Z=Object(l.useState)(!0),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=Object(l.useState)({detectedstate:"",detecteddistrict:"",detectedcity:"",dateannounced:Object(m.a)(Object(b.a)(new Date,1),"dd/MM/yyyy")}),ne=Object(c.a)(ae,2),ce=ne[0],le=ne[1];Object(l.useEffect)((function(){window.scrollTo(0,0)}),[x]),Object(D.a)((function(){try{v.a.get("https://api.covid19india.org/raw_data.json").then((function(e){f(e.data.raw_data.reverse()),o(!0)}))}catch(e){console.log(e)}})),Object(l.useEffect)((function(){document.querySelectorAll(".react-date-picker__inputGroup input").forEach((function(e){return e.setAttribute("readOnly",!0)}))}),[]);var ie=function(e,t){le((function(a){var c=Object(n.a)({},a);if(c[e]=t,"detectedstate"===e){var l=document.getElementById("district"),i=document.getElementById("city");l.style.display=""===t?"none":"inline",i.style.display="none",l.selectedIndex=0,i.selectedIndex=0,c.detecteddistrict="",c.detectedcity=""}else if("detecteddistrict"===e){var s=document.getElementById("city");s.style.display=""===t?"none":"inline",s.selectedIndex=0,c.detectedcity=""}return c}))};function se(e,t){var a=new Set(e.map((function(e){return e[t]})));return a.size>1&&a.add(""),"dateannounced"===t?Array.from(a):Array.from(a).sort()}return Object(l.useEffect)((function(){S(p,ce).length>0?(M(S(p,ce)),Y(!1),te(!1)):Y(!0)}),[p,ce]),i.a.createElement("div",{className:"PatientsDB"},i.a.createElement(O.a,null,i.a.createElement("title",null,"Demographics - covid19india.org"),i.a.createElement("meta",{name:"title",content:"Demographics - covid19india.org"}),i.a.createElement("meta",{name:"description",content:"A demographical overview of the Indian population affected by the coronavirus."})),i.a.createElement("div",{className:"filters fadeInUp",style:{animationDelay:"0.2s"}},i.a.createElement("div",{className:"filters-left"},i.a.createElement("div",{className:"select"},i.a.createElement("select",{style:{animationDelay:"0.3s"},id:"state",onChange:function(e){ie("detectedstate",e.target.value)},defaultValue:ce.detectedstate},i.a.createElement("option",{value:"",disabled:!0},"Select State"),se(p,"detectedstate").map((function(e,t){return i.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),i.a.createElement("div",{className:"select"},i.a.createElement("select",{style:{animationDelay:"0.4s",display:"none"},id:"district",onChange:function(e){ie("detecteddistrict",e.target.value)},defaultValue:ce.detecteddistrict},i.a.createElement("option",{value:"",disabled:!0},"Select District"),se(S(p,{detectedstate:ce.detectedstate}),"detecteddistrict").map((function(e,t){return i.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),i.a.createElement("div",{className:"select"},i.a.createElement("select",{style:{animationDelay:"0.4s",display:"none"},id:"city",onChange:function(e){ie("detectedcity",e.target.value)},defaultValue:ce.detectedcity},i.a.createElement("option",{value:"",disabled:!0},"Select City"),se(S(p,{detectedstate:ce.detectedstate,detecteddistrict:ce.detecteddistrict}),"detectedcity").map((function(e,t){return i.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),i.a.createElement("div",{className:"select"},i.a.createElement("select",{style:{animationDelay:"0.4s",display:"none"},id:"city",onChange:function(e){ie("detectedcity",e.target.value)},defaultValue:ce.detectedcity},i.a.createElement("option",{value:"",disabled:!0},"Select City"),se(S(p,{detectedstate:ce.detectedstate,detecteddistrict:ce.detecteddistrict}),"detectedcity").map((function(e,t){return i.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),i.a.createElement("div",{className:"select"},i.a.createElement(N.a,{value:L,minDate:new Date("30-Jan-2020"),maxDate:Object(b.a)(new Date,1),format:"dd/MM/y",calendarIcon:i.a.createElement(j.a,null),inputProps:onkeydown=function(e){e.preventDefault()},clearIcon:i.a.createElement(E.a,null),onChange:function(e){q(e);var t=e?Object(m.a)(e,"dd/MM/yyyy"):"";ie("dateannounced",t)}}))),i.a.createElement("div",{className:"legend"},"genders"===_&&i.a.createElement("div",{className:"legend-left"},i.a.createElement("div",{className:"circle is-female"}),i.a.createElement("h5",{className:"is-female"},"Female"),i.a.createElement("div",{className:"circle is-male"}),i.a.createElement("h5",{className:"is-male"},"Male"),i.a.createElement("div",{className:"circle"}),i.a.createElement("h5",{className:""},"Unknown")),"transmission"===_&&i.a.createElement("div",{className:"legend-left"},i.a.createElement("div",{className:"circle is-local"}),i.a.createElement("h5",{className:"is-local"},"Local"),i.a.createElement("div",{className:"circle is-imported"}),i.a.createElement("h5",{className:"is-imported"},"Imported"),i.a.createElement("div",{className:"circle"}),i.a.createElement("h5",{className:""},"Unknown")),"nationality"===_&&i.a.createElement("div",{className:"legend-left nationality"},i.a.createElement("div",{className:"circle is-in"}),i.a.createElement("h5",{className:"is-in"},"In"),i.a.createElement("div",{className:"circle is-uk"}),i.a.createElement("h5",{className:"is-uk"},"Uk"),i.a.createElement("div",{className:"circle is-us"}),i.a.createElement("h5",{className:"is-us"},"Us"),i.a.createElement("div",{className:"circle is-th"}),i.a.createElement("h5",{className:"is-thailand"},"Th"),i.a.createElement("div",{className:"circle is-ph"}),i.a.createElement("h5",{className:"is-ph"},"Ph"),i.a.createElement("div",{className:"circle is-it"}),i.a.createElement("h5",{className:"is-it"},"It"),i.a.createElement("div",{className:"circle is-ca"}),i.a.createElement("h5",{className:"is-ca"},"Ca"),i.a.createElement("div",{className:"circle is-id"}),i.a.createElement("h5",{className:"is-id"},"Id"),i.a.createElement("div",{className:"circle is-mm"}),i.a.createElement("h5",{className:"is-mm"},"Mm")),i.a.createElement("div",{className:"select ".concat(_)},i.a.createElement("select",{style:{animationDelay:"0.4s"},onChange:function(e){P(e.target.value)},defaultValue:_},i.a.createElement("option",{value:"genders"},"Genders"),i.a.createElement("option",{value:"transmission"},"Transmission"),i.a.createElement("option",{value:"nationality"},"Nationality"))))),i.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.3s"}},i.a.createElement("div",null,i.a.createElement("h1",null,"Demographics"),i.a.createElement("div",{className:"deep-dive ".concat(X||0===C.length?"disabled":"")},i.a.createElement("h5",null,"Expand"),i.a.createElement("input",{type:"checkbox",checked:V,disabled:X||0===C.length,onChange:function(e){F(!V)},className:"switch"}))),i.a.createElement("h6",{className:"disclaimer"},"Some of the data provided might be missing/unknown as the details have not been shared by the state/central governments")),i.a.createElement("div",{className:"reminder fadeInUp",style:{animationDelay:"1s",display:R?"":"none"}},i.a.createElement(E.a,{onClick:function(){H(!1)}}),i.a.createElement("p",null,"It is important that we do not think of these as just tiny boxes, numbers, or just another part of statistics - among these are our neighbors, our teachers, our healthcare workers, our supermarket vendors, our friends, our co-workers, our children or our grandparents.",i.a.createElement("br",null),i.a.createElement("br",null),"Among these are our people.")),s&&i.a.createElement("div",{className:"patientdb-wrapper"},ee?" ":X?i.a.createElement("div",{className:"no-result"},i.a.createElement("h5",null,"There were no new cases in",i.a.createElement("span",null,ce.detectedcity.length>0?" ".concat(ce.detectedcity,", "):"",ce.detecteddistrict.length>0?" ".concat(ce.detecteddistrict,", "):""," "+ce.detectedstate)," ","on ",i.a.createElement("span",null,ce.dateannounced,"."))):i.a.createElement(y,{patients:C,colorMode:_,expand:V})),i.a.createElement(r,{patients:p}),i.a.createElement(d.a,null))}}}]);
//# sourceMappingURL=9.4fed54f9.chunk.js.map