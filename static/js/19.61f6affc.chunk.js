(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{135:function(t,e,r){"use strict";var n=r(0),a=r(86),i=function(){};e.a=function(t,e,r){if(!a.a)return[e,i,i];if(!t)throw new Error("useLocalStorage key may not be falsy");var o=r?r.raw?function(t){return t}:r.deserializer:JSON.parse,c=Object(n.useState)((function(){try{var n=r?r.raw?String:r.serializer:JSON.stringify,a=localStorage.getItem(t);return null!==a?o(a):(e&&localStorage.setItem(t,n(e)),e)}catch(c){return e}})),u=c[0],s=c[1],d=Object(n.useCallback)((function(e){try{var n="function"===typeof e?e(u):e;if("undefined"===typeof n)return;var a=void 0;a=r?r.raw?"string"===typeof n?n:JSON.stringify(n):r.serializer?r.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(t,a),s(o(a))}catch(c){}}),[t,s]),l=Object(n.useCallback)((function(){try{localStorage.removeItem(t),s(void 0)}catch(c){}}),[t,s]);return[u,d,l]}},223:function(t,e,r){"use strict";var n=r(0),a=r.n(n),i=r(18),o=r.n(i);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=Object(n.forwardRef)((function(t,e){var r=t.color,n=void 0===r?"currentColor":r,i=t.size,o=void 0===i?24:i,s=u(t,["color","size"]);return a.a.createElement("svg",c({ref:e,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),a.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="Bell",e.a=s},224:function(t,e,r){"use strict";var n=r(0),a=r.n(n),i=r(18),o=r.n(i);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=Object(n.forwardRef)((function(t,e){var r=t.color,n=void 0===r?"currentColor":r,i=t.size,o=void 0===i?24:i,s=u(t,["color","size"]);return a.a.createElement("svg",c({ref:e,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}),a.a.createElement("path",{d:"M18.63 13A17.89 17.89 0 0 1 18 8"}),a.a.createElement("path",{d:"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}),a.a.createElement("path",{d:"M18 8a6 6 0 0 0-9.33-5"}),a.a.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="BellOff",e.a=s},244:function(t,e,r){"use strict";r.d(e,"a",(function(){return it}));var n=r(24),a=r(26),i=r(2),o=r(44),c=r(45),u=r(12),s=r(19),d=r(4),l=r(25),f=r(1);function w(t,e,r){Object(f.a)(2,arguments);var n=r||{},a=n.locale,o=a&&a.options&&a.options.weekStartsOn,c=null==o?0:Object(d.a)(o),u=null==n.weekStartsOn?c:Object(d.a)(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=Object(i.a)(t),l=Object(d.a)(e),w=s.getUTCDay(),h=l%7,b=(h+7)%7,m=(b<u?7:0)+l-w;return s.setUTCDate(s.getUTCDate()+m),s}var h=r(51);var b=r(50);var m=r(14),p=r(13),g=/^(1[0-2]|0?\d)/,y=/^(3[0-1]|[0-2]?\d)/,v=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,T=/^(5[0-3]|[0-4]?\d)/,x=/^(2[0-3]|[0-1]?\d)/,k=/^(2[0-4]|[0-1]?\d)/,C=/^(1[0-1]|0?\d)/,O=/^(1[0-2]|0?\d)/,U=/^[0-5]?\d/,D=/^[0-5]?\d/,j=/^\d/,M=/^\d{1,2}/,E=/^\d{1,3}/,q=/^\d{1,4}/,H=/^-?\d+/,N=/^-?\d/,S=/^-?\d{1,2}/,Y=/^-?\d{1,3}/,L=/^-?\d{1,4}/,I=/^([+-])(\d{2})(\d{2})?|Z/,Q=/^([+-])(\d{2})(\d{2})|Z/,P=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,R=/^([+-])(\d{2}):(\d{2})|Z/,B=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function G(t,e,r){var n=e.match(t);if(!n)return null;var a=parseInt(n[0],10);return{value:r?r(a):a,rest:e.slice(n[0].length)}}function X(t,e){var r=e.match(t);return r?"Z"===r[0]?{value:0,rest:e.slice(1)}:{value:("+"===r[1]?1:-1)*(36e5*(r[2]?parseInt(r[2],10):0)+6e4*(r[3]?parseInt(r[3],10):0)+1e3*(r[5]?parseInt(r[5],10):0)),rest:e.slice(r[0].length)}:null}function F(t,e){return G(H,t,e)}function z(t,e,r){switch(t){case 1:return G(j,e,r);case 2:return G(M,e,r);case 3:return G(E,e,r);case 4:return G(q,e,r);default:return G(new RegExp("^\\d{1,"+t+"}"),e,r)}}function W(t,e,r){switch(t){case 1:return G(N,e,r);case 2:return G(S,e,r);case 3:return G(Y,e,r);case 4:return G(L,e,r);default:return G(new RegExp("^-?\\d{1,"+t+"}"),e,r)}}function K(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function A(t,e){var r,n=e>0,a=n?e:1-e;if(a<=50)r=t||100;else{var i=a+50;r=t+100*Math.floor(i/100)-(t>=i%100?100:0)}return n?r:1-r}var J=[31,28,31,30,31,30,31,31,30,31,30,31],Z=[31,29,31,30,31,30,31,31,30,31,30,31];function $(t){return t%400===0||t%4===0&&t%100!==0}var V={G:{priority:140,parse:function(t,e,r,n){switch(e){case"G":case"GG":case"GGG":return r.era(t,{width:"abbreviated"})||r.era(t,{width:"narrow"});case"GGGGG":return r.era(t,{width:"narrow"});case"GGGG":default:return r.era(t,{width:"wide"})||r.era(t,{width:"abbreviated"})||r.era(t,{width:"narrow"})}},set:function(t,e,r,n){return e.era=r,t.setUTCFullYear(r,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(t,e,r,n){var a=function(t){return{year:t,isTwoDigitYear:"yy"===e}};switch(e){case"y":return z(4,t,a);case"yo":return r.ordinalNumber(t,{unit:"year",valueCallback:a});default:return z(e.length,t,a)}},validate:function(t,e,r){return e.isTwoDigitYear||e.year>0},set:function(t,e,r,n){var a=t.getUTCFullYear();if(r.isTwoDigitYear){var i=A(r.year,a);return t.setUTCFullYear(i,0,1),t.setUTCHours(0,0,0,0),t}var o="era"in e&&1!==e.era?1-r.year:r.year;return t.setUTCFullYear(o,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(t,e,r,n){var a=function(t){return{year:t,isTwoDigitYear:"YY"===e}};switch(e){case"Y":return z(4,t,a);case"Yo":return r.ordinalNumber(t,{unit:"year",valueCallback:a});default:return z(e.length,t,a)}},validate:function(t,e,r){return e.isTwoDigitYear||e.year>0},set:function(t,e,r,n){var a=Object(l.a)(t,n);if(r.isTwoDigitYear){var i=A(r.year,a);return t.setUTCFullYear(i,0,n.firstWeekContainsDate),t.setUTCHours(0,0,0,0),Object(p.a)(t,n)}var o="era"in e&&1!==e.era?1-r.year:r.year;return t.setUTCFullYear(o,0,n.firstWeekContainsDate),t.setUTCHours(0,0,0,0),Object(p.a)(t,n)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(t,e,r,n){return W("R"===e?4:e.length,t)},set:function(t,e,r,n){var a=new Date(0);return a.setUTCFullYear(r,0,4),a.setUTCHours(0,0,0,0),Object(m.a)(a)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(t,e,r,n){return W("u"===e?4:e.length,t)},set:function(t,e,r,n){return t.setUTCFullYear(r,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(t,e,r,n){switch(e){case"Q":case"QQ":return z(e.length,t);case"Qo":return r.ordinalNumber(t,{unit:"quarter"});case"QQQ":return r.quarter(t,{width:"abbreviated",context:"formatting"})||r.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(t,{width:"wide",context:"formatting"})||r.quarter(t,{width:"abbreviated",context:"formatting"})||r.quarter(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,r){return e>=1&&e<=4},set:function(t,e,r,n){return t.setUTCMonth(3*(r-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(t,e,r,n){switch(e){case"q":case"qq":return z(e.length,t);case"qo":return r.ordinalNumber(t,{unit:"quarter"});case"qqq":return r.quarter(t,{width:"abbreviated",context:"standalone"})||r.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(t,{width:"wide",context:"standalone"})||r.quarter(t,{width:"abbreviated",context:"standalone"})||r.quarter(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,r){return e>=1&&e<=4},set:function(t,e,r,n){return t.setUTCMonth(3*(r-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(t,e,r,n){var a=function(t){return t-1};switch(e){case"M":return G(g,t,a);case"MM":return z(2,t,a);case"Mo":return r.ordinalNumber(t,{unit:"month",valueCallback:a});case"MMM":return r.month(t,{width:"abbreviated",context:"formatting"})||r.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(t,{width:"wide",context:"formatting"})||r.month(t,{width:"abbreviated",context:"formatting"})||r.month(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,r){return e>=0&&e<=11},set:function(t,e,r,n){return t.setUTCMonth(r,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(t,e,r,n){var a=function(t){return t-1};switch(e){case"L":return G(g,t,a);case"LL":return z(2,t,a);case"Lo":return r.ordinalNumber(t,{unit:"month",valueCallback:a});case"LLL":return r.month(t,{width:"abbreviated",context:"standalone"})||r.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(t,{width:"wide",context:"standalone"})||r.month(t,{width:"abbreviated",context:"standalone"})||r.month(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,r){return e>=0&&e<=11},set:function(t,e,r,n){return t.setUTCMonth(r,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(t,e,r,n){switch(e){case"w":return G(T,t);case"wo":return r.ordinalNumber(t,{unit:"week"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=1&&e<=53},set:function(t,e,r,n){return Object(p.a)(function(t,e,r){Object(f.a)(2,arguments);var n=Object(i.a)(t),a=Object(d.a)(e),o=Object(b.a)(n,r)-a;return n.setUTCDate(n.getUTCDate()-7*o),n}(t,r,n),n)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(t,e,r,n){switch(e){case"I":return G(T,t);case"Io":return r.ordinalNumber(t,{unit:"week"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=1&&e<=53},set:function(t,e,r,n){return Object(m.a)(function(t,e){Object(f.a)(2,arguments);var r=Object(i.a)(t),n=Object(d.a)(e),a=Object(h.a)(r)-n;return r.setUTCDate(r.getUTCDate()-7*a),r}(t,r,n),n)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,parse:function(t,e,r,n){switch(e){case"d":return G(y,t);case"do":return r.ordinalNumber(t,{unit:"date"});default:return z(e.length,t)}},validate:function(t,e,r){var n=$(t.getUTCFullYear()),a=t.getUTCMonth();return n?e>=1&&e<=Z[a]:e>=1&&e<=J[a]},set:function(t,e,r,n){return t.setUTCDate(r),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,parse:function(t,e,r,n){switch(e){case"D":case"DD":return G(v,t);case"Do":return r.ordinalNumber(t,{unit:"date"});default:return z(e.length,t)}},validate:function(t,e,r){return $(t.getUTCFullYear())?e>=1&&e<=366:e>=1&&e<=365},set:function(t,e,r,n){return t.setUTCMonth(0,r),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(t,e,r,n){switch(e){case"E":case"EE":case"EEE":return r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(t,{width:"wide",context:"formatting"})||r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,r){return e>=0&&e<=6},set:function(t,e,r,n){return(t=w(t,r,n)).setUTCHours(0,0,0,0),t},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(t,e,r,n){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+n.weekStartsOn+6)%7+e};switch(e){case"e":case"ee":return z(e.length,t,a);case"eo":return r.ordinalNumber(t,{unit:"day",valueCallback:a});case"eee":return r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});case"eeeee":return r.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(t,{width:"wide",context:"formatting"})||r.day(t,{width:"abbreviated",context:"formatting"})||r.day(t,{width:"short",context:"formatting"})||r.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,r){return e>=0&&e<=6},set:function(t,e,r,n){return(t=w(t,r,n)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(t,e,r,n){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+n.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return z(e.length,t,a);case"co":return r.ordinalNumber(t,{unit:"day",valueCallback:a});case"ccc":return r.day(t,{width:"abbreviated",context:"standalone"})||r.day(t,{width:"short",context:"standalone"})||r.day(t,{width:"narrow",context:"standalone"});case"ccccc":return r.day(t,{width:"narrow",context:"standalone"});case"cccccc":return r.day(t,{width:"short",context:"standalone"})||r.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(t,{width:"wide",context:"standalone"})||r.day(t,{width:"abbreviated",context:"standalone"})||r.day(t,{width:"short",context:"standalone"})||r.day(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,r){return e>=0&&e<=6},set:function(t,e,r,n){return(t=w(t,r,n)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(t,e,r,n){var a=function(t){return 0===t?7:t};switch(e){case"i":case"ii":return z(e.length,t);case"io":return r.ordinalNumber(t,{unit:"day"});case"iii":return r.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||r.day(t,{width:"short",context:"formatting",valueCallback:a})||r.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiii":return r.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiiii":return r.day(t,{width:"short",context:"formatting",valueCallback:a})||r.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiii":default:return r.day(t,{width:"wide",context:"formatting",valueCallback:a})||r.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||r.day(t,{width:"short",context:"formatting",valueCallback:a})||r.day(t,{width:"narrow",context:"formatting",valueCallback:a})}},validate:function(t,e,r){return e>=1&&e<=7},set:function(t,e,r,n){return(t=function(t,e){Object(f.a)(2,arguments);var r=Object(d.a)(e);r%7===0&&(r-=7);var n=1,a=Object(i.a)(t),o=a.getUTCDay(),c=r%7,u=(c+7)%7,s=(u<n?7:0)+r-o;return a.setUTCDate(a.getUTCDate()+s),a}(t,r,n)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(t,e,r,n){switch(e){case"a":case"aa":case"aaa":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})||r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,r,n){return t.setUTCHours(K(r),0,0,0),t},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(t,e,r,n){switch(e){case"b":case"bb":case"bbb":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})||r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,r,n){return t.setUTCHours(K(r),0,0,0),t},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(t,e,r,n){switch(e){case"B":case"BB":case"BBB":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})||r.dayPeriod(t,{width:"abbreviated",context:"formatting"})||r.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,r,n){return t.setUTCHours(K(r),0,0,0),t},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(t,e,r,n){switch(e){case"h":return G(O,t);case"ho":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=1&&e<=12},set:function(t,e,r,n){var a=t.getUTCHours()>=12;return a&&r<12?t.setUTCHours(r+12,0,0,0):a||12!==r?t.setUTCHours(r,0,0,0):t.setUTCHours(0,0,0,0),t},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(t,e,r,n){switch(e){case"H":return G(x,t);case"Ho":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=0&&e<=23},set:function(t,e,r,n){return t.setUTCHours(r,0,0,0),t},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(t,e,r,n){switch(e){case"K":return G(C,t);case"Ko":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=0&&e<=11},set:function(t,e,r,n){return t.getUTCHours()>=12&&r<12?t.setUTCHours(r+12,0,0,0):t.setUTCHours(r,0,0,0),t},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(t,e,r,n){switch(e){case"k":return G(k,t);case"ko":return r.ordinalNumber(t,{unit:"hour"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=1&&e<=24},set:function(t,e,r,n){var a=r<=24?r%24:r;return t.setUTCHours(a,0,0,0),t},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(t,e,r,n){switch(e){case"m":return G(U,t);case"mo":return r.ordinalNumber(t,{unit:"minute"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=0&&e<=59},set:function(t,e,r,n){return t.setUTCMinutes(r,0,0),t},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(t,e,r,n){switch(e){case"s":return G(D,t);case"so":return r.ordinalNumber(t,{unit:"second"});default:return z(e.length,t)}},validate:function(t,e,r){return e>=0&&e<=59},set:function(t,e,r,n){return t.setUTCSeconds(r,0),t},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(t,e,r,n){return z(e.length,t,(function(t){return Math.floor(t*Math.pow(10,3-e.length))}))},set:function(t,e,r,n){return t.setUTCMilliseconds(r),t},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(t,e,r,n){switch(e){case"X":return X(I,t);case"XX":return X(Q,t);case"XXXX":return X(P,t);case"XXXXX":return X(B,t);case"XXX":default:return X(R,t)}},set:function(t,e,r,n){return e.timestampIsSet?t:new Date(t.getTime()-r)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(t,e,r,n){switch(e){case"x":return X(I,t);case"xx":return X(Q,t);case"xxxx":return X(P,t);case"xxxxx":return X(B,t);case"xxx":default:return X(R,t)}},set:function(t,e,r,n){return e.timestampIsSet?t:new Date(t.getTime()-r)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(t,e,r,n){return F(t)},set:function(t,e,r,n){return[new Date(1e3*r),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(t,e,r,n){return F(t)},set:function(t,e,r,n){return[new Date(r),{timestampIsSet:!0}]},incompatibleTokens:"*"}},_=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,rt=/''/g,nt=/\S/,at=/[a-zA-Z]/;function it(t,e,r,l){Object(f.a)(3,arguments);var w=String(t),h=String(e),b=l||{},m=b.locale||n.a;if(!m.match)throw new RangeError("locale must contain match property");var p=m.options&&m.options.firstWeekContainsDate,g=null==p?1:Object(d.a)(p),y=null==b.firstWeekContainsDate?g:Object(d.a)(b.firstWeekContainsDate);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=m.options&&m.options.weekStartsOn,T=null==v?0:Object(d.a)(v),x=null==b.weekStartsOn?T:Object(d.a)(b.weekStartsOn);if(!(x>=0&&x<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===h)return""===w?Object(i.a)(r):new Date(NaN);var k,C={firstWeekContainsDate:y,weekStartsOn:x,locale:m},O=[{priority:10,set:ot,index:0}],U=h.match(tt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,c.a[e])(t,m.formatLong,C):t})).join("").match(_),D=[];for(k=0;k<U.length;k++){var j=U[k];!b.useAdditionalWeekYearTokens&&Object(s.b)(j)&&Object(s.c)(j),!b.useAdditionalDayOfYearTokens&&Object(s.a)(j)&&Object(s.c)(j);var M=j[0],E=V[M];if(E){var q=E.incompatibleTokens;if(Array.isArray(q)){for(var H=void 0,N=0;N<D.length;N++){var S=D[N].token;if(-1!==q.indexOf(S)||S===M){H=D[N];break}}if(H)throw new RangeError("The format string mustn't contain `".concat(H.fullToken,"` and `").concat(j,"` at the same time"))}else if("*"===E.incompatibleTokens&&D.length)throw new RangeError("The format string mustn't contain `".concat(j,"` and any other token at the same time"));D.push({token:M,fullToken:j});var Y=E.parse(w,j,m.match,C);if(!Y)return new Date(NaN);O.push({priority:E.priority,set:E.set,validate:E.validate,value:Y.value,index:O.length}),w=Y.rest}else{if(M.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+M+"`");if("''"===j?j="'":"'"===M&&(j=ct(j)),0!==w.indexOf(j))return new Date(NaN);w=w.slice(j.length)}}if(w.length>0&&nt.test(w))return new Date(NaN);var L=O.map((function(t){return t.priority})).sort((function(t,e){return e-t})).filter((function(t,e,r){return r.indexOf(t)===e})).map((function(t){return O.filter((function(e){return e.priority===t})).reverse()})).map((function(t){return t[0]})),I=Object(i.a)(r);if(isNaN(I))return new Date(NaN);var Q=Object(a.a)(I,Object(u.a)(I)),P={};for(k=0;k<L.length;k++){var R=L[k];if(R.validate&&!R.validate(Q,R.value,C))return new Date(NaN);var B=R.set(Q,P,R.value,C);B[0]?(Q=B[0],Object(o.a)(P,B[1])):Q=B}return Q}function ot(t,e){if(e.timestampIsSet)return t;var r=new Date(0);return r.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),r.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),r}function ct(t){return t.match(et)[1].replace(rt,"'")}}}]);
//# sourceMappingURL=19.61f6affc.chunk.js.map