import{_ as l,d as u,u as k,e as d,f as e,o,c as a,a as c,w as T,g as r,t as _,h as x,N as g,F,r as I,i as L,j as v,k as y}from"./app.950eec2b.js";const A={key:0,class:"home-hero"},B={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},b={key:2,class:"description"},w=u({setup(h){const{site:s,frontmatter:t}=k(),i=d(()=>{const{heroImage:p,heroText:n,tagline:f,actionLink:$,actionText:H}=t.value;return p||n||f||$&&H}),m=d(()=>t.value.heroText||s.value.title);return(p,n)=>e(i)?(o(),a("header",A,[e(t).heroImage?(o(),a("figure",B,[c("img",{class:"image",src:e(T)(e(t).heroImage),alt:e(t).heroAlt},null,8,C)])):r("v-if",!0),e(m)?(o(),a("h1",N,_(e(m)),1)):r("v-if",!0),e(t).tagline?(o(),a("p",b,_(e(t).tagline),1)):r("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var V=l(w,[["__scopeId","data-v-0cb9fda2"]]);const j={key:0,class:"home-features"},D={class:"wrapper"},S={class:"container"},E={class:"features"},q={key:0,class:"title"},z={key:1,class:"details"},G=u({setup(h){const{frontmatter:s}=k(),t=d(()=>s.value.features&&s.value.features.length>0),i=d(()=>s.value.features?s.value.features:[]);return(m,p)=>e(t)?(o(),a("div",j,[c("div",D,[c("div",S,[c("div",E,[(o(!0),a(F,null,I(e(i),(n,f)=>(o(),a("section",{key:f,class:"feature"},[n.title?(o(),a("h2",q,_(n.title),1)):r("v-if",!0),n.details?(o(),a("p",z,_(n.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var J=l(G,[["__scopeId","data-v-e39c13e0"]]);const K={key:0,class:"footer"},M={class:"container"},O={class:"text"},P=u({setup(h){const{frontmatter:s}=k();return(t,i)=>e(s).footer?(o(),a("footer",K,[c("div",M,[c("p",O,_(e(s).footer),1)])])):r("v-if",!0)}});var Q=l(P,[["__scopeId","data-v-30918238"]]);const R={class:"home","aria-labelledby":"main-title"},U={class:"home-content"},W=u({setup(h){return(s,t)=>{const i=L("Content");return o(),a("main",R,[v(V),y(s.$slots,"hero",{},void 0,!0),v(J),c("div",U,[v(i)]),y(s.$slots,"features",{},void 0,!0),v(Q),y(s.$slots,"footer",{},void 0,!0)])}}});var Y=l(W,[["__scopeId","data-v-32eddf2f"]]);export{Y as default};
