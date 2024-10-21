(function(){"use strict";var t={5648:function(t,e,n){var i=n(9242),o=n(3396),r=n(7139),l=n.p+"img/ape-26.dcf064c7.png";const a=(0,o._)("br",null,null,-1),c={key:0},s={style:{"font-weight":"bold","font-size":"14px"}},u={key:1},p={key:2},d={id:"internet-icon"},h={key:0,xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 96 960 960",width:"20"},f=(0,o._)("path",{d:"m232 699-63-63q70-70 146.5-105T480 496q88 0 164.5 35T791 636l-63 63q-61-61-123-87t-125-26q-63 0-125 26t-123 87ZM63 530 0 467q93-95 216.5-153T480 256q140 0 263.5 58T960 467l-63 63q-88-84-192.5-134T480 346q-120 0-224.5 50T63 530Zm417 417 148-149q-29-29-66.5-45.5T480 736q-44 0-81.5 16.5T332 798l148 149Z"},null,-1),g=[f],v={key:1,xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 96 960 960",width:"20"},w=(0,o._)("path",{d:"M897 530q-88-84-192.5-134T480 346q-37 0-71 4.5T352 363l-73-73q44-16 95.5-25t105.5-9q140 0 263.5 58T960 467l-63 63ZM728 699q-33-32-60-51.5T599 609L486 496q95 2 167.5 39T791 636l-63 63Zm77 288L411 593q-54 13-99.5 42T232 699l-63-63q37-37 76.5-65t94.5-50L229 410q-47 23-89 54.5T63 530L0 467q36-37 77-69t84-55l-92-92 43-43 736 736-43 43Zm-325-40L332 798q29-29 66.5-45.5T480 736q44 0 81.5 16.5T628 798L480 947Z"},null,-1),b=[w],m=(0,o._)("img",{id:"ape-icon",src:l,alt:"ape"},null,-1),y=(0,o._)("div",{style:{display:"flex","justify-content":"center","margin-top":"1rem"}},null,-1),k=(0,o._)("button",{class:"refresh-btn",onclick:"location.reload(true)"},[(0,o._)("span",null,"🙈 Don't push me! 🙉")],-1);function q(t,e,n,i,l,f){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("strong",null,"["+(0,r.zw)(t.locations.toString())+"]",1),a,(0,o._)("p",null,(0,r.zw)(t.date),1),(0,o._)("p",null,(0,r.zw)(t.f),1),(0,o._)("p",null,(0,r.zw)(t.c),1),t.provider?((0,o.wg)(),(0,o.iD)("p",c,[(0,o.Uk)((0,r.zw)(t.provider)+" "+(0,r.zw)(this.flag)+"  ",1),(0,o._)("code",s,(0,r.zw)(t.ip),1)])):(0,o.kq)("",!0),t.ipv4===t.ip&&t.provider?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("code",u,(0,r.zw)(t.ipv4),1)),t.ipv6===t.ip&&t.provider?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("code",p,(0,r.zw)(t.ipv6),1)),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.addresses,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o._)("code",null,(0,r.zw)(t),1)])))),128))]),(0,o._)("div",d,[t.isOnline?((0,o.wg)(),(0,o.iD)("svg",h,g)):(0,o.kq)("",!0),t.isOnline?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("svg",v,b))]),m,(0,o._)("div",{id:"color-box",style:(0,r.j5)({backgroundColor:t.hexColor})},null,4),y,k])}n(7658);var _=n(9882),A=n(4037),O={name:"App",data(){return{locations:[],c:"",f:"",addresses:[],provider:"",isOnline:!0,date:"",uuid:"",hexColor:"",ip:"",ips:[],flag:"",ipv4:"",ipv6:""}},created(){this.date=S((new Date).toLocaleString("fa-IR")),this.checkSevers(),(0,_.Z)({url:"https://ipapi.co/json/",timeout:5e3}).then((t=>{console.log("===api=>",t.data);const e=JSON.stringify({ip:t.data.ip,network:t.data.network,city:t.data.city,region:t.data.region,country_name:t.data.country_name,asn:t.data.asn,org:t.data.org});this.f=e.replaceAll(","," , ").replaceAll('"',"").replaceAll("{","").replaceAll("}","")})).catch((t=>{console.log("=api===>",t),(0,_.Z)({url:"https://api.rezyro.com/info",timeout:5e3}).then((t=>{console.log("===api=>",t.data);const e=JSON.stringify({ip:t.data.ip,network:t.data.network,city:t.data.city,region:t.data.region,country_name:t.data.country_name,asn:t.data.asn,org:t.data.org});this.f=e.replaceAll(","," , ").replaceAll('"',"").replaceAll("{","").replaceAll("}","")}))})),T().then((t=>{this.flag=` ${x(t.loc)} `,t={...t,loc:t.loc+" "+x(t.loc)},this.ip=t.ip;const e=JSON.stringify(t);this.c=e.replaceAll(","," , ").replaceAll('"',"").replaceAll("{","").replaceAll("}",""),this.getProvider(t.ip)})).catch((t=>{console.log("===cf=>",t)})),_.Z.get("https://www.uuidtools.com/api/generate/v4").then((t=>{this.uuid=t.data[0],console.log("====>",this.uuid),this.hexColor=(0,A.colorFromUuid)(this.uuid)})),_.Z.get("https://api.rezyro.com/list").then((t=>{console.log("====>api ip list",t.data),this.ips=[...new Set(t.data.list)],this.findAddresses()})),window.addEventListener("online",(()=>{this.updateConnectionStatus()})),window.addEventListener("offline",(()=>{this.updateConnectionStatus()})),_.Z.get("https://apiv6.rezyro.com:4041/").then((t=>{this.ipv6=t.data.ip}))},methods:{checkSevers(){C.forEach((t=>this.check(t)))},check(t){(0,_.Z)({url:`https://${t.sub}.rezyro.com:${t.port}`,timeout:5e3}).then((e=>{""===this.ipv4&&(this.ipv4=e.data.ip),this.locations.push(t.label)})).catch((e=>{console.log(`=${t.label}===>`,e)}))},findAddresses(){this.ips.forEach((t=>{this.addresses.push(t)}))},getProvider(t){(0,_.Z)({url:`https://ipapi.co/${t}/org/`,timeout:5e3}).then((t=>{this.provider=t.data})).catch((t=>{console.log("====>",t)}))},updateConnectionStatus(){this.isOnline=navigator.onLine}}};const T=async function(){const t=await fetch("https://cloudflare.tv/cdn-cgi/trace").then((t=>t.text())),e=t.trim().split("\n").map((t=>t.split("=")));return Object.fromEntries(e)},C=[{sub:"vin",label:" Vin 🇩🇪",port:4040},{sub:"ire",label:" Aws 🇬🇧",port:4040},{sub:"bit",label:" Bit 🇺🇸",port:4040},{sub:"swiss-milk-chocolate",label:" Ch 🇨🇭",port:4040},{sub:"bit-cl",label:" 🔥",port:2096}],S=t=>{let e="۰".charCodeAt(0);return t=t.replace(/[۰-۹]/g,(function(t){return t.charCodeAt(0)-e})),e="٠".charCodeAt(0),t=t.replace(/[٠-٩]/g,(function(t){return t.charCodeAt(0)-e})),t};function x(t){const e=t.toUpperCase().split("").map((t=>127397+t.charCodeAt()));return String.fromCodePoint(...e)}var z=n(89);const Z=(0,z.Z)(O,[["render",q]]);var j=Z;(0,i.ri)(j).mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],r=t[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(a=!1,r<l&&(l=r));if(a){t.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,l=i[0],a=i[1],c=i[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var u=c(n)}for(e&&e(i);s<l.length;s++)r=l[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},i=self["webpackChunkblue_cheese"]=self["webpackChunkblue_cheese"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5648)}));i=n.O(i)})();