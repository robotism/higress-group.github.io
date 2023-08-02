"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[8009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"HMAC authentication",keywords:["higress","hmac"],description:"HMAC authentication plug-in configuration reference"},l=void 0,o={unversionedId:"plugins/hmac-auth",id:"plugins/hmac-auth",title:"HMAC authentication",description:"HMAC authentication plug-in configuration reference",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/plugins/hmac-auth.md",sourceDirName:"plugins",slug:"/plugins/hmac-auth",permalink:"/en-us/docs/plugins/hmac-auth",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/plugins/hmac-auth.md",tags:[],version:"current",frontMatter:{title:"HMAC authentication",keywords:["higress","hmac"],description:"HMAC authentication plug-in configuration reference"},sidebar:"docs",previous:{title:"JWT authentication",permalink:"/en-us/docs/plugins/jwt-auth"},next:{title:"Key Authentication",permalink:"/en-us/docs/plugins/key-auth"}},s={},u=[{value:"Function Description",id:"function-description",level:2},{value:"Configuration Fields",id:"configuration-fields",level:2},{value:"Configuration Example",id:"configuration-example",level:2},{value:"Enabling for specific routes or domains",id:"enabling-for-specific-routes-or-domains",level:3},{value:"Enable at the Gateway Instance Level",id:"enable-at-the-gateway-instance-level",level:3},{value:"Description of Signing Mechanism",id:"description-of-signing-mechanism",level:2},{value:"Configuration Preparation",id:"configuration-preparation",level:3},{value:"Client Signature Generation Method",id:"client-signature-generation-method",level:3},{value:"Overview of the Process",id:"overview-of-the-process",level:4},{value:"Process for Extracting Signing String",id:"process-for-extracting-signing-string",level:4},{value:"Example of Extracting Signing String",id:"example-of-extracting-signing-string",level:4},{value:"Signature Calculation Process",id:"signature-calculation-process",level:4},{value:"The Process of Adding a Signature",id:"the-process-of-adding-a-signature",level:4},{value:"Server-side Signature Verification Method",id:"server-side-signature-verification-method",level:3},{value:"Overview of the Process",id:"overview-of-the-process-1",level:4},{value:"Troubleshooting Signature Errors",id:"troubleshooting-signature-errors",level:3},{value:"Related Error Codes",id:"related-error-codes",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"function-description"},"Function Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hmac-auth")," plugin implements the generation of tamper-proof signatures for HTTP requests based on HMAC algorithm, and uses the signature for identity authentication and authorization."),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consumers")),(0,r.kt)("td",{parentName:"tr",align:null},"array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the caller of the service to authenticate the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_offset")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the maximum allowed time deviation of the client, in seconds. It is used to parse the client's UTC time from ",(0,r.kt)("inlineCode",{parentName:"td"},"the Date")," header of the request, and can be used to prevent replay attacks. If not configured, no validation is performed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_rules_")),(0,r.kt)("td",{parentName:"tr",align:null},"array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the access control list for specific routes or domains, used for authorization of requests.")))),(0,r.kt)("p",null,"The configuration fields for each item in ",(0,r.kt)("inlineCode",{parentName:"p"},"consumers")," are as follows :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the key extracted from the ",(0,r.kt)("inlineCode",{parentName:"td"},"x-ca-key")," header of the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secret")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the secret used to generate the signature.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the name of the consumer.")))),(0,r.kt)("p",null,"The configuration fields for each item in ",(0,r.kt)("inlineCode",{parentName:"p"},"_rules_")," are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_match_route_")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, either ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_route_")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_domain_")," must be provided"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the name of the route to match.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_match_domain_")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, either ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_route_")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"_match_domain_")," must be provided"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the name of the domain to match.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allow")),(0,r.kt)("td",{parentName:"tr",align:null},"array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the name of the consumer to allow for requests that match the specified route or domain.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"_rules_")," is not configured, authentication is enabled for all routes on the current gateway instance by default \uff1b"),(0,r.kt)("li",{parentName:"ul"},"For requests that pass authentication and authorization, a ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Mse-Consumer")," header will be added to the request headers to identify the name of the consumer.")),(0,r.kt)("h2",{id:"configuration-example"},"Configuration Example"),(0,r.kt)("p",null,"The following configuration enables Hmac Auth authentication and authorization for specific routes or domains on the gateway. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," field should not be duplicated."),(0,r.kt)("h3",{id:"enabling-for-specific-routes-or-domains"},"Enabling for specific routes or domains"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'consumers: \n- key: appKey-example-1\n  secret: appSecret-example-1\n  name: consumer-1\n- key: appKey-example-2\n  secret: appSecret-example-2\n  name: consumer-2\n# Configuring Fine-Grained Rules using _rules_ Field\n_rules_:\n# Rule 1: Matching by route name.\n- _match_route_:\n  - route-a\n  - route-b\n  allow:\n  - consumer-1\n# Rule 2: Applies based on domain name matching.\n- _match_domain_:\n  - "*.example.com"\n  - test.com\n  allow:\n  - consumer-2\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"allow")," field under each matching rule specifies the list of callers allowed to access under that matching condition;"),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"route-a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"route-b")," specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"_match_route_")," are the route names filled in when creating the gateway route. When either of these routes is matched, it will allow access to the caller named ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer-1"),", while denying access to other callers\uff1b"),(0,r.kt)("p",null,"In",(0,r.kt)("inlineCode",{parentName:"p"}," _match_domain_"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"*.example.com")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test.com")," are used to match the requested domain name. When a match is found, it will allow access to the caller named ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer-2"),", while denying access to other callers\uff1b"),(0,r.kt)("p",null,"Upon successful authentication, the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Mse-Consumer")," field will be added to the request header with the value set to the caller's name, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer-1"),".\u3002"),(0,r.kt)("h3",{id:"enable-at-the-gateway-instance-level"},"Enable at the Gateway Instance Level"),(0,r.kt)("p",null,"The following configuration enables HMAC authentication at the gateway instance level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers: \n- key: appKey-example-1\n  secret: appSecret-example-1\n  name: consumer-1\n- key: appKey-example-2\n  secret: appSecret-example-2\n  name: consumer-2\n")),(0,r.kt)("h2",{id:"description-of-signing-mechanism"},"Description of Signing Mechanism"),(0,r.kt)("h3",{id:"configuration-preparation"},"Configuration Preparation"),(0,r.kt)("p",null,"As mentioned in the guide above, configure the credential settings required for generating and validating signatures in the plugin configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"key: Used for setting in the request header ",(0,r.kt)("inlineCode",{parentName:"li"},"x-ca-key"),"."),(0,r.kt)("li",{parentName:"ul"},"secret: Used for generating the request signature.")),(0,r.kt)("h3",{id:"client-signature-generation-method"},"Client Signature Generation Method"),(0,r.kt)("h4",{id:"overview-of-the-process"},"Overview of the Process"),(0,r.kt)("p",null,"The process for generating a signature on the client side consists of three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extracting key data from the original request to obtain a string to be signed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using encryption algorithms and the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," to encrypt the key data signing string and obtain a signature.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adding all headers related to the signature to the original HTTP request to obtain the final HTTP request."))),(0,r.kt)("p",null,"As shown below :\n",(0,r.kt)("img",{parentName:"p",src:"https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png",alt:null})),(0,r.kt)("h4",{id:"process-for-extracting-signing-string"},"Process for Extracting Signing String"),(0,r.kt)("p",null,"To generate a signature, the client needs to extract key data from the HTTP request and combine it into a signing string. The format of the generated signing string is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"HTTPMethod\nAccept\nContent-MD5\nContent-Type\nDate\nHeaders\nPathAndParameters\n")),(0,r.kt)("p",null,"The signing string consists of the above 7 fields separated by \\n. If Headers is empty, no \\n is needed. If other fields are empty, the \\n should still be retained. The signature is case-sensitive. Below are the rules for extracting each field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"HTTPMethod: The HTTP method used in the request, in all capital letters, such as POST.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Accept: The value of the Accept header in the request, which can be empty. It is recommended to explicitly set the Accept header. When Accept is empty, some HTTP clients will set the default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*"),", which may cause signature verification to fail.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Content-MD5: The value of the Content-MD5 header in the request, which can be empty. It is only calculated when there is a non-form body in the request. The following is a reference calculation method for Content-MD5 values in \uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getbytes("UTF-8")));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Content-Type: The value of the Content-Type header in the request, which can be empty.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Date: The value of the Date header in the request. When the",(0,r.kt)("inlineCode",{parentName:"p"}," date_offset")," configuration is not enabled, it can be empty. Otherwise, it will be used for time offset verification.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Headers: Users can select specific headers to participate in the signature. There are the following rules for concatenating the signature string with headers:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The keys of the headers participating in the signature calculation are sorted in alphabetical order and concatenated as follows:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+\nHeaderKey2 + ":" + HeaderValue2 + "\\n"\\+\n...\nHeaderKeyN + ":" + HeaderValueN + "\\n"\n'))),(0,r.kt)("li",{parentName:"ul"},"If the value of a header is empty, it will participate in the signature with the ",(0,r.kt)("inlineCode",{parentName:"li"},'HeaderKey+":"+"\\n"')," only, and the key and english colon should be retained."),(0,r.kt)("li",{parentName:"ul"},"The set of keys for all headers participating in the signature is separated by a comma and placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Ca-Signature-Headers header"),"."),(0,r.kt)("li",{parentName:"ul"},"The following headers are not included in the header signature calculation: X-Ca-Signature, X-Ca-Signature-Headers, Accept, Content-MD5, Content-Type, Date."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PathAndParameters: This field contains all parameters in the path, query, and form. The specific format is as follows:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Path + "?" + Key1 + "=" + Value1 + "&" + Key2 + "=" + Value2 + ... "&" + KeyN + "=" + ValueN\n')),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The keys of the query and form parameter pairs are sorted alphabetically, and the same format as above is used for concatenation."),(0,r.kt)("li",{parentName:"ol"},"If there are no query and form parameters, use the path directly without adding ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," ."),(0,r.kt)("li",{parentName:"ol"},"If the value of a parameter is empty, only the key will be included in the signature. The equal sign should not be included in the signature."),(0,r.kt)("li",{parentName:"ol"},"If there are array parameters in the query or form (parameters with the same key but different values), only the first value should be included in the signature calculation.")),(0,r.kt)("h4",{id:"example-of-extracting-signing-string"},"Example of Extracting Signing String"),(0,r.kt)("p",null,"The initial HTTP request :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"POST /http2test/test?param1=test HTTP/1.1\nhost:api.aliyun.com\naccept:application/json; charset=utf-8\nca_version:1\ncontent-type:application/x-www-form-urlencoded; charset=utf-8\nx-ca-timestamp:1525872629832\ndate:Wed, 09 May 2018 13:30:29 GMT+00:00\nuser-agent:ALIYUN-ANDROID-DEMO\nx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\ncontent-length:33\nusername=xiaoming&password=123456789\n")),(0,r.kt)("p",null,"The correct generated signature string is :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"POST\napplication/json; charset=utf-8\napplication/x-www-form-urlencoded; charset=utf-8\nWed, 09 May 2018 13:30:29 GMT+00:00\nx-ca-key:203753385\nx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\nx-ca-signature-method:HmacSHA256\nx-ca-timestamp:1525872629832\n/http2test/test?param1=test&password=123456789&username=xiaoming\n")),(0,r.kt)("h4",{id:"signature-calculation-process"},"Signature Calculation Process"),(0,r.kt)("p",null,"After extracting the key data from the HTTP request and assembling it into a signature string, the client needs to encrypt and encode the signature string to form the final signature."),(0,r.kt)("p",null,"The specific encryption format is as follows, where ",(0,r.kt)("inlineCode",{parentName:"p"},"stringToSign")," is the extracted signature string, ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," is the one filled in the plugin configuration, and ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," is the final generated signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Mac hmacSha256 = Mac.getInstance("HmacSHA256");\nbyte[] secretBytes = secret.getBytes("UTF-8");\nhmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256"));\nbyte[] result = hmacSha256.doFinal(stringToSign.getBytes("UTF-8"));\nString sign = Base64.encodeBase64String(result);\n')),(0,r.kt)("p",null,"In summary, the ",(0,r.kt)("inlineCode",{parentName:"p"},"stringToSign")," is decoded using UTF-8 to obtain a Byte array. Then, an encryption algorithm is used to encrypt the Byte array, and finally, the Base64 algorithm is used to encode the encrypted data, resulting in the final signature."),(0,r.kt)("h4",{id:"the-process-of-adding-a-signature"},"The Process of Adding a Signature"),(0,r.kt)("p",null,"The client needs to include the following four headers in the HTTP request to be transmitted to the API gateway for signature verification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"x-ca-key: The value is the APP Key and is required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"x-ca-signature-method: The signature algorithm, the value can be HmacSHA256 or HmacSHA1, optional. The default value is HmacSHA256.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"x-ca-signature-headers: The collection of keys for all signature headers, separated by commas. Optional.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"x-ca-signature: The signature and it is required."))),(0,r.kt)("p",null,"Here is an example of a complete HTTP request with a signature :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"POST /http2test/test?param1=test HTTP/1.1\nhost:api.aliyun.com\naccept:application/json; charset=utf-8\nca_version:1\ncontent-type:application/x-www-form-urlencoded; charset=utf-8\nx-ca-timestamp:1525872629832\ndate:Wed, 09 May 2018 13:30:29 GMT+00:00\nuser-agent:ALIYUN-ANDROID-DEMO\nx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\nx-ca-key:203753385\nx-ca-signature-method:HmacSHA256\nx-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method\nx-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=\ncontent-length:33\nusername=xiaoming&password=123456789\n")),(0,r.kt)("h3",{id:"server-side-signature-verification-method"},"Server-side Signature Verification Method"),(0,r.kt)("h4",{id:"overview-of-the-process-1"},"Overview of the Process"),(0,r.kt)("p",null,"The server-side signature verification of the client's request involves four steps :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract crucial data from the received request to obtain a string for signing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," from the received request and use it to query its corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Encrypt the string for signing using the encryption algorithm and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retrieve the client's signature from the received request, and compare the consistency of the server-side signature with the client's signature."))),(0,r.kt)("p",null,"As shown below :\n",(0,r.kt)("img",{parentName:"p",src:"https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png",alt:null})),(0,r.kt)("h3",{id:"troubleshooting-signature-errors"},"Troubleshooting Signature Errors"),(0,r.kt)("p",null,"When the gateway signature verification fails, the server-side signing string (StringToSign) will be returned to the client in the HTTP Response Header. The key is X-Ca-Error-Message. Users only need to compare the locally calculated signing string with the server-side signing string returned to locate the problem;"),(0,r.kt)("p",null,"If the StringToSign on the server side is consistent with that on the client side, please check whether the APP Secret used for signature calculation is correct\uff1b"),(0,r.kt)("p",null,"Because line breaks cannot be represented in HTTP headers, all line breaks in the StringToSign are replaced with #, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"X-Ca-Error-Message:  Server StringToSign:`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST`\n\n")),(0,r.kt)("h2",{id:"related-error-codes"},"Related Error Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Status Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Error Message"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid Key"),(0,r.kt)("td",{parentName:"tr",align:null},"The x-ca-key request header is not provided or is invalid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty Signature"),(0,r.kt)("td",{parentName:"tr",align:null},"The x-ca-signature request header does not contain a signature.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid Signature"),(0,r.kt)("td",{parentName:"tr",align:null},"The x-ca-signature request header contains a signature that does not match the server-calculated signature.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid Content-MD5"),(0,r.kt)("td",{parentName:"tr",align:null},"The content-md5 request header is incorrect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The time offset calculated based on the date request header exceeds the configured date_offset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"413"),(0,r.kt)("td",{parentName:"tr",align:null},"Request Body Too Large"),(0,r.kt)("td",{parentName:"tr",align:null},"The request body exceeds the size limit of 32 MB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"413"),(0,r.kt)("td",{parentName:"tr",align:null},"Payload Too Large"),(0,r.kt)("td",{parentName:"tr",align:null},"The request body exceeds the DownstreamConnectionBufferLimits global configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized Consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"The requesting party does not have access permission.")))))}d.isMDXComponent=!0}}]);