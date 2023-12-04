(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Wt(e,t){const s=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return t?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const je=Object.freeze({}),Is=Object.freeze([]),_n=()=>{},Iu=()=>!1,pm=/^on[^a-z]/,qo=e=>pm.test(e),Al=e=>e.startsWith("onUpdate:"),He=Object.assign,si=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},um=Object.prototype.hasOwnProperty,Ce=(e,t)=>um.call(e,t),ae=Array.isArray,us=e=>Vo(e)==="[object Map]",Pu=e=>Vo(e)==="[object Set]",dm=e=>Vo(e)==="[object RegExp]",ue=e=>typeof e=="function",qe=e=>typeof e=="string",oi=e=>typeof e=="symbol",Te=e=>e!==null&&typeof e=="object",li=e=>Te(e)&&ue(e.then)&&ue(e.catch),Ru=Object.prototype.toString,Vo=e=>Ru.call(e),ri=e=>Vo(e).slice(8,-1),Lu=e=>Vo(e)==="[object Object]",ai=e=>qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hl=Wt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fm=Wt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ql=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Fm=/-(\w)/g,rt=Ql(e=>e.replace(Fm,(t,s)=>s?s.toUpperCase():"")),mm=/\B([A-Z])/g,vt=Ql(e=>e.replace(mm,"-$1").toLowerCase()),gs=Ql(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qt=Ql(e=>e?`on${gs(e)}`:""),ko=(e,t)=>!Object.is(e,t),ns=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Sl=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},hm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ym=e=>{const t=qe(e)?Number(e):NaN;return isNaN(t)?e:t};let rc;const El=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++){const o=e[s],l=qe(o)?wm(o):tn(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(qe(e))return e;if(Te(e))return e}}const gm=/;(?![^(]*\))/g,vm=/:([^]+)/,_m=/\/\*[^]*?\*\//g;function wm(e){const t={};return e.replace(_m,"").split(gm).forEach(s=>{if(s){const o=s.split(vm);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ue(e){let t="";if(qe(e))t=e;else if(ae(e))for(let s=0;s<e.length;s++){const o=Ue(e[s]);o&&(t+=o+" ")}else if(Te(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function se(e){if(!e)return null;let{class:t,style:s}=e;return t&&!qe(t)&&(e.class=Ue(t)),s&&(e.style=tn(s)),e}const bm="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",xm="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Mu=Wt(bm),Cm=Wt(xm),km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Am=Wt(km);function Du(e){return!!e||e===""}const _t=e=>qe(e)?e:e==null?"":ae(e)||Te(e)&&(e.toString===Ru||!ue(e.toString))?JSON.stringify(e,Bu,2):String(e),Bu=(e,t)=>t&&t.__v_isRef?Bu(e,t.value):us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Pu(t)?{[`Set(${t.size})`]:[...t.values()]}:Te(t)&&!ae(t)&&!Lu(t)?String(t):t;function $l(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let Sn;class ju{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Sn,!t&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=Sn;try{return Sn=this,t()}finally{Sn=s}}else $l("cannot run an inactive effect scope.")}on(){Sn=this}off(){Sn=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Sm(e){return new ju(e)}function Em(e,t=Sn){t&&t.active&&t.effects.push(e)}function er(){return Sn}function ii(e){Sn?Sn.cleanups.push(e):$l("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ci=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Nu=e=>(e.w&qt)>0,Hu=e=>(e.n&qt)>0,$m=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},Om=e=>{const{deps:t}=e;if(t.length){let s=0;for(let o=0;o<t.length;o++){const l=t[o];Nu(l)&&!Hu(l)?l.delete(e):t[s++]=l,l.w&=~qt,l.n&=~qt}t.length=s}},Ol=new WeakMap;let oo=0,qt=1;const ta=30;let Fn;const ds=Symbol("iterate"),sa=Symbol("Map key iterate");class pi{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Em(this,o)}run(){if(!this.active)return this.fn();let t=Fn,s=Rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fn,Fn=this,Rt=!0,qt=1<<++oo,oo<=ta?$m(this):ac(this),this.fn()}finally{oo<=ta&&Om(this),qt=1<<--oo,Fn=this.parent,Rt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fn===this?this.deferStop=!0:this.active&&(ac(this),this.onStop&&this.onStop(),this.active=!1)}}function ac(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let Rt=!0;const qu=[];function _s(){qu.push(Rt),Rt=!1}function ws(){const e=qu.pop();Rt=e===void 0?!0:e}function an(e,t,s){if(Rt&&Fn){let o=Ol.get(e);o||Ol.set(e,o=new Map);let l=o.get(s);l||o.set(s,l=ci()),Vu(l,{effect:Fn,target:e,type:t,key:s})}}function Vu(e,t){let s=!1;oo<=ta?Hu(e)||(e.n|=qt,s=!Nu(e)):s=!e.has(Fn),s&&(e.add(Fn),Fn.deps.push(e),Fn.onTrack&&Fn.onTrack(He({effect:Fn},t)))}function at(e,t,s,o,l,r){const a=Ol.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(s==="length"&&ae(e)){const p=Number(o);a.forEach((d,f)=>{(f==="length"||f>=p)&&i.push(d)})}else switch(s!==void 0&&i.push(a.get(s)),t){case"add":ae(e)?ai(s)&&i.push(a.get("length")):(i.push(a.get(ds)),us(e)&&i.push(a.get(sa)));break;case"delete":ae(e)||(i.push(a.get(ds)),us(e)&&i.push(a.get(sa)));break;case"set":us(e)&&i.push(a.get(ds));break}const c={target:e,type:t,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&oa(i[0],c);else{const p=[];for(const d of i)d&&p.push(...d);oa(ci(p),c)}}function oa(e,t){const s=ae(e)?e:[...e];for(const o of s)o.computed&&ic(o,t);for(const o of s)o.computed||ic(o,t)}function ic(e,t){(e!==Fn||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(He({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Tm(e,t){var s;return(s=Ol.get(e))==null?void 0:s.get(t)}const Im=Wt("__proto__,__v_isRef,__isVue"),Uu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(oi)),Pm=nr(),Rm=nr(!1,!0),Lm=nr(!0),Mm=nr(!0,!0),cc=Dm();function Dm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const o=Fe(this);for(let r=0,a=this.length;r<a;r++)an(o,"get",r+"");const l=o[t](...s);return l===-1||l===!1?o[t](...s.map(Fe)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){_s();const o=Fe(this)[t].apply(this,s);return ws(),o}}),e}function Bm(e){const t=Fe(this);return an(t,"has",e),t.hasOwnProperty(e)}function nr(e=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(e?t?Zu:Ju:t?Gu:Yu).get(o))return o;const a=ae(o);if(!e){if(a&&Ce(cc,l))return Reflect.get(cc,l,r);if(l==="hasOwnProperty")return Bm}const i=Reflect.get(o,l,r);return(oi(l)?Uu.has(l):Im(l))||(e||an(o,"get",l),t)?i:Ee(i)?a&&ai(l)?i:i.value:Te(i)?e?Xn(i):Ve(i):i}}const jm=Wu(),Nm=Wu(!0);function Wu(e=!1){return function(s,o,l,r){let a=s[o];if(Vt(a)&&Ee(a)&&!Ee(l))return!1;if(!e&&(!Tl(l)&&!Vt(l)&&(a=Fe(a),l=Fe(l)),!ae(s)&&Ee(a)&&!Ee(l)))return a.value=l,!0;const i=ae(s)&&ai(o)?Number(o)<s.length:Ce(s,o),c=Reflect.set(s,o,l,r);return s===Fe(r)&&(i?ko(l,a)&&at(s,"set",o,l,a):at(s,"add",o,l)),c}}function Hm(e,t){const s=Ce(e,t),o=e[t],l=Reflect.deleteProperty(e,t);return l&&s&&at(e,"delete",t,void 0,o),l}function qm(e,t){const s=Reflect.has(e,t);return(!oi(t)||!Uu.has(t))&&an(e,"has",t),s}function Vm(e){return an(e,"iterate",ae(e)?"length":ds),Reflect.ownKeys(e)}const zu={get:Pm,set:jm,deleteProperty:Hm,has:qm,ownKeys:Vm},Xu={get:Lm,set(e,t){return $l(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return $l(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Um=He({},zu,{get:Rm,set:Nm}),Wm=He({},Xu,{get:Mm}),ui=e=>e,tr=e=>Reflect.getPrototypeOf(e);function Zo(e,t,s=!1,o=!1){e=e.__v_raw;const l=Fe(e),r=Fe(t);s||(t!==r&&an(l,"get",t),an(l,"get",r));const{has:a}=tr(l),i=o?ui:s?di:Ao;if(a.call(l,t))return i(e.get(t));if(a.call(l,r))return i(e.get(r));e!==l&&e.get(t)}function Qo(e,t=!1){const s=this.__v_raw,o=Fe(s),l=Fe(e);return t||(e!==l&&an(o,"has",e),an(o,"has",l)),e===l?s.has(e):s.has(e)||s.has(l)}function el(e,t=!1){return e=e.__v_raw,!t&&an(Fe(e),"iterate",ds),Reflect.get(e,"size",e)}function pc(e){e=Fe(e);const t=Fe(this);return tr(t).has.call(t,e)||(t.add(e),at(t,"add",e,e)),this}function uc(e,t){t=Fe(t);const s=Fe(this),{has:o,get:l}=tr(s);let r=o.call(s,e);r?Ku(s,o,e):(e=Fe(e),r=o.call(s,e));const a=l.call(s,e);return s.set(e,t),r?ko(t,a)&&at(s,"set",e,t,a):at(s,"add",e,t),this}function dc(e){const t=Fe(this),{has:s,get:o}=tr(t);let l=s.call(t,e);l?Ku(t,s,e):(e=Fe(e),l=s.call(t,e));const r=o?o.call(t,e):void 0,a=t.delete(e);return l&&at(t,"delete",e,void 0,r),a}function fc(){const e=Fe(this),t=e.size!==0,s=us(e)?new Map(e):new Set(e),o=e.clear();return t&&at(e,"clear",void 0,void 0,s),o}function nl(e,t){return function(o,l){const r=this,a=r.__v_raw,i=Fe(a),c=t?ui:e?di:Ao;return!e&&an(i,"iterate",ds),a.forEach((p,d)=>o.call(l,c(p),c(d),r))}}function tl(e,t,s){return function(...o){const l=this.__v_raw,r=Fe(l),a=us(r),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=l[e](...o),d=s?ui:t?di:Ao;return!t&&an(r,"iterate",c?sa:ds),{next(){const{value:f,done:F}=p.next();return F?{value:f,done:F}:{value:i?[d(f[0]),d(f[1])]:d(f),done:F}},[Symbol.iterator](){return this}}}}function kt(e){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${gs(e)} operation ${s}failed: target is readonly.`,Fe(this))}return e==="delete"?!1:this}}function zm(){const e={get(r){return Zo(this,r)},get size(){return el(this)},has:Qo,add:pc,set:uc,delete:dc,clear:fc,forEach:nl(!1,!1)},t={get(r){return Zo(this,r,!1,!0)},get size(){return el(this)},has:Qo,add:pc,set:uc,delete:dc,clear:fc,forEach:nl(!1,!0)},s={get(r){return Zo(this,r,!0)},get size(){return el(this,!0)},has(r){return Qo.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:nl(!0,!1)},o={get(r){return Zo(this,r,!0,!0)},get size(){return el(this,!0)},has(r){return Qo.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:nl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=tl(r,!1,!1),s[r]=tl(r,!0,!1),t[r]=tl(r,!1,!0),o[r]=tl(r,!0,!0)}),[e,s,t,o]}const[Xm,Km,Ym,Gm]=zm();function sr(e,t){const s=t?e?Gm:Ym:e?Km:Xm;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(Ce(s,l)&&l in o?s:o,l,r)}const Jm={get:sr(!1,!1)},Zm={get:sr(!1,!0)},Qm={get:sr(!0,!1)},eh={get:sr(!0,!0)};function Ku(e,t,s){const o=Fe(s);if(o!==s&&t.call(e,o)){const l=ri(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Yu=new WeakMap,Gu=new WeakMap,Ju=new WeakMap,Zu=new WeakMap;function nh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function th(e){return e.__v_skip||!Object.isExtensible(e)?0:nh(ri(e))}function Ve(e){return Vt(e)?e:or(e,!1,zu,Jm,Yu)}function sh(e){return or(e,!1,Um,Zm,Gu)}function Xn(e){return or(e,!0,Xu,Qm,Ju)}function lo(e){return or(e,!0,Wm,eh,Zu)}function or(e,t,s,o,l){if(!Te(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const a=th(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return l.set(e,i),i}function fs(e){return Vt(e)?fs(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function Tl(e){return!!(e&&e.__v_isShallow)}function Il(e){return fs(e)||Vt(e)}function Fe(e){const t=e&&e.__v_raw;return t?Fe(t):e}function lr(e){return Sl(e,"__v_skip",!0),e}const Ao=e=>Te(e)?Ve(e):e,di=e=>Te(e)?Xn(e):e;function fi(e){Rt&&Fn&&(e=Fe(e),Vu(e.dep||(e.dep=ci()),{target:e,type:"get",key:"value"}))}function Fi(e,t){e=Fe(e);const s=e.dep;s&&oa(s,{target:e,type:"set",key:"value",newValue:t})}function Ee(e){return!!(e&&e.__v_isRef===!0)}function K(e){return Qu(e,!1)}function it(e){return Qu(e,!0)}function Qu(e,t){return Ee(e)?e:new oh(e,t)}class oh{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:Fe(t),this._value=s?t:Ao(t)}get value(){return fi(this),this._value}set value(t){const s=this.__v_isShallow||Tl(t)||Vt(t);t=s?t:Fe(t),ko(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Ao(t),Fi(this,t))}}function I(e){return Ee(e)?e.value:e}const lh={get:(e,t,s)=>I(Reflect.get(e,t,s)),set:(e,t,s,o)=>{const l=e[t];return Ee(l)&&!Ee(s)?(l.value=s,!0):Reflect.set(e,t,s,o)}};function ed(e){return fs(e)?e:new Proxy(e,lh)}class rh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>fi(this),()=>Fi(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function mi(e){return new rh(e)}function ah(e){Il(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ae(e)?new Array(e.length):{};for(const s in e)t[s]=nd(e,s);return t}class ih{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Tm(Fe(this._object),this._key)}}class ch{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ph(e,t,s){return Ee(e)?e:ue(e)?new ch(e):Te(e)&&arguments.length>1?nd(e,t,s):K(e)}function nd(e,t,s){const o=e[t];return Ee(o)?o:new ih(e,t,s)}class uh{constructor(t,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pi(t,()=>{this._dirty||(this._dirty=!0,Fi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=Fe(this);return fi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function dh(e,t,s=!1){let o,l;const r=ue(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const a=new uh(o,l,r||!l,s);return t&&!s&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const Fs=[];function yl(e){Fs.push(e)}function gl(){Fs.pop()}function q(e,...t){_s();const s=Fs.length?Fs[Fs.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=fh();if(o)gt(o,s,11,[e+t.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${mr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...t];l.length&&r.push(`
`,...Fh(l)),console.warn(...r)}ws()}function fh(){let e=Fs[Fs.length-1];if(!e)return[];const t=[];for(;e;){const s=t[0];s&&s.vnode===e?s.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function Fh(e){const t=[];return e.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...mh(s))}),t}function mh({vnode:e,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${mr(e.component,e.type,o)}`,r=">"+s;return e.props?[l,...hh(e.props),r]:[l+r]}function hh(e){const t=[],s=Object.keys(e);return s.slice(0,3).forEach(o=>{t.push(...td(o,e[o]))}),s.length>3&&t.push(" ..."),t}function td(e,t,s){return qe(t)?(t=JSON.stringify(t),s?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${e}=${t}`]:Ee(t)?(t=td(e,Fe(t.value),!0),s?t:[`${e}=Ref<`,t,">"]):ue(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Fe(t),s?t:[`${e}=`,t])}function yh(e,t){e!==void 0&&(typeof e!="number"?q(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&q(`${t} is NaN - the duration expression might be incorrect.`))}const hi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gt(e,t,s,o){let l;try{l=o?e(...o):e()}catch(r){rr(r,t,s)}return l}function jn(e,t,s,o){if(ue(e)){const r=gt(e,t,s,o);return r&&li(r)&&r.catch(a=>{rr(a,t,s)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(jn(e[r],t,s,o));return l}function rr(e,t,s,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,i=hi[s];for(;r;){const p=r.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,a,i)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){gt(c,null,10,[e,a,i]);return}}gh(e,s,l,o)}function gh(e,t,s,o=!0){{const l=hi[t];if(s&&yl(s),q(`Unhandled error${l?` during execution of ${l}`:""}`),s&&gl(),o)throw e;console.error(e)}}let So=!1,la=!1;const ln=[];let nt=0;const Ps=[];let et=null,$t=0;const sd=Promise.resolve();let yi=null;const vh=100;function nn(e){const t=yi||sd;return e?t.then(this?e.bind(this):e):t}function _h(e){let t=nt+1,s=ln.length;for(;t<s;){const o=t+s>>>1;Eo(ln[o])<e?t=o+1:s=o}return t}function ar(e){(!ln.length||!ln.includes(e,So&&e.allowRecurse?nt+1:nt))&&(e.id==null?ln.push(e):ln.splice(_h(e.id),0,e),od())}function od(){!So&&!la&&(la=!0,yi=sd.then(ad))}function wh(e){const t=ln.indexOf(e);t>nt&&ln.splice(t,1)}function ld(e){ae(e)?Ps.push(...e):(!et||!et.includes(e,e.allowRecurse?$t+1:$t))&&Ps.push(e),od()}function Fc(e,t=So?nt+1:0){for(e=e||new Map;t<ln.length;t++){const s=ln[t];if(s&&s.pre){if(gi(e,s))continue;ln.splice(t,1),t--,s()}}}function rd(e){if(Ps.length){const t=[...new Set(Ps)];if(Ps.length=0,et){et.push(...t);return}for(et=t,e=e||new Map,et.sort((s,o)=>Eo(s)-Eo(o)),$t=0;$t<et.length;$t++)gi(e,et[$t])||et[$t]();et=null,$t=0}}const Eo=e=>e.id==null?1/0:e.id,bh=(e,t)=>{const s=Eo(e)-Eo(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function ad(e){la=!1,So=!0,e=e||new Map,ln.sort(bh);const t=s=>gi(e,s);try{for(nt=0;nt<ln.length;nt++){const s=ln[nt];if(s&&s.active!==!1){if(t(s))continue;gt(s,null,14)}}}finally{nt=0,ln.length=0,rd(e),So=!1,yi=null,(ln.length||Ps.length)&&ad(e)}}function gi(e,t){if(!e.has(t))e.set(t,1);else{const s=e.get(t);if(s>vh){const o=t.ownerInstance,l=o&&To(o.type);return q(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,s+1)}}let Lt=!1;const Os=new Set;El().__VUE_HMR_RUNTIME__={createRecord:Cr(id),rerender:Cr(kh),reload:Cr(Ah)};const vs=new Map;function xh(e){const t=e.type.__hmrId;let s=vs.get(t);s||(id(t,e.type),s=vs.get(t)),s.instances.add(e)}function Ch(e){vs.get(e.type.__hmrId).instances.delete(e)}function id(e,t){return vs.has(e)?!1:(vs.set(e,{initialDef:uo(t),instances:new Set}),!0)}function uo(e){return Nd(e)?e.__vccOpts:e}function kh(e,t){const s=vs.get(e);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,uo(o.type).render=t),o.renderCache=[],Lt=!0,o.update(),Lt=!1}))}function Ah(e,t){const s=vs.get(e);if(!s)return;t=uo(t),mc(s.initialDef,t);const o=[...s.instances];for(const l of o){const r=uo(l.type);Os.has(r)||(r!==s.initialDef&&mc(r,t),Os.add(r)),l.appContext.propsCache.delete(l.type),l.appContext.emitsCache.delete(l.type),l.appContext.optionsCache.delete(l.type),l.ceReload?(Os.add(r),l.ceReload(t.styles),Os.delete(r)):l.parent?ar(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}ld(()=>{for(const l of o)Os.delete(uo(l.type))})}function mc(e,t){He(e,t);for(const s in e)s!=="__file"&&!(s in t)&&delete e[s]}function Cr(e){return(t,s)=>{try{return e(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let tt,ro=[],ra=!1;function Uo(e,...t){tt?tt.emit(e,...t):ra||ro.push({event:e,args:t})}function cd(e,t){var s,o;tt=e,tt?(tt.enabled=!0,ro.forEach(({event:l,args:r})=>tt.emit(l,...r)),ro=[]):typeof window<"u"&&window.HTMLElement&&!((o=(s=window.navigator)==null?void 0:s.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{cd(r,t)}),setTimeout(()=>{tt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ra=!0,ro=[])},3e3)):(ra=!0,ro=[])}function Sh(e,t){Uo("app:init",e,t,{Fragment:$e,Text:zo,Comment:mn,Static:fo})}function Eh(e){Uo("app:unmount",e)}const aa=vi("component:added"),pd=vi("component:updated"),$h=vi("component:removed"),Oh=e=>{tt&&typeof tt.cleanupBuffer=="function"&&!tt.cleanupBuffer(e)&&$h(e)};function vi(e){return t=>{Uo(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Th=ud("perf:start"),Ih=ud("perf:end");function ud(e){return(t,s,o)=>{Uo(e,t.appContext.app,t.uid,t,s,o)}}function Ph(e,t,s){Uo("component:emit",e.appContext.app,e,t,s)}function Rh(e,t,...s){if(e.isUnmounted)return;const o=e.vnode.props||je;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(t in d))(!f||!(Qt(t)in f))&&q(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qt(t)}" prop.`);else{const F=d[t];ue(F)&&(F(...s)||q(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=s;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:F}=o[d]||je;F&&(l=s.map(m=>qe(m)?m.trim():m)),f&&(l=s.map(hm))}Ph(e,t,l);{const d=t.toLowerCase();d!==t&&o[Qt(d)]&&q(`Event "${d}" is emitted in component ${mr(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${vt(t)}" instead of "${t}".`)}let i,c=o[i=Qt(t)]||o[i=Qt(rt(t))];!c&&r&&(c=o[i=Qt(vt(t))]),c&&jn(c,e,6,l);const p=o[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,jn(p,e,6,l)}}function dd(e,t,s=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let a={},i=!1;if(!ue(e)){const c=p=>{const d=dd(p,t,!0);d&&(i=!0,He(a,d))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(Te(e)&&o.set(e,null),null):(ae(r)?r.forEach(c=>a[c]=null):He(a,r),Te(e)&&o.set(e,a),a)}function ir(e,t){return!e||!qo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ce(e,t[0].toLowerCase()+t.slice(1))||Ce(e,vt(t))||Ce(e,t))}let Ze=null,cr=null;function Pl(e){const t=Ze;return Ze=e,cr=e&&e.type.__scopeId||null,t}function uT(e){cr=e}function dT(){cr=null}function E(e,t=Ze,s){if(!t||e._n)return e;const o=(...l)=>{o._d&&Oc(-1);const r=Pl(t);let a;try{a=e(...l)}finally{Pl(r),o._d&&Oc(1)}return pd(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let ia=!1;function Rl(){ia=!0}function kr(e){const{type:t,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:p,render:d,renderCache:f,data:F,setupState:m,ctx:h,inheritAttrs:_}=e;let b,w;const x=Pl(e);ia=!1;try{if(s.shapeFlag&4){const k=l||o;b=zn(d.call(k,k,f,r,m,F,h)),w=c}else{const k=t;c===r&&Rl(),b=zn(k.length>1?k(r,{get attrs(){return Rl(),c},slots:i,emit:p}):k(r,null)),w=t.props?c:Mh(c)}}catch(k){Fo.length=0,rr(k,e,1),b=L(mn)}let g=b,S;if(b.patchFlag>0&&b.patchFlag&2048&&([g,S]=Lh(b)),w&&_!==!1){const k=Object.keys(w),{shapeFlag:$}=g;if(k.length){if($&7)a&&k.some(Al)&&(w=Dh(w,a)),g=pt(g,w);else if(!ia&&g.type!==mn){const B=Object.keys(c),T=[],U=[];for(let oe=0,pe=B.length;oe<pe;oe++){const Y=B[oe];qo(Y)?Al(Y)||T.push(Y[2].toLowerCase()+Y.slice(3)):U.push(Y)}U.length&&q(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),T.length&&q(`Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(hc(g)||q("Runtime directive used on component with non-element root node. The directives will not function as intended."),g=pt(g),g.dirs=g.dirs?g.dirs.concat(s.dirs):s.dirs),s.transition&&(hc(g)||q("Component inside <Transition> renders non-element root node that cannot be animated."),g.transition=s.transition),S?S(g):b=g,Pl(x),b}const Lh=e=>{const t=e.children,s=e.dynamicChildren,o=fd(t);if(!o)return[e,void 0];const l=t.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{t[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[zn(o),a]};function fd(e){let t;for(let s=0;s<e.length;s++){const o=e[s];if(ct(o)){if(o.type!==mn||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Mh=e=>{let t;for(const s in e)(s==="class"||s==="style"||qo(s))&&((t||(t={}))[s]=e[s]);return t},Dh=(e,t)=>{const s={};for(const o in e)(!Al(o)||!(o.slice(9)in t))&&(s[o]=e[o]);return s},hc=e=>e.shapeFlag&7||e.type===mn;function Bh(e,t,s){const{props:o,children:l,component:r}=e,{props:a,children:i,patchFlag:c}=t,p=r.emitsOptions;if((l||i)&&Lt||t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?yc(o,a,p):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const F=d[f];if(a[F]!==o[F]&&!ir(p,F))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?yc(o,a,p):!0:!!a;return!1}function yc(e,t,s){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==e[r]&&!ir(s,r))return!0}return!1}function jh({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const Fd=e=>e.__isSuspense;function Nh(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):ld(e)}function bs(e,t){return _i(e,null,t)}const sl={};function he(e,t,s){return ue(t)||q("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),_i(e,t,s)}function _i(e,t,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=je){var i;t||(s!==void 0&&q('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&q('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=k=>{q("Invalid watch source: ",k,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=er()===((i=Je)==null?void 0:i.scope)?Je:null;let d,f=!1,F=!1;if(Ee(e)?(d=()=>e.value,f=Tl(e)):fs(e)?(d=()=>e,o=!0):ae(e)?(F=!0,f=e.some(k=>fs(k)||Tl(k)),d=()=>e.map(k=>{if(Ee(k))return k.value;if(fs(k))return is(k);if(ue(k))return gt(k,p,2);c(k)})):ue(e)?t?d=()=>gt(e,p,2):d=()=>{if(!(p&&p.isUnmounted))return m&&m(),jn(e,p,3,[h])}:(d=_n,c(e)),t&&o){const k=d;d=()=>is(k())}let m,h=k=>{m=g.onStop=()=>{gt(k,p,4)}},_;if(Oo)if(h=_n,t?s&&jn(t,p,3,[d(),F?[]:void 0,h]):d(),l==="sync"){const k=Yy();_=k.__watcherHandles||(k.__watcherHandles=[])}else return _n;let b=F?new Array(e.length).fill(sl):sl;const w=()=>{if(g.active)if(t){const k=g.run();(o||f||(F?k.some(($,B)=>ko($,b[B])):ko(k,b)))&&(m&&m(),jn(t,p,3,[k,b===sl?void 0:F&&b[0]===sl?[]:b,h]),b=k)}else g.run()};w.allowRecurse=!!t;let x;l==="sync"?x=w:l==="post"?x=()=>en(w,p&&p.suspense):(w.pre=!0,p&&(w.id=p.uid),x=()=>ar(w));const g=new pi(d,x);g.onTrack=r,g.onTrigger=a,t?s?w():b=g.run():l==="post"?en(g.run.bind(g),p&&p.suspense):g.run();const S=()=>{g.stop(),p&&p.scope&&si(p.scope.effects,g)};return _&&_.push(S),S}function Hh(e,t,s){const o=this.proxy,l=qe(e)?e.includes(".")?md(o,e):()=>o[e]:e.bind(o,o);let r;ue(t)?r=t:(r=t.handler,s=t);const a=Je;Ds(this);const i=_i(l,r.bind(o),s);return a?Ds(a):hs(),i}function md(e,t){const s=t.split(".");return()=>{let o=e;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function is(e,t){if(!Te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))is(e.value,t);else if(ae(e))for(let s=0;s<e.length;s++)is(e[s],t);else if(Pu(e)||us(e))e.forEach(s=>{is(s,t)});else if(Lu(e))for(const s in e)is(e[s],t);return e}function hd(e){fm(e)&&q("Do not use built-in directive ids as custom directive id: "+e)}function wi(e,t){const s=Ze;if(s===null)return q("withDirectives can only be used inside render functions."),e;const o=Fr(s)||s.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[a,i,c,p=je]=t[r];a&&(ue(a)&&(a={mounted:a,updated:a}),a.deep&&is(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:p}))}return e}function Kt(e,t,s,o){const l=e.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(_s(),jn(c,s,8,[e.el,i,e,t]),ws())}}function qh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ct(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const Rn=[Function,Array],Vh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rn,onEnter:Rn,onAfterEnter:Rn,onEnterCancelled:Rn,onBeforeLeave:Rn,onLeave:Rn,onAfterLeave:Rn,onLeaveCancelled:Rn,onBeforeAppear:Rn,onAppear:Rn,onAfterAppear:Rn,onAppearCancelled:Rn};function Uh(e,t){const{leavingVNodes:s}=e;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function ca(e,t,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:F,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:_,onAppear:b,onAfterAppear:w,onAppearCancelled:x}=t,g=String(e.key),S=Uh(s,e),k=(T,U)=>{T&&jn(T,o,9,U)},$=(T,U)=>{const oe=U[1];k(T,U),ae(T)?T.every(pe=>pe.length<=1)&&oe():T.length<=1&&oe()},B={mode:r,persisted:a,beforeEnter(T){let U=i;if(!s.isMounted)if(l)U=_||i;else return;T._leaveCb&&T._leaveCb(!0);const oe=S[g];oe&&ts(e,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),k(U,[T])},enter(T){let U=c,oe=p,pe=d;if(!s.isMounted)if(l)U=b||c,oe=w||p,pe=x||d;else return;let Y=!1;const me=T._enterCb=ye=>{Y||(Y=!0,ye?k(pe,[T]):k(oe,[T]),B.delayedLeave&&B.delayedLeave(),T._enterCb=void 0)};U?$(U,[T,me]):me()},leave(T,U){const oe=String(e.key);if(T._enterCb&&T._enterCb(!0),s.isUnmounting)return U();k(f,[T]);let pe=!1;const Y=T._leaveCb=me=>{pe||(pe=!0,U(),me?k(h,[T]):k(m,[T]),T._leaveCb=void 0,S[oe]===e&&delete S[oe])};S[oe]=e,F?$(F,[T,Y]):Y()},clone(T){return ca(T,t,s,o)}};return B}function Ll(e,t){e.shapeFlag&6&&e.component?Ll(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function yd(e,t=!1,s){let o=[],l=0;for(let r=0;r<e.length;r++){let a=e[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===$e?(a.patchFlag&128&&l++,o=o.concat(yd(a.children,t,i))):(t||a.type!==mn)&&o.push(i!=null?pt(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Oe(e,t){return ue(e)?(()=>He({name:e.name},t,{setup:e}))():e}const Rs=e=>!!e.type.__asyncLoader,bi=e=>e.type.__isKeepAlive,Wh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=bn(),o=s.ctx;if(!o.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:p,um:d,o:{createElement:f}}}=o,F=f("div");o.activate=(x,g,S,k,$)=>{const B=x.component;p(x,g,S,0,i),c(B.vnode,x,g,S,B,i,k,x.slotScopeIds,$),en(()=>{B.isDeactivated=!1,B.a&&ns(B.a);const T=x.props&&x.props.onVnodeMounted;T&&Ln(T,B.parent,x)},i),aa(B)},o.deactivate=x=>{const g=x.component;p(x,F,null,1,i),en(()=>{g.da&&ns(g.da);const S=x.props&&x.props.onVnodeUnmounted;S&&Ln(S,g.parent,x),g.isDeactivated=!0},i),aa(g)};function m(x){Ar(x),d(x,s,i,!0)}function h(x){l.forEach((g,S)=>{const k=To(g.type);k&&(!x||!x(k))&&_(S)})}function _(x){const g=l.get(x);!a||!ts(g,a)?m(g):a&&Ar(a),l.delete(x),r.delete(x)}he(()=>[e.include,e.exclude],([x,g])=>{x&&h(S=>ao(x,S)),g&&h(S=>!ao(g,S))},{flush:"post",deep:!0});let b=null;const w=()=>{b!=null&&l.set(b,Sr(s.subTree))};return Ct(w),ur(w),Wo(()=>{l.forEach(x=>{const{subTree:g,suspense:S}=s,k=Sr(g);if(x.type===k.type&&x.key===k.key){Ar(k);const $=k.component.da;$&&en($,S);return}m(x)})}),()=>{if(b=null,!t.default)return null;const x=t.default(),g=x[0];if(x.length>1)return q("KeepAlive should contain exactly one component child."),a=null,x;if(!ct(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return a=null,g;let S=Sr(g);const k=S.type,$=To(Rs(S)?S.type.__asyncResolved||{}:k),{include:B,exclude:T,max:U}=e;if(B&&(!$||!ao(B,$))||T&&$&&ao(T,$))return a=S,g;const oe=S.key==null?k:S.key,pe=l.get(oe);return S.el&&(S=pt(S),g.shapeFlag&128&&(g.ssContent=S)),b=oe,pe?(S.el=pe.el,S.component=pe.component,S.transition&&Ll(S,S.transition),S.shapeFlag|=512,r.delete(oe),r.add(oe)):(r.add(oe),U&&r.size>parseInt(U,10)&&_(r.values().next().value)),S.shapeFlag|=256,a=S,Fd(g.type)?g:S}}},gd=Wh;function ao(e,t){return ae(e)?e.some(s=>ao(s,t)):qe(e)?e.split(",").includes(t):dm(e)?e.test(t):!1}function vd(e,t){wd(e,"a",t)}function _d(e,t){wd(e,"da",t)}function wd(e,t,s=Je){const o=e.__wdc||(e.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(pr(t,o,s),s){let l=s.parent;for(;l&&l.parent;)bi(l.parent.vnode)&&zh(o,t,s,l),l=l.parent}}function zh(e,t,s,o){const l=pr(t,e,o,!0);dr(()=>{si(o[t],l)},s)}function Ar(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Sr(e){return e.shapeFlag&128?e.ssContent:e}function pr(e,t,s=Je,o=!1){if(s){const l=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(s.isUnmounted)return;_s(),Ds(s);const i=jn(t,s,e,a);return hs(),ws(),i});return o?l.unshift(r):l.push(r),r}else{const l=Qt(hi[e].replace(/ hook$/,""));q(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const xt=e=>(t,s=Je)=>(!Oo||e==="sp")&&pr(e,(...o)=>t(...o),s),Xh=xt("bm"),Ct=xt("m"),Kh=xt("bu"),ur=xt("u"),Wo=xt("bum"),dr=xt("um"),Yh=xt("sp"),Gh=xt("rtg"),Jh=xt("rtc");function Zh(e,t=Je){pr("ec",e,t)}const pa="components",Qh="directives";function Ml(e,t){return bd(pa,e,!0,t)||e}const ey=Symbol.for("v-ndc");function gc(e){return bd(Qh,e)}function bd(e,t,s=!0,o=!1){const l=Ze||Je;if(l){const r=l.type;if(e===pa){const i=To(r,!1);if(i&&(i===t||i===rt(t)||i===gs(rt(t))))return r}const a=vc(l[e]||r[e],t)||vc(l.appContext[e],t);if(!a&&o)return r;if(s&&!a){const i=e===pa?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";q(`Failed to resolve ${e.slice(0,-1)}: ${t}${i}`)}return a}else q(`resolve${gs(e.slice(0,-1))} can only be used in render() or setup().`)}function vc(e,t){return e&&(e[t]||e[rt(t)]||e[gs(rt(t))])}function Hs(e,t,s,o){let l;const r=s&&s[o];if(ae(e)||qe(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||q(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let a=0;a<e;a++)l[a]=t(a+1,a,void 0,r&&r[a])}else if(Te(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>t(a,i,void 0,r&&r[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const p=a[i];l[i]=t(e[p],p,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function cn(e,t,s={},o,l){if(Ze.isCE||Ze.parent&&Rs(Ze.parent)&&Ze.parent.isCE)return t!=="default"&&(s.name=t),L("slot",s,o&&o());let r=e[t];r&&r.length>1&&(q("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),C();const a=r&&xd(r(s)),i=j($e,{key:s.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function xd(e){return e.some(t=>ct(t)?!(t.type===mn||t.type===$e&&!xd(t.children)):!0)?e:null}const ua=e=>e?Dd(e)?Fr(e)||e.proxy:ua(e.parent):null,ms=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>lo(e.props),$attrs:e=>lo(e.attrs),$slots:e=>lo(e.slots),$refs:e=>lo(e.refs),$parent:e=>ua(e.parent),$root:e=>ua(e.root),$emit:e=>e.emit,$options:e=>Ci(e),$forceUpdate:e=>e.f||(e.f=()=>ar(e.update)),$nextTick:e=>e.n||(e.n=nn.bind(e.proxy)),$watch:e=>Hh.bind(e)}),xi=e=>e==="_"||e==="$",Er=(e,t)=>e!==je&&!e.__isScriptSetup&&Ce(e,t),Cd={get({_:e},t){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=e;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return l[t];case 4:return s[t];case 3:return r[t]}else{if(Er(o,t))return a[t]=1,o[t];if(l!==je&&Ce(l,t))return a[t]=2,l[t];if((p=e.propsOptions[0])&&Ce(p,t))return a[t]=3,r[t];if(s!==je&&Ce(s,t))return a[t]=4,s[t];da&&(a[t]=0)}}const d=ms[t];let f,F;if(d)return t==="$attrs"?(an(e,"get",t),Rl()):t==="$slots"&&an(e,"get",t),d(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(s!==je&&Ce(s,t))return a[t]=4,s[t];if(F=c.config.globalProperties,Ce(F,t))return F[t];Ze&&(!qe(t)||t.indexOf("__v")!==0)&&(l!==je&&xi(t[0])&&Ce(l,t)?q(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ze&&q(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,s){const{data:o,setupState:l,ctx:r}=e;return Er(l,t)?(l[t]=s,!0):l.__isScriptSetup&&Ce(l,t)?(q(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==je&&Ce(o,t)?(o[t]=s,!0):Ce(e.props,t)?(q(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(q(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:s}):r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||e!==je&&Ce(e,a)||Er(t,a)||(i=r[0])&&Ce(i,a)||Ce(o,a)||Ce(ms,a)||Ce(l.config.globalProperties,a)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Ce(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};Cd.ownKeys=e=>(q("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function ny(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ms).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>ms[s](e),set:_n})}),t}function ty(e){const{ctx:t,propsOptions:[s]}=e;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:_n})})}function sy(e){const{ctx:t,setupState:s}=e;Object.keys(Fe(s)).forEach(o=>{if(!s.__isScriptSetup){if(xi(o[0])){q(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:_n})}})}function oy(){return ly().slots}function ly(){const e=bn();return e||q("useContext() called without active instance."),e.setupContext||(e.setupContext=jd(e))}function _c(e){return ae(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}function ry(){const e=Object.create(null);return(t,s)=>{e[s]?q(`${t} property "${s}" is already defined in ${e[s]}.`):e[s]=t}}let da=!0;function ay(e){const t=Ci(e),s=e.proxy,o=e.ctx;da=!1,t.beforeCreate&&wc(t.beforeCreate,e,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:p,created:d,beforeMount:f,mounted:F,beforeUpdate:m,updated:h,activated:_,deactivated:b,beforeDestroy:w,beforeUnmount:x,destroyed:g,unmounted:S,render:k,renderTracked:$,renderTriggered:B,errorCaptured:T,serverPrefetch:U,expose:oe,inheritAttrs:pe,components:Y,directives:me,filters:ye}=t,we=ry();{const[ee]=e.propsOptions;if(ee)for(const ie in ee)we("Props",ie)}if(p&&iy(p,o,we),a)for(const ee in a){const ie=a[ee];ue(ie)?(Object.defineProperty(o,ee,{value:ie.bind(s),configurable:!0,enumerable:!0,writable:!0}),we("Methods",ee)):q(`Method "${ee}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(l){ue(l)||q("The data option must be a function. Plain object usage is no longer supported.");const ee=l.call(s,s);if(li(ee)&&q("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Te(ee))q("data() should return an object.");else{e.data=Ve(ee);for(const ie in ee)we("Data",ie),xi(ie[0])||Object.defineProperty(o,ie,{configurable:!0,enumerable:!0,get:()=>ee[ie],set:_n})}}if(da=!0,r)for(const ee in r){const ie=r[ee],xe=ue(ie)?ie.bind(s,s):ue(ie.get)?ie.get.bind(s,s):_n;xe===_n&&q(`Computed property "${ee}" has no getter.`);const Pe=!ue(ie)&&ue(ie.set)?ie.set.bind(s):()=>{q(`Write operation failed: computed property "${ee}" is readonly.`)},In=P({get:xe,set:Pe});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>In.value,set:on=>In.value=on}),we("Computed",ee)}if(i)for(const ee in i)kd(i[ee],o,s,ee);if(c){const ee=ue(c)?c.call(s):c;Reflect.ownKeys(ee).forEach(ie=>{En(ie,ee[ie])})}d&&wc(d,e,"c");function Me(ee,ie){ae(ie)?ie.forEach(xe=>ee(xe.bind(s))):ie&&ee(ie.bind(s))}if(Me(Xh,f),Me(Ct,F),Me(Kh,m),Me(ur,h),Me(vd,_),Me(_d,b),Me(Zh,T),Me(Jh,$),Me(Gh,B),Me(Wo,x),Me(dr,S),Me(Yh,U),ae(oe))if(oe.length){const ee=e.exposed||(e.exposed={});oe.forEach(ie=>{Object.defineProperty(ee,ie,{get:()=>s[ie],set:xe=>s[ie]=xe})})}else e.exposed||(e.exposed={});k&&e.render===_n&&(e.render=k),pe!=null&&(e.inheritAttrs=pe),Y&&(e.components=Y),me&&(e.directives=me)}function iy(e,t,s=_n){ae(e)&&(e=fa(e));for(const o in e){const l=e[o];let r;Te(l)?"default"in l?r=M(l.from||o,l.default,!0):r=M(l.from||o):r=M(l),Ee(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[o]=r,s("Inject",o)}}function wc(e,t,s){jn(ae(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,s)}function kd(e,t,s,o){const l=o.includes(".")?md(s,o):()=>s[o];if(qe(e)){const r=t[e];ue(r)?he(l,r):q(`Invalid watch handler specified by key "${e}"`,r)}else if(ue(e))he(l,e.bind(s));else if(Te(e))if(ae(e))e.forEach(r=>kd(r,t,s,o));else{const r=ue(e.handler)?e.handler.bind(s):t[e.handler];ue(r)?he(l,r,e):q(`Invalid watch handler specified by key "${e.handler}"`,r)}else q(`Invalid watch option: "${o}"`,e)}function Ci(e){const t=e.type,{mixins:s,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(t);let c;return i?c=i:!l.length&&!s&&!o?c=t:(c={},l.length&&l.forEach(p=>Dl(c,p,a,!0)),Dl(c,t,a)),Te(t)&&r.set(t,c),c}function Dl(e,t,s,o=!1){const{mixins:l,extends:r}=t;r&&Dl(e,r,s,!0),l&&l.forEach(a=>Dl(e,a,s,!0));for(const a in t)if(o&&a==="expose")q('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=cy[a]||s&&s[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const cy={data:bc,props:xc,emits:xc,methods:io,computed:io,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:io,directives:io,watch:uy,provide:bc,inject:py};function bc(e,t){return t?e?function(){return He(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function py(e,t){return io(fa(e),fa(t))}function fa(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function un(e,t){return e?[...new Set([].concat(e,t))]:t}function io(e,t){return e?He(Object.create(null),e,t):t}function xc(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:He(Object.create(null),_c(e),_c(t??{})):t}function uy(e,t){if(!e)return t;if(!t)return e;const s=He(Object.create(null),e);for(const o in t)s[o]=un(e[o],t[o]);return s}function Ad(){return{app:null,config:{isNativeTag:Iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dy=0;function fy(e,t){return function(o,l=null){ue(o)||(o=He({},o)),l!=null&&!Te(l)&&(q("root props passed to app.mount() must be an object."),l=null);const r=Ad();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){q("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let i=!1;const c=r.app={_uid:dy++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Hl,get config(){return r.config},set config(p){q("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return a.has(p)?q("Plugin has already been applied to target app."):p&&ue(p.install)?(a.add(p),p.install(c,...d)):ue(p)?(a.add(p),p(c,...d)):q('A plugin must either be a function or an object with an "install" function.'),c},mixin(p){return r.mixins.includes(p)?q("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),c},component(p,d){return ga(p,r.config),d?(r.components[p]&&q(`Component "${p}" has already been registered in target app.`),r.components[p]=d,c):r.components[p]},directive(p,d){return hd(p),d?(r.directives[p]&&q(`Directive "${p}" has already been registered in target app.`),r.directives[p]=d,c):r.directives[p]},mount(p,d,f){if(i)q("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&q("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const F=L(o,l);return F.appContext=r,r.reload=()=>{e(pt(F),p,f)},d&&t?t(F,p):e(F,p,f),i=!0,c._container=p,p.__vue_app__=c,c._instance=F.component,Sh(c,Hl),Fr(F.component)||F.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,Eh(c),delete c._container.__vue_app__):q("Cannot unmount an app that is not mounted.")},provide(p,d){return p in r.provides&&q(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=d,c},runWithContext(p){Bl=c;try{return p()}finally{Bl=null}}};return c}}let Bl=null;function En(e,t){if(!Je)q("provide() can only be used inside setup().");else{let s=Je.provides;const o=Je.parent&&Je.parent.provides;o===s&&(s=Je.provides=Object.create(o)),s[e]=t}}function M(e,t,s=!1){const o=Je||Ze;if(o||Bl){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Bl._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return s&&ue(t)?t.call(o&&o.proxy):t;q(`injection "${String(e)}" not found.`)}else q("inject() can only be used inside setup() or functional components.")}function Fy(e,t,s,o=!1){const l={},r={};Sl(r,fr,1),e.propsDefaults=Object.create(null),Sd(e,t,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);$d(t||{},l,e),s?e.props=o?l:sh(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function my(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function hy(e,t,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=e,i=Fe(l),[c]=e.propsOptions;let p=!1;if(!my(e)&&(o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let F=d[f];if(ir(e.emitsOptions,F))continue;const m=t[F];if(c)if(Ce(r,F))m!==r[F]&&(r[F]=m,p=!0);else{const h=rt(F);l[h]=Fa(c,i,h,m,e,!1)}else m!==r[F]&&(r[F]=m,p=!0)}}}else{Sd(e,t,l,r)&&(p=!0);let d;for(const f in i)(!t||!Ce(t,f)&&((d=vt(f))===f||!Ce(t,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=Fa(c,i,f,void 0,e,!0)):delete l[f]);if(r!==i)for(const f in r)(!t||!Ce(t,f))&&(delete r[f],p=!0)}p&&at(e,"set","$attrs"),$d(t||{},l,e)}function Sd(e,t,s,o){const[l,r]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(hl(c))continue;const p=t[c];let d;l&&Ce(l,d=rt(c))?!r||!r.includes(d)?s[d]=p:(i||(i={}))[d]=p:ir(e.emitsOptions,c)||(!(c in o)||p!==o[c])&&(o[c]=p,a=!0)}if(r){const c=Fe(s),p=i||je;for(let d=0;d<r.length;d++){const f=r[d];s[f]=Fa(l,c,f,p[f],e,!Ce(p,f))}}return a}function Fa(e,t,s,o,l,r){const a=e[s];if(a!=null){const i=Ce(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:p}=l;s in p?o=p[s]:(Ds(l),o=p[s]=c.call(null,t),hs())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===vt(s))&&(o=!0))}return o}function Ed(e,t,s=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const r=e.props,a={},i=[];let c=!1;if(!ue(e)){const d=f=>{c=!0;const[F,m]=Ed(f,t,!0);He(a,F),m&&i.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Te(e)&&o.set(e,Is),Is;if(ae(r))for(let d=0;d<r.length;d++){qe(r[d])||q("props must be strings when using array syntax.",r[d]);const f=rt(r[d]);Cc(f)&&(a[f]=je)}else if(r){Te(r)||q("invalid props options",r);for(const d in r){const f=rt(d);if(Cc(f)){const F=r[d],m=a[f]=ae(F)||ue(F)?{type:F}:He({},F);if(m){const h=Ac(Boolean,m.type),_=Ac(String,m.type);m[0]=h>-1,m[1]=_<0||h<_,(h>-1||Ce(m,"default"))&&i.push(f)}}}}const p=[a,i];return Te(e)&&o.set(e,p),p}function Cc(e){return e[0]!=="$"?!0:(q(`Invalid prop name: "${e}" is a reserved property.`),!1)}function ma(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function kc(e,t){return ma(e)===ma(t)}function Ac(e,t){return ae(t)?t.findIndex(s=>kc(s,e)):ue(t)&&kc(t,e)?0:-1}function $d(e,t,s){const o=Fe(t),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&yy(r,o[r],a,!Ce(e,r)&&!Ce(e,vt(r)))}}function yy(e,t,s,o){const{type:l,required:r,validator:a,skipCheck:i}=s;if(r&&o){q('Missing required prop: "'+e+'"');return}if(!(t==null&&!r)){if(l!=null&&l!==!0&&!i){let c=!1;const p=ae(l)?l:[l],d=[];for(let f=0;f<p.length&&!c;f++){const{valid:F,expectedType:m}=vy(t,p[f]);d.push(m||""),c=F}if(!c){q(_y(e,t,d));return}}a&&!a(t)&&q('Invalid prop: custom validator check failed for prop "'+e+'".')}}const gy=Wt("String,Number,Boolean,Function,Symbol,BigInt");function vy(e,t){let s;const o=ma(t);if(gy(o)){const l=typeof e;s=l===o.toLowerCase(),!s&&l==="object"&&(s=e instanceof t)}else o==="Object"?s=Te(e):o==="Array"?s=ae(e):o==="null"?s=e===null:s=e instanceof t;return{valid:s,expectedType:o}}function _y(e,t,s){let o=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(gs).join(" | ")}`;const l=s[0],r=ri(t),a=Sc(t,l),i=Sc(t,r);return s.length===1&&Ec(l)&&!wy(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,Ec(r)&&(o+=`with value ${i}.`),o}function Sc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function Ec(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function wy(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Od=e=>e[0]==="_"||e==="$stable",ki=e=>ae(e)?e.map(zn):[zn(e)],by=(e,t,s)=>{if(t._n)return t;const o=E((...l)=>(Je&&q(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),ki(t(...l))),s);return o._c=!1,o},Td=(e,t,s)=>{const o=e._ctx;for(const l in e){if(Od(l))continue;const r=e[l];if(ue(r))t[l]=by(l,r,o);else if(r!=null){q(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=ki(r);t[l]=()=>a}}},Id=(e,t)=>{bi(e.vnode)||q("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=ki(t);e.slots.default=()=>s},xy=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=Fe(t),Sl(t,"_",s)):Td(t,e.slots={})}else e.slots={},t&&Id(e,t);Sl(e.slots,fr,1)},Cy=(e,t,s)=>{const{vnode:o,slots:l}=e;let r=!0,a=je;if(o.shapeFlag&32){const i=t._;i?Lt?(He(l,t),at(e,"set","$slots")):s&&i===1?r=!1:(He(l,t),!s&&i===1&&delete l._):(r=!t.$stable,Td(t,l)),a=t}else t&&(Id(e,t),a={default:1});if(r)for(const i in l)!Od(i)&&!(i in a)&&delete l[i]};function ha(e,t,s,o,l=!1){if(ae(e)){e.forEach((F,m)=>ha(F,t&&(ae(t)?t[m]:t),s,o,l));return}if(Rs(o)&&!l)return;const r=o.shapeFlag&4?Fr(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=e;if(!i){q("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=i.refs===je?i.refs={}:i.refs,f=i.setupState;if(p!=null&&p!==c&&(qe(p)?(d[p]=null,Ce(f,p)&&(f[p]=null)):Ee(p)&&(p.value=null)),ue(c))gt(c,i,12,[a,d]);else{const F=qe(c),m=Ee(c);if(F||m){const h=()=>{if(e.f){const _=F?Ce(f,c)?f[c]:d[c]:c.value;l?ae(_)&&si(_,r):ae(_)?_.includes(r)||_.push(r):F?(d[c]=[r],Ce(f,c)&&(f[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else F?(d[c]=a,Ce(f,c)&&(f[c]=a)):m?(c.value=a,e.k&&(d[e.k]=a)):q("Invalid template ref type:",c,`(${typeof c})`)};a?(h.id=-1,en(h,s)):h()}else q("Invalid template ref type:",c,`(${typeof c})`)}}let zs,It;function dt(e,t){e.appContext.config.performance&&jl()&&It.mark(`vue-${t}-${e.uid}`),Th(e,t,jl()?It.now():Date.now())}function ft(e,t){if(e.appContext.config.performance&&jl()){const s=`vue-${t}-${e.uid}`,o=s+":end";It.mark(o),It.measure(`<${mr(e,e.type)}> ${t}`,s,o),It.clearMarks(s),It.clearMarks(o)}Ih(e,t,jl()?It.now():Date.now())}function jl(){return zs!==void 0||(typeof window<"u"&&window.performance?(zs=!0,It=window.performance):zs=!1),zs}function ky(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const en=Nh;function Ay(e){return Sy(e)}function Sy(e,t){ky();const s=El();s.__VUE__=!0,cd(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:p,setElementText:d,parentNode:f,nextSibling:F,setScopeId:m=_n,insertStaticContent:h}=e,_=(y,v,A,D=null,R=null,z=null,Z=!1,W=null,X=Lt?!1:!!v.dynamicChildren)=>{if(y===v)return;y&&!ts(y,v)&&(D=J(y),yn(y,R,z,!0),y=null),v.patchFlag===-2&&(X=!1,v.dynamicChildren=null);const{type:V,ref:re,shapeFlag:le}=v;switch(V){case zo:b(y,v,A,D);break;case mn:w(y,v,A,D);break;case fo:y==null?x(v,A,D,Z):g(y,v,A,Z);break;case $e:me(y,v,A,D,R,z,Z,W,X);break;default:le&1?$(y,v,A,D,R,z,Z,W,X):le&6?ye(y,v,A,D,R,z,Z,W,X):le&64||le&128?V.process(y,v,A,D,R,z,Z,W,X,ne):q("Invalid VNode type:",V,`(${typeof V})`)}re!=null&&R&&ha(re,y&&y.ref,z,v||y,!v)},b=(y,v,A,D)=>{if(y==null)o(v.el=i(v.children),A,D);else{const R=v.el=y.el;v.children!==y.children&&p(R,v.children)}},w=(y,v,A,D)=>{y==null?o(v.el=c(v.children||""),A,D):v.el=y.el},x=(y,v,A,D)=>{[y.el,y.anchor]=h(y.children,v,A,D,y.el,y.anchor)},g=(y,v,A,D)=>{if(v.children!==y.children){const R=F(y.anchor);k(y),[v.el,v.anchor]=h(v.children,A,R,D)}else v.el=y.el,v.anchor=y.anchor},S=({el:y,anchor:v},A,D)=>{let R;for(;y&&y!==v;)R=F(y),o(y,A,D),y=R;o(v,A,D)},k=({el:y,anchor:v})=>{let A;for(;y&&y!==v;)A=F(y),l(y),y=A;l(v)},$=(y,v,A,D,R,z,Z,W,X)=>{Z=Z||v.type==="svg",y==null?B(v,A,D,R,z,Z,W,X):oe(y,v,R,z,Z,W,X)},B=(y,v,A,D,R,z,Z,W)=>{let X,V;const{type:re,props:le,shapeFlag:ce,transition:fe,dirs:ke}=y;if(X=y.el=a(y.type,z,le&&le.is,le),ce&8?d(X,y.children):ce&16&&U(y.children,X,null,D,R,z&&re!=="foreignObject",Z,W),ke&&Kt(y,null,D,"created"),T(X,y,y.scopeId,Z,D),le){for(const Be in le)Be!=="value"&&!hl(Be)&&r(X,Be,null,le[Be],z,y.children,D,R,O);"value"in le&&r(X,"value",null,le.value),(V=le.onVnodeBeforeMount)&&Ln(V,D,y)}Object.defineProperty(X,"__vnode",{value:y,enumerable:!1}),Object.defineProperty(X,"__vueParentComponent",{value:D,enumerable:!1}),ke&&Kt(y,null,D,"beforeMount");const Ne=(!R||R&&!R.pendingBranch)&&fe&&!fe.persisted;Ne&&fe.beforeEnter(X),o(X,v,A),((V=le&&le.onVnodeMounted)||Ne||ke)&&en(()=>{V&&Ln(V,D,y),Ne&&fe.enter(X),ke&&Kt(y,null,D,"mounted")},R)},T=(y,v,A,D,R)=>{if(A&&m(y,A),D)for(let z=0;z<D.length;z++)m(y,D[z]);if(R){let z=R.subTree;if(z.patchFlag>0&&z.patchFlag&2048&&(z=fd(z.children)||z),v===z){const Z=R.vnode;T(y,Z,Z.scopeId,Z.slotScopeIds,R.parent)}}},U=(y,v,A,D,R,z,Z,W,X=0)=>{for(let V=X;V<y.length;V++){const re=y[V]=W?Ot(y[V]):zn(y[V]);_(null,re,v,A,D,R,z,Z,W)}},oe=(y,v,A,D,R,z,Z)=>{const W=v.el=y.el;let{patchFlag:X,dynamicChildren:V,dirs:re}=v;X|=y.patchFlag&16;const le=y.props||je,ce=v.props||je;let fe;A&&Yt(A,!1),(fe=ce.onVnodeBeforeUpdate)&&Ln(fe,A,v,y),re&&Kt(v,y,A,"beforeUpdate"),A&&Yt(A,!0),Lt&&(X=0,Z=!1,V=null);const ke=R&&v.type!=="foreignObject";if(V?(pe(y.dynamicChildren,V,W,A,D,ke,z),Nl(y,v)):Z||xe(y,v,W,null,A,D,ke,z,!1),X>0){if(X&16)Y(W,v,le,ce,A,D,R);else if(X&2&&le.class!==ce.class&&r(W,"class",null,ce.class,R),X&4&&r(W,"style",le.style,ce.style,R),X&8){const Ne=v.dynamicProps;for(let Be=0;Be<Ne.length;Be++){const Xe=Ne[Be],qn=le[Xe],ks=ce[Xe];(ks!==qn||Xe==="value")&&r(W,Xe,qn,ks,R,y.children,A,D,O)}}X&1&&y.children!==v.children&&d(W,v.children)}else!Z&&V==null&&Y(W,v,le,ce,A,D,R);((fe=ce.onVnodeUpdated)||re)&&en(()=>{fe&&Ln(fe,A,v,y),re&&Kt(v,y,A,"updated")},D)},pe=(y,v,A,D,R,z,Z)=>{for(let W=0;W<v.length;W++){const X=y[W],V=v[W],re=X.el&&(X.type===$e||!ts(X,V)||X.shapeFlag&70)?f(X.el):A;_(X,V,re,null,D,R,z,Z,!0)}},Y=(y,v,A,D,R,z,Z)=>{if(A!==D){if(A!==je)for(const W in A)!hl(W)&&!(W in D)&&r(y,W,A[W],null,Z,v.children,R,z,O);for(const W in D){if(hl(W))continue;const X=D[W],V=A[W];X!==V&&W!=="value"&&r(y,W,V,X,Z,v.children,R,z,O)}"value"in D&&r(y,"value",A.value,D.value)}},me=(y,v,A,D,R,z,Z,W,X)=>{const V=v.el=y?y.el:i(""),re=v.anchor=y?y.anchor:i("");let{patchFlag:le,dynamicChildren:ce,slotScopeIds:fe}=v;(Lt||le&2048)&&(le=0,X=!1,ce=null),fe&&(W=W?W.concat(fe):fe),y==null?(o(V,A,D),o(re,A,D),U(v.children,A,re,R,z,Z,W,X)):le>0&&le&64&&ce&&y.dynamicChildren?(pe(y.dynamicChildren,ce,A,R,z,Z,W),Nl(y,v)):xe(y,v,A,re,R,z,Z,W,X)},ye=(y,v,A,D,R,z,Z,W,X)=>{v.slotScopeIds=W,y==null?v.shapeFlag&512?R.ctx.activate(v,A,D,Z,X):we(v,A,D,R,z,Z,X):Me(y,v,X)},we=(y,v,A,D,R,z,Z)=>{const W=y.component=jy(y,D,R);if(W.type.__hmrId&&xh(W),yl(y),dt(W,"mount"),bi(y)&&(W.ctx.renderer=ne),dt(W,"init"),Hy(W),ft(W,"init"),W.asyncDep){if(R&&R.registerDep(W,ee),!y.el){const X=W.subTree=L(mn);w(null,X,v,A)}return}ee(W,y,v,A,R,z,Z),gl(),ft(W,"mount")},Me=(y,v,A)=>{const D=v.component=y.component;if(Bh(y,v,A))if(D.asyncDep&&!D.asyncResolved){yl(v),ie(D,v,A),gl();return}else D.next=v,wh(D.update),D.update();else v.el=y.el,D.vnode=v},ee=(y,v,A,D,R,z,Z)=>{const W=()=>{if(y.isMounted){let{next:re,bu:le,u:ce,parent:fe,vnode:ke}=y,Ne=re,Be;yl(re||y.vnode),Yt(y,!1),re?(re.el=ke.el,ie(y,re,Z)):re=ke,le&&ns(le),(Be=re.props&&re.props.onVnodeBeforeUpdate)&&Ln(Be,fe,re,ke),Yt(y,!0),dt(y,"render");const Xe=kr(y);ft(y,"render");const qn=y.subTree;y.subTree=Xe,dt(y,"patch"),_(qn,Xe,f(qn.el),J(qn),y,R,z),ft(y,"patch"),re.el=Xe.el,Ne===null&&jh(y,Xe.el),ce&&en(ce,R),(Be=re.props&&re.props.onVnodeUpdated)&&en(()=>Ln(Be,fe,re,ke),R),pd(y),gl()}else{let re;const{el:le,props:ce}=v,{bm:fe,m:ke,parent:Ne}=y,Be=Rs(v);if(Yt(y,!1),fe&&ns(fe),!Be&&(re=ce&&ce.onVnodeBeforeMount)&&Ln(re,Ne,v),Yt(y,!0),le&&De){const Xe=()=>{dt(y,"render"),y.subTree=kr(y),ft(y,"render"),dt(y,"hydrate"),De(le,y.subTree,y,R,null),ft(y,"hydrate")};Be?v.type.__asyncLoader().then(()=>!y.isUnmounted&&Xe()):Xe()}else{dt(y,"render");const Xe=y.subTree=kr(y);ft(y,"render"),dt(y,"patch"),_(null,Xe,A,D,y,R,z),ft(y,"patch"),v.el=Xe.el}if(ke&&en(ke,R),!Be&&(re=ce&&ce.onVnodeMounted)){const Xe=v;en(()=>Ln(re,Ne,Xe),R)}(v.shapeFlag&256||Ne&&Rs(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&y.a&&en(y.a,R),y.isMounted=!0,aa(y),v=A=D=null}},X=y.effect=new pi(W,()=>ar(V),y.scope),V=y.update=()=>X.run();V.id=y.uid,Yt(y,!0),X.onTrack=y.rtc?re=>ns(y.rtc,re):void 0,X.onTrigger=y.rtg?re=>ns(y.rtg,re):void 0,V.ownerInstance=y,V()},ie=(y,v,A)=>{v.component=y;const D=y.vnode.props;y.vnode=v,y.next=null,hy(y,v.props,D,A),Cy(y,v.children,A),_s(),Fc(),ws()},xe=(y,v,A,D,R,z,Z,W,X=!1)=>{const V=y&&y.children,re=y?y.shapeFlag:0,le=v.children,{patchFlag:ce,shapeFlag:fe}=v;if(ce>0){if(ce&128){In(V,le,A,D,R,z,Z,W,X);return}else if(ce&256){Pe(V,le,A,D,R,z,Z,W,X);return}}fe&8?(re&16&&O(V,R,z),le!==V&&d(A,le)):re&16?fe&16?In(V,le,A,D,R,z,Z,W,X):O(V,R,z,!0):(re&8&&d(A,""),fe&16&&U(le,A,D,R,z,Z,W,X))},Pe=(y,v,A,D,R,z,Z,W,X)=>{y=y||Is,v=v||Is;const V=y.length,re=v.length,le=Math.min(V,re);let ce;for(ce=0;ce<le;ce++){const fe=v[ce]=X?Ot(v[ce]):zn(v[ce]);_(y[ce],fe,A,null,R,z,Z,W,X)}V>re?O(y,R,z,!0,!1,le):U(v,A,D,R,z,Z,W,X,le)},In=(y,v,A,D,R,z,Z,W,X)=>{let V=0;const re=v.length;let le=y.length-1,ce=re-1;for(;V<=le&&V<=ce;){const fe=y[V],ke=v[V]=X?Ot(v[V]):zn(v[V]);if(ts(fe,ke))_(fe,ke,A,null,R,z,Z,W,X);else break;V++}for(;V<=le&&V<=ce;){const fe=y[le],ke=v[ce]=X?Ot(v[ce]):zn(v[ce]);if(ts(fe,ke))_(fe,ke,A,null,R,z,Z,W,X);else break;le--,ce--}if(V>le){if(V<=ce){const fe=ce+1,ke=fe<re?v[fe].el:D;for(;V<=ce;)_(null,v[V]=X?Ot(v[V]):zn(v[V]),A,ke,R,z,Z,W,X),V++}}else if(V>ce)for(;V<=le;)yn(y[V],R,z,!0),V++;else{const fe=V,ke=V,Ne=new Map;for(V=ke;V<=ce;V++){const pn=v[V]=X?Ot(v[V]):zn(v[V]);pn.key!=null&&(Ne.has(pn.key)&&q("Duplicate keys found during update:",JSON.stringify(pn.key),"Make sure keys are unique."),Ne.set(pn.key,V))}let Be,Xe=0;const qn=ce-ke+1;let ks=!1,sc=0;const Ws=new Array(qn);for(V=0;V<qn;V++)Ws[V]=0;for(V=fe;V<=le;V++){const pn=y[V];if(Xe>=qn){yn(pn,R,z,!0);continue}let Qn;if(pn.key!=null)Qn=Ne.get(pn.key);else for(Be=ke;Be<=ce;Be++)if(Ws[Be-ke]===0&&ts(pn,v[Be])){Qn=Be;break}Qn===void 0?yn(pn,R,z,!0):(Ws[Qn-ke]=V+1,Qn>=sc?sc=Qn:ks=!0,_(pn,v[Qn],A,null,R,z,Z,W,X),Xe++)}const oc=ks?Ey(Ws):Is;for(Be=oc.length-1,V=qn-1;V>=0;V--){const pn=ke+V,Qn=v[pn],lc=pn+1<re?v[pn+1].el:D;Ws[V]===0?_(null,Qn,A,lc,R,z,Z,W,X):ks&&(Be<0||V!==oc[Be]?on(Qn,A,lc,2):Be--)}}},on=(y,v,A,D,R=null)=>{const{el:z,type:Z,transition:W,children:X,shapeFlag:V}=y;if(V&6){on(y.component.subTree,v,A,D);return}if(V&128){y.suspense.move(v,A,D);return}if(V&64){Z.move(y,v,A,ne);return}if(Z===$e){o(z,v,A);for(let le=0;le<X.length;le++)on(X[le],v,A,D);o(y.anchor,v,A);return}if(Z===fo){S(y,v,A);return}if(D!==2&&V&1&&W)if(D===0)W.beforeEnter(z),o(z,v,A),en(()=>W.enter(z),R);else{const{leave:le,delayLeave:ce,afterLeave:fe}=W,ke=()=>o(z,v,A),Ne=()=>{le(z,()=>{ke(),fe&&fe()})};ce?ce(z,ke,Ne):Ne()}else o(z,v,A)},yn=(y,v,A,D=!1,R=!1)=>{const{type:z,props:Z,ref:W,children:X,dynamicChildren:V,shapeFlag:re,patchFlag:le,dirs:ce}=y;if(W!=null&&ha(W,null,A,y,!0),re&256){v.ctx.deactivate(y);return}const fe=re&1&&ce,ke=!Rs(y);let Ne;if(ke&&(Ne=Z&&Z.onVnodeBeforeUnmount)&&Ln(Ne,v,y),re&6)Pn(y.component,A,D);else{if(re&128){y.suspense.unmount(A,D);return}fe&&Kt(y,null,v,"beforeUnmount"),re&64?y.type.remove(y,v,A,R,ne,D):V&&(z!==$e||le>0&&le&64)?O(V,v,A,!1,!0):(z===$e&&le&384||!R&&re&16)&&O(X,v,A),D&&Zn(y)}(ke&&(Ne=Z&&Z.onVnodeUnmounted)||fe)&&en(()=>{Ne&&Ln(Ne,v,y),fe&&Kt(y,null,v,"unmounted")},A)},Zn=y=>{const{type:v,el:A,anchor:D,transition:R}=y;if(v===$e){y.patchFlag>0&&y.patchFlag&2048&&R&&!R.persisted?y.children.forEach(Z=>{Z.type===mn?l(Z.el):Zn(Z)}):Xt(A,D);return}if(v===fo){k(y);return}const z=()=>{l(A),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(y.shapeFlag&1&&R&&!R.persisted){const{leave:Z,delayLeave:W}=R,X=()=>Z(A,z);W?W(y.el,z,X):X()}else z()},Xt=(y,v)=>{let A;for(;y!==v;)A=F(y),l(y),y=A;l(v)},Pn=(y,v,A)=>{y.type.__hmrId&&Ch(y);const{bum:D,scope:R,update:z,subTree:Z,um:W}=y;D&&ns(D),R.stop(),z&&(z.active=!1,yn(Z,y,v,A)),W&&en(W,v),en(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),Oh(y)},O=(y,v,A,D=!1,R=!1,z=0)=>{for(let Z=z;Z<y.length;Z++)yn(y[Z],v,A,D,R)},J=y=>y.shapeFlag&6?J(y.component.subTree):y.shapeFlag&128?y.suspense.next():F(y.anchor||y.el),Q=(y,v,A)=>{y==null?v._vnode&&yn(v._vnode,null,null,!0):_(v._vnode||null,y,v,null,null,null,A),Fc(),rd(),v._vnode=y},ne={p:_,um:yn,m:on,r:Zn,mt:we,mc:U,pc:xe,pbc:pe,n:J,o:e};let be,De;return t&&([be,De]=t(ne)),{render:Q,hydrate:be,createApp:fy(Q,be)}}function Yt({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Nl(e,t,s=!1){const o=e.children,l=t.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=Ot(l[r]),i.el=a.el),s||Nl(a,i)),i.type===zo&&(i.el=a.el),i.type===mn&&!i.el&&(i.el=a.el)}}function Ey(e){const t=e.slice(),s=[0];let o,l,r,a,i;const c=e.length;for(o=0;o<c;o++){const p=e[o];if(p!==0){if(l=s[s.length-1],e[l]<p){t[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,e[s[i]]<p?r=i+1:a=i;p<e[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=t[a];return s}const $y=e=>e.__isTeleport,Ls=e=>e&&(e.disabled||e.disabled===""),$c=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ya=(e,t)=>{const s=e&&e.to;if(qe(s))if(t){const o=t(s);return o||q(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return q("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ls(e)&&q(`Invalid Teleport target: ${s}`),s},Oy={__isTeleport:!0,process(e,t,s,o,l,r,a,i,c,p){const{mc:d,pc:f,pbc:F,o:{insert:m,querySelector:h,createText:_,createComment:b}}=p,w=Ls(t.props);let{shapeFlag:x,children:g,dynamicChildren:S}=t;if(Lt&&(c=!1,S=null),e==null){const k=t.el=b("teleport start"),$=t.anchor=b("teleport end");m(k,s,o),m($,s,o);const B=t.target=ya(t.props,h),T=t.targetAnchor=_("");B?(m(T,B),a=a||$c(B)):w||q("Invalid Teleport target on mount:",B,`(${typeof B})`);const U=(oe,pe)=>{x&16&&d(g,oe,pe,l,r,a,i,c)};w?U(s,$):B&&U(B,T)}else{t.el=e.el;const k=t.anchor=e.anchor,$=t.target=e.target,B=t.targetAnchor=e.targetAnchor,T=Ls(e.props),U=T?s:$,oe=T?k:B;if(a=a||$c($),S?(F(e.dynamicChildren,S,U,l,r,a,i),Nl(e,t,!0)):c||f(e,t,U,oe,l,r,a,i,!1),w)T||ol(t,s,k,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const pe=t.target=ya(t.props,h);pe?ol(t,pe,null,p,0):q("Invalid Teleport target on update:",$,`(${typeof $})`)}else T&&ol(t,$,B,p,1)}Pd(t)},remove(e,t,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:p,targetAnchor:d,target:f,props:F}=e;if(f&&r(d),(a||!Ls(F))&&(r(p),i&16))for(let m=0;m<c.length;m++){const h=c[m];l(h,t,s,!0,!!h.dynamicChildren)}},move:ol,hydrate:Ty};function ol(e,t,s,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,t,s);const{el:a,anchor:i,shapeFlag:c,children:p,props:d}=e,f=r===2;if(f&&o(a,t,s),(!f||Ls(d))&&c&16)for(let F=0;F<p.length;F++)l(p[F],t,s,2);f&&o(i,t,s)}function Ty(e,t,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},p){const d=t.target=ya(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ls(t.props))t.anchor=p(a(e),t,i(e),s,o,l,r),t.targetAnchor=f;else{t.anchor=a(e);let F=f;for(;F;)if(F=a(F),F&&F.nodeType===8&&F.data==="teleport anchor"){t.targetAnchor=F,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}p(f,t,d,s,o,l,r)}Pd(t)}return t.anchor&&a(t.anchor)}const Iy=Oy;function Pd(e){const t=e.ctx;if(t&&t.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const $e=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),fo=Symbol.for("v-stc"),Fo=[];let Kn=null;function C(e=!1){Fo.push(Kn=e?null:[])}function Py(){Fo.pop(),Kn=Fo[Fo.length-1]||null}let $o=1;function Oc(e){$o+=e}function Rd(e){return e.dynamicChildren=$o>0?Kn||Is:null,Py(),$o>0&&Kn&&Kn.push(e),e}function G(e,t,s,o,l,r){return Rd(n(e,t,s,o,l,r,!0))}function j(e,t,s,o,l){return Rd(L(e,t,s,o,l,!0))}function ct(e){return e?e.__v_isVNode===!0:!1}function ts(e,t){return t.shapeFlag&6&&Os.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Ry=(...e)=>Ly(...e),fr="__vInternal",Ld=({key:e})=>e??null,vl=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?qe(e)||Ee(e)||ue(e)?{i:Ze,r:e,k:t,f:!!s}:e:null);function n(e,t=null,s=null,o=0,l=null,r=e===$e?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ld(t),ref:t&&vl(t),scopeId:cr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ze};return i?(Ai(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=qe(s)?8:16),c.key!==c.key&&q("VNode created with invalid key (NaN). VNode type:",c.type),$o>0&&!a&&Kn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Kn.push(c),c}const L=Ry;function Ly(e,t=null,s=null,o=0,l=null,r=!1){if((!e||e===ey)&&(e||q(`Invalid vnode type when creating vnode: ${e}.`),e=mn),ct(e)){const i=pt(e,t,!0);return s&&Ai(i,s),$o>0&&!r&&Kn&&(i.shapeFlag&6?Kn[Kn.indexOf(e)]=i:Kn.push(i)),i.patchFlag|=-2,i}if(Nd(e)&&(e=e.__vccOpts),t){t=te(t);let{class:i,style:c}=t;i&&!qe(i)&&(t.class=Ue(i)),Te(c)&&(Il(c)&&!ae(c)&&(c=He({},c)),t.style=tn(c))}const a=qe(e)?1:Fd(e)?128:$y(e)?64:Te(e)?4:ue(e)?2:0;return a&4&&Il(e)&&(e=Fe(e),q("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,t,s,o,l,a,r,!0)}function te(e){return e?Il(e)||fr in e?He({},e):e:null}function pt(e,t,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=e,i=t?Le(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Ld(i),ref:t&&t.ref?s&&l?ae(l)?l.concat(vl(t)):[l,vl(t)]:vl(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&ae(a)?a.map(Md):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Md(e){const t=pt(e);return ae(e.children)&&(t.children=e.children.map(Md)),t}function u(e=" ",t=0){return L(zo,null,e,t)}function My(e,t){const s=L(fo,null,e);return s.staticCount=t,s}function ve(e="",t=!1){return t?(C(),j(mn,null,e)):L(mn,null,e)}function zn(e){return e==null||typeof e=="boolean"?L(mn):ae(e)?L($e,null,e.slice()):typeof e=="object"?Ot(e):L(zo,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pt(e)}function Ai(e,t){let s=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ae(t))s=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),Ai(e,l()),l._c&&(l._d=!0));return}else{s=32;const l=t._;!l&&!(fr in t)?t._ctx=Ze:l===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Ze},s=32):(t=String(t),o&64?(s=16,t=[u(t)]):s=8);e.children=t,e.shapeFlag|=s}function Le(...e){const t={};for(let s=0;s<e.length;s++){const o=e[s];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Ue([t.class,o.class]));else if(l==="style")t.style=tn([t.style,o.style]);else if(qo(l)){const r=t[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(t[l]=r?[].concat(r,a):a)}else l!==""&&(t[l]=o[l])}return t}function Ln(e,t,s,o=null){jn(e,t,7,[s,o])}const Dy=Ad();let By=0;function jy(e,t,s){const o=e.type,l=(t?t.appContext:e.appContext)||Dy,r={uid:By++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(o,l),emitsOptions:dd(o,l),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=ny(r),r.root=t?t.root:r,r.emit=Rh.bind(null,r),e.ce&&e.ce(r),r}let Je=null;const bn=()=>Je||Ze;let Si,As,Tc="__VUE_INSTANCE_SETTERS__";(As=El()[Tc])||(As=El()[Tc]=[]),As.push(e=>Je=e),Si=e=>{As.length>1?As.forEach(t=>t(e)):As[0](e)};const Ds=e=>{Si(e),e.scope.on()},hs=()=>{Je&&Je.scope.off(),Si(null)},Ny=Wt("slot,component");function ga(e,t){const s=t.isNativeTag||Iu;(Ny(e)||s(e))&&q("Do not use built-in or reserved HTML elements as component id: "+e)}function Dd(e){return e.vnode.shapeFlag&4}let Oo=!1;function Hy(e,t=!1){Oo=t;const{props:s,children:o}=e.vnode,l=Dd(e);Fy(e,s,l,t),xy(e,o);const r=l?qy(e,t):void 0;return Oo=!1,r}function qy(e,t){var s;const o=e.type;{if(o.name&&ga(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)ga(r[a],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)hd(r[a])}o.compilerOptions&&Vy()&&q('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=lr(new Proxy(e.ctx,Cd)),ty(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?jd(e):null;Ds(e),_s();const a=gt(l,e,0,[lo(e.props),r]);if(ws(),hs(),li(a)){if(a.then(hs,hs),t)return a.then(i=>{Ic(e,i,t)}).catch(i=>{rr(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(s=o.name)!=null?s:"Anonymous";q(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ic(e,a,t)}else Bd(e,t)}function Ic(e,t,s){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Te(t)?(ct(t)&&q("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=ed(t),sy(e)):t!==void 0&&q(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Bd(e,s)}let va;const Vy=()=>!va;function Bd(e,t,s){const o=e.type;if(!e.render){if(!t&&va&&!o.render){const l=o.template||Ci(e).template;if(l){dt(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,p=He(He({isCustomElement:r,delimiters:i},a),c);o.render=va(l,p),ft(e,"compile")}}e.render=o.render||_n}Ds(e),_s(),ay(e),ws(),hs(),!o.render&&e.render===_n&&!t&&(o.template?q('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):q("Component is missing template or render function."))}function Uy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,s){return Rl(),an(e,"get","$attrs"),t[s]},set(){return q("setupContext.attrs is readonly."),!1},deleteProperty(){return q("setupContext.attrs is readonly."),!1}}))}function Wy(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,s){return an(e,"get","$slots"),t[s]}}))}function jd(e){return Object.freeze({get attrs(){return Uy(e)},get slots(){return Wy(e)},get emit(){return(s,...o)=>e.emit(s,...o)},expose:s=>{if(e.exposed&&q("expose() should be called only once per setup()."),s!=null){let o=typeof s;o==="object"&&(ae(s)?o="array":Ee(s)&&(o="ref")),o!=="object"&&q(`expose() should be passed a plain object, received ${o}.`)}e.exposed=s||{}}})}function Fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ed(lr(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in ms)return ms[s](e)},has(t,s){return s in t||s in ms}}))}const zy=/(?:^|[-_])(\w)/g,Xy=e=>e.replace(zy,t=>t.toUpperCase()).replace(/[-_]/g,"");function To(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function mr(e,t,s=!1){let o=To(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const a in r)if(r[a]===t)return a};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?Xy(o):s?"App":"Anonymous"}function Nd(e){return ue(e)&&"__vccOpts"in e}const P=(e,t)=>dh(e,t,Oo);function Qe(e,t,s){const o=arguments.length;return o===2?Te(t)&&!ae(t)?ct(t)?L(e,null,[t]):L(e,t):L(e,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&ct(s)&&(s=[s]),L(e,t,s))}const Ky=Symbol.for("v-scx"),Yy=()=>{{const e=M(Ky);return e||q("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function $r(e){return!!(e&&e.__v_isShallow)}function Gy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return Te(f)?f.__isVue?["div",e,"VueInstance"]:Ee(f)?["div",{},["span",e,d(f)],"<",i(f.value),">"]:fs(f)?["div",{},["span",e,$r(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Vt(f)?" (readonly)":""}`]:Vt(f)?["div",{},["span",e,$r(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const F=[];f.type.props&&f.props&&F.push(a("props",Fe(f.props))),f.setupState!==je&&F.push(a("setup",f.setupState)),f.data!==je&&F.push(a("data",Fe(f.data)));const m=c(f,"computed");m&&F.push(a("computed",m));const h=c(f,"inject");return h&&F.push(a("injected",h)),F.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),F}function a(f,F){return F=He({},F),Object.keys(F).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(F).map(m=>["div",{},["span",o,m+": "],i(F[m],!1)])]]:["span",{}]}function i(f,F=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Te(f)?["object",{object:F?Fe(f):f}]:["span",s,String(f)]}function c(f,F){const m=f.type;if(ue(m))return;const h={};for(const _ in f.ctx)p(m,_,F)&&(h[_]=f.ctx[_]);return h}function p(f,F,m){const h=f[m];if(ae(h)&&h.includes(F)||Te(h)&&F in h||f.extends&&p(f.extends,F,m)||f.mixins&&f.mixins.some(_=>p(_,F,m)))return!0}function d(f){return $r(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Hl="3.3.4",Jy="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,Pc=ss&&ss.createElement("template"),Zy={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,o)=>{const l=t?ss.createElementNS(Jy,e):ss.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>ss.createTextNode(e),createComment:e=>ss.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ss.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,o,l,r){const a=s?s.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Pc.innerHTML=o?`<svg>${e}</svg>`:e;const i=Pc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function Qy(e,t,s){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function eg(e,t,s){const o=e.style,l=qe(s);if(s&&!l){if(t&&!qe(t))for(const r in t)s[r]==null&&_a(o,r,"");for(const r in s)_a(o,r,s[r])}else{const r=o.display;l?t!==s&&(o.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const ng=/[^\\];\s*$/,Rc=/\s*!important$/;function _a(e,t,s){if(ae(s))s.forEach(o=>_a(e,t,o));else if(s==null&&(s=""),ng.test(s)&&q(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))e.setProperty(t,s);else{const o=tg(e,t);Rc.test(s)?e.setProperty(vt(o),s.replace(Rc,""),"important"):e[o]=s}}const Lc=["Webkit","Moz","ms"],Or={};function tg(e,t){const s=Or[t];if(s)return s;let o=rt(t);if(o!=="filter"&&o in e)return Or[t]=o;o=gs(o);for(let l=0;l<Lc.length;l++){const r=Lc[l]+o;if(r in e)return Or[t]=r}return t}const Mc="http://www.w3.org/1999/xlink";function sg(e,t,s,o,l){if(o&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Mc,t.slice(6,t.length)):e.setAttributeNS(Mc,t,s);else{const r=Am(t);s==null||r&&!Du(s)?e.removeAttribute(t):e.setAttribute(t,r?"":s)}}function og(e,t,s,o,l,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,l,r),e[t]=s??"";return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=s;const p=i==="OPTION"?e.getAttribute("value"):e.value,d=s??"";p!==d&&(e.value=d),s==null&&e.removeAttribute(t);return}let c=!1;if(s===""||s==null){const p=typeof e[t];p==="boolean"?s=Du(s):s==null&&p==="string"?(s="",c=!0):p==="number"&&(s=0,c=!0)}try{e[t]=s}catch(p){c||q(`Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${s} is invalid.`,p)}c&&e.removeAttribute(t)}function lg(e,t,s,o){e.addEventListener(t,s,o)}function rg(e,t,s,o){e.removeEventListener(t,s,o)}function ag(e,t,s,o,l=null){const r=e._vei||(e._vei={}),a=r[t];if(o&&a)a.value=o;else{const[i,c]=ig(t);if(o){const p=r[t]=ug(o,l);lg(e,i,p,c)}else a&&(rg(e,i,a,c),r[t]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function ig(e){let t;if(Dc.test(e)){t={};let o;for(;o=e.match(Dc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vt(e.slice(2)),t]}let Tr=0;const cg=Promise.resolve(),pg=()=>Tr||(cg.then(()=>Tr=0),Tr=Date.now());function ug(e,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;jn(dg(o,s.value),t,5,[o])};return s.value=e,s.attached=pg(),s}function dg(e,t){if(ae(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Bc=/^on[a-z]/,fg=(e,t,s,o,l=!1,r,a,i,c)=>{t==="class"?Qy(e,o,l):t==="style"?eg(e,s,o):qo(t)?Al(t)||ag(e,t,s,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fg(e,t,o,l))?og(e,t,o,r,a,i,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),sg(e,t,o,l))};function Fg(e,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Bc.test(t)&&ue(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Bc.test(t)&&qe(s)?!1:t in e}const At="transition",Xs="animation",Hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mg=He({},Vh,Hd),Gt=(e,t=[])=>{ae(e)?e.forEach(s=>s(...t)):e&&e(...t)},jc=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function hg(e){const t={};for(const Y in e)Y in Hd||(t[Y]=e[Y]);if(e.css===!1)return t;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:p=a,appearToClass:d=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:F=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=e,h=yg(l),_=h&&h[0],b=h&&h[1],{onBeforeEnter:w,onEnter:x,onEnterCancelled:g,onLeave:S,onLeaveCancelled:k,onBeforeAppear:$=w,onAppear:B=x,onAppearCancelled:T=g}=t,U=(Y,me,ye)=>{Et(Y,me?d:i),Et(Y,me?p:a),ye&&ye()},oe=(Y,me)=>{Y._isLeaving=!1,Et(Y,f),Et(Y,m),Et(Y,F),me&&me()},pe=Y=>(me,ye)=>{const we=Y?B:x,Me=()=>U(me,Y,ye);Gt(we,[me,Me]),Nc(()=>{Et(me,Y?c:r),Ft(me,Y?d:i),jc(we)||Hc(me,o,_,Me)})};return He(t,{onBeforeEnter(Y){Gt(w,[Y]),Ft(Y,r),Ft(Y,a)},onBeforeAppear(Y){Gt($,[Y]),Ft(Y,c),Ft(Y,p)},onEnter:pe(!1),onAppear:pe(!0),onLeave(Y,me){Y._isLeaving=!0;const ye=()=>oe(Y,me);Ft(Y,f),Vd(),Ft(Y,F),Nc(()=>{Y._isLeaving&&(Et(Y,f),Ft(Y,m),jc(S)||Hc(Y,o,b,ye))}),Gt(S,[Y,ye])},onEnterCancelled(Y){U(Y,!1),Gt(g,[Y])},onAppearCancelled(Y){U(Y,!0),Gt(T,[Y])},onLeaveCancelled(Y){oe(Y),Gt(k,[Y])}})}function yg(e){if(e==null)return null;if(Te(e))return[Ir(e.enter),Ir(e.leave)];{const t=Ir(e);return[t,t]}}function Ir(e){const t=ym(e);return yh(t,"<transition> explicit duration"),t}function Ft(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(t)}function Et(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:s}=e;s&&(s.delete(t),s.size||(e._vtc=void 0))}function Nc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gg=0;function Hc(e,t,s,o){const l=e._endId=++gg,r=()=>{l===e._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=qd(e,t);if(!a)return o();const p=a+"end";let d=0;const f=()=>{e.removeEventListener(p,F),r()},F=m=>{m.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},i+1),e.addEventListener(p,F)}function qd(e,t){const s=window.getComputedStyle(e),o=h=>(s[h]||"").split(", "),l=o(`${At}Delay`),r=o(`${At}Duration`),a=qc(l,r),i=o(`${Xs}Delay`),c=o(`${Xs}Duration`),p=qc(i,c);let d=null,f=0,F=0;t===At?a>0&&(d=At,f=a,F=r.length):t===Xs?p>0&&(d=Xs,f=p,F=c.length):(f=Math.max(a,p),d=f>0?a>p?At:Xs:null,F=d?d===At?r.length:c.length:0);const m=d===At&&/\b(transform|all)(,|$)/.test(o(`${At}Property`).toString());return{type:d,timeout:f,propCount:F,hasTransform:m}}function qc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,o)=>Vc(s)+Vc(e[o])))}function Vc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Vd(){return document.body.offsetHeight}const Ud=new WeakMap,Wd=new WeakMap,zd={name:"TransitionGroup",props:He({},mg,{tag:String,moveClass:String}),setup(e,{slots:t}){const s=bn(),o=qh();let l,r;return ur(()=>{if(!l.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Cg(l[0].el,s.vnode.el,a))return;l.forEach(wg),l.forEach(bg);const i=l.filter(xg);Vd(),i.forEach(c=>{const p=c.el,d=p.style;Ft(p,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=F=>{F&&F.target!==p||(!F||/transform$/.test(F.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,Et(p,a))};p.addEventListener("transitionend",f)})}),()=>{const a=Fe(e),i=hg(a);let c=a.tag||$e;l=r,r=t.default?yd(t.default()):[];for(let p=0;p<r.length;p++){const d=r[p];d.key!=null?Ll(d,ca(d,i,o,s)):q("<TransitionGroup> children must be keyed.")}if(l)for(let p=0;p<l.length;p++){const d=l[p];Ll(d,ca(d,i,o,s)),Ud.set(d,d.el.getBoundingClientRect())}return L(c,null,r)}}},vg=e=>delete e.mode;zd.props;const _g=zd;function wg(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function bg(e){Wd.set(e,e.el.getBoundingClientRect())}function xg(e){const t=Ud.get(e),s=Wd.get(e),o=t.left-s.left,l=t.top-s.top;if(o||l){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",e}}function Cg(e,t,s){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(o);const{hasTransform:r}=qd(o);return l.removeChild(o),r}const kg=["ctrl","shift","alt","meta"],Ag={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>kg.some(s=>e[`${s}Key`]&&!t.includes(s))},Sg=(e,t)=>(s,...o)=>{for(let l=0;l<t.length;l++){const r=Ag[t[l]];if(r&&r(s,t))return}return e(s,...o)},Eg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ll=(e,t)=>s=>{if(!("key"in s))return;const o=vt(s.key);if(t.some(l=>l===o||Eg[l]===o))return e(s)},Xd={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):Ks(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(e),Ks(e,!0),o.enter(e)):o.leave(e,()=>{Ks(e,!1)}):Ks(e,t))},beforeUnmount(e,{value:t}){Ks(e,t)}};function Ks(e,t){e.style.display=t?e._vod:"none"}const $g=He({patchProp:fg},Zy);let Uc;function Og(){return Uc||(Uc=Ay($g))}const Tg=(...e)=>{const t=Og().createApp(...e);Ig(t),Pg(t);const{mount:s}=t;return t.mount=o=>{const l=Rg(o);if(!l)return;const r=t._component;!ue(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function Ig(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Mu(t)||Cm(t),writable:!1})}function Pg(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){q("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return q(o),s},set(){q(o)}})}}function Rg(e){if(qe(e)){const t=document.querySelector(e);return t||q(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&q('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Lg(){Gy()}Lg();function wa(e,t={},s){for(const o in e){const l=e[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?wa(l,t,r):typeof l=="function"&&(t[r]=l)}return t}const Mg={run:e=>e()},Dg=()=>Mg,Kd=typeof console.createTask<"u"?console.createTask:Dg;function Bg(e,t){const s=t.shift(),o=Kd(s);return e.reduce((l,r)=>l.then(()=>o.run(()=>r(...t))),Promise.resolve())}function jg(e,t){const s=t.shift(),o=Kd(s);return Promise.all(e.map(l=>o.run(()=>l(...t))))}function Pr(e,t){for(const s of[...e])s(t)}class Ng{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,s,o={}){if(!t||typeof s!="function")return()=>{};const l=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(s),()=>{s&&(this.removeHook(t,s),s=void 0)}}hookOnce(t,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(t,l),o}removeHook(t,s){if(this._hooks[t]){const o=this._hooks[t].indexOf(s);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,s){this._deprecatedHooks[t]=typeof s=="string"?{to:s}:s;const o=this._hooks[t]||[];delete this._hooks[t];for(const l of o)this.hook(t,l)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const s in t)this.deprecateHook(s,t[s])}addHooks(t){const s=wa(t),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(t){const s=wa(t);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...s){return s.unshift(t),this.callHookWith(Bg,t,...s)}callHookParallel(t,...s){return s.unshift(t),this.callHookWith(jg,t,...s)}callHookWith(t,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Pr(this._before,l);const r=t(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Pr(this._after,l)}):(this._after&&l&&Pr(this._after,l),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const s=this._before.indexOf(t);s!==-1&&this._before.splice(s,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const s=this._after.indexOf(t);s!==-1&&this._after.splice(s,1)}}}}function Hg(){return new Ng}function qg(e){return Array.isArray(e)?e:[e]}const Yd=["title","script","style","noscript"],Gd=["base","meta","link","style","script","noscript"],Vg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Ug=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Wg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Jd(e){let t=9;for(let s=0;s<e.length;)t=Math.imul(t^e.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ba(e){return Jd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,s])=>`${t}:${String(s)}`).join(",")}`)}function zg(e){let t=9;for(const s of e)for(let o=0;o<s.length;)t=Math.imul(t^s.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Zd(e,t){const{props:s,tag:o}=e;if(Ug.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return t&&!t(a)?!1:`${o}:${r}:${a}`}return!1}function Wc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function rl(e,t=!1,s){const{tag:o,$el:l}=e;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const p=`${i}:${c}`;s&&s(e,p,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(e,i,()=>l.removeAttribute(r)),(t||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),Yd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let Ys=!1;async function Qd(e,t={}){var F,m;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,l=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(Ys=Ys||e._hash||!1,Ys)){const h=zg(l.map(_=>_.tag._h));if(Ys===h)return;Ys=h}const r=e._popSideEffectQueue();e.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([_,b])=>{r[_]=b})});const a=(h,_,b)=>{_=`${h.renderId}:${_}`,h.entry&&(h.entry._sde[_]=b),delete r[_]};function i(h){const _=e.headEntries().find(w=>w._i===h._e),b={renderId:h._d||ba(h),$el:null,shouldRender:!0,tag:h,entry:_,markSideEffect:(w,x)=>a(b,w,x)};return b}const c=[],p={body:[],head:[]},d=h=>{e._elMap[h.renderId]=h.$el,c.push(h),a(h,"el",()=>{var _;(_=h.$el)==null||_.remove(),delete e._elMap[h.renderId]})};for(const h of l){if(await e.hooks.callHook("dom:beforeRenderTag",h),!h.shouldRender)continue;const{tag:_}=h;if(_.tag==="title"){o.title=_.textContent||"",c.push(h);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){h.$el=o[_.tag==="htmlAttrs"?"documentElement":"body"],rl(h,!1,a),c.push(h);continue}if(h.$el=e._elMap[h.renderId],!h.$el&&_.key&&(h.$el=o.querySelector(`${(F=_.tagPosition)!=null&&F.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._h}]`)),h.$el){h.tag._d&&rl(h),d(h);continue}p[(m=_.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(h)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([h,_])=>{var w;if(!_.length)return;const b=(w=o==null?void 0:o[h])==null?void 0:w.children;if(b){for(const x of[...b].reverse()){const g=x.tagName.toLowerCase();if(!Gd.includes(g))continue;const S=x.getAttributeNames().reduce((T,U)=>({...T,[U]:x.getAttribute(U)}),{}),k={tag:g,props:S};x.innerHTML&&(k.innerHTML=x.innerHTML);const $=ba(k);let B=_.findIndex(T=>(T==null?void 0:T.renderId)===$);if(B===-1){const T=Zd(k);B=_.findIndex(U=>(U==null?void 0:U.tag._d)&&U.tag._d===T)}if(B!==-1){const T=_[B];T.$el=x,rl(T),d(T),delete _[B]}}_.forEach(x=>{const g=x.tag.tagPosition||"head";f[g]=f[g]||o.createDocumentFragment(),x.$el||(x.$el=o.createElement(x.tag.tag),rl(x,!0)),f[g].appendChild(x.$el),d(x)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const h of c)await e.hooks.callHook("dom:renderTag",h);Object.values(r).forEach(h=>h())}let Rr=null;async function ef(e,t={}){function s(){return Rr=null,Qd(e,t)}const o=t.delayFn||(l=>setTimeout(l,10));return Rr=Rr||new Promise(l=>o(()=>l(s())))}function Xg(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),ef(t,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}}}function Kg(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const zc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Xc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in zc?zc[t]:10}const Yg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Gg(){return{hooks:{"tags:resolve":e=>{const t=s=>{var o;return(o=e.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of Yg)for(const l of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=t(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}e.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>Xc(s)-Xc(o))}}}}function Jg(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let s=t.findIndex(l=>l.tag==="titleTemplate");const o=t.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=Wc(t[s].textContent,t[o].textContent);l!==null?t[o].textContent=l||t[o].textContent:delete t[o]}else if(s!==-1){const l=Wc(t[s].textContent);l!==null&&(t[s].textContent=l,t[s].tag="title",s=-1)}s!==-1&&delete t[s],e.tags=t.filter(Boolean)}}}}function Zg(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Qg=["link","style","script","noscript"];function ev(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=ba(e)),e.key&&Qg.includes(e.tag)&&(e._h=Jd(e.key),e.props[`data-h-${e._h}`]="")}}}}const Kc=["script","link","bodyAttrs"];function nv(){const e=(t,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return t==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(s=>(!Kc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(t){if(!Kc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=s,t.tag._eventHandlers=o,t.tag._delayedSrc=l)},"dom:renderTag":function(t){const s=t.$el;if(!t.tag._eventHandlers||!s)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(t.tag._eventHandlers).forEach(([l,r])=>{const a=`${t.tag._d||t.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(t.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const p=r;s.setAttribute(c,""),o.addEventListener(i,p),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(i,p),s.removeAttribute(c)})}),t.tag._delayedSrc&&s.setAttribute("src",t.tag._delayedSrc)}}}}const tv=["templateParams","htmlAttrs","bodyAttrs"];function sv(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const s=Zd(e)||(e.key?`${e.tag}:${e.key}`:!1);s&&(e._d=s)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=t[l];if(r){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&tv.includes(o.tag)&&(i="merge"),i==="merge"){const c=r.props;["class","style"].forEach(p=>{o.props[p]&&c[p]&&(p==="style"&&!c[p].endsWith(";")&&(c[p]+=";"),o.props[p]=`${c[p]} ${o.props[p]}`)}),t[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Gd.includes(o.tag)&&a===0){delete t[l];return}t[l]=o});const s=[];Object.values(t).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),e.tags=s}}}}function al(e,t){function s(r){if(["s","pageTitle"].includes(r))return t.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((i,c)=>i&&i[c]||void 0,t):a=t[r],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function ov(){return{hooks:{"tags:resolve":e=>{var r;const{tags:t}=e,s=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=t.findIndex(a=>a.tag==="templateParams"),l=o!==-1?t[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=al(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=al(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=al(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?al(c,l):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const lv=typeof window<"u";let nf;function rv(e){return nf=e}function av(){return nf}async function iv(e,t){const s={tag:e,props:{}};return e==="templateParams"?(s.props=t,s):["title","titleTemplate"].includes(e)?(s.textContent=t instanceof Promise?await t:t,s):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?s.props.src=t:s.innerHTML=t,s):!1:(s.props=await pv(e,{...t}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>Wg.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Yd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=cv(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function cv(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function pv(e,t){for(const s of Object.keys(t)){const o=s.startsWith("data-");t[s]instanceof Promise&&(t[s]=await t[s]),String(t[s])==="true"?t[s]=o?"true":"":String(t[s])==="false"&&(o?t[s]="false":delete t[s])}return t}const uv=10;async function dv(e){const t=[];return Object.entries(e.resolvedInput).filter(([s,o])=>typeof o<"u"&&Vg.includes(s)).forEach(([s,o])=>{const l=qg(o);t.push(...l.map(r=>iv(s,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((s,o)=>(s._e=e._i,s._p=(e._i<<uv)+o,s))}function fv(){return[sv(),Gg(),ov(),Jg(),ev(),nv(),Zg()]}function Fv(e={}){return[Xg({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function mv(e={}){const t=hv({...e,plugins:[...Fv(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Kg(t.resolvedOptions.document)),rv(t),t}function hv(e={}){let t=[],s={},o=0;const l=Hg();e!=null&&e.hooks&&l.addHooks(e.hooks),e.plugins=[...fv(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),e.document=e.document||(lv?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const p={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(p._m=c==null?void 0:c.mode),c!=null&&c.transform&&(p._t=c==null?void 0:c.transform),t.push(p),r(),{dispose(){t=t.filter(d=>d._i!==p._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(f=>(f._i===p._i&&(p.input=f.input=d,r()),f))}}},async resolveTags(){const i={tags:[],entries:[...t]};await l.callHook("entries:resolve",i);for(const c of i.entries){const p=c._t||(d=>d);if(c.resolvedInput=p(c.resolvedInput||c.input),c.resolvedInput)for(const d of await dv(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function yv(e){return typeof e=="function"?e():I(e)}function ql(e,t=""){if(e instanceof Promise)return e;const s=yv(e);return!e||!s?s:Array.isArray(s)?s.map(o=>ql(o,t)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,I(l)]:[o,ql(l,o)])):s}const gv=Hl.startsWith("3"),vv=typeof window<"u",tf="usehead";function Ei(){return bn()&&M(tf)||av()}function _v(e){return{install(s){gv&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(tf,e))}}.install}function wv(e={}){const t=mv({...e,domDelayFn:s=>setTimeout(()=>nn(()=>s()),10),plugins:[bv(),...(e==null?void 0:e.plugins)||[]]});return t.install=_v(t),t}function bv(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=ql(t.input)}}}}function xv(e,t={}){const s=Ei(),o=K(!1),l=K({});bs(()=>{l.value=o.value?{}:ql(e)});const r=s.push(l.value,t);return he(l,i=>{r.patch(i)}),bn()&&(Wo(()=>{r.dispose()}),_d(()=>{o.value=!0}),vd(()=>{o.value=!1})),r}function Cv(e,t={}){return Ei().push(e,t)}function sf(e,t={}){var o;const s=Ei();if(s){const l=vv||!!((o=s.resolvedOptions)!=null&&o.document);return t.mode==="server"&&l||t.mode==="client"&&!l?void 0:l?xv(e,t):Cv(e,t)}}function kv(e,t){const s=wv(t||{}),o={unhead:s,install(l){Hl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=sf(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?Qd(s,{document:l}):ef(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const mo=Symbol("v-click-clicks"),os=Symbol("v-click-clicks-elements"),xa=Symbol("v-click-clicks-order-map"),ho=Symbol("v-click-clicks-disabled"),of=Symbol("slidev-slide-scale"),N=Symbol("slidev-slidev-context"),Av=Symbol("slidev-route"),Sv=Symbol("slidev-slide-context"),es="slidev-vclick-target",Lr="slidev-vclick-hidden",Ev="slidev-vclick-fade",Mr="slidev-vclick-hidden-explicitly",Gs="slidev-vclick-current",il="slidev-vclick-prior",$v=["localhost","127.0.0.1"];let Ov=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function Tv(e){return e=e??[],Array.isArray(e)?e:[e]}function Ca(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Iv(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function Pv(e){return e!=null}function Rv(e,t){return Object.fromEntries(Object.entries(e).map(([s,o])=>t(s,o)).filter(Pv))}const co={theme:"dracula",title:"Brand New Angular",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"JetBrains Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Nunito Sans","JetBrains Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://angular.dev/assets/icons/favicon.ico",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",hightlighter:"shiki",layout:"intro",background:"https://unsplash.com/photos/twukN12EN7c/download?force=true&w=1920",class:"text-center"},Se=co,Mt=Se.aspectRatio??16/9,Dt=Se.canvasWidth??980,$i=Math.ceil(Dt/Mt),Oi=P(()=>Rv(Se.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function lf(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Hn(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const xs=Ve({page:0,clicks:0});let Lv=[],Mv=[];Hn(xs,"$syncUp",!0);Hn(xs,"$syncDown",!0);Hn(xs,"$paused",!1);Hn(xs,"$onSet",e=>Lv.push(e));Hn(xs,"$onPatch",e=>Mv.push(e));lf();Hn(xs,"$patch",async()=>!1);function rf(e,t,s=!1){const o=[];let l=!1,r=!1,a,i;const c=Ve(t);function p(m){o.push(m)}function d(m,h){c[m]!==h&&(clearTimeout(a),l=!0,c[m]=h,a=setTimeout(()=>l=!1,0))}function f(m){l||(clearTimeout(i),r=!0,Object.entries(m).forEach(([h,_])=>{c[h]=_}),i=setTimeout(()=>r=!1,0))}function F(m){let h;s?s&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&f(JSON.parse(b.newValue))}):(h=new BroadcastChannel(m),h.addEventListener("message",b=>f(b.data)));function _(){!s&&h&&!r?h.postMessage(Fe(c)):s&&!r&&window.localStorage.setItem(m,JSON.stringify(c)),l||o.forEach(b=>b(c))}if(he(c,_,{deep:!0,flush:"sync"}),s){const b=window.localStorage.getItem(m);b&&f(JSON.parse(b))}}return{init:F,onPatch:p,patch:d,state:c}}const{init:Dv,onPatch:Bv,patch:Js,state:Dr}=rf(xs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Cs=Ve({});let jv=[],Nv=[];Hn(Cs,"$syncUp",!0);Hn(Cs,"$syncDown",!0);Hn(Cs,"$paused",!1);Hn(Cs,"$onSet",e=>jv.push(e));Hn(Cs,"$onPatch",e=>Nv.push(e));lf();Hn(Cs,"$patch",async()=>!1);const{init:Hv,onPatch:qv,patch:af,state:Vl}=rf(Cs,{},!1),Vv="modulepreload",Uv=function(e){return"/slides-brand-new-angular/"+e},Yc={},Bt=function(t,s,o){if(!s||s.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Uv(r),r in Yc)return;Yc[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const f=l[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":Vv,a||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),a)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function Wv(e,t){let s,o,l;const r=K(!0),a=()=>{r.value=!0,l()};he(e,a,{flush:"sync"});const i=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,p=mi((d,f)=>(o=d,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(F){c==null||c(F)}}));return Object.isExtensible(p)&&(p.trigger=a),p}function wt(e){return er()?(ii(e),!0):!1}function Ge(e){return typeof e=="function"?e():I(e)}function zv(e){if(!Ee(e))return Ve(e);const t=new Proxy({},{get(s,o,l){return I(Reflect.get(e.value,o,l))},set(s,o,l){return Ee(e.value[o])&&!Ee(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(t)}const Yn=typeof window<"u",Xv=e=>typeof e<"u",ka=()=>+Date.now(),hr=()=>{},Kv=Yv();function Yv(){var e;return Yn&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Gv(e,t){function s(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return s}const cf=e=>e();function Jv(e=cf){const t=K(!0);function s(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&e(...r)};return{isActive:Xn(t),pause:s,resume:o,eventFilter:l}}function Zv(e,t){var s;if(typeof e=="number")return e+t;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=e.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?e:r+l}function pf(...e){if(e.length!==1)return ph(...e);const t=e[0];return typeof t=="function"?Xn(mi(()=>({get:t,set:hr}))):K(t)}var Qv=Object.defineProperty,e8=Object.defineProperties,n8=Object.getOwnPropertyDescriptors,Gc=Object.getOwnPropertySymbols,t8=Object.prototype.hasOwnProperty,s8=Object.prototype.propertyIsEnumerable,Jc=(e,t,s)=>t in e?Qv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o8=(e,t)=>{for(var s in t||(t={}))t8.call(t,s)&&Jc(e,s,t[s]);if(Gc)for(var s of Gc(t))s8.call(t,s)&&Jc(e,s,t[s]);return e},l8=(e,t)=>e8(e,n8(t));function r8(e){if(!Ee(e))return ah(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=mi(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[s]=o,e.value=l}else{const l=l8(o8({},e.value),{[s]:o});Object.setPrototypeOf(l,e.value),e.value=l}}}));return t}function uf(e,t=!0){bn()?Ct(e):t?e():nn(e)}function a8(e,t=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=K(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function p(){const d=Ge(t);d<=0||(a.value=!0,l&&e(),i(),r=setInterval(e,d))}if(o&&Yn&&p(),Ee(t)||typeof t=="function"){const d=he(t,()=>{a.value&&Yn&&p()});wt(d)}return wt(c),{isActive:a,pause:c,resume:p}}function i8(e,t,s={}){const{immediate:o=!0}=s,l=K(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...p){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...p)},Ge(t))}return o&&(l.value=!0,Yn&&c()),wt(i),{isPending:Xn(l),start:c,stop:i}}function df(e=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,l=Ee(e),r=K(e);function a(i){if(arguments.length)return r.value=i,r.value;{const c=Ge(s);return r.value=r.value===c?Ge(o):c,r.value}}return l?a:[r,a]}var Zc=Object.getOwnPropertySymbols,c8=Object.prototype.hasOwnProperty,p8=Object.prototype.propertyIsEnumerable,u8=(e,t)=>{var s={};for(var o in e)c8.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Zc)for(var o of Zc(e))t.indexOf(o)<0&&p8.call(e,o)&&(s[o]=e[o]);return s};function d8(e,t,s={}){const o=s,{eventFilter:l=cf}=o,r=u8(o,["eventFilter"]);return he(e,Gv(l,t),r)}var f8=Object.defineProperty,F8=Object.defineProperties,m8=Object.getOwnPropertyDescriptors,Ul=Object.getOwnPropertySymbols,ff=Object.prototype.hasOwnProperty,Ff=Object.prototype.propertyIsEnumerable,Qc=(e,t,s)=>t in e?f8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h8=(e,t)=>{for(var s in t||(t={}))ff.call(t,s)&&Qc(e,s,t[s]);if(Ul)for(var s of Ul(t))Ff.call(t,s)&&Qc(e,s,t[s]);return e},y8=(e,t)=>F8(e,m8(t)),g8=(e,t)=>{var s={};for(var o in e)ff.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ul)for(var o of Ul(e))t.indexOf(o)<0&&Ff.call(e,o)&&(s[o]=e[o]);return s};function v8(e,t,s={}){const o=s,{eventFilter:l}=o,r=g8(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:p}=Jv(l);return{stop:d8(e,t,y8(h8({},r),{eventFilter:a})),pause:i,resume:c,isActive:p}}function Dn(e){var t;const s=Ge(e);return(t=s==null?void 0:s.$el)!=null?t:s}const sn=Yn?window:void 0,mf=Yn?window.document:void 0,_8=Yn?window.navigator:void 0;function Re(...e){let t,s,o,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,o,l]=e,t=sn):[t,s,o,l]=e,!t)return hr;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,f,F,m)=>(d.addEventListener(f,F,m),()=>d.removeEventListener(f,F,m)),c=he(()=>[Dn(t),Ge(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(F=>o.map(m=>i(d,F,m,f))))},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return wt(p),p}let ep=!1;function w8(e,t,s={}){const{window:o=sn,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;Kv&&!ep&&(ep=!0,Array.from(o.document.body.children).forEach(F=>F.addEventListener("click",hr)));let i=!0;const c=F=>l.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(h=>h===F.target||F.composedPath().includes(h));{const h=Dn(m);return h&&(F.target===h||F.composedPath().includes(h))}}),d=[Re(o,"click",F=>{const m=Dn(e);if(!(!m||m===F.target||F.composedPath().includes(m))){if(F.detail===0&&(i=!c(F)),!i){i=!0;return}t(F)}},{passive:!0,capture:r}),Re(o,"pointerdown",F=>{const m=Dn(e);m&&(i=!F.composedPath().includes(m)&&!c(F))},{passive:!0}),a&&Re(o,"blur",F=>{var m;const h=Dn(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&t(F)})].filter(Boolean);return()=>d.forEach(F=>F())}function b8(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function x8(...e){let t,s,o={};e.length===3?(t=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,s=e[0],o=e[1]):(t=e[0],s=e[1]):(t=!0,s=e[0]);const{target:l=sn,eventName:r="keydown",passive:a=!1,dedupe:i=!1}=o,c=b8(t);return Re(l,r,d=>{d.repeat&&Ge(i)||c(d)&&s(d)},a)}function C8(e={}){var t;const{window:s=sn}=e,o=(t=e.document)!=null?t:s==null?void 0:s.document,l=Wv(()=>null,()=>o==null?void 0:o.activeElement);return s&&(Re(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Re(s,"focus",l.trigger,!0)),l}function k8(){const e=K(!1);return bn()&&Ct(()=>{e.value=!0}),e}function yr(e){const t=k8();return P(()=>(t.value,!!e()))}function A8(e,t={}){const{immediate:s=!0,window:o=sn}=t,l=K(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const f=d-r;e({delta:f,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function p(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),wt(p),{isActive:Xn(l),pause:p,resume:c}}function ls(e,t={}){const{window:s=sn}=t,o=yr(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=K(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(pf(e).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",i):l.addListener(i)))};return bs(i),wt(()=>a()),r}const S8={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function E8(e,t={}){function s(i,c){let p=e[i];return c!=null&&(p=Zv(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=sn}=t;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>ls(`(min-width: ${s(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Object.assign(a,{greater(i){return ls(`(min-width: ${s(i,.1)})`,t)},greaterOrEqual:r,smaller(i){return ls(`(max-width: ${s(i,-.1)})`,t)},smallerOrEqual(i){return ls(`(max-width: ${s(i)})`,t)},between(i,c){return ls(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)},current(){const i=Object.keys(e).map(c=>[c,r(c)]);return P(()=>i.filter(([,c])=>c.value).map(([c])=>c))}})}function $8(e={}){const{navigator:t=_8,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,a=["copy","cut"],i=yr(()=>t&&"clipboard"in t),c=P(()=>i.value||r),p=K(""),d=K(!1),f=i8(()=>d.value=!1,l);function F(){i.value?t.clipboard.readText().then(b=>{p.value=b}):p.value=_()}if(c.value&&s)for(const b of a)Re(b,F);async function m(b=Ge(o)){c.value&&b!=null&&(i.value?await t.clipboard.writeText(b):h(b),p.value=b,d.value=!0,f.start())}function h(b){const w=document.createElement("textarea");w.value=b??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function _(){var b,w,x;return(x=(w=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:w.toString())!=null?x:""}return{isSupported:c,text:p,copied:d,copy:m}}function O8(e){return JSON.parse(JSON.stringify(e))}const cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pl="__vueuse_ssr_handlers__",T8=I8();function I8(){return pl in cl||(cl[pl]=cl[pl]||{}),cl[pl]}function P8(e,t){return T8[e]||t}function R8(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var L8=Object.defineProperty,np=Object.getOwnPropertySymbols,M8=Object.prototype.hasOwnProperty,D8=Object.prototype.propertyIsEnumerable,tp=(e,t,s)=>t in e?L8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,sp=(e,t)=>{for(var s in t||(t={}))M8.call(t,s)&&tp(e,s,t[s]);if(np)for(var s of np(t))D8.call(t,s)&&tp(e,s,t[s]);return e};const B8={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},op="vueuse-storage";function j8(e,t,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:d,window:f=sn,eventFilter:F,onError:m=T=>{console.error(T)}}=o,h=(d?it:K)(t);if(!s)try{s=P8("getDefaultStorage",()=>{var T;return(T=sn)==null?void 0:T.localStorage})()}catch(T){m(T)}if(!s)return h;const _=Ge(t),b=R8(_),w=(l=o.serializer)!=null?l:B8[b],{pause:x,resume:g}=v8(h,()=>S(h.value),{flush:r,deep:a,eventFilter:F});return f&&i&&(Re(f,"storage",B),Re(f,op,$)),B(),h;function S(T){try{if(T==null)s.removeItem(e);else{const U=w.write(T),oe=s.getItem(e);oe!==U&&(s.setItem(e,U),f&&f.dispatchEvent(new CustomEvent(op,{detail:{key:e,oldValue:oe,newValue:U,storageArea:s}})))}}catch(U){m(U)}}function k(T){const U=T?T.newValue:s.getItem(e);if(U==null)return c&&_!==null&&s.setItem(e,w.write(_)),_;if(!T&&p){const oe=w.read(U);return typeof p=="function"?p(oe,_):b==="object"&&!Array.isArray(oe)?sp(sp({},_),oe):oe}else return typeof U!="string"?U:w.read(U)}function $(T){B(T.detail)}function B(T){if(!(T&&T.storageArea!==s)){if(T&&T.key==null){h.value=_;return}if(!(T&&T.key!==e)){x();try{h.value=k(T)}catch(U){m(U)}finally{T?nn(g):g()}}}}}function N8(e){return ls("(prefers-color-scheme: dark)",e)}var H8=Object.defineProperty,q8=Object.defineProperties,V8=Object.getOwnPropertyDescriptors,lp=Object.getOwnPropertySymbols,U8=Object.prototype.hasOwnProperty,W8=Object.prototype.propertyIsEnumerable,rp=(e,t,s)=>t in e?H8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,z8=(e,t)=>{for(var s in t||(t={}))U8.call(t,s)&&rp(e,s,t[s]);if(lp)for(var s of lp(t))W8.call(t,s)&&rp(e,s,t[s]);return e},X8=(e,t)=>q8(e,V8(t));function fT(e,t={}){var s,o;const{pointerTypes:l,preventDefault:r,stopPropagation:a,exact:i,onMove:c,onEnd:p,onStart:d,initialValue:f,axis:F="both",draggingElement:m=sn,handle:h=e}=t,_=K((s=Ge(f))!=null?s:{x:0,y:0}),b=K(),w=$=>l?l.includes($.pointerType):!0,x=$=>{Ge(r)&&$.preventDefault(),Ge(a)&&$.stopPropagation()},g=$=>{if(!w($)||Ge(i)&&$.target!==Ge(e))return;const B=Ge(e).getBoundingClientRect(),T={x:$.clientX-B.left,y:$.clientY-B.top};(d==null?void 0:d(T,$))!==!1&&(b.value=T,x($))},S=$=>{if(!w($)||!b.value)return;let{x:B,y:T}=_.value;(F==="x"||F==="both")&&(B=$.clientX-b.value.x),(F==="y"||F==="both")&&(T=$.clientY-b.value.y),_.value={x:B,y:T},c==null||c(_.value,$),x($)},k=$=>{w($)&&b.value&&(b.value=void 0,p==null||p(_.value,$),x($))};if(Yn){const $={capture:(o=t.capture)!=null?o:!0};Re(h,"pointerdown",g,$),Re(m,"pointermove",S,$),Re(m,"pointerup",k,$)}return X8(z8({},r8(_)),{position:_,isDragging:P(()=>!!b.value),style:P(()=>`left:${_.value.x}px;top:${_.value.y}px;`)})}var ap=Object.getOwnPropertySymbols,K8=Object.prototype.hasOwnProperty,Y8=Object.prototype.propertyIsEnumerable,G8=(e,t)=>{var s={};for(var o in e)K8.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&ap)for(var o of ap(e))t.indexOf(o)<0&&Y8.call(e,o)&&(s[o]=e[o]);return s};function J8(e,t,s={}){const o=s,{window:l=sn}=o,r=G8(o,["window"]);let a;const i=yr(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},p=P(()=>Array.isArray(e)?e.map(F=>Dn(F)):[Dn(e)]),d=he(p,F=>{if(c(),i.value&&l){a=new ResizeObserver(t);for(const m of F)m&&a.observe(m,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{c(),d()};return wt(f),{isSupported:i,stop:f}}function Z8(e,t={width:0,height:0},s={}){const{window:o=sn,box:l="content-box"}=s,r=P(()=>{var c,p;return(p=(c=Dn(e))==null?void 0:c.namespaceURI)==null?void 0:p.includes("svg")}),a=K(t.width),i=K(t.height);return J8(e,([c])=>{const p=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=Dn(e);if(d){const f=o.getComputedStyle(d);a.value=parseFloat(f.width),i.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];a.value=d.reduce((f,{inlineSize:F})=>f+F,0),i.value=d.reduce((f,{blockSize:F})=>f+F,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),he(()=>Dn(e),c=>{a.value=c?t.width:0,i.value=c?t.height:0}),{width:a,height:i}}const ip=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Q8(e,t={}){const{document:s=mf,autoExit:o=!1}=t,l=P(()=>{var w;return(w=Dn(e))!=null?w:s==null?void 0:s.querySelector("html")}),r=K(!1),a=P(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(w=>s&&w in s||l.value&&w in l.value)),i=P(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(w=>s&&w in s||l.value&&w in l.value)),c=P(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(w=>s&&w in s||l.value&&w in l.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(w=>s&&w in s),d=yr(()=>l.value&&s&&a.value!==void 0&&i.value!==void 0&&c.value!==void 0),f=()=>p?(s==null?void 0:s[p])===l.value:!1,F=()=>{if(c.value){if(s&&s[c.value]!=null)return s[c.value];{const w=l.value;if((w==null?void 0:w[c.value])!=null)return!!w[c.value]}}return!1};async function m(){if(d.value){if(i.value)if((s==null?void 0:s[i.value])!=null)await s[i.value]();else{const w=l.value;(w==null?void 0:w[i.value])!=null&&await w[i.value]()}r.value=!1}}async function h(){if(!d.value)return;F()&&await m();const w=l.value;a.value&&(w==null?void 0:w[a.value])!=null&&(await w[a.value](),r.value=!0)}async function _(){await(r.value?m():h())}const b=()=>{const w=F();(!w||w&&f())&&(r.value=w)};return Re(s,ip,b,!1),Re(()=>Dn(l),ip,b,!1),o&&wt(m),{isSupported:d,isFullscreen:r,enter:h,exit:m,toggle:_}}function Gn(e,t,s={}){const{window:o=sn}=s;return j8(e,t,o==null?void 0:o.localStorage,s)}const e_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function n_(e={}){const{reactive:t=!1,target:s=sn,aliasMap:o=e_,passive:l=!0,onEventFired:r=hr}=e,a=Ve(new Set),i={toJSON(){return{}},current:a},c=t?Ve(i):i,p=new Set,d=new Set;function f(_,b){_ in c&&(t?c[_]=b:c[_].value=b)}function F(){a.clear();for(const _ of d)f(_,!1)}function m(_,b){var w,x;const g=(w=_.key)==null?void 0:w.toLowerCase(),k=[(x=_.code)==null?void 0:x.toLowerCase(),g].filter(Boolean);g&&(b?a.add(g):a.delete(g));for(const $ of k)d.add($),f($,b);g==="meta"&&!b?(p.forEach($=>{a.delete($),f($,!1)}),p.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&b&&[...a,...k].forEach($=>p.add($))}Re(s,"keydown",_=>(m(_,!0),r(_)),{passive:l}),Re(s,"keyup",_=>(m(_,!1),r(_)),{passive:l}),Re("blur",F,{passive:!0}),Re("focus",F,{passive:!0});const h=new Proxy(c,{get(_,b,w){if(typeof b!="string")return Reflect.get(_,b,w);if(b=b.toLowerCase(),b in o&&(b=o[b]),!(b in c))if(/[+_-]/.test(b)){const g=b.split(/[+_-]/g).map(S=>S.trim());c[b]=P(()=>g.every(S=>Ge(h[S])))}else c[b]=K(!1);const x=Reflect.get(_,b,w);return t?Ge(x):x}});return h}const t_={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function FT(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=sn,target:a=r,eventFilter:i}=e,c=K(l.x),p=K(l.y),d=K(null),f=typeof t=="function"?t:t_[t],F=w=>{const x=f(w);x&&([c.value,p.value]=x,d.value="mouse")},m=w=>{if(w.touches.length>0){const x=f(w.touches[0]);x&&([c.value,p.value]=x,d.value="touch")}},h=()=>{c.value=l.x,p.value=l.y},_=i?w=>i(()=>F(w),{}):w=>F(w),b=i?w=>i(()=>m(w),{}):w=>m(w);return a&&(Re(a,"mousemove",_,{passive:!0}),Re(a,"dragover",_,{passive:!0}),s&&t!=="movement"&&(Re(a,"touchstart",b,{passive:!0}),Re(a,"touchmove",b,{passive:!0}),o&&Re(a,"touchend",h,{passive:!0}))),{x:c,y:p,sourceType:d}}function s_(e,t={}){const s=pf(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=t,i=Ve({x:0,y:0}),c=($,B)=>{i.x=$,i.y=B},p=Ve({x:0,y:0}),d=($,B)=>{p.x=$,p.y=B},f=P(()=>i.x-p.x),F=P(()=>i.y-p.y),{max:m,abs:h}=Math,_=P(()=>m(h(f.value),h(F.value))>=o),b=K(!1),w=K(!1),x=P(()=>_.value?h(f.value)>h(F.value)?f.value>0?"left":"right":F.value>0?"up":"down":"none"),g=$=>{var B,T,U;const oe=$.buttons===0,pe=$.buttons===1;return(U=(T=(B=t.pointerTypes)==null?void 0:B.includes($.pointerType))!=null?T:oe||pe)!=null?U:!0},S=[Re(e,"pointerdown",$=>{var B,T;if(!g($))return;w.value=!0,(T=(B=s.value)==null?void 0:B.style)==null||T.setProperty("touch-action","none");const U=$.target;U==null||U.setPointerCapture($.pointerId);const{clientX:oe,clientY:pe}=$;c(oe,pe),d(oe,pe),a==null||a($)}),Re(e,"pointermove",$=>{if(!g($)||!w.value)return;const{clientX:B,clientY:T}=$;d(B,T),!b.value&&_.value&&(b.value=!0),b.value&&(l==null||l($))}),Re(e,"pointerup",$=>{var B,T;g($)&&(b.value&&(r==null||r($,x.value)),w.value=!1,b.value=!1,(T=(B=s.value)==null?void 0:B.style)==null||T.setProperty("touch-action","initial"))})],k=()=>S.forEach($=>$());return{isSwiping:Xn(b),direction:Xn(x),posStart:Xn(i),posEnd:Xn(p),distanceX:f,distanceY:F,stop:k}}let o_=0;function mT(e,t={}){const s=K(!1),{document:o=mf,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++o_}`}=t,i=K(e);let c=()=>{};const p=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),o.head.appendChild(f)),!s.value&&(c=he(i,F=>{f.textContent=F},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&uf(p),r||wt(d),{id:a,css:i,unload:d,load:p,isLoaded:Xn(s)}}var l_=Object.defineProperty,cp=Object.getOwnPropertySymbols,r_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,pp=(e,t,s)=>t in e?l_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i_=(e,t)=>{for(var s in t||(t={}))r_.call(t,s)&&pp(e,s,t[s]);if(cp)for(var s of cp(t))a_.call(t,s)&&pp(e,s,t[s]);return e};function hT(e={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,a=K(ka()+s),i=()=>a.value=ka()+s,c=r?()=>{i(),r(a.value)}:i,p=l==="requestAnimationFrame"?A8(c,{immediate:o}):a8(c,l,{immediate:o});return t?i_({timestamp:a},p):a}function st(e,t,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:p,deep:d=!1,defaultValue:f,shouldEmit:F}=o,m=bn(),h=s||(m==null?void 0:m.emit)||((l=m==null?void 0:m.$emit)==null?void 0:l.bind(m))||((a=(r=m==null?void 0:m.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(m==null?void 0:m.proxy));let _=p;t||(t="modelValue"),_=p||_||`update:${t.toString()}`;const b=g=>i?typeof i=="function"?i(g):O8(g):g,w=()=>Xv(e[t])?b(e[t]):f,x=g=>{F?F(g)&&h(_,g):h(_,g)};if(c){const g=w(),S=K(g);return he(()=>e[t],k=>S.value=b(k)),he(S,k=>{(k!==e[t]||d)&&x(k)},{deep:d}),S}else return P({get(){return w()},set(g){x(g)}})}function yT({window:e=sn}={}){if(!e)return K(!1);const t=K(e.document.hasFocus());return Re(e,"blur",()=>{t.value=!1}),Re(e,"focus",()=>{t.value=!0}),t}function c_(e={}){const{window:t=sn,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,a=K(s),i=K(o),c=()=>{t&&(r?(a.value=t.innerWidth,i.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};if(c(),uf(c),Re("resize",c,{passive:!0}),l){const p=ls("(orientation: portrait)");he(p,()=>c())}return{width:a,height:i}}function p_(){return hf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function hf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const u_=typeof Proxy=="function",d_="devtools-plugin:setup",f_="plugin:settings:set";let Ss,Aa;function F_(){var e;return Ss!==void 0||(typeof window<"u"&&window.performance?(Ss=!0,Aa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Ss=!0,Aa=global.perf_hooks.performance):Ss=!1),Ss}function m_(){return F_()?Aa.now():Date.now()}class h_{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const a in t.settings){const i=t.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return m_()}},s&&s.on(f_,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(p=>{this.targetQueue.push({method:i,args:c,resolve:p})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function y_(e,t){const s=e,o=hf(),l=p_(),r=u_&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(d_,e,t);else{const a=r?new h_(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ht=typeof window<"u";function g_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function Br(e,t){const s={};for(const o in t){const l=t[o];s[o]=Tn(l)?l.map(e):e(l)}return s}const yo=()=>{},Tn=Array.isArray;function Ae(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const v_=/\/$/,__=e=>e.replace(v_,"");function jr(e,t,s="/"){let o,l={},r="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),r=t.slice(c+1,i>-1?i:t.length),l=e(r)),i>-1&&(o=o||t.slice(0,i),a=t.slice(i,t.length)),o=x_(o??t,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function w_(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function up(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function dp(e,t,s){const o=t.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Ut(t.matched[o],s.matched[l])&&yf(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Ut(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function yf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!b_(e[s],t[s]))return!1;return!0}function b_(e,t){return Tn(e)?fp(e,t):Tn(t)?fp(t,e):e===t}function fp(e,t){return Tn(t)?e.length===t.length&&e.every((s,o)=>s===t[o]):e.length===1&&e[0]===t}function x_(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ae(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const s=t.split("/"),o=e.split("/"),l=o[o.length-1];(l===".."||l===".")&&o.push("");let r=s.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Io;(function(e){e.pop="pop",e.push="push"})(Io||(Io={}));var go;(function(e){e.back="back",e.forward="forward",e.unknown=""})(go||(go={}));function C_(e){if(!e)if(ht){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),__(e)}const k_=/^[^#]+#/;function A_(e,t){return e.replace(k_,"#")+t}function S_(e,t){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function E_(e){let t;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){Ae(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ae(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){Ae(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=S_(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Fp(e,t){return(history.state?history.state.position-t:-1)+e}const Sa=new Map;function $_(e,t){Sa.set(e,t)}function O_(e){const t=Sa.get(e);return Sa.delete(e),t}let T_=()=>location.protocol+"//"+location.host;function gf(e,t){const{pathname:s,search:o,hash:l}=t,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),up(c,"")}return up(s,e)+o+l}function I_(e,t,s,o){let l=[],r=[],a=null;const i=({state:F})=>{const m=gf(e,location),h=s.value,_=t.value;let b=0;if(F){if(s.value=m,t.value=F,a&&a===h){a=null;return}b=_?F.position-_.position:0}else o(m);l.forEach(w=>{w(s.value,h,{delta:b,type:Io.pop,direction:b?b>0?go.forward:go.back:go.unknown})})};function c(){a=s.value}function p(F){l.push(F);const m=()=>{const h=l.indexOf(F);h>-1&&l.splice(h,1)};return r.push(m),m}function d(){const{history:F}=window;F.state&&F.replaceState(Ie({},F.state,{scroll:gr()}),"")}function f(){for(const F of r)F();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:p,destroy:f}}function mp(e,t,s,o=!1,l=!1){return{back:e,current:t,forward:s,replaced:o,position:window.history.length,scroll:l?gr():null}}function P_(e){const{history:t,location:s}=window,o={value:gf(e,s)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,p,d){const f=e.indexOf("#"),F=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:T_()+e+c;try{t[d?"replaceState":"pushState"](p,"",F),l.value=p}catch(m){Ae("Error with push/replace State",m),s[d?"replace":"assign"](F)}}function a(c,p){const d=Ie({},t.state,mp(l.value.back,c,l.value.forward,!0),p,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,p){const d=Ie({},l.value,t.state,{forward:c,scroll:gr()});t.state||Ae(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Ie({},mp(o.value,c,null),{position:d.position+1},p);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function R_(e){e=C_(e);const t=P_(e),s=I_(e,t.state,t.location,t.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Ie({location:"",base:e,go:o,createHref:A_.bind(null,e)},t,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function L_(e){return typeof e=="string"||e&&typeof e=="object"}function vf(e){return typeof e=="string"||typeof e=="symbol"}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_f=Symbol("navigation failure");var hp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(hp||(hp={}));const M_={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${B_(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Bs(e,t){return Ie(new Error(M_[e](t)),{type:e,[_f]:!0},t)}function ut(e,t){return e instanceof Error&&_f in e&&(t==null||!!(e.type&t))}const D_=["params","query","hash"];function B_(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const s of D_)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}const yp="[^/]+?",j_={sensitive:!1,strict:!1,start:!0,end:!0},N_=/[.+*?^${}()[\]/\\]/g;function H_(e,t){const s=Ie({},j_,t),o=[];let l=s.start?"^":"";const r=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(l+="/");for(let f=0;f<p.length;f++){const F=p[f];let m=40+(s.sensitive?.25:0);if(F.type===0)f||(l+="/"),l+=F.value.replace(N_,"\\$&"),m+=40;else if(F.type===1){const{value:h,repeatable:_,optional:b,regexp:w}=F;r.push({name:h,repeatable:_,optional:b});const x=w||yp;if(x!==yp){m+=10;try{new RegExp(`(${x})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${h}" (${x}): `+S.message)}}let g=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(g=b&&p.length<2?`(?:/${g})`:"/"+g),b&&(g+="?"),l+=g,m+=20,b&&(m+=-8),_&&(m+=-20),x===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(p){const d=p.match(a),f={};if(!d)return null;for(let F=1;F<d.length;F++){const m=d[F]||"",h=r[F-1];f[h.name]=m&&h.repeatable?m.split("/"):m}return f}function c(p){let d="",f=!1;for(const F of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of F)if(m.type===0)d+=m.value;else if(m.type===1){const{value:h,repeatable:_,optional:b}=m,w=h in p?p[h]:"";if(Tn(w)&&!_)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const x=Tn(w)?w.join("/"):w;if(!x)if(b)F.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);d+=x}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function q_(e,t){let s=0;for(;s<e.length&&s<t.length;){const o=t[s]-e[s];if(o)return o;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function V_(e,t){let s=0;const o=e.score,l=t.score;for(;s<o.length&&s<l.length;){const r=q_(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(gp(o))return 1;if(gp(l))return-1}return l.length-o.length}function gp(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const U_={type:0,value:""},W_=/[a-zA-Z0-9_]/;function z_(e){if(!e)return[[]];if(e==="/")return[[U_]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(m){throw new Error(`ERR (${s})/"${p}": ${m}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,p="",d="";function f(){p&&(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function F(){p+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(p&&f(),a()):c===":"?(f(),s=1):F();break;case 4:F(),s=o;break;case 1:c==="("?s=2:W_.test(c)?F():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),a(),l}function X_(e,t,s){const o=H_(z_(e.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Ae(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Ie(o,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function K_(e,t){const s=[],o=new Map;t=wp({strict:!1,end:!0,sensitive:!1},t);function l(d){return o.get(d)}function r(d,f,F){const m=!F,h=Y_(d);Q_(h,f),h.aliasOf=F&&F.record;const _=wp(t,d),b=[h];if("alias"in d){const g=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of g)b.push(Ie({},h,{components:F?F.record.components:h.components,path:S,aliasOf:F?F.record:h}))}let w,x;for(const g of b){const{path:S}=g;if(f&&S[0]!=="/"){const k=f.record.path,$=k[k.length-1]==="/"?"":"/";g.path=f.record.path+(S&&$+S)}if(g.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=X_(g,f,_),f&&S[0]==="/"&&e1(w,f),F?(F.alias.push(w),Z_(F,w)):(x=x||w,x!==w&&x.alias.push(w),m&&d.name&&!_p(w)&&a(d.name)),h.children){const k=h.children;for(let $=0;$<k.length;$++)r(k[$],w,F&&F.children[$])}F=F||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return x?()=>{a(x)}:yo}function a(d){if(vf(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&V_(d,s[f])>=0&&(d.record.path!==s[f].record.path||!wf(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!_p(d)&&o.set(d.record.name,d)}function p(d,f){let F,m={},h,_;if("name"in d&&d.name){if(F=o.get(d.name),!F)throw Bs(1,{location:d});{const x=Object.keys(d.params||{}).filter(g=>!F.keys.find(S=>S.name===g));x.length&&Ae(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=F.record.name,m=Ie(vp(f.params,F.keys.filter(x=>!x.optional).map(x=>x.name)),d.params&&vp(d.params,F.keys.map(x=>x.name))),h=F.stringify(m)}else if("path"in d)h=d.path,h.startsWith("/")||Ae(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),F=s.find(x=>x.re.test(h)),F&&(m=F.parse(h),_=F.record.name);else{if(F=f.name?o.get(f.name):s.find(x=>x.re.test(f.path)),!F)throw Bs(1,{location:d,currentLocation:f});_=F.record.name,m=Ie({},f.params,d.params),h=F.stringify(m)}const b=[];let w=F;for(;w;)b.unshift(w.record),w=w.parent;return{name:_,path:h,params:m,matched:b,meta:J_(b)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:p,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function vp(e,t){const s={};for(const o of t)o in e&&(s[o]=e[o]);return s}function Y_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:G_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function G_(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const o in e.components)t[o]=typeof s=="boolean"?s:s[o];return t}function _p(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function J_(e){return e.reduce((t,s)=>Ie(t,s.meta),{})}function wp(e,t){const s={};for(const o in e)s[o]=o in t?t[o]:e[o];return s}function Ea(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Z_(e,t){for(const s of e.keys)if(!s.optional&&!t.keys.find(Ea.bind(null,s)))return Ae(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!e.keys.find(Ea.bind(null,s)))return Ae(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function Q_(e,t){t&&t.record.name&&!e.name&&!e.path&&Ae(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function e1(e,t){for(const s of t.keys)if(!e.keys.find(Ea.bind(null,s)))return Ae(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function wf(e,t){return t.children.some(s=>s===e||wf(e,s))}const bf=/#/g,n1=/&/g,t1=/\//g,s1=/=/g,o1=/\?/g,xf=/\+/g,l1=/%5B/g,r1=/%5D/g,Cf=/%5E/g,a1=/%60/g,kf=/%7B/g,i1=/%7C/g,Af=/%7D/g,c1=/%20/g;function Ti(e){return encodeURI(""+e).replace(i1,"|").replace(l1,"[").replace(r1,"]")}function p1(e){return Ti(e).replace(kf,"{").replace(Af,"}").replace(Cf,"^")}function $a(e){return Ti(e).replace(xf,"%2B").replace(c1,"+").replace(bf,"%23").replace(n1,"%26").replace(a1,"`").replace(kf,"{").replace(Af,"}").replace(Cf,"^")}function u1(e){return $a(e).replace(s1,"%3D")}function d1(e){return Ti(e).replace(bf,"%23").replace(o1,"%3F")}function f1(e){return e==null?"":d1(e).replace(t1,"%2F")}function Po(e){try{return decodeURIComponent(""+e)}catch{Ae(`Error decoding "${e}". Using original value`)}return""+e}function F1(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(xf," "),a=r.indexOf("="),i=Po(a<0?r:r.slice(0,a)),c=a<0?null:Po(r.slice(a+1));if(i in t){let p=t[i];Tn(p)||(p=t[i]=[p]),p.push(c)}else t[i]=c}return t}function bp(e){let t="";for(let s in e){const o=e[s];if(s=u1(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(Tn(o)?o.map(r=>r&&$a(r)):[o&&$a(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function m1(e){const t={};for(const s in e){const o=e[s];o!==void 0&&(t[s]=Tn(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const h1=Symbol("router view location matched"),xp=Symbol("router view depth"),Ii=Symbol("router"),Sf=Symbol("route location"),Oa=Symbol("router view location");function Zs(){let e=[];function t(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function Tt(e,t,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Bs(4,{from:s,to:t})):f instanceof Error?i(f):L_(f)?i(Bs(2,{from:t,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},p=e.call(o&&o.instances[l],t,s,y1(c,t,s));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(F=>c._called?F:(Ae(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!c._called){Ae(f),i(new Error("Invalid navigation guard"));return}}d.catch(f=>i(f))})}function y1(e,t,s){let o=0;return function(){o++===1&&Ae(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Nr(e,t,s,o){const l=[];for(const r of e){!r.components&&!r.children.length&&Ae(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Ae(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Ae(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Ae(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(g1(i)){const p=(i.__vccOpts||i)[t];p&&l.push(Tt(p,s,o,r,a))}else{let c=i();"catch"in c||(Ae(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=g_(p)?p.default:p;r.components[a]=d;const F=(d.__vccOpts||d)[t];return F&&Tt(F,s,o,r,a)()}))}}}return l}function g1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cp(e){const t=M(Ii),s=M(Sf),o=P(()=>t.resolve(I(e.to))),l=P(()=>{const{matched:c}=o.value,{length:p}=c,d=c[p-1],f=s.matched;if(!d||!f.length)return-1;const F=f.findIndex(Ut.bind(null,d));if(F>-1)return F;const m=kp(c[p-2]);return p>1&&kp(d)===m&&f[f.length-1].path!==m?f.findIndex(Ut.bind(null,c[p-2])):F}),r=P(()=>l.value>-1&&b1(s.params,o.value.params)),a=P(()=>l.value>-1&&l.value===s.matched.length-1&&yf(s.params,o.value.params));function i(c={}){return w1(c)?t[I(e.replace)?"replace":"push"](I(e.to)).catch(yo):Promise.resolve()}if(ht){const c=bn();if(c){const p={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(p),bs(()=>{p.route=o.value,p.isActive=r.value,p.isExactActive=a.value},{flush:"post"})}}return{route:o,href:P(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const v1=Oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cp,setup(e,{slots:t}){const s=Ve(Cp(e)),{options:o}=M(Ii),l=P(()=>({[Ap(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Ap(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return e.custom?r:Qe("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),_1=v1;function w1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function b1(e,t){for(const s in t){const o=t[s],l=e[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Tn(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function kp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ap=(e,t,s)=>e??t??s,x1=Oe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){k1();const o=M(Oa),l=P(()=>e.route||o.value),r=M(xp,0),a=P(()=>{let p=I(r);const{matched:d}=l.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),i=P(()=>l.value.matched[a.value]);En(xp,P(()=>a.value+1)),En(h1,i),En(Oa,l);const c=K();return he(()=>[c.value,i.value,e.name],([p,d,f],[F,m,h])=>{d&&(d.instances[f]=p,m&&m!==d&&p&&p===F&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),p&&d&&(!m||!Ut(d,m)||!F)&&(d.enterCallbacks[f]||[]).forEach(_=>_(p))},{flush:"post"}),()=>{const p=l.value,d=e.name,f=i.value,F=f&&f.components[d];if(!F)return Sp(s.default,{Component:F,route:p});const m=f.props[d],h=m?m===!0?p.params:typeof m=="function"?m(p):m:null,b=Qe(F,Ie({},h,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(ht&&b.ref){const w={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Tn(b.ref)?b.ref.map(g=>g.i):[b.ref.i]).forEach(g=>{g.__vrv_devtools=w})}return Sp(s.default,{Component:b,route:p})||b}}});function Sp(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const C1=x1;function k1(){const e=bn(),t=e.parent&&e.parent.type.name,s=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof s=="object"&&s.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";Ae(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Qs(e,t){const s=Ie({},e,{matched:e.matched.map(o=>R1(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:s}}}function ul(e){return{_custom:{display:e}}}let A1=0;function S1(e,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=A1++;y_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Qs(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const F=f.__vrv_devtools;d.tags.push({label:(F.name?`${F.name.toString()}: `:"")+F.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Ef})}Tn(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(F=>{let m=Tf,h="";F.isExactActive?(m=Of,h="This is exactly active"):F.isActive&&(m=$f,h="This link is active"),d.tags.push({label:F.route.path,textColor:0,tooltip:h,backgroundColor:m})}))}),he(t.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((d,f)=>{const F={guard:ul("beforeEach"),from:Qs(f,"Current Location during this navigation"),to:Qs(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:F,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,F)=>{const m={guard:ul("afterEach")};F?(m.failure={_custom:{type:Error,readOnly:!0,display:F?F.message:"",tooltip:"Navigation Failure",value:F}},m.status=ul("❌")):m.status=ul("✅"),m.from=Qs(f,"Current Location during this navigation"),m.to=Qs(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:m,logType:F?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!p)return;const d=p;let f=s.getRoutes().filter(F=>!F.parent);f.forEach(Rf),d.filter&&(f=f.filter(F=>Ta(F,d.filter.toLowerCase()))),f.forEach(F=>Pf(F,t.currentRoute.value)),d.rootNodes=f.map(If)}let p;l.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===i){const F=s.getRoutes().find(m=>m.record.__vd_id===d.nodeId);F&&(d.state={options:$1(F)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function E1(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function $1(e){const{record:t}=e,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${E1(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const Ef=15485081,$f=2450411,Of=8702998,O1=2282478,Tf=16486972,T1=6710886;function If(e){const t=[],{record:s}=e;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:O1}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Tf}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Ef}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Of}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:$f}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:T1});let o=s.__vd_id;return o==null&&(o=String(I1++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:e.children.map(If)}}let I1=0;const P1=/^\/(.*)\/([a-z]*)$/;function Pf(e,t){const s=t.matched.length&&Ut(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=t.matched.some(o=>Ut(o,e.record))),e.children.forEach(o=>Pf(o,t))}function Rf(e){e.__vd_match=!1,e.children.forEach(Rf)}function Ta(e,t){const s=String(e.re).match(P1);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return e.children.forEach(a=>Ta(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const l=e.record.path.toLowerCase(),r=Po(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>Ta(a,t))}function R1(e,t){const s={};for(const o in e)t.includes(o)||(s[o]=e[o]);return s}function L1(e){const t=K_(e.routes,e),s=e.parseQuery||F1,o=e.stringifyQuery||bp,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Zs(),a=Zs(),i=Zs(),c=it(St);let p=St;ht&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Br.bind(null,O=>""+O),f=Br.bind(null,f1),F=Br.bind(null,Po);function m(O,J){let Q,ne;return vf(O)?(Q=t.getRecordMatcher(O),ne=J):ne=O,t.addRoute(ne,Q)}function h(O){const J=t.getRecordMatcher(O);J?t.removeRoute(J):Ae(`Cannot remove non-existent route "${String(O)}"`)}function _(){return t.getRoutes().map(O=>O.record)}function b(O){return!!t.getRecordMatcher(O)}function w(O,J){if(J=Ie({},J||c.value),typeof O=="string"){const v=jr(s,O,J.path),A=t.resolve({path:v.path},J),D=l.createHref(v.fullPath);return D.startsWith("//")?Ae(`Location "${O}" resolved to "${D}". A resolved location cannot start with multiple slashes.`):A.matched.length||Ae(`No match found for location with path "${O}"`),Ie(v,A,{params:F(A.params),hash:Po(v.hash),redirectedFrom:void 0,href:D})}let Q;if("path"in O)"params"in O&&!("name"in O)&&Object.keys(O.params).length&&Ae(`Path "${O.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Q=Ie({},O,{path:jr(s,O.path,J.path).path});else{const v=Ie({},O.params);for(const A in v)v[A]==null&&delete v[A];Q=Ie({},O,{params:f(v)}),J.params=f(J.params)}const ne=t.resolve(Q,J),be=O.hash||"";be&&!be.startsWith("#")&&Ae(`A \`hash\` should always start with the character "#". Replace "${be}" with "#${be}".`),ne.params=d(F(ne.params));const De=w_(o,Ie({},O,{hash:p1(be),path:ne.path})),y=l.createHref(De);return y.startsWith("//")?Ae(`Location "${O}" resolved to "${y}". A resolved location cannot start with multiple slashes.`):ne.matched.length||Ae(`No match found for location with path "${"path"in O?O.path:O}"`),Ie({fullPath:De,hash:be,query:o===bp?m1(O.query):O.query||{}},ne,{redirectedFrom:void 0,href:y})}function x(O){return typeof O=="string"?jr(s,O,c.value.path):Ie({},O)}function g(O,J){if(p!==O)return Bs(8,{from:J,to:O})}function S(O){return B(O)}function k(O){return S(Ie(x(O),{replace:!0}))}function $(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let ne=typeof Q=="function"?Q(O):Q;if(typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=x(ne):{path:ne},ne.params={}),!("path"in ne)&&!("name"in ne))throw Ae(`Invalid redirect found:
${JSON.stringify(ne,null,2)}
 when navigating to "${O.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:O.query,hash:O.hash,params:"path"in ne?{}:O.params},ne)}}function B(O,J){const Q=p=w(O),ne=c.value,be=O.state,De=O.force,y=O.replace===!0,v=$(Q);if(v)return B(Ie(x(v),{state:typeof v=="object"?Ie({},be,v.state):be,force:De,replace:y}),J||Q);const A=Q;A.redirectedFrom=J;let D;return!De&&dp(o,ne,Q)&&(D=Bs(16,{to:A,from:ne}),In(ne,ne,!0,!1)),(D?Promise.resolve(D):oe(A,ne)).catch(R=>ut(R)?ut(R,2)?R:Pe(R):ie(R,A,ne)).then(R=>{if(R){if(ut(R,2))return dp(o,w(R.to),A)&&J&&(J._count=J._count?J._count+1:1)>30?(Ae(`Detected a possibly infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${A.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(Ie({replace:y},x(R.to),{state:typeof R.to=="object"?Ie({},be,R.to.state):be,force:De}),J||A)}else R=Y(A,ne,!0,y,be);return pe(A,ne,R),R})}function T(O,J){const Q=g(O,J);return Q?Promise.reject(Q):Promise.resolve()}function U(O){const J=Zn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function oe(O,J){let Q;const[ne,be,De]=M1(O,J);Q=Nr(ne.reverse(),"beforeRouteLeave",O,J);for(const v of ne)v.leaveGuards.forEach(A=>{Q.push(Tt(A,O,J))});const y=T.bind(null,O,J);return Q.push(y),Pn(Q).then(()=>{Q=[];for(const v of r.list())Q.push(Tt(v,O,J));return Q.push(y),Pn(Q)}).then(()=>{Q=Nr(be,"beforeRouteUpdate",O,J);for(const v of be)v.updateGuards.forEach(A=>{Q.push(Tt(A,O,J))});return Q.push(y),Pn(Q)}).then(()=>{Q=[];for(const v of O.matched)if(v.beforeEnter&&!J.matched.includes(v))if(Tn(v.beforeEnter))for(const A of v.beforeEnter)Q.push(Tt(A,O,J));else Q.push(Tt(v.beforeEnter,O,J));return Q.push(y),Pn(Q)}).then(()=>(O.matched.forEach(v=>v.enterCallbacks={}),Q=Nr(De,"beforeRouteEnter",O,J),Q.push(y),Pn(Q))).then(()=>{Q=[];for(const v of a.list())Q.push(Tt(v,O,J));return Q.push(y),Pn(Q)}).catch(v=>ut(v,8)?v:Promise.reject(v))}function pe(O,J,Q){for(const ne of i.list())U(()=>ne(O,J,Q))}function Y(O,J,Q,ne,be){const De=g(O,J);if(De)return De;const y=J===St,v=ht?history.state:{};Q&&(ne||y?l.replace(O.fullPath,Ie({scroll:y&&v&&v.scroll},be)):l.push(O.fullPath,be)),c.value=O,In(O,J,Q,y),Pe()}let me;function ye(){me||(me=l.listen((O,J,Q)=>{if(!Xt.listening)return;const ne=w(O),be=$(ne);if(be){B(Ie(be,{replace:!0}),ne).catch(yo);return}p=ne;const De=c.value;ht&&$_(Fp(De.fullPath,Q.delta),gr()),oe(ne,De).catch(y=>ut(y,12)?y:ut(y,2)?(B(y.to,ne).then(v=>{ut(v,20)&&!Q.delta&&Q.type===Io.pop&&l.go(-1,!1)}).catch(yo),Promise.reject()):(Q.delta&&l.go(-Q.delta,!1),ie(y,ne,De))).then(y=>{y=y||Y(ne,De,!1),y&&(Q.delta&&!ut(y,8)?l.go(-Q.delta,!1):Q.type===Io.pop&&ut(y,20)&&l.go(-1,!1)),pe(ne,De,y)}).catch(yo)}))}let we=Zs(),Me=Zs(),ee;function ie(O,J,Q){Pe(O);const ne=Me.list();return ne.length?ne.forEach(be=>be(O,J,Q)):(Ae("uncaught error during route navigation:"),console.error(O)),Promise.reject(O)}function xe(){return ee&&c.value!==St?Promise.resolve():new Promise((O,J)=>{we.add([O,J])})}function Pe(O){return ee||(ee=!O,ye(),we.list().forEach(([J,Q])=>O?Q(O):J()),we.reset()),O}function In(O,J,Q,ne){const{scrollBehavior:be}=e;if(!ht||!be)return Promise.resolve();const De=!Q&&O_(Fp(O.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return nn().then(()=>be(O,J,De)).then(y=>y&&E_(y)).catch(y=>ie(y,O,J))}const on=O=>l.go(O);let yn;const Zn=new Set,Xt={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,hasRoute:b,getRoutes:_,resolve:w,options:e,push:S,replace:k,go:on,back:()=>on(-1),forward:()=>on(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Me.add,isReady:xe,install(O){const J=this;O.component("RouterLink",_1),O.component("RouterView",C1),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>I(c)}),ht&&!yn&&c.value===St&&(yn=!0,S(l.location).catch(be=>{Ae("Unexpected error when starting the router:",be)}));const Q={};for(const be in St)Q[be]=P(()=>c.value[be]);O.provide(Ii,J),O.provide(Sf,Ve(Q)),O.provide(Oa,c);const ne=O.unmount;Zn.add(O),O.unmount=function(){Zn.delete(O),Zn.size<1&&(p=St,me&&me(),me=null,c.value=St,yn=!1,ee=!1),ne()},ht&&S1(O,J,t)}};function Pn(O){return O.reduce((J,Q)=>J.then(()=>U(Q)),Promise.resolve())}return Xt}function M1(e,t){const s=[],o=[],l=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=t.matched[a];i&&(e.matched.find(p=>Ut(p,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(t.matched.find(p=>Ut(p,c))||l.push(c))}return[s,o,l]}const Hr=K(!1),vo=K(!1),Ts=K(!1),D1=K(!0),Ia=E8({xs:460,...S8}),ys=c_(),Lf=n_(),B1=P(()=>ys.height.value-ys.width.value/Mt>180),Mf=Q8(Yn?document.body:null),jt=C8(),j1=P(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=jt.value)==null?void 0:e.tagName)||"")||((t=jt.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),N1=P(()=>{var e;return["BUTTON","A"].includes(((e=jt.value)==null?void 0:e.tagName)||"")});Gn("slidev-camera","default");Gn("slidev-mic","default");const _l=Gn("slidev-scale",0),dn=Gn("slidev-show-overview",!1),qr=Gn("slidev-presenter-cursor",!0),Ep=Gn("slidev-show-editor",!1);Gn("slidev-editor-width",Yn?window.innerWidth*.4:100);const Df=df(dn);function $p(e,t,s,o=l=>l){return e*o(.5-t*(.5-s))}function H1(e){return[-e[0],-e[1]]}function Wn(e,t){return[e[0]+t[0],e[1]+t[1]]}function Mn(e,t){return[e[0]-t[0],e[1]-t[1]]}function Un(e,t){return[e[0]*t,e[1]*t]}function q1(e,t){return[e[0]/t,e[1]/t]}function eo(e){return[e[1],-e[0]]}function Op(e,t){return e[0]*t[0]+e[1]*t[1]}function V1(e,t){return e[0]===t[0]&&e[1]===t[1]}function U1(e){return Math.hypot(e[0],e[1])}function W1(e){return e[0]*e[0]+e[1]*e[1]}function Tp(e,t){return W1(Mn(e,t))}function Bf(e){return q1(e,U1(e))}function z1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function no(e,t,s){let o=Math.sin(s),l=Math.cos(s),r=e[0]-t[0],a=e[1]-t[1],i=r*l-a*o,c=r*o+a*l;return[i+t[0],c+t[1]]}function Pa(e,t,s){return Wn(e,Un(Mn(t,e),s))}function Ip(e,t,s){return Wn(e,Un(t,s))}var{min:Es,PI:X1}=Math,Pp=.275,to=X1+1e-4;function K1(e,t={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=ee=>ee,start:i={},end:c={},last:p=!1}=t,{cap:d=!0,easing:f=ee=>ee*(2-ee)}=i,{cap:F=!0,easing:m=ee=>--ee*ee*ee+1}=c;if(e.length===0||s<=0)return[];let h=e[e.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(s,h):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(s,h):c.taper,w=Math.pow(s*o,2),x=[],g=[],S=e.slice(0,10).reduce((ee,ie)=>{let xe=ie.pressure;if(r){let Pe=Es(1,ie.distance/s),In=Es(1,1-Pe);xe=Es(1,ee+(In-ee)*(Pe*Pp))}return(ee+xe)/2},e[0].pressure),k=$p(s,l,e[e.length-1].pressure,a),$,B=e[0].vector,T=e[0].point,U=T,oe=T,pe=U,Y=!1;for(let ee=0;ee<e.length;ee++){let{pressure:ie}=e[ee],{point:xe,vector:Pe,distance:In,runningLength:on}=e[ee];if(ee<e.length-1&&h-on<3)continue;if(l){if(r){let ne=Es(1,In/s),be=Es(1,1-ne);ie=Es(1,S+(be-S)*(ne*Pp))}k=$p(s,l,ie,a)}else k=s/2;$===void 0&&($=k);let yn=on<_?f(on/_):1,Zn=h-on<b?m((h-on)/b):1;k=Math.max(.01,k*Math.min(yn,Zn));let Xt=(ee<e.length-1?e[ee+1]:e[ee]).vector,Pn=ee<e.length-1?Op(Pe,Xt):1,O=Op(Pe,B)<0&&!Y,J=Pn!==null&&Pn<0;if(O||J){let ne=Un(eo(B),k);for(let be=1/13,De=0;De<=1;De+=be)oe=no(Mn(xe,ne),xe,to*De),x.push(oe),pe=no(Wn(xe,ne),xe,to*-De),g.push(pe);T=oe,U=pe,J&&(Y=!0);continue}if(Y=!1,ee===e.length-1){let ne=Un(eo(Pe),k);x.push(Mn(xe,ne)),g.push(Wn(xe,ne));continue}let Q=Un(eo(Pa(Xt,Pe,Pn)),k);oe=Mn(xe,Q),(ee<=1||Tp(T,oe)>w)&&(x.push(oe),T=oe),pe=Wn(xe,Q),(ee<=1||Tp(U,pe)>w)&&(g.push(pe),U=pe),S=ie,B=Pe}let me=e[0].point.slice(0,2),ye=e.length>1?e[e.length-1].point.slice(0,2):Wn(e[0].point,[1,1]),we=[],Me=[];if(e.length===1){if(!(_||b)||p){let ee=Ip(me,Bf(eo(Mn(me,ye))),-($||k)),ie=[];for(let xe=1/13,Pe=xe;Pe<=1;Pe+=xe)ie.push(no(ee,me,to*2*Pe));return ie}}else{if(!(_||b&&e.length===1))if(d)for(let ie=1/13,xe=ie;xe<=1;xe+=ie){let Pe=no(g[0],me,to*xe);we.push(Pe)}else{let ie=Mn(x[0],g[0]),xe=Un(ie,.5),Pe=Un(ie,.51);we.push(Mn(me,xe),Mn(me,Pe),Wn(me,Pe),Wn(me,xe))}let ee=eo(H1(e[e.length-1].vector));if(b||_&&e.length===1)Me.push(ye);else if(F){let ie=Ip(ye,ee,k);for(let xe=1/29,Pe=xe;Pe<1;Pe+=xe)Me.push(no(ie,ye,to*3*Pe))}else Me.push(Wn(ye,Un(ee,k)),Wn(ye,Un(ee,k*.99)),Mn(ye,Un(ee,k*.99)),Mn(ye,Un(ee,k)))}return x.concat(Me,g.reverse(),we)}function Y1(e,t={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y:h,pressure:_=.5})=>[m,h,_]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let h=1;h<5;h++)i.push(Pa(i[0],m,h/4))}i.length===1&&(i=[...i,[...Wn(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=c[0],F=i.length-1;for(let m=1;m<i.length;m++){let h=r&&m===F?i[m].slice(0,2):Pa(f.point,i[m],a);if(V1(f.point,h))continue;let _=z1(h,f.point);if(d+=_,m<F&&!p){if(d<l)continue;p=!0}f={point:h,pressure:i[m][2]>=0?i[m][2]:.5,vector:Bf(Mn(f.point,h)),distance:_,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function G1(e,t={}){return K1(Y1(e,t),t)}var J1=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let o=0,l=s.length;o<l;o++)s[o](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>t!==l)}}});function Wl(e,t){return e-t}function Z1(e){return e<0?-1:1}function zl(e){return[Math.abs(e),Z1(e)]}function jf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Q1=2,yt=Q1,qs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(yt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},e2=class extends qs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=G1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[l,r],a,i)=>{const[c,p]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+p)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},n2=class extends qs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=zl(e.x-this.start.x),[o,l]=zl(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Wl),[i,c]=[this.start.y,this.start.y+o*l].sort(Wl);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Nf(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var t2=class extends qs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=jf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Nf(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,s=this.start.y+l):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},s2=class extends qs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=zl(e.x-this.start.x),[o,l]=zl(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Wl),[i,c]=[this.start.y,this.start.y+o*l].sort(Wl);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function o2(e,t){const s=e.x-t.x,o=e.y-t.y;return s*s+o*o}function l2(e,t,s){let o=t.x,l=t.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((e.x-o)*r+(e.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=e.x-o,a=e.y-l,r*r+a*a}function r2(e,t){let s=e[0];const o=[s];let l;for(let r=1,a=e.length;r<a;r++)l=e[r],o2(l,s)>t&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Ra(e,t,s,o,l){let r=o,a=0;for(let i=t+1;i<s;i++){const c=l2(e[i],e[t],e[s]);c>r&&(a=i,r=c)}r>o&&(a-t>1&&Ra(e,t,a,o,l),l.push(e[a]),s-a>1&&Ra(e,a,s,o,l))}function a2(e,t){const s=e.length-1,o=[e[0]];return Ra(e,0,s,t,o),o.push(e[s]),o}function Rp(e,t,s=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=s?e:r2(e,o),e=a2(e,o),e}var i2=class extends qs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=jf();const t=Nf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Rp(this.points,1,!0),this.count=0),this.attr("d",Mp(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Mp(Rp(this.points,1,!0))),!e.getTotalLength()))}};function c2(e,t){const s=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Lp(e,t,s,o){const l=t||e,r=s||e,a=.2,i=c2(l,r),c=i.angle+(o?Math.PI:0),p=i.length*a,d=e.x+Math.cos(c)*p,f=e.y+Math.sin(c)*p;return{x:d,y:f}}function p2(e,t,s){const o=Lp(s[t-1],s[t-2],e),l=Lp(e,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(yt)},${o.y.toFixed(yt)} ${l.x.toFixed(yt)},${l.y.toFixed(yt)} ${e.x.toFixed(yt)},${e.y.toFixed(yt)}`}function Mp(e){return e.reduce((t,s,o,l)=>o===0?`M ${s.x.toFixed(yt)},${s.y.toFixed(yt)}`:`${t} ${p2(s,o,l)}`,"")}var u2=class extends qs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),p=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:i,element:o||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,o=e.x2,l=t.x1,r=t.x2,a=e.y1,i=e.y2,c=t.y1,p=t.y2,d=(s-o)*(c-p)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*p-c*r),F=(s*i-a*o)*(c-p)-(a-i)*(l*p-c*r),m=(h,_,b)=>h>=_&&h<=b?!0:h>=b&&h<=_;if(d===0)return!1;{const h={x:f/d,y:F/d};return m(h.x,s,o)&&m(h.y,a,i)&&m(h.x,l,r)&&m(h.y,c,p)}}};function d2(e){return{draw:new i2(e),stylus:new e2(e),line:new t2(e),rectangle:new s2(e),ellipse:new n2(e),eraseLine:new u2(e)}}var f2=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=J1(),this._models=d2(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function F2(e){return new f2(e)}const La=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],ot=Gn("slidev-drawing-enabled",!1),gT=Gn("slidev-drawing-pinned",!1),m2=K(!1),h2=K(!1),y2=K(!1),Ro=K(!1),cs=zv(Gn("slidev-drawing-brush",{color:La[0],size:4,mode:"stylus"})),Dp=K("stylus"),Hf=P(()=>Se.drawings.syncAll||vn.value);let Lo=!1;const so=P({get(){return Dp.value},set(e){Dp.value=e,e==="arrow"?(cs.mode="line",cs.arrowEnd=!0):(cs.mode=e,cs.arrowEnd=!1)}}),g2=Ve({brush:cs,acceptsInputTypes:P(()=>ot.value&&(!Se.drawings.presenterOnly||vn.value)?void 0:["pen"]),coordinateTransform:!1}),hn=lr(F2(g2));function v2(){hn.clear(),Hf.value&&af(We.value,"")}function Pi(){var e;h2.value=hn.canRedo(),m2.value=hn.canUndo(),y2.value=!!((e=hn.el)!=null&&e.children.length)}function _2(e){Lo=!0;const t=Vl[e||We.value];t!=null?hn.load(t):hn.clear(),Pi(),Lo=!1}hn.on("changed",()=>{if(Pi(),!Lo){const e=hn.dump(),t=We.value;(Vl[t]||"")!==e&&Hf.value&&af(t,hn.dump())}});qv(e=>{Lo=!0,e[We.value]!=null&&hn.load(e[We.value]||""),Lo=!1,Pi()});nn(()=>{he(We,()=>{hn.mounted&&_2()},{immediate:!0})});hn.on("start",()=>Ro.value=!0);hn.on("end",()=>Ro.value=!1);window.addEventListener("keydown",e=>{if(!ot.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?hn.redo():hn.undo():e.code==="Escape"?ot.value=!1:e.code==="KeyL"&&t?so.value="line":e.code==="KeyA"&&t?so.value="arrow":e.code==="KeyS"&&t?so.value="stylus":e.code==="KeyR"&&t?so.value="rectangle":e.code==="KeyE"&&t?so.value="ellipse":e.code==="KeyC"&&t?v2():e.code.startsWith("Digit")&&t&&+e.code[5]<=La.length?cs.color=La[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return P(()=>e.every(t=>Ge(t)))}function An(e){return P(()=>!Ge(e))}const Bp=N8(),Vr=Gn("slidev-color-schema","auto"),Ma=P(()=>Se.colorSchema!=="auto"),Ri=P({get(){return Ma.value?Se.colorSchema==="dark":Vr.value==="auto"?Bp.value:Vr.value==="dark"},set(e){Ma.value||(Vr.value=e===Bp.value?"auto":e?"dark":"light")}}),qf=df(Ri);Yn&&he(Ri,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const wl=K(1),bl=P(()=>Ke.length-1),On=K(0),Li=K(0);function w2(){On.value>wl.value&&(On.value-=1)}function b2(){On.value<bl.value&&(On.value+=1)}function x2(){if(On.value>wl.value){let e=On.value-Li.value;e<wl.value&&(e=wl.value),On.value=e}}function C2(){if(On.value<bl.value){let e=On.value+Li.value;e>bl.value&&(e=bl.value),On.value=e}}function k2(){const{escape:e,space:t,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:p,o:d}=Lf;let f=[{name:"next_space",key:Ye(t,An(s)),fn:Nt,autoRepeat:!0},{name:"prev_space",key:Ye(t,s),fn:Ht,autoRepeat:!0},{name:"next_right",key:Ye(l,An(s),An(dn)),fn:Nt,autoRepeat:!0},{name:"prev_left",key:Ye(o,An(s),An(dn)),fn:Ht,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Nt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ht,autoRepeat:!0},{name:"next_down",key:Ye(a,An(dn)),fn:Do,autoRepeat:!0},{name:"prev_up",key:Ye(r,An(dn)),fn:()=>Bo(!1),autoRepeat:!0},{name:"next_shift",key:Ye(l,s),fn:Do,autoRepeat:!0},{name:"prev_shift",key:Ye(o,s),fn:()=>Bo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,An(ot)),fn:qf},{name:"toggle_overview",key:Ye(d,An(ot)),fn:Df},{name:"hide_overview",key:Ye(e,An(ot)),fn:()=>dn.value=!1},{name:"goto",key:Ye(p,An(ot)),fn:()=>Ts.value=!Ts.value},{name:"next_overview",key:Ye(l,dn),fn:b2},{name:"prev_overview",key:Ye(o,dn),fn:w2},{name:"up_overview",key:Ye(r,dn),fn:x2},{name:"down_overview",key:Ye(a,dn),fn:C2},{name:"goto_from_overview",key:Ye(i,dn),fn:()=>{Ns(On.value),dn.value=!1}}];const F=new Set(f.map(h=>h.name));if(f.filter(h=>h.name&&F.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return f}const Vf=Ye(An(j1),An(N1),D1);function A2(e,t,s=!1){typeof e=="string"&&(e=Lf[e]);const o=Ye(e,Vf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return he(o,a,{flush:"sync"})}function S2(e,t){return x8(e,s=>{Vf.value&&(s.repeat||t())})}function E2(){const e=k2();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&A2(s.key,s.fn,s.autoRepeat)}),S2("f",()=>Mf.toggle())}const $2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O2=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),T2=[O2];function I2(e,t){return C(),G("svg",$2,T2)}const P2={name:"carbon-close",render:I2};function Mi(e,t=""){var l,r;const s=["slidev-page",t],o=(r=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const R2=Oe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;M(N);const s=K(),o=Z8(s),l=P(()=>t.width?t.width:o.width.value),r=P(()=>t.width?t.width/Mt:o.height.value);t.width&&bs(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=P(()=>l.value/r.value),i=P(()=>t.scale&&!js.value?t.scale:a.value<Mt?l.value/Dt:r.value*Mt/Dt),c=P(()=>({height:`${$i}px`,width:`${Dt}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),p=P(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return En(of,i),(d,f)=>(C(),G("div",{id:"slide-container",ref_key:"root",ref:s,class:Ue(p.value)},[n("div",{id:"slide-content",style:tn(c.value)},[cn(d.$slots,"default")],4),cn(d.$slots,"controls")],2))}});const H=(e,t)=>{const s=e.__vccOpts||e;for(const[o,l]of t)s[o]=l;return s},Uf=H(R2,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Di=Oe({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=st(e,"clicks",t),o=st(e,"clicksElements",t),l=st(e,"clicksDisabled",t),r=st(e,"clicksOrderMap",t);o.value.length=0,En(Av,e.route),En(Sv,e.context),En(mo,s),En(ho,l),En(os,o),En(xa,r)},render(){var e,t;return this.$props.is?Qe(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),L2=["innerHTML"],M2=Oe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return M(N),(t,s)=>I(Vl)[t.page]?(C(),G("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:I(Vl)[t.page]},null,8,L2)):ve("v-if",!0)}}),Wf=H(M2,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),D2=Object.freeze(Object.defineProperty({__proto__:null,default:Wf},Symbol.toStringTag,{value:"Module"})),B2={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},j2=["onClick"],Ur=4*16*2,jp=2*16,N2=Oe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const s=e;M(N);const o=st(s,"modelValue",t);function l(){o.value=!1}function r(f){Ns(f),l()}function a(f){return f===On.value}const i=Ia.smaller("xs"),c=Ia.smaller("sm"),p=P(()=>i.value?ys.width.value-Ur:c.value?(ys.width.value-Ur-jp)/2:300),d=P(()=>Math.floor((ys.width.value-Ur)/(p.value+jp)));return bs(()=>{On.value=We.value,Li.value=d.value}),(f,F)=>{const m=P2;return C(),G($e,null,[wi(n("div",B2,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(C(!0),G($e,null,Hs(I(Ke).slice(0,-1),(h,_)=>(C(),G("div",{key:h.path,class:"relative"},[n("div",{class:Ue(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(_+1),"border-gray-400":!a(_+1)}]),style:tn(I(Oi)),onClick:b=>r(+h.path)},[(C(),j(Uf,{key:h.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:E(()=>[h!=null&&h.component?(C(),j(I(Di),{key:0,is:h.component,"clicks-disabled":!0,class:Ue(I(Mi)(h)),route:h,context:"overview"},null,8,["is","class","route"])):ve("v-if",!0),L(Wf,{page:+h.path},null,8,["page"])]),_:2},1032,["width"]))],14,j2),n("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${p.value+5}px`)},_t(_+1),5)]))),128))],4)],512),[[Xd,I(o)]]),I(o)?(C(),G("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[L(m)])):ve("v-if",!0)],64)}}});const H2=H(N2,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),q2="/slides-brand-new-angular/assets/logo-b72bde5d.png",V2={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},U2=Oe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;M(N);const o=st(s,"modelValue",t);function l(){o.value=!1}return(r,a)=>(C(),j(gd,null,[I(o)?(C(),G("div",V2,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),n("div",{class:Ue(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[cn(r.$slots,"default")],2)])):ve("v-if",!0)],1024))}}),W2=H(U2,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/Modal.vue"]]),z2={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},X2=["innerHTML"],K2=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:q2,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),u("dev ")])])],-1),Y2=Oe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;M(N);const o=st(s,"modelValue",t),l=P(()=>typeof Se.info=="string");return(r,a)=>(C(),j(W2,{modelValue:I(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Ee(o)?o.value=i:null),class:"px-6 py-4"},{default:E(()=>[n("div",z2,[l.value?(C(),G("div",{key:0,class:"mb-4",innerHTML:I(Se).info},null,8,X2)):ve("v-if",!0),K2])]),_:1},8,["modelValue"]))}});const G2=H(Y2,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function bt(e){return Array.isArray?Array.isArray(e):Kf(e)==="[object Array]"}const J2=1/0;function Z2(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-J2?"-0":t}function Q2(e){return e==null?"":Z2(e)}function lt(e){return typeof e=="string"}function zf(e){return typeof e=="number"}function ew(e){return e===!0||e===!1||nw(e)&&Kf(e)=="[object Boolean]"}function Xf(e){return typeof e=="object"}function nw(e){return Xf(e)&&e!==null}function $n(e){return e!=null}function Wr(e){return!e.trim().length}function Kf(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const tw="Incorrect 'index' type",sw=e=>`Invalid value for key ${e}`,ow=e=>`Pattern length exceeds max of ${e}.`,lw=e=>`Missing ${e} property in key`,rw=e=>`Property 'weight' in key '${e}' must be a positive integer`,Np=Object.prototype.hasOwnProperty;class aw{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(o=>{let l=Yf(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Yf(e){let t=null,s=null,o=null,l=1,r=null;if(lt(e)||bt(e))o=e,t=Hp(e),s=Da(e);else{if(!Np.call(e,"name"))throw new Error(lw("name"));const a=e.name;if(o=a,Np.call(e,"weight")&&(l=e.weight,l<=0))throw new Error(rw(a));t=Hp(a),s=Da(a),r=e.getFn}return{path:t,id:s,weight:l,src:o,getFn:r}}function Hp(e){return bt(e)?e:e.split(".")}function Da(e){return bt(e)?e.join("."):e}function iw(e,t){let s=[],o=!1;const l=(r,a,i)=>{if($n(r))if(!a[i])s.push(r);else{let c=a[i];const p=r[c];if(!$n(p))return;if(i===a.length-1&&(lt(p)||zf(p)||ew(p)))s.push(Q2(p));else if(bt(p)){o=!0;for(let d=0,f=p.length;d<f;d+=1)l(p[d],a,i+1)}else a.length&&l(p,a,i+1)}};return l(e,lt(t)?t.split("."):t,0),o?s:s[0]}const cw={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},pw={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},uw={location:0,threshold:.6,distance:100},dw={useExtendedSearch:!1,getFn:iw,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var de={...pw,...cw,...uw,...dw};const fw=/[^ ]+/g;function Fw(e=1,t=3){const s=new Map,o=Math.pow(10,t);return{get(l){const r=l.match(fw).length;if(s.has(r))return s.get(r);const a=1/Math.pow(r,.5*e),i=parseFloat(Math.round(a*o)/o);return s.set(r,i),i},clear(){s.clear()}}}class Bi{constructor({getFn:t=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){this.norm=Fw(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,lt(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();lt(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!$n(t)||Wr(t))return;let o={v:t,i:s,n:this.norm.get(t)};this.records.push(o)}_addObject(t,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(t):this.getFn(t,l.path);if($n(a)){if(bt(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:p,value:d}=c.pop();if($n(d))if(lt(d)&&!Wr(d)){let f={v:d,i:p,n:this.norm.get(d)};i.push(f)}else bt(d)&&d.forEach((f,F)=>{c.push({nestedArrIndex:F,value:f})})}o.$[r]=i}else if(lt(a)&&!Wr(a)){let i={v:a,n:this.norm.get(a)};o.$[r]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Gf(e,t,{getFn:s=de.getFn,fieldNormWeight:o=de.fieldNormWeight}={}){const l=new Bi({getFn:s,fieldNormWeight:o});return l.setKeys(e.map(Yf)),l.setSources(t),l.create(),l}function mw(e,{getFn:t=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){const{keys:o,records:l}=e,r=new Bi({getFn:t,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function dl(e,{errors:t=0,currentLocation:s=0,expectedLocation:o=0,distance:l=de.distance,ignoreLocation:r=de.ignoreLocation}={}){const a=t/e.length;if(r)return a;const i=Math.abs(o-s);return l?a+i/l:i?1:a}function hw(e=[],t=de.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let a=e.length;r<a;r+=1){let i=e[r];i&&o===-1?o=r:!i&&o!==-1&&(l=r-1,l-o+1>=t&&s.push([o,l]),o=-1)}return e[r-1]&&r-o>=t&&s.push([o,r-1]),s}const rs=32;function yw(e,t,s,{location:o=de.location,distance:l=de.distance,threshold:r=de.threshold,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,includeMatches:c=de.includeMatches,ignoreLocation:p=de.ignoreLocation}={}){if(t.length>rs)throw new Error(ow(rs));const d=t.length,f=e.length,F=Math.max(0,Math.min(o,f));let m=r,h=F;const _=i>1||c,b=_?Array(f):[];let w;for(;(w=e.indexOf(t,h))>-1;){let B=dl(t,{currentLocation:w,expectedLocation:F,distance:l,ignoreLocation:p});if(m=Math.min(B,m),h=w+d,_){let T=0;for(;T<d;)b[w+T]=1,T+=1}}h=-1;let x=[],g=1,S=d+f;const k=1<<d-1;for(let B=0;B<d;B+=1){let T=0,U=S;for(;T<U;)dl(t,{errors:B,currentLocation:F+U,expectedLocation:F,distance:l,ignoreLocation:p})<=m?T=U:S=U,U=Math.floor((S-T)/2+T);S=U;let oe=Math.max(1,F-U+1),pe=a?f:Math.min(F+U,f)+d,Y=Array(pe+2);Y[pe+1]=(1<<B)-1;for(let ye=pe;ye>=oe;ye-=1){let we=ye-1,Me=s[e.charAt(we)];if(_&&(b[we]=+!!Me),Y[ye]=(Y[ye+1]<<1|1)&Me,B&&(Y[ye]|=(x[ye+1]|x[ye])<<1|1|x[ye+1]),Y[ye]&k&&(g=dl(t,{errors:B,currentLocation:we,expectedLocation:F,distance:l,ignoreLocation:p}),g<=m)){if(m=g,h=we,h<=F)break;oe=Math.max(1,2*F-h)}}if(dl(t,{errors:B+1,currentLocation:F,expectedLocation:F,distance:l,ignoreLocation:p})>m)break;x=Y}const $={isMatch:h>=0,score:Math.max(.001,g)};if(_){const B=hw(b,i);B.length?c&&($.indices=B):$.isMatch=!1}return $}function gw(e){let t={};for(let s=0,o=e.length;s<o;s+=1){const l=e.charAt(s);t[l]=(t[l]||0)|1<<o-s-1}return t}class Jf{constructor(t,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:p=de.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:p},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(F,m)=>{this.chunks.push({pattern:F,alphabet:gw(F),startIndex:m})},f=this.pattern.length;if(f>rs){let F=0;const m=f%rs,h=f-m;for(;F<h;)d(this.pattern.substr(F,rs),F),F+=rs;if(m){const _=f-rs;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let h={isMatch:!0,score:0};return o&&(h.indices=[[0,t.length-1]]),h}const{location:l,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:p}=this.options;let d=[],f=0,F=!1;this.chunks.forEach(({pattern:h,alphabet:_,startIndex:b})=>{const{isMatch:w,score:x,indices:g}=yw(t,h,_,{location:l+b,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:p});w&&(F=!0),f+=x,w&&g&&(d=[...d,...g])});let m={isMatch:F,score:F?f/this.chunks.length:1};return F&&o&&(m.indices=d),m}}class zt{constructor(t){this.pattern=t}static isMultiMatch(t){return qp(t,this.multiRegex)}static isSingleMatch(t){return qp(t,this.singleRegex)}search(){}}function qp(e,t){const s=e.match(t);return s?s[1]:null}class vw extends zt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class _w extends zt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class ww extends zt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class bw extends zt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class xw extends zt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Cw extends zt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Zf extends zt{constructor(t,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:p=de.ignoreLocation}={}){super(t),this._bitapSearch=new Jf(t,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Qf extends zt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,o;const l=[],r=this.pattern.length;for(;(o=t.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const Ba=[vw,Qf,ww,bw,Cw,xw,_w,Zf],Vp=Ba.length,kw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Aw="|";function Sw(e,t={}){return e.split(Aw).map(s=>{let o=s.trim().split(kw).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const i=o[r];let c=!1,p=-1;for(;!c&&++p<Vp;){const d=Ba[p];let f=d.isMultiMatch(i);f&&(l.push(new d(f,t)),c=!0)}if(!c)for(p=-1;++p<Vp;){const d=Ba[p];let f=d.isSingleMatch(i);if(f){l.push(new d(f,t));break}}}return l})}const Ew=new Set([Zf.type,Qf.type]);class $w{constructor(t,{isCaseSensitive:s=de.isCaseSensitive,includeMatches:o=de.includeMatches,minMatchCharLength:l=de.minMatchCharLength,ignoreLocation:r=de.ignoreLocation,findAllMatches:a=de.findAllMatches,location:i=de.location,threshold:c=de.threshold,distance:p=de.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:i,threshold:c,distance:p},this.pattern=s?t:t.toLowerCase(),this.query=Sw(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;t=l?t:t.toLowerCase();let r=0,a=[],i=0;for(let c=0,p=s.length;c<p;c+=1){const d=s[c];a.length=0,r=0;for(let f=0,F=d.length;f<F;f+=1){const m=d[f],{isMatch:h,indices:_,score:b}=m.search(t);if(h){if(r+=1,i+=b,o){const w=m.constructor.type;Ew.has(w)?a=[...a,..._]:a.push(_)}}else{i=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:i/r};return o&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const ja=[];function Ow(...e){ja.push(...e)}function Na(e,t){for(let s=0,o=ja.length;s<o;s+=1){let l=ja[s];if(l.condition(e,t))return new l(e,t)}return new Jf(e,t)}const Xl={AND:"$and",OR:"$or"},Ha={PATH:"$path",PATTERN:"$val"},qa=e=>!!(e[Xl.AND]||e[Xl.OR]),Tw=e=>!!e[Ha.PATH],Iw=e=>!bt(e)&&Xf(e)&&!qa(e),Up=e=>({[Xl.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function eF(e,t,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const a=Tw(l);if(!a&&r.length>1&&!qa(l))return o(Up(l));if(Iw(l)){const c=a?l[Ha.PATH]:r[0],p=a?l[Ha.PATTERN]:l[c];if(!lt(p))throw new Error(sw(c));const d={keyId:Da(c),pattern:p};return s&&(d.searcher=Na(p,t)),d}let i={children:[],operator:r[0]};return r.forEach(c=>{const p=l[c];bt(p)&&p.forEach(d=>{i.children.push(o(d))})}),i};return qa(e)||(e=Up(e)),o(e)}function Pw(e,{ignoreFieldNorm:t=de.ignoreFieldNorm}){e.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:a})=>{const i=l?l.weight:null;o*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(t?1:r))}),s.score=o})}function Rw(e,t){const s=e.matches;t.matches=[],$n(s)&&s.forEach(o=>{if(!$n(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function Lw(e,t){t.score=e.score}function Mw(e,t,{includeMatches:s=de.includeMatches,includeScore:o=de.includeScore}={}){const l=[];return s&&l.push(Rw),o&&l.push(Lw),e.map(r=>{const{idx:a}=r,i={item:t[a],refIndex:a};return l.length&&l.forEach(c=>{c(r,i)}),i})}class Vs{constructor(t,s={},o){this.options={...de,...s},this.options.useExtendedSearch,this._keyStore=new aw(this.options.keys),this.setCollection(t,o)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof Bi))throw new Error(tw);this._myIndex=s||Gf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){$n(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];t(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:i}=this.options;let c=lt(t)?lt(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Pw(c,{ignoreFieldNorm:i}),r&&c.sort(a),zf(s)&&s>-1&&(c=c.slice(0,s)),Mw(c,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(t){const s=Na(t,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:i})=>{if(!$n(r))return;const{isMatch:c,score:p,indices:d}=s.searchIn(r);c&&l.push({item:r,idx:a,matches:[{score:p,value:r,norm:i,indices:d}]})}),l}_searchLogical(t){const s=eF(t,this.options),o=(i,c,p)=>{if(!i.children){const{keyId:f,searcher:F}=i,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:F});return m&&m.length?[{idx:p,item:c,matches:m}]:[]}const d=[];for(let f=0,F=i.children.length;f<F;f+=1){const m=i.children[f],h=o(m,c,p);if(h.length)d.push(...h);else if(i.operator===Xl.AND)return[]}return d},l=this._myIndex.records,r={},a=[];return l.forEach(({$:i,i:c})=>{if($n(i)){let p=o(s,i,c);p.length&&(r[c]||(r[c]={idx:c,item:i,matches:[]},a.push(r[c])),p.forEach(({matches:d})=>{r[c].matches.push(...d)}))}}),a}_searchObjectList(t){const s=Na(t,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i})=>{if(!$n(a))return;let c=[];o.forEach((p,d)=>{c.push(...this._findMatches({key:p,value:a[d],searcher:s}))}),c.length&&r.push({idx:i,item:a,matches:c})}),r}_findMatches({key:t,value:s,searcher:o}){if(!$n(s))return[];let l=[];if(bt(s))s.forEach(({v:r,i:a,n:i})=>{if(!$n(r))return;const{isMatch:c,score:p,indices:d}=o.searchIn(r);c&&l.push({score:p,key:t,value:r,idx:a,norm:i,indices:d})});else{const{v:r,n:a}=s,{isMatch:i,score:c,indices:p}=o.searchIn(r);i&&l.push({score:c,key:t,value:r,norm:a,indices:p})}return l}}Vs.version="6.6.2";Vs.createIndex=Gf;Vs.parseIndex=mw;Vs.config=de;Vs.parseQuery=eF;Ow($w);const Dw={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Bw=["value","disabled","onKeydown"],jw=["border","onClick"],Nw={"w-4":"","text-right":"",op50:"","text-sm":""},Hw=Oe({__name:"Goto",setup(e){M(N);const t=K(),s=K(),o=K(),l=K(),r=K(""),a=K(0);function i(g){return g!=null}const c=P(()=>new Vs(Ke.map(g=>{var S;return(S=g.meta)==null?void 0:S.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=P(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=P(()=>c.value.search(p.value).map(g=>g.item)),f=P(()=>!!d.value.length);function F(){if(f.value){const g=d.value.at(a.value||0);g&&Ns(g.no)}m()}function m(){r.value="",Ts.value=!1}function h(g){g.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),b()}function _(g){g.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),b()}function b(){var S;const g=(S=l.value)==null?void 0:S[a.value];g&&o.value&&(g.offsetTop+g.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:g.offsetTop+g.offsetHeight-o.value.offsetHeight+1}):g.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:g.offsetTop}))}function w(g){a.value=0,r.value=g.target.value}function x(g){Ns(g),m()}return he(Ts,async g=>{var S;g?(r.value="",a.value=0,setTimeout(()=>{var k;return(k=s.value)==null?void 0:k.focus()},0)):(S=s.value)==null||S.blur()}),he(jt,()=>{var g;(g=t.value)!=null&&g.contains(jt.value)||m()}),(g,S)=>(C(),G("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Ue(["fixed right-5 transition-all",I(Ts)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[n("div",Dw,[n("input",{ref_key:"input",ref:s,value:r.value,type:"text",disabled:!I(Ts),class:Ue(["outline-none bg-transparent",{"text-red-400":!f.value&&r.value}]),placeholder:"Goto...",onKeydown:[ll(F,["enter"]),ll(m,["escape"]),ll(h,["down"]),ll(_,["up"])],onInput:w},null,42,Bw)]),d.value.length>0?(C(),G("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(C(!0),G($e,null,Hs(d.value,(k,$)=>(C(),G("li",{ref_for:!0,ref_key:"items",ref:l,key:k.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:Ue(a.value===$?"bg-active op100":"op80"),onClick:Sg(B=>x(k.no),["stop"])},[n("div",Nw,_t(k.no),1),u(" "+_t(k.title),1)],10,jw))),128))],512)):ve("v-if",!0)],2))}});const qw=H(Hw,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/Goto.vue"]]),Vw=Oe({__name:"Controls",setup(e){M(N);const t=it(),s=it();return(o,l)=>(C(),G($e,null,[L(H2,{modelValue:I(dn),"onUpdate:modelValue":l[0]||(l[0]=r=>Ee(dn)?dn.value=r:null)},null,8,["modelValue"]),L(qw),t.value?(C(),j(I(t),{key:0})):ve("v-if",!0),s.value?(C(),j(I(s),{key:1,modelValue:I(Hr),"onUpdate:modelValue":l[1]||(l[1]=r=>Ee(Hr)?Hr.value=r:null)},null,8,["modelValue"])):ve("v-if",!0),I(Se).info?(C(),j(G2,{key:2,modelValue:I(vo),"onUpdate:modelValue":l[2]||(l[2]=r=>Ee(vo)?vo.value=r:null)},null,8,["modelValue"])):ve("v-if",!0)],64))}}),Uw=H(Vw,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/Controls.vue"]]),Ww={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zw=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Xw=[zw];function Kw(e,t){return C(),G("svg",Ww,Xw)}const Yw={name:"carbon-settings-adjust",render:Kw},Gw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jw=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Zw=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Qw=[Jw,Zw];function e0(e,t){return C(),G("svg",Gw,Qw)}const n0={name:"carbon-information",render:e0},t0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s0=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),o0=[s0];function l0(e,t){return C(),G("svg",t0,o0)}const r0={name:"carbon-download",render:l0},a0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i0=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),c0=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),p0=[i0,c0];function u0(e,t){return C(),G("svg",a0,p0)}const d0={name:"carbon-user-speaker",render:u0},f0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F0=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),m0=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),h0=[F0,m0];function y0(e,t){return C(),G("svg",f0,h0)}const g0={name:"carbon-presentation-file",render:y0},v0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_0=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),w0=[_0];function b0(e,t){return C(),G("svg",v0,w0)}const x0={name:"carbon-pen",render:b0},C0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},k0=n("g",{fill:"currentColor"},[n("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),n("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),A0=[k0];function S0(e,t){return C(),G("svg",C0,A0)}const E0={name:"ph-cursor-duotone",render:S0},$0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},O0=n("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),T0=[O0];function I0(e,t){return C(),G("svg",$0,T0)}const nF={name:"ph-cursor-fill",render:I0},P0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R0=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),L0=[R0];function M0(e,t){return C(),G("svg",P0,L0)}const D0={name:"carbon-sun",render:M0},B0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j0=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),N0=[j0];function H0(e,t){return C(),G("svg",B0,N0)}const q0={name:"carbon-moon",render:H0},V0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U0=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),W0=[U0];function z0(e,t){return C(),G("svg",V0,W0)}const X0={name:"carbon-apps",render:z0},K0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y0=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),G0=[Y0];function J0(e,t){return C(),G("svg",K0,G0)}const tF={name:"carbon-arrow-right",render:J0},Z0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q0=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),eb=[Q0];function nb(e,t){return C(),G("svg",Z0,eb)}const tb={name:"carbon-arrow-left",render:nb},sb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ob=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),lb=[ob];function rb(e,t){return C(),G("svg",sb,lb)}const ab={name:"carbon-maximize",render:rb},ib={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cb=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),pb=[cb];function ub(e,t){return C(),G("svg",ib,pb)}const db={name:"carbon-minimize",render:ub},fb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fb=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),mb=[Fb];function hb(e,t){return C(),G("svg",fb,mb)}const yb={name:"carbon-checkmark",render:hb},gb={class:"select-list"},vb={class:"title"},_b={class:"items"},wb=["onClick"],bb=Oe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;M(N);const o=st(s,"modelValue",t,{passive:!0});return(l,r)=>{const a=yb;return C(),G("div",gb,[n("div",vb,_t(e.title),1),n("div",_b,[(C(!0),G($e,null,Hs(e.items,i=>(C(),G("div",{key:i.value,class:Ue(["item",{active:I(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[L(a,{class:Ue(["text-green-500",{"opacity-0":I(o)!==i.value}])},null,8,["class"]),u(" "+_t(i.display||i.value),1)],10,wb))),128))])])}}});const xb=H(bb,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/SelectList.vue"]]),Cb={class:"text-sm"},kb=Oe({__name:"Settings",setup(e){M(N);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(C(),G("div",Cb,[L(xb,{modelValue:I(_l),"onUpdate:modelValue":o[0]||(o[0]=l=>Ee(_l)?_l.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Ab=H(kb,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/Settings.vue"]]),Sb={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Eb=Oe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;M(N);const o=st(s,"modelValue",t,{passive:!0}),l=K();return w8(l,()=>{o.value=!1}),(r,a)=>(C(),G("div",{ref_key:"el",ref:l,class:"flex relative"},[n("button",{class:Ue({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!I(o))},[cn(r.$slots,"button",{class:Ue({disabled:e.disabled})})],2),(C(),j(gd,null,[I(o)?(C(),G("div",Sb,[cn(r.$slots,"menu")])):ve("v-if",!0)],1024))],512))}}),$b=H(Eb,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/MenuButton.vue"]]),Ob={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Tb={__name:"VerticalDivider",setup(e){return M(N),(t,s)=>(C(),G("div",Ob))}},fl=H(Tb,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Ib={render(){return[]}},Pb={class:"slidev-icon-btn"},Rb={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Lb={class:"my-auto"},Mb={class:"opacity-50"},Db=Oe({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;M(N);const s=Ia.smaller("md"),{isFullscreen:o,toggle:l}=Mf,r=P(()=>Ua.value?`?password=${Ua.value}`:""),a=P(()=>`/presenter/${We.value}${r.value}`),i=P(()=>`/${We.value}${r.value}`),c=K();function p(){c.value&&jt.value&&c.value.contains(jt.value)&&jt.value.blur()}const d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=it(),F=it();return Bt(()=>import("./DrawingControls-e0da641d.js"),[]).then(m=>F.value=m.default),(m,h)=>{const _=db,b=ab,w=tb,x=tF,g=X0,S=q0,k=D0,$=nF,B=E0,T=x0,U=g0,oe=Ml("RouterLink"),pe=d0,Y=r0,me=n0,ye=Yw;return C(),G("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[n("div",{class:Ue(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[I(mt)?ve("v-if",!0):(C(),G("button",{key:0,class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...we)=>I(l)&&I(l)(...we))},[I(o)?(C(),j(_,{key:0})):(C(),j(b,{key:1}))])),n("button",{class:Ue(["slidev-icon-btn",{disabled:!I(w$)}]),onClick:h[1]||(h[1]=(...we)=>I(Ht)&&I(Ht)(...we))},[L(w)],2),n("button",{class:Ue(["slidev-icon-btn",{disabled:!I(_$)}]),title:"Next",onClick:h[2]||(h[2]=(...we)=>I(Nt)&&I(Nt)(...we))},[L(x)],2),I(mt)?ve("v-if",!0):(C(),G("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=we=>I(Df)())},[L(g)])),I(Ma)?ve("v-if",!0):(C(),G("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=we=>I(qf)())},[I(Ri)?(C(),j(S,{key:0})):(C(),j(k,{key:1}))])),L(fl),I(mt)?ve("v-if",!0):(C(),G($e,{key:3},[!I(vn)&&!I(s)&&f.value?(C(),G($e,{key:0},[L(I(f)),L(fl)],64)):ve("v-if",!0),I(vn)?(C(),G("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=we=>qr.value=!I(qr))},[I(qr)?(C(),j($,{key:0})):(C(),j(B,{key:1,class:"opacity-50"}))])):ve("v-if",!0)],64)),(!I(Se).drawings.presenterOnly||I(vn))&&!I(mt)?(C(),G($e,{key:4},[n("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=we=>ot.value=!I(ot))},[L(T),I(ot)?(C(),G("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:I(cs).color})},null,4)):ve("v-if",!0)]),L(fl)],64)):ve("v-if",!0),I(mt)?ve("v-if",!0):(C(),G($e,{key:5},[I(vn)?(C(),j(oe,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:E(()=>[L(U)]),_:1},8,["to"])):ve("v-if",!0),I(m$)?(C(),j(oe,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:E(()=>[L(pe)]),_:1},8,["to"])):ve("v-if",!0),ve("v-if",!0)],64)),(C(),G($e,{key:6},[I(Se).download?(C(),G("button",{key:0,class:"slidev-icon-btn",onClick:h[8]||(h[8]=(...we)=>I(Wa)&&I(Wa)(...we))},[L(Y)])):ve("v-if",!0)],64)),!I(vn)&&I(Se).info&&!I(mt)?(C(),G("button",{key:7,class:"slidev-icon-btn",onClick:h[9]||(h[9]=we=>vo.value=!I(vo))},[L(me)])):ve("v-if",!0),!I(vn)&&!I(mt)?(C(),j($b,{key:8},{button:E(()=>[n("button",Pb,[L(ye)])]),menu:E(()=>[L(Ab)]),_:1})):ve("v-if",!0),I(mt)?ve("v-if",!0):(C(),j(fl,{key:9})),n("div",Rb,[n("div",Lb,[u(_t(I(We))+" ",1),n("span",Mb,"/ "+_t(I(h$)),1)])]),L(I(Ib))],34)],512)}}}),Bb=H(Db,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/NavControls.vue"]]),sF={render(){return[]}},oF={render(){return[]}},jb={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Nb=Oe({__name:"PresenterMouse",setup(e){return M(N),(t,s)=>{const o=nF;return I(Dr).cursor?(C(),G("div",jb,[L(o,{class:"absolute",style:tn({left:`${I(Dr).cursor.x}%`,top:`${I(Dr).cursor.y}%`})},null,8,["style"])])):ve("v-if",!0)}}}),Hb=H(Nb,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),qb=Oe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){M(N),he(fn,()=>{var o,l;(o=fn.value)!=null&&o.meta&&fn.value.meta.preload!==!1&&(fn.value.meta.__preloaded=!0),(l=zr.value)!=null&&l.meta&&zr.value.meta.preload!==!1&&(zr.value.meta.__preloaded=!0)},{immediate:!0});const t=it();Bt(()=>import("./DrawingLayer-910404ee.js"),[]).then(o=>t.value=o.default);const s=P(()=>Ke.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===fn.value}));return(o,l)=>(C(),G($e,null,[ve(" Global Bottom "),L(I(oF)),ve(" Slides "),L(_g,Le(I(C$),{id:"slideshow",tag:"div"}),{default:E(()=>[(C(!0),G($e,null,Hs(s.value,r=>{var a;return wi((C(),j(I(Di),{key:r.path,is:r==null?void 0:r.component,clicks:r===I(fn)?I(Bn):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Ue(I(Mi)(r)),route:r,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Xd,r===I(fn)]])}),128))]),_:1},16),ve(" Global Top "),L(I(sF)),t.value?(C(),j(I(t),{key:0})):ve("v-if",!0),I(vn)?ve("v-if",!0):(C(),j(Hb,{key:1}))],64))}});const Vb=H(qb,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Ub=Oe({__name:"PrintStyle",setup(e){M(N);function t(s,{slots:o}){if(o.default)return Qe("style",o.default())}return(s,o)=>(C(),j(t,null,{default:E(()=>[u(" @page { size: "+_t(I(Dt))+"px "+_t(I($i))+"px; margin: 0px; } ",1)]),_:1}))}}),lF=H(Ub,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Wb=Oe({__name:"Play",setup(e){M(N),E2();const t=K();function s(r){var a;Ep.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Nt():Ht())}k$(t);const o=P(()=>B1.value||Ep.value);it();const l=it();return Bt(()=>import("./DrawingControls-e0da641d.js"),[]).then(r=>l.value=r.default),(r,a)=>(C(),G($e,null,[I(js)?(C(),j(lF,{key:0})):ve("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tn(I(Oi))},[L(Uf,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:I(js)?I(ys).width.value:void 0,scale:I(_l),onPointerdown:s},{default:E(()=>[L(Vb,{context:"slide"})]),controls:E(()=>[n("div",{class:Ue(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",I(Ro)?"pointer-events-none":""]])},[L(Bb,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!I(Se).drawings.presenterOnly&&!I(mt)&&l.value?(C(),j(I(l),{key:0,class:"ml-0"})):ve("v-if",!0)]),_:1},8,["style","width","scale"]),ve("v-if",!0)],4),L(Uw)],64))}}),zb=H(Wb,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function rF(e){return typeof e>"u"||e===null}function Xb(e){return typeof e=="object"&&e!==null}function Kb(e){return Array.isArray(e)?e:rF(e)?[]:[e]}function Yb(e,t){var s,o,l,r;if(t)for(r=Object.keys(t),s=0,o=r.length;s<o;s+=1)l=r[s],e[l]=t[l];return e}function Gb(e,t){var s="",o;for(o=0;o<t;o+=1)s+=e;return s}function Jb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Zb=rF,Qb=Xb,ex=Kb,nx=Gb,tx=Jb,sx=Yb,ji={isNothing:Zb,isObject:Qb,toArray:ex,repeat:nx,isNegativeZero:tx,extend:sx};function aF(e,t){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Mo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=aF(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Mo.prototype=Object.create(Error.prototype);Mo.prototype.constructor=Mo;Mo.prototype.toString=function(t){return this.name+": "+aF(this,t)};var as=Mo,ox=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],lx=["scalar","sequence","mapping"];function rx(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){t[String(o)]=s})}),t}function ax(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(ox.indexOf(s)===-1)throw new as('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=rx(t.styleAliases||null),lx.indexOf(this.kind)===-1)throw new as('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rn=ax;function Wp(e,t){var s=[];return e[t].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function ix(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return e}function Va(e){return this.extend(e)}Va.prototype.extend=function(t){var s=[],o=[];if(t instanceof rn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new as("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof rn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new as("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new as("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof rn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Va.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Wp(l,"implicit"),l.compiledExplicit=Wp(l,"explicit"),l.compiledTypeMap=ix(l.compiledImplicit,l.compiledExplicit),l};var cx=Va,px=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ux=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),dx=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),fx=new cx({explicit:[px,ux,dx]});function Fx(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function mx(){return null}function hx(e){return e===null}var yx=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:Fx,construct:mx,predicate:hx,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function gx(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function vx(e){return e==="true"||e==="True"||e==="TRUE"}function _x(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var wx=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:gx,construct:vx,predicate:_x,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function bx(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function xx(e){return 48<=e&&e<=55}function Cx(e){return 48<=e&&e<=57}function kx(e){if(e===null)return!1;var t=e.length,s=0,o=!1,l;if(!t)return!1;if(l=e[s],(l==="-"||l==="+")&&(l=e[++s]),l==="0"){if(s+1===t)return!0;if(l=e[++s],l==="b"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!bx(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!xx(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<t;s++)if(l=e[s],l!=="_"){if(!Cx(e.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function Ax(e){var t=e,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Sx(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ji.isNegativeZero(e)}var Ex=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:kx,construct:Ax,predicate:Sx,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),$x=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ox(e){return!(e===null||!$x.test(e)||e[e.length-1]==="_")}function Tx(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var Ix=/^[-+]?[0-9]+e/;function Px(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ji.isNegativeZero(e))return"-0.0";return s=e.toString(10),Ix.test(s)?s.replace("e",".e"):s}function Rx(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ji.isNegativeZero(e))}var Lx=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ox,construct:Tx,predicate:Rx,represent:Px,defaultStyle:"lowercase"}),Mx=fx.extend({implicit:[yx,wx,Ex,Lx]}),Dx=Mx,iF=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),cF=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Bx(e){return e===null?!1:iF.exec(e)!==null||cF.exec(e)!==null}function jx(e){var t,s,o,l,r,a,i,c=0,p=null,d,f,F;if(t=iF.exec(e),t===null&&(t=cF.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(s,o,l));if(r=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],f=+(t[11]||0),p=(d*60+f)*6e4,t[9]==="-"&&(p=-p)),F=new Date(Date.UTC(s,o,l,r,a,i,c)),p&&F.setTime(F.getTime()-p),F}function Nx(e){return e.toISOString()}var Hx=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Bx,construct:jx,instanceOf:Date,represent:Nx});function qx(e){return e==="<<"||e===null}var Vx=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:qx}),Ni=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ux(e){if(e===null)return!1;var t,s,o=0,l=e.length,r=Ni;for(s=0;s<l;s++)if(t=r.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Wx(e){var t,s,o=e.replace(/[\r\n=]/g,""),l=o.length,r=Ni,a=0,i=[];for(t=0;t<l;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(t));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function zx(e){var t="",s=0,o,l,r=e.length,a=Ni;for(o=0;o<r;o++)o%3===0&&o&&(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]),s=(s<<8)+e[o];return l=r%3,l===0?(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]):l===2?(t+=a[s>>10&63],t+=a[s>>4&63],t+=a[s<<2&63],t+=a[64]):l===1&&(t+=a[s>>2&63],t+=a[s<<4&63],t+=a[64],t+=a[64]),t}function Xx(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Kx=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ux,construct:Wx,predicate:Xx,represent:zx}),Yx=Object.prototype.hasOwnProperty,Gx=Object.prototype.toString;function Jx(e){if(e===null)return!0;var t=[],s,o,l,r,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,Gx.call(l)!=="[object Object]")return!1;for(r in l)if(Yx.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function Zx(e){return e!==null?e:[]}var Qx=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Jx,construct:Zx}),eC=Object.prototype.toString;function nC(e){if(e===null)return!0;var t,s,o,l,r,a=e;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1){if(o=a[t],eC.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function tC(e){if(e===null)return[];var t,s,o,l,r,a=e;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1)o=a[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var sC=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:nC,construct:tC}),oC=Object.prototype.hasOwnProperty;function lC(e){if(e===null)return!0;var t,s=e;for(t in s)if(oC.call(s,t)&&s[t]!==null)return!1;return!0}function rC(e){return e!==null?e:{}}var aC=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:lC,construct:rC});Dx.extend({implicit:[Hx,Vx],explicit:[Kx,Qx,sC,aC]});function zp(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var iC=new Array(256),cC=new Array(256);for(var $s=0;$s<256;$s++)iC[$s]=zp($s)?1:0,cC[$s]=zp($s);function pC(e){return Array.from(new Set(e))}function Xp(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function pF(e,t){if(!t||t==="all"||t==="*")return Xp(1,e+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...Xp(+l,r?+r+1:e+1))}return pC(s).filter(o=>o<=e).sort((o,l)=>o-l)}function uF(e){const t=P(()=>e.value.path),s=P(()=>Ke.length-1),o=P(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=P(()=>_r(o.value)),r=P(()=>Ke.find(F=>F.path===`${o.value}`)),a=P(()=>{var F,m,h;return(h=(m=(F=r.value)==null?void 0:F.meta)==null?void 0:m.slide)==null?void 0:h.id}),i=P(()=>{var F,m;return((m=(F=r.value)==null?void 0:F.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),c=P(()=>Ke.find(F=>F.path===`${Math.min(Ke.length,o.value+1)}`)),p=P(()=>Ke.filter(F=>{var m,h;return(h=(m=F.meta)==null?void 0:m.slide)==null?void 0:h.title}).reduce((F,m)=>(qi(F,m),F),[])),d=P(()=>Vi(p.value,r.value)),f=P(()=>Ui(d.value));return{route:e,path:t,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:p,treeWithActiveStatuses:d,tree:f,downloadPDF:Wa,next:Nt,nextSlide:Do,openInEditor:A$,prev:Ht,prevSlide:Bo}}function dF(e,t,s){const o=K(0);nn(()=>{wn.afterEach(async()=>{await nn(),o.value+=1})});const l=P(()=>{var c,p;return o.value,((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=P(()=>{var c,p;return+(((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.clicks)??l.value.length)}),a=P(()=>s.value<Ke.length-1||e.value<r.value),i=P(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const uC=["id"],dC=Oe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,o=st(s,"clicksElements",t),l=P(()=>({height:`${$i}px`,width:`${Dt}px`})),r=it();Bt(()=>Promise.resolve().then(()=>D2),void 0).then(p=>r.value=p.default);const a=P(()=>s.clicks),i=dF(a,s.nav.currentRoute,s.nav.currentPage),c=P(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return En(N,Ve({nav:{...s.nav,...i},configs:Se,themeConfigs:P(()=>Se.themeConfig)})),(p,d)=>{var f;return C(),G("div",{id:c.value,class:"print-slide-container",style:tn(l.value)},[L(I(oF)),L(I(Di),{is:(f=p.route)==null?void 0:f.component,"clicks-elements":I(o),"onUpdate:clicksElements":d[0]||(d[0]=F=>Ee(o)?o.value=F:null),clicks:a.value,"clicks-disabled":!1,class:Ue(I(Mi)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(C(),j(I(r),{key:0,page:+p.route.path},null,8,["page"])):ve("v-if",!0),L(I(sF))],12,uC)}}}),Kp=H(dC,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),fC=Oe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const t=e;M(N);const s=K(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=P(()=>t.route),l=uF(o);return(a,i)=>(C(),G($e,null,[L(Kp,{"clicks-elements":s.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>s.value=c),clicks:0,nav:I(l),route:o.value},null,8,["clicks-elements","nav","route"]),I(_o)?ve("v-if",!0):(C(!0),G($e,{key:0},Hs(s.value.length,c=>(C(),j(Kp,{key:c,clicks:c,nav:I(l),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),FC=H(fC,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/PrintSlide.vue"]]),mC={id:"print-content"},hC=Oe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;M(N);const s=P(()=>t.width),o=P(()=>t.width/Mt),l=P(()=>s.value/o.value),r=P(()=>l.value<Mt?s.value/Dt:o.value*Mt/Dt);let a=Ke.slice(0,-1);Nn.value.query.range&&(a=pF(a.length,Nn.value.query.range).map(p=>a[p-1]));const i=P(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return En(of,r),(c,p)=>(C(),G("div",{id:"print-container",class:Ue(i.value)},[n("div",mC,[(C(!0),G($e,null,Hs(I(a),d=>(C(),j(FC,{key:d.path,route:d},null,8,["route"]))),128))]),cn(c.$slots,"controls")],2))}});const yC=H(hC,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/PrintContainer.vue"]]),gC=Oe({__name:"Print",setup(e){return M(N),bs(()=>{js?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(C(),G($e,null,[I(js)?(C(),j(lF,{key:0})):ve("v-if",!0),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(I(Oi))},[L(yC,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:I(ys).width.value},null,8,["style","width"])],4)],64))}});const vC=H(gC,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/internals/Print.vue"]]);const _C={class:"slidev-layout end"},wC={__name:"end",setup(e){return M(N),(t,s)=>(C(),G("div",_C,[cn(t.$slots,"default",{},()=>[u("END")],!0)]))}},bC=H(wC,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/layouts/end.vue"]]),xC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},CC=n("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),kC=[CC];function AC(e,t){return C(),G("svg",xC,kC)}const SC={name:"carbon-logo-github",render:AC},EC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$C=n("path",{fill:"currentColor",d:"M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"},null,-1),OC=[$C];function TC(e,t){return C(),G("svg",EC,OC)}const IC={name:"carbon-edit",render:TC},PC="/slides-brand-new-angular/assets/icon_angular_gradient-2cf22d9c.png",RC={class:"slidev-layout intro"},LC={class:"my-auto"},MC={__name:"intro",setup(e){return M(N),(t,s)=>(C(),G("div",RC,[n("div",LC,[cn(t.$slots,"default")])]))}},DC=H(MC,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/slidev-theme-dracula/layouts/intro.vue"]]),BC=n("img",{src:PC,class:"m-auto h-40"},null,-1),jC=n("h1",null,"Brand New Angular",-1),NC=n("p",null,"An overview about Angular Renaissance",-1),HC={class:"pt-12"},qC={class:"abs-br m-6 flex gap-2"},VC={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},UC={__name:"1",setup(e){const t={theme:"dracula",layout:"intro",favicon:"https://angular.dev/assets/icons/favicon.ico",background:"https://unsplash.com/photos/twukN12EN7c/download?force=true&w=1920",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss"},s=M(N);return(o,l)=>{const r=tF,a=IC,i=SC;return C(),j(DC,se(te(t)),{default:E(()=>[ve(" # <skill-icons-angular-dark /> "),BC,jC,NC,n("div",HC,[n("span",{onClick:l[0]||(l[0]=(...c)=>I(s).nav.next&&I(s).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[u(" Let's start! "),L(r,{class:"inline"})])]),n("div",qC,[n("button",{onClick:l[1]||(l[1]=c=>I(s).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[L(a)]),n("a",VC,[L(i)])])]),_:1},16)}}},WC=H(UC,[["__file","/@slidev/slides/1.md"]]),zC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},XC=My('<g fill="none"><rect width="256" height="256" fill="#242938" rx="60"></rect><path fill="#E23237" d="M34.25 61.125L127.325 28l95.525 32.612L207.412 183.7L127.325 228l-78.787-43.725L34.25 61.125Z"></path><path fill="#B52E31" d="M222.85 60.612L127.325 28v200l80.087-44.3L222.85 60.613Z"></path><path fill="#fff" d="m127.469 51.375l-58 129l21.644-.438l11.687-29.149h51.875l12.7 29.375l20.637.437l-60.543-129.225Zm.143 41.412l19.625 40.982H110.5l17.169-40.982h-.057Z"></path></g>',1),KC=[XC];function YC(e,t){return C(),G("svg",zC,KC)}const GC={name:"skill-icons-angular-dark",render:YC},JC={class:"slidev-layout author w-full h-full flex flex-col justify-between"},ZC={class:"my-auto text-center"},QC={__name:"author",setup(e){return M(N),(t,s)=>(C(),G("div",JC,[n("div",ZC,[cn(t.$slots,"default")])]))}},ek=H(QC,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/slidev-theme-dracula/layouts/author.vue"]]),nk=n("p",null,[n("img",{src:"https://github.com/valeriocomo.png?size=200",alt:"image of Valerio"})],-1),tk=n("h1",null,"About Me",-1),sk=n("h2",null,"Valerio Como",-1),ok=n("p",null,"👨🏽‍💻 Senior Lead Developer @ Apuliasoft",-1),lk=n("p",null,"📝 Dev blog",-1),rk={__name:"2",setup(e){const t={layout:"author",class:"text-center",transition:"slide-up",srcSequence:"./pages/about-me.md"};return M(N),(s,o)=>{const l=GC;return C(),j(ek,se(te(t)),{default:E(()=>[nk,tk,sk,ok,lk,L(l),u(" Developing web app with Angular since 2016 ")]),_:1},16)}}},ak=H(rk,[["__file","/@slidev/slides/2.md"]]),ik={class:"slidev-layout section w-full h-full grid"},ck={class:"my-auto text-center"},pk={__name:"section",setup(e){return M(N),(t,s)=>(C(),G("div",ik,[n("div",ck,[cn(t.$slots,"default")])]))}},xn=H(pk,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/slidev-theme-dracula/layouts/section.vue"]]),uk=n("h1",null,"Why Angular Renaissance?",-1),dk={__name:"3",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[uk]),_:1},16))}},fk=H(dk,[["__file","/@slidev/slides/3.md"]]),Fk="/slides-brand-new-angular/assets/barbero-a63f697f.avif",mk={class:"slidev-layout default"},hk={__name:"default",setup(e){return M(N),(t,s)=>(C(),G("div",mk,[cn(t.$slots,"default")]))}},_e=H(hk,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/layouts/default.vue"]]),yk=n("img",{src:Fk,class:"m-auto"},null,-1),gk={__name:"4",setup(e){const t={transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[yk]),_:1},16))}},vk=H(gk,[["__file","/@slidev/slides/4.md"]]),_k="/slides-brand-new-angular/assets/frameworks-867bbfe2.png",wk=n("img",{src:_k,class:"m-auto"},null,-1),bk={__name:"5",setup(e){const t={transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[wk]),_:1},16))}},xk=H(bk,[["__file","/@slidev/slides/5.md"]]),Yp=["ul","ol"],Cn=Oe({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const e=gc("click"),t=gc("after"),s=(p,d,f)=>wi(p,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=Tv(o);const l=(p,d=1)=>{let f=0;return[p.map(m=>{if(!ct(m))return m;if(Yp.includes(m.type)&&Array.isArray(m.children)){const[h,_]=a(m.children,d+1);return f+=_,Qe(m,{},[h])}return Qe(m)}),f]};let r=0;const a=(p,d=1)=>{let f=0;return[p.map(m=>{if(!ct(m))return m;const h=f%this.every===0?e:t;let _,b=0;if(d<+this.depth&&Array.isArray(m.children)){const[x,g]=l(m.children,d);_=Qe(m,{},[x]),b=g,f+=g+1}else _=Qe(m),f++;const w=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-b).toString();return r++,s(_,h,typeof w=="string"&&!w.startsWith("-")?`+${w}`:w)}),f]};return o.length===1&&Yp.includes(o[0].type)&&Array.isArray(o[0].children)?Qe(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),Jn=Oe({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return L(Cn,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),Ck=n("h1",null,"Why Angular Renaissance?",-1),kk=n("h3",null,"PROs",-1),Ak=n("ul",null,[n("li",null,[n("p",null,"CLI")]),n("li",null,[n("p",null,"solid environment")]),n("li",null,[n("p",null,"API stability")])],-1),Sk=n("h3",null,"CONs",-1),Ek=n("ul",null,[n("li",null,[n("p",null,"learning curve")]),n("li",null,[n("p",null,"performance")]),n("li",null,[n("p",null,"framework footprint")])],-1),$k={__name:"6",setup(e){const t={transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"};return M(N),(s,o)=>{const l=Jn,r=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[Ck,L(l,null,{default:E(()=>[kk]),_:1}),L(r,null,{default:E(()=>[Ak]),_:1}),L(l,null,{default:E(()=>[Sk]),_:1}),L(r,null,{default:E(()=>[Ek]),_:1})]),_:1},16)}}},Ok=H($k,[["__file","/@slidev/slides/6.md"]]),Tk=n("h1",null,"What’s Angular renaissance?",-1),Ik={__name:"7",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/what-s-angular-renaissance/what-s-angular-renaissance.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[Tk]),_:1},16))}},Pk=H(Ik,[["__file","/@slidev/slides/7.md"]]),Rk={class:"slidev-layout quote"},Lk={class:"my-auto"},Mk={__name:"quote",setup(e){return M(N),(t,s)=>(C(),G("div",Rk,[n("div",Lk,[cn(t.$slots,"default")])]))}},Hi=H(Mk,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/slidev-theme-dracula/layouts/quote.vue"]]),Dk=n("h1",null,'"It’s a journey to a new Developer Experience"',-1),Bk={__name:"8",setup(e){const t={layout:"quote",transition:"slide-up",srcSequence:"./pages/what-s-angular-renaissance/what-s-angular-renaissance.md"};return M(N),(s,o)=>(C(),j(Hi,se(te(t)),{default:E(()=>[Dk]),_:1},16))}},jk=H(Bk,[["__file","/@slidev/slides/8.md"]]),Nk=n("h1",null,"A new DX",-1),Hk={__name:"9",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/dx/dx.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[Nk]),_:1},16))}},qk=H(Hk,[["__file","/@slidev/slides/9.md"]]),Vk=n("h1",null,"A new DX",-1),Uk=n("ul",null,[n("li",null,[n("p",null,"modern")]),n("li",null,[n("p",null,"easier to learn")]),n("li",null,[n("p",null,"leaner")])],-1),Wk={__name:"10",setup(e){const t={transition:"slide-up",srcSequence:"./pages/dx/dx.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[Vk,L(l,null,{default:E(()=>[Uk]),_:1})]),_:1},16)}}},zk=H(Wk,[["__file","/@slidev/slides/10.md"]]),Xk="/slides-brand-new-angular/assets/mr-bean-copying-23ed650f.jpg",Kk=n("img",{src:Xk,class:"m-auto"},null,-1),Yk={__name:"11",setup(e){const t={transition:"slide-up",srcSequence:"./pages/dx/dx.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[Kk]),_:1},16))}},Gk=H(Yk,[["__file","/@slidev/slides/11.md"]]);function Gp(e){return e.startsWith("/")?"/slides-brand-new-angular/"+e.slice(1):e}function Jk(e,t=!1){const s=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Gp(e)})`:`url("${Gp(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Zk={class:"my-auto w-full"},Qk=Oe({__name:"cover",props:{background:{default:""}},setup(e){const t=e;M(N);const s=P(()=>Jk(t.background,!0));return(o,l)=>(C(),G("div",{class:"slidev-layout cover",style:tn(s.value)},[n("div",Zk,[cn(o.$slots,"default")])],4))}}),e6=H(Qk,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/slidev-theme-dracula/layouts/cover.vue"]]),n6=n("h1",null,"New Features",-1),t6={__name:"12",setup(e){const t={layout:"cover",class:"text-center",transition:"slide-up",srcSequence:"./pages/new-features.md"};return M(N),(s,o)=>(C(),j(e6,se(te(t)),{default:E(()=>[n6]),_:1},16))}},s6=H(t6,[["__file","/@slidev/slides/12.md"]]),o6=n("h1",null,"New Features",-1),l6=n("ul",null,[n("li",null,[n("p",null,"Standalone Components")]),n("li",null,[n("p",null,"Signals")]),n("li",null,[n("p",null,"Template")]),n("li",null,[n("p",null,"Leaner DX")]),n("li",null,[n("p",null,"SSR && Hydration")]),n("li",null,[n("p",null,"build toolchain (Vite + esbuild)")]),n("li",null,[n("p",null,"testing (jest + web test runner)")])],-1),r6={__name:"13",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-features.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[o6,ve(" - <https://blog.angular.io/angular-v16-is-here-4d7a28ec680d> "),L(l,null,{default:E(()=>[l6]),_:1})]),_:1},16)}}},a6=H(r6,[["__file","/@slidev/slides/13.md"]]),i6="/slides-brand-new-angular/assets/enrico-mentana-nottata-c2053545.gif",c6=n("img",{src:i6,class:"m-auto"},null,-1),p6=n("p",null,"#maratonamentana",-1),u6=n("p",null,"#gdgdevfest2023",-1),d6={__name:"14",setup(e){const t={layout:"default",class:"text-center",transition:"slide-up",srcSequence:"./pages/new-features.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[c6,p6,u6]),_:1},16))}},f6=H(d6,[["__file","/@slidev/slides/14.md"]]),F6=n("h1",null,"Standalone components",-1),m6={__name:"15",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[F6]),_:1},16))}},h6=H(m6,[["__file","/@slidev/slides/15.md"]]),y6="/slides-brand-new-angular/assets/standalone-components-01a35456.png",g6=n("h1",null,"Standalone components",-1),v6=n("img",{src:y6,class:"m-auto"},null,-1),_6={__name:"16",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[g6,v6]),_:1},16))}},w6=H(_6,[["__file","/@slidev/slides/16.md"]]),b6={class:"slidev-layout statement"},x6={class:"my-auto"},C6={__name:"statement",setup(e){return M(N),(t,s)=>(C(),G("div",b6,[n("div",x6,[cn(t.$slots,"default")])]))}},Xo=H(C6,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/slidev-theme-dracula/layouts/statement.vue"]]),k6=n("h1",null,"Why NgModule?",-1),A6={__name:"17",setup(e){const t={layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>(C(),j(Xo,se(te(t)),{default:E(()=>[k6]),_:1},16))}},S6=H(A6,[["__file","/@slidev/slides/17.md"]]),E6=n("h1",null,"Why NgModule?",-1),$6=n("ul",null,[n("li",null,[n("p",null,"modularization")]),n("li",null,[n("p",null,"declaration context")]),n("li",null,[n("p",null,"compilation context (before Ivy adoption)")])],-1),O6={__name:"18",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[E6,L(l,null,{default:E(()=>[$6]),_:1})]),_:1},16)}}},T6=H(O6,[["__file","/@slidev/slides/18.md"]]),I6=n("h1",null,"Why NgModule?",-1),P6=n("h3",null,"drawbacks",-1),R6=n("ul",null,[n("li",null,[n("p",null,"misleading modularization")]),n("li",null,[n("p",null,"new concept for newbie")])],-1),L6=n("h3",null,"evolution",-1),M6=n("ul",null,[n("li",null,[n("p",null,"Ivy adoption")]),n("li",null,[n("p",null,"optional artifact")])],-1),D6={__name:"19",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[I6,L(l,null,{default:E(()=>[P6,R6]),_:1}),L(l,null,{default:E(()=>[L6,M6]),_:1})]),_:1},16)}}},B6=H(D6,[["__file","/@slidev/slides/19.md"]]),j6=n("h1",null,"Standalone components - Anatomy",-1),N6={__name:"20",setup(e){const t={layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>(C(),j(Xo,se(te(t)),{default:E(()=>[j6]),_:1},16))}},H6=H(N6,[["__file","/@slidev/slides/20.md"]]),q6={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},V6=n("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),U6=[V6];function W6(e,t){return C(),G("svg",q6,U6)}const z6={name:"ph-clipboard",render:W6},X6={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},K6=n("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Y6=[K6];function G6(e,t){return C(),G("svg",X6,Y6)}const J6={name:"ph-check-circle",render:G6},Z6=["title"],Q6=Oe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;M(N);const s=M(mo),o=M(os),l=M(ho);function r(f=5){const F=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=m.length;for(let _=0;_<f;_++)F.push(m.charAt(Math.floor(Math.random()*h)));return F.join("")}const a=K(),i=bn();Ct(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,F=P(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),m=P(()=>t.ranges[F.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const h=r(),_=Iv(t.ranges.length-1).map(b=>h+b);o!=null&&o.value&&(o.value.push(..._),dr(()=>_.forEach(b=>Ca(o.value,b)),i))}bs(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const b of _){const w=Array.from(b.querySelectorAll(".line")),x=pF(w.length,m.value);if(w.forEach((g,S)=>{const k=x.includes(S+1);g.classList.toggle(es,!0),g.classList.toggle("highlighted",k),g.classList.toggle("dishonored",!k)}),t.maxHeight){const g=Array.from(b.querySelectorAll(".line.highlighted"));g.reduce((k,$)=>$.offsetHeight+k,0)>a.value.offsetHeight?g[0].scrollIntoView({behavior:"smooth",block:"start"}):g.length>0&&g[Math.round((g.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=$8();function d(){var F,m;const f=(m=(F=a.value)==null?void 0:F.querySelector(".slidev-code"))==null?void 0:m.textContent;f&&p(f)}return(f,F)=>{const m=J6,h=z6;return C(),G("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:tn({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[cn(f.$slots,"default"),I(Se).codeCopy?(C(),G("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:I(c)?"Copied":"Copy",onClick:F[0]||(F[0]=_=>d())},[I(c)?(C(),j(m,{key:0,class:"p-2 w-8 h-8"})):(C(),j(h,{key:1,class:"p-2 w-8 h-8"}))],8,Z6)):ve("v-if",!0)],4)}}}),ze=H(Q6,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),eA=n("h1",null,"Standalone components - Anatomy",-1),nA=n("p",null,"example taken from a real-world project",-1),tA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1),sA={__name:"21",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[eA,nA,L(l,Le({},{ranges:[""]}),{default:E(()=>[tA]),_:1},16)]),_:1},16)}}},oA=H(sA,[["__file","/@slidev/slides/21.md"]]),lA=n("h1",null,"Standalone components - Bootstrapping",-1),rA={__name:"22",setup(e){const t={layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>(C(),j(Xo,se(te(t)),{default:E(()=>[lA]),_:1},16))}},aA=H(rA,[["__file","/@slidev/slides/22.md"]]),iA=n("h1",null,"Standalone components - Bootstrapping",-1),cA=n("p",null,"main.ts with NgModule",-1),pA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { enableProdMode } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { platformBrowserDynamic } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser-dynamic"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppModule } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/app.module"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { environment } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./environments/environment"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"platformBrowserDynamic"),n("span",{style:{color:"#F8F8F2"}},"()."),n("span",{style:{color:"#50FA7B"}},"bootstrapModule"),n("span",{style:{color:"#F8F8F2"}},"(AppModule)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  ."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"err"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(err));")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { enableProdMode } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { platformBrowserDynamic } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser-dynamic"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppModule } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/app.module"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { environment } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./environments/environment"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"platformBrowserDynamic"),n("span",{style:{color:"#F8F8F2"}},"()."),n("span",{style:{color:"#50FA7B"}},"bootstrapModule"),n("span",{style:{color:"#F8F8F2"}},"(AppModule)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  ."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"err"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(err));")])])])],-1),uA=n("p",null,"main.ts with standalone components",-1),dA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { bootstrapApplication } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { appConfig } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/app.config"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppComponent } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/app.component"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"bootstrapApplication"),n("span",{style:{color:"#F8F8F2"}},"(AppComponent, appConfig)."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"err"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(err)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},");")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { bootstrapApplication } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { appConfig } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/app.config"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppComponent } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/app.component"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"bootstrapApplication"),n("span",{style:{color:"#F8F8F2"}},"(AppComponent, appConfig)."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"err"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(err)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},");")])])])],-1),fA={__name:"23",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=ze,r=Jn;return C(),j(_e,se(te(t)),{default:E(()=>[iA,L(r,null,{default:E(()=>[cA,L(l,Le({},{ranges:[""]}),{default:E(()=>[pA]),_:1},16)]),_:1}),L(r,null,{default:E(()=>[uA,L(l,Le({},{ranges:[""]}),{default:E(()=>[dA]),_:1},16)]),_:1})]),_:1},16)}}},FA=H(fA,[["__file","/@slidev/slides/23.md"]]),mA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideHttpClient, withInterceptors } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/common/http"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { ApplicationConfig, importProvidersFrom } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideAnimations } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser/animations"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideRouter, withHashLocation, withRouterConfig } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// other imports were here")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { environment } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"../enviroments/enviroment"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { appRoutes } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.routes"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// other functions/consts were here")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appConfig"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"ApplicationConfig"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  providers"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideHttpClient"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"withInterceptors"),n("span",{style:{color:"#F8F8F2"}},"(["),n("span",{style:{color:"#FF79C6"}},"..."),n("span",{style:{color:"#F8F8F2"}},"AUTH_INTERCEPTORS])),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideAnimations"),n("span",{style:{color:"#F8F8F2"}},"(),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideRouter"),n("span",{style:{color:"#F8F8F2"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      appRoutes,")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#50FA7B"}},"withRouterConfig"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        onSameUrlNavigation"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"reload"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      }),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#50FA7B"}},"withHashLocation"),n("span",{style:{color:"#F8F8F2"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    ),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"importProvidersFrom"),n("span",{style:{color:"#F8F8F2"}},"(ApiModule."),n("span",{style:{color:"#50FA7B"}},"forRoot"),n("span",{style:{color:"#F8F8F2"}},"(apiConfigFactory)),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"importProvidersFrom"),n("span",{style:{color:"#F8F8F2"}},"(FormlyModule."),n("span",{style:{color:"#50FA7B"}},"forRoot"),n("span",{style:{color:"#F8F8F2"}},"(FORMLY_CONFIG)),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    { provide"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," SIDEBAR_CONFIG_INJECTION_TOKEN, useValue"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," sidebarConfig },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    { provide"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," APP_NAME_INJECTOR, useValue"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," APP_NAME },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  ],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"};")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideHttpClient, withInterceptors } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/common/http"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { ApplicationConfig, importProvidersFrom } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideAnimations } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser/animations"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideRouter, withHashLocation, withRouterConfig } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// other imports were here")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { environment } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"../enviroments/enviroment"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { appRoutes } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.routes"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// other functions/consts were here")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appConfig"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"ApplicationConfig"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  providers"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideHttpClient"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"withInterceptors"),n("span",{style:{color:"#F8F8F2"}},"(["),n("span",{style:{color:"#FF79C6"}},"..."),n("span",{style:{color:"#F8F8F2"}},"AUTH_INTERCEPTORS])),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideAnimations"),n("span",{style:{color:"#F8F8F2"}},"(),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideRouter"),n("span",{style:{color:"#F8F8F2"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      appRoutes,")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#50FA7B"}},"withRouterConfig"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        onSameUrlNavigation"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"reload"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      }),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#50FA7B"}},"withHashLocation"),n("span",{style:{color:"#F8F8F2"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    ),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"importProvidersFrom"),n("span",{style:{color:"#F8F8F2"}},"(ApiModule."),n("span",{style:{color:"#50FA7B"}},"forRoot"),n("span",{style:{color:"#F8F8F2"}},"(apiConfigFactory)),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"importProvidersFrom"),n("span",{style:{color:"#F8F8F2"}},"(FormlyModule."),n("span",{style:{color:"#50FA7B"}},"forRoot"),n("span",{style:{color:"#F8F8F2"}},"(FORMLY_CONFIG)),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    { provide"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," SIDEBAR_CONFIG_INJECTION_TOKEN, useValue"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," sidebarConfig },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    { provide"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," APP_NAME_INJECTOR, useValue"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," APP_NAME },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  ],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"};")])])])],-1),hA={__name:"24",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[L(l,Le({},{ranges:[""]}),{default:E(()=>[mA]),_:1},16)]),_:1},16)}}},yA=H(hA,[["__file","/@slidev/slides/24.md"]]),gA=n("h1",null,"Standalone components - Router",-1),vA=n("p",null,"loadComponent & loadChildren",-1),_A=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appRoutes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/layout/main/main.layout"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.MainLayout),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        children"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"analytics"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                "),n("span",{style:{color:"#50FA7B"}},"loadChildren"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/analytics/analytics-shell"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.routes)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"//in analytics-shell.routes.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," routes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},", ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        component"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," AnalyticsShellComponent")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appRoutes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/layout/main/main.layout"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.MainLayout),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        children"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"analytics"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                "),n("span",{style:{color:"#50FA7B"}},"loadChildren"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/analytics/analytics-shell"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.routes)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"//in analytics-shell.routes.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," routes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},", ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        component"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," AnalyticsShellComponent")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")])])])],-1),wA={__name:"25",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[gA,vA,L(l,Le({},{ranges:[""]}),{default:E(()=>[_A]),_:1},16)]),_:1},16)}}},bA=H(wA,[["__file","/@slidev/slides/25.md"]]),xA=n("h1",null,"Standalone components - Router",-1),CA=n("p",null,"export with default",-1),kA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appRoutes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/layout/main/main.layout"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.MainLayout),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        children"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"analytics"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                "),n("span",{style:{color:"#50FA7B"}},"loadChildren"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/analytics/analytics-shell"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"//in analytics-shell.routes.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},", ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        component"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," AnalyticsShellComponent")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"] "),n("span",{style:{color:"#FF79C6"}},"satisfies"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}},";")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appRoutes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/layout/main/main.layout"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.MainLayout),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        children"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"analytics"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                "),n("span",{style:{color:"#50FA7B"}},"loadChildren"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/analytics/analytics-shell"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"//in analytics-shell.routes.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},", ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        component"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," AnalyticsShellComponent")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"] "),n("span",{style:{color:"#FF79C6"}},"satisfies"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}},";")])])])],-1),AA={__name:"26",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[xA,CA,L(l,Le({},{ranges:[""]}),{default:E(()=>[kA]),_:1},16)]),_:1},16)}}},SA=H(AA,[["__file","/@slidev/slides/26.md"]]),EA=n("h1",null,"Standalone components - Router",-1),$A=n("p",null,"providing services",-1),OA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appRoutes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/layout/main/main.layout"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.MainLayout),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        providing"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [LoggerService],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        children"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"analytics"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                "),n("span",{style:{color:"#50FA7B"}},"loadChildren"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/analytics/analytics-shell"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"//in analytics-shell.routes.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},", ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        component"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," AnalyticsShellComponent")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"] "),n("span",{style:{color:"#FF79C6"}},"satisfies"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}},";")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," appRoutes"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/layout/main/main.layout"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"m"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," m.MainLayout),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        providing"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [LoggerService],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        children"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"analytics"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                "),n("span",{style:{color:"#50FA7B"}},"loadChildren"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@app/analytics/analytics-shell"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"//in analytics-shell.routes.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''"),n("span",{style:{color:"#F8F8F2"}},", ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        component"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," AnalyticsShellComponent")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"] "),n("span",{style:{color:"#FF79C6"}},"satisfies"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),n("span",{style:{color:"#F8F8F2"}},";")])])])],-1),TA={__name:"27",setup(e){const t={transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[EA,$A,L(l,Le({},{ranges:[""]}),{default:E(()=>[OA]),_:1},16)]),_:1},16)}}},IA=H(TA,[["__file","/@slidev/slides/27.md"]]),PA="/slides-brand-new-angular/assets/qr-standalone-components-vc-e719302d.png",RA={class:"slidev-layout center h-full grid place-content-center"},LA={class:"my-auto"},MA={__name:"center",setup(e){return M(N),(t,s)=>(C(),G("div",RA,[n("div",LA,[cn(t.$slots,"default")])]))}},vr=H(MA,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/layouts/center.vue"]]),DA=n("p",null,"Link to my blog post 👇",-1),BA=n("img",{src:PA,class:"m-auto h-100"},null,-1),jA={__name:"28",setup(e){const t={layout:"center",class:"text-center",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"};return M(N),(s,o)=>(C(),j(vr,se(te(t)),{default:E(()=>[DA,BA]),_:1},16))}},NA=H(jA,[["__file","/@slidev/slides/28.md"]]),HA=n("h1",null,"Signals",-1),qA={__name:"29",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/signals/signals.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[HA]),_:1},16))}},VA=H(qA,[["__file","/@slidev/slides/29.md"]]),UA=n("h1",null,"Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.",-1),WA={__name:"30",setup(e){const t={layout:"quote",transition:"slide-up",srcSequence:"./pages/signals/signals.md"};return M(N),(s,o)=>(C(),j(Hi,se(te(t)),{default:E(()=>[UA]),_:1},16))}},zA=H(WA,[["__file","/@slidev/slides/30.md"]]),XA=n("h1",null,"Signals",-1),KA=n("ul",null,[n("li",null,[n("p",null,"developer preview in v16")]),n("li",null,[n("p",null,"API for state management")]),n("li",null,[n("p",null,"easing reactivity in components")]),n("li",null,[n("p",null,"stable in v17")]),n("li",null,[n("p",null,"@ngrx/signals")])],-1),YA={__name:"31",setup(e){const t={transition:"slide-up",srcSequence:"./pages/signals/signals.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[XA,L(l,null,{default:E(()=>[KA]),_:1})]),_:1},16)}}},GA=H(YA,[["__file","/@slidev/slides/31.md"]]),JA=n("h1",null,"Signals",-1),ZA=n("p",null,"APIs",-1),QA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"signal"),n("span",{style:{color:"#F8F8F2"}},"() "),n("span",{style:{color:"#6272A4"}},"// create a new signal")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"computed"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," W) "),n("span",{style:{color:"#6272A4"}},"// react to a change of a signal")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"set"),n("span",{style:{color:"#F8F8F2"}},"(value: T) "),n("span",{style:{color:"#6272A4"}},"// set the value")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"update"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"T"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," T) "),n("span",{style:{color:"#6272A4"}},"// update signal's value")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"effect"),n("span",{style:{color:"#F8F8F2"}},"() "),n("span",{style:{color:"#6272A4"}},"// handling side effect logic")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"signal"),n("span",{style:{color:"#F8F8F2"}},"() "),n("span",{style:{color:"#6272A4"}},"// create a new signal")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"computed"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," W) "),n("span",{style:{color:"#6272A4"}},"// react to a change of a signal")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"set"),n("span",{style:{color:"#F8F8F2"}},"(value: T) "),n("span",{style:{color:"#6272A4"}},"// set the value")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"update"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"T"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," T) "),n("span",{style:{color:"#6272A4"}},"// update signal's value")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"effect"),n("span",{style:{color:"#F8F8F2"}},"() "),n("span",{style:{color:"#6272A4"}},"// handling side effect logic")])])])],-1),eS={__name:"32",setup(e){const t={transition:"slide-up",srcSequence:"./pages/signals/signals.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[JA,ZA,L(l,Le({},{ranges:[""]}),{default:E(()=>[QA]),_:1},16)]),_:1},16)}}},nS=H(eS,[["__file","/@slidev/slides/32.md"]]),tS=n("h1",null,"Signals",-1),sS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { ChangeDetectionStrategy, Component, computed, signal } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#F1FA8C"}},"`")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},"  <div>{{number()}}</div>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},"  <div>{{squared()}}</div>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},'  <button (click)="clickHandler()">Next</button>')]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},"  `"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  changeDetection"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"ChangeDetectionStrategy"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"OnPush")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," number "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"signal"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"1"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," squared "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"computed"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," Math."),n("span",{style:{color:"#50FA7B"}},"pow"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#50FA7B"}},"number"),n("span",{style:{color:"#F8F8F2"}},"(), "),n("span",{style:{color:"#BD93F9"}},"2"),n("span",{style:{color:"#F8F8F2"}},"));")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"clickHandler"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".number."),n("span",{style:{color:"#50FA7B"}},"set"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#50FA7B"}},"number"),n("span",{style:{color:"#F8F8F2"}},"() "),n("span",{style:{color:"#FF79C6"}},"+"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"1"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { ChangeDetectionStrategy, Component, computed, signal } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#F1FA8C"}},"`")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},"  <div>{{number()}}</div>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},"  <div>{{squared()}}</div>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},'  <button (click)="clickHandler()">Next</button>')]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F1FA8C"}},"  `"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  changeDetection"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"ChangeDetectionStrategy"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"OnPush")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," number "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"signal"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"1"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," squared "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"computed"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," Math."),n("span",{style:{color:"#50FA7B"}},"pow"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#50FA7B"}},"number"),n("span",{style:{color:"#F8F8F2"}},"(), "),n("span",{style:{color:"#BD93F9"}},"2"),n("span",{style:{color:"#F8F8F2"}},"));")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"clickHandler"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".number."),n("span",{style:{color:"#50FA7B"}},"set"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#50FA7B"}},"number"),n("span",{style:{color:"#F8F8F2"}},"() "),n("span",{style:{color:"#FF79C6"}},"+"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"1"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),oS={__name:"33",setup(e){const t={transition:"slide-up",srcSequence:"./pages/signals/signals.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[tS,L(l,Le({},{ranges:[""]}),{default:E(()=>[sS]),_:1},16)]),_:1},16)}}},lS=H(oS,[["__file","/@slidev/slides/33.md"]]),rS=n("h1",null,"Signals",-1),aS=n("h3",null,"RxJS Interoperability",-1),iS=n("ul",null,[n("li",null,[n("p",null,"toSignal")]),n("li",null,[n("p",null,"toObservable")])],-1),cS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { toSignal, toObservable } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," @angular/core/rxjs-interop")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { toSignal, toObservable } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," @angular/core/rxjs-interop")])])])],-1),pS={__name:"34",setup(e){const t={transition:"slide-up",srcSequence:"./pages/signals/signals.md"};return M(N),(s,o)=>{const l=Cn,r=ze,a=Jn;return C(),j(_e,se(te(t)),{default:E(()=>[rS,aS,L(l,null,{default:E(()=>[iS]),_:1}),L(a,null,{default:E(()=>[L(r,Le({},{ranges:[""]}),{default:E(()=>[cS]),_:1},16)]),_:1})]),_:1},16)}}},uS=H(pS,[["__file","/@slidev/slides/34.md"]]),dS="/slides-brand-new-angular/assets/qr-angular-signals-vc-83414d69.png",fS=n("p",null,"Link to my blog post 👇",-1),FS=n("img",{src:dS,class:"m-auto h-100"},null,-1),mS={__name:"35",setup(e){const t={layout:"center",class:"text-center",transition:"slide-up",srcSequence:"./pages/signals/signals.md"};return M(N),(s,o)=>(C(),j(vr,se(te(t)),{default:E(()=>[fS,FS]),_:1},16))}},hS=H(mS,[["__file","/@slidev/slides/35.md"]]),yS=n("h1",null,"Template - Control Flow",-1),gS={__name:"36",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[yS]),_:1},16))}},vS=H(gS,[["__file","/@slidev/slides/36.md"]]),_S=n("h1",null,"Template - Control Flow",-1),wS=n("ul",null,[n("li",null,[n("p",null,"developer preview")]),n("li",null,[n("p",null,"avoiding directive import (NgIf, NgFor etc)")]),n("li",null,[n("p",null,"better performance")]),n("li",null,[n("p",null,"zone-less")])],-1),bS={__name:"37",setup(e){const t={transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[_S,L(l,null,{default:E(()=>[wS]),_:1})]),_:1},16)}}},xS=H(bS,[["__file","/@slidev/slides/37.md"]]),CS=n("h1",null,"Template - Control Flow > conditionals",-1),kS=n("p",null,[n("strong",null,"@if")],-1),AS=n("ul",null,[n("li",null,[n("p",null,"replace NgIf")]),n("li",null,[n("p",null,"conditionally displays a content when its condition is matched")])],-1),SS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@if (a > b) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  {{a}} is greater than {{b}}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @else if (b > a) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  {{a}} is less than {{b}}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @else {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  {{a}} is equal to {{b}}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@if (a > b) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  {{a}} is greater than {{b}}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @else if (b > a) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  {{a}} is less than {{b}}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @else {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  {{a}} is equal to {{b}}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),ES={__name:"38",setup(e){const t={transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"};return M(N),(s,o)=>{const l=Jn,r=ze;return C(),j(_e,se(te(t)),{default:E(()=>[CS,kS,L(l,null,{default:E(()=>[AS]),_:1}),L(l,null,{default:E(()=>[L(r,Le({},{ranges:[""]}),{default:E(()=>[SS]),_:1},16)]),_:1})]),_:1},16)}}},$S=H(ES,[["__file","/@slidev/slides/38.md"]]),OS=n("h1",null,"Template - Control Flow > repeaters",-1),TS=n("p",null,[n("strong",null,"@for")],-1),IS=n("ul",null,[n("li",null,[n("p",null,"replace NgFor")]),n("li",null,[n("p",null,"displays a content for each items in a collection")]),n("li",null,[n("p",null,"track is mandatory")]),n("li",null,[n("p",null,"better DOM manipulation algorithm")])],-1),PS=n("p",null,[n("strong",null,"@empty"),u(" displays when there are no items")],-1),RS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@for (item of items; track item.name) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},"> {{ item.name }} </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @empty {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},"> There are no items. </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@for (item of items; track item.name) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},"> {{ item.name }} </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @empty {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},"> There are no items. </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),LS={__name:"39",setup(e){const t={transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"};return M(N),(s,o)=>{const l=Jn,r=ze;return C(),j(_e,se(te(t)),{default:E(()=>[OS,TS,L(l,null,{default:E(()=>[IS]),_:1}),L(l,null,{default:E(()=>[PS]),_:1}),L(l,null,{default:E(()=>[L(r,Le({},{ranges:[""]}),{default:E(()=>[RS]),_:1},16)]),_:1})]),_:1},16)}}},MS=H(LS,[["__file","/@slidev/slides/39.md"]]),DS=n("h1",null,"Template - Control Flow > selection",-1),BS=n("p",null,[n("strong",null,"@switch")],-1),jS=n("ul",null,[n("li",null,[n("p",null,"replace NgSwitch")]),n("li",null,[n("p",null,[u("it’s identical to Javascript "),n("em",null,"switch"),u(" statement")])]),n("li",null,[n("p",null,"type-checking")])],-1),NS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@switch (condition) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  @case (caseA) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    Case A.")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  @case (caseB) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    Case B.")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  @default {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    Default case.")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@switch (condition) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  @case (caseA) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    Case A.")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  @case (caseB) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    Case B.")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  @default {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    Default case.")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),HS={__name:"40",setup(e){const t={transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"};return M(N),(s,o)=>{const l=Jn,r=ze;return C(),j(_e,se(te(t)),{default:E(()=>[DS,BS,L(l,null,{default:E(()=>[jS]),_:1}),L(l,null,{default:E(()=>[L(r,Le({},{ranges:[""]}),{default:E(()=>[NS]),_:1},16)]),_:1})]),_:1},16)}}},qS=H(HS,[["__file","/@slidev/slides/40.md"]]),VS=n("h1",null,"Template - Deferrable views",-1),US={__name:"41",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/deferrable-views.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[VS]),_:1},16))}},WS=H(US,[["__file","/@slidev/slides/41.md"]]),zS=n("h1",null,"Deferrable views can be used in component template to defer the loading of select dependencies within that template",-1),XS={__name:"42",setup(e){const t={layout:"quote",transition:"slide-up",srcSequence:"./pages/deferrable-views.md"};return M(N),(s,o)=>(C(),j(Hi,se(te(t)),{default:E(()=>[zS]),_:1},16))}},KS=H(XS,[["__file","/@slidev/slides/42.md"]]),YS=n("h1",null,"Template - Deferrable views",-1),GS=n("ul",null,[n("li",null,[n("p",null,"lazy loading for Component")]),n("li",null,[n("p",null,"improve Core Web Vitals score")]),n("li",null,[n("p",null,"block declaration")]),n("li",null,[n("p",null,"triggers")]),n("li",null,[n("p",null,"prefetching")]),n("li",null,[n("p",null,"defer only with standalone")])],-1),JS={__name:"43",setup(e){const t={transition:"slide-up",srcSequence:"./pages/deferrable-views.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[YS,L(l,null,{default:E(()=>[GS]),_:1})]),_:1},16)}}},ZS=H(JS,[["__file","/@slidev/slides/43.md"]]),QS=n("h1",null,"Template - Deferrable views",-1),e9=n("h3",null,"blocks",-1),n9=n("ul",null,[n("li",null,[n("p",null,"@defer")]),n("li",null,[n("p",null,"@placeholder")]),n("li",null,[n("p",null,"@loading")]),n("li",null,[n("p",null,"@error")])],-1),t9=n("h3",null,"triggers",-1),s9=n("ul",null,[n("li",null,[n("p",null,"replace placeholder with lazy load content")]),n("li",null,[n("p",null,"built-in trigger")]),n("li",null,[n("p",null,"ignored with SSR")])],-1),o9={__name:"44",setup(e){const t={transition:"slide-up",srcSequence:"./pages/deferrable-views.md"};return M(N),(s,o)=>{const l=Jn,r=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[QS,L(l,null,{default:E(()=>[e9]),_:1}),L(r,null,{default:E(()=>[n9]),_:1}),L(l,null,{default:E(()=>[t9]),_:1}),L(r,null,{default:E(()=>[s9]),_:1})]),_:1},16)}}},l9=H(o9,[["__file","/@slidev/slides/44.md"]]),r9=n("h1",null,"Template - Deferrable views",-1),a9=n("p",null,"loading example",-1),i9=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@defer {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"large-component"),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @loading (after 100ms; minimum 1s) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"img"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"alt"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"loading..."),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"loading.gif"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@defer {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"large-component"),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @loading (after 100ms; minimum 1s) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"img"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"alt"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"loading..."),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"loading.gif"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),c9=n("p",null,"prefetching example",-1),p9=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@defer (on interaction; prefetch on idle) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"calendar-cmp"),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @placeholder {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"img"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"placeholder.png"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@defer (on interaction; prefetch on idle) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"calendar-cmp"),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"} @placeholder {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  <"),n("span",{style:{color:"#FF79C6"}},"img"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"placeholder.png"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),u9={__name:"45",setup(e){const t={transition:"slide-up",srcSequence:"./pages/deferrable-views.md"};return M(N),(s,o)=>{const l=ze,r=Jn;return C(),j(_e,se(te(t)),{default:E(()=>[r9,L(r,null,{default:E(()=>[a9,L(l,Le({},{ranges:[""]}),{default:E(()=>[i9]),_:1},16)]),_:1}),L(r,null,{default:E(()=>[c9,L(l,Le({},{ranges:[""]}),{default:E(()=>[p9]),_:1},16)]),_:1})]),_:1},16)}}},d9=H(u9,[["__file","/@slidev/slides/45.md"]]),f9=n("h1",null,"Leaner DX",-1),F9={__name:"46",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[f9]),_:1},16))}},m9=H(F9,[["__file","/@slidev/slides/46.md"]]),h9=n("h1",null,"Leaner DX",-1),y9=n("ul",null,[n("li",null,"inject"),n("li",null,"function > class"),n("li",null,"destroyRef"),n("li",null,"takeUntilDestroyed"),n("li",null,"router input binding")],-1),g9={__name:"47",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[h9,L(l,null,{default:E(()=>[y9]),_:1})]),_:1},16)}}},v9=H(g9,[["__file","/@slidev/slides/47.md"]]),_9=n("h1",null,"Leaner DX - inject",-1),w9={__name:"48",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[_9]),_:1},16))}},b9=H(w9,[["__file","/@slidev/slides/48.md"]]),x9=n("h1",null,"Leaner DX - inject",-1),C9=n("p",null,"providing without inject",-1),k9=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppService } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.service"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"service"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AppService"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppService } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.service"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"service"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AppService"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),A9={__name:"49",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[x9,C9,L(l,Le({},{ranges:[""]}),{default:E(()=>[k9]),_:1},16)]),_:1},16)}}},S9=H(A9,[["__file","/@slidev/slides/49.md"]]),E9=n("h1",null,"Leaner DX - inject",-1),$9=n("p",null,"providing with inject",-1),O9=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppService } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.service"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," service "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(AppService)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppService } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.service"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," service "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(AppService)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),T9={__name:"50",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[E9,$9,O9]),_:1},16))}},I9=H(T9,[["__file","/@slidev/slides/50.md"]]),P9=n("h1",null,"Leaner DX - inject",-1),R9=n("p",null,"available in an injection context",-1),L9=n("ul",null,[n("li",null,[n("p",null,"constructor initialization")]),n("li",null,[n("p",null,"class field initialization")]),n("li",null,[n("p",null,[u("provider with "),n("em",null,"useFactory"),u(" function")])]),n("li",null,[n("p",null,[n("em",null,"InjectionToken"),u(" factory function")])]),n("li",null,[n("p",null,[n("em",null,"runInInjectionContext")])])],-1),M9={__name:"51",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[P9,R9,L9]),_:1},16))}},D9=H(M9,[["__file","/@slidev/slides/51.md"]]),B9=n("h1",null,"Leaner DX - inject",-1),j9=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppService } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.service"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," service "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(AppService) "),n("span",{style:{color:"#6272A4"}},"//class field init")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," injector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Injector"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"service"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AppService"),n("span",{style:{color:"#F8F8F2"}},") {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".injector "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(Injector) "),n("span",{style:{color:"#6272A4"}},"//constructor init")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"ngOnInit"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"runInInjectionContext"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".injector, () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(LoggerService); "),n("span",{style:{color:"#6272A4"}},"//inject a service outside an injection context")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { AppService } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app.service"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," service "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(AppService) "),n("span",{style:{color:"#6272A4"}},"//class field init")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," injector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Injector"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"service"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AppService"),n("span",{style:{color:"#F8F8F2"}},") {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".injector "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(Injector) "),n("span",{style:{color:"#6272A4"}},"//constructor init")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"ngOnInit"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"runInInjectionContext"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".injector, () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(LoggerService); "),n("span",{style:{color:"#6272A4"}},"//inject a service outside an injection context")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),N9={__name:"52",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[B9,j9]),_:1},16))}},H9=H(N9,[["__file","/@slidev/slides/52.md"]]),q9=n("h1",null,"Leaner DX - function > class",-1),V9={__name:"53",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[q9]),_:1},16))}},U9=H(V9,[["__file","/@slidev/slides/53.md"]]),W9=n("h1",null,"usage of classes is deprecated for interceptors and guards",-1),z9={__name:"54",setup(e){const t={layout:"statement",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(Xo,se(te(t)),{default:E(()=>[W9]),_:1},16))}},X9=H(z9,[["__file","/@slidev/slides/54.md"]]),K9=n("h1",null,"Leaner DX - function > class",-1),Y9=n("p",null,"oo approach",-1),G9=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Injectable } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { HttpInterceptor } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/common/http"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Injectable"),n("span",{style:{color:"#F8F8F2"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"JwtInterceptor"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"implements"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpInterceptor"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"user"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"User"),n("span",{style:{color:"#F8F8F2"}},") {}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"intercept"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," accessToken "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".user.accessToken;")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#FF79C6"}},"if"),n("span",{style:{color:"#F8F8F2"}}," (accessToken) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            req "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," req."),n("span",{style:{color:"#50FA7B"}},"clone"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                setHeaders"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                    Authorization"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#F1FA8C"}},"`Bearer "),n("span",{style:{color:"#FF79C6"}},"${"),n("span",{style:{color:"#F8F8F2"}},"accessToken"),n("span",{style:{color:"#FF79C6"}},"}"),n("span",{style:{color:"#F1FA8C"}},"`"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            });")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"next"),n("span",{style:{color:"#F8F8F2"}},"(req);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Injectable } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { HttpInterceptor } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/common/http"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Injectable"),n("span",{style:{color:"#F8F8F2"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"JwtInterceptor"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"implements"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpInterceptor"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"user"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"User"),n("span",{style:{color:"#F8F8F2"}},") {}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"intercept"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," accessToken "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".user.accessToken;")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#FF79C6"}},"if"),n("span",{style:{color:"#F8F8F2"}}," (accessToken) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            req "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," req."),n("span",{style:{color:"#50FA7B"}},"clone"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                setHeaders"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                    Authorization"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#F1FA8C"}},"`Bearer "),n("span",{style:{color:"#FF79C6"}},"${"),n("span",{style:{color:"#F8F8F2"}},"accessToken"),n("span",{style:{color:"#FF79C6"}},"}"),n("span",{style:{color:"#F1FA8C"}},"`"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"                },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            });")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"next"),n("span",{style:{color:"#F8F8F2"}},"(req);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),J9={__name:"55",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[K9,Y9,L(l,Le({},{ranges:[""]}),{default:E(()=>[G9]),_:1},16)]),_:1},16)}}},Z9=H(J9,[["__file","/@slidev/slides/55.md"]]),Q9=n("h1",null,"Leaner DX - function > class",-1),eE=n("p",null,"functional approach",-1),nE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"jwtInterceptor"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpInterceptorFn"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"req"),n("span",{style:{color:"#F8F8F2"}},", "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"next"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," accessToken "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(User).accessToken;")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"if"),n("span",{style:{color:"#F8F8F2"}}," (accessToken) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    req "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," req."),n("span",{style:{color:"#50FA7B"}},"clone"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      setHeaders"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        Authorization"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#F1FA8C"}},"`Bearer "),n("span",{style:{color:"#FF79C6"}},"${"),n("span",{style:{color:"#F8F8F2"}},"accessToken"),n("span",{style:{color:"#FF79C6"}},"}"),n("span",{style:{color:"#F1FA8C"}},"`"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    });")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"next"),n("span",{style:{color:"#F8F8F2"}},"(req);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"};")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"jwtInterceptor"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpInterceptorFn"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"req"),n("span",{style:{color:"#F8F8F2"}},", "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"next"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," accessToken "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(User).accessToken;")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"if"),n("span",{style:{color:"#F8F8F2"}}," (accessToken) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    req "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," req."),n("span",{style:{color:"#50FA7B"}},"clone"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      setHeaders"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        Authorization"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#F1FA8C"}},"`Bearer "),n("span",{style:{color:"#FF79C6"}},"${"),n("span",{style:{color:"#F8F8F2"}},"accessToken"),n("span",{style:{color:"#FF79C6"}},"}"),n("span",{style:{color:"#F1FA8C"}},"`"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    });")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"next"),n("span",{style:{color:"#F8F8F2"}},"(req);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"};")])])])],-1),tE=n("p",null,"providing",-1),sE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// in app.config.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"provideHttpClient"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"withInterceptors"),n("span",{style:{color:"#F8F8F2"}},"([jwtInterceptor]))")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// in app.config.ts")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"provideHttpClient"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"withInterceptors"),n("span",{style:{color:"#F8F8F2"}},"([jwtInterceptor]))")])])])],-1),oE={__name:"56",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=ze,r=Jn;return C(),j(_e,se(te(t)),{default:E(()=>[Q9,L(r,null,{default:E(()=>[eE,L(l,Le({},{ranges:[""]}),{default:E(()=>[nE]),_:1},16)]),_:1}),L(r,null,{default:E(()=>[tE,L(l,Le({},{ranges:[""]}),{default:E(()=>[sE]),_:1},16)]),_:1})]),_:1},16)}}},lE=H(oE,[["__file","/@slidev/slides/56.md"]]),rE=n("h1",null,"Leaner DX - destroyRef",-1),aE={__name:"57",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[rE]),_:1},16))}},iE=H(aE,[["__file","/@slidev/slides/57.md"]]),cE=n("h1",null,"Leaner DX - destroyRef",-1),pE=n("ul",null,[n("li",null,[n("p",null,"introduced in v16")]),n("li",null,[n("p",null,"available in lifecycle related artifact")]),n("li",null,[n("p",null,"reusable destroy logic")])],-1),uE=n("p",null,"example",-1),dE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(DestroyRef)."),n("span",{style:{color:"#50FA7B"}},"onDestroy"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#6272A4"}},"// execute destroy logic")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    })")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(DestroyRef)."),n("span",{style:{color:"#50FA7B"}},"onDestroy"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#6272A4"}},"// execute destroy logic")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    })")])])])],-1),fE={__name:"58",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=Cn,r=ze,a=Jn;return C(),j(_e,se(te(t)),{default:E(()=>[cE,L(l,null,{default:E(()=>[pE]),_:1}),L(a,null,{default:E(()=>[uE,L(r,Le({},{ranges:[""]}),{default:E(()=>[dE]),_:1},16)]),_:1})]),_:1},16)}}},FE=H(fE,[["__file","/@slidev/slides/58.md"]]),mE=n("h1",null,"Leaner DX - takeUntilDestroyed",-1),hE={__name:"59",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[mE]),_:1},16))}},yE=H(hE,[["__file","/@slidev/slides/59.md"]]),gE=n("h1",null,"it completes an observable when the context is destroyed",-1),vE={__name:"60",setup(e){const t={layout:"statement",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(Xo,se(te(t)),{default:E(()=>[gE]),_:1},16))}},_E=H(vE,[["__file","/@slidev/slides/60.md"]]),wE=n("h1",null,"Leaner DX - takeUntilDestroyed",-1),bE=n("p",null,"example",-1),xE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { takeUntilDestroyed } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core/rxjs-interop"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"interval"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"1000"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"pipe"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"takeUntilDestroyed"),n("span",{style:{color:"#F8F8F2"}},"()) "),n("span",{style:{color:"#6272A4"}},"//must be used inside an injection context")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"subscribe"),n("span",{style:{color:"#F8F8F2"}},"(console.log);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { takeUntilDestroyed } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core/rxjs-interop"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"constructor"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"interval"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"1000"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"pipe"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"takeUntilDestroyed"),n("span",{style:{color:"#F8F8F2"}},"()) "),n("span",{style:{color:"#6272A4"}},"//must be used inside an injection context")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"subscribe"),n("span",{style:{color:"#F8F8F2"}},"(console.log);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),CE={__name:"61",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[wE,bE,L(l,Le({},{ranges:[""]}),{default:E(()=>[xE]),_:1},16)]),_:1},16)}}},kE=H(CE,[["__file","/@slidev/slides/61.md"]]),AE=n("h1",null,"Leaner DX - takeUntilDestroyed",-1),SE=n("p",null,[u("example outside an "),n("strong",null,"injectionContext")],-1),EE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component, OnInit } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { takeUntilDestroyed } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core/rxjs-interop"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"implements"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"OnInit"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," destroyRef "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(DestroyRef)")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"ngOnInit"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"interval"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"1000"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"pipe"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"takeUntilDestroyed"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".destroyRef))")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"subscribe"),n("span",{style:{color:"#F8F8F2"}},"(console.log);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component, OnInit } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { takeUntilDestroyed } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/core/rxjs-interop"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { RouterOutlet } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    selector"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"app-root"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    imports"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterOutlet"),n("span",{style:{color:"#F8F8F2"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"<router-outlet></router-outlet>"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AppComponent"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"implements"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"OnInit"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"private"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"readonly"),n("span",{style:{color:"#F8F8F2"}}," destroyRef "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"inject"),n("span",{style:{color:"#F8F8F2"}},"(DestroyRef)")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"ngOnInit"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"interval"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"1000"),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"pipe"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#50FA7B"}},"takeUntilDestroyed"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".destroyRef))")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        ."),n("span",{style:{color:"#50FA7B"}},"subscribe"),n("span",{style:{color:"#F8F8F2"}},"(console.log);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),$E={__name:"62",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[AE,SE,L(l,Le({},{ranges:[""]}),{default:E(()=>[EE]),_:1},16)]),_:1},16)}}},OE=H($E,[["__file","/@slidev/slides/62.md"]]),TE=n("h1",null,"Leaner DX - router input binding",-1),IE={__name:"63",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[TE]),_:1},16))}},PE=H(IE,[["__file","/@slidev/slides/63.md"]]),RE=n("h1",null,"Leaner DX - router input binding",-1),LE=n("p",null,"binding routing information",-1),ME=n("pre",null,[n("code",null,`  - static data
  - resolved data
  - path params
  - query params
`)],-1),DE=n("li",null,[n("p",null,[n("em",null,"withComponentInputBinding()")])],-1),BE={__name:"64",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=Jn,r=Cn;return C(),j(_e,se(te(t)),{default:E(()=>[RE,L(r,null,{default:E(()=>[n("ul",null,[n("li",null,[LE,L(l,null,{default:E(()=>[ME]),_:1})]),DE])]),_:1})]),_:1},16)}}},jE=H(BE,[["__file","/@slidev/slides/64.md"]]),NE=n("h1",null,"Leaner DX - router input binding",-1),HE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { bootstrapApplication } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideRouter, withComponentInputBinding } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"bootstrapApplication"),n("span",{style:{color:"#F8F8F2"}},"(AppComponent, {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  providers"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideRouter"),n("span",{style:{color:"#F8F8F2"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"user/:id"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          data"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            breadcrumbLabel"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"User Detail"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          resolve: { "),n("span",{style:{color:"#50FA7B"}},"contactType"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," [{type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Email"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"}, {type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Phone"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"}] },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/user/user.component"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#50FA7B"}},"withComponentInputBinding"),n("span",{style:{color:"#F8F8F2"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    ),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  ],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"});")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { bootstrapApplication } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/platform-browser"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { provideRouter, withComponentInputBinding } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"@angular/router"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#50FA7B"}},"bootstrapApplication"),n("span",{style:{color:"#F8F8F2"}},"(AppComponent, {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  providers"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"provideRouter"),n("span",{style:{color:"#F8F8F2"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      [")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          path"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"user/:id"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          data"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"            breadcrumbLabel"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"User Detail"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          resolve: { "),n("span",{style:{color:"#50FA7B"}},"contactType"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," [{type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Email"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"}, {type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Phone"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"}] },")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          "),n("span",{style:{color:"#50FA7B"}},"loadComponent"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./app/user/user.component"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      "),n("span",{style:{color:"#50FA7B"}},"withComponentInputBinding"),n("span",{style:{color:"#F8F8F2"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    ),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  ],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"});")])])])],-1),qE={__name:"65",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[NE,L(l,Le({},{ranges:[""]}),{default:E(()=>[HE]),_:1},16)]),_:1},16)}}},VE=H(qE,[["__file","/@slidev/slides/65.md"]]),UE=n("h1",null,"Leaner DX - router input binding",-1),WE=n("p",null,"navigation to",-1),zE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"/"),n("span",{style:{color:"#F8F8F2"}},"user"),n("span",{style:{color:"#FF79C6"}},"/"),n("span",{style:{color:"#BD93F9"}},"23"),n("span",{style:{color:"#FF79C6"}},"?"),n("span",{style:{color:"#F8F8F2"}},"q"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"angular")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"/"),n("span",{style:{color:"#F8F8F2"}},"user"),n("span",{style:{color:"#FF79C6"}},"/"),n("span",{style:{color:"#BD93F9"}},"23"),n("span",{style:{color:"#FF79C6"}},"?"),n("span",{style:{color:"#F8F8F2"}},"q"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"angular")])])])],-1),XE=n("p",null,"example",-1),KE=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"UserComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() id"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"; "),n("span",{style:{color:"#6272A4"}},"// 23")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() contactType"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Array"),n("span",{style:{color:"#F8F8F2"}},"<{type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"}>; "),n("span",{style:{color:"#6272A4"}},"// [{type: 'Email'}, {type: 'Phone'}]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() breadcrumbLabel"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"; "),n("span",{style:{color:"#6272A4"}},"// 'User Detail'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() q"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"; "),n("span",{style:{color:"#6272A4"}},"// angular")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"@"),n("span",{style:{color:"#50FA7B"}},"Component"),n("span",{style:{color:"#F8F8F2"}},"({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  standalone"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  template"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"''")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"})")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"UserComponent"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() id"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"; "),n("span",{style:{color:"#6272A4"}},"// 23")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() contactType"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Array"),n("span",{style:{color:"#F8F8F2"}},"<{type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"}>; "),n("span",{style:{color:"#6272A4"}},"// [{type: 'Email'}, {type: 'Phone'}]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() breadcrumbLabel"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"; "),n("span",{style:{color:"#6272A4"}},"// 'User Detail'")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    @"),n("span",{style:{color:"#50FA7B"}},"Input"),n("span",{style:{color:"#F8F8F2"}},"() q"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"; "),n("span",{style:{color:"#6272A4"}},"// angular")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),YE={__name:"66",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>{const l=ze;return C(),j(_e,se(te(t)),{default:E(()=>[UE,WE,zE,XE,L(l,Le({},{ranges:[""]}),{default:E(()=>[KE]),_:1},16)]),_:1},16)}}},GE=H(YE,[["__file","/@slidev/slides/66.md"]]),JE=n("h1",null,"Leaner DX - router input binding",-1),ZE=n("p",null,"in case of name conflict",-1),QE=n("ul",null,[n("li",null,[n("p",null,"data")]),n("li",null,[n("p",null,"path params")]),n("li",null,[n("p",null,"query params")])],-1),e$={__name:"67",setup(e){const t={transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"};return M(N),(s,o)=>(C(),j(_e,se(te(t)),{default:E(()=>[JE,ZE,QE]),_:1},16))}},n$=H(e$,[["__file","/@slidev/slides/67.md"]]),t$=n("h1",null,"What’s next?",-1),s$={__name:"68",setup(e){const t={layout:"section",transition:"slide-up",srcSequence:"./pages/what-s-next.md"};return M(N),(s,o)=>(C(),j(xn,se(te(t)),{default:E(()=>[t$]),_:1},16))}},o$=H(s$,[["__file","/@slidev/slides/68.md"]]),l$=n("h1",null,"Questions?",-1),r$={__name:"69",setup(e){const t={layout:"center",transition:"slide-up",srcSequence:"./pages/thank-you.md"};return M(N),(s,o)=>(C(),j(vr,se(te(t)),{default:E(()=>[l$]),_:1},16))}},a$=H(r$,[["__file","/@slidev/slides/69.md"]]),i$=n("h1",null,"Thank you!",-1),c$={__name:"70",setup(e){const t={layout:"center",transition:"slide-up",srcSequence:"./pages/thank-you.md"};return M(N),(s,o)=>(C(),j(vr,se(te(t)),{default:E(()=>[i$]),_:1},16))}},p$=H(c$,[["__file","/@slidev/slides/70.md"]]),u$=[{path:"1",name:"page-1",component:WC,meta:{theme:"dracula",layout:"intro",favicon:"https://angular.dev/assets/icons/favicon.ico",background:"https://unsplash.com/photos/twukN12EN7c/download?force=true&w=1920",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",title:"Brand New Angular",slide:{raw:`---
theme: dracula
layout: intro
favicon: https://angular.dev/assets/icons/favicon.ico
background: https://unsplash.com/photos/twukN12EN7c/download?force=true&w=1920
# background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
css: unocss
title: Brand New Angular
---

<!-- # <skill-icons-angular-dark /> -->
<img src="/icon_angular_gradient.png" class="m-auto h-40" />

# Brand New Angular

An overview about Angular Renaissance

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Let's start! <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>
`,title:"Brand New Angular",content:`<!-- # <skill-icons-angular-dark /> -->
<img src="/icon_angular_gradient.png" class="m-auto h-40" />

# Brand New Angular

An overview about Angular Renaissance

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Let's start! <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"dracula",layout:"intro",favicon:"https://angular.dev/assets/icons/favicon.ico",background:"https://unsplash.com/photos/twukN12EN7c/download?force=true&w=1920",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",title:"Brand New Angular"},index:0,start:0,end:44,noteHTML:"",filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:ak,meta:{layout:"author",class:"text-center",title:"About Me",transition:"slide-up",srcSequence:"./pages/about-me.md",slide:{raw:null,title:"About Me",level:1,content:`![image of Valerio](https://github.com/valeriocomo.png?size=200)

# About Me

## Valerio Como

👨🏽‍💻 Senior Lead Developer @ Apuliasoft

📝 Dev blog

<skill-icons-angular-dark /> Developing web app with Angular since 2016`,frontmatter:{layout:"author",class:"text-center",title:"About Me",transition:"slide-up",srcSequence:"./pages/about-me.md"},index:1,start:0,end:17,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/about-me.md",raw:`---
layout: author
class: text-center
---

![image of Valerio](https://github.com/valeriocomo.png?size=200)

# About Me

## Valerio Como

👨🏽‍💻 Senior Lead Developer @ Apuliasoft

📝 Dev blog

<skill-icons-angular-dark /> Developing web app with Angular since 2016
`,title:"About Me",level:1,content:`![image of Valerio](https://github.com/valeriocomo.png?size=200)

# About Me

## Valerio Como

👨🏽‍💻 Senior Lead Developer @ Apuliasoft

📝 Dev blog

<skill-icons-angular-dark /> Developing web app with Angular since 2016`,frontmatter:{layout:"author",class:"text-center",title:"About Me"},index:0,start:0,end:17},inline:{raw:`---
src: ./pages/about-me.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:1,start:44,end:50},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/about-me.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:fk,meta:{layout:"section",title:"Why Angular Renaissance?",transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md",slide:{raw:null,title:"Why Angular Renaissance?",level:1,content:"# Why Angular Renaissance?",frontmatter:{layout:"section",title:"Why Angular Renaissance?",transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"},index:2,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",raw:`---
layout: section
---

# Why Angular Renaissance?
`,title:"Why Angular Renaissance?",level:1,content:"# Why Angular Renaissance?",frontmatter:{layout:"section",title:"Why Angular Renaissance?"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/why-angular-renaissance/why-angular-renaissance.md
transition: slide-up

---`,content:"",frontmatter:{transition:"slide-up"},index:2,start:50,end:55},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:vk,meta:{transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md",slide:{raw:`
<img src="/barbero.avif" class="m-auto" />
`,content:'<img src="/barbero.avif" class="m-auto" />',frontmatter:{transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"},index:3,start:7,end:10,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",raw:`
<img src="/barbero.avif" class="m-auto" />
`,content:'<img src="/barbero.avif" class="m-auto" />',frontmatter:{},index:1,start:7,end:10},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:xk,meta:{transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md",slide:{raw:`
<img src="/frameworks.png" class="m-auto" />
`,content:'<img src="/frameworks.png" class="m-auto" />',frontmatter:{transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"},index:4,start:11,end:14,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",raw:`
<img src="/frameworks.png" class="m-auto" />
`,content:'<img src="/frameworks.png" class="m-auto" />',frontmatter:{},index:2,start:11,end:14},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Ok,meta:{transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md",slide:{raw:`
# Why Angular Renaissance?

<v-click>

### PROs
</v-click>

<v-clicks>

- CLI

- solid environment

- API stability

</v-clicks>

<v-click>

### CONs
</v-click>

<v-clicks>

- learning curve

- performance

- framework footprint

</v-clicks>
`,title:"Why Angular Renaissance?",level:1,content:`# Why Angular Renaissance?

<v-click>

### PROs
</v-click>

<v-clicks>

- CLI

- solid environment

- API stability

</v-clicks>

<v-click>

### CONs
</v-click>

<v-clicks>

- learning curve

- performance

- framework footprint

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/why-angular-renaissance/why-angular-renaissance.md"},index:5,start:15,end:48,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",raw:`
# Why Angular Renaissance?

<v-click>

### PROs
</v-click>

<v-clicks>

- CLI

- solid environment

- API stability

</v-clicks>

<v-click>

### CONs
</v-click>

<v-clicks>

- learning curve

- performance

- framework footprint

</v-clicks>
`,title:"Why Angular Renaissance?",level:1,content:`# Why Angular Renaissance?

<v-click>

### PROs
</v-click>

<v-clicks>

- CLI

- solid environment

- API stability

</v-clicks>

<v-click>

### CONs
</v-click>

<v-clicks>

- learning curve

- performance

- framework footprint

</v-clicks>`,frontmatter:{},index:3,start:15,end:48},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/why-angular-renaissance/why-angular-renaissance.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Pk,meta:{layout:"section",title:"What's Angular renaissance?",transition:"slide-up",srcSequence:"./pages/what-s-angular-renaissance/what-s-angular-renaissance.md",slide:{raw:null,title:"What's Angular renaissance?",level:1,content:"# What's Angular renaissance?",frontmatter:{layout:"section",title:"What's Angular renaissance?",transition:"slide-up",srcSequence:"./pages/what-s-angular-renaissance/what-s-angular-renaissance.md"},index:6,start:0,end:5,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/what-s-angular-renaissance/what-s-angular-renaissance.md",raw:`---
layout: section
---

# What's Angular renaissance?`,title:"What's Angular renaissance?",level:1,content:"# What's Angular renaissance?",frontmatter:{layout:"section",title:"What's Angular renaissance?"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/what-s-angular-renaissance/what-s-angular-renaissance.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:3,start:55,end:61},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/what-s-angular-renaissance/what-s-angular-renaissance.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:jk,meta:{layout:"quote",transition:"slide-up",srcSequence:"./pages/what-s-angular-renaissance/what-s-angular-renaissance.md",slide:{raw:`---
layout: quote
---

# "It's a journey to a new Developer Experience"
`,title:`"It's a journey to a new Developer Experience"`,level:1,content:`# "It's a journey to a new Developer Experience"`,frontmatter:{layout:"quote",transition:"slide-up",srcSequence:"./pages/what-s-angular-renaissance/what-s-angular-renaissance.md"},index:7,start:5,end:11,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/what-s-angular-renaissance/what-s-angular-renaissance.md",raw:`---
layout: quote
---

# "It's a journey to a new Developer Experience"
`,title:`"It's a journey to a new Developer Experience"`,level:1,content:`# "It's a journey to a new Developer Experience"`,frontmatter:{layout:"quote"},index:1,start:5,end:11},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/what-s-angular-renaissance/what-s-angular-renaissance.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:qk,meta:{layout:"section",title:"A new DX",transition:"slide-up",srcSequence:"./pages/dx/dx.md",slide:{raw:null,title:"A new DX",level:1,content:"# A new DX",frontmatter:{layout:"section",title:"A new DX",transition:"slide-up",srcSequence:"./pages/dx/dx.md"},index:8,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/dx/dx.md",raw:`---
layout: section
---

# A new DX
`,title:"A new DX",level:1,content:"# A new DX",frontmatter:{layout:"section",title:"A new DX"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/dx/dx.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:4,start:61,end:67},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/dx/dx.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:zk,meta:{transition:"slide-up",srcSequence:"./pages/dx/dx.md",slide:{raw:`
# A new DX

<v-clicks>

- modern

- easier to learn

- leaner
</v-clicks>
`,title:"A new DX",level:1,content:`# A new DX

<v-clicks>

- modern

- easier to learn

- leaner
</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/dx/dx.md"},index:9,start:7,end:19,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/dx/dx.md",raw:`
# A new DX

<v-clicks>

- modern

- easier to learn

- leaner
</v-clicks>
`,title:"A new DX",level:1,content:`# A new DX

<v-clicks>

- modern

- easier to learn

- leaner
</v-clicks>`,frontmatter:{},index:1,start:7,end:19},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/dx/dx.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Gk,meta:{transition:"slide-up",srcSequence:"./pages/dx/dx.md",slide:{raw:`
<img src="/mr-bean-copying.jpg" class="m-auto" />
`,content:'<img src="/mr-bean-copying.jpg" class="m-auto" />',frontmatter:{transition:"slide-up",srcSequence:"./pages/dx/dx.md"},index:10,start:20,end:23,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/dx/dx.md",raw:`
<img src="/mr-bean-copying.jpg" class="m-auto" />
`,content:'<img src="/mr-bean-copying.jpg" class="m-auto" />',frontmatter:{},index:2,start:20,end:23},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/dx/dx.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:s6,meta:{layout:"cover",class:"text-center",title:"New Features",transition:"slide-up",srcSequence:"./pages/new-features.md",slide:{raw:null,title:"New Features",level:1,content:"# New Features",frontmatter:{layout:"cover",class:"text-center",title:"New Features",transition:"slide-up",srcSequence:"./pages/new-features.md"},index:11,start:0,end:7,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-features.md",raw:`---
layout: cover
class: text-center
---

# New Features
`,title:"New Features",level:1,content:"# New Features",frontmatter:{layout:"cover",class:"text-center",title:"New Features"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/new-features.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:5,start:67,end:73},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-features.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:a6,meta:{transition:"slide-up",srcSequence:"./pages/new-features.md",slide:{raw:`
# New Features

<!-- - <https://blog.angular.io/angular-v16-is-here-4d7a28ec680d> -->

<v-clicks>

- Standalone Components

- Signals

- Template

- Leaner DX

- SSR && Hydration

- build toolchain (Vite + esbuild)

- testing (jest + web test runner)
</v-clicks>
`,title:"New Features",level:1,content:`# New Features

<!-- - <https://blog.angular.io/angular-v16-is-here-4d7a28ec680d> -->

<v-clicks>

- Standalone Components

- Signals

- Template

- Leaner DX

- SSR && Hydration

- build toolchain (Vite + esbuild)

- testing (jest + web test runner)
</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-features.md"},index:12,start:8,end:30,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-features.md",raw:`
# New Features

<!-- - <https://blog.angular.io/angular-v16-is-here-4d7a28ec680d> -->

<v-clicks>

- Standalone Components

- Signals

- Template

- Leaner DX

- SSR && Hydration

- build toolchain (Vite + esbuild)

- testing (jest + web test runner)
</v-clicks>
`,title:"New Features",level:1,content:`# New Features

<!-- - <https://blog.angular.io/angular-v16-is-here-4d7a28ec680d> -->

<v-clicks>

- Standalone Components

- Signals

- Template

- Leaner DX

- SSR && Hydration

- build toolchain (Vite + esbuild)

- testing (jest + web test runner)
</v-clicks>`,frontmatter:{},index:1,start:8,end:30},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-features.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:f6,meta:{layout:"default",class:"text-center",transition:"slide-up",srcSequence:"./pages/new-features.md",slide:{raw:`---
layout: default
class: text-center
---

<img src="/enrico-mentana-nottata.gif" class="m-auto" />

#maratonamentana

#gdgdevfest2023
`,content:`<img src="/enrico-mentana-nottata.gif" class="m-auto" />

#maratonamentana

#gdgdevfest2023`,frontmatter:{layout:"default",class:"text-center",transition:"slide-up",srcSequence:"./pages/new-features.md"},index:13,start:30,end:41,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-features.md",raw:`---
layout: default
class: text-center
---

<img src="/enrico-mentana-nottata.gif" class="m-auto" />

#maratonamentana

#gdgdevfest2023
`,content:`<img src="/enrico-mentana-nottata.gif" class="m-auto" />

#maratonamentana

#gdgdevfest2023`,frontmatter:{layout:"default",class:"text-center"},index:2,start:30,end:41},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-features.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:h6,meta:{layout:"section",title:"Standalone components",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:null,title:"Standalone components",level:1,content:"# Standalone components",frontmatter:{layout:"section",title:"Standalone components",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:14,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`---
layout: section
---

# Standalone components
`,title:"Standalone components",level:1,content:"# Standalone components",frontmatter:{layout:"section",title:"Standalone components"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/standalone-components/standalone-components.md
transition: slide-up

---


`,content:"",frontmatter:{transition:"slide-up"},index:6,start:73,end:81},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:w6,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Standalone components

<img src="/standalone-components.png" class="m-auto" />
`,title:"Standalone components",level:1,content:`# Standalone components

<img src="/standalone-components.png" class="m-auto" />`,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:15,start:7,end:12,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Standalone components

<img src="/standalone-components.png" class="m-auto" />
`,title:"Standalone components",level:1,content:`# Standalone components

<img src="/standalone-components.png" class="m-auto" />`,frontmatter:{},index:1,start:7,end:12},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:S6,meta:{layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`---
layout: statement
---

# Why NgModule?
`,title:"Why NgModule?",level:1,content:"# Why NgModule?",frontmatter:{layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:16,start:12,end:18,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`---
layout: statement
---

# Why NgModule?
`,title:"Why NgModule?",level:1,content:"# Why NgModule?",frontmatter:{layout:"statement"},index:2,start:12,end:18},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:T6,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Why NgModule?

<v-clicks>

- modularization

- declaration context

- compilation context (before Ivy adoption)

</v-clicks>
`,title:"Why NgModule?",level:1,content:`# Why NgModule?

<v-clicks>

- modularization

- declaration context

- compilation context (before Ivy adoption)

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:17,start:19,end:32,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Why NgModule?

<v-clicks>

- modularization

- declaration context

- compilation context (before Ivy adoption)

</v-clicks>
`,title:"Why NgModule?",level:1,content:`# Why NgModule?

<v-clicks>

- modularization

- declaration context

- compilation context (before Ivy adoption)

</v-clicks>`,frontmatter:{},index:3,start:19,end:32},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:B6,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Why NgModule?

<v-clicks>

### drawbacks

- misleading modularization

- new concept for newbie

</v-clicks>

<v-clicks>

### evolution

- Ivy adoption

- optional artifact

</v-clicks>
`,title:"Why NgModule?",level:1,content:`# Why NgModule?

<v-clicks>

### drawbacks

- misleading modularization

- new concept for newbie

</v-clicks>

<v-clicks>

### evolution

- Ivy adoption

- optional artifact

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:18,start:33,end:56,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Why NgModule?

<v-clicks>

### drawbacks

- misleading modularization

- new concept for newbie

</v-clicks>

<v-clicks>

### evolution

- Ivy adoption

- optional artifact

</v-clicks>
`,title:"Why NgModule?",level:1,content:`# Why NgModule?

<v-clicks>

### drawbacks

- misleading modularization

- new concept for newbie

</v-clicks>

<v-clicks>

### evolution

- Ivy adoption

- optional artifact

</v-clicks>`,frontmatter:{},index:4,start:33,end:56},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:H6,meta:{layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`---
layout: statement
---

# Standalone components - Anatomy
`,title:"Standalone components - Anatomy",level:1,content:"# Standalone components - Anatomy",frontmatter:{layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:19,start:56,end:62,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`---
layout: statement
---

# Standalone components - Anatomy
`,title:"Standalone components - Anatomy",level:1,content:"# Standalone components - Anatomy",frontmatter:{layout:"statement"},index:5,start:56,end:62},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:oA,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Standalone components - Anatomy

example taken from a real-world project
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
\`\`\`
<!-- ---

# Standalone components - Anatomy

<v-clicks>

- same SCAM pattern mental model

- standalone flag

- imports its own deps

- imported like modules

</v-clicks> -->
`,title:"Standalone components - Anatomy",level:1,content:`# Standalone components - Anatomy

example taken from a real-world project
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},note:`---

# Standalone components - Anatomy

<v-clicks>

- same SCAM pattern mental model

- standalone flag

- imports its own deps

- imported like modules

</v-clicks>`,index:20,start:63,end:95,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Standalone components - Anatomy

example taken from a real-world project
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
\`\`\`
<!-- ---

# Standalone components - Anatomy

<v-clicks>

- same SCAM pattern mental model

- standalone flag

- imports its own deps

- imported like modules

</v-clicks> -->
`,title:"Standalone components - Anatomy",level:1,content:`# Standalone components - Anatomy

example taken from a real-world project
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
\`\`\``,frontmatter:{},note:`---

# Standalone components - Anatomy

<v-clicks>

- same SCAM pattern mental model

- standalone flag

- imports its own deps

- imported like modules

</v-clicks>`,index:6,start:63,end:95},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:`<hr>
<h1>Standalone components - Anatomy</h1>
<v-clicks>
<ul>
<li>
<p>same SCAM pattern mental model</p>
</li>
<li>
<p>standalone flag</p>
</li>
<li>
<p>imports its own deps</p>
</li>
<li>
<p>imported like modules</p>
</li>
</ul>
</v-clicks>`,id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:aA,meta:{layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`---
layout: statement
---

# Standalone components - Bootstrapping
`,title:"Standalone components - Bootstrapping",level:1,content:"# Standalone components - Bootstrapping",frontmatter:{layout:"statement",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:21,start:95,end:101,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`---
layout: statement
---

# Standalone components - Bootstrapping
`,title:"Standalone components - Bootstrapping",level:1,content:"# Standalone components - Bootstrapping",frontmatter:{layout:"statement"},index:7,start:95,end:101},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:FA,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Standalone components - Bootstrapping

<v-click>

main.ts with NgModule
\`\`\`ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
\`\`\`
</v-click>
<v-click>

main.ts with standalone components
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
\`\`\`

</v-click>`,title:"Standalone components - Bootstrapping",level:1,content:`# Standalone components - Bootstrapping

<v-click>

main.ts with NgModule
\`\`\`ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
\`\`\`
</v-click>
<v-click>

main.ts with standalone components
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
\`\`\`

</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:22,start:102,end:133,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Standalone components - Bootstrapping

<v-click>

main.ts with NgModule
\`\`\`ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
\`\`\`
</v-click>
<v-click>

main.ts with standalone components
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
\`\`\`

</v-click>`,title:"Standalone components - Bootstrapping",level:1,content:`# Standalone components - Bootstrapping

<v-click>

main.ts with NgModule
\`\`\`ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
\`\`\`
</v-click>
<v-click>

main.ts with standalone components
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
\`\`\`

</v-click>`,frontmatter:{},index:8,start:102,end:133},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:yA,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
\`\`\`ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';
// other imports were here
import { environment } from '../enviroments/enviroment';
import { appRoutes } from './app.routes';
// other functions/consts were here
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([...AUTH_INTERCEPTORS])),
    provideAnimations(),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withHashLocation()
    ),
    importProvidersFrom(ApiModule.forRoot(apiConfigFactory)),
    importProvidersFrom(FormlyModule.forRoot(FORMLY_CONFIG)),
    { provide: SIDEBAR_CONFIG_INJECTION_TOKEN, useValue: sidebarConfig },
    { provide: APP_NAME_INJECTOR, useValue: APP_NAME },
  ],
};
\`\`\`

<!-- ---

# Standalone components - Bootstrapping

<v-clicks>

- Component as entry point

- provide* helper functions

- *importProvidersFrom*

</v-clicks> -->
`,content:`\`\`\`ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';
// other imports were here
import { environment } from '../enviroments/enviroment';
import { appRoutes } from './app.routes';
// other functions/consts were here
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([...AUTH_INTERCEPTORS])),
    provideAnimations(),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withHashLocation()
    ),
    importProvidersFrom(ApiModule.forRoot(apiConfigFactory)),
    importProvidersFrom(FormlyModule.forRoot(FORMLY_CONFIG)),
    { provide: SIDEBAR_CONFIG_INJECTION_TOKEN, useValue: sidebarConfig },
    { provide: APP_NAME_INJECTOR, useValue: APP_NAME },
  ],
};
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},note:`---

# Standalone components - Bootstrapping

<v-clicks>

- Component as entry point

- provide* helper functions

- *importProvidersFrom*

</v-clicks>`,index:23,start:134,end:177,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
\`\`\`ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';
// other imports were here
import { environment } from '../enviroments/enviroment';
import { appRoutes } from './app.routes';
// other functions/consts were here
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([...AUTH_INTERCEPTORS])),
    provideAnimations(),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withHashLocation()
    ),
    importProvidersFrom(ApiModule.forRoot(apiConfigFactory)),
    importProvidersFrom(FormlyModule.forRoot(FORMLY_CONFIG)),
    { provide: SIDEBAR_CONFIG_INJECTION_TOKEN, useValue: sidebarConfig },
    { provide: APP_NAME_INJECTOR, useValue: APP_NAME },
  ],
};
\`\`\`

<!-- ---

# Standalone components - Bootstrapping

<v-clicks>

- Component as entry point

- provide* helper functions

- *importProvidersFrom*

</v-clicks> -->
`,content:`\`\`\`ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';
// other imports were here
import { environment } from '../enviroments/enviroment';
import { appRoutes } from './app.routes';
// other functions/consts were here
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([...AUTH_INTERCEPTORS])),
    provideAnimations(),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withHashLocation()
    ),
    importProvidersFrom(ApiModule.forRoot(apiConfigFactory)),
    importProvidersFrom(FormlyModule.forRoot(FORMLY_CONFIG)),
    { provide: SIDEBAR_CONFIG_INJECTION_TOKEN, useValue: sidebarConfig },
    { provide: APP_NAME_INJECTOR, useValue: APP_NAME },
  ],
};
\`\`\``,frontmatter:{},note:`---

# Standalone components - Bootstrapping

<v-clicks>

- Component as entry point

- provide* helper functions

- *importProvidersFrom*

</v-clicks>`,index:9,start:134,end:177},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:`<hr>
<h1>Standalone components - Bootstrapping</h1>
<v-clicks>
<ul>
<li>
<p>Component as entry point</p>
</li>
<li>
<p>provide* helper functions</p>
</li>
<li>
<p><em>importProvidersFrom</em></p>
</li>
</ul>
</v-clicks>`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:bA,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Standalone components - Router
loadComponent & loadChildren
\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell').then(m => m.routes)
            }
        ]
    }
]
//in analytics-shell.routes.ts
export const routes: Routes = [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] 
\`\`\`
`,title:"Standalone components - Router",level:1,content:`# Standalone components - Router
loadComponent & loadChildren
\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell').then(m => m.routes)
            }
        ]
    }
]
//in analytics-shell.routes.ts
export const routes: Routes = [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] 
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:24,start:178,end:203,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Standalone components - Router
loadComponent & loadChildren
\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell').then(m => m.routes)
            }
        ]
    }
]
//in analytics-shell.routes.ts
export const routes: Routes = [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] 
\`\`\`
`,title:"Standalone components - Router",level:1,content:`# Standalone components - Router
loadComponent & loadChildren
\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell').then(m => m.routes)
            }
        ]
    }
]
//in analytics-shell.routes.ts
export const routes: Routes = [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] 
\`\`\``,frontmatter:{},index:10,start:178,end:203},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:SA,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Standalone components - Router
export with default

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\`
`,title:"Standalone components - Router",level:1,content:`# Standalone components - Router
export with default

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:25,start:204,end:230,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Standalone components - Router
export with default

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\`
`,title:"Standalone components - Router",level:1,content:`# Standalone components - Router
export with default

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\``,frontmatter:{},index:11,start:204,end:230},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:IA,meta:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`
# Standalone components - Router
providing services

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        providing: [LoggerService],
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\`
`,title:"Standalone components - Router",level:1,content:`# Standalone components - Router
providing services

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        providing: [LoggerService],
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:26,start:231,end:258,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`
# Standalone components - Router
providing services

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        providing: [LoggerService],
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\`
`,title:"Standalone components - Router",level:1,content:`# Standalone components - Router
providing services

\`\`\`ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        providing: [LoggerService],
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
\`\`\``,frontmatter:{},index:12,start:231,end:258},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:NA,meta:{layout:"center",class:"text-center",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md",slide:{raw:`---
layout: center
class: "text-center"
---

Link to my blog post 👇

<img src="/qr-standalone-components-vc.png" class="m-auto h-100" />`,content:`Link to my blog post 👇

<img src="/qr-standalone-components-vc.png" class="m-auto h-100" />`,frontmatter:{layout:"center",class:"text-center",transition:"slide-up",srcSequence:"./pages/standalone-components/standalone-components.md"},index:27,start:258,end:266,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",raw:`---
layout: center
class: "text-center"
---

Link to my blog post 👇

<img src="/qr-standalone-components-vc.png" class="m-auto h-100" />`,content:`Link to my blog post 👇

<img src="/qr-standalone-components-vc.png" class="m-auto h-100" />`,frontmatter:{layout:"center",class:"text-center"},index:13,start:258,end:266},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/standalone-components/standalone-components.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:VA,meta:{layout:"section",title:"Signals",transition:"slide-up",srcSequence:"./pages/signals/signals.md",slide:{raw:null,title:"Signals",level:1,content:"# Signals",frontmatter:{layout:"section",title:"Signals",transition:"slide-up",srcSequence:"./pages/signals/signals.md"},index:28,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",raw:`---
layout: section
---

# Signals
`,title:"Signals",level:1,content:"# Signals",frontmatter:{layout:"section",title:"Signals"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/signals/signals.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:7,start:81,end:87},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:zA,meta:{layout:"quote",transition:"slide-up",srcSequence:"./pages/signals/signals.md",slide:{raw:`---
layout: quote
---

# Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.
 `,title:"Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.",level:1,content:"# Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.",frontmatter:{layout:"quote",transition:"slide-up",srcSequence:"./pages/signals/signals.md"},index:29,start:6,end:12,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",raw:`---
layout: quote
---

# Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.
 `,title:"Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.",level:1,content:"# Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.",frontmatter:{layout:"quote"},index:1,start:6,end:12},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:GA,meta:{transition:"slide-up",srcSequence:"./pages/signals/signals.md",slide:{raw:`
# Signals

<v-clicks>

- developer preview in v16

- API for state management

- easing reactivity in components

- stable in v17

- @ngrx/signals

</v-clicks>
`,title:"Signals",level:1,content:`# Signals

<v-clicks>

- developer preview in v16

- API for state management

- easing reactivity in components

- stable in v17

- @ngrx/signals

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/signals/signals.md"},index:30,start:13,end:30,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",raw:`
# Signals

<v-clicks>

- developer preview in v16

- API for state management

- easing reactivity in components

- stable in v17

- @ngrx/signals

</v-clicks>
`,title:"Signals",level:1,content:`# Signals

<v-clicks>

- developer preview in v16

- API for state management

- easing reactivity in components

- stable in v17

- @ngrx/signals

</v-clicks>`,frontmatter:{},index:2,start:13,end:30},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:nS,meta:{transition:"slide-up",srcSequence:"./pages/signals/signals.md",slide:{raw:`
# Signals 

APIs
\`\`\`ts

signal() // create a new signal

computed(() => W) // react to a change of a signal

set(value: T) // set the value

update((value: T) => T) // update signal's value

effect() // handling side effect logic

\`\`\`
`,title:"Signals",level:1,content:`# Signals 

APIs
\`\`\`ts

signal() // create a new signal

computed(() => W) // react to a change of a signal

set(value: T) // set the value

update((value: T) => T) // update signal's value

effect() // handling side effect logic

\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/signals/signals.md"},index:31,start:31,end:49,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",raw:`
# Signals 

APIs
\`\`\`ts

signal() // create a new signal

computed(() => W) // react to a change of a signal

set(value: T) // set the value

update((value: T) => T) // update signal's value

effect() // handling side effect logic

\`\`\`
`,title:"Signals",level:1,content:`# Signals 

APIs
\`\`\`ts

signal() // create a new signal

computed(() => W) // react to a change of a signal

set(value: T) // set the value

update((value: T) => T) // update signal's value

effect() // handling side effect logic

\`\`\``,frontmatter:{},index:3,start:31,end:49},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:lS,meta:{transition:"slide-up",srcSequence:"./pages/signals/signals.md",slide:{raw:`
# Signals

\`\`\`ts
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
  <div>{{number()}}</div>
  <div>{{squared()}}</div>
  <button (click)="clickHandler()">Next</button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly number = signal(1);
  readonly squared = computed(() => Math.pow(this.number(), 2));

  clickHandler() {
    this.number.set(this.number() + 1)
  }
}
\`\`\`

<!-- ---

# Signals 

### effect function

<v-clicks>

- side effect ops

- avoid for state changes

</v-clicks> -->
`,title:"Signals",level:1,content:`# Signals

\`\`\`ts
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
  <div>{{number()}}</div>
  <div>{{squared()}}</div>
  <button (click)="clickHandler()">Next</button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly number = signal(1);
  readonly squared = computed(() => Math.pow(this.number(), 2));

  clickHandler() {
    this.number.set(this.number() + 1)
  }
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/signals/signals.md"},note:`---

# Signals 

### effect function

<v-clicks>

- side effect ops

- avoid for state changes

</v-clicks>`,index:32,start:50,end:90,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",raw:`
# Signals

\`\`\`ts
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
  <div>{{number()}}</div>
  <div>{{squared()}}</div>
  <button (click)="clickHandler()">Next</button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly number = signal(1);
  readonly squared = computed(() => Math.pow(this.number(), 2));

  clickHandler() {
    this.number.set(this.number() + 1)
  }
}
\`\`\`

<!-- ---

# Signals 

### effect function

<v-clicks>

- side effect ops

- avoid for state changes

</v-clicks> -->
`,title:"Signals",level:1,content:`# Signals

\`\`\`ts
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
  <div>{{number()}}</div>
  <div>{{squared()}}</div>
  <button (click)="clickHandler()">Next</button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly number = signal(1);
  readonly squared = computed(() => Math.pow(this.number(), 2));

  clickHandler() {
    this.number.set(this.number() + 1)
  }
}
\`\`\``,frontmatter:{},note:`---

# Signals 

### effect function

<v-clicks>

- side effect ops

- avoid for state changes

</v-clicks>`,index:4,start:50,end:90},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",noteHTML:`<hr>
<h1>Signals</h1>
<h3>effect function</h3>
<v-clicks>
<ul>
<li>
<p>side effect ops</p>
</li>
<li>
<p>avoid for state changes</p>
</li>
</ul>
</v-clicks>`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:uS,meta:{transition:"slide-up",srcSequence:"./pages/signals/signals.md",slide:{raw:`
# Signals 

### RxJS Interoperability

<v-clicks>

- toSignal

- toObservable

</v-clicks>

<v-click>
\`\`\`ts
import { toSignal, toObservable } from @angular/core/rxjs-interop
\`\`\`
</v-click>
`,title:"Signals",level:1,content:`# Signals 

### RxJS Interoperability

<v-clicks>

- toSignal

- toObservable

</v-clicks>

<v-click>
\`\`\`ts
import { toSignal, toObservable } from @angular/core/rxjs-interop
\`\`\`
</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/signals/signals.md"},index:33,start:91,end:110,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",raw:`
# Signals 

### RxJS Interoperability

<v-clicks>

- toSignal

- toObservable

</v-clicks>

<v-click>
\`\`\`ts
import { toSignal, toObservable } from @angular/core/rxjs-interop
\`\`\`
</v-click>
`,title:"Signals",level:1,content:`# Signals 

### RxJS Interoperability

<v-clicks>

- toSignal

- toObservable

</v-clicks>

<v-click>
\`\`\`ts
import { toSignal, toObservable } from @angular/core/rxjs-interop
\`\`\`
</v-click>`,frontmatter:{},index:5,start:91,end:110},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:hS,meta:{layout:"center",class:"text-center",transition:"slide-up",srcSequence:"./pages/signals/signals.md",slide:{raw:`---
layout: center
class: "text-center"
---

Link to my blog post 👇

<img src="/qr-angular-signals-vc.png" class="m-auto h-100" />`,content:`Link to my blog post 👇

<img src="/qr-angular-signals-vc.png" class="m-auto h-100" />`,frontmatter:{layout:"center",class:"text-center",transition:"slide-up",srcSequence:"./pages/signals/signals.md"},index:34,start:110,end:118,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",raw:`---
layout: center
class: "text-center"
---

Link to my blog post 👇

<img src="/qr-angular-signals-vc.png" class="m-auto h-100" />`,content:`Link to my blog post 👇

<img src="/qr-angular-signals-vc.png" class="m-auto h-100" />`,frontmatter:{layout:"center",class:"text-center"},index:6,start:110,end:118},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/signals/signals.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:vS,meta:{layout:"section",title:"Template - Control Flow",transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md",slide:{raw:null,title:"Template - Control Flow",level:1,content:"# Template - Control Flow",frontmatter:{layout:"section",title:"Template - Control Flow",transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"},index:35,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",raw:`---
layout: section
---

# Template - Control Flow
`,title:"Template - Control Flow",level:1,content:"# Template - Control Flow",frontmatter:{layout:"section",title:"Template - Control Flow"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/template-control-flow/template-control-flow.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:8,start:87,end:93},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:xS,meta:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md",slide:{raw:`
# Template - Control Flow

<v-clicks>

- developer preview

- avoiding directive import (NgIf, NgFor etc) 

- better performance

- zone-less

</v-clicks>
`,title:"Template - Control Flow",level:1,content:`# Template - Control Flow

<v-clicks>

- developer preview

- avoiding directive import (NgIf, NgFor etc) 

- better performance

- zone-less

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"},index:36,start:7,end:22,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",raw:`
# Template - Control Flow

<v-clicks>

- developer preview

- avoiding directive import (NgIf, NgFor etc) 

- better performance

- zone-less

</v-clicks>
`,title:"Template - Control Flow",level:1,content:`# Template - Control Flow

<v-clicks>

- developer preview

- avoiding directive import (NgIf, NgFor etc) 

- better performance

- zone-less

</v-clicks>`,frontmatter:{},index:1,start:7,end:22},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:$S,meta:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md",slide:{raw:`
# Template - Control Flow > conditionals

**@if** 

<v-click>

- replace NgIf

- conditionally displays a content when its condition is matched

</v-click>

<v-click>

\`\`\`html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
\`\`\`
</v-click>
`,title:"Template - Control Flow > conditionals",level:1,content:`# Template - Control Flow > conditionals

**@if** 

<v-click>

- replace NgIf

- conditionally displays a content when its condition is matched

</v-click>

<v-click>

\`\`\`html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
\`\`\`
</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"},index:37,start:23,end:49,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",raw:`
# Template - Control Flow > conditionals

**@if** 

<v-click>

- replace NgIf

- conditionally displays a content when its condition is matched

</v-click>

<v-click>

\`\`\`html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
\`\`\`
</v-click>
`,title:"Template - Control Flow > conditionals",level:1,content:`# Template - Control Flow > conditionals

**@if** 

<v-click>

- replace NgIf

- conditionally displays a content when its condition is matched

</v-click>

<v-click>

\`\`\`html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
\`\`\`
</v-click>`,frontmatter:{},index:2,start:23,end:49},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:MS,meta:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md",slide:{raw:`
# Template - Control Flow > repeaters

**@for** 

<v-click>

- replace NgFor

- displays a content for each items in a collection

- track is mandatory

- better DOM manipulation algorithm

</v-click>

<v-click>

**@empty** displays when there are no items 

</v-click>

<v-click>

\`\`\`html
@for (item of items; track item.name) {
  <li> {{ item.name }} </li>
} @empty {
  <li> There are no items. </li>
}
\`\`\`
</v-click>
`,title:"Template - Control Flow > repeaters",level:1,content:`# Template - Control Flow > repeaters

**@for** 

<v-click>

- replace NgFor

- displays a content for each items in a collection

- track is mandatory

- better DOM manipulation algorithm

</v-click>

<v-click>

**@empty** displays when there are no items 

</v-click>

<v-click>

\`\`\`html
@for (item of items; track item.name) {
  <li> {{ item.name }} </li>
} @empty {
  <li> There are no items. </li>
}
\`\`\`
</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"},index:38,start:50,end:84,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",raw:`
# Template - Control Flow > repeaters

**@for** 

<v-click>

- replace NgFor

- displays a content for each items in a collection

- track is mandatory

- better DOM manipulation algorithm

</v-click>

<v-click>

**@empty** displays when there are no items 

</v-click>

<v-click>

\`\`\`html
@for (item of items; track item.name) {
  <li> {{ item.name }} </li>
} @empty {
  <li> There are no items. </li>
}
\`\`\`
</v-click>
`,title:"Template - Control Flow > repeaters",level:1,content:`# Template - Control Flow > repeaters

**@for** 

<v-click>

- replace NgFor

- displays a content for each items in a collection

- track is mandatory

- better DOM manipulation algorithm

</v-click>

<v-click>

**@empty** displays when there are no items 

</v-click>

<v-click>

\`\`\`html
@for (item of items; track item.name) {
  <li> {{ item.name }} </li>
} @empty {
  <li> There are no items. </li>
}
\`\`\`
</v-click>`,frontmatter:{},index:3,start:50,end:84},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:qS,meta:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md",slide:{raw:`
# Template - Control Flow > selection

**@switch** 

<v-click>

- replace NgSwitch

- it's identical to Javascript *switch* statement

- type-checking

</v-click>
<v-click>

\`\`\`html
@switch (condition) {
  @case (caseA) {
    Case A.
  }
  @case (caseB) {
    Case B.
  }
  @default {
    Default case.
  }
}
\`\`\`

</v-click>`,title:"Template - Control Flow > selection",level:1,content:`# Template - Control Flow > selection

**@switch** 

<v-click>

- replace NgSwitch

- it's identical to Javascript *switch* statement

- type-checking

</v-click>
<v-click>

\`\`\`html
@switch (condition) {
  @case (caseA) {
    Case A.
  }
  @case (caseB) {
    Case B.
  }
  @default {
    Default case.
  }
}
\`\`\`

</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/template-control-flow/template-control-flow.md"},index:39,start:85,end:116,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",raw:`
# Template - Control Flow > selection

**@switch** 

<v-click>

- replace NgSwitch

- it's identical to Javascript *switch* statement

- type-checking

</v-click>
<v-click>

\`\`\`html
@switch (condition) {
  @case (caseA) {
    Case A.
  }
  @case (caseB) {
    Case B.
  }
  @default {
    Default case.
  }
}
\`\`\`

</v-click>`,title:"Template - Control Flow > selection",level:1,content:`# Template - Control Flow > selection

**@switch** 

<v-click>

- replace NgSwitch

- it's identical to Javascript *switch* statement

- type-checking

</v-click>
<v-click>

\`\`\`html
@switch (condition) {
  @case (caseA) {
    Case A.
  }
  @case (caseB) {
    Case B.
  }
  @default {
    Default case.
  }
}
\`\`\`

</v-click>`,frontmatter:{},index:4,start:85,end:116},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/template-control-flow/template-control-flow.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:WS,meta:{layout:"section",title:"Template - Deferrable views",transition:"slide-up",srcSequence:"./pages/deferrable-views.md",slide:{raw:null,title:"Template - Deferrable views",level:1,content:"# Template - Deferrable views",frontmatter:{layout:"section",title:"Template - Deferrable views",transition:"slide-up",srcSequence:"./pages/deferrable-views.md"},index:40,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",raw:`---
layout: section
---

# Template - Deferrable views
`,title:"Template - Deferrable views",level:1,content:"# Template - Deferrable views",frontmatter:{layout:"section",title:"Template - Deferrable views"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/deferrable-views.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:9,start:93,end:99},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:KS,meta:{layout:"quote",transition:"slide-up",srcSequence:"./pages/deferrable-views.md",slide:{raw:`---
layout: quote
---

# Deferrable views can be used in component template to defer the loading of select dependencies within that template
`,title:"Deferrable views can be used in component template to defer the loading of select dependencies within that template",level:1,content:"# Deferrable views can be used in component template to defer the loading of select dependencies within that template",frontmatter:{layout:"quote",transition:"slide-up",srcSequence:"./pages/deferrable-views.md"},index:41,start:6,end:12,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",raw:`---
layout: quote
---

# Deferrable views can be used in component template to defer the loading of select dependencies within that template
`,title:"Deferrable views can be used in component template to defer the loading of select dependencies within that template",level:1,content:"# Deferrable views can be used in component template to defer the loading of select dependencies within that template",frontmatter:{layout:"quote"},index:1,start:6,end:12},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:ZS,meta:{transition:"slide-up",srcSequence:"./pages/deferrable-views.md",slide:{raw:`
# Template - Deferrable views

<v-clicks>

- lazy loading for Component

- improve Core Web Vitals score

- block declaration

- triggers

- prefetching

- defer only with standalone

</v-clicks>
`,title:"Template - Deferrable views",level:1,content:`# Template - Deferrable views

<v-clicks>

- lazy loading for Component

- improve Core Web Vitals score

- block declaration

- triggers

- prefetching

- defer only with standalone

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/deferrable-views.md"},index:42,start:13,end:32,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",raw:`
# Template - Deferrable views

<v-clicks>

- lazy loading for Component

- improve Core Web Vitals score

- block declaration

- triggers

- prefetching

- defer only with standalone

</v-clicks>
`,title:"Template - Deferrable views",level:1,content:`# Template - Deferrable views

<v-clicks>

- lazy loading for Component

- improve Core Web Vitals score

- block declaration

- triggers

- prefetching

- defer only with standalone

</v-clicks>`,frontmatter:{},index:2,start:13,end:32},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:l9,meta:{transition:"slide-up",srcSequence:"./pages/deferrable-views.md",slide:{raw:`
# Template - Deferrable views

<v-click>

### blocks
</v-click>

<v-clicks>

- @defer

- @placeholder

- @loading

- @error

</v-clicks>

<v-click>

### triggers
</v-click>

<v-clicks>

- replace placeholder with lazy load content

- built-in trigger

- ignored with SSR

</v-clicks>
`,title:"Template - Deferrable views",level:1,content:`# Template - Deferrable views

<v-click>

### blocks
</v-click>

<v-clicks>

- @defer

- @placeholder

- @loading

- @error

</v-clicks>

<v-click>

### triggers
</v-click>

<v-clicks>

- replace placeholder with lazy load content

- built-in trigger

- ignored with SSR

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/deferrable-views.md"},index:43,start:33,end:68,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",raw:`
# Template - Deferrable views

<v-click>

### blocks
</v-click>

<v-clicks>

- @defer

- @placeholder

- @loading

- @error

</v-clicks>

<v-click>

### triggers
</v-click>

<v-clicks>

- replace placeholder with lazy load content

- built-in trigger

- ignored with SSR

</v-clicks>
`,title:"Template - Deferrable views",level:1,content:`# Template - Deferrable views

<v-click>

### blocks
</v-click>

<v-clicks>

- @defer

- @placeholder

- @loading

- @error

</v-clicks>

<v-click>

### triggers
</v-click>

<v-clicks>

- replace placeholder with lazy load content

- built-in trigger

- ignored with SSR

</v-clicks>`,frontmatter:{},index:3,start:33,end:68},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:d9,meta:{transition:"slide-up",srcSequence:"./pages/deferrable-views.md",slide:{raw:`
# Template - Deferrable views

<v-click>

loading example

\`\`\`html
@defer {
  <large-component />
} @loading (after 100ms; minimum 1s) {
  <img alt="loading..." src="loading.gif" />
}
\`\`\`

</v-click>

<v-click>

prefetching example
\`\`\`html
@defer (on interaction; prefetch on idle) {
  <calendar-cmp />
} @placeholder {
  <img src="placeholder.png" />
}
\`\`\`
</v-click>`,title:"Template - Deferrable views",level:1,content:`# Template - Deferrable views

<v-click>

loading example

\`\`\`html
@defer {
  <large-component />
} @loading (after 100ms; minimum 1s) {
  <img alt="loading..." src="loading.gif" />
}
\`\`\`

</v-click>

<v-click>

prefetching example
\`\`\`html
@defer (on interaction; prefetch on idle) {
  <calendar-cmp />
} @placeholder {
  <img src="placeholder.png" />
}
\`\`\`
</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/deferrable-views.md"},index:44,start:69,end:97,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",raw:`
# Template - Deferrable views

<v-click>

loading example

\`\`\`html
@defer {
  <large-component />
} @loading (after 100ms; minimum 1s) {
  <img alt="loading..." src="loading.gif" />
}
\`\`\`

</v-click>

<v-click>

prefetching example
\`\`\`html
@defer (on interaction; prefetch on idle) {
  <calendar-cmp />
} @placeholder {
  <img src="placeholder.png" />
}
\`\`\`
</v-click>`,title:"Template - Deferrable views",level:1,content:`# Template - Deferrable views

<v-click>

loading example

\`\`\`html
@defer {
  <large-component />
} @loading (after 100ms; minimum 1s) {
  <img alt="loading..." src="loading.gif" />
}
\`\`\`

</v-click>

<v-click>

prefetching example
\`\`\`html
@defer (on interaction; prefetch on idle) {
  <calendar-cmp />
} @placeholder {
  <img src="placeholder.png" />
}
\`\`\`
</v-click>`,frontmatter:{},index:4,start:69,end:97},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/deferrable-views.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:m9,meta:{layout:"section",title:"Leaner DX",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:null,title:"Leaner DX",level:1,content:"# Leaner DX",frontmatter:{layout:"section",title:"Leaner DX",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:45,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: section
---

# Leaner DX
`,title:"Leaner DX",level:1,content:"# Leaner DX",frontmatter:{layout:"section",title:"Leaner DX"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/new-dx/new-dx.md
transition: slide-up

---

`,content:"",frontmatter:{transition:"slide-up"},index:10,start:99,end:106},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:v9,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX

<v-clicks>

- inject
- function > class
- destroyRef
- takeUntilDestroyed
- router input binding

</v-clicks>
`,title:"Leaner DX",level:1,content:`# Leaner DX

<v-clicks>

- inject
- function > class
- destroyRef
- takeUntilDestroyed
- router input binding

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:46,start:7,end:20,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX

<v-clicks>

- inject
- function > class
- destroyRef
- takeUntilDestroyed
- router input binding

</v-clicks>
`,title:"Leaner DX",level:1,content:`# Leaner DX

<v-clicks>

- inject
- function > class
- destroyRef
- takeUntilDestroyed
- router input binding

</v-clicks>`,frontmatter:{},index:1,start:7,end:20},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:b9,meta:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`---
layout: section
---

# Leaner DX - inject
`,title:"Leaner DX - inject",level:1,content:"# Leaner DX - inject",frontmatter:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:47,start:20,end:26,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: section
---

# Leaner DX - inject
`,title:"Leaner DX - inject",level:1,content:"# Leaner DX - inject",frontmatter:{layout:"section"},index:2,start:20,end:26},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:S9,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - inject

providing without inject
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(private readonly service: AppService)
}
\`\`\``,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

providing without inject
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(private readonly service: AppService)
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:48,start:27,end:46,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - inject

providing without inject
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(private readonly service: AppService)
}
\`\`\``,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

providing without inject
\`\`\`ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(private readonly service: AppService)
}
\`\`\``,frontmatter:{},index:3,start:27,end:46},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:I9,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - inject

providing with inject
\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService)
}
\`\`\``,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

providing with inject
\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService)
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:49,start:47,end:66,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - inject

providing with inject
\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService)
}
\`\`\``,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

providing with inject
\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService)
}
\`\`\``,frontmatter:{},index:4,start:47,end:66},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:D9,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - inject

available in an injection context

- constructor initialization

- class field initialization

- provider with *useFactory* function

- *InjectionToken* factory function

- *runInInjectionContext*
`,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

available in an injection context

- constructor initialization

- class field initialization

- provider with *useFactory* function

- *InjectionToken* factory function

- *runInInjectionContext*`,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:50,start:67,end:82,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - inject

available in an injection context

- constructor initialization

- class field initialization

- provider with *useFactory* function

- *InjectionToken* factory function

- *runInInjectionContext*
`,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

available in an injection context

- constructor initialization

- class field initialization

- provider with *useFactory* function

- *InjectionToken* factory function

- *runInInjectionContext*`,frontmatter:{},index:5,start:67,end:82},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:H9,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - inject

\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService) //class field init
    private injector: Injector;

    constructor(private readonly service: AppService) {
        this.injector = inject(Injector) //constructor init
    }

    ngOnInit() {
        runInInjectionContext(this.injector, () => {
            inject(LoggerService); //inject a service outside an injection context
        })
    }
}
\`\`\`
`,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService) //class field init
    private injector: Injector;

    constructor(private readonly service: AppService) {
        this.injector = inject(Injector) //constructor init
    }

    ngOnInit() {
        runInInjectionContext(this.injector, () => {
            inject(LoggerService); //inject a service outside an injection context
        })
    }
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:51,start:83,end:113,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - inject

\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService) //class field init
    private injector: Injector;

    constructor(private readonly service: AppService) {
        this.injector = inject(Injector) //constructor init
    }

    ngOnInit() {
        runInInjectionContext(this.injector, () => {
            inject(LoggerService); //inject a service outside an injection context
        })
    }
}
\`\`\`
`,title:"Leaner DX - inject",level:1,content:`# Leaner DX - inject

\`\`\`ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService) //class field init
    private injector: Injector;

    constructor(private readonly service: AppService) {
        this.injector = inject(Injector) //constructor init
    }

    ngOnInit() {
        runInInjectionContext(this.injector, () => {
            inject(LoggerService); //inject a service outside an injection context
        })
    }
}
\`\`\``,frontmatter:{},index:6,start:83,end:113},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:U9,meta:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`---
layout: section
---

# Leaner DX - function > class

`,title:"Leaner DX - function > class",level:1,content:"# Leaner DX - function > class",frontmatter:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:52,start:113,end:120,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: section
---

# Leaner DX - function > class

`,title:"Leaner DX - function > class",level:1,content:"# Leaner DX - function > class",frontmatter:{layout:"section"},index:7,start:113,end:120},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:X9,meta:{layout:"statement",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`---
layout: statement
---

# usage of classes is deprecated for interceptors and guards

`,title:"usage of classes is deprecated for interceptors and guards",level:1,content:"# usage of classes is deprecated for interceptors and guards",frontmatter:{layout:"statement",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:53,start:120,end:127,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: statement
---

# usage of classes is deprecated for interceptors and guards

`,title:"usage of classes is deprecated for interceptors and guards",level:1,content:"# usage of classes is deprecated for interceptors and guards",frontmatter:{layout:"statement"},index:8,start:120,end:127},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Z9,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - function > class

oo approach
\`\`\`ts
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private readonly user: User) {}
    
    intercept() {
        const accessToken = this.user.accessToken;

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: \`Bearer \${accessToken}\`,
                },
            });
        }

        return next(req);
    }
}
\`\`\`
`,title:"Leaner DX - function > class",level:1,content:`# Leaner DX - function > class

oo approach
\`\`\`ts
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private readonly user: User) {}
    
    intercept() {
        const accessToken = this.user.accessToken;

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: \`Bearer \${accessToken}\`,
                },
            });
        }

        return next(req);
    }
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:54,start:128,end:156,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - function > class

oo approach
\`\`\`ts
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private readonly user: User) {}
    
    intercept() {
        const accessToken = this.user.accessToken;

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: \`Bearer \${accessToken}\`,
                },
            });
        }

        return next(req);
    }
}
\`\`\`
`,title:"Leaner DX - function > class",level:1,content:`# Leaner DX - function > class

oo approach
\`\`\`ts
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private readonly user: User) {}
    
    intercept() {
        const accessToken = this.user.accessToken;

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: \`Bearer \${accessToken}\`,
                },
            });
        }

        return next(req);
    }
}
\`\`\``,frontmatter:{},index:9,start:128,end:156},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:lE,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - function > class

<v-click>

functional approach 

\`\`\`ts
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(User).accessToken;

  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: \`Bearer \${accessToken}\`,
      },
    });
  }

  return next(req);
};
\`\`\`

</v-click>

<v-click>

providing
\`\`\`ts
// in app.config.ts
provideHttpClient(withInterceptors([jwtInterceptor]))
\`\`\`
</v-click>
`,title:"Leaner DX - function > class",level:1,content:`# Leaner DX - function > class

<v-click>

functional approach 

\`\`\`ts
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(User).accessToken;

  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: \`Bearer \${accessToken}\`,
      },
    });
  }

  return next(req);
};
\`\`\`

</v-click>

<v-click>

providing
\`\`\`ts
// in app.config.ts
provideHttpClient(withInterceptors([jwtInterceptor]))
\`\`\`
</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:55,start:157,end:191,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - function > class

<v-click>

functional approach 

\`\`\`ts
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(User).accessToken;

  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: \`Bearer \${accessToken}\`,
      },
    });
  }

  return next(req);
};
\`\`\`

</v-click>

<v-click>

providing
\`\`\`ts
// in app.config.ts
provideHttpClient(withInterceptors([jwtInterceptor]))
\`\`\`
</v-click>
`,title:"Leaner DX - function > class",level:1,content:`# Leaner DX - function > class

<v-click>

functional approach 

\`\`\`ts
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(User).accessToken;

  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: \`Bearer \${accessToken}\`,
      },
    });
  }

  return next(req);
};
\`\`\`

</v-click>

<v-click>

providing
\`\`\`ts
// in app.config.ts
provideHttpClient(withInterceptors([jwtInterceptor]))
\`\`\`
</v-click>`,frontmatter:{},index:10,start:157,end:191},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:iE,meta:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`---
layout: section
---

# Leaner DX - destroyRef
`,title:"Leaner DX - destroyRef",level:1,content:"# Leaner DX - destroyRef",frontmatter:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:56,start:191,end:197,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: section
---

# Leaner DX - destroyRef
`,title:"Leaner DX - destroyRef",level:1,content:"# Leaner DX - destroyRef",frontmatter:{layout:"section"},index:11,start:191,end:197},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:FE,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - destroyRef

<v-clicks>

- introduced in v16

- available in lifecycle related artifact

- reusable destroy logic

</v-clicks>

<v-click>

example

\`\`\`ts
    inject(DestroyRef).onDestroy(() => {
      // execute destroy logic
    })
\`\`\`

</v-click>
`,title:"Leaner DX - destroyRef",level:1,content:`# Leaner DX - destroyRef

<v-clicks>

- introduced in v16

- available in lifecycle related artifact

- reusable destroy logic

</v-clicks>

<v-click>

example

\`\`\`ts
    inject(DestroyRef).onDestroy(() => {
      // execute destroy logic
    })
\`\`\`

</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:57,start:198,end:223,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - destroyRef

<v-clicks>

- introduced in v16

- available in lifecycle related artifact

- reusable destroy logic

</v-clicks>

<v-click>

example

\`\`\`ts
    inject(DestroyRef).onDestroy(() => {
      // execute destroy logic
    })
\`\`\`

</v-click>
`,title:"Leaner DX - destroyRef",level:1,content:`# Leaner DX - destroyRef

<v-clicks>

- introduced in v16

- available in lifecycle related artifact

- reusable destroy logic

</v-clicks>

<v-click>

example

\`\`\`ts
    inject(DestroyRef).onDestroy(() => {
      // execute destroy logic
    })
\`\`\`

</v-click>`,frontmatter:{},index:12,start:198,end:223},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:yE,meta:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`---
layout: section
---

# Leaner DX - takeUntilDestroyed
`,title:"Leaner DX - takeUntilDestroyed",level:1,content:"# Leaner DX - takeUntilDestroyed",frontmatter:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:58,start:223,end:229,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: section
---

# Leaner DX - takeUntilDestroyed
`,title:"Leaner DX - takeUntilDestroyed",level:1,content:"# Leaner DX - takeUntilDestroyed",frontmatter:{layout:"section"},index:13,start:223,end:229},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:_E,meta:{layout:"statement",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`---
layout: statement
---

# it completes an observable when the context is destroyed

`,title:"it completes an observable when the context is destroyed",level:1,content:"# it completes an observable when the context is destroyed",frontmatter:{layout:"statement",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:59,start:229,end:236,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: statement
---

# it completes an observable when the context is destroyed

`,title:"it completes an observable when the context is destroyed",level:1,content:"# it completes an observable when the context is destroyed",frontmatter:{layout:"statement"},index:14,start:229,end:236},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:kE,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - takeUntilDestroyed

example

\`\`\`ts
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() {
        interval(1000)
        .pipe(takeUntilDestroyed()) //must be used inside an injection context
        .subscribe(console.log);
    }
}
\`\`\`
`,title:"Leaner DX - takeUntilDestroyed",level:1,content:`# Leaner DX - takeUntilDestroyed

example

\`\`\`ts
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() {
        interval(1000)
        .pipe(takeUntilDestroyed()) //must be used inside an injection context
        .subscribe(console.log);
    }
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:60,start:237,end:262,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - takeUntilDestroyed

example

\`\`\`ts
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() {
        interval(1000)
        .pipe(takeUntilDestroyed()) //must be used inside an injection context
        .subscribe(console.log);
    }
}
\`\`\`
`,title:"Leaner DX - takeUntilDestroyed",level:1,content:`# Leaner DX - takeUntilDestroyed

example

\`\`\`ts
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() {
        interval(1000)
        .pipe(takeUntilDestroyed()) //must be used inside an injection context
        .subscribe(console.log);
    }
}
\`\`\``,frontmatter:{},index:15,start:237,end:262},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:OE,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - takeUntilDestroyed

example outside an **injectionContext**

\`\`\`ts
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef)

    ngOnInit() {
        interval(1000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(console.log);
    }
}
\`\`\`
`,title:"Leaner DX - takeUntilDestroyed",level:1,content:`# Leaner DX - takeUntilDestroyed

example outside an **injectionContext**

\`\`\`ts
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef)

    ngOnInit() {
        interval(1000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(console.log);
    }
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:61,start:263,end:290,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - takeUntilDestroyed

example outside an **injectionContext**

\`\`\`ts
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef)

    ngOnInit() {
        interval(1000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(console.log);
    }
}
\`\`\`
`,title:"Leaner DX - takeUntilDestroyed",level:1,content:`# Leaner DX - takeUntilDestroyed

example outside an **injectionContext**

\`\`\`ts
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef)

    ngOnInit() {
        interval(1000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(console.log);
    }
}
\`\`\``,frontmatter:{},index:16,start:263,end:290},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:PE,meta:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`---
layout: section
---

# Leaner DX - router input binding
`,title:"Leaner DX - router input binding",level:1,content:"# Leaner DX - router input binding",frontmatter:{layout:"section",transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:62,start:290,end:296,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`---
layout: section
---

# Leaner DX - router input binding
`,title:"Leaner DX - router input binding",level:1,content:"# Leaner DX - router input binding",frontmatter:{layout:"section"},index:17,start:290,end:296},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:jE,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - router input binding

<v-clicks>

- binding routing information
    
    <v-click>

        - static data
        - resolved data
        - path params
        - query params
    
    </v-click>

- *withComponentInputBinding()*

</v-clicks>
`,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

<v-clicks>

- binding routing information
    
    <v-click>

        - static data
        - resolved data
        - path params
        - query params
    
    </v-click>

- *withComponentInputBinding()*

</v-clicks>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:63,start:297,end:317,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - router input binding

<v-clicks>

- binding routing information
    
    <v-click>

        - static data
        - resolved data
        - path params
        - query params
    
    </v-click>

- *withComponentInputBinding()*

</v-clicks>
`,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

<v-clicks>

- binding routing information
    
    <v-click>

        - static data
        - resolved data
        - path params
        - query params
    
    </v-click>

- *withComponentInputBinding()*

</v-clicks>`,frontmatter:{},index:18,start:297,end:317},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:VE,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - router input binding

\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: 'user/:id',
          data: {
            breadcrumbLabel: 'User Detail'
          }
          resolve: { contactType: () => [{type: 'Email'}, {type: 'Phone'}] },
          loadComponent: () => import('./app/user/user.component'),
        }
      ],
      withComponentInputBinding()
    ),
  ],
});

\`\`\``,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: 'user/:id',
          data: {
            breadcrumbLabel: 'User Detail'
          }
          resolve: { contactType: () => [{type: 'Email'}, {type: 'Phone'}] },
          loadComponent: () => import('./app/user/user.component'),
        }
      ],
      withComponentInputBinding()
    ),
  ],
});

\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:64,start:318,end:344,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - router input binding

\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: 'user/:id',
          data: {
            breadcrumbLabel: 'User Detail'
          }
          resolve: { contactType: () => [{type: 'Email'}, {type: 'Phone'}] },
          loadComponent: () => import('./app/user/user.component'),
        }
      ],
      withComponentInputBinding()
    ),
  ],
});

\`\`\``,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: 'user/:id',
          data: {
            breadcrumbLabel: 'User Detail'
          }
          resolve: { contactType: () => [{type: 'Email'}, {type: 'Phone'}] },
          loadComponent: () => import('./app/user/user.component'),
        }
      ],
      withComponentInputBinding()
    ),
  ],
});

\`\`\``,frontmatter:{},index:19,start:318,end:344},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:GE,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - router input binding

navigation to
\`\`\`ts 
/user/23?q=angular
\`\`\`

example
\`\`\`ts
@Component({
  standalone: true,
  template: ''
})
export default class UserComponent {
    @Input() id: string; // 23
    @Input() contactType: Array<{type: string}>; // [{type: 'Email'}, {type: 'Phone'}]
    @Input() breadcrumbLabel: string; // 'User Detail'
    @Input() q: string; // angular
}
\`\`\`
`,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

navigation to
\`\`\`ts 
/user/23?q=angular
\`\`\`

example
\`\`\`ts
@Component({
  standalone: true,
  template: ''
})
export default class UserComponent {
    @Input() id: string; // 23
    @Input() contactType: Array<{type: string}>; // [{type: 'Email'}, {type: 'Phone'}]
    @Input() breadcrumbLabel: string; // 'User Detail'
    @Input() q: string; // angular
}
\`\`\``,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:65,start:345,end:367,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - router input binding

navigation to
\`\`\`ts 
/user/23?q=angular
\`\`\`

example
\`\`\`ts
@Component({
  standalone: true,
  template: ''
})
export default class UserComponent {
    @Input() id: string; // 23
    @Input() contactType: Array<{type: string}>; // [{type: 'Email'}, {type: 'Phone'}]
    @Input() breadcrumbLabel: string; // 'User Detail'
    @Input() q: string; // angular
}
\`\`\`
`,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

navigation to
\`\`\`ts 
/user/23?q=angular
\`\`\`

example
\`\`\`ts
@Component({
  standalone: true,
  template: ''
})
export default class UserComponent {
    @Input() id: string; // 23
    @Input() contactType: Array<{type: string}>; // [{type: 'Email'}, {type: 'Phone'}]
    @Input() breadcrumbLabel: string; // 'User Detail'
    @Input() q: string; // angular
}
\`\`\``,frontmatter:{},index:20,start:345,end:367},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:n$,meta:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md",slide:{raw:`
# Leaner DX - router input binding

in case of name conflict

- data

- path params

- query params

`,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

in case of name conflict

- data

- path params

- query params`,frontmatter:{transition:"slide-up",srcSequence:"./pages/new-dx/new-dx.md"},index:66,start:368,end:380,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",raw:`
# Leaner DX - router input binding

in case of name conflict

- data

- path params

- query params

`,title:"Leaner DX - router input binding",level:1,content:`# Leaner DX - router input binding

in case of name conflict

- data

- path params

- query params`,frontmatter:{},index:21,start:368,end:380},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/new-dx/new-dx.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:o$,meta:{layout:"section",title:"What's next?",transition:"slide-up",srcSequence:"./pages/what-s-next.md",slide:{raw:null,title:"What's next?",level:1,content:"# What's next?",frontmatter:{layout:"section",title:"What's next?",transition:"slide-up",srcSequence:"./pages/what-s-next.md"},note:`---

# What's Next?

- esbuild/vite

- jest support

- migration from karma to web test runner`,index:67,start:0,end:15,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/what-s-next.md",raw:`---
layout: section
---

# What's next?

<!-- ---

# What's Next?

- esbuild/vite

- jest support

- migration from karma to web test runner -->`,title:"What's next?",level:1,content:"# What's next?",frontmatter:{layout:"section",title:"What's next?"},note:`---

# What's Next?

- esbuild/vite

- jest support

- migration from karma to web test runner`,index:0,start:0,end:15},inline:{raw:`---
src: ./pages/what-s-next.md
transition: slide-up

---
`,content:"",frontmatter:{transition:"slide-up"},index:11,start:106,end:112},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/what-s-next.md",noteHTML:`<hr>
<h1>What's Next?</h1>
<ul>
<li>
<p>esbuild/vite</p>
</li>
<li>
<p>jest support</p>
</li>
<li>
<p>migration from karma to web test runner</p>
</li>
</ul>
`,id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:a$,meta:{layout:"center",title:"Questions?",transition:"slide-up",srcSequence:"./pages/thank-you.md",slide:{raw:null,title:"Questions?",level:1,content:"# Questions?",frontmatter:{layout:"center",title:"Questions?",transition:"slide-up",srcSequence:"./pages/thank-you.md"},index:68,start:0,end:6,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/thank-you.md",raw:`---
layout: center
---

# Questions?
`,title:"Questions?",level:1,content:"# Questions?",frontmatter:{layout:"center",title:"Questions?"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/thank-you.md
transition: slide-up

---`,content:"",frontmatter:{transition:"slide-up"},index:12,start:112,end:117},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/thank-you.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:p$,meta:{layout:"center",transition:"slide-up",srcSequence:"./pages/thank-you.md",slide:{raw:`---
layout: center
---

# Thank you!`,title:"Thank you!",level:1,content:"# Thank you!",frontmatter:{layout:"center",transition:"slide-up",srcSequence:"./pages/thank-you.md"},index:69,start:6,end:11,source:{filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/thank-you.md",raw:`---
layout: center
---

# Thank you!`,title:"Thank you!",level:1,content:"# Thank you!",frontmatter:{layout:"center"},index:1,start:6,end:11},filepath:"/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/pages/thank-you.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",component:bC,meta:{layout:"end"}}],Ke=u$,po=[{name:"play",path:"/",component:zb,children:[...Ke]},{name:"print",path:"/print",component:vC},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!co.remote||co.remote===t.query.password)return!0;if(co.remote&&t.query.password===void 0){const s=prompt("Enter password");if(co.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};po.push({path:"/presenter/print",component:()=>Bt(()=>import("./PresenterPrint-077953c7.js"),["assets/PresenterPrint-077953c7.js","assets/NoteDisplay-cb00541b.js"])}),po.push({name:"notes",path:"/notes",component:()=>Bt(()=>import("./NotesView-729cdbbe.js"),["assets/NotesView-729cdbbe.js","assets/NoteDisplay-cb00541b.js"]),beforeEnter:e}),po.push({name:"presenter",path:"/presenter/:no",component:()=>Bt(()=>import("./Presenter-25627c80.js"),["assets/Presenter-25627c80.js","assets/NoteDisplay-cb00541b.js","assets/DrawingControls-e0da641d.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),po.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wn=L1({history:R_("/slides-brand-new-angular/"),routes:po});function d$(e,t,{mode:s="replace"}={}){return P({get(){const o=wn.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){nn(()=>{wn[I(s)]({query:{...wn.currentRoute.value.query,[e]:o}})})}})}const fF=K(0);nn(()=>{wn.afterEach(async()=>{await nn(),fF.value+=1})});const FF=K(0),Nn=P(()=>wn.currentRoute.value),js=P(()=>Nn.value.query.print!==void 0),f$=P(()=>Nn.value.query.print==="clicks"),mt=P(()=>Nn.value.query.embedded!==void 0),vn=P(()=>Nn.value.path.startsWith("/presenter")),F$=P(()=>Nn.value.path.startsWith("/notes")),_o=P(()=>js.value&&!f$.value),Ua=P(()=>Nn.value.query.password),m$=P(()=>!vn.value&&(!Se.remote||Ua.value===Se.remote)),Jp=d$("clicks","0"),h$=P(()=>Ke.length-1),y$=P(()=>Nn.value.path),We=P(()=>parseInt(y$.value.split(/\//g).slice(-1)[0])||1);P(()=>_r(We.value));const fn=P(()=>Ke.find(e=>e.path===`${We.value}`));P(()=>{var e,t,s;return(s=(t=(e=fn.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});P(()=>{var e,t;return((t=(e=fn.value)==null?void 0:e.meta)==null?void 0:t.layout)||(We.value===1?"cover":"default")});const zr=P(()=>Ke.find(e=>e.path===`${Math.min(Ke.length,We.value+1)}`)),g$=P(()=>Ke.find(e=>e.path===`${Math.max(1,We.value-1)}`)),v$=P(()=>{var e,t;return fF.value,((t=(e=fn.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Bn=P({get(){if(_o.value)return 99999;let e=+(Jp.value||0);return isNaN(e)&&(e=0),e},set(e){Jp.value=e.toString()}}),Kl=P(()=>{var e,t;return+(((t=(e=fn.value)==null?void 0:e.meta)==null?void 0:t.clicks)??v$.value.length)}),_$=P(()=>We.value<Ke.length-1||Bn.value<Kl.value),w$=P(()=>We.value>1||Bn.value>0),b$=P(()=>Ke.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(qi(e,t),e),[])),x$=P(()=>Vi(b$.value,fn.value));P(()=>Ui(x$.value));const C$=P(()=>$$(FF.value,fn.value,g$.value));he(fn,(e,t)=>{FF.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Nt(){Kl.value<=Bn.value?Do():Bn.value+=1}async function Ht(){Bn.value<=0?await Bo():Bn.value-=1}function _r(e){return vn.value?`/presenter/${e}`:`/${e}`}function Do(){const e=Math.min(Ke.length,We.value+1);return Ns(e)}async function Bo(e=!0){const t=Math.max(1,We.value-1);await Ns(t),e&&Kl.value&&wn.replace({query:{...Nn.value.query,clicks:Kl.value}})}function Ns(e,t){return wn.push({path:_r(e),query:{...Nn.value.query,clicks:t}})}function k$(e){const t=K(0),{direction:s,distanceX:o,distanceY:l}=s_(e,{onSwipeStart(r){r.pointerType==="touch"&&(Ro.value||(t.value=ka()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Ro.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value==="left"?Nt():Ht():(i/window.innerHeight>.4||i>200)&&(s.value==="down"?Bo():Do())}})}async function Wa(){const{saveAs:e}=await Bt(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof Se.download=="string"?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/slides-brand-new-angular/slidev-exported.pdf",`${Se.title}.pdf`)}async function A$(e){var t,s;if(e==null){const o=(s=(t=fn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function qi(e,t,s=1){var l,r,a,i,c;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&e.length>0?qi(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Vi(e,t,s=!1,o){return e.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=Vi(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Ui(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:Ui(s.children,t+1)}))}const S$={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function E$(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:S$[e.name]||e.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=t?l:o}if(s)return{...e,name:s}}function $$(e,t,s){var l,r;let o=e>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return o||(o=Se.transition),E$(o,e<0)}function O$(){const e=Se.titleTemplate.replace("%s",Se.title||"Slidev");sf({title:e,htmlAttrs:Se.htmlAttrs}),Dv(`${e} - shared`),Hv(`${e} - drawings`);const t=`${location.origin}_${Ov()}`;function s(){F$.value||!vn.value&&!$v.includes(location.host.split(":")[0])||(vn.value?(Js("page",+We.value),Js("clicks",Bn.value)):(Js("viewerPage",+We.value),Js("viewerClicks",Bn.value)),Js("lastUpdate",{id:t,type:vn.value?"presenter":"viewer",time:new Date().getTime()}))}wn.afterEach(s),he(Bn,s),Bv(o=>{var r;wn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+We.value||+Bn.value!=+o.clicks)&&wn.replace({path:_r(o.page),query:{...wn.currentRoute.value.query,clicks:o.clicks||0}})})}const T$=Oe({__name:"App",setup(e){return M(N),O$(),(t,s)=>{const o=Ml("RouterView"),l=Ml("StarportCarrier");return C(),G($e,null,[L(o),L(l)],64)}}}),I$=H(T$,[["__file","/home/runner/work/slides-brand-new-angular/slides-brand-new-angular/node_modules/@slidev/client/App.vue"]]);function Xr(e){return e!==null&&typeof e=="object"}function za(e,t,s=".",o){if(!Xr(t))return za(e,{},s,o);const l=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:Xr(a)&&Xr(l[r])?l[r]=za(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function P$(e){return(...t)=>t.reduce((s,o)=>za(s,o,"",e),{})}const R$=P$();var Zp;const mF=typeof window<"u",L$=Object.prototype.toString,M$=e=>typeof e=="number",D$=e=>typeof e=="string",Xa=e=>L$.call(e)==="[object Object]",xl=()=>{};mF&&((Zp=window==null?void 0:window.navigator)!=null&&Zp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function hF(e){return typeof e=="function"?e():I(e)}function B$(e){return e}function yF(e){return er()?(ii(e),!0):!1}function j$(e,t=!0){bn()?Ct(e):t?e():nn(e)}function N$(e){bn()&&dr(e)}function Yl(e){var t;const s=hF(e);return(t=s==null?void 0:s.$el)!=null?t:s}const gF=mF?window:void 0;function Vn(...e){let t,s,o,l;if(D$(e[0])||Array.isArray(e[0])?([s,o,l]=e,t=gF):[t,s,o,l]=e,!t)return xl;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,f,F,m)=>(d.addEventListener(f,F,m),()=>d.removeEventListener(f,F,m)),c=he(()=>[Yl(t),hF(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(F=>o.map(m=>i(d,F,m,f))))},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return yF(p),p}function H$(e,t=!1){const s=K(),o=()=>s.value=!!e();return o(),j$(o,t),s}const Qp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},eu="__vueuse_ssr_handlers__";Qp[eu]=Qp[eu]||{};function q$(e,t,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=gF}=s,i=H$(()=>a&&"IntersectionObserver"in a);let c=xl;const p=i.value?he(()=>({el:Yl(e),root:Yl(o)}),({el:f,root:F})=>{if(c(),!f)return;const m=new IntersectionObserver(t,{root:F,rootMargin:l,threshold:r});m.observe(f),c=()=>{m.disconnect(),c=xl}},{immediate:!0,flush:"post"}):xl,d=()=>{c(),p()};return yF(d),{isSupported:i,stop:d}}var nu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(nu||(nu={}));var V$=Object.defineProperty,tu=Object.getOwnPropertySymbols,U$=Object.prototype.hasOwnProperty,W$=Object.prototype.propertyIsEnumerable,su=(e,t,s)=>t in e?V$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,z$=(e,t)=>{for(var s in t||(t={}))U$.call(t,s)&&su(e,s,t[s]);if(tu)for(var s of tu(t))W$.call(t,s)&&su(e,s,t[s]);return e};const X$={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};z$({linear:B$},X$);const vF=1/60*1e3,K$=typeof performance<"u"?()=>performance.now():()=>Date.now(),_F=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(K$()),vF);function Y$(e){let t=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,p=!1,d=!1)=>{const f=d&&l,F=f?t:s;return p&&a.add(c),F.indexOf(c)===-1&&(F.push(c),f&&l&&(o=t.length)),c},cancel:c=>{const p=s.indexOf(c);p!==-1&&s.splice(p,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let p=0;p<o;p++){const d=t[p];d(c),a.has(d)&&(i.schedule(d),e())}l=!1,r&&(r=!1,i.process(c))}};return i}const G$=40;let Ka=!0,jo=!1,Ya=!1;const Ms={delta:0,timestamp:0},Ko=["read","update","preRender","render","postRender"],wr=Ko.reduce((e,t)=>(e[t]=Y$(()=>jo=!0),e),{}),Ga=Ko.reduce((e,t)=>{const s=wr[t];return e[t]=(o,l=!1,r=!1)=>(jo||Q$(),s.schedule(o,l,r)),e},{}),J$=Ko.reduce((e,t)=>(e[t]=wr[t].cancel,e),{});Ko.reduce((e,t)=>(e[t]=()=>wr[t].process(Ms),e),{});const Z$=e=>wr[e].process(Ms),wF=e=>{jo=!1,Ms.delta=Ka?vF:Math.max(Math.min(e-Ms.timestamp,G$),1),Ms.timestamp=e,Ya=!0,Ko.forEach(Z$),Ya=!1,jo&&(Ka=!1,_F(wF))},Q$=()=>{jo=!0,Ka=!0,Ya||_F(wF)},bF=()=>Ms;function xF(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(s[o[l]]=e[o[l]]);return s}var Wi=function(){},No=function(){};Wi=function(e,t){!e&&typeof console<"u"&&console.warn(t)},No=function(e,t){if(!e)throw new Error(t)};const Ja=(e,t,s)=>Math.min(Math.max(s,e),t),Kr=.001,e7=.01,ou=10,n7=.05,t7=1;function s7({duration:e=800,bounce:t=.25,velocity:s=0,mass:o=1}){let l,r;Wi(e<=ou*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Ja(n7,t7,a),e=Ja(e7,ou,e/1e3),a<1?(l=p=>{const d=p*a,f=d*e,F=d-s,m=Za(p,a),h=Math.exp(-f);return Kr-F/m*h},r=p=>{const f=p*a*e,F=f*s+s,m=Math.pow(a,2)*Math.pow(p,2)*e,h=Math.exp(-f),_=Za(Math.pow(p,2),a);return(-l(p)+Kr>0?-1:1)*((F-m)*h)/_}):(l=p=>{const d=Math.exp(-p*e),f=(p-s)*e+1;return-Kr+d*f},r=p=>{const d=Math.exp(-p*e),f=(s-p)*(e*e);return d*f});const i=5/e,c=l7(l,r,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(c,2)*o;return{stiffness:p,damping:a*2*Math.sqrt(o*p),duration:e}}}const o7=12;function l7(e,t,s){let o=s;for(let l=1;l<o7;l++)o=o-e(o)/t(o);return o}function Za(e,t){return e*Math.sqrt(1-t*t)}const r7=["duration","bounce"],a7=["stiffness","damping","mass"];function lu(e,t){return t.some(s=>e[s]!==void 0)}function i7(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!lu(e,a7)&&lu(e,r7)){const s=s7(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function zi(e){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:l}=e,r=xF(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:p,velocity:d,duration:f,isResolvedFromDuration:F}=i7(r),m=ru,h=ru;function _(){const b=d?-(d/1e3):0,w=s-t,x=c/(2*Math.sqrt(i*p)),g=Math.sqrt(i/p)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-t)/100,.4)),x<1){const S=Za(g,x);m=k=>{const $=Math.exp(-x*g*k);return s-$*((b+x*g*w)/S*Math.sin(S*k)+w*Math.cos(S*k))},h=k=>{const $=Math.exp(-x*g*k);return x*g*$*(Math.sin(S*k)*(b+x*g*w)/S+w*Math.cos(S*k))-$*(Math.cos(S*k)*(b+x*g*w)-S*w*Math.sin(S*k))}}else if(x===1)m=S=>s-Math.exp(-g*S)*(w+(b+g*w)*S);else{const S=g*Math.sqrt(x*x-1);m=k=>{const $=Math.exp(-x*g*k),B=Math.min(S*k,300);return s-$*((b+x*g*w)*Math.sinh(B)+S*w*Math.cosh(B))/S}}}return _(),{next:b=>{const w=m(b);if(F)a.done=b>=f;else{const x=h(b)*1e3,g=Math.abs(x)<=o,S=Math.abs(s-w)<=l;a.done=g&&S}return a.value=a.done?s:w,a},flipTarget:()=>{d=-d,[t,s]=[s,t],_()}}}zi.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ru=e=>0,CF=(e,t,s)=>{const o=t-e;return o===0?1:(s-e)/o},Xi=(e,t,s)=>-s*e+s*t+e,kF=(e,t)=>s=>Math.max(Math.min(s,t),e),wo=e=>e%1?Number(e.toFixed(5)):e,Ho=/(-)?([\d]*\.?[\d])+/g,Qa=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,c7=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Yo(e){return typeof e=="string"}const Go={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bo=Object.assign(Object.assign({},Go),{transform:kF(0,1)}),Fl=Object.assign(Object.assign({},Go),{default:1}),Ki=e=>({test:t=>Yo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jt=Ki("deg"),xo=Ki("%"),ge=Ki("px"),au=Object.assign(Object.assign({},xo),{parse:e=>xo.parse(e)/100,transform:e=>xo.transform(e*100)}),Yi=(e,t)=>s=>!!(Yo(s)&&c7.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),AF=(e,t,s)=>o=>{if(!Yo(o))return o;const[l,r,a,i]=o.match(Ho);return{[e]:parseFloat(l),[t]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},ps={test:Yi("hsl","hue"),parse:AF("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+xo.transform(wo(t))+", "+xo.transform(wo(s))+", "+wo(bo.transform(o))+")"},p7=kF(0,255),Yr=Object.assign(Object.assign({},Go),{transform:e=>Math.round(p7(e))}),Pt={test:Yi("rgb","red"),parse:AF("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:o=1})=>"rgba("+Yr.transform(e)+", "+Yr.transform(t)+", "+Yr.transform(s)+", "+wo(bo.transform(o))+")"};function u7(e){let t="",s="",o="",l="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),l=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),l=e.substr(4,1),t+=t,s+=s,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const ei={test:Yi("#"),parse:u7,transform:Pt.transform},gn={test:e=>Pt.test(e)||ei.test(e)||ps.test(e),parse:e=>Pt.test(e)?Pt.parse(e):ps.test(e)?ps.parse(e):ei.parse(e),transform:e=>Yo(e)?e:e.hasOwnProperty("red")?Pt.transform(e):ps.transform(e)},SF="${c}",EF="${n}";function d7(e){var t,s,o,l;return isNaN(e)&&Yo(e)&&((s=(t=e.match(Ho))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((l=(o=e.match(Qa))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function $F(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const o=e.match(Qa);o&&(s=o.length,e=e.replace(Qa,SF),t.push(...o.map(gn.parse)));const l=e.match(Ho);return l&&(e=e.replace(Ho,EF),t.push(...l.map(Go.parse))),{values:t,numColors:s,tokenised:e}}function OF(e){return $F(e).values}function TF(e){const{values:t,numColors:s,tokenised:o}=$F(e),l=t.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?SF:EF,i<s?gn.transform(r[i]):wo(r[i]));return a}}const f7=e=>typeof e=="number"?0:e;function F7(e){const t=OF(e);return TF(e)(t.map(f7))}const Jo={test:d7,parse:OF,createTransformer:TF,getAnimatableNone:F7},m7=new Set(["brightness","contrast","saturate","opacity"]);function h7(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=s.match(Ho)||[];if(!o)return e;const l=s.replace(o,"");let r=m7.has(t)?1:0;return o!==s&&(r*=100),t+"("+r+l+")"}const y7=/([a-z-]*)\(.*?\)/g,ni=Object.assign(Object.assign({},Jo),{getAnimatableNone:e=>{const t=e.match(y7);return t?t.map(h7).join(" "):e}});function Gr(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function iu({hue:e,saturation:t,lightness:s,alpha:o}){e/=360,t/=100,s/=100;let l=0,r=0,a=0;if(!t)l=r=a=s;else{const i=s<.5?s*(1+t):s+t-s*t,c=2*s-i;l=Gr(c,i,e+1/3),r=Gr(c,i,e),a=Gr(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const g7=(e,t,s)=>{const o=e*e,l=t*t;return Math.sqrt(Math.max(0,s*(l-o)+o))},v7=[ei,Pt,ps],cu=e=>v7.find(t=>t.test(e)),pu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,IF=(e,t)=>{let s=cu(e),o=cu(t);No(!!s,pu(e)),No(!!o,pu(t));let l=s.parse(e),r=o.parse(t);s===ps&&(l=iu(l),s=Pt),o===ps&&(r=iu(r),o=Pt);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=g7(l[c],r[c],i));return a.alpha=Xi(l.alpha,r.alpha,i),s.transform(a)}},_7=e=>typeof e=="number",w7=(e,t)=>s=>t(e(s)),PF=(...e)=>e.reduce(w7);function RF(e,t){return _7(e)?s=>Xi(e,t,s):gn.test(e)?IF(e,t):MF(e,t)}const LF=(e,t)=>{const s=[...e],o=s.length,l=e.map((r,a)=>RF(r,t[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},b7=(e,t)=>{const s=Object.assign(Object.assign({},e),t),o={};for(const l in s)e[l]!==void 0&&t[l]!==void 0&&(o[l]=RF(e[l],t[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function uu(e){const t=Jo.parse(e),s=t.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const MF=(e,t)=>{const s=Jo.createTransformer(t),o=uu(e),l=uu(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?PF(LF(o.parsed,l.parsed),s):(Wi(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},x7=(e,t)=>s=>Xi(e,t,s);function C7(e){if(typeof e=="number")return x7;if(typeof e=="string")return gn.test(e)?IF:MF;if(Array.isArray(e))return LF;if(typeof e=="object")return b7}function k7(e,t,s){const o=[],l=s||C7(e[0]),r=e.length-1;for(let a=0;a<r;a++){let i=l(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=PF(c,i)}o.push(i)}return o}function A7([e,t],[s]){return o=>s(CF(e,t,o))}function S7(e,t){const s=e.length,o=s-1;return l=>{let r=0,a=!1;if(l<=e[0]?a=!0:l>=e[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>l||c===o);c++);r=c-1}const i=CF(e[r],e[r+1],l);return t[r](i)}}function DF(e,t,{clamp:s=!0,ease:o,mixer:l}={}){const r=e.length;No(r===t.length,"Both input and output ranges must be the same length"),No(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=k7(t,o,l),i=r===2?A7(e,a):S7(e,a);return s?c=>i(Ja(e[0],e[r-1],c)):i}const br=e=>t=>1-e(1-t),Gi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,E7=e=>t=>Math.pow(t,e),BF=e=>t=>t*t*((e+1)*t-e),$7=e=>{const t=BF(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},jF=1.525,O7=4/11,T7=8/11,I7=9/10,NF=e=>e,Ji=E7(2),P7=br(Ji),HF=Gi(Ji),qF=e=>1-Math.sin(Math.acos(e)),VF=br(qF),R7=Gi(VF),Zi=BF(jF),L7=br(Zi),M7=Gi(Zi),D7=$7(jF),B7=4356/361,j7=35442/1805,N7=16061/1805,Gl=e=>{if(e===1||e===0)return e;const t=e*e;return e<O7?7.5625*t:e<T7?9.075*t-9.9*e+3.4:e<I7?B7*t-j7*e+N7:10.8*e*e-20.52*e+10.72},H7=br(Gl),q7=e=>e<.5?.5*(1-Gl(1-e*2)):.5*Gl(e*2-1)+.5;function V7(e,t){return e.map(()=>t||HF).splice(0,e.length-1)}function U7(e){const t=e.length;return e.map((s,o)=>o!==0?o/(t-1):0)}function W7(e,t){return e.map(s=>s*t)}function Cl({from:e=0,to:t=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=W7(o&&o.length===a.length?o:U7(a),l);function c(){return DF(i,a,{ease:Array.isArray(s)?s:V7(a,s)})}let p=c();return{next:d=>(r.value=p(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),p=c()}}}function z7({velocity:e=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:t};let i=s*e;const c=t+i,p=r===void 0?c:r(c);return p!==c&&(i=p-t),{next:d=>{const f=-i*Math.exp(-d/o);return a.done=!(f>l||f<-l),a.value=a.done?p:p+f,a},flipTarget:()=>{}}}const du={keyframes:Cl,spring:zi,decay:z7};function X7(e){if(Array.isArray(e.to))return Cl;if(du[e.type])return du[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Cl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?zi:Cl}function UF(e,t,s=0){return e-t-s}function K7(e,t,s=0,o=!0){return o?UF(t+-e,t,s):t-(e-t)+s}function Y7(e,t,s,o){return o?e>=t+s:e<=-s}const G7=e=>{const t=({delta:s})=>e(s);return{start:()=>Ga.update(t,!0),stop:()=>J$.update(t)}};function WF(e){var t,s,{from:o,autoplay:l=!0,driver:r=G7,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:F,onRepeat:m,onUpdate:h}=e,_=xF(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=_,w,x=0,g=_.duration,S,k=!1,$=!0,B;const T=X7(_);!((s=(t=T).needsInterpolation)===null||s===void 0)&&s.call(t,o,b)&&(B=DF([0,100],[o,b],{clamp:!1}),o=0,b=100);const U=T(Object.assign(Object.assign({},_),{from:o,to:b}));function oe(){x++,c==="reverse"?($=x%2===0,a=K7(a,g,p,$)):(a=UF(a,g,p),c==="mirror"&&U.flipTarget()),k=!1,m&&m()}function pe(){w.stop(),F&&F()}function Y(ye){if($||(ye=-ye),a+=ye,!k){const we=U.next(Math.max(0,a));S=we.value,B&&(S=B(S)),k=$?we.done:a<=0}h==null||h(S),k&&(x===0&&(g??(g=a)),x<i?Y7(a,g,p,$)&&oe():pe())}function me(){d==null||d(),w=r(Y),w.start()}return l&&me(),{stop:()=>{f==null||f(),w.stop()}}}function zF(e,t){return t?e*(1e3/t):0}function J7({from:e=0,velocity:t=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:F,onStop:m}){let h;function _(g){return s!==void 0&&g<s||o!==void 0&&g>o}function b(g){return s===void 0?o:o===void 0||Math.abs(s-g)<Math.abs(o-g)?s:o}function w(g){h==null||h.stop(),h=WF(Object.assign(Object.assign({},g),{driver:d,onUpdate:S=>{var k;f==null||f(S),(k=g.onUpdate)===null||k===void 0||k.call(g,S)},onComplete:F,onStop:m}))}function x(g){w(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},g))}if(_(e))x({from:e,velocity:t,to:b(e)});else{let g=l*t+e;typeof p<"u"&&(g=p(g));const S=b(g),k=S===s?-1:1;let $,B;const T=U=>{$=B,B=U,t=zF(U-$,bF().delta),(k===1&&U>S||k===-1&&U<S)&&x({from:U,to:S,velocity:t})};w({type:"decay",from:e,velocity:t,timeConstant:r,power:l,restDelta:c,modifyTarget:p,onUpdate:_(g)?T:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const XF=(e,t)=>1-3*t+3*e,KF=(e,t)=>3*t-6*e,YF=e=>3*e,Jl=(e,t,s)=>((XF(t,s)*e+KF(t,s))*e+YF(t))*e,GF=(e,t,s)=>3*XF(t,s)*e*e+2*KF(t,s)*e+YF(t),Z7=1e-7,Q7=10;function e4(e,t,s,o,l){let r,a,i=0;do a=t+(s-t)/2,r=Jl(a,o,l)-e,r>0?s=a:t=a;while(Math.abs(r)>Z7&&++i<Q7);return a}const n4=8,t4=.001;function s4(e,t,s,o){for(let l=0;l<n4;++l){const r=GF(t,s,o);if(r===0)return t;const a=Jl(t,s,o)-e;t-=a/r}return t}const kl=11,ml=1/(kl-1);function o4(e,t,s,o){if(e===t&&s===o)return NF;const l=new Float32Array(kl);for(let a=0;a<kl;++a)l[a]=Jl(a*ml,e,s);function r(a){let i=0,c=1;const p=kl-1;for(;c!==p&&l[c]<=a;++c)i+=ml;--c;const d=(a-l[c])/(l[c+1]-l[c]),f=i+d*ml,F=GF(f,e,s);return F>=t4?s4(a,f,e,s):F===0?f:e4(a,i,i+ml,e,s)}return a=>a===0||a===1?a:Jl(r(a),t,o)}const Jr={};class l4{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(t,s,o)}clear(){this.subscriptions.clear()}}const fu=e=>!isNaN(parseFloat(e));class r4{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new l4,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=bF();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ga.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ga.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=fu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=fu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?zF(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function a4(e){return new r4(e)}const{isArray:i4}=Array;function c4(){const e=K({}),t=o=>{const l=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};o?i4(o)?o.forEach(l):l(o):Object.keys(e.value).forEach(l)},s=(o,l,r)=>{if(e.value[o])return e.value[o];const a=a4(l);return a.onChange(i=>r[o]=i),e.value[o]=a,a};return N$(t),{motionValues:e,get:s,stop:t}}const p4=e=>Array.isArray(e),Zt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Zr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),u4=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Qr=()=>({type:"keyframes",ease:"linear",duration:300}),d4=e=>({type:"keyframes",duration:800,values:e}),Fu={default:u4,x:Zt,y:Zt,z:Zt,rotate:Zt,rotateX:Zt,rotateY:Zt,rotateZ:Zt,scaleX:Zr,scaleY:Zr,scale:Zr,backgroundColor:Qr,color:Qr,opacity:Qr},JF=(e,t)=>{let s;return p4(t)?s=d4:s=Fu[e]||Fu.default,{to:t,...s(t)}},mu={...Go,transform:Math.round},ZF={color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,size:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,rotate:Jt,rotateX:Jt,rotateY:Jt,rotateZ:Jt,scale:Fl,scaleX:Fl,scaleY:Fl,scaleZ:Fl,skew:Jt,skewX:Jt,skewY:Jt,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:bo,originX:au,originY:au,originZ:ge,zIndex:mu,filter:ni,WebkitFilter:ni,fillOpacity:bo,strokeOpacity:bo,numOctaves:mu},Qi=e=>ZF[e],QF=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function f4(e,t){let s=Qi(e);return s!==ni&&(s=Jo),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const F4={linear:NF,easeIn:Ji,easeInOut:HF,easeOut:P7,circIn:qF,circInOut:R7,circOut:VF,backIn:Zi,backInOut:M7,backOut:L7,anticipate:D7,bounceIn:H7,bounceInOut:q7,bounceOut:Gl},hu=e=>{if(Array.isArray(e)){const[t,s,o,l]=e;return o4(t,s,o,l)}else if(typeof e=="string")return F4[e];return e},m4=e=>Array.isArray(e)&&typeof e[0]!="number",yu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Jo.test(t)&&!t.startsWith("url("));function h4(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function y4({ease:e,times:t,delay:s,...o}){const l={...o};return t&&(l.offset=t),e&&(l.ease=m4(e)?e.map(hu):hu(e)),s&&(l.elapsed=-s),l}function g4(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),h4(t),v4(e)||(e={...e,...JF(s,t.to)}),{...t,...y4(e)}}function v4({delay:e,repeat:t,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function _4(e,t){return e[t]||e.default||e}function w4(e,t,s,o,l){const r=_4(o,e);let a=r.from===null||r.from===void 0?t.get():r.from;const i=yu(e,s);a==="none"&&i&&typeof s=="string"&&(a=f4(e,s));const c=yu(e,a);function p(f){const F={from:a,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return r.type==="inertia"||r.type==="decay"?J7({...F,...r}):WF({...g4(r,F,e),onUpdate:m=>{F.onUpdate(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return t.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?d:p}function b4(){const{motionValues:e,stop:t,get:s}=c4();return{motionValues:e,stop:t,push:(l,r,a,i={},c)=>{const p=a[l],d=s(l,p,a);if(i&&i.immediate){d.set(r);return}const f=w4(l,d,r,i,c);d.start(f)}}}function x4(e,t={},{motionValues:s,push:o,stop:l}=b4()){const r=I(t),a=K(!1);he(s,f=>{a.value=Object.values(f).filter(F=>F.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([F,m])=>{if(F!=="transition")return new Promise(h=>o(F,m,e,f.transition||JF(F,f[F]),h))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const F=Xa(f)?f:i(f);Object.entries(F).forEach(([m,h])=>{m!=="transition"&&o(m,h,e,{immediate:!0})})},leave:async f=>{let F;if(r&&(r.leave&&(F=r.leave),!r.leave&&r.initial&&(F=r.initial)),!F){f();return}await c(F),f()},stop:l}}const ec=typeof window<"u",C4=()=>ec&&window.onpointerdown===null,k4=()=>ec&&window.ontouchstart===null,A4=()=>ec&&window.onmousedown===null;function S4({target:e,state:t,variants:s,apply:o}){const l=I(s),r=K(!1),a=K(!1),i=K(!1),c=P(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),p=P(()=>{const d={};Object.assign(d,t.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});l.hovered&&(Vn(e,"mouseenter",()=>r.value=!0),Vn(e,"mouseleave",()=>{r.value=!1,a.value=!1}),Vn(e,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(A4()&&(Vn(e,"mousedown",()=>a.value=!0),Vn(e,"mouseup",()=>a.value=!1)),C4()&&(Vn(e,"pointerdown",()=>a.value=!0),Vn(e,"pointerup",()=>a.value=!1)),k4()&&(Vn(e,"touchstart",()=>a.value=!0),Vn(e,"touchend",()=>a.value=!1))),l.focused&&(Vn(e,"focus",()=>i.value=!0),Vn(e,"blur",()=>i.value=!1)),he(p,o)}function E4({set:e,target:t,apply:s,variants:o,variant:l}){const r=I(o);he(()=>t,()=>{r&&(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function $4({state:e,apply:t}){he(e,s=>{s&&t(s)},{immediate:!0})}function O4({target:e,variants:t,variant:s}){const o=I(t);o&&(o.visible||o.visibleOnce)&&q$(e,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function T4(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&E4(e),t.syncVariants&&$4(e),t.visibilityHooks&&O4(e),t.eventListeners&&S4(e)}function em(e={}){const t=Ve({...e}),s=K({});return he(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const a=Qi(l),i=QF(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function nc(e,t){he(()=>Yl(e),s=>{s&&t(s)},{immediate:!0})}const I4={x:"translateX",y:"translateY",z:"translateZ"};function nm(e={},t=!0){const s=Ve({...e}),o=K("");return he(s,l=>{let r="",a=!1;if(t&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(ge.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const p=Qi(i),d=QF(c,p);r+=`${I4[i]||i}(${d}) `}t&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const P4=["","X","Y","Z"],R4=["perspective","translate","scale","rotate","skew"],tm=["transformPerspective","x","y","z"];R4.forEach(e=>{P4.forEach(t=>{const s=e+t;tm.push(s)})});const L4=new Set(tm);function tc(e){return L4.has(e)}const M4=new Set(["originX","originY","originZ"]);function sm(e){return M4.has(e)}function D4(e){const t={},s={};return Object.entries(e).forEach(([o,l])=>{tc(o)||sm(o)?t[o]=l:s[o]=l}),{transform:t,style:s}}function om(e){const{transform:t,style:s}=D4(e),{transform:o}=nm(t),{style:l}=em(s);return o.value&&(l.value.transform=o.value),l.value}function B4(e,t){let s,o;const{state:l,style:r}=em();return nc(e,a=>{o=a;for(const i of Object.keys(ZF))a.style[i]===null||a.style[i]===""||tc(i)||sm(i)||(l[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),t&&t(l)}),he(r,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function j4(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=c.length===1?c[0]:c;return{...o,[r]:p}},{})}function N4(e,t){Object.entries(j4(t)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>e[r]=0);return}o.forEach((r,a)=>e[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function H4(e,t){let s,o;const{state:l,transform:r}=nm();return nc(e,a=>{o=a,a.style.transform&&N4(l,a.style.transform),s&&(a.style.transform=s),t&&t(l)}),he(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function q4(e,t){const s=Ve({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:l}=B4(e,o),{transform:r}=H4(e,o);return he(s,a=>{Object.entries(a).forEach(([i,c])=>{const p=tc(i)?r:l;p[i]&&p[i]===c||(p[i]=c)})},{immediate:!0,deep:!0}),nc(e,()=>t&&o(t)),{motionProperties:s,style:l,transform:r}}function V4(e={}){const t=I(e),s=K();return{state:P(()=>{if(s.value)return t[s.value]}),variant:s}}function lm(e,t={},s){const{motionProperties:o}=q4(e),{variant:l,state:r}=V4(t),a=x4(o,t),i={target:e,variant:l,variants:t,state:r,motionProperties:o,...a};return T4(i,s),i}const U4=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],W4=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&Xa(s.variants)&&(t.value={...t.value,...s.variants}),U4.forEach(o=>{if(o==="delay"){if(s&&s[o]&&M$(s[o])){const l=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Xa(s[o])&&(t.value[o]=s[o])}))},ea=e=>({created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Jr[r]&&Jr[r].stop();const a=K(e||{});typeof o.value=="object"&&(a.value=o.value),W4(l,a);const i=lm(s,a);s.motionInstance=i,r&&(Jr[r]=i)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=I(l);const r=R$((e==null?void 0:e.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:om(r)}}}),z4={initial:{opacity:0},enter:{opacity:1}},X4={initial:{opacity:0},visible:{opacity:1}},K4={initial:{opacity:0},visibleOnce:{opacity:1}},Y4={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},G4={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},J4={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Z4={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Q4={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},eO={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},nO={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},tO={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},sO={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},oO={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},lO={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},rO={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},aO={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},iO={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},cO={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},pO={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},uO={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},dO={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},fO={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},FO={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},mO={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},hO={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},yO={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},gO={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},vO={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},_O={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},wO={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ti={__proto__:null,fade:z4,fadeVisible:X4,fadeVisibleOnce:K4,pop:Y4,popVisible:G4,popVisibleOnce:J4,rollBottom:aO,rollLeft:Z4,rollRight:nO,rollTop:oO,rollVisibleBottom:iO,rollVisibleLeft:Q4,rollVisibleOnceBottom:cO,rollVisibleOnceLeft:eO,rollVisibleOnceRight:sO,rollVisibleOnceTop:rO,rollVisibleRight:tO,rollVisibleTop:lO,slideBottom:vO,slideLeft:pO,slideRight:fO,slideTop:hO,slideVisibleBottom:_O,slideVisibleLeft:uO,slideVisibleOnceBottom:wO,slideVisibleOnceLeft:dO,slideVisibleOnceRight:mO,slideVisibleOnceTop:gO,slideVisibleRight:FO,slideVisibleTop:yO},bO=Oe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const t=oy(),s=Ve({});if(!e.is&&!t.default)return()=>Qe("div",{});const o=P(()=>{let c;return e.preset&&(c=ti[e.preset]),c}),l=P(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=P(()=>{const c={...l.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=P(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Mu(c)&&(c=Ml(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,F,m;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(F=p.variants)!=null&&F.visible&&p.apply("visible"),(m=p.variants)!=null&&m.visibleOnce&&p.apply("visibleOnce")},10)};ur(()=>Object.entries(s).forEach(([p,d])=>c(d)))}return{slots:t,component:a,motionConfig:r,instances:s}},render({slots:e,motionConfig:t,instances:s,component:o}){var i;const l=om(t.initial||{}),r=(c,p)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const f=lm(d,t);s[p]=f},c);if(o){const c=Qe(o,void 0,e);return r(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,p)=>r(c,p))}});function xO(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const CO={install(e,t){if(e.directive("motion",ea()),e.component("Motion",bO),!t||t&&!t.excludePresets)for(const s in ti){const o=ti[s];e.directive(`motion-${xO(s)}`,ea(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,e.directive(`motion-${s}`,ea(o))}}};var gu;const Co=typeof window<"u",kO=Object.prototype.toString,AO=e=>kO.call(e)==="[object Object]";Co&&((gu=window==null?void 0:window.navigator)!=null&&gu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function SO(e){return er()?(ii(e),!0):!1}function EO(e){var t;const s=I(e);return(t=s==null?void 0:s.$el)!=null?t:s}const $O=Co?window:void 0,vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_u="__vueuse_ssr_handlers__";vu[_u]=vu[_u]||{};function OO(e,t={}){const{immediate:s=!0,window:o=$O}=t,l=K(!1);let r=null;function a(){!l.value||!o||(e(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),SO(c),{isActive:l,pause:c,resume:i}}var wu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(wu||(wu={}));const xr="vue-starport-injection",rm="vue-starport-options",TO={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},am={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var IO=Object.defineProperty,Zl=Object.getOwnPropertySymbols,im=Object.prototype.hasOwnProperty,cm=Object.prototype.propertyIsEnumerable,bu=(e,t,s)=>t in e?IO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,PO=(e,t)=>{for(var s in t||(t={}))im.call(t,s)&&bu(e,s,t[s]);if(Zl)for(var s of Zl(t))cm.call(t,s)&&bu(e,s,t[s]);return e},xu=(e,t)=>{var s={};for(var o in e)im.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Zl)for(var o of Zl(e))t.indexOf(o)<0&&cm.call(e,o)&&(s[o]=e[o]);return s};const RO=Oe({name:"StarportProxy",props:PO({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},am),setup(e,t){const s=M(xr),o=P(()=>s.getInstance(e.port,e.component)),l=K(),r=o.value.generateId(),a=K(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Ct(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await nn(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Wo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await nn(),await nn(),!o.value.el&&s.dispose(o.value.port))}),he(()=>e,async()=>{o.value.props&&await nn();const i=e,{props:c}=i,p=xu(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:p}=i,d=xu(i,["initialProps","mountedProps"]),f=Le(d,(a.value?p:c)||{});return Qe("div",Le(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?Qe(t.slots.default):void 0)}}});var LO=Object.defineProperty,MO=Object.defineProperties,DO=Object.getOwnPropertyDescriptors,Cu=Object.getOwnPropertySymbols,BO=Object.prototype.hasOwnProperty,jO=Object.prototype.propertyIsEnumerable,ku=(e,t,s)=>t in e?LO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,NO=(e,t)=>{for(var s in t||(t={}))BO.call(t,s)&&ku(e,s,t[s]);if(Cu)for(var s of Cu(t))jO.call(t,s)&&ku(e,s,t[s]);return e},HO=(e,t)=>MO(e,DO(t));const qO=Oe({name:"Starport",inheritAttrs:!0,props:am,setup(e,t){const s=K(!1);return Ct(()=>{if(s.value=!0,!M(xr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!AO(r)||ct(r))&&(r={render(){return o}}),Qe(RO,HO(NO({},e),{key:e.port,component:lr(r),props:l.props}))}}});function VO(e){const t=Ve({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Co?document.documentElement||document.body:void 0;function o(){if(!Co)return;const i=EO(e);if(!i)return;const{height:c,width:p,left:d,top:f}=i.getBoundingClientRect(),F=window.getComputedStyle(i),m=F.margin,h=F.padding;Object.assign(t,{height:c,width:p,left:d,top:s.scrollTop+f,margin:m,padding:h})}const l=OO(o,{immediate:!1});function r(){Co&&(o(),l.resume())}function a(){l.pause()}return t}let UO=(e,t=21)=>(s=t)=>{let o="",l=s;for(;l--;)o+=e[Math.random()*e.length|0];return o};const Au=UO("abcdefghijklmnopqrstuvwxyz",5);function Su(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function WO(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var zO=Object.defineProperty,Eu=Object.getOwnPropertySymbols,XO=Object.prototype.hasOwnProperty,KO=Object.prototype.propertyIsEnumerable,$u=(e,t,s)=>t in e?zO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,na=(e,t)=>{for(var s in t||(t={}))XO.call(t,s)&&$u(e,s,t[s]);if(Eu)for(var s of Eu(t))KO.call(t,s)&&$u(e,s,t[s]);return e};function YO(e,t,s={}){const o=WO(t),l=Su(o)||Au(),r=K(),a=K(null),i=K(!1),c=K(!1),p=Sm(!0),d=K({}),f=P(()=>na(na(na({},TO),s),d.value)),F=K(0);let m;p.run(()=>{m=VO(r),he(r,async w=>{w&&(c.value=!0),await nn(),r.value||(c.value=!1)})});const h=Su(e);function _(){return`starport-${l}-${h}-${Au()}`}const b=_();return Ve({el:r,id:b,port:e,props:a,rect:m,scope:p,isLanded:i,isVisible:c,options:f,liftOffTime:F,component:t,componentName:o,componentId:l,generateId:_,setLocalOptions(w={}){d.value=JSON.parse(JSON.stringify(w))},elRef(){return r},liftOff(){i.value&&(i.value=!1,F.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function GO(e){const t=Ve(new Map);function s(l,r){let a=t.get(l);return a||(a=YO(l,r,e),t.set(l,a)),a.component=r,a}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:s}}var JO=Object.defineProperty,ZO=Object.defineProperties,QO=Object.getOwnPropertyDescriptors,Ou=Object.getOwnPropertySymbols,eT=Object.prototype.hasOwnProperty,nT=Object.prototype.propertyIsEnumerable,Tu=(e,t,s)=>t in e?JO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,tT=(e,t)=>{for(var s in t||(t={}))eT.call(t,s)&&Tu(e,s,t[s]);if(Ou)for(var s of Ou(t))nT.call(t,s)&&Tu(e,s,t[s]);return e},sT=(e,t)=>ZO(e,QO(t));const oT=Oe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=M(xr);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=P(()=>t.getInstance(e.port,e.component)),o=P(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=P(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?sT(tT({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),p)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Qe("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Qe(Iy,{to:a?`#${o.value}`:"body",disabled:!a},Qe(s.value.component,Le(r,s.value.props))))}}}),lT=Oe({name:"StarportCarrier",setup(e,{slots:t}){const s=GO(M(rm,{}));return bn().appContext.app.provide(xr,s),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(s.portMap.entries()).map(([r,{component:a}])=>Qe(oT,{key:r,port:r,component:a}))]}}});function rT(e={}){return{install(t){t.provide(rm,e),t.component("Starport",qO),t.component("StarportCarrier",lT)}}}function aT(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(CO),e.app.use(rT({keepAlive:!0}))}function kn(e,t,s){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??s}function iT(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var d,f,F,m,h,_;if(_o.value||(d=kn(s,ho))!=null&&d.value)return;const o=kn(s,os),l=kn(s,mo),r=kn(s,xa),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,p=i?Ev:Lr;if(o&&!((F=o==null?void 0:o.value)!=null&&F.includes(t))&&o.value.push(t),s.value==null&&(s.value=(m=o==null?void 0:o.value)==null?void 0:m.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((h=o==null?void 0:o.value)==null?void 0:h.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((_=r==null?void 0:r.value.get(s.value))!=null&&_.includes(t))){const b=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(b))}t==null||t.classList.toggle(es,!0),l&&he(l,()=>{const b=(l==null?void 0:l.value)??0,w=s.value!=null?b>=s.value:b>c;t.classList.contains(Mr)||t.classList.toggle(p,!w),a!==!1&&a!==void 0&&t.classList.toggle(p,w),t.classList.toggle(Gs,!1);const x=r==null?void 0:r.value.get(b);x==null||x.forEach((g,S)=>{g.classList.toggle(il,!1),S===x.length-1?g.classList.toggle(Gs,!0):g.classList.toggle(il,!0)}),t.classList.contains(Gs)||t.classList.toggle(il,w)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(es,!1);const o=kn(s,os);o!=null&&o.value&&Ca(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var i,c,p;if(_o.value||(i=kn(s,ho))!=null&&i.value)return;const o=kn(s,os),l=kn(s,mo),r=kn(s,xa),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(p=r==null?void 0:r.value.get(s.value))==null||p.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(es,!0),l&&he(l,()=>{const d=(l.value??0)>=(s.value??a??0);t.classList.contains(Mr)||t.classList.toggle(Lr,!d),t.classList.toggle(Gs,!1),t.classList.contains(Gs)||t.classList.toggle(il,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(es,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var a,i,c;if(_o.value||(a=kn(s,ho))!=null&&a.value)return;const o=kn(s,os),l=kn(s,mo),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(es,!0),l&&he(l,()=>{const p=(l==null?void 0:l.value)??0,d=s.value!=null?p>=s.value:p>r;t.classList.toggle(Lr,d),t.classList.toggle(Mr,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(es,!1);const o=kn(s,os);o!=null&&o.value&&Ca(o.value,t)}})}}}function cT(e,t){const s=uF(e),o=dF(t,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Se,themeConfigs:P(()=>Se.themeConfig)}}function pT(){return{install(e){const t=cT(Nn,Bn);e.provide(N,Ve(t))}}}const Us=Tg(I$);Us.use(wn);Us.use(kv());Us.use(iT());Us.use(pT());aT({app:Us,router:wn});Us.mount("#app");export{Vb as $,ab as A,K as B,hT as C,fn as D,Ue as E,$e as F,E2 as G,k$ as H,Bn as I,Kl as J,_$ as K,zr as L,Ct as M,Ve as N,FT as O,yT as P,he as Q,E as R,Uf as S,Ee as T,dn as U,H2 as V,uT as W,dT as X,Ro as Y,qr as Z,H as _,N as a,Mi as a0,Di as a1,Bb as a2,We as a3,qw as a4,fT as a5,cn as a6,so as a7,fl as a8,cs as a9,ot as aa,La as ab,m2 as ac,h2 as ad,y2 as ae,v2 as af,wi as ag,Xd as ah,gT as ai,hn as aj,x0 as ak,of as al,_2 as am,Wo as an,sf as b,Se as c,Oe as d,dh as e,G as f,n as g,I as h,M as i,Ke as j,h$ as k,u as l,L as m,tn as n,C as o,ve as p,Oi as q,Hs as r,Gn as s,_t as t,mT as u,P as v,Dr as w,j as x,Mf as y,db as z};
