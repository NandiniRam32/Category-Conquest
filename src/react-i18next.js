!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).ReactI18next={},e.React)}(this,(function(e,n){"use strict";function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var s=t({area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),i=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function r(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(s[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(i),a=null;null!==(a=o.exec(e));)if(a[0].trim())if(a[1]){var c=a[1].trim(),l=[c,""];c.indexOf("=")>-1&&(l=c.split("=")),n.attrs[l[0]]=l[1],o.lastIndex--}else a[2]&&(n.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return n}var o=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,a=/^\s*$/,c=Object.create(null);function l(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(l,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var u={parse:function(e,n){n||(n={}),n.components||(n.components=c);var t,s=[],i=[],l=-1,u=!1;if(0!==e.indexOf("<")){var p=e.indexOf("<");s.push({type:"text",content:-1===p?e:e.substring(0,p)})}return e.replace(o,(function(o,c){if(u){if(o!=="</"+t.name+">")return;u=!1}var p,d="/"!==o.charAt(1),f=o.startsWith("\x3c!--"),g=c+o.length,h=e.charAt(g);if(f){var m=r(o);return l<0?(s.push(m),s):((p=i[l]).children.push(m),s)}if(d&&(l++,"tag"===(t=r(o)).type&&n.components[t.name]&&(t.type="component",u=!0),t.voidElement||u||!h||"<"===h||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===l&&s.push(t),(p=i[l-1])&&p.children.push(t),i[l]=t),(!d||t.voidElement)&&(l>-1&&(t.voidElement||t.name===o.slice(2,-1))&&(l--,t=-1===l?s:i[l]),!u&&"<"!==h&&h)){p=-1===l?s:i[l].children;var y=e.indexOf("<",g),b=e.slice(g,-1===y?void 0:y);a.test(b)&&(b=" "),(y>-1&&l+p.length>=0||" "!==b)&&p.push({type:"text",content:b})}})),s},stringify:function(e){return e.reduce((function(e,n){return e+l("",n)}),"")}};function p(){if(console&&console.warn){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}const d={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&d[n[0]]||("string"==typeof n[0]&&(d[n[0]]=new Date),p(...n))}const g=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout((()=>{e.off("initialized",t)}),0),n()};e.on("initialized",t)}};function h(e,n,t){e.loadNamespaces(n,g(e,t))}function m(e,n,t,s){"string"==typeof t&&(t=[t]),t.forEach((n=>{e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,g(e,s))}function y(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}const b=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,v={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},x=e=>v[e];let E,N={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(b,x)};function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N={...N,...e}}function $(){return N}function w(e){E=e}function k(){return E}function I(e,n){if(!e)return!1;const t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function S(e){if(!e)return[];const n=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?j(n):n}function j(e){return Array.isArray(e)?e:[e]}function C(e,t){if(!e)return"";let s="";const i=j(e),r=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return i.forEach(((e,i)=>{if("string"==typeof e)s+=`${e}`;else if(n.isValidElement(e)){const n=Object.keys(e.props).length,o=r.indexOf(e.type)>-1,a=e.props.children;if(!a&&o&&0===n)s+=`<${e.type}/>`;else if(a||o&&0===n)if(e.props.i18nIsDynamicList)s+=`<${i}></${i}>`;else if(o&&1===n&&"string"==typeof a)s+=`<${e.type}>${a}</${e.type}>`;else{const e=C(a,t);s+=`<${i}>${e}</${i}>`}else s+=`<${i}></${i}>`}else if(null===e)p("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"==typeof e){const{format:n,...t}=e,i=Object.keys(t);if(1===i.length){const e=n?`${i[0]}, ${n}`:i[0];s+=`{{${e}}}`}else p("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else p("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),s}function R(e,t,s,i,r,o){if(""===t)return[];const a=i.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(a.map((e=>`<${e}`)).join("|")).test(t);if(!e&&!c&&!o)return[t];const l={};!function e(t){j(t).forEach((t=>{"string"!=typeof t&&(I(t)?e(S(t)):"object"!=typeof t||n.isValidElement(t)||Object.assign(l,t))}))}(e);const p=u.parse(`<0>${t}</0>`),d={...l,...r};function f(e,t,s){const i=S(e),r=h(i,t.children,s);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((e=>n.isValidElement(e)))}(i)&&0===r.length||e.props&&e.props.i18nIsDynamicList?i:r}function g(e,t,s,i,r){e.dummy?(e.children=t,s.push(n.cloneElement(e,{key:i},r?void 0:t))):s.push(...n.Children.map([e],(e=>{const s={...e.props};return delete s.i18nIsDynamicList,n.createElement(e.type,{...s,key:i,ref:e.ref},r?null:t)})))}function h(t,r,l){const u=j(t);return j(r).reduce(((t,r,p)=>{const m=r.children&&r.children[0]&&r.children[0].content&&s.services.interpolator.interpolate(r.children[0].content,d,s.language);if("tag"===r.type){let o=u[parseInt(r.name,10)];1!==l.length||o||(o=l[0][r.name]),o||(o={});const y=0!==Object.keys(r.attrs).length?function(e,n){const t={...n};return t.props=Object.assign(e.props,n.props),t}({props:r.attrs},o):o,b=n.isValidElement(y),v=b&&I(r,!0)&&!r.voidElement,x=c&&"object"==typeof y&&y.dummy&&!b,E="object"==typeof e&&null!==e&&Object.hasOwnProperty.call(e,r.name);if("string"==typeof y){const e=s.services.interpolator.interpolate(y,d,s.language);t.push(e)}else if(I(y)||v){g(y,f(y,r,l),t,p)}else if(x){g(y,h(u,r.children,l),t,p)}else if(Number.isNaN(parseFloat(r.name)))if(E){g(y,f(y,r,l),t,p,r.voidElement)}else if(i.transSupportBasicHtmlNodes&&a.indexOf(r.name)>-1)if(r.voidElement)t.push(n.createElement(r.name,{key:`${r.name}-${p}`}));else{const e=h(u,r.children,l);t.push(n.createElement(r.name,{key:`${r.name}-${p}`},e))}else if(r.voidElement)t.push(`<${r.name} />`);else{const e=h(u,r.children,l);t.push(`<${r.name}>${e}</${r.name}>`)}else if("object"!=typeof y||b)g(y,m,t,p,1!==r.children.length||!m);else{const e=r.children[0]?m:null;e&&t.push(e)}}else if("text"===r.type){const e=i.transWrapTextNodes,a=o?i.unescape(s.services.interpolator.interpolate(r.content,d,s.language)):s.services.interpolator.interpolate(r.content,d,s.language);e?t.push(n.createElement(e,{key:`${r.name}-${p}`},a)):t.push(a)}return t}),[])}return S(h([{dummy:!0,children:e||[]}],p,j(e||[]))[0])}function T(e){let{children:t,count:s,parent:i,i18nKey:r,context:o,tOptions:a={},values:c,defaults:l,components:u,ns:p,i18n:d,t:g,shouldUnescape:h,...m}=e;const y=d||k();if(!y)return f("You will need to pass in an i18next instance by using i18nextReactModule"),t;const b=g||y.t.bind(y)||(e=>e),v={...$(),...y.options&&y.options.react};let x=p||b.ns||y.options&&y.options.defaultNS;x="string"==typeof x?[x]:x||["translation"];const E=C(t,v),N=l||E||v.transEmptyNodeValue||r,{hashTransKey:O}=v,w=r||(O?O(E||N):E||N);y.options&&y.options.interpolation&&y.options.interpolation.defaultVariables&&(c=c&&Object.keys(c).length>0?{...c,...y.options.interpolation.defaultVariables}:{...y.options.interpolation.defaultVariables});const I={...a,context:o||a.context,count:s,...c,defaultValue:N,ns:x},S=w?b(w,I):N;u&&Object.keys(u).forEach((e=>{const t=u[e];"function"==typeof t.type||!t.props||!t.props.children||S.indexOf(`${e}/>`)<0&&S.indexOf(`${e} />`)<0||(u[e]=n.createElement((function(){return n.createElement(n.Fragment,null,t)})))}));const j=R(u||t,S,y,v,I,h),T=void 0!==i?i:v.defaultTransParent;return T?n.createElement(T,m,j):j}const L={type:"3rdParty",init(e){O(e.options.react),w(e)}},P=n.createContext();class V{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function z(e){return n=>new Promise((t=>{const s=A();e.getInitialProps?e.getInitialProps(n).then((e=>{t({...e,...s})})):t(s)}))}function A(){const e=k(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},s={};return e.languages.forEach((t=>{s[t]={},n.forEach((n=>{s[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=s,t.initialLanguage=e.language,t}const B=(e,t)=>{const s=n.useRef();return n.useEffect((()=>{s.current=t?s.current:e}),[e,t]),s.current};function F(e,n,t,s){return e.getFixedT(n,t,s)}function U(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:s}=t,{i18n:i,defaultNS:r}=n.useContext(P)||{},o=s||i||k();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new V),!o){f("You will need to pass in an i18next instance by using initReactI18next");const e=(e,n)=>"string"==typeof n?n:n&&"object"==typeof n&&"string"==typeof n.defaultValue?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,n=[e,{},!1];return n.t=e,n.i18n={},n.ready=!1,n}o.options.react&&void 0!==o.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...$(),...o.options.react,...t},{useSuspense:c,keyPrefix:l}=a;let u=e||r||o.options&&o.options.defaultNS;u="string"==typeof u?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const p=(o.isInitialized||o.initializedStoreOnce)&&u.every((e=>function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,s)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))return!1}}):function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=n.languages[0],i=!!n.options&&n.options.fallbackLng,r=n.languages[n.languages.length-1];if("cimode"===s.toLowerCase())return!0;const o=(e,t)=>{const s=n.services.backendConnector.state[`${e}|${t}`];return-1===s||2===s};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e)||!n.hasResourceBundle(s,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!o(s,e)||i&&!o(r,e)))}(e,n,t):(f("i18n.languages were undefined or empty",n.languages),!0)}(e,o,a))),d=function(e,t,s,i){return n.useCallback(F(e,t,s,i),[e,t,s,i])}(o,t.lng||null,"fallback"===a.nsMode?u:u[0],l),g=()=>d,y=()=>F(o,t.lng||null,"fallback"===a.nsMode?u:u[0],l),[b,v]=n.useState(g);let x=u.join();t.lng&&(x=`${t.lng}${x}`);const E=B(x),N=n.useRef(!0);n.useEffect((()=>{const{bindI18n:e,bindI18nStore:n}=a;function s(){N.current&&v(y)}return N.current=!0,p||c||(t.lng?m(o,t.lng,u,(()=>{N.current&&v(y)})):h(o,u,(()=>{N.current&&v(y)}))),p&&E&&E!==x&&N.current&&v(y),e&&o&&o.on(e,s),n&&o&&o.store.on(n,s),()=>{N.current=!1,e&&o&&e.split(" ").forEach((e=>o.off(e,s))),n&&o&&n.split(" ").forEach((e=>o.store.off(e,s)))}}),[o,x]),n.useEffect((()=>{N.current&&p&&v(g)}),[o,l,p]);const O=[b,o,p];if(O.t=b,O.i18n=o,O.ready=p,p)return O;if(!p&&!c)return O;throw new Promise((e=>{t.lng?m(o,t.lng,u,(()=>e())):h(o,u,(()=>e()))}))}function K(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{i18n:i}=s,{i18n:r}=n.useContext(P)||{},o=i||r||k();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce(((e,n)=>(Object.keys(n).forEach((n=>{e.indexOf(n)<0&&e.push(n)})),e)),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),t&&!o.initializedLanguageOnce&&(o.changeLanguage(t),o.initializedLanguageOnce=!0))}e.I18nContext=P,e.I18nextProvider=function(e){let{i18n:t,defaultNS:s,children:i}=e;const r=n.useMemo((()=>({i18n:t,defaultNS:s})),[t,s]);return n.createElement(P.Provider,{value:r},i)},e.Trans=function(e){let{children:t,count:s,parent:i,i18nKey:r,context:o,tOptions:a={},values:c,defaults:l,components:u,ns:p,i18n:d,t:f,shouldUnescape:g,...h}=e;const{i18n:m,defaultNS:y}=n.useContext(P)||{},b=d||m||k(),v=f||b&&b.t.bind(b);return T({children:t,count:s,parent:i,i18nKey:r,context:o,tOptions:a,values:c,defaults:l,components:u,ns:p||v&&v.ns||y||b&&b.options&&b.options.defaultNS,i18n:b,t:f,shouldUnescape:g,...h})},e.TransWithoutContext=T,e.Translation=function(e){const{ns:n,children:t,...s}=e,[i,r,o]=U(n,s);return t(i,{i18n:r,lng:r.language},o)},e.composeInitialProps=z,e.date=()=>"",e.getDefaults=$,e.getI18n=k,e.getInitialProps=A,e.initReactI18next=L,e.number=()=>"",e.plural=()=>"",e.select=()=>"",e.selectOrdinal=()=>"",e.setDefaults=O,e.setI18n=w,e.time=()=>"",e.useSSR=K,e.useTranslation=U,e.withSSR=function(){return function(e){function t(t){let{initialI18nStore:s,initialLanguage:i,...r}=t;return K(s,i),n.createElement(e,{...r})}return t.getInitialProps=z(e),t.displayName=`withI18nextSSR(${y(e)})`,t.WrappedComponent=e,t}},e.withTranslation=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(s){function i(i){let{forwardedRef:r,...o}=i;const[a,c,l]=U(e,{...o,keyPrefix:t.keyPrefix}),u={...o,t:a,i18n:c,tReady:l};return t.withRef&&r?u.ref=r:!t.withRef&&r&&(u.forwardedRef=r),n.createElement(s,u)}i.displayName=`withI18nextTranslation(${y(s)})`,i.WrappedComponent=s;return t.withRef?n.forwardRef(((e,t)=>n.createElement(i,Object.assign({},e,{forwardedRef:t})))):i}}}));
