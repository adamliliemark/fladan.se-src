import{s as k,n as y,e as P}from"../chunks/scheduler.28946a50.js";import{S as j,i as q,g as h,m as L,s as v,h as d,j as M,n as C,f as r,c as g,C as E,k as U,a as u,y as S,o as T}from"../chunks/index.d8e54467.js";import{d as w}from"../chunks/singletons.034f3ead.js";import{b as z}from"../chunks/paths.c184efd1.js";const A=()=>{const s=w;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},B={subscribe(s){return A().page.subscribe(s)}};function D(s){let a,n=s[0].status+"",i,c,o,m=s[0].error.message+"",b,f,l,H=`<strong>Sorry!</strong>
	Maybe try one of these links?`,_,p,$=`<li><a href="${z}/">Home</a></li>`;return{c(){a=h("h2"),i=L(n),c=v(),o=h("p"),b=L(m),f=v(),l=h("p"),l.innerHTML=H,_=v(),p=h("ul"),p.innerHTML=$,this.h()},l(e){a=d(e,"H2",{});var t=M(a);i=C(t,n),t.forEach(r),c=g(e),o=d(e,"P",{class:!0});var x=M(o);b=C(x,m),x.forEach(r),f=g(e),l=d(e,"P",{"data-svelte-h":!0}),E(l)!=="svelte-h36d6"&&(l.innerHTML=H),_=g(e),p=d(e,"UL",{"data-svelte-h":!0}),E(p)!=="svelte-1nxpi9t"&&(p.innerHTML=$),this.h()},h(){U(o,"class","subhead")},m(e,t){u(e,a,t),S(a,i),u(e,c,t),u(e,o,t),S(o,b),u(e,f,t),u(e,l,t),u(e,_,t),u(e,p,t)},p(e,[t]){t&1&&n!==(n=e[0].status+"")&&T(i,n),t&1&&m!==(m=e[0].error.message+"")&&T(b,m)},i:y,o:y,d(e){e&&(r(a),r(c),r(o),r(f),r(l),r(_),r(p))}}}function F(s,a,n){let i;return P(s,B,c=>n(0,i=c)),[i]}let N=class extends j{constructor(a){super(),q(this,a,F,D,k,{})}};export{N as component};
