import{S as ee,i as te,s as ae,u as w,j as H,E as R,B as le,v,w as A,k as q,d as h,F as V,C as se,x as b,I as T,a as P,G as k,m as B,D as ne,b as D,t as I,c as ie,p as G,g as oe,J as fe,K as ce,e as M,r as de,y as me,z as ge,A as pe}from"./index-5a36c319.js";import{I as he}from"./Image-33fb94f0.js";import{T as ye}from"./Tag-ca66ef43.js";import{T as _e}from"./Time-bd719f21.js";function N(n,e,l){const i=n.slice();return i[8]=e[l],i}function Q(n){let e,l,i=`about-${n[1]}`,o,t,a=[],m=new Map,p=`tag-${n[1]}`,y,_=n[5];const f=r=>r[8].slug;for(let r=0;r<_.length;r+=1){let s=N(n,_,r),g=f(s);m.set(g,a[r]=U(g,s))}return{c(){e=w("p"),l=le(n[2]),o=R(),t=w("footer");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=v(r,"P",{class:!0});var s=A(e);l=se(s,n[2]),s.forEach(h),o=V(r),t=v(r,"FOOTER",{class:!0});var g=A(t);for(let E=0;E<a.length;E+=1)a[E].l(g);g.forEach(h),this.h()},h(){b(e,"class","mx-4 break-words text-sm text-black text-opacity-80 dark:text-gray-50 dark:text-opacity-80"),T(e,"--tag",i),b(t,"class","mt-2 flex flex-wrap items-center p-2 leading-none md:p-4"),T(t,"--tag",p)},m(r,s){P(r,e,s),k(e,l),P(r,o,s),P(r,t,s);for(let g=0;g<a.length;g+=1)a[g].m(t,null);y=!0},p(r,s){(!y||s&4)&&ne(l,r[2]),s&2&&i!==(i=`about-${r[1]}`)&&T(e,"--tag",i),s&32&&(_=r[5],oe(),a=fe(a,s,f,1,r,_,m,t,ce,U,null,N),ie()),s&2&&p!==(p=`tag-${r[1]}`)&&T(t,"--tag",p)},i(r){if(!y){for(let s=0;s<_.length;s+=1)D(a[s]);y=!0}},o(r){for(let s=0;s<a.length;s+=1)I(a[s]);y=!1},d(r){r&&h(e),r&&h(o),r&&h(t);for(let s=0;s<a.length;s+=1)a[s].d()}}}function U(n,e){let l,i,o;return i=new ye({props:{name:e[8].name,slug:e[8].slug}}),{key:n,first:null,c(){l=M(),H(i.$$.fragment),this.h()},l(t){l=M(),q(i.$$.fragment,t),this.h()},h(){this.first=l},m(t,a){P(t,l,a),B(i,t,a),o=!0},p(t,a){e=t;const m={};a&32&&(m.name=e[8].name),a&32&&(m.slug=e[8].slug),i.$set(m)},i(t){o||(D(i.$$.fragment,t),o=!0)},o(t){I(i.$$.fragment,t),o=!1},d(t){t&&h(l),G(i,t)}}}function be(n){let e,l,i,o,t,a,m,p,y,_,f=`h-${n[1]}`,r,s,g,E=`time-${n[1]}`,F,C;i=new he({props:{slug:n[1],alt:n[3].title,src:n[3].url,width:400,height:300,lazy:n[7]}}),g=new _e({props:{date:n[4]}});let d=!n[6]&&Q(n);return{c(){e=w("article"),l=w("a"),H(i.$$.fragment),t=R(),a=w("header"),m=w("h1"),p=w("a"),y=le(n[0]),r=R(),s=w("p"),H(g.$$.fragment),F=R(),d&&d.c(),this.h()},l(u){e=v(u,"ARTICLE",{class:!0,"data-sveltekit-preload-data":!0});var c=A(e);l=v(c,"A",{href:!0});var z=A(l);q(i.$$.fragment,z),z.forEach(h),t=V(c),a=v(c,"HEADER",{class:!0});var S=A(a);m=v(S,"H1",{class:!0});var J=A(m);p=v(J,"A",{class:!0,href:!0});var K=A(p);y=se(K,n[0]),K.forEach(h),J.forEach(h),r=V(S),s=v(S,"P",{class:!0});var L=A(s);q(g.$$.fragment,L),L.forEach(h),S.forEach(h),F=V(c),d&&d.l(c),c.forEach(h),this.h()},h(){b(l,"href",o=`/blog/${n[1]}`),b(p,"class","no-underline hover:underline"),b(p,"href",_=`/blog/${n[1]}`),b(m,"class","text-2xl font-bold"),T(m,"--tag",f),b(s,"class","mt-2"),T(s,"--tag",E),b(a,"class","flex-row items-center justify-between border-t p-4 leading-tight dark:border-zinc-700"),b(e,"class","m-auto h-full w-10/12 overflow-hidden rounded-lg border dark:border-zinc-700 md:w-full"),b(e,"data-sveltekit-preload-data","off")},m(u,c){P(u,e,c),k(e,l),B(i,l,null),k(e,t),k(e,a),k(a,m),k(m,p),k(p,y),k(a,r),k(a,s),B(g,s,null),k(e,F),d&&d.m(e,null),C=!0},p(u,[c]){const z={};c&2&&(z.slug=u[1]),c&8&&(z.alt=u[3].title),c&8&&(z.src=u[3].url),c&128&&(z.lazy=u[7]),i.$set(z),(!C||c&2&&o!==(o=`/blog/${u[1]}`))&&b(l,"href",o),(!C||c&1)&&ne(y,u[0]),(!C||c&2&&_!==(_=`/blog/${u[1]}`))&&b(p,"href",_),c&2&&f!==(f=`h-${u[1]}`)&&T(m,"--tag",f);const S={};c&16&&(S.date=u[4]),g.$set(S),c&2&&E!==(E=`time-${u[1]}`)&&T(s,"--tag",E),u[6]?d&&(oe(),I(d,1,1,()=>{d=null}),ie()):d?(d.p(u,c),c&64&&D(d,1)):(d=Q(u),d.c(),D(d,1),d.m(e,null))},i(u){C||(D(i.$$.fragment,u),D(g.$$.fragment,u),D(d),C=!0)},o(u){I(i.$$.fragment,u),I(g.$$.fragment,u),I(d),C=!1},d(u){u&&h(e),G(i),G(g),d&&d.d()}}}function ke(n,e,l){let{title:i}=e,{slug:o}=e,{about:t}=e,{thumbnail:a}=e,{createdAt:m}=e,{tags:p}=e,{small:y=!1}=e,{lazy:_=!0}=e;return n.$$set=f=>{"title"in f&&l(0,i=f.title),"slug"in f&&l(1,o=f.slug),"about"in f&&l(2,t=f.about),"thumbnail"in f&&l(3,a=f.thumbnail),"createdAt"in f&&l(4,m=f.createdAt),"tags"in f&&l(5,p=f.tags),"small"in f&&l(6,y=f.small),"lazy"in f&&l(7,_=f.lazy)},[i,o,t,a,m,p,y,_]}class re extends ee{constructor(e){super(),te(this,e,ke,be,ae,{title:0,slug:1,about:2,thumbnail:3,createdAt:4,tags:5,small:6,lazy:7})}}re.__docgen={version:3,name:"PostCard.svelte",data:[{visibility:"public",description:null,keywords:[],name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"slug",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"about",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"thumbnail",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"createdAt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"tags",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"small",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"lazy",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function we(n){let e,l;const i=n[1].default,o=de(i,n,n[0],null);return{c(){e=w("div"),o&&o.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=A(e);o&&o.l(a),a.forEach(h),this.h()},h(){b(e,"class","mb-4 mt-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4")},m(t,a){P(t,e,a),o&&o.m(e,null),l=!0},p(t,[a]){o&&o.p&&(!l||a&1)&&me(o,i,t,t[0],l?pe(i,t[0],a,null):ge(t[0]),null)},i(t){l||(D(o,t),l=!0)},o(t){I(o,t),l=!1},d(t){t&&h(e),o&&o.d(t)}}}function ve(n,e,l){let{$$slots:i={},$$scope:o}=e;return n.$$set=t=>{"$$scope"in t&&l(0,o=t.$$scope)},[o,i]}class ue extends ee{constructor(e){super(),te(this,e,ve,we,ae,{})}}ue.__docgen={version:3,name:"Decorator.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const Te={title:"PostCard",component:re,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"タイトル"},slug:{control:{type:"text"},description:"スラッグ"},about:{control:{type:"text"},description:"概要"},createdAt:{control:{type:"date"},description:"作成日"},tags:{control:{type:"array"},description:"タグ"},thumbnail:{control:{type:"object"},description:"サムネイル"},small:{control:{type:"boolean"},description:"フッターを表示するか",default:!1},lazy:{control:{type:"boolean"},description:"画像を遅延読み込みするか",default:!0}},decorators:[()=>ue]},j={args:{title:"title",slug:"slug",about:"about",createdAt:new Date,tags:[{name:"tag1",slug:"tag1"},{name:"tag2",slug:"tag2"}],thumbnail:{url:"https://picsum.photos/200/300",title:"title"}}},O={args:{title:"title",slug:"slug",about:"about",createdAt:new Date,tags:[{name:"tag1",slug:"tag1"},{name:"tag2",slug:"tag2"}],thumbnail:{url:"https://picsum.photos/200/300",title:"title"},small:!0}};var W,X,Y;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: "title",
    slug: "slug",
    about: "about",
    createdAt: new Date(),
    tags: [{
      name: "tag1",
      slug: "tag1"
    }, {
      name: "tag2",
      slug: "tag2"
    }],
    thumbnail: {
      url: "https://picsum.photos/200/300",
      title: "title"
    }
  }
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,x;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: "title",
    slug: "slug",
    about: "about",
    createdAt: new Date(),
    tags: [{
      name: "tag1",
      slug: "tag1"
    }, {
      name: "tag2",
      slug: "tag2"
    }],
    thumbnail: {
      url: "https://picsum.photos/200/300",
      title: "title"
    },
    small: true
  }
}`,...(x=($=O.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};const Ce=["Default","Small"];export{j as Default,O as Small,Ce as __namedExportsOrder,Te as default};
//# sourceMappingURL=PostCard.stories-e6eeb3db.js.map
