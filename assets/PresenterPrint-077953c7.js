import{d,i as _,a as p,u,b as h,c as m,e as f,f as n,g as t,t as a,h as o,F as g,r as v,n as x,j as b,o as r,k as y,l as k,m as w,p as N,q as P,_ as S}from"./index-596cc781.js";import{N as V}from"./NoteDisplay-cb00541b.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>b.slice(0,-1).map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(r(),n("div",{id:"page-root",style:x(o(P))},[t("div",j,[t("div",L,[t("h1",T,a(o(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(o(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(o(y)),1),k(" "+a(e==null?void 0:e.title)+" ",1),z])]),w(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<o(i).length-1?(r(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
