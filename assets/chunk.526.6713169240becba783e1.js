/*! For license information please see chunk.526.6713169240becba783e1.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[526],{836:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>P})
var r=n(927),o=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=o.join(","),s="undefined"==typeof Element,a=s?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!s&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(i))
return t&&a.call(e,i)&&r.unshift(e),r.filter(n)},u=function e(t,n,r){for(var o=[],s=Array.from(t);s.length;){var l=s.shift()
if("SLOT"===l.tagName){var c=l.assignedElements(),u=e(c.length?c:l.children,!0,r)
r.flatten?o.push.apply(o,u):o.push({scope:l,candidates:u})}else{a.call(l,i)&&r.filter(l)&&(n||!t.includes(l))&&o.push(l)
var p=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),f=!r.shadowRootFilter||r.shadowRootFilter(l)
if(p&&f){var h=e(!0===p?l.children:p.children,!0,r)
r.flatten?o.push.apply(o,h):o.push({scope:l,candidates:h})}else s.unshift.apply(s,l.children)}}return o},p=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},f=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},d=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},v=function(e,t){return!(t.disabled||function(e){return h(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var o=a.call(e,"details>summary:first-of-type")?e.parentElement:e
if(a.call(o,"details:not([open]) *"))return!0
var i=l(e).host,s=(null==i?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return d(e)}else{if("function"==typeof r){for(var c=e;e;){var u=e.parentElement,p=l(e)
if(u&&!u.shadowRoot&&!0===r(u))return d(e)
e=e.assignedSlot?e.assignedSlot:u||p===e.ownerDocument?u:p.host}e=c}if(s)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!a.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(function(e){return function(e){return h(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||l(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!o||o===e}(e)}(t)||p(t)<0||!v(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},g=function e(t){var n=[],r=[]
return t.forEach((function(t,o){var i=!!t.scope,s=i?t.scope:t,a=p(s,i),l=i?e(t.candidates):s
0===a?i?n.push.apply(n,l):n.push(s):r.push({documentOrder:o,tabIndex:a,item:t,isScope:i,content:l})})),r.sort(f).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},k=function(e,t){var n
return n=(t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):c(e,t.includeContainer,m.bind(null,t)),g(n)},y=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,i)&&m(t,e)},_=o.concat("iframe").join(","),j=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,_)&&v(t,e)}
function w(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?w(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x,O=(x=[],{activateTrap:function(e){if(x.length>0){var t=x[x.length-1]
t!==e&&t.pause()}var n=x.indexOf(e);-1===n||x.splice(n,1),x.push(e)},deactivateTrap:function(e){var t=x.indexOf(e);-1!==t&&x.splice(t,1),x.length>0&&x[x.length-1].unpause()}}),S=function(e){return setTimeout(e,0)},M=function(e,t){var n=-1
return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},E=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},T=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},I=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=C({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},s=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},a=function(e){return i.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes
return n.contains(e)||r.find((function(t){return t===e}))}))},l=function(e){var t=o[e]
if("function"==typeof t){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s]
t=t.apply(void 0,i)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t
if("string"==typeof t&&!(a=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return a},p=function(){var e=l("initialFocus")
if(!1===e)return!1
if(void 0===e)if(a(r.activeElement)>=0)e=r.activeElement
else{var t=i.tabbableGroups[0]
e=t&&t.firstTabbableNode||l("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},f=function(){if(i.containerGroups=i.containers.map((function(e){var t,n,r=k(e,o.tabbableOptions),i=(t=e,(n=(n=o.tabbableOptions)||{}).getShadowRoot?u([t],n.includeContainer,{filter:v.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):c(t,n.includeContainer,v.bind(null,n)))
return{container:e,tabbableNodes:r,focusableNodes:i,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=i.findIndex((function(t){return t===e}))
if(!(n<0))return t?i.slice(n+1).find((function(e){return y(e,o.tabbableOptions)})):i.slice(0,n).reverse().find((function(e){return y(e,o.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},h=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(p()))},d=function(e){var t=l("setReturnFocus",e)
return t||!1!==t&&e},m=function(e){var t=T(e)
a(t)>=0||(E(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!j(t,o.tabbableOptions)}):E(o.allowOutsideClick,e)||e.preventDefault())},b=function(e){var t=T(e),n=a(t)>=0
n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),h(i.mostRecentlyFocusedNode||p()))},g=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==E(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=T(e)
f()
var n=null
if(i.tabbableGroups.length>0){var r=a(t),s=r>=0?i.containerGroups[r]:void 0
if(r<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var c=M(i.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(c<0&&(s.container===t||j(t,o.tabbableOptions)&&!y(t,o.tabbableOptions)&&!s.nextTabbableNode(t,!1))&&(c=r),c>=0){var u=0===c?i.tabbableGroups.length-1:c-1
n=i.tabbableGroups[u].lastTabbableNode}}else{var p=M(i.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(p<0&&(s.container===t||j(t,o.tabbableOptions)&&!y(t,o.tabbableOptions)&&!s.nextTabbableNode(t))&&(p=r),p>=0){var d=p===i.tabbableGroups.length-1?0:p+1
n=i.tabbableGroups[d].firstTabbableNode}}}else n=l("fallbackFocus")
n&&(e.preventDefault(),h(n))}(e)},_=function(e){var t=T(e)
a(t)>=0||E(o.clickOutsideDeactivates,e)||E(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},w=function(){if(i.active)return O.activateTrap(n),i.delayInitialFocusTimer=o.delayInitialFocus?S((function(){h(p())})):h(p()),r.addEventListener("focusin",b,!0),r.addEventListener("mousedown",m,{capture:!0,passive:!1}),r.addEventListener("touchstart",m,{capture:!0,passive:!1}),r.addEventListener("click",_,{capture:!0,passive:!1}),r.addEventListener("keydown",g,{capture:!0,passive:!1}),n},A=function(){if(i.active)return r.removeEventListener("focusin",b,!0),r.removeEventListener("mousedown",m,!0),r.removeEventListener("touchstart",m,!0),r.removeEventListener("click",_,!0),r.removeEventListener("keydown",g,!0),n}
return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this
var t=s(e,"onActivate"),n=s(e,"onPostActivate"),o=s(e,"checkCanFocusTrap")
o||f(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var a=function(){o&&f(),w(),n&&n()}
return o?(o(i.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!i.active)return this
var t=C({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},e)
clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,A(),i.active=!1,i.paused=!1,O.deactivateTrap(n)
var r=s(t,"onDeactivate"),a=s(t,"onPostDeactivate"),l=s(t,"checkCanReturnFocus"),c=s(t,"returnFocus","returnFocusOnDeactivate")
r&&r()
var u=function(){S((function(){c&&h(d(i.nodeFocusedBeforeActivation)),a&&a()}))}
return c&&l?(l(d(i.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,A()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,f(),w(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return i.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),i.active&&f(),this}}).updateContainerElements(e),n}
let N
try{N=(0,r.capabilities)("3.22")}catch{N=(0,r.capabilities)("3.13")}var P=(0,r.setModifierManager)((()=>({capabilities:N,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,n){let{named:{isActive:r,isPaused:o,shouldSelfFocus:i,focusTrapOptions:s,_createFocusTrap:a}}=n
e.focusTrapOptions={...s}||{},void 0!==r&&(e.isActive=r),void 0!==o&&(e.isPaused=o),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&i&&(e.focusTrapOptions.initialFocus=t)
let l=I
a&&(l=a),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=l(t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,t){let{named:n}=t
const r=n.focusTrapOptions||{}
if(e.isActive&&!n.isActive){const{returnFocusOnDeactivate:t}=r,n=void 0===t
e.focusTrap.deactivate({returnFocus:n})}else!e.isActive&&n.isActive&&e.focusTrap.activate()
e.isPaused&&!n.isPaused?e.focusTrap.unpause():!e.isPaused&&n.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=r,void 0!==n.isActive&&(e.isActive=n.isActive),void 0!==n.isPaused&&(e.isPaused=n.isPaused)},destroyModifier(e){let{focusTrap:t}=e
t.deactivate()}})),class{})},662:function(e){e.exports=function(){"use strict"
function e(e){return null===e?"null":typeof e}function t(e){return!!e&&"object"==typeof e}function n(e){if(void 0===e)return""
if(null===e)return"Object"
if("object"==typeof e&&!e.constructor)return"Object"
var t=/function ([^(]*)/.exec(e.constructor.toString())
return t&&t.length>1?t[1]:""}function r(e,t,n){return"null"===e||"undefined"===e?e:("string"!==e&&"stringifiable"!==e||(n='"'+n.replace(/"/g,'\\"')+'"'),"function"===e?t.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{…}":n)}function o(o){var i=""
return t(o)?(i=n(o),Array.isArray(o)&&(i+="["+o.length+"]")):i=r(e(o),o,o),i}function i(e){return"json-formatter-"+e}function s(e,t,n){var r=document.createElement(e)
return t&&r.classList.add(i(t)),void 0!==n&&(n instanceof Node?r.appendChild(n):r.appendChild(document.createTextNode(String(n)))),r}!function(e){if("undefined"!=typeof window){var t=document.createElement("style")
t.setAttribute("media","screen"),t.innerHTML='.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n',document.head.appendChild(t)}}()
var a=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,l=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,c=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,u=window.requestAnimationFrame||function(e){return e(),0},p={hoverPreviewEnabled:!1,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null}
return function(){function f(e,t,n,r){void 0===t&&(t=1),void 0===n&&(n=p),this.json=e,this.open=t,this.config=n,this.key=r,this._isOpen=null,void 0===this.config.hoverPreviewEnabled&&(this.config.hoverPreviewEnabled=p.hoverPreviewEnabled),void 0===this.config.hoverPreviewArrayCount&&(this.config.hoverPreviewArrayCount=p.hoverPreviewArrayCount),void 0===this.config.hoverPreviewFieldCount&&(this.config.hoverPreviewFieldCount=p.hoverPreviewFieldCount),void 0===this.config.useToJSON&&(this.config.useToJSON=p.useToJSON),""===this.key&&(this.key='""')}return Object.defineProperty(f.prototype,"isOpen",{get:function(){return null!==this._isOpen?this._isOpen:this.open>0},set:function(e){this._isOpen=e},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"isDate",{get:function(){return this.json instanceof Date||"string"===this.type&&(a.test(this.json)||c.test(this.json)||l.test(this.json))},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"isUrl",{get:function(){return"string"===this.type&&0===this.json.indexOf("http")},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"isObject",{get:function(){return t(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&"stringifiable"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"hasKey",{get:function(){return void 0!==this.key},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"constructorName",{get:function(){return n(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":e(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"keys",{get:function(){if(this.isObject){var e=Object.keys(this.json)
return!this.isArray&&this.config.sortPropertiesBy?e.sort(this.config.sortPropertiesBy):e}return[]},enumerable:!0,configurable:!0}),f.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(i("open")))},f.prototype.openAtDepth=function(e){void 0===e&&(e=1),e<0||(this.open=e,this.isOpen=0!==e,this.element&&(this.removeChildren(!1),0===e?this.element.classList.remove(i("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(i("open")))))},f.prototype.getInlinepreview=function(){var e=this
if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array["+this.json.length+"]":"["+this.json.map(o).join(", ")+"]"
var t=this.keys,n=t.slice(0,this.config.hoverPreviewFieldCount).map((function(t){return t+":"+o(e.json[t])})),r=t.length>=this.config.hoverPreviewFieldCount?"…":""
return"{"+n.join(", ")+r+"}"},f.prototype.render=function(){this.element=s("div","row")
var e=this.isObject?s("a","toggler-link"):s("span")
if(this.isObject&&!this.useToJSON&&e.appendChild(s("span","toggler")),this.hasKey&&e.appendChild(s("span","key",this.key+":")),this.isObject&&!this.useToJSON){var t=s("span","value"),n=s("span"),o=s("span","constructor-name",this.constructorName)
if(n.appendChild(o),this.isArray){var a=s("span")
a.appendChild(s("span","bracket","[")),a.appendChild(s("span","number",this.json.length)),a.appendChild(s("span","bracket","]")),n.appendChild(a)}t.appendChild(n),e.appendChild(t)}else{(t=this.isUrl?s("a"):s("span")).classList.add(i(this.type)),this.isDate&&t.classList.add(i("date")),this.isUrl&&(t.classList.add(i("url")),t.setAttribute("href",this.json))
var l=r(this.type,this.json,this.useToJSON?this.json.toJSON():this.json)
t.appendChild(document.createTextNode(l)),e.appendChild(t)}if(this.isObject&&this.config.hoverPreviewEnabled){var c=s("span","preview-text")
c.appendChild(document.createTextNode(this.getInlinepreview())),e.appendChild(c)}var u=s("div","children")
return this.isObject&&u.classList.add(i("object")),this.isArray&&u.classList.add(i("array")),this.isEmpty&&u.classList.add(i("empty")),this.config&&this.config.theme&&this.element.classList.add(i(this.config.theme)),this.isOpen&&this.element.classList.add(i("open")),this.element.appendChild(e),this.element.appendChild(u),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&e.addEventListener("click",this.toggleOpen.bind(this)),this.element},f.prototype.appendChildren=function(e){var t=this
void 0===e&&(e=!1)
var n=this.element.querySelector("div."+i("children"))
if(n&&!this.isEmpty)if(e){var r=0,o=function(){var e=t.keys[r],i=new f(t.json[e],t.open-1,t.config,e)
n.appendChild(i.render()),(r+=1)<t.keys.length&&(r>10?o():u(o))}
u(o)}else this.keys.forEach((function(e){var r=new f(t.json[e],t.open-1,t.config,e)
n.appendChild(r.render())}))},f.prototype.removeChildren=function(e){void 0===e&&(e=!1)
var t=this.element.querySelector("div."+i("children"))
if(e){var n=0,r=function(){t&&t.children.length&&(t.removeChild(t.children[0]),(n+=1)>10?r():u(r))}
u(r)}else t&&(t.innerHTML="")},f}()}()},801:(e,t)=>{"use strict"
function n(e){let t,n
return"function"==typeof e?t=e:(t=e.get,n=e.set),function(e,r){let o={}
return void 0!==t&&(o.get=function(){return t.call(this,this,r)}),void 0!==n&&(o.set=function(e){return n.call(this,this,r,e)}),o}}function r(e,t){let n=t.split("."),r=e
for(let o of n){if(null==r)break
r="function"==typeof r.get?r.get(o):r[o]}return r}function o(e,t){return t.map((t=>r(e,t)))}function i(e,t,n){let o=t.substr(0,t.lastIndexOf(".")),i=t.substr(t.lastIndexOf(".")+1),s=o?r(e,o):e
"function"==typeof s.set?s.set(i,n):s[i]=n}function s(e){return!Boolean(e)||!(!Array.isArray(e)||0!==e.length)}function a(e){let t=new Set
return e.forEach((e=>t.add(e))),t}function l(e){if(e.values)return Array.from(e)
let t=[]
return e.forEach((e=>t.push(e))),t}function c(e,t){return n((n=>r(n,e).filter(t)))}function u(e,t){return n((n=>r(n,e).map(t)))}function p(e,t){return n((n=>r(n,e).slice().sort(t)))}function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n((e=>{let n=o(e,t),r=new Set
for(let t of n)t.forEach((e=>r.add(e)))
return l(r)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,t.alias=function(e){return n({get:t=>r(t,e),set(t,n,r){i(t,e,r)}})},t.deprecatingAlias=function(e,t){return n({get:(n,o)=>(console.warn(`You got ${n}#${String(o)}, but that value has been deprecated: ${t}`),r(n,e)),set(n,r,o){console.warn(`You set ${n}#${String(r)}, but that value has been deprecated: ${t}`),i(n,e,o)}})},t.reads=function(e,t){return n((n=>{let o=r(n,e)
return null==o&&(o="function"==typeof t?t():t),o}))},t.overridableReads=function(e){return n({get:t=>r(t,e),set(e,t,n){Object.defineProperty(e,t,{writable:!0,configurable:!0,value:n})}})},t.and=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n((e=>o(e,t).reduce(((e,t)=>e&&t),!0)))},t.bool=function(e){return n((t=>Boolean(r(t,e))))},t.empty=function(e){return n((t=>s(r(t,e))))},t.equal=function(e,t){return n((n=>r(n,e)===t))},t.gt=function(e,t){return n((n=>r(n,e)>t))},t.gte=function(e,t){return n((n=>r(n,e)>=t))},t.not=function(e){return n((t=>!r(t,e)))},t.notEmpty=function(e){return n((t=>!s(r(t,e))))},t.match=function(e,t){return n((n=>t.test(r(n,e))))},t.nullish=function(e){return n((t=>null==r(t,e)))},t.or=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n((e=>o(e,t).reduce(((e,t)=>e||t),!1)))},t.lt=function(e,t){return n((n=>r(n,e)<t))},t.lte=function(e,t){return n((n=>r(n,e)<=t))},t.collect=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n((e=>o(e,t)))},t.diff=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n((e=>{let n=o(e,t),r=n.shift()
for(let t of n){let e=a(t)
r=r.filter((t=>!e.has(t)))}return r}))},t.filter=c,t.filterBy=function(e,t,n){return c(e,void 0!==n?e=>e[t]===n:e=>Boolean(e[t]))},t.intersect=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n((e=>{let n=o(e,t),r=n.shift()
for(let t of n){let e=a(t)
r=r.filter((t=>e.has(t)))}return r}))},t.map=u,t.mapBy=function(e,t){return u(e,(e=>e[t]))},t.max=function(e){return n((t=>Math.max(...r(t,e))))},t.min=function(e){return n((t=>Math.min(...r(t,e))))},t.sort=p,t.sortBy=function(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return p(e,((e,r)=>e[t]<r[t]?n?-1:1:e[t]>r[t]?n?1:-1:0))},t.sum=function(e){return n((t=>r(t,e).reduce(((e,t)=>e+t),0)))},t.union=f,t.unique=function(e){return f(e)},t.uniqueBy=function(e,t){return n((n=>{let o=r(n,e),i=new Set,s=[]
return o.forEach((e=>{let n=e[t]
i.has(n)||(i.add(n),s.push(e))})),s}))}},806:e=>{"use strict"
e.exports=e=>{const t=e.match(/^[ \t]*(?=\S)/gm)
return t?t.reduce(((e,t)=>Math.min(e,t.length)),1/0):0}},546:(e,t,n)=>{"use strict"
var r
function o(e){return(r=r||document.createElement("textarea")).innerHTML="&"+e+";",r.value}n.r(t),n.d(t,{Remarkable:()=>Se,utils:()=>_})
var i=Object.prototype.hasOwnProperty
function s(e,t){return!!e&&i.call(e,t)}function a(e){var t=[].slice.call(arguments,1)
return t.forEach((function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object")
Object.keys(t).forEach((function(n){e[n]=t[n]}))}})),e}var l=/\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g
function c(e){return e.indexOf("\\")<0?e:e.replace(l,"$1")}function u(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||65535==(65535&e)||65534==(65535&e)||e>=0&&e<=8||11===e||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function p(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e)
return String.fromCharCode(t,n)}return String.fromCharCode(e)}var f=/&([a-z#][a-z0-9]{1,31});/gi,h=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i
function d(e,t){var n=0,r=o(t)
return t!==r?r:35===t.charCodeAt(0)&&h.test(t)&&u(n="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10))?p(n):e}function v(e){return e.indexOf("&")<0?e:e.replace(f,d)}var m=/[&<>"]/,b=/[&<>"]/g,g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}
function k(e){return g[e]}function y(e){return m.test(e)?e.replace(b,k):e}var _=Object.freeze({isString:function(e){return"[object String]"===function(e){return Object.prototype.toString.call(e)}(e)},has:s,assign:a,unescapeMd:c,isValidEntityCode:u,fromCodePoint:p,replaceEntities:v,escapeHtml:y}),j={}
function w(e,t){return++t>=e.length-2?t:"paragraph_open"===e[t].type&&e[t].tight&&"inline"===e[t+1].type&&0===e[t+1].content.length&&"paragraph_close"===e[t+2].type&&e[t+2].tight?w(e,t+2):t}j.blockquote_open=function(){return"<blockquote>\n"},j.blockquote_close=function(e,t){return"</blockquote>"+C(e,t)},j.code=function(e,t){return e[t].block?"<pre><code>"+y(e[t].content)+"</code></pre>"+C(e,t):"<code>"+y(e[t].content)+"</code>"},j.fence=function(e,t,n,r,o){var i,a,l=e[t],u="",p=n.langPrefix
if(l.params){if(a=(i=l.params.split(/\s+/g)).join(" "),s(o.rules.fence_custom,i[0]))return o.rules.fence_custom[i[0]](e,t,n,r,o)
u=' class="'+p+y(v(c(a)))+'"'}return"<pre><code"+u+">"+(n.highlight&&n.highlight.apply(n.highlight,[l.content].concat(i))||y(l.content))+"</code></pre>"+C(e,t)},j.fence_custom={},j.heading_open=function(e,t){return"<h"+e[t].hLevel+">"},j.heading_close=function(e,t){return"</h"+e[t].hLevel+">\n"},j.hr=function(e,t,n){return(n.xhtmlOut?"<hr />":"<hr>")+C(e,t)},j.bullet_list_open=function(){return"<ul>\n"},j.bullet_list_close=function(e,t){return"</ul>"+C(e,t)},j.list_item_open=function(){return"<li>"},j.list_item_close=function(){return"</li>\n"},j.ordered_list_open=function(e,t){var n=e[t]
return"<ol"+(n.order>1?' start="'+n.order+'"':"")+">\n"},j.ordered_list_close=function(e,t){return"</ol>"+C(e,t)},j.paragraph_open=function(e,t){return e[t].tight?"":"<p>"},j.paragraph_close=function(e,t){var n=!(e[t].tight&&t&&"inline"===e[t-1].type&&!e[t-1].content)
return(e[t].tight?"":"</p>")+(n?C(e,t):"")},j.link_open=function(e,t,n){var r=e[t].title?' title="'+y(v(e[t].title))+'"':"",o=n.linkTarget?' target="'+n.linkTarget+'"':""
return'<a href="'+y(e[t].href)+'"'+r+o+">"},j.link_close=function(){return"</a>"},j.image=function(e,t,n){var r=' src="'+y(e[t].src)+'"',o=e[t].title?' title="'+y(v(e[t].title))+'"':""
return"<img"+r+' alt="'+(e[t].alt?y(v(c(e[t].alt))):"")+'"'+o+(n.xhtmlOut?" /":"")+">"},j.table_open=function(){return"<table>\n"},j.table_close=function(){return"</table>\n"},j.thead_open=function(){return"<thead>\n"},j.thead_close=function(){return"</thead>\n"},j.tbody_open=function(){return"<tbody>\n"},j.tbody_close=function(){return"</tbody>\n"},j.tr_open=function(){return"<tr>"},j.tr_close=function(){return"</tr>\n"},j.th_open=function(e,t){var n=e[t]
return"<th"+(n.align?' style="text-align:'+n.align+'"':"")+">"},j.th_close=function(){return"</th>"},j.td_open=function(e,t){var n=e[t]
return"<td"+(n.align?' style="text-align:'+n.align+'"':"")+">"},j.td_close=function(){return"</td>"},j.strong_open=function(){return"<strong>"},j.strong_close=function(){return"</strong>"},j.em_open=function(){return"<em>"},j.em_close=function(){return"</em>"},j.del_open=function(){return"<del>"},j.del_close=function(){return"</del>"},j.ins_open=function(){return"<ins>"},j.ins_close=function(){return"</ins>"},j.mark_open=function(){return"<mark>"},j.mark_close=function(){return"</mark>"},j.sub=function(e,t){return"<sub>"+y(e[t].content)+"</sub>"},j.sup=function(e,t){return"<sup>"+y(e[t].content)+"</sup>"},j.hardbreak=function(e,t,n){return n.xhtmlOut?"<br />\n":"<br>\n"},j.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?"<br />\n":"<br>\n":"\n"},j.text=function(e,t){return y(e[t].content)},j.htmlblock=function(e,t){return e[t].content},j.htmltag=function(e,t){return e[t].content},j.abbr_open=function(e,t){return'<abbr title="'+y(v(e[t].title))+'">'},j.abbr_close=function(){return"</abbr>"},j.footnote_ref=function(e,t){var n=Number(e[t].id+1).toString(),r="fnref"+n
return e[t].subId>0&&(r+=":"+e[t].subId),'<sup class="footnote-ref"><a href="#fn'+n+'" id="'+r+'">['+n+"]</a></sup>"},j.footnote_block_open=function(e,t,n){return(n.xhtmlOut?'<hr class="footnotes-sep" />\n':'<hr class="footnotes-sep">\n')+'<section class="footnotes">\n<ol class="footnotes-list">\n'},j.footnote_block_close=function(){return"</ol>\n</section>\n"},j.footnote_open=function(e,t){return'<li id="fn'+Number(e[t].id+1).toString()+'"  class="footnote-item">'},j.footnote_close=function(){return"</li>\n"},j.footnote_anchor=function(e,t){var n="fnref"+Number(e[t].id+1).toString()
return e[t].subId>0&&(n+=":"+e[t].subId),' <a href="#'+n+'" class="footnote-backref">↩</a>'},j.dl_open=function(){return"<dl>\n"},j.dt_open=function(){return"<dt>"},j.dd_open=function(){return"<dd>"},j.dl_close=function(){return"</dl>\n"},j.dt_close=function(){return"</dt>\n"},j.dd_close=function(){return"</dd>\n"}
var C=j.getBreak=function(e,t){return(t=w(e,t))<e.length&&"list_item_close"===e[t].type?"":"\n"}
function A(){this.rules=a({},j),this.getBreak=j.getBreak}function x(){this.__rules__=[],this.__cache__=null}function O(e,t,n,r,o){this.src=e,this.env=r,this.options=n,this.parser=t,this.tokens=o,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache=[],this.isInLabel=!1,this.linkLevel=0,this.linkContent="",this.labelUnmatchedScopes=0}function S(e,t){var n,r,o,i=-1,s=e.posMax,a=e.pos,l=e.isInLabel
if(e.isInLabel)return-1
if(e.labelUnmatchedScopes)return e.labelUnmatchedScopes--,-1
for(e.pos=t+1,e.isInLabel=!0,n=1;e.pos<s;){if(91===(o=e.src.charCodeAt(e.pos)))n++
else if(93===o&&0==--n){r=!0
break}e.parser.skipToken(e)}return r?(i=e.pos,e.labelUnmatchedScopes=0):e.labelUnmatchedScopes=n-1,e.pos=a,e.isInLabel=l,i}function M(e,t,n,r){var o,i,s,a,l,c
if(42!==e.charCodeAt(0))return-1
if(91!==e.charCodeAt(1))return-1
if(-1===e.indexOf("]:"))return-1
if((i=S(o=new O(e,t,n,r,[]),1))<0||58!==e.charCodeAt(i+1))return-1
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
92===n&&t+1<o?t+=2:t++}return!1}function N(e){return e.trim().replace(/\s+/g," ").toUpperCase()}function P(e,t,n,r){var o,i,s,a,l,c,u,p,f
if(91!==e.charCodeAt(0))return-1
if(-1===e.indexOf("]:"))return-1
if((i=S(o=new O(e,t,n,r,[]),0))<0||58!==e.charCodeAt(i+1))return-1
for(a=o.posMax,s=i+2;s<a&&(32===(l=o.src.charCodeAt(s))||10===l);s++);if(!T(o,s))return-1
for(u=o.linkContent,c=s=o.pos,s+=1;s<a&&(32===(l=o.src.charCodeAt(s))||10===l);s++);for(s<a&&c!==s&&I(o,s)?(p=o.linkContent,s=o.pos):(p="",s=c);s<a&&32===o.src.charCodeAt(s);)s++
return s<a&&10!==o.src.charCodeAt(s)?-1:(f=N(e.slice(1,i)),void 0===r.references[f]&&(r.references[f]={title:p,href:u}),s)}A.prototype.renderInline=function(e,t,n){for(var r=this.rules,o=e.length,i=0,s="";o--;)s+=r[e[i].type](e,i++,t,n,this)
return s},A.prototype.render=function(e,t,n){for(var r=this.rules,o=e.length,i=-1,s="";++i<o;)"inline"===e[i].type?s+=this.renderInline(e[i].children,t,n):s+=r[e[i].type](e,i,t,n,this)
return s},x.prototype.__find__=function(e){for(var t=this.__rules__.length,n=-1;t--;)if(this.__rules__[++n].name===e)return n
return-1},x.prototype.__compile__=function(){var e=this,t=[""]
e.__rules__.forEach((function(e){e.enabled&&e.alt.forEach((function(e){t.indexOf(e)<0&&t.push(e)}))})),e.__cache__={},t.forEach((function(t){e.__cache__[t]=[],e.__rules__.forEach((function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))}))}))},x.prototype.at=function(e,t,n){var r=this.__find__(e),o=n||{}
if(-1===r)throw new Error("Parser rule not found: "+e)
this.__rules__[r].fn=t,this.__rules__[r].alt=o.alt||[],this.__cache__=null},x.prototype.before=function(e,t,n,r){var o=this.__find__(e),i=r||{}
if(-1===o)throw new Error("Parser rule not found: "+e)
this.__rules__.splice(o,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},x.prototype.after=function(e,t,n,r){var o=this.__find__(e),i=r||{}
if(-1===o)throw new Error("Parser rule not found: "+e)
this.__rules__.splice(o+1,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},x.prototype.push=function(e,t,n){var r=n||{}
this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},x.prototype.enable=function(e,t){e=Array.isArray(e)?e:[e],t&&this.__rules__.forEach((function(e){e.enabled=!1})),e.forEach((function(e){var t=this.__find__(e)
if(t<0)throw new Error("Rules manager: invalid rule name "+e)
this.__rules__[t].enabled=!0}),this),this.__cache__=null},x.prototype.disable=function(e){(e=Array.isArray(e)?e:[e]).forEach((function(e){var t=this.__find__(e)
if(t<0)throw new Error("Rules manager: invalid rule name "+e)
this.__rules__[t].enabled=!1}),this),this.__cache__=null},x.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},O.prototype.pushPending=function(){this.tokens.push({type:"text",content:this.pending,level:this.pendingLevel}),this.pending=""},O.prototype.push=function(e){this.pending&&this.pushPending(),this.tokens.push(e),this.pendingLevel=this.level},O.prototype.cacheSet=function(e,t){for(var n=this.cache.length;n<=e;n++)this.cache.push(0)
this.cache[e]=t},O.prototype.cacheGet=function(e){return e<this.cache.length?this.cache[e]:0}
var L=" \n()[]'\".,!?-"
function F(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")}var R=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,q=/\((c|tm|r|p)\)/gi,z={c:"©",r:"®",p:"§",tm:"™"},D=/['"]/,$=/['"]/g,B=/[-\s()\[\]]/
function G(e,t){return!(t<0||t>=e.length||B.test(e[t]))}function Z(e,t,n){return e.substr(0,t)+n+e.substr(t+1)}var U=[["block",function(e){e.inlineMode?e.tokens.push({type:"inline",content:e.src.replace(/\n/g," ").trim(),level:0,lines:[0,1],children:[]}):e.block.parse(e.src,e.options,e.env,e.tokens)}],["abbr",function(e){var t,n,r,o,i=e.tokens
if(!e.inlineMode)for(t=1,n=i.length-1;t<n;t++)if("paragraph_open"===i[t-1].type&&"inline"===i[t].type&&"paragraph_close"===i[t+1].type){for(r=i[t].content;r.length&&!((o=M(r,e.inline,e.options,e.env))<0);)r=r.slice(o).trim()
i[t].content=r,r.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}],["references",function(e){var t,n,r,o,i=e.tokens
if(e.env.references=e.env.references||{},!e.inlineMode)for(t=1,n=i.length-1;t<n;t++)if("inline"===i[t].type&&"paragraph_open"===i[t-1].type&&"paragraph_close"===i[t+1].type){for(r=i[t].content;r.length&&!((o=P(r,e.inline,e.options,e.env))<0);)r=r.slice(o).trim()
i[t].content=r,r.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}],["inline",function(e){var t,n,r,o=e.tokens
for(n=0,r=o.length;n<r;n++)"inline"===(t=o[n]).type&&e.inline.parse(t.content,e.options,e.env,t.children)}],["footnote_tail",function(e){var t,n,r,o,i,s,a,l,c,u=0,p=!1,f={}
if(e.env.footnotes&&(e.tokens=e.tokens.filter((function(e){return"footnote_reference_open"===e.type?(p=!0,l=[],c=e.label,!1):"footnote_reference_close"===e.type?(p=!1,f[":"+c]=l,!1):(p&&l.push(e),!p)})),e.env.footnotes.list)){for(s=e.env.footnotes.list,e.tokens.push({type:"footnote_block_open",level:u++}),t=0,n=s.length;t<n;t++){for(e.tokens.push({type:"footnote_open",id:t,level:u++}),s[t].tokens?((a=[]).push({type:"paragraph_open",tight:!1,level:u++}),a.push({type:"inline",content:"",level:u,children:s[t].tokens}),a.push({type:"paragraph_close",tight:!1,level:--u})):s[t].label&&(a=f[":"+s[t].label]),e.tokens=e.tokens.concat(a),i="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,o=s[t].count>0?s[t].count:1,r=0;r<o;r++)e.tokens.push({type:"footnote_anchor",id:t,subId:r,level:u})
i&&e.tokens.push(i),e.tokens.push({type:"footnote_close",level:--u})}e.tokens.push({type:"footnote_block_close",level:--u})}}],["abbr2",function(e){var t,n,r,o,i,s,a,l,c,u,p,f,h=e.tokens
if(e.env.abbreviations)for(e.env.abbrRegExp||(f="(^|["+L.split("").map(F).join("")+"])("+Object.keys(e.env.abbreviations).map((function(e){return e.substr(1)})).sort((function(e,t){return t.length-e.length})).map(F).join("|")+")($|["+L.split("").map(F).join("")+"])",e.env.abbrRegExp=new RegExp(f,"g")),u=e.env.abbrRegExp,n=0,r=h.length;n<r;n++)if("inline"===h[n].type)for(t=(o=h[n].children).length-1;t>=0;t--)if("text"===(i=o[t]).type){for(l=0,s=i.content,u.lastIndex=0,c=i.level,a=[];p=u.exec(s);)u.lastIndex>l&&a.push({type:"text",content:s.slice(l,p.index+p[1].length),level:c}),a.push({type:"abbr_open",title:e.env.abbreviations[":"+p[2]],level:c++}),a.push({type:"text",content:p[2],level:c}),a.push({type:"abbr_close",level:--c}),l=u.lastIndex-p[3].length
a.length&&(l<s.length&&a.push({type:"text",content:s.slice(l),level:c}),h[n].children=o=[].concat(o.slice(0,t),a,o.slice(t+1)))}}],["replacements",function(e){var t,n,r,o,i,s
if(e.options.typographer)for(i=e.tokens.length-1;i>=0;i--)if("inline"===e.tokens[i].type)for(t=(o=e.tokens[i].children).length-1;t>=0;t--)"text"===(n=o[t]).type&&(r=(s=r=n.content).indexOf("(")<0?s:s.replace(q,(function(e,t){return z[t.toLowerCase()]})),R.test(r)&&(r=r.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),n.content=r)}],["smartquotes",function(e){var t,n,r,o,i,s,a,l,c,u,p,f,h,d,v,m,b
if(e.options.typographer)for(b=[],v=e.tokens.length-1;v>=0;v--)if("inline"===e.tokens[v].type)for(m=e.tokens[v].children,b.length=0,t=0;t<m.length;t++)if("text"===(n=m[t]).type&&!D.test(n.text)){for(a=m[t].level,h=b.length-1;h>=0&&!(b[h].level<=a);h--);b.length=h+1,i=0,s=(r=n.content).length
e:for(;i<s&&($.lastIndex=i,o=$.exec(r));)if(l=!G(r,o.index-1),i=o.index+1,d="'"===o[0],(c=!G(r,i))||l){if(p=!c,f=!l)for(h=b.length-1;h>=0&&(u=b[h],!(b[h].level<a));h--)if(u.single===d&&b[h].level===a){u=b[h],d?(m[u.token].content=Z(m[u.token].content,u.pos,e.options.quotes[2]),n.content=Z(n.content,o.index,e.options.quotes[3])):(m[u.token].content=Z(m[u.token].content,u.pos,e.options.quotes[0]),n.content=Z(n.content,o.index,e.options.quotes[1])),b.length=h
continue e}p?b.push({token:t,pos:o.index,single:d,level:a}):f&&d&&(n.content=Z(n.content,o.index,"’"))}else d&&(n.content=Z(n.content,o.index,"’"))}}]]
function J(){this.options={},this.ruler=new x
for(var e=0;e<U.length;e++)this.ruler.push(U[e][0],U[e][1])}function Y(e,t,n,r,o){var i,s,a,l,c,u,p
for(this.src=e,this.parser=t,this.options=n,this.env=r,this.tokens=o,this.bMarks=[],this.eMarks=[],this.tShift=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",u=0,p=!1,a=l=u=0,c=(s=this.src).length;l<c;l++){if(i=s.charCodeAt(l),!p){if(32===i){u++
continue}p=!0}10!==i&&l!==c-1||(10!==i&&l++,this.bMarks.push(a),this.eMarks.push(l),this.tShift.push(u),p=!1,u=0,a=l+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.lineMax=this.bMarks.length-1}function H(e,t){var n,r,o
return(r=e.bMarks[t]+e.tShift[t])>=(o=e.eMarks[t])||42!==(n=e.src.charCodeAt(r++))&&45!==n&&43!==n||r<o&&32!==e.src.charCodeAt(r)?-1:r}function K(e,t){var n,r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t]
if(r+1>=o)return-1
if((n=e.src.charCodeAt(r++))<48||n>57)return-1
for(;;){if(r>=o)return-1
if(!((n=e.src.charCodeAt(r++))>=48&&n<=57)){if(41===n||46===n)break
return-1}}return r<o&&32!==e.src.charCodeAt(r)?-1:r}J.prototype.process=function(e){var t,n,r
for(t=0,n=(r=this.ruler.getRules("")).length;t<n;t++)r[t](e)},Y.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Y.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Y.prototype.skipSpaces=function(e){for(var t=this.src.length;e<t&&32===this.src.charCodeAt(e);e++);return e},Y.prototype.skipChars=function(e,t){for(var n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},Y.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e
for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1
return e},Y.prototype.getLines=function(e,t,n,r){var o,i,s,a,l,c=e
if(e>=t)return""
if(c+1===t)return i=this.bMarks[c]+Math.min(this.tShift[c],n),s=r?this.eMarks[c]+1:this.eMarks[c],this.src.slice(i,s)
for(a=new Array(t-e),o=0;c<t;c++,o++)(l=this.tShift[c])>n&&(l=n),l<0&&(l=0),i=this.bMarks[c]+l,s=c+1<t||r?this.eMarks[c]+1:this.eMarks[c],a[o]=this.src.slice(i,s)
return a.join("")}
var V={};["article","aside","button","blockquote","body","canvas","caption","col","colgroup","dd","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","iframe","li","map","object","ol","output","p","pre","progress","script","section","style","table","tbody","td","textarea","tfoot","th","tr","thead","ul","video"].forEach((function(e){V[e]=!0}))
var W=/^<([a-zA-Z]{1,15})[\s\/>]/,X=/^<\/([a-zA-Z]{1,15})[\s>]/
function Q(e,t){var n=e.bMarks[t]+e.blkIndent,r=e.eMarks[t]
return e.src.substr(n,r-n)}function ee(e,t){var n,r,o=e.bMarks[t]+e.tShift[t],i=e.eMarks[t]
return o>=i||126!==(r=e.src.charCodeAt(o++))&&58!==r||o===(n=e.skipSpaces(o))||n>=i?-1:n}var te=[["code",function(e,t,n){var r,o
if(e.tShift[t]-e.blkIndent<4)return!1
for(o=r=t+1;r<n;)if(e.isEmpty(r))r++
else{if(!(e.tShift[r]-e.blkIndent>=4))break
o=++r}return e.line=r,e.tokens.push({type:"code",content:e.getLines(t,o,4+e.blkIndent,!0),block:!0,lines:[t,e.line],level:e.level}),!0}],["fences",function(e,t,n,r){var o,i,s,a,l,c=!1,u=e.bMarks[t]+e.tShift[t],p=e.eMarks[t]
if(u+3>p)return!1
if(126!==(o=e.src.charCodeAt(u))&&96!==o)return!1
if(l=u,(i=(u=e.skipChars(u,o))-l)<3)return!1
if((s=e.src.slice(u,p).trim()).indexOf("`")>=0)return!1
if(r)return!0
for(a=t;!(++a>=n||(u=l=e.bMarks[a]+e.tShift[a])<(p=e.eMarks[a])&&e.tShift[a]<e.blkIndent);)if(e.src.charCodeAt(u)===o&&!(e.tShift[a]-e.blkIndent>=4||(u=e.skipChars(u,o))-l<i||(u=e.skipSpaces(u))<p)){c=!0
break}return i=e.tShift[t],e.line=a+(c?1:0),e.tokens.push({type:"fence",params:s,content:e.getLines(t+1,a,i,!0),lines:[t,e.line],level:e.level}),!0},["paragraph","blockquote","list"]],["blockquote",function(e,t,n,r){var o,i,s,a,l,c,u,p,f,h,d,v=e.bMarks[t]+e.tShift[t],m=e.eMarks[t]
if(v>m)return!1
if(62!==e.src.charCodeAt(v++))return!1
if(e.level>=e.options.maxNesting)return!1
if(r)return!0
for(32===e.src.charCodeAt(v)&&v++,l=e.blkIndent,e.blkIndent=0,a=[e.bMarks[t]],e.bMarks[t]=v,i=(v=v<m?e.skipSpaces(v):v)>=m,s=[e.tShift[t]],e.tShift[t]=v-e.bMarks[t],p=e.parser.ruler.getRules("blockquote"),o=t+1;o<n&&!((v=e.bMarks[o]+e.tShift[o])>=(m=e.eMarks[o]));o++)if(62!==e.src.charCodeAt(v++)){if(i)break
for(d=!1,f=0,h=p.length;f<h;f++)if(p[f](e,o,n,!0)){d=!0
break}if(d)break
a.push(e.bMarks[o]),s.push(e.tShift[o]),e.tShift[o]=-1337}else 32===e.src.charCodeAt(v)&&v++,a.push(e.bMarks[o]),e.bMarks[o]=v,i=(v=v<m?e.skipSpaces(v):v)>=m,s.push(e.tShift[o]),e.tShift[o]=v-e.bMarks[o]
for(c=e.parentType,e.parentType="blockquote",e.tokens.push({type:"blockquote_open",lines:u=[t,0],level:e.level++}),e.parser.tokenize(e,t,o),e.tokens.push({type:"blockquote_close",level:--e.level}),e.parentType=c,u[1]=e.line,f=0;f<s.length;f++)e.bMarks[f+t]=a[f],e.tShift[f+t]=s[f]
return e.blkIndent=l,!0},["paragraph","blockquote","list"]],["hr",function(e,t,n,r){var o,i,s,a=e.bMarks[t],l=e.eMarks[t]
if((a+=e.tShift[t])>l)return!1
if(42!==(o=e.src.charCodeAt(a++))&&45!==o&&95!==o)return!1
for(i=1;a<l;){if((s=e.src.charCodeAt(a++))!==o&&32!==s)return!1
s===o&&i++}return!(i<3||(r||(e.line=t+1,e.tokens.push({type:"hr",lines:[t,e.line],level:e.level})),0))},["paragraph","blockquote","list"]],["list",function(e,t,n,r){var o,i,s,a,l,c,u,p,f,h,d,v,m,b,g,k,y,_,j,w,C,A=!0
if((p=K(e,t))>=0)v=!0
else{if(!((p=H(e,t))>=0))return!1
v=!1}if(e.level>=e.options.maxNesting)return!1
if(d=e.src.charCodeAt(p-1),r)return!0
for(b=e.tokens.length,v?(u=e.bMarks[t]+e.tShift[t],h=Number(e.src.substr(u,p-u-1)),e.tokens.push({type:"ordered_list_open",order:h,lines:k=[t,0],level:e.level++})):e.tokens.push({type:"bullet_list_open",lines:k=[t,0],level:e.level++}),o=t,g=!1,_=e.parser.ruler.getRules("list");!(!(o<n)||((f=(m=e.skipSpaces(p))>=e.eMarks[o]?1:m-p)>4&&(f=1),f<1&&(f=1),i=p-e.bMarks[o]+f,e.tokens.push({type:"list_item_open",lines:y=[t,0],level:e.level++}),a=e.blkIndent,l=e.tight,s=e.tShift[t],c=e.parentType,e.tShift[t]=m-e.bMarks[t],e.blkIndent=i,e.tight=!0,e.parentType="list",e.parser.tokenize(e,t,n,!0),e.tight&&!g||(A=!1),g=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=a,e.tShift[t]=s,e.tight=l,e.parentType=c,e.tokens.push({type:"list_item_close",level:--e.level}),o=t=e.line,y[1]=o,m=e.bMarks[t],o>=n)||e.isEmpty(o)||e.tShift[o]<e.blkIndent);){for(C=!1,j=0,w=_.length;j<w;j++)if(_[j](e,o,n,!0)){C=!0
break}if(C)break
if(v){if((p=K(e,o))<0)break}else if((p=H(e,o))<0)break
if(d!==e.src.charCodeAt(p-1))break}return e.tokens.push({type:v?"ordered_list_close":"bullet_list_close",level:--e.level}),k[1]=o,e.line=o,A&&function(e,t){var n,r,o=e.level+2
for(n=t+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===o&&"paragraph_open"===e.tokens[n].type&&(e.tokens[n+2].tight=!0,e.tokens[n].tight=!0,n+=2)}(e,b),!0},["paragraph","blockquote"]],["footnote",function(e,t,n,r){var o,i,s,a,l,c=e.bMarks[t]+e.tShift[t],u=e.eMarks[t]
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
if(47===o){if(!(i=e.src.slice(a,l).match(X)))return!1}else if(!(i=e.src.slice(a,l).match(W)))return!1
if(!0!==V[i[1].toLowerCase()])return!1
if(r)return!0}for(s=t+1;s<e.lineMax&&!e.isEmpty(s);)s++
return e.line=s,e.tokens.push({type:"htmlblock",level:e.level,lines:[t,e.line],content:e.getLines(t,s,0,!0)}),!0},["paragraph","blockquote"]],["table",function(e,t,n,r){var o,i,s,a,l,c,u,p,f,h,d
if(t+2>n)return!1
if(l=t+1,e.tShift[l]<e.blkIndent)return!1
if((s=e.bMarks[l]+e.tShift[l])>=e.eMarks[l])return!1
if(124!==(o=e.src.charCodeAt(s))&&45!==o&&58!==o)return!1
if(i=Q(e,t+1),!/^[-:| ]+$/.test(i))return!1
if((c=i.split("|"))<=2)return!1
for(p=[],a=0;a<c.length;a++){if(!(f=c[a].trim())){if(0===a||a===c.length-1)continue
return!1}if(!/^:?-+:?$/.test(f))return!1
58===f.charCodeAt(f.length-1)?p.push(58===f.charCodeAt(0)?"center":"right"):58===f.charCodeAt(0)?p.push("left"):p.push("")}if(-1===(i=Q(e,t).trim()).indexOf("|"))return!1
if(c=i.replace(/^\||\|$/g,"").split("|"),p.length!==c.length)return!1
if(r)return!0
for(e.tokens.push({type:"table_open",lines:h=[t,0],level:e.level++}),e.tokens.push({type:"thead_open",lines:[t,t+1],level:e.level++}),e.tokens.push({type:"tr_open",lines:[t,t+1],level:e.level++}),a=0;a<c.length;a++)e.tokens.push({type:"th_open",align:p[a],lines:[t,t+1],level:e.level++}),e.tokens.push({type:"inline",content:c[a].trim(),lines:[t,t+1],level:e.level,children:[]}),e.tokens.push({type:"th_close",level:--e.level})
for(e.tokens.push({type:"tr_close",level:--e.level}),e.tokens.push({type:"thead_close",level:--e.level}),e.tokens.push({type:"tbody_open",lines:d=[t+2,0],level:e.level++}),l=t+2;l<n&&!(e.tShift[l]<e.blkIndent)&&-1!==(i=Q(e,l).trim()).indexOf("|");l++){for(c=i.replace(/^\||\|$/g,"").split("|"),e.tokens.push({type:"tr_open",level:e.level++}),a=0;a<c.length;a++)e.tokens.push({type:"td_open",align:p[a],level:e.level++}),u=c[a].substring(124===c[a].charCodeAt(0)?1:0,124===c[a].charCodeAt(c[a].length-1)?c[a].length-1:c[a].length).trim(),e.tokens.push({type:"inline",content:u,level:e.level,children:[]}),e.tokens.push({type:"td_close",level:--e.level})
e.tokens.push({type:"tr_close",level:--e.level})}return e.tokens.push({type:"tbody_close",level:--e.level}),e.tokens.push({type:"table_close",level:--e.level}),h[1]=d[1]=l,e.line=l,!0},["paragraph"]],["deflist",function(e,t,n,r){var o,i,s,a,l,c,u,p,f,h,d,v,m,b
if(r)return!(e.ddIndent<0)&&ee(e,t)>=0
if(u=t+1,e.isEmpty(u)&&++u>n)return!1
if(e.tShift[u]<e.blkIndent)return!1
if((o=ee(e,u))<0)return!1
if(e.level>=e.options.maxNesting)return!1
c=e.tokens.length,e.tokens.push({type:"dl_open",lines:l=[t,0],level:e.level++}),s=t,i=u
e:for(;;){for(b=!0,m=!1,e.tokens.push({type:"dt_open",lines:[s,s],level:e.level++}),e.tokens.push({type:"inline",content:e.getLines(s,s+1,e.blkIndent,!1).trim(),level:e.level+1,lines:[s,s],children:[]}),e.tokens.push({type:"dt_close",level:--e.level});;){if(e.tokens.push({type:"dd_open",lines:a=[u,0],level:e.level++}),v=e.tight,f=e.ddIndent,p=e.blkIndent,d=e.tShift[i],h=e.parentType,e.blkIndent=e.ddIndent=e.tShift[i]+2,e.tShift[i]=o-e.bMarks[i],e.tight=!0,e.parentType="deflist",e.parser.tokenize(e,i,n,!0),e.tight&&!m||(b=!1),m=e.line-i>1&&e.isEmpty(e.line-1),e.tShift[i]=d,e.tight=v,e.parentType=h,e.blkIndent=p,e.ddIndent=f,e.tokens.push({type:"dd_close",level:--e.level}),a[1]=u=e.line,u>=n)break e
if(e.tShift[u]<e.blkIndent)break e
if((o=ee(e,u))<0)break
i=u}if(u>=n)break
if(s=u,e.isEmpty(s))break
if(e.tShift[s]<e.blkIndent)break
if((i=s+1)>=n)break
if(e.isEmpty(i)&&i++,i>=n)break
if(e.tShift[i]<e.blkIndent)break
if((o=ee(e,i))<0)break}return e.tokens.push({type:"dl_close",level:--e.level}),l[1]=u,e.line=u,b&&function(e,t){var n,r,o=e.level+2
for(n=t+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===o&&"paragraph_open"===e.tokens[n].type&&(e.tokens[n+2].tight=!0,e.tokens[n].tight=!0,n+=2)}(e,c),!0},["paragraph"]],["paragraph",function(e,t){var n,r,o,i,s,a,l=t+1
if(l<(n=e.lineMax)&&!e.isEmpty(l))for(a=e.parser.ruler.getRules("paragraph");l<n&&!e.isEmpty(l);l++)if(!(e.tShift[l]-e.blkIndent>3)){for(o=!1,i=0,s=a.length;i<s;i++)if(a[i](e,l,n,!0)){o=!0
break}if(o)break}return r=e.getLines(t,l,e.blkIndent,!1).trim(),e.line=l,r.length&&(e.tokens.push({type:"paragraph_open",tight:!1,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:r,level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"paragraph_close",tight:!1,level:e.level})),!0}]]
function ne(){this.ruler=new x
for(var e=0;e<te.length;e++)this.ruler.push(te[e][0],te[e][1],{alt:(te[e][2]||[]).slice()})}ne.prototype.tokenize=function(e,t,n){for(var r,o=this.ruler.getRules(""),i=o.length,s=t,a=!1;s<n&&(e.line=s=e.skipEmptyLines(s),!(s>=n))&&!(e.tShift[s]<e.blkIndent);){for(r=0;r<i&&!o[r](e,s,n,!1);r++);if(e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),(s=e.line)<n&&e.isEmpty(s)){if(a=!0,++s<n&&"list"===e.parentType&&e.isEmpty(s))break
e.line=s}}}
var re=/[\n\t]/g,oe=/\r[\n\u0085]|[\u2424\u2028\u0085]/g,ie=/\u00a0/g
function se(e){switch(e){case 10:case 92:case 96:case 42:case 95:case 94:case 91:case 93:case 33:case 38:case 60:case 62:case 123:case 125:case 36:case 37:case 64:case 126:case 43:case 61:case 58:return!0
default:return!1}}ne.prototype.parse=function(e,t,n,r){var o,i=0,s=0
if(!e)return[];(e=(e=e.replace(ie," ")).replace(oe,"\n")).indexOf("\t")>=0&&(e=e.replace(re,(function(t,n){var r
return 10===e.charCodeAt(n)?(i=n+1,s=0,t):(r="    ".slice((n-i-s)%4),s=n-i+1,r)}))),o=new Y(e,this,t,n,r),this.tokenize(o,o.line,o.lineMax)}
for(var ae=[],le=0;le<256;le++)ae.push(0)
function ce(e){return e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122}function ue(e,t){var n,r,o,i=t,s=!0,a=!0,l=e.posMax,c=e.src.charCodeAt(t)
for(n=t>0?e.src.charCodeAt(t-1):-1;i<l&&e.src.charCodeAt(i)===c;)i++
return i>=l&&(s=!1),(o=i-t)>=4?s=a=!1:(32!==(r=i<l?e.src.charCodeAt(i):-1)&&10!==r||(s=!1),32!==n&&10!==n||(a=!1),95===c&&(ce(n)&&(s=!1),ce(r)&&(a=!1))),{can_open:s,can_close:a,delims:o}}"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e){ae[e.charCodeAt(0)]=1}))
var pe=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,fe=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,he=["coap","doi","javascript","aaa","aaas","about","acap","cap","cid","crid","data","dav","dict","dns","file","ftp","geo","go","gopher","h323","http","https","iax","icap","im","imap","info","ipp","iris","iris.beep","iris.xpc","iris.xpcs","iris.lwz","ldap","mailto","mid","msrp","msrps","mtqp","mupdate","news","nfs","ni","nih","nntp","opaquelocktoken","pop","pres","rtsp","service","session","shttp","sieve","sip","sips","sms","snmp","soap.beep","soap.beeps","tag","tel","telnet","tftp","thismessage","tn3270","tip","tv","urn","vemmi","ws","wss","xcon","xcon-userid","xmlrpc.beep","xmlrpc.beeps","xmpp","z39.50r","z39.50s","adiumxtra","afp","afs","aim","apt","attachment","aw","beshare","bitcoin","bolo","callto","chrome","chrome-extension","com-eventbrite-attendee","content","cvs","dlna-playsingle","dlna-playcontainer","dtn","dvb","ed2k","facetime","feed","finger","fish","gg","git","gizmoproject","gtalk","hcp","icon","ipn","irc","irc6","ircs","itms","jar","jms","keyparc","lastfm","ldaps","magnet","maps","market","message","mms","ms-help","msnim","mumble","mvn","notes","oid","palm","paparazzi","platform","proxy","psyc","query","res","resource","rmi","rsync","rtmp","secondlife","sftp","sgn","skype","smb","soldat","spotify","ssh","steam","svn","teamspeak","things","udp","unreal","ut2004","ventrilo","view-source","webcal","wtai","wyciwyg","xfire","xri","ymsgr"],de=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,ve=/^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/
function me(e,t){return e=e.source,t=t||"",function n(r,o){return r?(o=o.source||o,e=e.replace(r,o),n):new RegExp(e,t)}}var be=me(/(?:unquoted|single_quoted|double_quoted)/)("unquoted",/[^"'=<>`\x00-\x20]+/)("single_quoted",/'[^']*'/)("double_quoted",/"[^"]*"/)(),ge=me(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name",/[a-zA-Z_:][a-zA-Z0-9:._-]*/)("attr_value",be)(),ke=me(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute",ge)(),ye=me(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag",ke)("close_tag",/<\/[A-Za-z][A-Za-z0-9]*\s*>/)("comment",/<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/)("processing",/<[?].*?[?]>/)("declaration",/<![A-Z]+\s+[^>]*>/)("cdata",/<!\[CDATA\[[\s\S]*?\]\]>/)(),_e=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,je=/^&([a-z][a-z0-9]{1,31});/i,we=[["text",function(e,t){for(var n=e.pos;n<e.posMax&&!se(e.src.charCodeAt(n));)n++
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
break}e.parser.skipToken(e)}return n?(e.posMax=e.pos,e.pos=l+2,t||(e.push({type:"mark_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"mark_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=a,!0):(e.pos=l,!1)}],["emphasis",function(e,t){var n,r,o,i,s,a,l,c=e.posMax,u=e.pos,p=e.src.charCodeAt(u)
if(95!==p&&42!==p)return!1
if(t)return!1
if(n=(l=ue(e,u)).delims,!l.can_open)return e.pos+=n,t||(e.pending+=e.src.slice(u,e.pos)),!0
if(e.level>=e.options.maxNesting)return!1
for(e.pos=u+n,a=[n];e.pos<c;)if(e.src.charCodeAt(e.pos)!==p)e.parser.skipToken(e)
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
break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(r=e.src.slice(i+1,e.pos)).match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sub",level:e.level,content:r.replace(pe,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0):(e.pos=i,!1)}],["sup",function(e,t){var n,r,o=e.posMax,i=e.pos
if(94!==e.src.charCodeAt(i))return!1
if(t)return!1
if(i+2>=o)return!1
if(e.level>=e.options.maxNesting)return!1
for(e.pos=i+1;e.pos<o;){if(94===e.src.charCodeAt(e.pos)){n=!0
break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(r=e.src.slice(i+1,e.pos)).match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sup",level:e.level,content:r.replace(fe,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0):(e.pos=i,!1)}],["links",function(e,t){var n,r,o,i,s,a,l,c,u=!1,p=e.pos,f=e.posMax,h=e.pos,d=e.src.charCodeAt(h)
if(33===d&&(u=!0,d=e.src.charCodeAt(++h)),91!==d)return!1
if(e.level>=e.options.maxNesting)return!1
if(n=h+1,(r=S(e,h))<0)return!1
if((a=r+1)<f&&40===e.src.charCodeAt(a)){for(a++;a<f&&(32===(c=e.src.charCodeAt(a))||10===c);a++);if(a>=f)return!1
for(h=a,T(e,a)?(i=e.linkContent,a=e.pos):i="",h=a;a<f&&(32===(c=e.src.charCodeAt(a))||10===c);a++);if(a<f&&h!==a&&I(e,a))for(s=e.linkContent,a=e.pos;a<f&&(32===(c=e.src.charCodeAt(a))||10===c);a++);else s=""
if(a>=f||41!==e.src.charCodeAt(a))return e.pos=p,!1
a++}else{if(e.linkLevel>0)return!1
for(;a<f&&(32===(c=e.src.charCodeAt(a))||10===c);a++);if(a<f&&91===e.src.charCodeAt(a)&&(h=a+1,(a=S(e,a))>=0?o=e.src.slice(h,a++):a=h-1),o||(void 0===o&&(a=r+1),o=e.src.slice(n,r)),!(l=e.env.references[N(o)]))return e.pos=p,!1
i=l.href,s=l.title}return t||(e.pos=n,e.posMax=r,u?e.push({type:"image",src:i,title:s,alt:e.src.substr(n,r-n),level:e.level}):(e.push({type:"link_open",href:i,title:s,level:e.level++}),e.linkLevel++,e.parser.tokenize(e),e.linkLevel--,e.push({type:"link_close",level:--e.level}))),e.pos=a,e.posMax=f,!0}],["footnote_inline",function(e,t){var n,r,o,i,s=e.posMax,a=e.pos
return!(a+2>=s||94!==e.src.charCodeAt(a)||91!==e.src.charCodeAt(a+1)||e.level>=e.options.maxNesting||(n=a+2,(r=S(e,a+1))<0||(t||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),o=e.env.footnotes.list.length,e.pos=n,e.posMax=r,e.push({type:"footnote_ref",id:o,level:e.level}),e.linkLevel++,i=e.tokens.length,e.parser.tokenize(e),e.env.footnotes.list[o]={tokens:e.tokens.splice(i)},e.linkLevel--),e.pos=r+1,e.posMax=s,0)))}],["footnote_ref",function(e,t){var n,r,o,i,s=e.posMax,a=e.pos
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
return t>=97&&t<=122}(n)||!(r=e.src.slice(i).match(ye))||(t||e.push({type:"htmltag",content:e.src.slice(i,i+r[0].length),level:e.level}),e.pos+=r[0].length,0)))}],["entity",function(e,t){var n,r,i=e.pos,s=e.posMax
if(38!==e.src.charCodeAt(i))return!1
if(i+1<s)if(35===e.src.charCodeAt(i+1)){if(r=e.src.slice(i).match(_e))return t||(n="x"===r[1][0].toLowerCase()?parseInt(r[1].slice(1),16):parseInt(r[1],10),e.pending+=u(n)?p(n):p(65533)),e.pos+=r[0].length,!0}else if(r=e.src.slice(i).match(je)){var a=o(r[1])
if(r[1]!==a)return t||(e.pending+=a),e.pos+=r[0].length,!0}return t||(e.pending+="&"),e.pos++,!0}]]
function Ce(){this.ruler=new x
for(var e=0;e<we.length;e++)this.ruler.push(we[e][0],we[e][1])
this.validateLink=Ae}function Ae(e){var t=e.trim().toLowerCase()
return-1===(t=v(t)).indexOf(":")||-1===["vbscript","javascript","file","data"].indexOf(t.split(":")[0])}Ce.prototype.skipToken=function(e){var t,n,r=this.ruler.getRules(""),o=r.length,i=e.pos
if((n=e.cacheGet(i))>0)e.pos=n
else{for(t=0;t<o;t++)if(r[t](e,!0))return void e.cacheSet(i,e.pos)
e.pos++,e.cacheSet(i,e.pos)}},Ce.prototype.tokenize=function(e){for(var t,n,r=this.ruler.getRules(""),o=r.length,i=e.posMax;e.pos<i;){for(n=0;n<o&&!(t=r[n](e,!1));n++);if(t){if(e.pos>=i)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},Ce.prototype.parse=function(e,t,n,r){var o=new O(e,this,t,n,r)
this.tokenize(o)}
var xe={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","replacements","smartquotes","references","abbr2","footnote_tail"]},block:{rules:["blockquote","code","fences","footnote","heading","hr","htmlblock","lheading","list","paragraph","table"]},inline:{rules:["autolink","backticks","del","emphasis","entity","escape","footnote_ref","htmltag","links","newline","text"]}}},full:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{},block:{},inline:{}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","abbr2"]},block:{rules:["blockquote","code","fences","heading","hr","htmlblock","lheading","list","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","htmltag","links","newline","text"]}}}}
function Oe(e,t,n){this.src=t,this.env=n,this.options=e.options,this.tokens=[],this.inlineMode=!1,this.inline=e.inline,this.block=e.block,this.renderer=e.renderer,this.typographer=e.typographer}function Se(e,t){"string"!=typeof e&&(t=e,e="default"),t&&null!=t.linkify&&console.warn("linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"),this.inline=new Ce,this.block=new ne,this.core=new J,this.renderer=new A,this.ruler=new x,this.options={},this.configure(xe[e]),this.set(t||{})}Se.prototype.set=function(e){a(this.options,e)},Se.prototype.configure=function(e){var t=this
if(!e)throw new Error("Wrong `remarkable` preset, check name/content")
e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach((function(n){e.components[n].rules&&t[n].ruler.enable(e.components[n].rules,!0)}))},Se.prototype.use=function(e,t){return e(this,t),this},Se.prototype.parse=function(e,t){var n=new Oe(this,e,t)
return this.core.process(n),n.tokens},Se.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},Se.prototype.parseInline=function(e,t){var n=new Oe(this,e,t)
return n.inlineMode=!0,this.core.process(n),n.tokens},Se.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)}},648:(e,t,n)=>{"use strict"
const r=n(806)
e.exports=e=>{const t=r(e)
if(0===t)return e
const n=new RegExp(`^[ \\t]{${t}}`,"gm")
return e.replace(n,"")}}}])
