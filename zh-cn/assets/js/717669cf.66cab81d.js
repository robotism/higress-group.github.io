"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[6190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,d=m["".concat(p,".").concat(c)]||m[c]||g[c]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={title:"Wasm \u63d2\u4ef6\u4f7f\u7528\u7b80\u4ecb",keywords:["higress","wasm"],description:"Higress Wasm \u63d2\u4ef6\u7b80\u4ecb"},i=void 0,s={unversionedId:"plugins/intro",id:"plugins/intro",title:"Wasm \u63d2\u4ef6\u4f7f\u7528\u7b80\u4ecb",description:"Higress Wasm \u63d2\u4ef6\u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/intro.md",sourceDirName:"plugins",slug:"/plugins/intro",permalink:"/zh-cn/docs/plugins/intro",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/intro.md",tags:[],version:"current",frontMatter:{title:"Wasm \u63d2\u4ef6\u4f7f\u7528\u7b80\u4ecb",keywords:["higress","wasm"],description:"Higress Wasm \u63d2\u4ef6\u7b80\u4ecb"},sidebar:"docs",previous:{title:"HTTP\u8f6cDubbo \u914d\u7f6e\u8bf4\u660e",permalink:"/zh-cn/docs/user/dubbo-envoyfilter"},next:{title:"\u81ea\u5b9a\u4e49\u63d2\u4ef6",permalink:"/zh-cn/docs/plugins/custom"}},p={},o=[{value:"\u901a\u8fc7 Higress \u63a7\u5236\u53f0\u8fdb\u884c\u914d\u7f6e",id:"\u901a\u8fc7-higress-\u63a7\u5236\u53f0\u8fdb\u884c\u914d\u7f6e",level:2},{value:"\u901a\u8fc7 Higress WasmPlugin CRD \u8fdb\u884c\u914d\u7f6e",id:"\u901a\u8fc7-higress-wasmplugin-crd-\u8fdb\u884c\u914d\u7f6e",level:2},{value:"\u5b98\u65b9\u63d2\u4ef6\u955c\u50cf\u5730\u5740",id:"\u5b98\u65b9\u63d2\u4ef6\u955c\u50cf\u5730\u5740",level:3},{value:"Wasm \u63d2\u4ef6\u539f\u7406\u4ecb\u7ecd",id:"wasm-\u63d2\u4ef6\u539f\u7406\u4ecb\u7ecd",level:2},{value:"\u4ec0\u4e48\u662f Wasm",id:"\u4ec0\u4e48\u662f-wasm",level:3},{value:"\u63d2\u4ef6\u751f\u6548\u6d41\u7a0b",id:"\u63d2\u4ef6\u751f\u6548\u6d41\u7a0b",level:3},{value:"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f\u7f16\u6392",id:"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f\u7f16\u6392",level:3},{value:"Wasm \u63d2\u4ef6\u5982\u4f55\u505a\u5230\u53d8\u66f4\u65f6\u6d41\u91cf\u65e0\u635f",id:"wasm-\u63d2\u4ef6\u5982\u4f55\u505a\u5230\u53d8\u66f4\u65f6\u6d41\u91cf\u65e0\u635f",level:3}],u={toc:o},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u901a\u8fc7-higress-\u63a7\u5236\u53f0\u8fdb\u884c\u914d\u7f6e"},"\u901a\u8fc7 Higress \u63a7\u5236\u53f0\u8fdb\u884c\u914d\u7f6e"),(0,r.kt)("p",null,"Higress \u63a7\u5236\u53f0\u63d0\u4f9b\u4e86 3 \u4e2a\u5165\u53e3\u8fdb\u884c\u63d2\u4ef6\u914d\u7f6e:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5168\u5c40\u914d\u7f6e\uff1a\u63d2\u4ef6\u5e02\u573a->\u9009\u62e9\u63d2\u4ef6\u8fdb\u884c\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u57df\u540d\u7ea7\u914d\u7f6e\uff1a\u57df\u540d\u7ba1\u7406->\u9009\u62e9\u57df\u540d->\u70b9\u51fb\u7b56\u7565->\u9009\u62e9\u63d2\u4ef6\u8fdb\u884c\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u8def\u7531\u7ea7\u914d\u7f6e: \u8def\u7531\u914d\u7f6e->\u9009\u62e9\u8def\u7531->\u70b9\u51fb\u7b56\u7565->\u9009\u62e9\u63d2\u4ef6\u8fdb\u884c\u914d\u7f6e")),(0,r.kt)("p",null,"\u8fd9\u4e09\u4e2a\u914d\u7f6e\u7684\u751f\u6548\u4f18\u5148\u7ea7\u662f: \u8def\u7531\u7ea7 > \u57df\u540d\u7ea7 > \u5168\u5c40"),(0,r.kt)("p",null,"\u5373\u5bf9\u4e8e\u6ca1\u6709\u5339\u914d\u5230\u5177\u4f53\u8def\u7531\u6216\u57df\u540d\u7684\u8bf7\u6c42\u624d\u4f1a\u751f\u6548\u5168\u5c40\u914d\u7f6e"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u822c\u7684\u63d2\u4ef6\uff0c\u5305\u62ec\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5728\u5185\uff0c\u8def\u7531/\u57df\u540d\u7ea7\u7684\u914d\u7f6e\u5b57\u6bb5\u548c\u5168\u5c40\u914d\u7f6e\u5b57\u6bb5\u662f\u5b8c\u5168\u4e00\u6837\u7684\uff1b"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8ba4\u8bc1\u7c7b\u63d2\u4ef6(Key \u8ba4\u8bc1\uff0cHMAC \u8ba4\u8bc1\uff0cBasic \u8ba4\u8bc1\uff0cJWT \u8ba4\u8bc1\u7b49)\u5219\u4e0d\u540c\uff0c\u5168\u5c40\u914d\u7f6e\u4ec5\u505a Consumer \u51ed\u8bc1\u914d\u7f6e\uff0c\u4ee5\u53ca\u662f\u5426\u5f00\u542f\u5168\u5c40\u8ba4\u8bc1\uff0c\u800c\u5728\u8def\u7531/\u57df\u540d\u7ea7\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),"\u5b57\u6bb5\u914d\u7f6e\u5141\u8bb8\u8bbf\u95ee\u7684 Consumer \u5217\u8868\uff0c\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b Key \u8ba4\u8bc1\u7684",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/plugins/key-auth"},"\u914d\u7f6e\u8bf4\u660e")),(0,r.kt)("h2",{id:"\u901a\u8fc7-higress-wasmplugin-crd-\u8fdb\u884c\u914d\u7f6e"},"\u901a\u8fc7 Higress WasmPlugin CRD \u8fdb\u884c\u914d\u7f6e"),(0,r.kt)("p",null,"Higress WasmPlugin CRD \u5728 Istio ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin"},"WasmPlugin")," CRD \u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u6269\u5c55\uff0c\u65b0\u589e\u4ee5\u4e0b\u914d\u7f6e\u5b57\u6bb5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5168\u5c40\u751f\u6548\u4e8e\u6ca1\u6709\u5339\u914d\u5177\u4f53\u57df\u540d\u548c\u8def\u7531\u914d\u7f6e\u7684\u8bf7\u6c42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"matchRules")),(0,r.kt)("td",{parentName:"tr",align:null},"array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u57df\u540d\u6216\u8def\u7531\u751f\u6548\u7684\u914d\u7f6e")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"matchRules"),"\u4e2d\u6bcf\u4e00\u9879\u7684\u914d\u7f6e\u5b57\u6bb5\u8bf4\u660e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"domain"),"\u4e2d\u5fc5\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},'["default/foo","default/bar"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d ingress \u8d44\u6e90\u5bf9\u8c61\uff0c\u5339\u914d\u683c\u5f0f\u4e3a: ",(0,r.kt)("inlineCode",{parentName:"td"},"\u547d\u540d\u7a7a\u95f4/ingress\u540d\u79f0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"domain"),"\u4e2d\u5fc5\u586b\u4e00\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},'["example.com","*.test.com"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u57df\u540d\uff0c\u652f\u6301\u6cdb\u57df\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u540e\u751f\u6548\u7684\u63d2\u4ef6\u914d\u7f6e")))),(0,r.kt)("p",null,"\u4ee5",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/plugins/request-block"},"\u8bf7\u6c42\u5c4f\u853d"),"\u63d2\u4ef6\u4e3e\u4f8b\u8bf4\u660e\uff0c\u5982\u679c\u5e0c\u671b\u5168\u5c40\u751f\u6548\u63d2\u4ef6\u7684\u5982\u4e0b\u914d\u7f6e\uff08\u8bf7\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/plugins/request-block"},"\u8bf7\u6c42\u5c4f\u853d"),"\u6587\u6863\u4e86\u89e3\u914d\u7f6e\u5b57\u6bb5\u8bf4\u660e\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"block_urls:\n- swagger.html\n- foo=bar\ncase_sensitive: false\n")),(0,r.kt)("p",null,"\u5219\u5bf9\u5e94\u7684 WasmPlugin \u9700\u8981\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions.higress.io/v1alpha1\nkind: WasmPlugin\nmetadata:\n  name: request-block\n  namespace: higress-system\nspec:\n  defaultConfig:\n    block_urls:\n    - swagger.html\n    - foo=bar\n    case_sensitive: false\n  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u540e\u4e0b\u5217\u8bf7\u6c42\u5c06\u7acb\u5373\u88ab\u7981\u6b62\u8bbf\u95ee:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://example.com?foo=Bar\ncurl http://exmaple.com/foo/Swagger.html\n")),(0,r.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u5bf9 default \u547d\u540d\u7a7a\u95f4\u4e0b\u540d\u79f0\u4e3a foo \u7684 Ingress (\u5339\u914dpath\u524d\u7f00\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/foo"),"\u7684\u8bf7\u6c42)\u751f\u6548\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"block_headers:\n- example-key\n- example-value\n")),(0,r.kt)("p",null,"\u5219\u5bf9\u5e94\u7684 WasmPlugin \u9700\u8981\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions.higress.io/v1alpha1\nkind: WasmPlugin\nmetadata:\n  name: request-block\n  namespace: higress-system\nspec:\n  defaultConfig:\n    block_urls:\n    - swagger.html\n    - foo=bar\n    case_sensitive: false\n  matchRules:\n   # \u8def\u7531\u7ea7\u751f\u6548\u914d\u7f6e\n  - ingress:\n    - default/foo\n     # default \u547d\u540d\u7a7a\u95f4\u4e0b\u540d\u4e3a foo \u7684 ingress \u4f1a\u6267\u884c\u4e0b\u9762\u8fd9\u4e2a\u914d\u7f6e\n    config:\n      block_headers:\n      - example-key\n      - example-value\n  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u540e\uff0c\u4e0b\u9762\u8bf7\u6c42\u4e0d\u4f1a\u5339\u914d\u5230\u5177\u4f53\u7684 ingress\uff0c\u56e0\u6b64\u4ecd\u7136\u547d\u4e2d\u5168\u5c40\u9ed8\u8ba4\u914d\u7f6e\uff0c\u88ab\u62d2\u7edd\u8bbf\u95ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://example.com?foo=Bar\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u8bf7\u6c42\u7531\u4e8e\u5339\u914d\u5230 foo \u8fd9\u4e2a Ingress\uff0c\u56e0\u6b64\u8d70\u8def\u7531\u7ea7\u7684\u914d\u7f6e\uff0c\u4e0d\u53d7\u9ed8\u8ba4\u914d\u7f6e\u5f71\u54cd\uff0c\u4e0d\u4f1a\u88ab\u62d2\u7edd\u8bbf\u95ee:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://exmaple.com/foo/Swagger.html\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u8def\u7531\u7ea7\u914d\u7f6e\u5c4f\u853d\u4e86\u8bf7\u6c42 Header \u4e2d\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"example-key")," \u5b57\u7b26\u7684\u8bf7\u6c42\uff0c\u6240\u4ee5\u4e0b\u9762\u8fd9\u4e2a\u8bf7\u6c42\u4f1a\u88ab\u62d2\u7edd\u8bbf\u95ee:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://exmaple.com/foo -H 'exmaple-key: 123'\n")),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"matchRules")," \u4e2d\u5b58\u5728\u591a\u4e2a\u89c4\u5219\u65f6\uff0c\u6309\u89c4\u5219\u6392\u5217\u987a\u5e8f\u4f18\u5148\u5339\u914d\uff0c\u5efa\u8bae\u5c06 ingress \u5339\u914d\u914d\u7f6e\u653e\u5728 domain \u5339\u914d\u4e4b\u524d\uff0c\u8fd9\u4e5f\u662f Higress \u63a7\u5236\u53f0\u7684\u505a\u6cd5"),(0,r.kt)("h3",{id:"\u5b98\u65b9\u63d2\u4ef6\u955c\u50cf\u5730\u5740"},"\u5b98\u65b9\u63d2\u4ef6\u955c\u50cf\u5730\u5740"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u955c\u50cf\u5730\u5740"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key \u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/key-auth:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Basic \u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/basic-auth:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HMAC \u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/hmac-auth:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JWT \u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jwt-auth:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u673a\u5668\u4eba\u62e6\u622a"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/bot-detect:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u5e94\u7b54"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u5c4f\u853d"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e Key \u9650\u6d41"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/key-rate-limit:1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WAF \u9632\u62a4"),(0,r.kt)("td",{parentName:"tr",align:null},"higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/waf:1.0.0")))),(0,r.kt)("h2",{id:"wasm-\u63d2\u4ef6\u539f\u7406\u4ecb\u7ecd"},"Wasm \u63d2\u4ef6\u539f\u7406\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u662f-wasm"},"\u4ec0\u4e48\u662f Wasm"),(0,r.kt)("p",null,"// TODO..."),(0,r.kt)("h3",{id:"\u63d2\u4ef6\u751f\u6548\u6d41\u7a0b"},"\u63d2\u4ef6\u751f\u6548\u6d41\u7a0b"),(0,r.kt)("p",null,"// TODO..."),(0,r.kt)("h3",{id:"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f\u7f16\u6392"},"\u63d2\u4ef6\u6267\u884c\u987a\u5e8f\u7f16\u6392"),(0,r.kt)("p",null,"// TODO..."),(0,r.kt)("h3",{id:"wasm-\u63d2\u4ef6\u5982\u4f55\u505a\u5230\u53d8\u66f4\u65f6\u6d41\u91cf\u65e0\u635f"},"Wasm \u63d2\u4ef6\u5982\u4f55\u505a\u5230\u53d8\u66f4\u65f6\u6d41\u91cf\u65e0\u635f"),(0,r.kt)("p",null,"// TODO..."))}g.isMDXComponent=!0}}]);