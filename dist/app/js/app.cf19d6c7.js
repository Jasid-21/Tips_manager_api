(function(){"use strict";var t={7340:function(t,e,n){var a=n(7764),i=n(8808),s=n(4108);const o={class:"links-list"},l={class:"link-item"},r={class:"link-item"};function c(t,e){const n=(0,s.E1)("RouterLink"),a=(0,s.E1)("fai");return(0,s.Wz)(),(0,s.An)("nav",null,[(0,s.QD)("ul",o,[(0,s.QD)("li",l,[(0,s.K2)(n,{to:"/"},{default:(0,s.Ql)((()=>[(0,s.mY)("Home")])),_:1}),(0,s.K2)(a,{icon:"fa-solid fa-home"})]),(0,s.QD)("li",r,[(0,s.K2)(n,{to:"/history"},{default:(0,s.Ql)((()=>[(0,s.mY)("Historial")])),_:1}),(0,s.K2)(a,{icon:"fa-solid fa-history"})])])])}var u=n(4100);const p={},d=(0,u.c)(p,[["render",c],["__scopeId","data-v-7db3e68e"]]);var v=d,f=(0,s._M)({__name:"App",setup(t){return(t,e)=>{const n=(0,s.E1)("router-view");return(0,s.Wz)(),(0,s.An)(s.ae,null,[(0,s.K2)(v),(0,s.K2)(n)],64)}}});const m=f;var h=m,y=n(7464),g=n(9096),D=(0,s._M)({__name:"AmountContainer",props:{amount:{type:Number,required:!0},pointer:{type:String},active:{type:Boolean,default:!1}},emits:["export-pointer"],setup(t,{emit:e}){const n=t,a=e;return(e,i)=>((0,s.Wz)(),(0,s.An)("div",{class:(0,g.WN)(["amount-container",{active:t.active}]),onClick:i[0]||(i[0]=t=>a("export-pointer",n.pointer))},[(0,s.QD)("span",null,"$"+(0,g.WA)(t.amount.toFixed(2)),1)],2))}});const b=(0,u.c)(D,[["__scopeId","data-v-146dba03"]]);var Q=b;n(3248);function _(){const t=new Date,e=t.getDate(),n=t.getMonth()+1,a=t.getFullYear();return[e,n,a].join("/")}var W=_;function A(t=5){const e="abcdefghijklmnopqrstuvwxyz",n=e.toUpperCase(),a="0123456789",i=e+n+a;for(var s="",o=0;o<t;o++){const t=Math.floor(Math.random()*(i.length-1)),e=i[t];s+=e}return s}var k=A;const P=(0,i.O6)("payments",{state:()=>({totalMoney:5500,totalTips:0,peopleCount:1,tipsFraction:0,currentPayMethod:void 0,pointer:"tips",paymentList:[]}),getters:{getTotalTips:t=>t.totalTips,getTipsFraction:t=>t.tipsFraction,getTotalPayment:t=>t.paymentList.reduce(((t,e)=>e.value+t),0),getRemainingTips(t){const e=t.paymentList.reduce(((t,e)=>e.value+t),0);return t.totalTips-e}},actions:{resetValues(){const t=this.getRemainingTips;this.totalTips=Math.max(0,t);const e=this.paymentList.length;this.paymentList=[],this.peopleCount-=e,this.setTipsFraction()},addPayment(t){if(!this.currentPayMethod)return void alert("Seleccione un método de pago.");const e={id:k(),value:t,date:W(),method:this.currentPayMethod},n=this.subsRemaining(t);n&&this.paymentList.push(e)},removePayment(t){this.paymentList=this.paymentList.filter((e=>e.id!=t))},subsRemaining(t){if(this.getRemainingTips<t){const e="Propinas insuficientes. Deseas completar con el dinero en caja?",n=confirm(e);if(!n)return!1;const a=t-this.getRemainingTips;if(this.totalMoney<a)return alert("Fondos insuficientes en caja"),!1;this.totalMoney-=a}return!0},setValue(t){switch(console.log(t),this.pointer){case"tips":this.setTotalTips(t),this.setTipsFraction();break;case"people":this.setPeopleCount(t);break;default:console.log("Pointer unset")}},setPointer(t){console.log(t),this.pointer=t},setTotalTips(t){this.totalTips=t},setPeopleCount(t){this.peopleCount=t,this.setTipsFraction()},setPaymentMethod(t){this.currentPayMethod=t},setTipsFraction(){console.log("Tips fraction"),this.tipsFraction=this.totalTips/(this.peopleCount||1)}}}),z=t=>((0,s.ED)("data-v-722c085a"),t=t(),(0,s.ii)(),t),T={class:"process-container"},C={class:"total-tips"},w=z((()=>(0,s.QD)("span",{class:"title"},"Total de Propinas",-1))),M={class:"flex"},S={class:"divider-container"},x=z((()=>(0,s.QD)("span",{class:"title"}," ¿Entre cuántos quieres dividir las propinas? ",-1))),E=z((()=>(0,s.QD)("br",null,null,-1))),F=z((()=>(0,s.QD)("br",null,null,-1))),O={class:"flex"},L={class:"payment-container"},j=z((()=>(0,s.QD)("span",{class:"title"}," Elige el método de pago ",-1))),I={class:"buttons-container"},K=["onClick"],R=z((()=>(0,s.QD)("br",null,null,-1)));var N=(0,s._M)({__name:"ProcessContainer",setup(t){const e=["Efectivo","BBVA_1234","Santander_1234"],n=P(),a=(0,s.S6)((()=>n.totalTips)),i=(0,s.S6)((()=>n.peopleCount)),o=(0,s.S6)((()=>n.getTipsFraction)),l=(0,s.S6)((()=>n.pointer)),r=(0,s.S6)((()=>n.currentPayMethod));function c(t){n.setPointer(t)}function u(t){n.setPaymentMethod(t)}return(t,n)=>{const p=(0,s.E1)("fai");return(0,s.Wz)(),(0,s.An)("div",T,[(0,s.QD)("div",C,[w,(0,s.QD)("div",M,[(0,s.K2)(Q,{amount:a.value,active:"tips"==l.value},null,8,["amount","active"]),(0,s.QD)("button",{class:"edit-btn",onClick:n[0]||(n[0]=t=>c("tips"))},[(0,s.K2)(p,{icon:"fa-solid fa-pen"})])])]),(0,s.QD)("div",S,[x,E,F,(0,s.QD)("div",O,[(0,s.QD)("div",{class:(0,g.WN)(["divider-input",{active:"people"==l.value}]),onClick:n[1]||(n[1]=t=>c("people"))},(0,g.WA)(i.value),3),(0,s.QD)("span",null,"$"+(0,g.WA)(o.value.toFixed(2))+" x Persona",1)])]),(0,s.QD)("div",L,[j,(0,s.QD)("div",I,[((0,s.Wz)(),(0,s.An)(s.ae,null,(0,s.mi)(e,(t=>(0,s.QD)("button",{class:(0,g.WN)(["method-selector",{active:r.value==t}]),onClick:e=>u(t)},["Efectivo"==t?((0,s.Wz)(),(0,s.Az)(p,{key:0,class:"icon",icon:"fa-solid fa-money-bill"})):((0,s.Wz)(),(0,s.Az)(p,{key:1,class:"icon",icon:"fa-solid fa-credit-card"})),R,(0,s.mY)(" "+(0,g.WA)(t.split("_").join(" ")),1)],10,K))),64))])])])}}});const $=(0,u.c)(N,[["__scopeId","data-v-722c085a"]]);var V=$,H=n(2500);const q=t=>((0,s.ED)("data-v-87a6776e"),t=t(),(0,s.ii)(),t),B={class:"result-container"},Y={key:0,class:"symbol"},G={key:1,class:"symbol"},J={class:"result"},U={class:"buttons-container"},X=["onClick"],Z=q((()=>(0,s.QD)("br",null,null,-1))),tt={key:0,class:"remaining-money-alert"};var et=(0,s._M)({__name:"InputDevice",setup(t){const e=(0,H.IL)(!0),n=P(),a=(0,s.S6)((()=>n.pointer)),i=(0,s.S6)((()=>n.getRemainingTips)),o=(0,s.S6)((()=>n.currentPayMethod)),l=(0,s.S6)((()=>n.tipsFraction)),r=(0,H.IL)(["0"]);function c(){e.value&&(r.value=[],e.value=!1)}function u(t){c();const e=(t+1).toString();r.value.push(e)}function p(){c(),r.value.push("0","0")}function d(){return r.value.length&&r.value.pop()||""}function v(t){r.value=t||l.value.toString().split("")}function f(){const t=r.value.join(""),s=Number(t);if(!isNaN(s))if(n.setValue(Number(t)),v(["0"]),e.value=!0,"tips"!=a.value){if("people"==a.value)return n.setPointer("final"),void v();if("final"==a.value){if(n.addPayment(s),i.value<l.value)return void v((i.value<0?0:i.value).toString().split(""));v()}}else n.setPointer("people")}return(t,e)=>{const n=(0,s.E1)("fai");return(0,s.Wz)(),(0,s.An)("div",{class:(0,g.WN)(["input-container",{active:a.value}])},[(0,s.QD)("div",B,["people"==a.value?((0,s.Wz)(),(0,s.An)("span",Y,"#")):(0,s.g1)("",!0),"tips"==a.value||"final"==a.value?((0,s.Wz)(),(0,s.An)("span",G," $ ")):(0,s.g1)("",!0),(0,s.QD)("span",J,(0,g.WA)(r.value.join("")),1),(0,s.QD)("button",{class:"delete-btn",onClick:d},[(0,s.K2)(n,{icon:"fa-solid fa-delete-left"})])]),(0,s.QD)("div",U,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(Array.from(Array(9).keys()),(t=>((0,s.Wz)(),(0,s.An)("button",{onClick:e=>u(t)},(0,g.WA)(t+1),9,X)))),256)),(0,s.QD)("button",{onClick:p},"00"),(0,s.QD)("button",{onClick:e[0]||(e[0]=t=>u(-1))},"0"),(0,s.QD)("button",{onClick:f},"Ok!")]),Z,o.value?((0,s.Wz)(),(0,s.An)("div",tt," Cantidad restante $"+(0,g.WA)((i.value<0?0:i.value).toFixed(2)),1)):(0,s.g1)("",!0)],2)}}});const nt=(0,u.c)(et,[["__scopeId","data-v-87a6776e"]]);var at=nt;const it={class:"symbol"},st={class:"method"},ot={class:"value"},lt={class:"date"};var rt=(0,s._M)({__name:"PaymentItem",props:{item:{type:Object,required:!0},shadow:{type:Boolean,default:!0},cancelable:{type:Boolean,default:!0}},setup(t){const e=P();function n(t){if(!t)return;const n=confirm("¿Seguro que deseas deshacer este pago?");n&&e.removePayment(t)}return(e,a)=>{const i=(0,s.E1)("fai");return(0,s.Wz)(),(0,s.An)("li",{class:(0,g.WN)(["payment-item",{shadow:t.shadow,cancelable:t.cancelable}])},[(0,s.QD)("div",it,["Efectivo"==t.item.method?((0,s.Wz)(),(0,s.Az)(i,{key:0,icon:"fa-solid fa-money-bill"})):((0,s.Wz)(),(0,s.Az)(i,{key:1,icon:"fa-solid fa-credit-card"}))]),(0,s.QD)("div",st,(0,g.WA)(t.item.method),1),(0,s.QD)("div",ot,"$"+(0,g.WA)(t.item.value),1),(0,s.QD)("div",lt,(0,g.WA)(t.item.date),1),t.cancelable?((0,s.Wz)(),(0,s.An)("div",{key:0,class:"cancel",onClick:a[0]||(a[0]=e=>n(t.item.id))},"x")):(0,s.g1)("",!0)],2)}}});const ct=(0,u.c)(rt,[["__scopeId","data-v-75068eae"]]);var ut=ct;const pt=t=>((0,s.ED)("data-v-64fca0dd"),t=t(),(0,s.ii)(),t),dt={class:"payments-list"},vt=pt((()=>(0,s.QD)("span",{class:"title"},"Pagos",-1))),ft={class:"payments"},mt={key:0,class:"payment-item"},ht=pt((()=>(0,s.QD)("span",null,null,-1))),yt=pt((()=>(0,s.QD)("span",null,"Sin pagos",-1))),gt=[ht,yt];var Dt=(0,s._M)({__name:"PaymentsList",setup(t){const e=P(),n=(0,s.S6)((()=>e.paymentList));return(t,e)=>((0,s.Wz)(),(0,s.An)("div",dt,[vt,(0,s.QD)("ul",ft,[n.value.length?(0,s.g1)("",!0):((0,s.Wz)(),(0,s.An)("li",mt,gt)),((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(n.value,((t,e)=>((0,s.Wz)(),(0,s.Az)(ut,{item:t,key:e},null,8,["item"])))),128))])]))}});const bt=(0,u.c)(Dt,[["__scopeId","data-v-64fca0dd"]]);var Qt=bt;const _t=(0,i.O6)("behaviors",{state:()=>({base_url:""})}),Wt=t=>((0,s.ED)("data-v-412bc981"),t=t(),(0,s.ii)(),t),At={class:"master-container"},kt=Wt((()=>(0,s.QD)("div",{class:"navbar-space"},null,-1))),Pt={class:"main-content"},zt={class:"upper-info"},Tt=Wt((()=>(0,s.QD)("span",{class:"view-title"},"Pago de Propinas",-1))),Ct={class:"calc-section"},wt={class:"final-steps-container"},Mt={class:"info-container"},St=Wt((()=>(0,s.QD)("span",null,"Total Pagado",-1))),xt={class:"reverse"},Et=Wt((()=>(0,s.QD)("span",null,"Restante por Pagar",-1))),Ft={class:"reverse"},Ot={class:"button-container"},Lt=["disabled"];var jt=(0,s._M)({__name:"HomeView",setup(t){const e=P(),n=_t(),a=(0,s.S6)((()=>e.totalMoney)),i=(0,s.S6)((()=>e.totalTips)),o=(0,s.S6)((()=>e.getRemainingTips)),l=(0,s.S6)((()=>e.paymentList)),r=n.base_url;async function c(){if(!l.value.length)return;const t=await fetch(r+"/payment",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(l.value)}),n=t.ok;if(n)alert("Pagos realizados con éxito!"),e.resetValues();else{const e=t.statusText;alert(e)}}return(t,e)=>((0,s.Wz)(),(0,s.An)("div",At,[kt,(0,s.QD)("div",Pt,[(0,s.QD)("div",zt,[Tt,(0,s.K2)(Q,{amount:a.value},null,8,["amount"])]),(0,s.QD)("section",Ct,[(0,s.K2)(V),(0,s.K2)(at),(0,s.K2)(Qt),(0,s.QD)("div",wt,[(0,s.QD)("div",Mt,[St,(0,s.QD)("span",xt,"$"+(0,g.WA)((i.value-o.value).toFixed(2)),1),Et,(0,s.QD)("span",Ft,"$"+(0,g.WA)((o.value<0?0:o.value).toFixed(2)),1)]),(0,s.QD)("div",Ot,[(0,s.QD)("button",{disabled:i.value-o.value<=0,onClick:c}," Pagar $"+(0,g.WA)((i.value-o.value).toFixed(2))+" en Propinas ",9,Lt)])])])])]))}});const It=(0,u.c)(jt,[["__scopeId","data-v-412bc981"]]);var Kt=It;const Rt=t=>((0,s.ED)("data-v-a668af68"),t=t(),(0,s.ii)(),t),Nt={class:"master-container"},$t={class:"list-container"},Vt=Rt((()=>(0,s.QD)("div",{class:"orderby-container"},[(0,s.QD)("span",{class:"title"},"Historial de pagos")],-1))),Ht={class:"items-list"},qt={class:"controls"};var Bt=(0,s._M)({__name:"HistoryView",setup(t){const e=_t(),n=e.base_url,a=(0,H.IL)([]);async function i(){const t=await fetch(n+"/payment"),e=t.ok;if(e)a.value=await t.json();else{const e=t.statusText;alert(e)}}return(0,s.u2)((()=>{i()})),(t,e)=>{const n=(0,s.E1)("fai");return(0,s.Wz)(),(0,s.An)("div",Nt,[(0,s.QD)("div",$t,[Vt,(0,s.QD)("ul",Ht,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(a.value,((t,e)=>((0,s.Wz)(),(0,s.Az)(ut,{item:t,key:e,shadow:!1,cancelable:!1},null,8,["item"])))),128))]),(0,s.QD)("div",qt,[(0,s.QD)("button",{class:"reload",onClick:i},[(0,s.K2)(n,{icon:"fa-solid fa-arrow-rotate-left"})])])])])}}});const Yt=(0,u.c)(Bt,[["__scopeId","data-v-a668af68"]]);var Gt=Yt;const Jt=[{path:"/",name:"home",component:Kt},{path:"/history",name:"history",component:Gt}],Ut=(0,y.gv)({history:(0,y.oz)(),routes:Jt});var Xt=Ut,Zt=n(973),te=n(4256),ee=n(3572);Zt.IL.add(ee.YR6,ee.EPR,ee.a0d,ee.wHs,ee.Giz),Zt.IL.add(ee.e2O,ee.W6v);const ne=(0,a.W0)(h),ae=(0,i.Kw)();ne.component("fai",te.us),ne.use(ae),ne.use(Xt),ne.mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],s=t[u][2];for(var l=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[r])}))?a.splice(r--,1):(l=!1,s<o&&(o=s));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,o=a[0],l=a[1],r=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(r)var u=r(n)}for(e&&e(a);c<o.length;c++)s=o[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[999],(function(){return n(7340)}));a=n.O(a)})();
//# sourceMappingURL=app.cf19d6c7.js.map