(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[0],{144:function(a,t,e){"use strict";a.exports=function a(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;var r,l,n;if(Array.isArray(t)){if((r=t.length)!=e.length)return!1;for(l=r;0!==l--;)if(!a(t[l],e[l]))return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if((r=(n=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(l=r;0!==l--;)if(!Object.prototype.hasOwnProperty.call(e,n[l]))return!1;for(l=r;0!==l--;){var i=n[l];if(!a(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}},151:function(a,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return d})),e.d(t,"e",(function(){return s})),e.d(t,"f",(function(){return p})),e.d(t,"g",(function(){return f}));var r=e(0),l=e.n(r),n={small:16,medium:32,large:64};function i(a){var t=a["aria-label"],e=a.className,r=a.size,l=a.verticalAlign,i=a.svgDataByHeight,h=n[r]||r,o=function(a,t){return a.map((function(a){return parseInt(a,10)})).reduce((function(a,e){return e<=t?e:a}),a[0])}(Object.keys(i),h),c=i[o].width;return{"aria-hidden":t?"false":"true","aria-label":t,role:"img",className:e,viewBox:"0 0 "+c+" "+o,width:h*(c/o),height:h,fill:"currentColor",style:{display:"inline-block",userSelect:"none",verticalAlign:l},dangerouslySetInnerHTML:{__html:i[o].path}}}var h=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r])}return a};function o(a){return l.a.createElement("svg",i(h({},a,{svgDataByHeight:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"></path>'},24:{width:24,path:'<path d="M12.5 7.25a.75.75 0 00-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 00.744-1.302L12.5 12.315V7.25z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path>'}}})))}function c(a){return l.a.createElement("svg",i(h({},a,{svgDataByHeight:{16:{width:16,path:'<path fill-rule="evenodd" d="M.75 3a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H.75zM3 7.75A.75.75 0 013.75 7h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 013 7.75zm3 4a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>'},24:{width:24,path:'<path d="M2.75 6a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75zM6 11.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm4 4.938a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>'}}})))}function u(a){return l.a.createElement("svg",i(h({},a,{svgDataByHeight:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.823 1.677L4.927 4.573A.25.25 0 005.104 5H7.25v3.236a.75.75 0 101.5 0V5h2.146a.25.25 0 00.177-.427L8.177 1.677a.25.25 0 00-.354 0zM13.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zm-3.75.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM7.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM4 11.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM1.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>'},24:{width:24,path:'<path fill-rule="evenodd" d="M11.47 5.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 01-1.06 1.06L12 6.81 9.28 9.53a.75.75 0 01-1.06-1.06l3.25-3.25z"></path><path fill-rule="evenodd" d="M12 5.5a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0v-8A.75.75 0 0112 5.5zM10.75 18a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm-8 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm12 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm-8 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm12 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75z"></path>'}}})))}function d(a){return l.a.createElement("svg",i(h({},a,{svgDataByHeight:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>'},24:{width:24,path:'<path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path><path d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"></path>'}}})))}function s(a){return l.a.createElement("svg",i(h({},a,{svgDataByHeight:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.655 14.916L8 14.25l.345.666a.752.752 0 01-.69 0zm0 0L8 14.25l.345.666.002-.001.006-.003.018-.01a7.643 7.643 0 00.31-.17 22.08 22.08 0 003.433-2.414C13.956 10.731 16 8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8 3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 003.744 2.584l.018.01.006.003h.002z"></path>'},24:{width:24,path:'<path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path>'}}})))}function p(a){return l.a.createElement("svg",i(h({},a,{svgDataByHeight:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'},24:{width:24,path:'<path d="M12 7a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 7zm1 9a1 1 0 11-2 0 1 1 0 012 0z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path>'}}})))}function f(a){return l.a.createElement("svg",i(h({},a,{svgDataByHeight:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 11-1.061 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.081 3.081 0 00-1.707-2.084l-1.327-.613a1.75 1.75 0 01-.504-2.826L4.456.734zM5.92 1.866a.25.25 0 00-.404-.072L1.794 5.516a.25.25 0 00.072.404l1.328.613A4.582 4.582 0 015.73 9.63l.584 2.454a.25.25 0 00.42.12l5.47-5.47a.25.25 0 00-.12-.42L9.63 5.73a4.581 4.581 0 01-3.098-2.537L5.92 1.866z"></path>'},24:{width:24,path:'<path fill-rule="evenodd" d="M7.886 1.553a1.75 1.75 0 012.869.604l.633 1.629a5.666 5.666 0 003.725 3.395l3.959 1.131a1.75 1.75 0 01.757 2.92L16.06 15l5.594 5.595a.75.75 0 11-1.06 1.06L15 16.061l-3.768 3.768a1.75 1.75 0 01-2.92-.757l-1.131-3.96a5.667 5.667 0 00-3.395-3.724l-1.63-.633a1.75 1.75 0 01-.603-2.869l6.333-6.333zm6.589 12.912l-.005.005-.005.005-4.294 4.293a.25.25 0 01-.417-.108l-1.13-3.96A7.166 7.166 0 004.33 9.99L2.7 9.356a.25.25 0 01-.086-.41l6.333-6.332a.25.25 0 01.41.086l.633 1.63a7.167 7.167 0 004.71 4.293l3.96 1.131a.25.25 0 01.108.417l-4.293 4.294z"></path>'}}})))}o.defaultProps={className:"octicon",size:16,verticalAlign:"text-bottom"},c.defaultProps={className:"octicon",size:16,verticalAlign:"text-bottom"},u.defaultProps={className:"octicon",size:16,verticalAlign:"text-bottom"},d.defaultProps={className:"octicon",size:16,verticalAlign:"text-bottom"},s.defaultProps={className:"octicon",size:16,verticalAlign:"text-bottom"},p.defaultProps={className:"octicon",size:16,verticalAlign:"text-bottom"},f.defaultProps={className:"octicon",size:16,verticalAlign:"text-bottom"}}}]);
//# sourceMappingURL=0.6c4de5a6.chunk.js.map