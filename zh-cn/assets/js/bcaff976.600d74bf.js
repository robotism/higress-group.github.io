"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[1960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),g=s,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const o={title:"\u7248\u672c\u5347\u7ea7",keywords:["Upgrade"],description:"Higress \u7248\u672c\u5347\u7ea7."},i="\u7248\u672c\u5347\u7ea7",a={unversionedId:"ops/upgrade",id:"ops/upgrade",title:"\u7248\u672c\u5347\u7ea7",description:"Higress \u7248\u672c\u5347\u7ea7.",source:"@site/docs/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/docs/ops/upgrade",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7248\u672c\u5347\u7ea7",keywords:["Upgrade"],description:"Higress \u7248\u672c\u5347\u7ea7."},sidebar:"docs",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/docs/ops/deploy-by-helm"},next:{title:"\u65e5\u5fd7\u8bf4\u660e",permalink:"/docs/ops/log"}},l={},p=[{value:"\u57fa\u4e8e helm \u5b9e\u73b0\u7248\u672c\u5347\u7ea7",id:"\u57fa\u4e8e-helm-\u5b9e\u73b0\u7248\u672c\u5347\u7ea7",level:2},{value:"\u4ece 0.5.x \u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c",id:"\u4ece-05x-\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c",level:3},{value:"\u9009\u9879\u4e00\uff1a\u79fb\u9664 Istio \u4f9d\u8d56",id:"\u9009\u9879\u4e00\u79fb\u9664-istio-\u4f9d\u8d56",level:4},{value:"\u9009\u9879\u4e8c\uff1a\u4fdd\u7559 Istio",id:"\u9009\u9879\u4e8c\u4fdd\u7559-istio",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u7248\u672c\u5347\u7ea7"},"\u7248\u672c\u5347\u7ea7"),(0,s.kt)("h2",{id:"\u57fa\u4e8e-helm-\u5b9e\u73b0\u7248\u672c\u5347\u7ea7"},"\u57fa\u4e8e helm \u5b9e\u73b0\u7248\u672c\u5347\u7ea7"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system higress.io/higress \n")),(0,s.kt)("h3",{id:"\u4ece-05x-\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c"},"\u4ece 0.5.x \u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c"),(0,s.kt)("h4",{id:"\u9009\u9879\u4e00\u79fb\u9664-istio-\u4f9d\u8d56"},"\u9009\u9879\u4e00\uff1a\u79fb\u9664 Istio \u4f9d\u8d56"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableMesh=false higress.io/higress \nkubectl wait -n higress-system deployment/higress-controller deployment/higress-gateway --for=condition=Available\nhelm delete istio -n istio-system\nkubectl delete ns istio-system\nkubectl get crd -oname | grep --color=never 'istio.io' | xargs kubectl delete\n")),(0,s.kt)("h4",{id:"\u9009\u9879\u4e8c\u4fdd\u7559-istio"},"\u9009\u9879\u4e8c\uff1a\u4fdd\u7559 Istio"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableMesh=true higress.io/higress\n")))}d.isMDXComponent=!0}}]);