(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0jh0":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"2klF":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Ck4i:function(e,t,n){var r=n("Q83E"),o=n("2klF");function c(t,n,a){return o()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,n){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}e.exports=c},KcSJ:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("7ljp"),u=n("MhRC"),s=(n("hZTp"),{pre:function(e){return o.a.createElement("div",e)},code:u.a}),i=function(e){var t=e.children,n=t;return"string"==typeof n&&(n=o.a.createElement(c.MDXRenderer,null,t)),o.a.createElement(a.MDXProvider,{components:s},n)};t.a=function(e){return o.a.createElement("div",null,o.a.createElement(i,null,e.children))}},Q83E:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},R7tm:function(e,t,n){var r=n("qHws"),o=n("gC2u"),c=n("dQcQ"),a=n("m7BV");e.exports=function(e){return r(e)||o(e)||c(e)||a()}},X8hv:function(e,t,n){var r=n("Ck4i"),o=n("R7tm"),c=n("0jh0"),a=n("uDP2");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n("q1tI"),p=n("7ljp"),l=p.useMDXComponents,f=p.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,c=e.children,u=a(e,["scope","components","children"]),p=l(n),d=m(t),b=i.useMemo((function(){if(!c)return null;var e=s({React:i,mdx:f},d),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,t]);return i.createElement(b,s({components:p},u))}},dQcQ:function(e,t,n){var r=n("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},pzYx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return f}));var r=n("8o2o"),o=(n("q1tI"),n("7ljp")),c=n("KcSJ"),a=n("mwIZ"),u=n.n(a),s=n("BXwR"),i={},p={_frontmatter:i},l=c.a;function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.mdx)(l,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Image"),Object(o.mdx)(s.a,{frontmatter:u()(n,"pageContext.frontmatter")?n.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(o.mdx)("br",null),Object(o.mdx)("a",{href:"https://react-bootstrap.github.io/components/images/",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(o.mdx)("h5",null,"Basic Styles"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<>\n  <Image\n    className="mr-2"\n    src="https://source.unsplash.com/100x100/?nature,flower"\n    rounded\n  />\n  <Image\n    className="mr-2"\n    src="https://source.unsplash.com/100x100/?nature,flower"\n    roundedCircle\n  />\n  <Image\n    className="mr-2"\n    src="https://source.unsplash.com/100x100/?nature,flower"\n    thumbnail\n  />\n</>\n')),Object(o.mdx)("h5",null,"Fluid Sizing"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Image src="https://source.unsplash.com/1600x800/?nature,flower" fluid />\n')))}f.isMDXComponent=!0},qHws:function(e,t,n){var r=n("hMe3");e.exports=function(e){if(Array.isArray(e))return r(e)}}}]);
//# sourceMappingURL=component---src-pages-components-image-mdx-5b2d8e29704b82e2ea21.js.map