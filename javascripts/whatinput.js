window.whatInput=function(){"use strict";function e(e){n(),o(e),m=!0,L=window.setTimeout(function(){m=!1},650)}function t(e){m||o(e)}function n(){window.clearTimeout(L)}function o(e){var t=r(e),n=E[e.type];if("pointer"===n&&(n=d(e)),v!==n){var o=document.activeElement.nodeName.toLowerCase();!p.hasAttribute("data-whatinput-formswitching")&&!p.hasAttribute("data-whatinput-formtyping")&&v&&f.indexOf(o)>-1||y.indexOf(t)>-1||i(n)}"keyboard"===n&&u(t)}function i(e){v=e,p.setAttribute("data-whatinput",v),l.indexOf(v)===-1&&l.push(v)}function r(e){return e.keyCode?e.keyCode:e.which}function d(e){return"number"==typeof e.pointerType?b[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType}function u(e){w.indexOf(k[e])===-1&&k[e]&&w.push(k[e])}function a(e){var t=r(e),n=w.indexOf(k[t]);n!==-1&&w.splice(n,1)}function s(){p=document.body,window.PointerEvent?(p.addEventListener("pointerdown",t),p.addEventListener("pointermove",t)):window.MSPointerEvent?(p.addEventListener("MSPointerDown",t),p.addEventListener("MSPointerMove",t)):(p.addEventListener("mousedown",t),p.addEventListener("mousemove",t),"ontouchstart"in window&&p.addEventListener("touchstart",e)),p.addEventListener(h,t),p.addEventListener("keydown",e),p.addEventListener("keyup",e),document.addEventListener("keyup",a)}function c(){return h="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"}var p,w=[],m=!1,v=null,f=["button","input","select","textarea"],h=c(),y=[16,17,18,91,93],E={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"};E[c()]="mouse";var L,l=[],k={9:"tab",13:"enter",16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"},b={2:"touch",3:"touch",4:"mouse"};return"addEventListener"in window&&Array.prototype.indexOf&&(document.body?s():document.addEventListener("DOMContentLoaded",s)),{ask:function(){return v},keys:function(){return w},types:function(){return l},set:i}}();