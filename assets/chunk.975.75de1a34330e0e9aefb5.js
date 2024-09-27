/*! For license information please see chunk.975.75de1a34330e0e9aefb5.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[975],{961:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N})
var r=n(377),o=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=o.join(","),s="undefined"==typeof Element,a=s?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!s&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(i))
return t&&a.call(e,i)&&r.unshift(e),r.filter(n)},u=function e(t,n,r){for(var o=[],s=Array.from(t);s.length;){var l=s.shift()
if("SLOT"===l.tagName){var c=l.assignedElements(),u=e(c.length?c:l.children,!0,r)
r.flatten?o.push.apply(o,u):o.push({scope:l,candidates:u})}else{a.call(l,i)&&r.filter(l)&&(n||!t.includes(l))&&o.push(l)
var f=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),p=!r.shadowRootFilter||r.shadowRootFilter(l)
if(f&&p){var h=e(!0===f?l.children:f.children,!0,r)
r.flatten?o.push.apply(o,h):o.push({scope:l,candidates:h})}else s.unshift.apply(s,l.children)}}return o},f=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},d=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},v=function(e,t){return!(t.disabled||function(e){return h(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var o=a.call(e,"details>summary:first-of-type")?e.parentElement:e
if(a.call(o,"details:not([open]) *"))return!0
var i=l(e).host,s=(null==i?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return d(e)}else{if("function"==typeof r){for(var c=e;e;){var u=e.parentElement,f=l(e)
if(u&&!u.shadowRoot&&!0===r(u))return d(e)
e=e.assignedSlot?e.assignedSlot:u||f===e.ownerDocument?u:f.host}e=c}if(s)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!a.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(function(e){return function(e){return h(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||l(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!o||o===e}(e)}(t)||f(t)<0||!v(e,t))},m=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},b=function e(t){var n=[],r=[]
return t.forEach((function(t,o){var i=!!t.scope,s=i?t.scope:t,a=f(s,i),l=i?e(t.candidates):s
0===a?i?n.push.apply(n,l):n.push(s):r.push({documentOrder:o,tabIndex:a,item:t,isScope:i,content:l})})),r.sort(p).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},y=function(e,t){var n
return n=(t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:m}):c(e,t.includeContainer,g.bind(null,t)),b(n)},k=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,i)&&g(t,e)},_=o.concat("iframe").join(","),w=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,_)&&v(t,e)}
function j(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?j(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S,x=(S=[],{activateTrap:function(e){if(S.length>0){var t=S[S.length-1]
t!==e&&t.pause()}var n=S.indexOf(e);-1===n||S.splice(n,1),S.push(e)},deactivateTrap:function(e){var t=S.indexOf(e);-1!==t&&S.splice(t,1),S.length>0&&S[S.length-1].unpause()}}),M=function(e){return setTimeout(e,0)},O=function(e,t){var n=-1
return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},E=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},T=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},I=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=A({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},s=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},a=function(e){return i.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes
return n.contains(e)||r.find((function(t){return t===e}))}))},l=function(e){var t=o[e]
if("function"==typeof t){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s]
t=t.apply(void 0,i)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t
if("string"==typeof t&&!(a=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return a},f=function(){var e=l("initialFocus")
if(!1===e)return!1
if(void 0===e)if(a(r.activeElement)>=0)e=r.activeElement
else{var t=i.tabbableGroups[0]
e=t&&t.firstTabbableNode||l("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},p=function(){if(i.containerGroups=i.containers.map((function(e){var t,n,r=y(e,o.tabbableOptions),i=(t=e,(n=(n=o.tabbableOptions)||{}).getShadowRoot?u([t],n.includeContainer,{filter:v.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):c(t,n.includeContainer,v.bind(null,n)))
return{container:e,tabbableNodes:r,focusableNodes:i,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=i.findIndex((function(t){return t===e}))
if(!(n<0))return t?i.slice(n+1).find((function(e){return k(e,o.tabbableOptions)})):i.slice(0,n).reverse().find((function(e){return k(e,o.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},h=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},d=function(e){var t=l("setReturnFocus",e)
return t||!1!==t&&e},g=function(e){var t=T(e)
a(t)>=0||(E(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!w(t,o.tabbableOptions)}):E(o.allowOutsideClick,e)||e.preventDefault())},m=function(e){var t=T(e),n=a(t)>=0
n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),h(i.mostRecentlyFocusedNode||f()))},b=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==E(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=T(e)
p()
var n=null
if(i.tabbableGroups.length>0){var r=a(t),s=r>=0?i.containerGroups[r]:void 0
if(r<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var c=O(i.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(c<0&&(s.container===t||w(t,o.tabbableOptions)&&!k(t,o.tabbableOptions)&&!s.nextTabbableNode(t,!1))&&(c=r),c>=0){var u=0===c?i.tabbableGroups.length-1:c-1
n=i.tabbableGroups[u].lastTabbableNode}}else{var f=O(i.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(f<0&&(s.container===t||w(t,o.tabbableOptions)&&!k(t,o.tabbableOptions)&&!s.nextTabbableNode(t))&&(f=r),f>=0){var d=f===i.tabbableGroups.length-1?0:f+1
n=i.tabbableGroups[d].firstTabbableNode}}}else n=l("fallbackFocus")
n&&(e.preventDefault(),h(n))}(e)},_=function(e){var t=T(e)
a(t)>=0||E(o.clickOutsideDeactivates,e)||E(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},j=function(){if(i.active)return x.activateTrap(n),i.delayInitialFocusTimer=o.delayInitialFocus?M((function(){h(f())})):h(f()),r.addEventListener("focusin",m,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",_,{capture:!0,passive:!1}),r.addEventListener("keydown",b,{capture:!0,passive:!1}),n},C=function(){if(i.active)return r.removeEventListener("focusin",m,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",_,!0),r.removeEventListener("keydown",b,!0),n}
return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this
var t=s(e,"onActivate"),n=s(e,"onPostActivate"),o=s(e,"checkCanFocusTrap")
o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var a=function(){o&&p(),j(),n&&n()}
return o?(o(i.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!i.active)return this
var t=A({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},e)
clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,C(),i.active=!1,i.paused=!1,x.deactivateTrap(n)
var r=s(t,"onDeactivate"),a=s(t,"onPostDeactivate"),l=s(t,"checkCanReturnFocus"),c=s(t,"returnFocus","returnFocusOnDeactivate")
r&&r()
var u=function(){M((function(){c&&h(d(i.nodeFocusedBeforeActivation)),a&&a()}))}
return c&&l?(l(d(i.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,C()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,p(),j(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return i.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),i.active&&p(),this}}).updateContainerElements(e),n}
let P
try{P=(0,r.capabilities)("3.22")}catch{P=(0,r.capabilities)("3.13")}var N=(0,r.setModifierManager)((()=>({capabilities:P,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,{named:{isActive:n,isPaused:r,shouldSelfFocus:o,focusTrapOptions:i,additionalElements:s,_createFocusTrap:a}}){e.focusTrapOptions={...i}||{},void 0!==n&&(e.isActive=n),void 0!==r&&(e.isPaused=r),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&o&&(e.focusTrapOptions.initialFocus=t)
let l=I
a&&(l=a),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=l(void 0!==s?[t,...s]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,{named:t}){const n=t.focusTrapOptions||{}
if(e.isActive&&!t.isActive){const{returnFocusOnDeactivate:t}=n,r=void 0===t
e.focusTrap.deactivate({returnFocus:r})}else!e.isActive&&t.isActive&&e.focusTrap.activate()
e.isPaused&&!t.isPaused?e.focusTrap.unpause():!e.isPaused&&t.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=n,void 0!==t.isActive&&(e.isActive=t.isActive),void 0!==t.isPaused&&(e.isPaused=t.isPaused)},destroyModifier({focusTrap:e}){e.deactivate()}})),class{})},432:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l,modifier:()=>u})
var r=n(294),o=n(377),i=n(130)
function s(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a{constructor(e){s(this,"capabilities",(0,o.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t)
r.instance.modify(t,n.positional,n.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,i.destroy)(e)}}class l{constructor(e,t){(0,r.setOwner)(this,e)}modify(e,t,n){}}(0,o.setModifierManager)((e=>new a(e)),l)
const c=new class{constructor(){s(this,"capabilities",(0,o.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t),{positional:o,named:i}=n,s=e.instance(t,o,i)
"function"==typeof s&&(r.teardown=s)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const n=e.instance(e.element,t.positional,t.named)
"function"==typeof n&&(e.teardown=n)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function u(e,t){return e.toString=()=>t?.name||e.name,(0,o.setModifierManager)((()=>c),e)}},782:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s})
var r=n(336),o=n.n(r),i=n(348)
class s extends(o()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!1===(0,i.A)(e[t]))return e[t]
return e[e.length-1]}}},233:(e,t,n)=>{function r(e,t){return e===t}n.r(t),n.d(t,{default:()=>r})},324:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}n.r(t),n.d(t,{default:()=>r})},609:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}n.r(t),n.d(t,{default:()=>r})},79:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o})
var r=n(389)
function o(...e){return e.every(r.isArray)}},151:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.isEmpty})
var r=n(553)},250:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.isEqual})
var r=n(553)},83:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}n.r(t),n.d(t,{default:()=>r})},752:(e,t,n)=>{function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}n.r(t),n.d(t,{default:()=>r})},93:(e,t,n)=>{function r(e,t){return e!==t}n.r(t),n.d(t,{default:()=>r})},550:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o})
var r=n(348)
function o(...e){return e.every((e=>!(0,r.A)(e)))}},594:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s})
var r=n(348),o=n(336),i=n.n(o)
class s extends(i()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!0===(0,r.A)(e[t]))return e[t]
return e[e.length-1]}}},210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o})
var r=n(348)
function o(e,t){return(0,r.A)(e)!==(0,r.A)(t)}},348:(e,t,n)=>{n.d(t,{A:()=>o})
var r=n(389)
function o(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,r.isArray)(e)?0!==e.length:!!e}},904:(e,t)=>{function n(e){let t,n
return"function"==typeof e?t=e:(t=e.get,n=e.set),function(e,r){let o={}
return void 0!==t&&(o.get=function(){return t.call(this,this,r)}),void 0!==n&&(o.set=function(e){return n.call(this,this,r,e)}),o}}function r(e,t){let n=t.split("."),r=e
for(let o of n){if(null==r)break
r="function"==typeof r.get?r.get(o):r[o]}return r}function o(e,t){return t.map((t=>r(e,t)))}function i(e,t,n){let o=t.substr(0,t.lastIndexOf(".")),i=t.substr(t.lastIndexOf(".")+1),s=o?r(e,o):e
"function"==typeof s.set?s.set(i,n):s[i]=n}function s(e){return!Boolean(e)||!(!Array.isArray(e)||0!==e.length)}function a(e){let t=new Set
return e.forEach((e=>t.add(e))),t}function l(e,t){return n((n=>r(n,e).filter(t)))}function c(e,t){return n((n=>r(n,e).map(t)))}function u(e,t){return n((n=>r(n,e).slice().sort(t)))}function f(...e){return n((t=>{let n=o(t,e),r=new Set
for(let e of n)e.forEach((e=>r.add(e)))
return function(e){if(e.values)return Array.from(e)
let t=[]
return e.forEach((e=>t.push(e))),t}(r)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,t.alias=function(e){return n({get:t=>r(t,e),set(t,n,r){i(t,e,r)}})},t.deprecatingAlias=function(e,t){return n({get:(n,o)=>(console.warn(`You got ${n}#${String(o)}, but that value has been deprecated: ${t}`),r(n,e)),set(n,r,o){console.warn(`You set ${n}#${String(r)}, but that value has been deprecated: ${t}`),i(n,e,o)}})},t.reads=function(e,t){return n((n=>{let o=r(n,e)
return null==o&&(o="function"==typeof t?t():t),o}))},t.overridableReads=function(e){return n({get:t=>r(t,e),set(e,t,n){Object.defineProperty(e,t,{writable:!0,configurable:!0,value:n})}})},t.and=function(...e){return n((t=>o(t,e).reduce(((e,t)=>e&&t),!0)))},t.bool=function(e){return n((t=>Boolean(r(t,e))))},t.empty=function(e){return n((t=>s(r(t,e))))},t.equal=function(e,t){return n((n=>r(n,e)===t))},t.gt=function(e,t){return n((n=>r(n,e)>t))},t.gte=function(e,t){return n((n=>r(n,e)>=t))},t.not=function(e){return n((t=>!r(t,e)))},t.notEmpty=function(e){return n((t=>!s(r(t,e))))},t.match=function(e,t){return n((n=>t.test(r(n,e))))},t.nullish=function(e){return n((t=>null==r(t,e)))},t.or=function(...e){return n((t=>o(t,e).reduce(((e,t)=>e||t),!1)))},t.lt=function(e,t){return n((n=>r(n,e)<t))},t.lte=function(e,t){return n((n=>r(n,e)<=t))},t.collect=function(...e){return n((t=>o(t,e)))},t.diff=function(...e){return n((t=>{let n=o(t,e),r=n.shift()
for(let e of n){let t=a(e)
r=r.filter((e=>!t.has(e)))}return r}))},t.filter=l,t.filterBy=function(e,t,n){return l(e,void 0!==n?e=>e[t]===n:e=>Boolean(e[t]))},t.intersect=function(...e){return n((t=>{let n=o(t,e),r=n.shift()
for(let e of n){let t=a(e)
r=r.filter((e=>t.has(e)))}return r}))},t.map=c,t.mapBy=function(e,t){return c(e,(e=>e[t]))},t.max=function(e){return n((t=>Math.max(...r(t,e))))},t.min=function(e){return n((t=>Math.min(...r(t,e))))},t.sort=u,t.sortBy=function(e,t,n=!0){return u(e,((e,r)=>e[t]<r[t]?n?-1:1:e[t]>r[t]?n?1:-1:0))},t.sum=function(e){return n((t=>r(t,e).reduce(((e,t)=>e+t),0)))},t.union=f,t.unique=function(e){return f(e)},t.uniqueBy=function(e,t){return n((n=>{let o=r(n,e),i=new Set,s=[]
return o.forEach((e=>{let n=e[t]
i.has(n)||(i.add(n),s.push(e))})),s}))}},950:e=>{e.exports=e=>{const t=e.match(/^[ \t]*(?=\S)/gm)
return t?t.reduce(((e,t)=>Math.min(e,t.length)),1/0):0}},890:(e,t,n)=>{var r
function o(e){return(r=r||document.createElement("textarea")).innerHTML="&"+e+";",r.value}n.r(t),n.d(t,{Remarkable:()=>Me,utils:()=>_})
var i=Object.prototype.hasOwnProperty
function s(e,t){return!!e&&i.call(e,t)}function a(e){return[].slice.call(arguments,1).forEach((function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object")
Object.keys(t).forEach((function(n){e[n]=t[n]}))}})),e}var l=/\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g
function c(e){return e.indexOf("\\")<0?e:e.replace(l,"$1")}function u(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||!(65535&~e&&65534!=(65535&e))||e>=0&&e<=8||11===e||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function f(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e)
return String.fromCharCode(t,n)}return String.fromCharCode(e)}var p=/&([a-z#][a-z0-9]{1,31});/gi,h=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i
function d(e,t){var n=0,r=o(t)
return t!==r?r:35===t.charCodeAt(0)&&h.test(t)&&u(n="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10))?f(n):e}function v(e){return e.indexOf("&")<0?e:e.replace(p,d)}var g=/[&<>"]/,m=/[&<>"]/g,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}
function y(e){return b[e]}function k(e){return g.test(e)?e.replace(m,y):e}var _=Object.freeze({isString:function(e){return"[object String]"===function(e){return Object.prototype.toString.call(e)}(e)},has:s,assign:a,unescapeMd:c,isValidEntityCode:u,fromCodePoint:f,replaceEntities:v,escapeHtml:k}),w={}
function j(e,t){return++t>=e.length-2?t:"paragraph_open"===e[t].type&&e[t].tight&&"inline"===e[t+1].type&&0===e[t+1].content.length&&"paragraph_close"===e[t+2].type&&e[t+2].tight?j(e,t+2):t}w.blockquote_open=function(){return"<blockquote>\n"},w.blockquote_close=function(e,t){return"</blockquote>"+A(e,t)},w.code=function(e,t){return e[t].block?"<pre><code>"+k(e[t].content)+"</code></pre>"+A(e,t):"<code>"+k(e[t].content)+"</code>"},w.fence=function(e,t,n,r,o){var i,a,l=e[t],u="",f=n.langPrefix
if(l.params){if(a=(i=l.params.split(/\s+/g)).join(" "),s(o.rules.fence_custom,i[0]))return o.rules.fence_custom[i[0]](e,t,n,r,o)
u=' class="'+f+k(v(c(a)))+'"'}return"<pre><code"+u+">"+(n.highlight&&n.highlight.apply(n.highlight,[l.content].concat(i))||k(l.content))+"</code></pre>"+A(e,t)},w.fence_custom={},w.heading_open=function(e,t){return"<h"+e[t].hLevel+">"},w.heading_close=function(e,t){return"</h"+e[t].hLevel+">\n"},w.hr=function(e,t,n){return(n.xhtmlOut?"<hr />":"<hr>")+A(e,t)},w.bullet_list_open=function(){return"<ul>\n"},w.bullet_list_close=function(e,t){return"</ul>"+A(e,t)},w.list_item_open=function(){return"<li>"},w.list_item_close=function(){return"</li>\n"},w.ordered_list_open=function(e,t){var n=e[t]
return"<ol"+(n.order>1?' start="'+n.order+'"':"")+">\n"},w.ordered_list_close=function(e,t){return"</ol>"+A(e,t)},w.paragraph_open=function(e,t){return e[t].tight?"":"<p>"},w.paragraph_close=function(e,t){var n=!(e[t].tight&&t&&"inline"===e[t-1].type&&!e[t-1].content)
return(e[t].tight?"":"</p>")+(n?A(e,t):"")},w.link_open=function(e,t,n){var r=e[t].title?' title="'+k(v(e[t].title))+'"':"",o=n.linkTarget?' target="'+n.linkTarget+'"':""
return'<a href="'+k(e[t].href)+'"'+r+o+">"},w.link_close=function(){return"</a>"},w.image=function(e,t,n){var r=' src="'+k(e[t].src)+'"',o=e[t].title?' title="'+k(v(e[t].title))+'"':""
return"<img"+r+' alt="'+(e[t].alt?k(v(c(e[t].alt))):"")+'"'+o+(n.xhtmlOut?" /":"")+">"},w.table_open=function(){return"<table>\n"},w.table_close=function(){return"</table>\n"},w.thead_open=function(){return"<thead>\n"},w.thead_close=function(){return"</thead>\n"},w.tbody_open=function(){return"<tbody>\n"},w.tbody_close=function(){return"</tbody>\n"},w.tr_open=function(){return"<tr>"},w.tr_close=function(){return"</tr>\n"},w.th_open=function(e,t){var n=e[t]
return"<th"+(n.align?' style="text-align:'+n.align+'"':"")+">"},w.th_close=function(){return"</th>"},w.td_open=function(e,t){var n=e[t]
return"<td"+(n.align?' style="text-align:'+n.align+'"':"")+">"},w.td_close=function(){return"</td>"},w.strong_open=function(){return"<strong>"},w.strong_close=function(){return"</strong>"},w.em_open=function(){return"<em>"},w.em_close=function(){return"</em>"},w.del_open=function(){return"<del>"},w.del_close=function(){return"</del>"},w.ins_open=function(){return"<ins>"},w.ins_close=function(){return"</ins>"},w.mark_open=function(){return"<mark>"},w.mark_close=function(){return"</mark>"},w.sub=function(e,t){return"<sub>"+k(e[t].content)+"</sub>"},w.sup=function(e,t){return"<sup>"+k(e[t].content)+"</sup>"},w.hardbreak=function(e,t,n){return n.xhtmlOut?"<br />\n":"<br>\n"},w.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?"<br />\n":"<br>\n":"\n"},w.text=function(e,t){return k(e[t].content)},w.htmlblock=function(e,t){return e[t].content},w.htmltag=function(e,t){return e[t].content},w.abbr_open=function(e,t){return'<abbr title="'+k(v(e[t].title))+'">'},w.abbr_close=function(){return"</abbr>"},w.footnote_ref=function(e,t){var n=Number(e[t].id+1).toString(),r="fnref"+n
return e[t].subId>0&&(r+=":"+e[t].subId),'<sup class="footnote-ref"><a href="#fn'+n+'" id="'+r+'">['+n+"]</a></sup>"},w.footnote_block_open=function(e,t,n){return(n.xhtmlOut?'<hr class="footnotes-sep" />\n':'<hr class="footnotes-sep">\n')+'<section class="footnotes">\n<ol class="footnotes-list">\n'},w.footnote_block_close=function(){return"</ol>\n</section>\n"},w.footnote_open=function(e,t){return'<li id="fn'+Number(e[t].id+1).toString()+'"  class="footnote-item">'},w.footnote_close=function(){return"</li>\n"},w.footnote_anchor=function(e,t){var n="fnref"+Number(e[t].id+1).toString()
return e[t].subId>0&&(n+=":"+e[t].subId),' <a href="#'+n+'" class="footnote-backref">↩</a>'},w.dl_open=function(){return"<dl>\n"},w.dt_open=function(){return"<dt>"},w.dd_open=function(){return"<dd>"},w.dl_close=function(){return"</dl>\n"},w.dt_close=function(){return"</dt>\n"},w.dd_close=function(){return"</dd>\n"}
var A=w.getBreak=function(e,t){return(t=j(e,t))<e.length&&"list_item_close"===e[t].type?"":"\n"}
function C(){this.rules=a({},w),this.getBreak=w.getBreak}function S(){this.__rules__=[],this.__cache__=null}function x(e,t,n,r,o){this.src=e,this.env=r,this.options=n,this.parser=t,this.tokens=o,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache=[],this.isInLabel=!1,this.linkLevel=0,this.linkContent="",this.labelUnmatchedScopes=0}function M(e,t){var n,r,o,i=-1,s=e.posMax,a=e.pos,l=e.isInLabel
if(e.isInLabel)return-1
if(e.labelUnmatchedScopes)return e.labelUnmatchedScopes--,-1
for(e.pos=t+1,e.isInLabel=!0,n=1;e.pos<s;){if(91===(o=e.src.charCodeAt(e.pos)))n++
else if(93===o&&0==--n){r=!0
break}e.parser.skipToken(e)}return r?(i=e.pos,e.labelUnmatchedScopes=0):e.labelUnmatchedScopes=n-1,e.pos=a,e.isInLabel=l,i}function O(e,t,n,r){var o,i,s,a,l,c
if(42!==e.charCodeAt(0))return-1
if(91!==e.charCodeAt(1))return-1
if(-1===e.indexOf("]:"))return-1
if((i=M(o=new x(e,t,n,r,[]),1))<0||58!==e.charCodeAt(i+1))return-1
for(a=o.posMax,s=i+2;s<a&&10!==o.src.charCodeAt(s);s++);return l=e.slice(2,i),0===(c=e.slice(i+2,s).trim()).length?-1:(r.abbreviations||(r.abbreviations={}),void 0===r.abbreviations[":"+l]&&(r.abbreviations[":"+l]=c),s)}function E(e){var t=v(e)
try{t=decodeURI(t)}catch(e){}return encodeURI(t)}function T(e,t){var n,r,o,i=t,s=e.posMax
if(60===e.src.charCodeAt(t)){for(t++;t<s;){if(10===(n=e.src.charCodeAt(t)))return!1
if(62===n)return o=E(c(e.src.slice(i+1,t))),!!e.parser.validateLink(o)&&(e.pos=t+1,e.linkContent=o,!0)
92===n&&t+1<s?t+=2:t++}return!1}for(r=0;t<s&&32!==(n=e.src.charCodeAt(t))&&!(n<32||127===n);)if(92===n&&t+1<s)t+=2
else{if(40===n&&++r>1)break
if(41===n&&--r<0)break
t++}return i!==t&&(o=c(e.src.slice(i,t)),!!e.parser.validateLink(o)&&(e.linkContent=o,e.pos=t,!0))}function I(e,t){var n,r=t,o=e.posMax,i=e.src.charCodeAt(t)
if(34!==i&&39!==i&&40!==i)return!1
for(t++,40===i&&(i=41);t<o;){if((n=e.src.charCodeAt(t))===i)return e.pos=t+1,e.linkContent=c(e.src.slice(r+1,t)),!0
92===n&&t+1<o?t+=2:t++}return!1}function P(e){return e.trim().replace(/\s+/g," ").toUpperCase()}function N(e,t,n,r){var o,i,s,a,l,c,u,f,p
if(91!==e.charCodeAt(0))return-1
if(-1===e.indexOf("]:"))return-1
if((i=M(o=new x(e,t,n,r,[]),0))<0||58!==e.charCodeAt(i+1))return-1
for(a=o.posMax,s=i+2;s<a&&(32===(l=o.src.charCodeAt(s))||10===l);s++);if(!T(o,s))return-1
for(u=o.linkContent,c=s=o.pos,s+=1;s<a&&(32===(l=o.src.charCodeAt(s))||10===l);s++);for(s<a&&c!==s&&I(o,s)?(f=o.linkContent,s=o.pos):(f="",s=c);s<a&&32===o.src.charCodeAt(s);)s++
return s<a&&10!==o.src.charCodeAt(s)?-1:(p=P(e.slice(1,i)),void 0===r.references[p]&&(r.references[p]={title:f,href:u}),s)}C.prototype.renderInline=function(e,t,n){for(var r=this.rules,o=e.length,i=0,s="";o--;)s+=r[e[i].type](e,i++,t,n,this)
return s},C.prototype.render=function(e,t,n){for(var r=this.rules,o=e.length,i=-1,s="";++i<o;)"inline"===e[i].type?s+=this.renderInline(e[i].children,t,n):s+=r[e[i].type](e,i,t,n,this)
return s},S.prototype.__find__=function(e){for(var t=this.__rules__.length,n=-1;t--;)if(this.__rules__[++n].name===e)return n
return-1},S.prototype.__compile__=function(){var e=this,t=[""]
e.__rules__.forEach((function(e){e.enabled&&e.alt.forEach((function(e){t.indexOf(e)<0&&t.push(e)}))})),e.__cache__={},t.forEach((function(t){e.__cache__[t]=[],e.__rules__.forEach((function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))}))}))},S.prototype.at=function(e,t,n){var r=this.__find__(e),o=n||{}
if(-1===r)throw new Error("Parser rule not found: "+e)
this.__rules__[r].fn=t,this.__rules__[r].alt=o.alt||[],this.__cache__=null},S.prototype.before=function(e,t,n,r){var o=this.__find__(e),i=r||{}
if(-1===o)throw new Error("Parser rule not found: "+e)
this.__rules__.splice(o,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},S.prototype.after=function(e,t,n,r){var o=this.__find__(e),i=r||{}
if(-1===o)throw new Error("Parser rule not found: "+e)
this.__rules__.splice(o+1,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},S.prototype.push=function(e,t,n){var r=n||{}
this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},S.prototype.enable=function(e,t){e=Array.isArray(e)?e:[e],t&&this.__rules__.forEach((function(e){e.enabled=!1})),e.forEach((function(e){var t=this.__find__(e)
if(t<0)throw new Error("Rules manager: invalid rule name "+e)
this.__rules__[t].enabled=!0}),this),this.__cache__=null},S.prototype.disable=function(e){(e=Array.isArray(e)?e:[e]).forEach((function(e){var t=this.__find__(e)
if(t<0)throw new Error("Rules manager: invalid rule name "+e)
this.__rules__[t].enabled=!1}),this),this.__cache__=null},S.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},x.prototype.pushPending=function(){this.tokens.push({type:"text",content:this.pending,level:this.pendingLevel}),this.pending=""},x.prototype.push=function(e){this.pending&&this.pushPending(),this.tokens.push(e),this.pendingLevel=this.level},x.prototype.cacheSet=function(e,t){for(var n=this.cache.length;n<=e;n++)this.cache.push(0)
this.cache[e]=t},x.prototype.cacheGet=function(e){return e<this.cache.length?this.cache[e]:0}
var L=" \n()[]'\".,!?-"
function F(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")}var R=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,z=/\((c|tm|r|p)\)/gi,q={c:"©",r:"®",p:"§",tm:"™"},D=/['"]/,V=/['"]/g,$=/[-\s()\[\]]/
function B(e,t){return!(t<0||t>=e.length||$.test(e[t]))}function G(e,t,n){return e.substr(0,t)+n+e.substr(t+1)}var W=[["block",function(e){e.inlineMode?e.tokens.push({type:"inline",content:e.src.replace(/\n/g," ").trim(),level:0,lines:[0,1],children:[]}):e.block.parse(e.src,e.options,e.env,e.tokens)}],["abbr",function(e){var t,n,r,o,i=e.tokens
if(!e.inlineMode)for(t=1,n=i.length-1;t<n;t++)if("paragraph_open"===i[t-1].type&&"inline"===i[t].type&&"paragraph_close"===i[t+1].type){for(r=i[t].content;r.length&&!((o=O(r,e.inline,e.options,e.env))<0);)r=r.slice(o).trim()
i[t].content=r,r.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}],["references",function(e){var t,n,r,o,i=e.tokens
if(e.env.references=e.env.references||{},!e.inlineMode)for(t=1,n=i.length-1;t<n;t++)if("inline"===i[t].type&&"paragraph_open"===i[t-1].type&&"paragraph_close"===i[t+1].type){for(r=i[t].content;r.length&&!((o=N(r,e.inline,e.options,e.env))<0);)r=r.slice(o).trim()
i[t].content=r,r.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}],["inline",function(e){var t,n,r,o=e.tokens
for(n=0,r=o.length;n<r;n++)"inline"===(t=o[n]).type&&e.inline.parse(t.content,e.options,e.env,t.children)}],["footnote_tail",function(e){var t,n,r,o,i,s,a,l,c,u=0,f=!1,p={}
if(e.env.footnotes&&(e.tokens=e.tokens.filter((function(e){return"footnote_reference_open"===e.type?(f=!0,l=[],c=e.label,!1):"footnote_reference_close"===e.type?(f=!1,p[":"+c]=l,!1):(f&&l.push(e),!f)})),e.env.footnotes.list)){for(s=e.env.footnotes.list,e.tokens.push({type:"footnote_block_open",level:u++}),t=0,n=s.length;t<n;t++){for(e.tokens.push({type:"footnote_open",id:t,level:u++}),s[t].tokens?((a=[]).push({type:"paragraph_open",tight:!1,level:u++}),a.push({type:"inline",content:"",level:u,children:s[t].tokens}),a.push({type:"paragraph_close",tight:!1,level:--u})):s[t].label&&(a=p[":"+s[t].label]),e.tokens=e.tokens.concat(a),i="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,o=s[t].count>0?s[t].count:1,r=0;r<o;r++)e.tokens.push({type:"footnote_anchor",id:t,subId:r,level:u})
i&&e.tokens.push(i),e.tokens.push({type:"footnote_close",level:--u})}e.tokens.push({type:"footnote_block_close",level:--u})}}],["abbr2",function(e){var t,n,r,o,i,s,a,l,c,u,f,p,h=e.tokens
if(e.env.abbreviations)for(e.env.abbrRegExp||(p="(^|["+L.split("").map(F).join("")+"])("+Object.keys(e.env.abbreviations).map((function(e){return e.substr(1)})).sort((function(e,t){return t.length-e.length})).map(F).join("|")+")($|["+L.split("").map(F).join("")+"])",e.env.abbrRegExp=new RegExp(p,"g")),u=e.env.abbrRegExp,n=0,r=h.length;n<r;n++)if("inline"===h[n].type)for(t=(o=h[n].children).length-1;t>=0;t--)if("text"===(i=o[t]).type){for(l=0,s=i.content,u.lastIndex=0,c=i.level,a=[];f=u.exec(s);)u.lastIndex>l&&a.push({type:"text",content:s.slice(l,f.index+f[1].length),level:c}),a.push({type:"abbr_open",title:e.env.abbreviations[":"+f[2]],level:c++}),a.push({type:"text",content:f[2],level:c}),a.push({type:"abbr_close",level:--c}),l=u.lastIndex-f[3].length
a.length&&(l<s.length&&a.push({type:"text",content:s.slice(l),level:c}),h[n].children=o=[].concat(o.slice(0,t),a,o.slice(t+1)))}}],["replacements",function(e){var t,n,r,o,i,s
if(e.options.typographer)for(i=e.tokens.length-1;i>=0;i--)if("inline"===e.tokens[i].type)for(t=(o=e.tokens[i].children).length-1;t>=0;t--)"text"===(n=o[t]).type&&(r=(s=r=n.content).indexOf("(")<0?s:s.replace(z,(function(e,t){return q[t.toLowerCase()]})),R.test(r)&&(r=r.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),n.content=r)}],["smartquotes",function(e){var t,n,r,o,i,s,a,l,c,u,f,p,h,d,v,g,m
if(e.options.typographer)for(m=[],v=e.tokens.length-1;v>=0;v--)if("inline"===e.tokens[v].type)for(g=e.tokens[v].children,m.length=0,t=0;t<g.length;t++)if("text"===(n=g[t]).type&&!D.test(n.text)){for(a=g[t].level,h=m.length-1;h>=0&&!(m[h].level<=a);h--);m.length=h+1,i=0,s=(r=n.content).length
e:for(;i<s&&(V.lastIndex=i,o=V.exec(r));)if(l=!B(r,o.index-1),i=o.index+1,d="'"===o[0],(c=!B(r,i))||l){if(f=!c,p=!l)for(h=m.length-1;h>=0&&(u=m[h],!(m[h].level<a));h--)if(u.single===d&&m[h].level===a){u=m[h],d?(g[u.token].content=G(g[u.token].content,u.pos,e.options.quotes[2]),n.content=G(n.content,o.index,e.options.quotes[3])):(g[u.token].content=G(g[u.token].content,u.pos,e.options.quotes[0]),n.content=G(n.content,o.index,e.options.quotes[1])),m.length=h
continue e}f?m.push({token:t,pos:o.index,single:d,level:a}):p&&d&&(n.content=G(n.content,o.index,"’"))}else d&&(n.content=G(n.content,o.index,"’"))}}]]
function Z(){this.options={},this.ruler=new S
for(var e=0;e<W.length;e++)this.ruler.push(W[e][0],W[e][1])}function U(e,t,n,r,o){var i,s,a,l,c,u,f
for(this.src=e,this.parser=t,this.options=n,this.env=r,this.tokens=o,this.bMarks=[],this.eMarks=[],this.tShift=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",u=0,f=!1,a=l=u=0,c=(s=this.src).length;l<c;l++){if(i=s.charCodeAt(l),!f){if(32===i){u++
continue}f=!0}10!==i&&l!==c-1||(10!==i&&l++,this.bMarks.push(a),this.eMarks.push(l),this.tShift.push(u),f=!1,u=0,a=l+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.lineMax=this.bMarks.length-1}function J(e,t){var n,r,o
return(r=e.bMarks[t]+e.tShift[t])>=(o=e.eMarks[t])||42!==(n=e.src.charCodeAt(r++))&&45!==n&&43!==n||r<o&&32!==e.src.charCodeAt(r)?-1:r}function K(e,t){var n,r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t]
if(r+1>=o)return-1
if((n=e.src.charCodeAt(r++))<48||n>57)return-1
for(;;){if(r>=o)return-1
if(!((n=e.src.charCodeAt(r++))>=48&&n<=57)){if(41===n||46===n)break
return-1}}return r<o&&32!==e.src.charCodeAt(r)?-1:r}Z.prototype.process=function(e){var t,n,r
for(t=0,n=(r=this.ruler.getRules("")).length;t<n;t++)r[t](e)},U.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},U.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},U.prototype.skipSpaces=function(e){for(var t=this.src.length;e<t&&32===this.src.charCodeAt(e);e++);return e},U.prototype.skipChars=function(e,t){for(var n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},U.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e
for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1
return e},U.prototype.getLines=function(e,t,n,r){var o,i,s,a,l,c=e
if(e>=t)return""
if(c+1===t)return i=this.bMarks[c]+Math.min(this.tShift[c],n),s=r?this.eMarks[c]+1:this.eMarks[c],this.src.slice(i,s)
for(a=new Array(t-e),o=0;c<t;c++,o++)(l=this.tShift[c])>n&&(l=n),l<0&&(l=0),i=this.bMarks[c]+l,s=c+1<t||r?this.eMarks[c]+1:this.eMarks[c],a[o]=this.src.slice(i,s)
return a.join("")}
var Y={};["article","aside","button","blockquote","body","canvas","caption","col","colgroup","dd","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","iframe","li","map","object","ol","output","p","pre","progress","script","section","style","table","tbody","td","textarea","tfoot","th","tr","thead","ul","video"].forEach((function(e){Y[e]=!0}))
var H=/^<([a-zA-Z]{1,15})[\s\/>]/,X=/^<\/([a-zA-Z]{1,15})[\s>]/
function Q(e,t){var n=e.bMarks[t]+e.blkIndent,r=e.eMarks[t]
return e.src.substr(n,r-n)}function ee(e,t){var n,r,o=e.bMarks[t]+e.tShift[t],i=e.eMarks[t]
return o>=i||126!==(r=e.src.charCodeAt(o++))&&58!==r||o===(n=e.skipSpaces(o))||n>=i?-1:n}var te=[["code",function(e,t,n){var r,o
if(e.tShift[t]-e.blkIndent<4)return!1
for(o=r=t+1;r<n;)if(e.isEmpty(r))r++
else{if(!(e.tShift[r]-e.blkIndent>=4))break
o=++r}return e.line=r,e.tokens.push({type:"code",content:e.getLines(t,o,4+e.blkIndent,!0),block:!0,lines:[t,e.line],level:e.level}),!0}],["fences",function(e,t,n,r){var o,i,s,a,l,c=!1,u=e.bMarks[t]+e.tShift[t],f=e.eMarks[t]
if(u+3>f)return!1
if(126!==(o=e.src.charCodeAt(u))&&96!==o)return!1
if(l=u,(i=(u=e.skipChars(u,o))-l)<3)return!1
if((s=e.src.slice(u,f).trim()).indexOf("`")>=0)return!1
if(r)return!0
for(a=t;!(++a>=n||(u=l=e.bMarks[a]+e.tShift[a])<(f=e.eMarks[a])&&e.tShift[a]<e.blkIndent);)if(e.src.charCodeAt(u)===o&&!(e.tShift[a]-e.blkIndent>=4||(u=e.skipChars(u,o))-l<i||(u=e.skipSpaces(u))<f)){c=!0
break}return i=e.tShift[t],e.line=a+(c?1:0),e.tokens.push({type:"fence",params:s,content:e.getLines(t+1,a,i,!0),lines:[t,e.line],level:e.level}),!0},["paragraph","blockquote","list"]],["blockquote",function(e,t,n,r){var o,i,s,a,l,c,u,f,p,h,d,v=e.bMarks[t]+e.tShift[t],g=e.eMarks[t]
if(v>g)return!1
if(62!==e.src.charCodeAt(v++))return!1
if(e.level>=e.options.maxNesting)return!1
if(r)return!0
for(32===e.src.charCodeAt(v)&&v++,l=e.blkIndent,e.blkIndent=0,a=[e.bMarks[t]],e.bMarks[t]=v,i=(v=v<g?e.skipSpaces(v):v)>=g,s=[e.tShift[t]],e.tShift[t]=v-e.bMarks[t],f=e.parser.ruler.getRules("blockquote"),o=t+1;o<n&&!((v=e.bMarks[o]+e.tShift[o])>=(g=e.eMarks[o]));o++)if(62!==e.src.charCodeAt(v++)){if(i)break
for(d=!1,p=0,h=f.length;p<h;p++)if(f[p](e,o,n,!0)){d=!0
break}if(d)break
a.push(e.bMarks[o]),s.push(e.tShift[o]),e.tShift[o]=-1337}else 32===e.src.charCodeAt(v)&&v++,a.push(e.bMarks[o]),e.bMarks[o]=v,i=(v=v<g?e.skipSpaces(v):v)>=g,s.push(e.tShift[o]),e.tShift[o]=v-e.bMarks[o]
for(c=e.parentType,e.parentType="blockquote",e.tokens.push({type:"blockquote_open",lines:u=[t,0],level:e.level++}),e.parser.tokenize(e,t,o),e.tokens.push({type:"blockquote_close",level:--e.level}),e.parentType=c,u[1]=e.line,p=0;p<s.length;p++)e.bMarks[p+t]=a[p],e.tShift[p+t]=s[p]
return e.blkIndent=l,!0},["paragraph","blockquote","list"]],["hr",function(e,t,n,r){var o,i,s,a=e.bMarks[t],l=e.eMarks[t]
if((a+=e.tShift[t])>l)return!1
if(42!==(o=e.src.charCodeAt(a++))&&45!==o&&95!==o)return!1
for(i=1;a<l;){if((s=e.src.charCodeAt(a++))!==o&&32!==s)return!1
s===o&&i++}return!(i<3||(r||(e.line=t+1,e.tokens.push({type:"hr",lines:[t,e.line],level:e.level})),0))},["paragraph","blockquote","list"]],["list",function(e,t,n,r){var o,i,s,a,l,c,u,f,p,h,d,v,g,m,b,y,k,_,w,j,A,C=!0
if((f=K(e,t))>=0)v=!0
else{if(!((f=J(e,t))>=0))return!1
v=!1}if(e.level>=e.options.maxNesting)return!1
if(d=e.src.charCodeAt(f-1),r)return!0
for(m=e.tokens.length,v?(u=e.bMarks[t]+e.tShift[t],h=Number(e.src.substr(u,f-u-1)),e.tokens.push({type:"ordered_list_open",order:h,lines:y=[t,0],level:e.level++})):e.tokens.push({type:"bullet_list_open",lines:y=[t,0],level:e.level++}),o=t,b=!1,_=e.parser.ruler.getRules("list");!(!(o<n)||((p=(g=e.skipSpaces(f))>=e.eMarks[o]?1:g-f)>4&&(p=1),p<1&&(p=1),i=f-e.bMarks[o]+p,e.tokens.push({type:"list_item_open",lines:k=[t,0],level:e.level++}),a=e.blkIndent,l=e.tight,s=e.tShift[t],c=e.parentType,e.tShift[t]=g-e.bMarks[t],e.blkIndent=i,e.tight=!0,e.parentType="list",e.parser.tokenize(e,t,n,!0),e.tight&&!b||(C=!1),b=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=a,e.tShift[t]=s,e.tight=l,e.parentType=c,e.tokens.push({type:"list_item_close",level:--e.level}),o=t=e.line,k[1]=o,g=e.bMarks[t],o>=n)||e.isEmpty(o)||e.tShift[o]<e.blkIndent);){for(A=!1,w=0,j=_.length;w<j;w++)if(_[w](e,o,n,!0)){A=!0
break}if(A)break
if(v){if((f=K(e,o))<0)break}else if((f=J(e,o))<0)break
if(d!==e.src.charCodeAt(f-1))break}return e.tokens.push({type:v?"ordered_list_close":"bullet_list_close",level:--e.level}),y[1]=o,e.line=o,C&&function(e,t){var n,r,o=e.level+2
for(n=t+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===o&&"paragraph_open"===e.tokens[n].type&&(e.tokens[n+2].tight=!0,e.tokens[n].tight=!0,n+=2)}(e,m),!0},["paragraph","blockquote"]],["footnote",function(e,t,n,r){var o,i,s,a,l,c=e.bMarks[t]+e.tShift[t],u=e.eMarks[t]
if(c+4>u)return!1
if(91!==e.src.charCodeAt(c))return!1
if(94!==e.src.charCodeAt(c+1))return!1
if(e.level>=e.options.maxNesting)return!1
for(a=c+2;a<u;a++){if(32===e.src.charCodeAt(a))return!1
if(93===e.src.charCodeAt(a))break}return!(a===c+2||a+1>=u||58!==e.src.charCodeAt(++a)||(r||(a++,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.refs||(e.env.footnotes.refs={}),l=e.src.slice(c+2,a-2),e.env.footnotes.refs[":"+l]=-1,e.tokens.push({type:"footnote_reference_open",label:l,level:e.level++}),o=e.bMarks[t],i=e.tShift[t],s=e.parentType,e.tShift[t]=e.skipSpaces(a)-a,e.bMarks[t]=a,e.blkIndent+=4,e.parentType="footnote",e.tShift[t]<e.blkIndent&&(e.tShift[t]+=e.blkIndent,e.bMarks[t]-=e.blkIndent),e.parser.tokenize(e,t,n,!0),e.parentType=s,e.blkIndent-=4,e.tShift[t]=i,e.bMarks[t]=o,e.tokens.push({type:"footnote_reference_close",level:--e.level})),0))},["paragraph"]],["heading",function(e,t,n,r){var o,i,s,a=e.bMarks[t]+e.tShift[t],l=e.eMarks[t]
if(a>=l)return!1
if(35!==(o=e.src.charCodeAt(a))||a>=l)return!1
for(i=1,o=e.src.charCodeAt(++a);35===o&&a<l&&i<=6;)i++,o=e.src.charCodeAt(++a)
return!(i>6||a<l&&32!==o||(r||(l=e.skipCharsBack(l,32,a),(s=e.skipCharsBack(l,35,a))>a&&32===e.src.charCodeAt(s-1)&&(l=s),e.line=t+1,e.tokens.push({type:"heading_open",hLevel:i,lines:[t,e.line],level:e.level}),a<l&&e.tokens.push({type:"inline",content:e.src.slice(a,l).trim(),level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"heading_close",hLevel:i,level:e.level})),0))},["paragraph","blockquote"]],["lheading",function(e,t,n){var r,o,i,s=t+1
return!(s>=n||e.tShift[s]<e.blkIndent||e.tShift[s]-e.blkIndent>3||(o=e.bMarks[s]+e.tShift[s])>=(i=e.eMarks[s])||45!==(r=e.src.charCodeAt(o))&&61!==r||(o=e.skipChars(o,r),(o=e.skipSpaces(o))<i||(o=e.bMarks[t]+e.tShift[t],e.line=s+1,e.tokens.push({type:"heading_open",hLevel:61===r?1:2,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:e.src.slice(o,e.eMarks[t]).trim(),level:e.level+1,lines:[t,e.line-1],children:[]}),e.tokens.push({type:"heading_close",hLevel:61===r?1:2,level:e.level}),0)))}],["htmlblock",function(e,t,n,r){var o,i,s,a=e.bMarks[t],l=e.eMarks[t],c=e.tShift[t]
if(a+=c,!e.options.html)return!1
if(c>3||a+2>=l)return!1
if(60!==e.src.charCodeAt(a))return!1
if(33===(o=e.src.charCodeAt(a+1))||63===o){if(r)return!0}else{if(47!==o&&!function(e){var t=32|e
return t>=97&&t<=122}(o))return!1
if(47===o){if(!(i=e.src.slice(a,l).match(X)))return!1}else if(!(i=e.src.slice(a,l).match(H)))return!1
if(!0!==Y[i[1].toLowerCase()])return!1
if(r)return!0}for(s=t+1;s<e.lineMax&&!e.isEmpty(s);)s++
return e.line=s,e.tokens.push({type:"htmlblock",level:e.level,lines:[t,e.line],content:e.getLines(t,s,0,!0)}),!0},["paragraph","blockquote"]],["table",function(e,t,n,r){var o,i,s,a,l,c,u,f,p,h,d
if(t+2>n)return!1
if(l=t+1,e.tShift[l]<e.blkIndent)return!1
if((s=e.bMarks[l]+e.tShift[l])>=e.eMarks[l])return!1
if(124!==(o=e.src.charCodeAt(s))&&45!==o&&58!==o)return!1
if(i=Q(e,t+1),!/^[-:| ]+$/.test(i))return!1
if((c=i.split("|"))<=2)return!1
for(f=[],a=0;a<c.length;a++){if(!(p=c[a].trim())){if(0===a||a===c.length-1)continue
return!1}if(!/^:?-+:?$/.test(p))return!1
58===p.charCodeAt(p.length-1)?f.push(58===p.charCodeAt(0)?"center":"right"):58===p.charCodeAt(0)?f.push("left"):f.push("")}if(-1===(i=Q(e,t).trim()).indexOf("|"))return!1
if(c=i.replace(/^\||\|$/g,"").split("|"),f.length!==c.length)return!1
if(r)return!0
for(e.tokens.push({type:"table_open",lines:h=[t,0],level:e.level++}),e.tokens.push({type:"thead_open",lines:[t,t+1],level:e.level++}),e.tokens.push({type:"tr_open",lines:[t,t+1],level:e.level++}),a=0;a<c.length;a++)e.tokens.push({type:"th_open",align:f[a],lines:[t,t+1],level:e.level++}),e.tokens.push({type:"inline",content:c[a].trim(),lines:[t,t+1],level:e.level,children:[]}),e.tokens.push({type:"th_close",level:--e.level})
for(e.tokens.push({type:"tr_close",level:--e.level}),e.tokens.push({type:"thead_close",level:--e.level}),e.tokens.push({type:"tbody_open",lines:d=[t+2,0],level:e.level++}),l=t+2;l<n&&!(e.tShift[l]<e.blkIndent)&&-1!==(i=Q(e,l).trim()).indexOf("|");l++){for(c=i.replace(/^\||\|$/g,"").split("|"),e.tokens.push({type:"tr_open",level:e.level++}),a=0;a<c.length;a++)e.tokens.push({type:"td_open",align:f[a],level:e.level++}),u=c[a].substring(124===c[a].charCodeAt(0)?1:0,124===c[a].charCodeAt(c[a].length-1)?c[a].length-1:c[a].length).trim(),e.tokens.push({type:"inline",content:u,level:e.level,children:[]}),e.tokens.push({type:"td_close",level:--e.level})
e.tokens.push({type:"tr_close",level:--e.level})}return e.tokens.push({type:"tbody_close",level:--e.level}),e.tokens.push({type:"table_close",level:--e.level}),h[1]=d[1]=l,e.line=l,!0},["paragraph"]],["deflist",function(e,t,n,r){var o,i,s,a,l,c,u,f,p,h,d,v,g,m
if(r)return!(e.ddIndent<0)&&ee(e,t)>=0
if(u=t+1,e.isEmpty(u)&&++u>n)return!1
if(e.tShift[u]<e.blkIndent)return!1
if((o=ee(e,u))<0)return!1
if(e.level>=e.options.maxNesting)return!1
c=e.tokens.length,e.tokens.push({type:"dl_open",lines:l=[t,0],level:e.level++}),s=t,i=u
e:for(;;){for(m=!0,g=!1,e.tokens.push({type:"dt_open",lines:[s,s],level:e.level++}),e.tokens.push({type:"inline",content:e.getLines(s,s+1,e.blkIndent,!1).trim(),level:e.level+1,lines:[s,s],children:[]}),e.tokens.push({type:"dt_close",level:--e.level});;){if(e.tokens.push({type:"dd_open",lines:a=[u,0],level:e.level++}),v=e.tight,p=e.ddIndent,f=e.blkIndent,d=e.tShift[i],h=e.parentType,e.blkIndent=e.ddIndent=e.tShift[i]+2,e.tShift[i]=o-e.bMarks[i],e.tight=!0,e.parentType="deflist",e.parser.tokenize(e,i,n,!0),e.tight&&!g||(m=!1),g=e.line-i>1&&e.isEmpty(e.line-1),e.tShift[i]=d,e.tight=v,e.parentType=h,e.blkIndent=f,e.ddIndent=p,e.tokens.push({type:"dd_close",level:--e.level}),a[1]=u=e.line,u>=n)break e
if(e.tShift[u]<e.blkIndent)break e
if((o=ee(e,u))<0)break
i=u}if(u>=n)break
if(s=u,e.isEmpty(s))break
if(e.tShift[s]<e.blkIndent)break
if((i=s+1)>=n)break
if(e.isEmpty(i)&&i++,i>=n)break
if(e.tShift[i]<e.blkIndent)break
if((o=ee(e,i))<0)break}return e.tokens.push({type:"dl_close",level:--e.level}),l[1]=u,e.line=u,m&&function(e,t){var n,r,o=e.level+2
for(n=t+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===o&&"paragraph_open"===e.tokens[n].type&&(e.tokens[n+2].tight=!0,e.tokens[n].tight=!0,n+=2)}(e,c),!0},["paragraph"]],["paragraph",function(e,t){var n,r,o,i,s,a,l=t+1
if(l<(n=e.lineMax)&&!e.isEmpty(l))for(a=e.parser.ruler.getRules("paragraph");l<n&&!e.isEmpty(l);l++)if(!(e.tShift[l]-e.blkIndent>3)){for(o=!1,i=0,s=a.length;i<s;i++)if(a[i](e,l,n,!0)){o=!0
break}if(o)break}return r=e.getLines(t,l,e.blkIndent,!1).trim(),e.line=l,r.length&&(e.tokens.push({type:"paragraph_open",tight:!1,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:r,level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"paragraph_close",tight:!1,level:e.level})),!0}]]
function ne(){this.ruler=new S
for(var e=0;e<te.length;e++)this.ruler.push(te[e][0],te[e][1],{alt:(te[e][2]||[]).slice()})}ne.prototype.tokenize=function(e,t,n){for(var r,o=this.ruler.getRules(""),i=o.length,s=t,a=!1;s<n&&(e.line=s=e.skipEmptyLines(s),!(s>=n))&&!(e.tShift[s]<e.blkIndent);){for(r=0;r<i&&!o[r](e,s,n,!1);r++);if(e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),(s=e.line)<n&&e.isEmpty(s)){if(a=!0,++s<n&&"list"===e.parentType&&e.isEmpty(s))break
e.line=s}}}
var re=/[\n\t]/g,oe=/\r[\n\u0085]|[\u2424\u2028\u0085]/g,ie=/\u00a0/g
function se(e){switch(e){case 10:case 92:case 96:case 42:case 95:case 94:case 91:case 93:case 33:case 38:case 60:case 62:case 123:case 125:case 36:case 37:case 64:case 126:case 43:case 61:case 58:return!0
default:return!1}}ne.prototype.parse=function(e,t,n,r){var o,i=0,s=0
if(!e)return[];(e=(e=e.replace(ie," ")).replace(oe,"\n")).indexOf("\t")>=0&&(e=e.replace(re,(function(t,n){var r
return 10===e.charCodeAt(n)?(i=n+1,s=0,t):(r="    ".slice((n-i-s)%4),s=n-i+1,r)}))),o=new U(e,this,t,n,r),this.tokenize(o,o.line,o.lineMax)}
for(var ae=[],le=0;le<256;le++)ae.push(0)
function ce(e){return e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122}function ue(e,t){var n,r,o,i=t,s=!0,a=!0,l=e.posMax,c=e.src.charCodeAt(t)
for(n=t>0?e.src.charCodeAt(t-1):-1;i<l&&e.src.charCodeAt(i)===c;)i++
return i>=l&&(s=!1),(o=i-t)>=4?s=a=!1:(32!==(r=i<l?e.src.charCodeAt(i):-1)&&10!==r||(s=!1),32!==n&&10!==n||(a=!1),95===c&&(ce(n)&&(s=!1),ce(r)&&(a=!1))),{can_open:s,can_close:a,delims:o}}"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e){ae[e.charCodeAt(0)]=1}))
var fe=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,pe=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,he=["coap","doi","javascript","aaa","aaas","about","acap","cap","cid","crid","data","dav","dict","dns","file","ftp","geo","go","gopher","h323","http","https","iax","icap","im","imap","info","ipp","iris","iris.beep","iris.xpc","iris.xpcs","iris.lwz","ldap","mailto","mid","msrp","msrps","mtqp","mupdate","news","nfs","ni","nih","nntp","opaquelocktoken","pop","pres","rtsp","service","session","shttp","sieve","sip","sips","sms","snmp","soap.beep","soap.beeps","tag","tel","telnet","tftp","thismessage","tn3270","tip","tv","urn","vemmi","ws","wss","xcon","xcon-userid","xmlrpc.beep","xmlrpc.beeps","xmpp","z39.50r","z39.50s","adiumxtra","afp","afs","aim","apt","attachment","aw","beshare","bitcoin","bolo","callto","chrome","chrome-extension","com-eventbrite-attendee","content","cvs","dlna-playsingle","dlna-playcontainer","dtn","dvb","ed2k","facetime","feed","finger","fish","gg","git","gizmoproject","gtalk","hcp","icon","ipn","irc","irc6","ircs","itms","jar","jms","keyparc","lastfm","ldaps","magnet","maps","market","message","mms","ms-help","msnim","mumble","mvn","notes","oid","palm","paparazzi","platform","proxy","psyc","query","res","resource","rmi","rsync","rtmp","secondlife","sftp","sgn","skype","smb","soldat","spotify","ssh","steam","svn","teamspeak","things","udp","unreal","ut2004","ventrilo","view-source","webcal","wtai","wyciwyg","xfire","xri","ymsgr"],de=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,ve=/^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/
function ge(e,t){return e=e.source,t=t||"",function n(r,o){return r?(o=o.source||o,e=e.replace(r,o),n):new RegExp(e,t)}}var me=ge(/(?:unquoted|single_quoted|double_quoted)/)("unquoted",/[^"'=<>`\x00-\x20]+/)("single_quoted",/'[^']*'/)("double_quoted",/"[^"]*"/)(),be=ge(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name",/[a-zA-Z_:][a-zA-Z0-9:._-]*/)("attr_value",me)(),ye=ge(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute",be)(),ke=ge(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag",ye)("close_tag",/<\/[A-Za-z][A-Za-z0-9]*\s*>/)("comment",/<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/)("processing",/<[?].*?[?]>/)("declaration",/<![A-Z]+\s+[^>]*>/)("cdata",/<!\[CDATA\[[\s\S]*?\]\]>/)(),_e=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,we=/^&([a-z][a-z0-9]{1,31});/i,je=[["text",function(e,t){for(var n=e.pos;n<e.posMax&&!se(e.src.charCodeAt(n));)n++
return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}],["newline",function(e,t){var n,r,o=e.pos
if(10!==e.src.charCodeAt(o))return!1
if(n=e.pending.length-1,r=e.posMax,!t)if(n>=0&&32===e.pending.charCodeAt(n))if(n>=1&&32===e.pending.charCodeAt(n-1)){for(var i=n-2;i>=0;i--)if(32!==e.pending.charCodeAt(i)){e.pending=e.pending.substring(0,i+1)
break}e.push({type:"hardbreak",level:e.level})}else e.pending=e.pending.slice(0,-1),e.push({type:"softbreak",level:e.level})
else e.push({type:"softbreak",level:e.level})
for(o++;o<r&&32===e.src.charCodeAt(o);)o++
return e.pos=o,!0}],["escape",function(e,t){var n,r=e.pos,o=e.posMax
if(92!==e.src.charCodeAt(r))return!1
if(++r<o){if((n=e.src.charCodeAt(r))<256&&0!==ae[n])return t||(e.pending+=e.src[r]),e.pos+=2,!0
if(10===n){for(t||e.push({type:"hardbreak",level:e.level}),r++;r<o&&32===e.src.charCodeAt(r);)r++
return e.pos=r,!0}}return t||(e.pending+="\\"),e.pos++,!0}],["backticks",function(e,t){var n,r,o,i,s,a=e.pos
if(96!==e.src.charCodeAt(a))return!1
for(n=a,a++,r=e.posMax;a<r&&96===e.src.charCodeAt(a);)a++
for(o=e.src.slice(n,a),i=s=a;-1!==(i=e.src.indexOf("`",s));){for(s=i+1;s<r&&96===e.src.charCodeAt(s);)s++
if(s-i===o.length)return t||e.push({type:"code",content:e.src.slice(a,i).replace(/[ \n]+/g," ").trim(),block:!1,level:e.level}),e.pos=s,!0}return t||(e.pending+=o),e.pos+=o.length,!0}],["del",function(e,t){var n,r,o,i,s,a=e.posMax,l=e.pos
if(126!==e.src.charCodeAt(l))return!1
if(t)return!1
if(l+4>=a)return!1
if(126!==e.src.charCodeAt(l+1))return!1
if(e.level>=e.options.maxNesting)return!1
if(i=l>0?e.src.charCodeAt(l-1):-1,s=e.src.charCodeAt(l+2),126===i)return!1
if(126===s)return!1
if(32===s||10===s)return!1
for(r=l+2;r<a&&126===e.src.charCodeAt(r);)r++
if(r>l+3)return e.pos+=r-l,t||(e.pending+=e.src.slice(l,r)),!0
for(e.pos=l+2,o=1;e.pos+1<a;){if(126===e.src.charCodeAt(e.pos)&&126===e.src.charCodeAt(e.pos+1)&&(i=e.src.charCodeAt(e.pos-1),126!==(s=e.pos+2<a?e.src.charCodeAt(e.pos+2):-1)&&126!==i&&(32!==i&&10!==i?o--:32!==s&&10!==s&&o++,o<=0))){n=!0
break}e.parser.skipToken(e)}return n?(e.posMax=e.pos,e.pos=l+2,t||(e.push({type:"del_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"del_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=a,!0):(e.pos=l,!1)}],["ins",function(e,t){var n,r,o,i,s,a=e.posMax,l=e.pos
if(43!==e.src.charCodeAt(l))return!1
if(t)return!1
if(l+4>=a)return!1
if(43!==e.src.charCodeAt(l+1))return!1
if(e.level>=e.options.maxNesting)return!1
if(i=l>0?e.src.charCodeAt(l-1):-1,s=e.src.charCodeAt(l+2),43===i)return!1
if(43===s)return!1
if(32===s||10===s)return!1
for(r=l+2;r<a&&43===e.src.charCodeAt(r);)r++
if(r!==l+2)return e.pos+=r-l,t||(e.pending+=e.src.slice(l,r)),!0
for(e.pos=l+2,o=1;e.pos+1<a;){if(43===e.src.charCodeAt(e.pos)&&43===e.src.charCodeAt(e.pos+1)&&(i=e.src.charCodeAt(e.pos-1),43!==(s=e.pos+2<a?e.src.charCodeAt(e.pos+2):-1)&&43!==i&&(32!==i&&10!==i?o--:32!==s&&10!==s&&o++,o<=0))){n=!0
break}e.parser.skipToken(e)}return n?(e.posMax=e.pos,e.pos=l+2,t||(e.push({type:"ins_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"ins_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=a,!0):(e.pos=l,!1)}],["mark",function(e,t){var n,r,o,i,s,a=e.posMax,l=e.pos
if(61!==e.src.charCodeAt(l))return!1
if(t)return!1
if(l+4>=a)return!1
if(61!==e.src.charCodeAt(l+1))return!1
if(e.level>=e.options.maxNesting)return!1
if(i=l>0?e.src.charCodeAt(l-1):-1,s=e.src.charCodeAt(l+2),61===i)return!1
if(61===s)return!1
if(32===s||10===s)return!1
for(r=l+2;r<a&&61===e.src.charCodeAt(r);)r++
if(r!==l+2)return e.pos+=r-l,t||(e.pending+=e.src.slice(l,r)),!0
for(e.pos=l+2,o=1;e.pos+1<a;){if(61===e.src.charCodeAt(e.pos)&&61===e.src.charCodeAt(e.pos+1)&&(i=e.src.charCodeAt(e.pos-1),61!==(s=e.pos+2<a?e.src.charCodeAt(e.pos+2):-1)&&61!==i&&(32!==i&&10!==i?o--:32!==s&&10!==s&&o++,o<=0))){n=!0
break}e.parser.skipToken(e)}return n?(e.posMax=e.pos,e.pos=l+2,t||(e.push({type:"mark_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"mark_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=a,!0):(e.pos=l,!1)}],["emphasis",function(e,t){var n,r,o,i,s,a,l,c=e.posMax,u=e.pos,f=e.src.charCodeAt(u)
if(95!==f&&42!==f)return!1
if(t)return!1
if(n=(l=ue(e,u)).delims,!l.can_open)return e.pos+=n,t||(e.pending+=e.src.slice(u,e.pos)),!0
if(e.level>=e.options.maxNesting)return!1
for(e.pos=u+n,a=[n];e.pos<c;)if(e.src.charCodeAt(e.pos)!==f)e.parser.skipToken(e)
else{if(r=(l=ue(e,e.pos)).delims,l.can_close){for(i=a.pop(),s=r;i!==s;){if(s<i){a.push(i-s)
break}if(s-=i,0===a.length)break
e.pos+=i,i=a.pop()}if(0===a.length){n=i,o=!0
break}e.pos+=r
continue}l.can_open&&a.push(r),e.pos+=r}return o?(e.posMax=e.pos,e.pos=u+n,t||(2!==n&&3!==n||e.push({type:"strong_open",level:e.level++}),1!==n&&3!==n||e.push({type:"em_open",level:e.level++}),e.parser.tokenize(e),1!==n&&3!==n||e.push({type:"em_close",level:--e.level}),2!==n&&3!==n||e.push({type:"strong_close",level:--e.level})),e.pos=e.posMax+n,e.posMax=c,!0):(e.pos=u,!1)}],["sub",function(e,t){var n,r,o=e.posMax,i=e.pos
if(126!==e.src.charCodeAt(i))return!1
if(t)return!1
if(i+2>=o)return!1
if(e.level>=e.options.maxNesting)return!1
for(e.pos=i+1;e.pos<o;){if(126===e.src.charCodeAt(e.pos)){n=!0
break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(r=e.src.slice(i+1,e.pos)).match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sub",level:e.level,content:r.replace(fe,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0):(e.pos=i,!1)}],["sup",function(e,t){var n,r,o=e.posMax,i=e.pos
if(94!==e.src.charCodeAt(i))return!1
if(t)return!1
if(i+2>=o)return!1
if(e.level>=e.options.maxNesting)return!1
for(e.pos=i+1;e.pos<o;){if(94===e.src.charCodeAt(e.pos)){n=!0
break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(r=e.src.slice(i+1,e.pos)).match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sup",level:e.level,content:r.replace(pe,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0):(e.pos=i,!1)}],["links",function(e,t){var n,r,o,i,s,a,l,c,u=!1,f=e.pos,p=e.posMax,h=e.pos,d=e.src.charCodeAt(h)
if(33===d&&(u=!0,d=e.src.charCodeAt(++h)),91!==d)return!1
if(e.level>=e.options.maxNesting)return!1
if(n=h+1,(r=M(e,h))<0)return!1
if((a=r+1)<p&&40===e.src.charCodeAt(a)){for(a++;a<p&&(32===(c=e.src.charCodeAt(a))||10===c);a++);if(a>=p)return!1
for(h=a,T(e,a)?(i=e.linkContent,a=e.pos):i="",h=a;a<p&&(32===(c=e.src.charCodeAt(a))||10===c);a++);if(a<p&&h!==a&&I(e,a))for(s=e.linkContent,a=e.pos;a<p&&(32===(c=e.src.charCodeAt(a))||10===c);a++);else s=""
if(a>=p||41!==e.src.charCodeAt(a))return e.pos=f,!1
a++}else{if(e.linkLevel>0)return!1
for(;a<p&&(32===(c=e.src.charCodeAt(a))||10===c);a++);if(a<p&&91===e.src.charCodeAt(a)&&(h=a+1,(a=M(e,a))>=0?o=e.src.slice(h,a++):a=h-1),o||(void 0===o&&(a=r+1),o=e.src.slice(n,r)),!(l=e.env.references[P(o)]))return e.pos=f,!1
i=l.href,s=l.title}return t||(e.pos=n,e.posMax=r,u?e.push({type:"image",src:i,title:s,alt:e.src.substr(n,r-n),level:e.level}):(e.push({type:"link_open",href:i,title:s,level:e.level++}),e.linkLevel++,e.parser.tokenize(e),e.linkLevel--,e.push({type:"link_close",level:--e.level}))),e.pos=a,e.posMax=p,!0}],["footnote_inline",function(e,t){var n,r,o,i,s=e.posMax,a=e.pos
return!(a+2>=s||94!==e.src.charCodeAt(a)||91!==e.src.charCodeAt(a+1)||e.level>=e.options.maxNesting||(n=a+2,(r=M(e,a+1))<0||(t||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),o=e.env.footnotes.list.length,e.pos=n,e.posMax=r,e.push({type:"footnote_ref",id:o,level:e.level}),e.linkLevel++,i=e.tokens.length,e.parser.tokenize(e),e.env.footnotes.list[o]={tokens:e.tokens.splice(i)},e.linkLevel--),e.pos=r+1,e.posMax=s,0)))}],["footnote_ref",function(e,t){var n,r,o,i,s=e.posMax,a=e.pos
if(a+3>s)return!1
if(!e.env.footnotes||!e.env.footnotes.refs)return!1
if(91!==e.src.charCodeAt(a))return!1
if(94!==e.src.charCodeAt(a+1))return!1
if(e.level>=e.options.maxNesting)return!1
for(r=a+2;r<s;r++){if(32===e.src.charCodeAt(r))return!1
if(10===e.src.charCodeAt(r))return!1
if(93===e.src.charCodeAt(r))break}return!(r===a+2||r>=s||(r++,n=e.src.slice(a+2,r-1),void 0===e.env.footnotes.refs[":"+n]||(t||(e.env.footnotes.list||(e.env.footnotes.list=[]),e.env.footnotes.refs[":"+n]<0?(o=e.env.footnotes.list.length,e.env.footnotes.list[o]={label:n,count:0},e.env.footnotes.refs[":"+n]=o):o=e.env.footnotes.refs[":"+n],i=e.env.footnotes.list[o].count,e.env.footnotes.list[o].count++,e.push({type:"footnote_ref",id:o,subId:i,level:e.level})),e.pos=r,e.posMax=s,0)))}],["autolink",function(e,t){var n,r,o,i,s,a=e.pos
return!(60!==e.src.charCodeAt(a)||(n=e.src.slice(a)).indexOf(">")<0||((r=n.match(ve))?he.indexOf(r[1].toLowerCase())<0||(s=E(i=r[0].slice(1,-1)),!e.parser.validateLink(i)||(t||(e.push({type:"link_open",href:s,level:e.level}),e.push({type:"text",content:i,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=r[0].length,0)):!(o=n.match(de))||(s=E("mailto:"+(i=o[0].slice(1,-1))),!e.parser.validateLink(s)||(t||(e.push({type:"link_open",href:s,level:e.level}),e.push({type:"text",content:i,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=o[0].length,0))))}],["htmltag",function(e,t){var n,r,o,i=e.pos
return!(!e.options.html||(o=e.posMax,60!==e.src.charCodeAt(i)||i+2>=o||33!==(n=e.src.charCodeAt(i+1))&&63!==n&&47!==n&&!function(e){var t=32|e
return t>=97&&t<=122}(n)||!(r=e.src.slice(i).match(ke))||(t||e.push({type:"htmltag",content:e.src.slice(i,i+r[0].length),level:e.level}),e.pos+=r[0].length,0)))}],["entity",function(e,t){var n,r,i=e.pos,s=e.posMax
if(38!==e.src.charCodeAt(i))return!1
if(i+1<s)if(35===e.src.charCodeAt(i+1)){if(r=e.src.slice(i).match(_e))return t||(n="x"===r[1][0].toLowerCase()?parseInt(r[1].slice(1),16):parseInt(r[1],10),e.pending+=u(n)?f(n):f(65533)),e.pos+=r[0].length,!0}else if(r=e.src.slice(i).match(we)){var a=o(r[1])
if(r[1]!==a)return t||(e.pending+=a),e.pos+=r[0].length,!0}return t||(e.pending+="&"),e.pos++,!0}]]
function Ae(){this.ruler=new S
for(var e=0;e<je.length;e++)this.ruler.push(je[e][0],je[e][1])
this.validateLink=Ce}function Ce(e){var t=e.trim().toLowerCase()
return-1===(t=v(t)).indexOf(":")||-1===["vbscript","javascript","file","data"].indexOf(t.split(":")[0])}Ae.prototype.skipToken=function(e){var t,n,r=this.ruler.getRules(""),o=r.length,i=e.pos
if((n=e.cacheGet(i))>0)e.pos=n
else{for(t=0;t<o;t++)if(r[t](e,!0))return void e.cacheSet(i,e.pos)
e.pos++,e.cacheSet(i,e.pos)}},Ae.prototype.tokenize=function(e){for(var t,n,r=this.ruler.getRules(""),o=r.length,i=e.posMax;e.pos<i;){for(n=0;n<o&&!(t=r[n](e,!1));n++);if(t){if(e.pos>=i)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},Ae.prototype.parse=function(e,t,n,r){var o=new x(e,this,t,n,r)
this.tokenize(o)}
var Se={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","replacements","smartquotes","references","abbr2","footnote_tail"]},block:{rules:["blockquote","code","fences","footnote","heading","hr","htmlblock","lheading","list","paragraph","table"]},inline:{rules:["autolink","backticks","del","emphasis","entity","escape","footnote_ref","htmltag","links","newline","text"]}}},full:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{},block:{},inline:{}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","abbr2"]},block:{rules:["blockquote","code","fences","heading","hr","htmlblock","lheading","list","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","htmltag","links","newline","text"]}}}}
function xe(e,t,n){this.src=t,this.env=n,this.options=e.options,this.tokens=[],this.inlineMode=!1,this.inline=e.inline,this.block=e.block,this.renderer=e.renderer,this.typographer=e.typographer}function Me(e,t){"string"!=typeof e&&(t=e,e="default"),t&&null!=t.linkify&&console.warn("linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"),this.inline=new Ae,this.block=new ne,this.core=new Z,this.renderer=new C,this.ruler=new S,this.options={},this.configure(Se[e]),this.set(t||{})}Me.prototype.set=function(e){a(this.options,e)},Me.prototype.configure=function(e){var t=this
if(!e)throw new Error("Wrong `remarkable` preset, check name/content")
e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach((function(n){e.components[n].rules&&t[n].ruler.enable(e.components[n].rules,!0)}))},Me.prototype.use=function(e,t){return e(this,t),this},Me.prototype.parse=function(e,t){var n=new xe(this,e,t)
return this.core.process(n),n.tokens},Me.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},Me.prototype.parseInline=function(e,t){var n=new xe(this,e,t)
return n.inlineMode=!0,this.core.process(n),n.tokens},Me.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)}},35:(e,t,n)=>{const r=n(950)
e.exports=e=>{const t=r(e)
if(0===t)return e
const n=new RegExp(`^[ \\t]{${t}}`,"gm")
return e.replace(n,"")}},787:(e,t,n)=>{n.r(t),n.d(t,{TrackedArray:()=>A,TrackedMap:()=>a,TrackedObject:()=>F,TrackedSet:()=>u,TrackedWeakMap:()=>l,TrackedWeakSet:()=>f,tracked:()=>D})
var r=n(473),o=n(603),i=n(32)
function s(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a{readStorageFor(e){const{storages:t}=this
let n=t.get(e)
void 0===n&&(n=(0,i.createStorage)(null,(()=>!1)),t.set(e,n)),(0,i.getValue)(n)}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,i.setValue)(t,null)}constructor(e){s(this,"collection",(0,i.createStorage)(null,(()=>!1))),s(this,"storages",new Map),this.vals=e?new Map(e):new Map}get(e){return this.readStorageFor(e),this.vals.get(e)}has(e){return this.readStorageFor(e),this.vals.has(e)}entries(){return(0,i.getValue)(this.collection),this.vals.entries()}keys(){return(0,i.getValue)(this.collection),this.vals.keys()}values(){return(0,i.getValue)(this.collection),this.vals.values()}forEach(e){(0,i.getValue)(this.collection),this.vals.forEach(e)}get size(){return(0,i.getValue)(this.collection),this.vals.size}[Symbol.iterator](){return(0,i.getValue)(this.collection),this.vals[Symbol.iterator]()}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}set(e,t){return this.dirtyStorageFor(e),(0,i.setValue)(this.collection,null),this.vals.set(e,t),this}delete(e){return this.dirtyStorageFor(e),(0,i.setValue)(this.collection,null),this.vals.delete(e)}clear(){this.storages.forEach((e=>(0,i.setValue)(e,null))),(0,i.setValue)(this.collection,null),this.vals.clear()}}Object.setPrototypeOf(a.prototype,Map.prototype)
class l{readStorageFor(e){const{storages:t}=this
let n=t.get(e)
void 0===n&&(n=(0,i.createStorage)(null,(()=>!1)),t.set(e,n)),(0,i.getValue)(n)}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,i.setValue)(t,null)}constructor(e){s(this,"storages",new WeakMap),this.vals=e?new WeakMap(e):new WeakMap}get(e){return this.readStorageFor(e),this.vals.get(e)}has(e){return this.readStorageFor(e),this.vals.has(e)}set(e,t){return this.dirtyStorageFor(e),this.vals.set(e,t),this}delete(e){return this.dirtyStorageFor(e),this.vals.delete(e)}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}}function c(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.setPrototypeOf(l.prototype,WeakMap.prototype)
class u{storageFor(e){const t=this.storages
let n=t.get(e)
return void 0===n&&(n=(0,i.createStorage)(null,(()=>!1)),t.set(e,n)),n}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,i.setValue)(t,null)}constructor(e){c(this,"collection",(0,i.createStorage)(null,(()=>!1))),c(this,"storages",new Map),this.vals=new Set(e)}has(e){return(0,i.getValue)(this.storageFor(e)),this.vals.has(e)}entries(){return(0,i.getValue)(this.collection),this.vals.entries()}keys(){return(0,i.getValue)(this.collection),this.vals.keys()}values(){return(0,i.getValue)(this.collection),this.vals.values()}forEach(e){(0,i.getValue)(this.collection),this.vals.forEach(e)}get size(){return(0,i.getValue)(this.collection),this.vals.size}[Symbol.iterator](){return(0,i.getValue)(this.collection),this.vals[Symbol.iterator]()}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}add(e){return this.dirtyStorageFor(e),(0,i.setValue)(this.collection,null),this.vals.add(e),this}delete(e){return this.dirtyStorageFor(e),(0,i.setValue)(this.collection,null),this.vals.delete(e)}clear(){this.storages.forEach((e=>(0,i.setValue)(e,null))),(0,i.setValue)(this.collection,null),this.vals.clear()}}Object.setPrototypeOf(u.prototype,Set.prototype)
class f{storageFor(e){const t=this.storages
let n=t.get(e)
return void 0===n&&(n=(0,i.createStorage)(null,(()=>!1)),t.set(e,n)),n}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,i.setValue)(t,null)}constructor(e){c(this,"storages",new WeakMap),this.vals=new WeakSet(e)}has(e){return(0,i.getValue)(this.storageFor(e)),this.vals.has(e)}add(e){return this.vals.add(e),this.dirtyStorageFor(e),this}delete(e){return this.dirtyStorageFor(e),this.vals.delete(e)}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}}function p(e,t){var n=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return t.get(e)}(e,t)
return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}function h(e,t){v(e,t),t.add(e)}function d(e,t,n){v(e,t),t.set(e,n)}function v(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return n}Object.setPrototypeOf(f.prototype,WeakSet.prototype)
const m=new Set([Symbol.iterator,"concat","entries","every","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),b=new Set(["fill","push","unshift"])
function y(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}var k=new WeakMap,_=new WeakMap,w=new WeakSet,j=new WeakSet
class A{static from(e,t,n){return new A(t?Array.from(e,t,n):Array.from(e))}static of(...e){return new A(e)}constructor(e=[]){h(this,j),h(this,w),d(this,k,{writable:!0,value:(0,i.createStorage)(null,(()=>!1))}),d(this,_,{writable:!0,value:new Map})
let t=e.slice(),n=this,r=new Map,o=!1
return new Proxy(t,{get(e,t){let s=y(t)
if(null!==s)return g(n,w,C).call(n,s),(0,i.getValue)(p(n,k)),e[s]
if("length"===t)return o?o=!1:(0,i.getValue)(p(n,k)),e[t]
if(b.has(t)&&(o=!0),m.has(t)){let o=r.get(t)
return void 0===o&&(o=(...r)=>((0,i.getValue)(p(n,k)),e[t](...r)),r.set(t,o)),o}return e[t]},set(e,t,r){e[t]=r
let o=y(t)
return null!==o?(g(n,j,S).call(n,o),(0,i.setValue)(p(n,k),null)):"length"===t&&(0,i.setValue)(p(n,k),null),!0},getPrototypeOf:()=>A.prototype})}}function C(e){let t=p(this,_).get(e)
void 0===t&&(t=(0,i.createStorage)(null,(()=>!1)),p(this,_).set(e,t)),(0,i.getValue)(t)}function S(e){const t=p(this,_).get(e)
t&&(0,i.setValue)(t,null)}function x(e,t){O(e,t),t.add(e)}function M(e,t,n){O(e,t),t.set(e,n)}function O(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function E(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return n}Object.setPrototypeOf(A.prototype,Array.prototype)
var T=new WeakMap,I=new WeakMap,P=new WeakSet,N=new WeakSet,L=new WeakSet
class F{static fromEntries(e){return new F(Object.fromEntries(e))}constructor(e={}){x(this,L),x(this,N),x(this,P),M(this,T,{writable:!0,value:new Map}),M(this,I,{writable:!0,value:(0,i.createStorage)(null,(()=>!1))})
let t=Object.getPrototypeOf(e),n=Object.getOwnPropertyDescriptors(e),r=Object.create(t)
for(let i in n)Object.defineProperty(r,i,n[i])
let o=this
return new Proxy(r,{get:(e,t)=>(E(o,P,R).call(o,t),e[t]),has:(e,t)=>(E(o,P,R).call(o,t),t in e),ownKeys:e=>((0,i.getValue)(p(o,I)),Reflect.ownKeys(e)),set:(e,t,n)=>(e[t]=n,E(o,N,z).call(o,t),E(o,L,q).call(o),!0),deleteProperty:(e,t)=>(t in e&&(delete e[t],E(o,N,z).call(o,t),E(o,L,q).call(o)),!0),getPrototypeOf:()=>F.prototype})}}function R(e){let t=p(this,T).get(e)
void 0===t&&(t=(0,i.createStorage)(null,(()=>!1)),p(this,T).set(e,t)),(0,i.getValue)(t)}function z(e){const t=p(this,T).get(e)
t&&(0,i.setValue)(t,null)}function q(){(0,i.setValue)(p(this,I),null)}function D(e,t,n){if(void 0!==t&&void 0!==n)return(0,r.tracked)(e,t,n)
if(Array.isArray(e))return new A(e)
switch(e){case Object:return new F
case Array:return new A
case Map:return new a
case WeakMap:return new l
case Set:return new u
case WeakSet:return new f}return e instanceof Map?new a(e):e instanceof WeakMap?new l:e instanceof Set?new u(e):e instanceof WeakSet?new f:((0,o.assert)("You must either use tracked as a field decorator, or to wrap built-in class instances:\n\n      class Example {\n        @tracked field = 123;\n\n        map = tracked(Map);\n        map = tracked(new Map());\n      }","object"==typeof e&&null!==e),new F(e))}},209:e=>{function t(e){return null===e?"null":typeof e}function n(e){return!!e&&"object"==typeof e}function r(e){if(void 0===e)return""
if(null===e)return"Object"
if("object"==typeof e&&!e.constructor)return"Object"
var t=/function ([^(]*)/.exec(e.constructor.toString())
return t&&t.length>1?t[1]:""}function o(e,t,n){return"null"===e||"undefined"===e?e:("string"!==e&&"stringifiable"!==e||(n='"'+n.replace(/"/g,'\\"')+'"'),"function"===e?t.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{…}":n)}function i(e){var i=""
return n(e)?(i=r(e),Array.isArray(e)&&(i+="["+e.length+"]")):i=o(t(e),e,e),i}function s(e){return"json-formatter-".concat(e)}function a(e,t,n){var r=document.createElement(e)
return t&&r.classList.add(s(t)),void 0!==n&&(n instanceof Node?r.appendChild(n):r.appendChild(document.createTextNode(String(n)))),r}!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style")
t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}}('.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855a00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008b;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31f031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66c2ff;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027bff;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494ff;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23a0db;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n')
var l=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,c=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,u=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,f=/^https?:\/\//,p=window.requestAnimationFrame||function(e){return e(),0},h={hoverPreviewEnabled:!1,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null,maxArrayItems:100,exposePath:!1},d=function(){function e(e,t,n,r,o,i,s){void 0===t&&(t=1),void 0===n&&(n=h),void 0===i&&(i=[]),this.json=e,this.open=t,this.config=n,this.key=r,this.displayKey=o,this.path=i,this.arrayRange=s,this._isOpen=null,void 0===this.config.hoverPreviewEnabled&&(this.config.hoverPreviewEnabled=h.hoverPreviewEnabled),void 0===this.config.hoverPreviewArrayCount&&(this.config.hoverPreviewArrayCount=h.hoverPreviewArrayCount),void 0===this.config.hoverPreviewFieldCount&&(this.config.hoverPreviewFieldCount=h.hoverPreviewFieldCount),void 0===this.config.useToJSON&&(this.config.useToJSON=h.useToJSON),void 0===this.config.maxArrayItems&&(this.config.maxArrayItems=h.maxArrayItems),""===this.key&&(this.key='""'),void 0===this.displayKey&&(this.displayKey=this.key)}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return null!==this._isOpen?this._isOpen:this.open>0},set:function(e){this._isOpen=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDate",{get:function(){return this.json instanceof Date||"string"===this.type&&(l.test(this.json)||u.test(this.json)||c.test(this.json))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isUrl",{get:function(){return"string"===this.type&&f.test(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isLargeArray",{get:function(){return this.isArray&&this.json.length>this.config.maxArrayItems},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isArrayRange",{get:function(){return this.isArray&&void 0!==this.arrayRange&&2==this.arrayRange.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isObject",{get:function(){return n(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&"stringifiable"===this.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasKey",{get:function(){return void 0!==this.key},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"constructorName",{get:function(){return r(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":t(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"keys",{get:function(){if(this.isObject){var e=Object.keys(this.json)
if(this.isLargeArray){var t=Math.ceil(this.json.length/this.config.maxArrayItems)
e=[]
for(var n=0;n<t;n++){var r=n*this.config.maxArrayItems,o=Math.min(this.json.length-1,r+(this.config.maxArrayItems-1))
e.push("".concat(r," … ").concat(o))}}return!this.isArray&&this.config.sortPropertiesBy?e.sort(this.config.sortPropertiesBy):e}return[]},enumerable:!1,configurable:!0}),e.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(s("open")))},e.prototype.openAtDepth=function(e){void 0===e&&(e=1),e<0||(this.open=e,this.isOpen=0!==e,this.element&&(this.removeChildren(!1),0===e?this.element.classList.remove(s("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(s("open")))))},e.prototype.getInlinepreview=function(){var e=this
if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array[".concat(this.json.length,"]"):"[".concat(this.json.map(i).join(", "),"]")
var t=this.keys,n=t.slice(0,this.config.hoverPreviewFieldCount).map((function(t){return"".concat(t,":").concat(i(e.json[t]))})),r=t.length>=this.config.hoverPreviewFieldCount?"…":""
return"{".concat(n.join(", ")).concat(r,"}")},e.prototype.render=function(){this.element=a("div","row")
var e=this.isObject?a("a","toggler-link"):a("span")
if(this.isObject&&!this.useToJSON&&e.appendChild(a("span","toggler")),this.isArrayRange?e.appendChild(a("span","range","[".concat(this.displayKey,"]"))):this.hasKey&&(e.appendChild(a("span","key","".concat(this.displayKey,":"))),this.config.exposePath&&(this.element.dataset.path=JSON.stringify(this.path))),this.isObject&&!this.useToJSON){var t=a("span","value"),n=a("span")
if(!this.isArrayRange){var r=a("span","constructor-name",this.constructorName)
n.appendChild(r)}if(this.isArray&&!this.isArrayRange){var i=a("span")
i.appendChild(a("span","bracket","[")),i.appendChild(a("span","number",this.json.length)),i.appendChild(a("span","bracket","]")),n.appendChild(i)}t.appendChild(n),e.appendChild(t)}else{(t=this.isUrl?a("a"):a("span")).classList.add(s(this.type)),this.isDate&&t.classList.add(s("date")),this.isUrl&&(t.classList.add(s("url")),t.setAttribute("href",this.json))
var l=o(this.type,this.json,this.useToJSON?this.json.toJSON():this.json)
t.appendChild(document.createTextNode(l)),e.appendChild(t)}if(this.isObject&&this.config.hoverPreviewEnabled){var c=a("span","preview-text")
c.appendChild(document.createTextNode(this.getInlinepreview())),e.appendChild(c)}var u=a("div","children")
return this.isObject&&u.classList.add(s("object")),this.isArray&&u.classList.add(s("array")),this.isEmpty&&u.classList.add(s("empty")),this.config&&this.config.theme&&this.element.classList.add(s(this.config.theme)),this.isOpen&&this.element.classList.add(s("open")),this.element.appendChild(e),this.element.appendChild(u),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&e.addEventListener("click",this.toggleOpen.bind(this)),this.element},e.prototype.appendChildren=function(t){var n=this
void 0===t&&(t=!1)
var r=this.element.querySelector("div.".concat(s("children")))
if(r&&!this.isEmpty){var o=function(t,o){var i=n.isLargeArray?[o*n.config.maxArrayItems,Math.min(n.json.length-1,o*n.config.maxArrayItems+(n.config.maxArrayItems-1))]:void 0,s=n.isArrayRange?(n.arrayRange[0]+o).toString():t,a=new e(i?n.json.slice(i[0],i[1]+1):n.json[t],n.open-1,n.config,t,s,i?n.path:n.path.concat(s),i)
r.appendChild(a.render())}
if(t){var i=0,a=function(){var e=n.keys[i]
o(e,i),(i+=1)<n.keys.length&&(i>10?a():p(a))}
p(a)}else this.keys.forEach((function(e,t){return o(e,t)}))}},e.prototype.removeChildren=function(e){void 0===e&&(e=!1)
var t=this.element.querySelector("div.".concat(s("children")))
if(e){var n=0,r=function(){t&&t.children.length&&(t.removeChild(t.children[0]),(n+=1)>10?r():p(r))}
p(r)}else t&&(t.innerHTML="")},e}()
e.exports=d}}])
