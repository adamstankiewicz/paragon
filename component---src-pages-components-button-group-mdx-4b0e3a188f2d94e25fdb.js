(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0jh0":function(t,n){t.exports=function(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}},"2klF":function(t,n){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"A2+M":function(t,n,r){var e=r("X8hv");t.exports={MDXRenderer:e}},Ck4i:function(t,n,r){var e=r("Q83E"),o=r("2klF");function a(n,r,u){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(t,o));return r&&e(a,r.prototype),a},a.apply(null,arguments)}t.exports=a},KcSJ:function(t,n,r){"use strict";var e=r("q1tI"),o=r.n(e),a=r("A2+M"),u=r("7ljp"),i=r("MhRC"),c=(r("hZTp"),{pre:function(t){return o.a.createElement("div",t)},code:i.a}),p=function(t){var n=t.children,r=n;return"string"==typeof r&&(r=o.a.createElement(a.MDXRenderer,null,n)),o.a.createElement(u.MDXProvider,{components:c},r)};n.a=function(t){return o.a.createElement("div",null,o.a.createElement(p,null,t.children))}},Q83E:function(t,n){function r(n,e){return t.exports=r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},r(n,e)}t.exports=r},R7tm:function(t,n,r){var e=r("qHws"),o=r("gC2u"),a=r("dQcQ"),u=r("m7BV");t.exports=function(t){return e(t)||o(t)||a(t)||u()}},X8hv:function(t,n,r){var e=r("Ck4i"),o=r("R7tm"),a=r("0jh0"),u=r("uDP2");function i(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function c(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var p=r("q1tI"),l=r("7ljp"),s=l.useMDXComponents,m=l.mdx,f=r("BfwJ").useMDXScope;t.exports=function(t){var n=t.scope,r=t.components,a=t.children,i=u(t,["scope","components","children"]),l=s(r),b=f(n),y=p.useMemo((function(){if(!a)return null;var t=c({React:p,mdx:m},b),n=Object.keys(t),r=n.map((function(n){return t[n]}));return e(Function,["_fn"].concat(o(n),[""+a])).apply(void 0,[{}].concat(o(r)))}),[a,n]);return p.createElement(y,c({components:l},i))}},dQcQ:function(t,n,r){var e=r("hMe3");t.exports=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}},gC2u:function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}},m7BV:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(t,n,r){var e=r("hMe3");t.exports=function(t){if(Array.isArray(t))return e(t)}},yCrB:function(t,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return p})),r.d(n,"default",(function(){return m}));var e=r("8o2o"),o=(r("q1tI"),r("7ljp")),a=r("KcSJ"),u=r("mwIZ"),i=r.n(u),c=r("BXwR"),p={},l={_frontmatter:p},s=a.a;function m(t){var n=t.components,r=Object(e.a)(t,["components"]);return Object(o.mdx)(s,Object.assign({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Button Group"),Object(o.mdx)(c.a,{frontmatter:i()(r,"pageContext.frontmatter")?r.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(o.mdx)("br",null),Object(o.mdx)("a",{href:"https://react-bootstrap.github.io/components/button-group/",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<>\n  <ButtonGroup size="lg" className="mb-2">\n    <Button variant="primary">Left</Button>\n    <Button variant="primary">Middle</Button>\n    <Button variant="primary">Right</Button>\n  </ButtonGroup>\n  <br />\n  <ButtonGroup className="mb-2">\n    <Button variant="primary">Left</Button>\n    <Button variant="primary">Middle</Button>\n    <Button variant="primary">Right</Button>\n  </ButtonGroup>\n  <br />\n  <ButtonGroup size="sm">\n    <Button variant="primary">Left</Button>\n    <Button variant="primary">Middle</Button>\n    <Button variant="primary">Right</Button>\n  </ButtonGroup>\n</>\n')),Object(o.mdx)("h5",null,"ButtonToolbar"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ButtonToolbar aria-label="Toolbar with button groups">\n  <ButtonGroup className="mr-2" aria-label="First group">\n    <Button variant="primary">1</Button>\n    <Button variant="primary">2</Button>\n    <Button variant="primary">3</Button>\n    <Button variant="primary">4</Button>\n  </ButtonGroup>\n  <ButtonGroup className="mr-2" aria-label="Second group">\n    <Button variant="primary">5</Button>\n    <Button variant="primary">6</Button>\n    <Button variant="primary">7</Button>\n  </ButtonGroup>\n  <ButtonGroup aria-label="Third group">\n    <Button variant="primary">8</Button>\n  </ButtonGroup>\n</ButtonToolbar>\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-button-group-mdx-4b0e3a188f2d94e25fdb.js.map