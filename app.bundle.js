!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/testGHPages",e(e.s=0)}([function(t,e,r){"use strict";r(1),r(2);var n=r(3);(0,function(t){return t&&t.__esModule?t:{default:t}}(n).default)(".lozad",{load:function(t){t.src=t.getAttribute("data-src")},loaded:function(t){t.classList.add("loaded")}}).observe(),console.log("app.js")},function(t,e,r){"use strict";var n=document.getElementById("page-wrapper");window.addEventListener("scroll",function(){(document.documentElement.scrollTop||document.body.scrollTop)>1?n.classList.add("sticky"):n.classList.remove("sticky")})},function(t,e){},function(t,e,r){/*! lozad.js - v1.4.0 - 2018-04-22
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2018 Apoorv Saxena; Licensed MIT */
!function(e,r){t.exports=r()}(0,function(){"use strict";function t(t){t.setAttribute("data-loaded",!0)}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r=document.documentMode,n={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");r&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.appendChild(e)}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&(t.srcset=t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')")},loaded:function(){}},o=function(t){return"true"===t.getAttribute("data-loaded")},a=function(e,r){return function(n,a){n.forEach(function(n){n.intersectionRatio>0&&(a.unobserve(n.target),o(n.target)||(e(n.target),t(n.target),r(n.target)))})}},c=function(t){return t instanceof Element?[t]:t instanceof NodeList?t:document.querySelectorAll(t)};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=e({},n,i),s=u.rootMargin,d=u.threshold,l=u.load,f=u.loaded,g=void 0;return window.IntersectionObserver&&(g=new IntersectionObserver(a(l,f),{rootMargin:s,threshold:d})),{observe:function(){for(var e=c(r),n=0;n<e.length;n++)o(e[n])||(g?g.observe(e[n]):(l(e[n]),t(e[n]),f(e[n])))},triggerLoad:function(e){o(e)||(l(e),t(e),f(e))}}}})}]);
//# sourceMappingURL=app.bundle.js.map