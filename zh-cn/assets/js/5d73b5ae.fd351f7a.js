"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[5862],{3905:(e,s,t)=>{t.d(s,{Zo:()=>c,kt:()=>h});var r=t(7294);function n(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function i(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?i(Object(t),!0).forEach((function(s){n(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,r,n=function(e,s){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=r.createContext({}),p=function(e){var s=r.useContext(a),t=s;return e&&(t="function"==typeof e?e(s):l(l({},s),e)),t},c=function(e){var s=p(e.components);return r.createElement(a.Provider,{value:s},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},m=r.forwardRef((function(e,s){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=n,h=g["".concat(a,".").concat(m)]||g[m]||u[m]||i;return t?r.createElement(h,l(l({ref:s},c),{},{components:t})):r.createElement(h,l({ref:s},c))}));function h(e,s){var t=arguments,n=s&&s.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var a in s)hasOwnProperty.call(s,a)&&(o[a]=s[a]);o.originalType=e,o[g]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8109:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const i={title:"\u5b89\u88c5\u90e8\u7f72",keywords:["Deploy"],description:"Higress Helm\u90e8\u7f72.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},l="\u5b89\u88c5\u90e8\u7f72",o={unversionedId:"ops/deploy-by-helm",id:"ops/deploy-by-helm",title:"\u5b89\u88c5\u90e8\u7f72",description:"Higress Helm\u90e8\u7f72.",source:"@site/docs/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/docs/ops/deploy-by-helm",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",keywords:["Deploy"],description:"Higress Helm\u90e8\u7f72.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},sidebar:"docs",previous:{title:"Mcp Bridge \u914d\u7f6e\u8bf4\u660e",permalink:"/docs/user/mcp-bridge"},next:{title:"\u7248\u672c\u5347\u7ea7",permalink:"/docs/ops/upgrade"}},a={},p=[{value:"\u5b89\u88c5 Higress",id:"\u5b89\u88c5-higress",level:2},{value:"Helm \u5b89\u88c5\u547d\u4ee4",id:"helm-\u5b89\u88c5\u547d\u4ee4",level:3},{value:"\u5b89\u88c5\u53c2\u6570",id:"\u5b89\u88c5\u53c2\u6570",level:3},{value:"\u5b89\u88c5 Istio\uff0c\u5f00\u542f Service Mesh \u6a21\u5f0f \uff08\u53ef\u9009\uff09",id:"\u5b89\u88c5-istio\u5f00\u542f-service-mesh-\u6a21\u5f0f-\u53ef\u9009",level:2},{value:"\u9009\u98791. \u5b89\u88c5 Higress Istio\uff08\u63a8\u8350\uff09",id:"\u9009\u98791-\u5b89\u88c5-higress-istio\u63a8\u8350",level:3},{value:"<strong>\u6ce8\u610f</strong>",id:"\u6ce8\u610f",level:2},{value:"\u9009\u98792. \u5b89\u88c5\u6807\u51c6\u7248 Istio",id:"\u9009\u98792-\u5b89\u88c5\u6807\u51c6\u7248-istio",level:3},{value:"\u5173\u95ed Service Mesh \u6a21\u5f0f",id:"\u5173\u95ed-service-mesh-\u6a21\u5f0f",level:3}],c={toc:p},g="wrapper";function u(e){let{components:s,...t}=e;return(0,n.kt)(g,(0,r.Z)({},c,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5b89\u88c5\u90e8\u7f72"},"\u5b89\u88c5\u90e8\u7f72"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," \u662f\u4e00\u4e2a\u7528\u4e8e\u81ea\u52a8\u5316\u7ba1\u7406\u548c\u53d1\u5e03 Kubernetes \u8f6f\u4ef6\u7684\u5305\u7ba1\u7406\u7cfb\u7edf\u3002\u901a\u8fc7 Helm \u53ef\u4ee5\u5728\u60a8\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5feb\u901f\u90e8\u7f72\u5b89\u88c5 Higress \u7f51\u5173\u3002"),(0,n.kt)("h2",{id:"\u5b89\u88c5-higress"},"\u5b89\u88c5 Higress"),(0,n.kt)("p",null,"Higress \u7f51\u5173\u7531\u63a7\u5236\u9762\u7ec4\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"higress-controller")," \u548c\u6570\u636e\u9762\u7ec4\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"higress-gateway")," \u7ec4\u6210\u3002Istio \u8d1f\u8d23\u7ba1\u7406",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e73\u9762\u7684 API \u914d\u7f6e"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"higress-controller")," \u8d1f\u8d23\u7ba1\u7406",(0,n.kt)("strong",{parentName:"p"},"\u63a7\u5236\u5e73\u9762\u7684 API \u914d\u7f6e"),"\u3002"),(0,n.kt)("h3",{id:"helm-\u5b89\u88c5\u547d\u4ee4"},"Helm \u5b89\u88c5\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install higress higress.io/higress -n higress-system --create-namespace\n")),(0,n.kt)("h3",{id:"\u5b89\u88c5\u53c2\u6570"},"\u5b89\u88c5\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"enableStatus")),(0,n.kt)("p",null,"\u4e3a\u907f\u514d\u4ece Nginx Ingress \u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u8986\u76d6 Ingress \u5bf9\u8c61\u7684 status \u5b57\u6bb5\uff0cHigress \u9ed8\u8ba4\u4e0d\u4f1a\u5c06\u5165\u53e3 IP \u5199\u5165 Ingress \u7684 status\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set enableStatus=true")," \u542f\u7528\u6b64\u529f\u80fd\u3002"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"ingressClass")),(0,n.kt)("p",null,"\u5728\u96c6\u7fa4\u5185\u90e8\u7f72\u4e86\u591a\u4e2a\u7f51\u5173\u65f6\uff0c\u53ef\u4ee5\u57fa\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class"},"IngressClass")," \u533a\u5206\u6bcf\u4e2a\u7f51\u5173\u7684\u804c\u8d23\u8303\u56f4\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set ingressClass=<name>")," \u6307\u5b9a Higress \u76d1\u542c\u54ea\u4e9b Ingress\u3002"),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"watchNamespace")),(0,n.kt)("p",null,"\u5f53\u57fa\u4e8e K8s \u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u4e1a\u52a1\u7cfb\u7edf\u9694\u79bb\u65f6\uff0c\u82e5\u9700\u8981\u5bf9\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u90e8\u7f72\u4e00\u5957\u72ec\u7acb\u7684\u7f51\u5173\uff0c\u53ef\u4ee5\u901a\u8fc7 watchNamespace \u9650\u5236 Higress \u76d1\u542c\u6b64\u547d\u540d\u7a7a\u95f4\u5185\u7684 Ingress\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set watchNamespace=<namespace>")," \u6307\u5b9a\u3002"),(0,n.kt)("h2",{id:"\u5b89\u88c5-istio\u5f00\u542f-service-mesh-\u6a21\u5f0f-\u53ef\u9009"},"\u5b89\u88c5 Istio\uff0c\u5f00\u542f Service Mesh \u6a21\u5f0f \uff08\u53ef\u9009\uff09"),(0,n.kt)("p",null,"Higress \u7f51\u5173\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," \u7edf\u4e00\u7ba1\u7406\u6570\u636e\u5e73\u9762\u7684 API \u914d\u7f6e\u3002\u53ef\u4ee5\u9009\u62e9\u90e8\u7f72 Higress \u53d1\u884c\u7684 Istio \u7248\u672c\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9 Istio \u5b98\u65b9\u63d0\u4f9b\u7684\u6807\u51c6\u7248\u672c\u3002\n\u4e24\u79cd\u6a21\u5f0f\u4e0b\u7684\u80fd\u529b\u5bf9\u6bd4\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"/docs/user/annotation"},"Higress Anntotaion \u652f\u6301\u8bf4\u660e"),"\u3002"),(0,n.kt)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u9700\u8981\u66f4\u65b0 Higress \u7684\u90e8\u7f72\u53c2\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableMesh=true higress.io/higress\n")),(0,n.kt)("h3",{id:"\u9009\u98791-\u5b89\u88c5-higress-istio\u63a8\u8350"},"\u9009\u98791. \u5b89\u88c5 Higress Istio\uff08\u63a8\u8350\uff09"),(0,n.kt)("p",null,"\u5b89\u88c5\u540e\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"istiod")," \u9700\u8981\u7b49\u5f85 Higress \u5b8c\u6210\u90e8\u7f72\u5b8c\u6210\uff0c\u624d\u4f1a\u5904\u4e8e\u5c31\u7eea\u72b6\u6001\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install istio -n istio-system higress.io/istio --create-namespace\n")),(0,n.kt)("h2",{id:"\u6ce8\u610f"},(0,n.kt)("strong",{parentName:"h2"},"\u6ce8\u610f")),(0,n.kt)("p",null,"\u82e5 Higress \u7f51\u5173\u6ca1\u6709\u5b89\u88c5\u5728\u9ed8\u8ba4\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"higress-system")," \u7684\u547d\u540d\u7a7a\u95f4\uff0c\u9700\u8981\u5728\u5b89\u88c5 Higress Istio \u65f6\u6307\u5b9a\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set global.higressNamespace=")," \u6307\u5b9a\u547d\u540d\u7a7a\u95f4\uff0c\u5982:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install istio -n istio-system --set global.higressNamespace=foo higress.io/istio --create-namespace\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u9009\u98792-\u5b89\u88c5\u6807\u51c6\u7248-istio"},"\u9009\u98792. \u5b89\u88c5\u6807\u51c6\u7248 Istio"),(0,n.kt)("p",null,"\u8bf7\u53c2\u8003 Istio \u5b98\u7f51\u7684",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/latest/zh/docs/setup/install/"},"\u5b89\u88c5\u6587\u6863")),(0,n.kt)("p",null,"\u4e0e Higress Istio \u4e0d\u540c\uff0c\u6807\u51c6\u7248 Istio \u4e0d\u4f1a\u4ece\u81ea\u52a8\u4ece Higress Controller \u83b7\u53d6\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.mesh.v1alpha1/#ConfigSource"},"MeshConfig.ConfigSource")),(0,n.kt)("p",null,"\u4ee5\u901a\u8fc7 istioctl \u90e8\u7f72\u4e3a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'# my-config.yaml\napiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  meshConfig:\n    configSources:\n    # \u5f53\u6709\u591a\u4e2a\u914d\u7f6e\u6765\u6e90\u65f6\uff0c\u9700\u8981\u663e\u793a\u6307\u5b9a k8s \u6765\u6e90\n    - address: "k8s://"\n    # \u5047\u8bbe Higress \u5b89\u88c5\u5728 higress-system \u547d\u540d\u7a7a\u95f4\n    - address: "xds://higress-controller.higress-system:15051"\n    # \u82e5\u5728\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\u5b89\u88c5\u4e86\u591a\u4e2a Higress \uff0c\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0\n')),(0,n.kt)("p",null,"\u6267\u884c\u5b89\u88c5\u64cd\u4f5c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"istioctl install -f my-config.yaml\n")),(0,n.kt)("h3",{id:"\u5173\u95ed-service-mesh-\u6a21\u5f0f"},"\u5173\u95ed Service Mesh \u6a21\u5f0f"),(0,n.kt)("p",null,"\u5148\u66f4\u65b0 Higress \u7684\u90e8\u7f72\u53c2\u6570\uff0c\u5e76\u7b49\u5f85 Higress \u5c31\u7eea\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableMesh=false higress.io/higress \nkubectl wait -n higress-system deployment/higress-controller deployment/higress-gateway --for=condition=Available\n")),(0,n.kt)("p",null,"\u5220\u9664 istio \u4ee5\u53ca\u5bf9\u5e94\u7684 crd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete istio -n istio-system\nkubectl delete ns istio-system\nkubectl get crd -oname | grep --color=never 'istio.io' | xargs kubectl delete\n")))}u.isMDXComponent=!0}}]);