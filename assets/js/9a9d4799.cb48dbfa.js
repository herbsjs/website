(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{115:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=i.a.createContext({}),s=function(t){var e=i.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=s(t.components);return i.a.createElement(u.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},d=i.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),d=r,y=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(y,c(c({ref:e},u),{},{components:n})):i.a.createElement(y,c({ref:e},u))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(115)),o={id:"create-entity",title:"2. Creating Entities",sidebar_label:"2. Creating Entities",slug:"/tutotial/create-entity"},c={unversionedId:"tutorial/create-entity",id:"tutorial/create-entity",isDocsHomePage:!1,title:"2. Creating Entities",description:"Introduction to the Entity concept",source:"@site/docs/tutorial/create-entity.md",slug:"/tutotial/create-entity",permalink:"/docs/tutotial/create-entity",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/tutorial/create-entity.md",version:"current",sidebar_label:"2. Creating Entities",sidebar:"sidebar",previous:{title:"1. Creating a New Herbs Project",permalink:"/docs/tutotial/new-project"},next:{title:"3. Generating Repositories",permalink:"/docs/tutotial/repository"}},l=[{value:"List Entity",id:"list-entity",children:[]},{value:"Item Entity",id:"item-entity",children:[]}],u={toc:l};function s(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Introduction to the Entity concept"),Object(a.b)("h2",{id:"list-entity"},"List Entity"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Entity name"),Object(a.b)("li",{parentName:"ul"},"Entity fields"),Object(a.b)("li",{parentName:"ul"},"Entity fields validation - basic")),Object(a.b)("h2",{id:"item-entity"},"Item Entity"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Entity fields validation - more advanced")))}s.isMDXComponent=!0}}]);