import{_ as m,f as a,g as u,o as n,c as i,a as e,w as o,u as t,h as r,e as _,i as y,j as v,r as f,d as b}from"../app.adbf398c.js";const $={class:"basic"},C=_(" default "),x=_(" tertiary "),z=_(" Primary "),O=_(" Info "),j=_(" Warning "),S=_(" Error "),k=a({name:"basic",setup(l){const{toggle:s}=u();return(c,d)=>(n(),i("div",$,[e(t(r),{onClick:t(s)},{default:o(()=>[C]),_:1},8,["onClick"]),e(t(r),{type:"tertiary"},{default:o(()=>[x]),_:1}),e(t(r),{type:"primary"},{default:o(()=>[z]),_:1}),e(t(r),{type:"info"},{default:o(()=>[O]),_:1}),e(t(r),{type:"warning"},{default:o(()=>[j]),_:1}),e(t(r),{type:"error"},{default:o(()=>[S]),_:1})]))}});var P=m(k,[["__scopeId","data-v-6e879d5e"]]),ne=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const M={class:"basic"},T=_("primary"),w=_("info"),E=_("success"),I=_("warning"),B=_("error"),V=a({name:"disabled",setup(l){return(s,c)=>(n(),i("div",M,[e(t(r),null,{default:o(()=>[T]),_:1}),e(t(r),null,{default:o(()=>[w]),_:1}),e(t(r),null,{default:o(()=>[E]),_:1}),e(t(r),null,{default:o(()=>[I]),_:1}),e(t(r),null,{default:o(()=>[B]),_:1})]))}});var D=m(V,[["__scopeId","data-v-6c41071d"]]),ie=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const N={class:"flex gap-3"},W=_(" default "),F=_(" tertiary "),q=_(" Primary "),A=_(" Info "),G=_(" Warning "),H=_(" Error "),J=a({name:"ghost",setup(l){const{toggle:s}=u();return(c,d)=>(n(),i("div",N,[e(t(r),{ghost:"",onClick:t(s)},{default:o(()=>[W]),_:1},8,["onClick"]),e(t(r),{type:"tertiary",ghost:""},{default:o(()=>[F]),_:1}),e(t(r),{type:"primary",ghost:""},{default:o(()=>[q]),_:1}),e(t(r),{type:"info",ghost:""},{default:o(()=>[A]),_:1}),e(t(r),{type:"warning",ghost:""},{default:o(()=>[G]),_:1}),e(t(r),{type:"error",ghost:""},{default:o(()=>[H]),_:1})]))}});var le=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));const K={class:"basic"},L=_(" default "),Q=_(" tertiary "),R=_(" Primary "),U=_(" Info "),X=_(" Warning "),Y=_(" Error "),Z=a({name:"size",setup(l){const{toggle:s}=u();return(c,d)=>(n(),i("div",K,[e(t(r),{size:"mini",onClick:t(s)},{default:o(()=>[L]),_:1},8,["onClick"]),e(t(r),{size:"tiny",type:"tertiary"},{default:o(()=>[Q]),_:1}),e(t(r),{size:"small",type:"primary"},{default:o(()=>[R]),_:1}),e(t(r),{size:"medium",type:"info"},{default:o(()=>[U]),_:1}),e(t(r),{size:"large",type:"warning"},{default:o(()=>[X]),_:1}),e(t(r),{size:"huge",type:"error"},{default:o(()=>[Y]),_:1})]))}});var ee=m(Z,[["__scopeId","data-v-defce5be"]]),ce=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));const te=a({name:"configProvider",setup(l){const{isDark:s,toggle:c}=u(),d=y({CommonCssVars:v(()=>s.value?{"--primary-color":"red"}:{"--primary-color":"pink"})});return(p,h)=>{const g=f("p-config-provider");return n(),i("div",null,[e(g,{class:"bg-base","theme-overrides":d},null,8,["theme-overrides"])])}}});var de=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));const oe=_(" \u4E3B\u9898\u8272\u8986\u76D6 "),_e=_(" \u6211\u5C31\u662F\u8981\u7528\u6700\u521D\u7684\u4E3B\u9898\u8272 "),re=b("br",null,null,-1),se=a({name:"themeOverride",setup(l){const s=y({CommonCssVars:{"--primary-color":"red","--primary-color-hover":"green","--primary-color-hover-pressed":"blue"}});return(c,d)=>{const p=f("p-button"),h=f("p-config-provider");return n(),i("div",null,[e(h,{class:"bg-base","theme-overrides":s},{default:o(()=>[e(p,{type:"primary"},{default:o(()=>[oe]),_:1}),e(p,{class:"ml-[10px]",type:"primary","button-theme-override":null},{default:o(()=>[_e]),_:1})]),_:1},8,["theme-overrides"]),re])}}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{ne as _,ie as a,le as b,ce as c,de as d,ue as e};
