/*! For license information please see 2d27d23c.389988bb.js.LICENSE.txt */
(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[799],{1262:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var i=s(7294),n=s(2389);function r(e){let{children:t,fallback:s}=e;return(0,n.Z)()?i.createElement(i.Fragment,null,t?.()):s??null}},5138:(e,t,s)=>{"use strict";s.d(t,{$Q:()=>h,N$:()=>m,zx:()=>c,JO:()=>o,iR:()=>p});var i=s(7294),n=s(4184),r=s.n(n),a=s(1876);const l={type:"primary",link:"",target:"_self"},c=function(e){return void 0===e&&(e=l),i.createElement("a",{className:r()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,a.Rg)(e.link,e.language)},e.children||null)},o=e=>{const{type:t}=e;return i.createElement("i",{className:r()({"docsite-icon":!0,[`docsite-icon-${t}`]:!0})})},m=e=>i.createElement("div",{className:r()({bone:!0,[`bone-${e.type}`]:!0})}),h=e=>{const{text:t,img:s}=e,n=r()({bar:!0});return i.createElement("div",{className:n},i.createElement("div",{className:"bar-body"},i.createElement("img",{src:(0,a.Rg)(s),className:"front-img"}),i.createElement("span",null,t),i.createElement("img",{src:(0,a.Rg)(s),className:"back-img"})))};var d=s(3935);class g extends i.Component{constructor(e){super(e),this.getVisibleNum=()=>{let e=1;const t=this.container?.getBoundingClientRect().width,s=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&s&&(e=Math.floor(t/s)),e||1},this.getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:s}=this.state,n=i.Children.count(t),r=Math.ceil(n/s);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*r}return e},this.changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})},this.renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:s}=this.state,n=[],r=i.Children.count(e),a=Math.ceil(r/s);for(let i=0;i<a;i++)n.push(Array.from(e).slice(i*s,(i+1)*s));return i.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},n.map(((e,t)=>i.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,n)=>i.createElement("div",{className:"slider-item",key:n},i.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*s+n}`]=e}}))))))))},this.renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:s}=this.state,n=i.Children.count(e),a=Math.ceil(n/s),l=[];for(let c=0;c<a;c++)l.push(i.createElement("span",{key:c,className:r()({"slider-control-item":!0,"slider-control-item-active":c===t}),onClick:this.changeScreen.bind(this,c)}));return i.createElement("div",{className:"slider-control"},l)},this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,a.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}render(){return i.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const p=g;class u extends i.Component{constructor(e){super(e),this.changePage=e=>{this.setState({page:e})},this.renderSliderList=()=>{const{children:e,pageSize:t}=this.props,{page:s,pageWidth:i}=this.state,n=[],r=React.Children.count(e),a=Math.ceil(r/t);for(let l=0;l<a;l++)n.push(Array.from(e).slice(l*t,(l+1)*t));return React.createElement("div",{className:"slider-list",style:{transform:`translateX(-${s*i}px)`,transition:"transform 500ms ease",width:a*i}},n.map(((e,t)=>React.createElement("div",{className:"slider-page",style:{width:i},key:t},e.map(((e,t)=>React.createElement("div",{className:"slider-item",key:t},e)))))))},this.renderControl=()=>{const{children:e,pageSize:t}=this.props,{page:s}=this.state,i=React.Children.count(e),n=Math.ceil(i/t);return React.createElement("div",{className:"slider-control"},React.createElement("img",{className:classnames({"slider-control-prev":!0,"slider-control-prev-hidden":0===s}),src:getLink("/img/system/prev.png"),onClick:this.changePage.bind(this,s-1)}),React.createElement("img",{className:classnames({"slider-control-next":!0,"slider-control-next-hidden":s===n-1}),src:getLink("/img/system/next.png"),onClick:this.changePage.bind(this,s+1)}))},this.container=null,this.state={page:0,pageWidth:0}}componentDidMount(){const e=this.container.getBoundingClientRect().width;this.setState({pageWidth:e}),this.throttleAdjust=throttle((()=>{this.setState({pageWidth:this.container.getBoundingClientRect().width})}),200),window.addEventListener("resize",this.throttleAdjust)}componentWillUnmount(){window.removeEventListener("resize",this.throttleAdjust)}render(){return React.createElement("div",{className:"page-slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}var f=s(5999);(0,f.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),(0,f.I)({id:"homepage.footerVersionContent",message:"\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u4e91\u539f\u751f\u7f51\u5173\u89e3\u51b3\u65b9\u6848."}),(0,f.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),(0,f.I)({id:"homepage.footerDocListText1",message:"Higress \u662f\u4ec0\u4e48\uff1f"}),(0,f.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),(0,f.I)({id:"homepage.footerDocListText3",message:"\u62a5\u544a\u6587\u6863\u95ee\u9898"}),(0,f.I)({id:"homepage.footerDocListText3",message:"\u5728Github\u4e0a\u7f16\u8f91\u6b64\u6587\u6863"}),(0,f.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),(0,f.I)({id:"homepage.footerResourcesListText1",message:"\u535a\u5ba2"}),(0,f.I)({id:"homepage.footerResourcesListText2",message:"\u793e\u533a"})},7065:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var i=s(7294),n=s(5999),r=s(5138),a=s(1262);const l={desc:i.createElement("span",null,i.createElement(n.Z,{id:"homepage.userDesc1"},"\u8bf7\u5728")," ",i.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/alibaba/higress/issues/1"},"Wanted: who's using Higress")," ",i.createElement(n.Z,{id:"homepage.userDesc2"},"\u4e0a\u63d0\u4f9b\u4fe1\u606f\u6765\u5e2e\u52a9 Higress \u505a\u7684\u66f4\u597d\u3002")),list:["https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png","https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png","https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png","https://img.alicdn.com/imgextra/i3/O1CN01pH2InM1iuDzpDxxox_!!6000000004472-0-tps-228-82.jpg","https://img.alicdn.com/imgextra/i3/O1CN013OMegK1xQCGX3CQNQ_!!6000000006437-0-tps-178-88.jpg","https://img.alicdn.com/imgextra/i1/O1CN01vrxF2I1rfs7rihLdy_!!6000000005659-0-tps-310-160.jpg","https://img.alicdn.com/imgextra/i1/O1CN01638eOX1ZcW9bTIID4_!!6000000003215-2-tps-700-394.png","https://img.alicdn.com/imgextra/i2/O1CN01T8c4by29tlErCcjHw_!!6000000008126-2-tps-170-170.png","https://img.alicdn.com/imgextra/i2/O1CN01j9lDmk1J7LLkD9jcJ_!!6000000000981-2-tps-2019-770.png"],title:(0,n.I)({id:"homepage.userTitle",message:"\u8c01\u5728\u4f7f\u7528 Higress"})},c=()=>i.createElement(a.Z,null,(()=>i.createElement("section",{className:"users-section"},i.createElement("h3",null,l.title),i.createElement(r.N$,{type:"dark"}),i.createElement("p",null,l.desc),i.createElement("div",{className:"users"},l.list.map(((e,t)=>i.createElement("div",{className:"user-item",key:t},i.createElement("img",{src:e}))))))))},1876:(e,t,s)=>{"use strict";s.d(t,{P2:()=>i,Rg:()=>n});const i=(e,t)=>{let s=null;return function(){for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];const a=this;clearTimeout(s),s=setTimeout((()=>{e.apply(a,n)}),t)}},n=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?`${window?.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},4184:(e,t)=>{var s;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&e.push(a)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var l in s)i.call(s,l)&&s[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}}]);