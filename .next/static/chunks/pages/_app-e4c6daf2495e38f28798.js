_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("esjH"),i=(n("Y++o"),n("dngG"),n("vTQp")),l=(n("sq8H"),a.a.createElement),u=Object(o.withNavigationContext)((function(e){var t=e.fullpage.navigation.slug;return l("header",{className:"page-header"},l("div",{className:"page-header__wrapper"},l("div",{className:"page-header__title"},l(i.a,null),l("div",null,l("h1",null,l("span",null,"Jamal"),l("span",null,"Hamilton")),l("h2",null,"Full-Stack Engineer"),l("small",null,"with 7 years of experience."))),l("nav",null,l(o.Link,{className:""===t?"selected":null,href:"/"},"About Me"),l(o.Link,{className:"page-two"===t?"selected":null,href:"/page-two"},"Experience"),l(o.Link,{className:"page-three"===t?"selected":null,href:"/page-three"},"Skills"),l(o.Link,{className:"page-four"===t?"selected":null,href:"/page-four"},"Portfolio"))))})),c=a.a.createElement,s=function(e){var t=e.children;return c(a.a.Fragment,null,c(u,null),c("main",null,t))},p=n("20a2"),f=n("g4pe"),d=n.n(f),g=a.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(p.useRouter)();return g(o.Provider,{slug:r.route},g(d.a,null,g("title",null,"Fullpage Javascript Navigation HOC with React Awesome Slider"),g("meta",{name:"viewport",content:"width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"}),g("meta",{name:"description",content:"Fullpage navigation HOC with 3D animated transitions built on top of React Awesome Slider. GatsbyJS and NextJS recipes available."}),g("link",{rel:"shortcut icon",href:"/static/favicon.ico"}),g("link",{rel:"stylesheet",href:"/static/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"})),g(s,null,g(t,n)))}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),l=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var l=a.key.slice(a.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var p=a.props[s],d=r[s]||new Set;"name"===s&&i||!d.has(p)?(d.add(p),r[s]=d):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function g(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}g.rewind=function(){};var m=g;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},WAI6:function(e,t){throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nTypeError: Cannot read property 'tapAsync' of undefined\n    at ExternalModuleFactoryPlugin.apply (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\webpack\\lib\\ExternalModuleFactoryPlugin.js:59:39)\n    at F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\webpack\\lib\\ExternalsPlugin.js:30:63\n    at SyncHook.eval [as call] (eval at create (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47168:10), <anonymous>:7:1)\n    at SyncHook.lazyCompileHook (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47119:20)\n    at F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:56924:23\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47182:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47119:20)\n    at Compiler.compile (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:56921:28)\n    at Compiler.runAsChild (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:56587:8)\n    at Object.pitch (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:108:17)")},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),p=function(e){i(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=p},dngG:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("pZJW"),a.a.createElement);t.a=function(){return o("div",{className:"logo-container"},o("span",null),o("span",null),o("span",null))}},esjH:function(e,t,n){var r;r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({2:function(t,n){t.exports=e},7:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=a.a.createContext([{},function(){}]),c=function(e){var t=e.slug,n=e.children,c=function(e){return e.replace(/^\//,"").replace(/\/$/)}(t),s=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useState)({slug:c,goto:c,navigating:!1}),2),p=s[0],f=s[1];return Object(r.useEffect)((function(){f({slug:c,goto:c,navigating:!1})}),[c]),a.a.createElement(u.Provider,{value:[p,function(e){"object"!==l(e)?f(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p,{goto:e.replace(/^\//,"")})):f(e)}]},n)};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){return function(t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(Object(r.useContext)(u),2),o=n[0],i=n[1];return a.a.createElement(e,s({},t,{fullpage:{navigation:o,navigate:i}}))}};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=p((function(e){var t=e.fullpage,n=e.children,r=e.href,o=e.className,i=void 0===o?null:o,l=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["fullpage","children","href","className"]),u=t.navigation,c=t.navigate;return a.a.createElement("a",f({className:i,onClick:function(e){e.preventDefault(),!1===u.navigating&&c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u,{goto:r.replace(/^\//,"")}))},href:r},l),n)}));function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){return e.replace(/^\//,"").replace(/\/$/)},w=function(e){return p((function(t){var n=t.fullpage,r=t.onTransitionReject,o=t.onTransitionStart,i=t.onTransitionEnd,l=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,["fullpage","onTransitionReject","onTransitionStart","onTransitionEnd"]),u=n.navigation,c=n.navigate;return a.a.createElement(e,y({buttons:!0,fillParent:!0,bullets:!1,infinite:!1,onFirstMount:function(){window.addEventListener("popstate",(function(){event.stopPropagation(),event.preventDefault(),event.path&&event.path[0]&&c(v({},u,{pop:!0,goto:j(event.path[0].location.pathname)}))}))},selected:u.goto,onTransitionReject:function(e){!0!==u.navigating&&(c({slug:e.currentMedia.slug,goto:e.currentMedia.slug,navigating:!1}),r&&r(e))},onTransitionStart:function(e){var t=j(window.location.pathname);if("undefined"!=typeof window&&t!==e.nextMedia.slug){if(!1!==u.pop)return void c(v({},u,{pop:!1,goto:t}));window.history.pushState({},"","/".concat(e.nextMedia.slug))}c(v({},u,{slug:u.goto,navigating:!0})),o&&o(e)},onTransitionEnd:function(e){var t=v({},u,{navigating:!1,pop:!1});e.currentMedia.slug!==t.goto&&(t.slug=e.currentMedia.slug,t.goto=e.currentMedia.slug),c(t),i&&i(e);var n=j(window.location.pathname);n!==e.currentMedia.slug&&c(v({},t,{goto:n}))}},l))}))};n.d(t,"Provider",(function(){return c})),n.d(t,"Link",(function(){return m})),n.d(t,"withNavigationContext",(function(){return p})),n.d(t,"withNavigationHandlers",(function(){return w}))}})},e.exports=r(n("q1tI"))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},pZJW:function(e,t){throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nTypeError: Cannot read property 'tapAsync' of undefined\n    at ExternalModuleFactoryPlugin.apply (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\webpack\\lib\\ExternalModuleFactoryPlugin.js:59:39)\n    at F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\webpack\\lib\\ExternalsPlugin.js:30:63\n    at SyncHook.eval [as call] (eval at create (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47168:10), <anonymous>:7:1)\n    at SyncHook.lazyCompileHook (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47119:20)\n    at F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:56924:23\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47182:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:47119:20)\n    at Compiler.compile (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:56921:28)\n    at Compiler.runAsChild (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\next\\dist\\compiled\\webpack\\bundle4.js:56587:8)\n    at Object.pitch (F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:108:17)")},vTQp:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("WAI6"),a.a.createElement);t.a=function(e){var t=e.size,n=void 0===t?72:t;return o("div",{className:"p-2"},o("img",{className:"my-photo",style:{width:"".concat(n,"px"),height:"".concat(n,"px")},src:"/static/11.jpg"}))}}},[[0,0,1,5,14]]]);