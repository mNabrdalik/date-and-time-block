(()=>{"use strict";var e,t={64:()=>{const e=window.wp.blocks,t=(window.wp.i18n,window.wp.blockEditor),r=window.wp.element,n=window.ReactJSXRuntime,o=JSON.parse('{"UU":"create-block/date-and-time-block"}');(0,e.registerBlockType)(o.UU,{edit:function(){const[e,o]=(0,r.useState)(new Date);(0,r.useEffect)((()=>{const e=setInterval((()=>{o(new Date)}),6e4);return()=>clearInterval(e)}),[]);const a=e.toLocaleDateString().toString(),i=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return(0,n.jsxs)("p",{...(0,t.useBlockProps)(),children:[a," - ",i,":",s]})}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],a=e[p][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var p=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(p)},r=self.webpackChunkdate_and_time_block=self.webpackChunkdate_and_time_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[350],(()=>n(64)));o=n.O(o)})();