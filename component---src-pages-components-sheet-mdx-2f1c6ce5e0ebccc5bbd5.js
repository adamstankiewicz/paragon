(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"0jh0":function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},"2klF":function(t,n){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"8dTT":function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return u})),e.d(n,"default",(function(){return l}));var o=e("8o2o"),r=(e("q1tI"),e("7ljp")),c=e("KcSJ"),i=e("NJaX"),a=(e("mwIZ"),e("BXwR")),u={},s={query:"3202605324",_frontmatter:u},p=c.a;function l(t){var n,e=t.components,c=Object(o.a)(t,["components"]);return Object(r.mdx)(p,Object.assign({},s,c,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)("h1",null,"Sheet"),Object(r.mdx)(a.a,{frontmatter:null==c||null===(n=c.pageContext)||void 0===n?void 0:n.frontmatter,mdxType:"SingleComponentStatus"}),Object(r.mdx)("h5",null,"Basic Usage"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"\n() => {\n  const [blocking, setBlocking] = useState(false);\n  const [dark, setDark] = useState(false);\n  const [position, setPosition] = useState('bottom');\n  const [show, setShow] = useState(false);\n\n  const positions = ['left', 'right', 'top', 'bottom'];\n\n  return (\n    <>\n      <DropdownButton\n        id=\"position-dropdown-btn\"\n        onSelect={setPosition}\n        title=\"Sheet Position\"\n      >\n        {positions.map(position => (\n          <Dropdown.Item eventKey={position}>{position}</Dropdown.Item>\n        ))}\n      </DropdownButton><br />\n      <Button onClick={() => setShow(!show)}>\n        {show ? \"Hide\" : \"Show\"} the Sheet.\n      </Button>{' '}\n      <Button onClick={() => setBlocking(!blocking)}>\n        {blocking ? \"Disable\": \"Enable\"} blocking content\n      </Button>{' '}\n      <Button onClick={() => setDark(!dark)}>\n        Set {dark ? \"Light\": \"Dark\"} mode\n      </Button>\n\n      <Sheet\n        position={position}\n        show={show}\n        blocking={blocking}\n        variant={dark ? 'dark' : 'light'}\n      >\n        This is a Sheet component <br />\n        <Button\n          onClick={() => setShow(false)}\n          variant={dark ? 'inverse-primary' : 'primary'}\n        >\n          Hide Me!\n        </Button>\n      </Sheet>\n    </>\n  )\n}\n")),Object(r.mdx)(i.a,Object.assign({},c.data.componentMetadata,{mdxType:"PropsTable"})))}l.isMDXComponent=!0},"A2+M":function(t,n,e){var o=e("X8hv");t.exports={MDXRenderer:o}},Ck4i:function(t,n,e){var o=e("Q83E"),r=e("2klF");function c(n,e,i){return r()?t.exports=c=Reflect.construct:t.exports=c=function(t,n,e){var r=[null];r.push.apply(r,n);var c=new(Function.bind.apply(t,r));return e&&o(c,e.prototype),c},c.apply(null,arguments)}t.exports=c},KcSJ:function(t,n,e){"use strict";var o=e("q1tI"),r=e.n(o),c=e("A2+M"),i=e("7ljp"),a=e("MhRC"),u=(e("hZTp"),{pre:function(t){return r.a.createElement("div",t)},code:a.a}),s=function(t){var n=t.children,e=n;return"string"==typeof e&&(e=r.a.createElement(c.MDXRenderer,null,n)),r.a.createElement(i.MDXProvider,{components:u},e)};n.a=function(t){return r.a.createElement("div",null,r.a.createElement(s,null,t.children))}},Q83E:function(t,n){function e(n,o){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,o)}t.exports=e},R7tm:function(t,n,e){var o=e("qHws"),r=e("gC2u"),c=e("dQcQ"),i=e("m7BV");t.exports=function(t){return o(t)||r(t)||c(t)||i()}},X8hv:function(t,n,e){var o=e("Ck4i"),r=e("R7tm"),c=e("0jh0"),i=e("uDP2");function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var s=e("q1tI"),p=e("7ljp"),l=p.useMDXComponents,f=p.mdx,m=e("BfwJ").useMDXScope;t.exports=function(t){var n=t.scope,e=t.components,c=t.children,a=i(t,["scope","components","children"]),p=l(e),d=m(n),b=s.useMemo((function(){if(!c)return null;var t=u({React:s,mdx:f},d),n=Object.keys(t),e=n.map((function(n){return t[n]}));return o(Function,["_fn"].concat(r(n),[""+c])).apply(void 0,[{}].concat(r(e)))}),[c,n]);return s.createElement(b,u({components:p},a))}},dQcQ:function(t,n,e){var o=e("hMe3");t.exports=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}},gC2u:function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}},m7BV:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(t,n,e){var o=e("hMe3");t.exports=function(t){if(Array.isArray(t))return o(t)}}}]);
//# sourceMappingURL=component---src-pages-components-sheet-mdx-2f1c6ce5e0ebccc5bbd5.js.map