(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{45790:function(e,t,n){Promise.resolve().then(n.bind(n,44932)),Promise.resolve().then(n.bind(n,55856)),Promise.resolve().then(n.bind(n,6447))},44932:function(e,t,n){"use strict";n.d(t,{DocLeftNav:function(){return X}});var r=n(27573),l=n(7653),a=n(97712);let i=a.z.lazy(()=>a.z.object({title:a.z.string(),url:a.z.union([a.z.string().startsWith("/",{message:"must start with /"}),a.z.string().url()]).optional(),collapsible:a.z.boolean().default(!0),children:a.z.array(i).optional()}));function s(e){return e.url?"".concat(e.url,"-").concat(e.title):e.title}function o(e,t){var n;let r=function(e,t){for(let n of e.children){let e=function e(n,r){if(t(n,r))return{entry:n,parents:r};if(n.children)for(let t of n.children){let l=e(t,[...r,n]);if(l)return l}}(n,[n]);if(e)return e}}(e,e=>e.url===t);return null!==(n=null==r?void 0:r.parents.map(s))&&void 0!==n?n:[]}a.z.object({title:a.z.string(),subtitle:a.z.string().optional(),children:a.z.array(i),collapsed:a.z.boolean().default(!1)});var c=n(82296),u=n(75752),d=n.n(u),f=n(87659),m=n(69168),h=n(8727),p=n(25719),v=n(14221),x=n.n(v);let b=(0,l.forwardRef)(function(e,t){let{title:n,subtitle:l,children:a}=e;return(0,r.jsxs)("nav",{className:"hidden lg:block sticky max-h-[calc(100vh-var(--app-header-height))] w-[var(--left-toc-menu-width)] bg-background top-[var(--app-header-height)] bottom-0 overflow-y-auto scrollbar scrollbar-variant flex-shrink-0","aria-label":"Side navigation",ref:t,children:[(0,r.jsxs)("div",{className:"my-16",children:[(0,r.jsx)("h2",{className:"text-heading-03 px-16 text-text-primary",children:n}),l&&(0,r.jsx)("p",{className:"text-label-01 px-16 pt-8",children:l})]}),a]})});var g=n(29470);function j(e){let t=(0,l.useRef)();return(0,g.Z)(()=>{t.current=e}),(0,l.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.current)(...n)},[])}var k=n(9516),y=n(67754),C=n(66361),E=n(23662),N=n(29632);function w(e){return e.replace(RegExp("(?<=[0-9])rc"),"-rc")}function _(e,t){return(0,N.compare)(w(e),w(t))}var I=n(44552),M=n.n(I);function z(e){let{tocDataItem:t,className:n,onChangeVersion:a}=e,i=(0,y.useRouter)(),s=(0,l.useId)(),o=(0,l.useMemo)(()=>t.package.versions.sort((e,t)=>_(t.version,e.version)),[t]),c=(0,l.useMemo)(()=>[...o.map(e=>e.version)].sort(_).reverse().filter(e=>!(0,N.prerelease)(w(e)))[0],[o]);return(0,r.jsx)(C.Z,{id:s,value:t.package.version,hideLabel:!0,className:n,onFocus:()=>{for(let e of o)i.prefetch(e.path)},onChange:e=>{let t=e.target.value;null==a||a(t);let n=M()(o,e=>e.version===t);n&&i.push(n.path)},children:o.map(e=>{let t=e.version,n=t==c?"v".concat(t," (latest)"):(0,N.prerelease)(w(t))?"v".concat(t.replace("-dev","")," (dev)"):"v".concat(t);return(0,r.jsx)(E.Z,{value:t,text:n},t)})})}var T=n(53433);function S(e){let{tocDataItem:t,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:i,onToggleSection:s,onClickMenuItem:o}=e,{containerRef:c}=(0,k.F)({elementId:"TocTreeElement__active"});return(0,r.jsxs)(b,{title:t.toc.title,subtitle:t.toc.subtitle,ref:c,children:["package"===t.type&&(0,r.jsx)(z,{className:"px-16 mb-24",tocDataItem:t}),(0,r.jsx)(Z,{toc:t.toc,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:i,onToggleSection:s,onClickMenuItem:o})]})}function Z(e){let{toc:t,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:i,onToggleSection:o,onClickMenuItem:c}=e,u=j((e,t)=>{null==o||o(e,t),t?a([...l,e]):a(x()(l,e))});function d(e){null==i||i(e),e.level>1&&(null==c||c(e.title))}let f=t.children.length-1;return(0,r.jsx)(m.LD,{children:t.children.map((e,t)=>{let a=s(e),i=!e.collapsible&&t!=f;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{tocEntry:e,activeUrl:n,expandedIds:l,onClickEntry:d,onChangeExpanded:u,level:1},a),i&&(0,r.jsx)(h.GDX,{className:"border-t border-border-subtle-00"})]})})})}function W(e){var t;let{tocEntry:n,activeUrl:l,level:a,parentCollapsible:i=!0,expandedIds:s,onChangeExpanded:o,onClickEntry:c}=e;return(null===(t=n.children)||void 0===t?void 0:t.length)?(0,r.jsx)(P,{tocEntry:n,activeUrl:l,level:a,parentCollapsible:i,expandedIds:s,onChangeExpanded:o,onClickEntry:c}):(0,r.jsx)(L,{tocEntry:n,activeUrl:l,level:a,parentCollapsible:i,onClickEntry:c})}function P(e){var t;let{tocEntry:n,activeUrl:a,level:i,parentCollapsible:o=!0,expandedIds:c,onChangeExpanded:u}=e,d=s(n),f=j(t=>{var n;null===(n=e.onClickEntry)||void 0===n||n.call(e,t)}),h=(0,l.useMemo)(()=>({paddingLeft:q(i),fontWeight:D(i,o)}),[i,o]),p=(0,l.useMemo)(()=>({paddingLeft:q(i)}),[i]),v=(0,l.useMemo)(()=>c.includes(d),[c,d]),x={active:function e(t,n){return Array.isArray(t)?t.some(t=>e(t,n)):t.children?e(t.children,n):t.url===n}(n,a)&&!v,expanded:v,buttonStyle:h,onChangeExpanded:j(e=>u(d,e))},b=n.collapsible?m.Fx:m.W6,g=i+(n.collapsible?1:0);return(0,r.jsx)(b,{className:"[&>.cds--side-nav\\\\_\\\\_submenu]:![block-size:auto] [&>.cds--side-nav\\\\_\\\\_submenu]:[min-block-size:2rem] [&>.cds--side-nav\\\\_\\\\_submenu]:flex [&>.cds--side-nav\\\\_\\\\_submenu]:gap-4 [&>.cds--side-nav\\\\_\\\\_submenu]:py-[6px] [&>.cds--side-nav\\\\_\\\\_submenu]:items-start [&>.cds--side-nav\\\\_\\\\_submenu>span]:break-words [&>.cds--side-nav\\\\_\\\\_submenu>span]:!whitespace-normal [&>.cds--side-nav\\\\_\\\\_submenu>.cds--side-nav\\\\_\\\\_icon]:items-baseline",title:n.title,...n.collapsible?x:{titleStyle:p},children:null===(t=n.children)||void 0===t?void 0:t.map(e=>{let t=s(e);return(0,r.jsx)(W,{tocEntry:e,activeUrl:a,level:g,parentCollapsible:n.collapsible,expandedIds:c,onChangeExpanded:u,onClickEntry:f},t)})})}let L=(0,l.memo)(function(e){let{tocEntry:t,activeUrl:n,level:a,parentCollapsible:i=!0}=e,s=t.url===n,o=j(()=>{var n;null===(n=e.onClickEntry)||void 0===n||n.call(e,{...t,level:a})}),c=(0,l.useMemo)(()=>function(e){return(0,r.jsx)(F,{id:s?"TocTreeElement__active":void 0,className:(0,T.Z)(e.className,"![block-size:auto] !py-[6px] [&>span]:break-words [&>span]:!whitespace-normal"),url:t.url,level:a,parentCollapsible:i,onClick:o,children:e.children})},[s,a,i,o,t.url]);return a>1?(0,r.jsx)(p.xR,{isActive:s,href:t.url,as:c,children:t.title}):(0,r.jsx)(p.yT,{isActive:s,href:t.url,as:c,children:t.title})});function q(e){return e<=16?16*e:80+8*(e-5)}function D(e,t){return e>1||!t?"normal":void 0}function F(e){let{id:t,url:n,level:l,parentCollapsible:a=!0,children:i,onClick:s,className:o}=e,u={paddingLeft:q(l),fontWeight:D(l,a)};if(n){let e=(0,c.pv)(n);return(0,r.jsxs)(R,{id:t,href:n,className:o,onClick:s,style:u,...(0,c.D1)(n),children:[i,"external"===e&&(0,r.jsx)(d(),{size:16,className:"ml-8 text-text-placeholder shrink-0","aria-label":"opens in new tab"})]})}return(0,r.jsx)("div",{id:t,style:u,className:o,children:i})}function R(e){let{href:t,...n}=e;return"absolute"===(t?(0,c.pv)(t):void 0)?(0,r.jsx)(f.default,{...n,href:t}):(0,r.jsx)("a",{...n,href:t})}function A(){let e=(0,y.usePathname)();return""===e&&(e="/"),e}var U=n(28287),O=n.n(U),G=n(39294),B=n.n(G),V=n(14131),H=n(22810);async function K(e){let t=await fetch("".concat((0,c.sb)(),"/api/toc").concat(e));if(t.ok)return t.json();throw Error("Error loading toc")}var Q=n(24723);function X(e){let{tocPaths:t,onToggleSection:n,onClickMenuItem:l}=e,a=function(e,t){let n=new Set(e),r=t.split("/");for(;r.length>0;){let e=r.join("/");if(n.has(e))return e;r.pop()}return n.has("/")?"/":void 0}(t,A()),{status:i,data:s}=(0,H.a)({enabled:!!a,queryKey:["toc",a],queryFn:async e=>{let{queryKey:t}=e;return K(t[1])}});return a?"loading"===i?(0,r.jsx)(b,{title:"",children:(0,r.jsxs)("div",{className:"px-16",children:[(0,r.jsx)(Q.Z,{heading:!0,className:"my-24"}),(0,r.jsx)(Q.Z,{}),(0,r.jsx)(Q.Z,{})]})}):"error"===i?(0,r.jsx)(b,{title:"",children:(0,r.jsx)(V.l,{status:"error",description:"There was an unexpected error",className:"px-16"})}):(0,r.jsx)(J,{tocDataItem:s,onToggleSection:n,onClickMenuItem:l},a):null}function J(e){let{tocDataItem:t,onToggleSection:n,onClickMenuItem:a}=e,i=A(),{expandedIds:c,setExpandedIds:u}=function(e,t){let[n,r]=(0,l.useState)(()=>{let n=o(e,t);return e.collapsed?n:B()([...n,...(function e(t,n){return t.flatMap(t=>{let r=[];return n(t)&&r.push(t),t.children&&r.push(...e(t.children,n)),r})})(e.children,e=>!O()(e.children)).map(s)])}),a=j(t=>{let n=o(e,t);n&&r(e=>B()([...e,...n]))});return(0,l.useEffect)(()=>{a(t)},[t,a]),{expandedIds:n,setExpandedIds:r}}(t.toc,i);return(0,r.jsx)(S,{tocDataItem:t,activeUrl:i,expandedIds:c,onChangeExpandedIds:u,onToggleSection:n,onClickMenuItem:a})}},55856:function(e,t,n){"use strict";n.d(t,{Image:function(){return c},ImageModal:function(){return h},ImageModalProvider:function(){return m},InlineImage:function(){return u}});var r=n(27573),l=n(65880),a=n(53433),i=n(7653),s=n(15450),o=n(95687);function c(e){let{className:t,title:n,...l}=e,{setModalImageProps:s}=(0,i.useContext)(f),o=()=>{s({title:n,...l})};return n?(0,r.jsxs)("figure",{className:"flex flex-col gap-4",children:[(0,r.jsx)(d,{className:(0,a.Z)(t,"border-none max-w-full h-auto cursor-pointer"),title:n,display:"block",...l,onClick:o}),(0,r.jsx)("figcaption",{className:"text-left text-label-01 text-text-helper",children:n})]}):(0,r.jsx)(d,{className:(0,a.Z)(t,"border-none max-w-full h-auto cursor-pointer"),display:"block",onClick:o,...l})}function u(e){let{className:t,...n}=e;return(0,r.jsx)(d,{display:"inline",className:(0,a.Z)(t,"border-none max-w-full h-auto"),...n})}function d(e){let{alt:t="",src:n,srcDark:i,display:s,className:o,...c}=e;if(i){let e=(0,a.Z)({block:"block"===s,inline:"inline"===s},"dark:hidden",o),u=(0,a.Z)("hidden",{"dark:block":"block"===s,"dark:inline":"inline"===s},o);return n.startsWith("/")?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{alt:t,src:n,className:e,...c}),(0,r.jsx)(l.default,{alt:t,src:i,className:u,...c})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{alt:t,src:n,className:e,...c}),(0,r.jsx)("img",{alt:t,src:i,className:u,...c})]})}let u=(0,a.Z)({block:"block"===s,inline:"inline"===s},o);return n.startsWith("/")?(0,r.jsx)(l.default,{alt:t,src:n,className:u,...c}):(0,r.jsx)("img",{alt:t,src:n,className:u,...c})}let f=(0,i.createContext)({modalImageProps:null,setModalImageProps:()=>{}});function m(e){let{children:t}=e,[n,l]=(0,i.useState)(null),a=(0,i.useMemo)(()=>({modalImageProps:n,setModalImageProps:l}),[n]);return(0,r.jsx)(f.Provider,{value:a,children:t})}function h(){let{modalImageProps:e,setModalImageProps:t}=(0,i.useContext)(f),[n,l]=(0,i.useState)(e);e&&n!==e&&l(e);let a=null!=e?e:n;return(0,r.jsxs)(s.Z,{open:!!e,onClose:()=>t(null),containerClassName:"w-auto max-w-[98%]",children:[(0,r.jsx)(o.x,{className:"h-48"}),(0,r.jsx)(s.f,{className:"flex items-center justify-center",children:(null==a?void 0:a.src)&&(0,r.jsx)(d,{...a,className:"max-h-full"})})]})}},6447:function(e,t,n){"use strict";n.d(t,{MdTabItem:function(){return f},MdTabs:function(){return u},MdTabsGroupContextProvider:function(){return h},OperatingSystemMdTabs:function(){return d}});var r=n(27573),l=n(40034),a=n.n(l),i=n(7653),s=n(62567);let o=s.td,c=s.nP;function u(e){var t;let{defaultValue:n,group:l}=e,u=(t=e.children,i.Children.toArray(t).filter(e=>null!=e&&"\n"!==e).map(e=>{if((0,i.isValidElement)(e)&&a()(e.props,"value"))return e;throw Error("Bad <Tabs> child")})),d=u.map(e=>e.props.value),[f,m]=p(l),h=(0,i.useRef)(null),[v,x]=(0,i.useState)(()=>void 0!==n&&d.includes(n)?n:d[0]),b=(0,i.useMemo)(()=>l&&f&&d.includes(f)?f:v,[l,f,v,d]),g=function(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{let e=()=>{t(window.location.hash)};return e(),window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),e}();return(0,i.useEffect)(()=>{if(h.current&&g){let t=h.current.querySelector('[id="'.concat(g.slice(1),'"]'));if(t){var e;let n=null===(e=t.closest("[data-tab-value]"))||void 0===e?void 0:e.getAttribute("data-tab-value");n&&(x(n),m(n))}}},[g,m]),(0,i.useEffect)(()=>{l&&!f&&m(v)},[l,f,v,m]),(0,r.jsx)("div",{ref:h,children:(0,r.jsxs)(s.mQ,{selectedIndex:d.indexOf(b),onChange:e=>{let{selectedIndex:t}=e,n=d[t];x(n),m(n)},children:[(0,r.jsx)(o,{"aria-label":"List of tabs",children:u.map(e=>(0,r.jsx)(s.OK,{children:e.props.label},e.props.value))}),(0,r.jsx)(c,{children:u})]})})}function d(e){let t="operating-system",[n,l]=(0,i.useState)(),[a,s]=p(t);return(0,i.useEffect)(()=>{let e=function(){if(navigator.platform){if(navigator.platform.startsWith("Mac"))return"mac";if(navigator.platform.startsWith("Win"))return"win";if(navigator.platform.startsWith("Linux"))return"linux"}}();e&&(l(e),s(e))},[s]),(0,r.jsx)(u,{...e,group:t,defaultValue:n},n)}function f(e){let{children:t}=e;return(0,r.jsx)(s.x4,{"data-tab-value":e.value,children:t})}let m=(0,i.createContext)(void 0);function h(e){let[t,n]=(0,i.useState)({}),l=(0,i.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),a=(0,i.useMemo)(()=>({valuesByGroup:t,setValue:l}),[l,t]);return(0,r.jsx)(m.Provider,{value:a,children:e.children})}function p(e){let t=(0,i.useContext)(m);if(void 0===t)throw Error("Missing MdTabsGroupContextProvider");let n=t.setValue,r=(0,i.useCallback)(t=>{e&&n(e,t)},[e,n]);return void 0===e?[void 0,r]:[t.valuesByGroup[e],r]}},9516:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(7653);function l(e){let{elementId:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=document.getElementById(t);if(e&&n.current){let t=n.current.offsetTop,r=t+n.current.offsetHeight,l=e.offsetTop,a=l+e.offsetHeight;(l<t||a>r)&&(n.current.scrollTop=l-t)}},[t]),{containerRef:n}}},82296:function(e,t,n){"use strict";n.d(t,{D1:function(){return a},pv:function(){return l},sb:function(){return i}});var r=n(86629);function l(e){return(0,r.Z)(e)?!function(e){let{hostname:t}=new URL(e);return"quantum-computing.ibm.com"===t||t.endsWith(".quantum-computing.ibm.com")||"quantum.ibm.com"===t||t.endsWith(".quantum.ibm.com")}(e)?"external":"external-quantum":e.startsWith("/")?"absolute":"relative"}function a(e){if(!e)return{};let t=l(e);return"external"===t?{target:"_blank",rel:"noopener noreferrer nofollow"}:"external-quantum"===t?{target:"_blank"}:{}}function i(){return"/documentation/pr-1670"}n(16144)}},function(e){e.O(0,[469,880,193,275,268,10,293,286,744],function(){return e(e.s=45790)}),_N_E=e.O()}]);