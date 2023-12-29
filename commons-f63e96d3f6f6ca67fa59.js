"use strict";(self.webpackChunksneas_io=self.webpackChunksneas_io||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,o=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return W},_:function(){return o},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,v);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],L=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:s().object.isRequired,alt:C},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set;let O,_;const j=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:f}=e,h=o(e,$);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:E,className:x}=v,k=o(v,T),S=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(u=p);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(w,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(L);if(_&&I.has(L))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(L),image:n},h)),I.has(L)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,L,I,s,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(L)&&_&&(S.current.innerHTML=_(i({isLoading:I.has(L),isLoaded:I.has(L),image:n},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:d}),className:`${x}${u?` ${u}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));q.propTypes=N,q.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=o(t,R);return s&&console.warn(s),n?r.createElement(e,i({image:n},l)):(console.warn("Image not loaded",a),null)}}const A=z((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:C,layout:N,images:$,placeholder:T,backgroundColor:I}=l,O=c(v,C,N),{style:_,className:j}=O,q=o(O,S),R={fallback:void 0,sources:[]};return $.fallback&&(R.fallback=i({},$.fallback,{srcSet:$.fallback.srcSet?L($.fallback.srcSet):void 0})),$.sources&&(R.sources=$.sources.map((e=>i({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,i({},q,{style:i({},_,s,{backgroundColor:h}),className:`${j}${a?` ${a}`:""}`}),r.createElement(g,{layout:N,width:v,height:C},r.createElement(E,i({},u(T,!1,N,v,C,I,y,b))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:m},w,d("eager"===p,!1,R,p,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},P=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:C,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};A.displayName="StaticImage",A.propTypes=F;const W=z(q);W.displayName="StaticImage",W.propTypes=F},8678:function(e,t,a){var r=a(7294),n=a(8032);t.Z=e=>{let{children:t}=e;return r.createElement("div",{className:"flex flex-col min-h-screen justify-center max-w-screen-lg px-4 mx-auto"},r.createElement("header",{className:"my-6 flex items-center"},r.createElement(n.S,{src:"../images/photo.png",width:64,quality:95,formats:["png","webp","avif"],className:"rounded-full mr-4",alt:"",__imageData:a(6048)}),r.createElement("div",{className:"text-4xl"},"sneas")),r.createElement("div",{className:"flex-1"},r.createElement("div",{className:"mx-auto"},r.createElement("main",null,t))),r.createElement("footer",{className:"my-6 text-center"},"© ",(new Date).getFullYear()," ·"," ",r.createElement("a",{href:"https://twitter.com/sneasio"},"Dmytro Snisarenko")))}},9357:function(e,t,a){var r=a(7294),n=a(4160);t.Z=function(e){var t,a;let{description:s,title:i,children:o}=e;const{site:l}=(0,n.K2)("63159454"),c=s||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?`${i} | ${d}`:i),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=l.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:c}),o)}},6048:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/ddf6254c224282770e0f7769b74d7c3a/d4e6d/photo.png","srcSet":"/static/ddf6254c224282770e0f7769b74d7c3a/4c183/photo.png 16w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/865aa/photo.png 32w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/d4e6d/photo.png 64w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/20de2/photo.png 128w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/ddf6254c224282770e0f7769b74d7c3a/641e1/photo.avif 16w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/8e9fb/photo.avif 32w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/cc6c8/photo.avif 64w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/bfbcb/photo.avif 128w","type":"image/avif","sizes":"(min-width: 64px) 64px, 100vw"},{"srcSet":"/static/ddf6254c224282770e0f7769b74d7c3a/28487/photo.webp 16w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/3d4da/photo.webp 32w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/541c0/photo.webp 64w,\\n/static/ddf6254c224282770e0f7769b74d7c3a/57ec1/photo.webp 128w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')}}]);
//# sourceMappingURL=commons-f63e96d3f6f6ca67fa59.js.map