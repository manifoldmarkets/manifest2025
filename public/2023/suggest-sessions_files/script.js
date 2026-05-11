var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(){"use strict";!function(t){var e=t.screen,n=e.width,r=e.height,a=t.navigator.language,i=t.location,o=t.localStorage,u=t.document,c=t.history,f=i.hostname,s=i.pathname,l=i.search,d=u.currentScript;if(d){var m="data-",h=d.getAttribute.bind(d),p=h(m+"website-id"),v=h(m+"host-url"),g="false"!==h(m+"auto-track"),b=h(m+"do-not-track"),y=h(m+"domains")||"",S=y.split(",").map((function(t){return t.trim()})),k=(v?v.replace(/\/$/,""):d.src.split("/").slice(0,-1).join("/"))+"/api/send",j=n+"x"+r,w=/data-umami-event-([\w-_]+)/,N=m+"umami-event",T=300,A=function(t,e,n){var r=t[e];return function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return n.apply(null,e),r.apply(t,e)}},x=function(){return{website:p,hostname:f,screen:j,language:a,title:M,url:I,referrer:J}},E=function(){return o&&o.getItem("umami.disabled")||b&&function(){var e=t.doNotTrack,n=t.navigator,r=t.external,a="msTrackingProtectionEnabled",i=e||n.doNotTrack||n.msDoNotTrack||r&&a in r&&r[a]();return"1"==i||"yes"===i}()||y&&!S.includes(f)},O=function(t,e,n){n&&(J=I,(I=function(t){return"http"===t.substring(0,4)?"/"+t.split("/").splice(3).join("/"):t}(n.toString()))!==J&&setTimeout(K,T))},D=function(t,e){if(void 0===e&&(e="event"),!E()){var n={"Content-Type":"application/json"};return void 0!==L&&(n["x-umami-cache"]=L),fetch(k,{method:"POST",body:JSON.stringify({type:e,payload:t}),headers:n}).then((function(t){return t.text()})).then((function(t){return L=t})).catch((function(){}))}},K=function(t,e){return D("string"==typeof t?Object.assign({},x(),{name:t,data:"object"==typeof e?e:void 0}):"object"==typeof t?t:"function"==typeof t?t(x()):x())};t.umami||(t.umami={track:K,identify:function(t){return D(Object.assign({},x(),{data:t}),"identify")}});var L,P,_,q,C,I=""+s+l,J=u.referrer,M=u.title;if(g&&!E()){c.pushState=A(c,"pushState",O),c.replaceState=A(c,"replaceState",O),C=function(t){var e=t.getAttribute.bind(t),n=e(N);if(n){var r={};return t.getAttributeNames().forEach((function(t){var n=t.match(w);n&&(r[n[1]]=e(t))})),K(n,r)}return Promise.resolve()},u.addEventListener("click",(function(t){var e=t.target,n="A"===e.tagName?e:function(t,e){for(var n=t,r=0;r<e;r++){if("A"===n.tagName)return n;if(!(n=n.parentElement))return null}return null}(e,10);if(n){var r=n.href,a="_blank"===n.target||t.ctrlKey||t.shiftKey||t.metaKey||t.button&&1===t.button;if(n.getAttribute(N)&&r)return a||t.preventDefault(),C(n).then((function(){a||(i.href=r)}))}else C(e)}),!0),_=new MutationObserver((function(t){var e=t[0];M=e&&e.target?e.target.text:void 0})),(q=u.querySelector("head > title"))&&_.observe(q,{subtree:!0,characterData:!0,childList:!0});var $=function(){"complete"!==u.readyState||P||(K(),P=!0)};u.addEventListener("readystatechange",$,!0),$()}}}(window)}();

}

/*
     FILE ARCHIVED ON 18:43:20 Oct 01, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:48:31 May 11, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.324
  captures_list: 0.613
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.032
  esindex: 0.009
  cdx.remote: 10.203
  LoadShardBlock: 227.388 (6)
  PetaboxLoader3.datanode: 195.48 (8)
  PetaboxLoader3.resolve: 89.359 (3)
  load_resource: 105.717 (2)
*/