(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"0jh0":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"2klF":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Ck4i:function(e,t,n){var r=n("Q83E"),o=n("2klF");function c(t,n,a){return o()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,n){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}e.exports=c},KcSJ:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("7ljp"),i=n("MhRC"),u=(n("hZTp"),{pre:function(e){return o.a.createElement("div",e)},code:i.a}),l=function(e){var t=e.children,n=t;return"string"==typeof n&&(n=o.a.createElement(c.MDXRenderer,null,t)),o.a.createElement(a.MDXProvider,{components:u},n)};t.a=function(e){return o.a.createElement("div",null,o.a.createElement(l,null,e.children))}},Q83E:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},R7tm:function(e,t,n){var r=n("qHws"),o=n("gC2u"),c=n("dQcQ"),a=n("m7BV");e.exports=function(e){return r(e)||o(e)||c(e)||a()}},VTfJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n("8o2o"),o=(n("q1tI"),n("7ljp")),c=n("KcSJ"),a=n("Wbzz"),i=n("mwIZ"),u=n.n(i),l=n("NJaX"),p=n("BXwR"),s={},f={_frontmatter:s},m=c.a;function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.mdx)(m,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Hyperlink"),Object(o.mdx)(p.a,{frontmatter:u()(n,"pageContext.frontmatter")?n.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(o.mdx)("h5",null,"minimal usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Hyperlink href="https://en.wikipedia.org/wiki/Hyperlink">edX.org</Hyperlink>\n')),Object(o.mdx)("h5",null,"with blank target"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Hyperlink destination="https://www.edx.org" target="_blank" rel="noopener noreferrer">\n  edX.org\n</Hyperlink>\n')),Object(o.mdx)("h5",null,"with onClick"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Hyperlink\n  destination="https://www.edx.org"\n  target="_blank"\n  onClick={e => {\n    e.preventDefault();\n    console.log(\'click\');\n  }}\n>\n  edX.org\n</Hyperlink>\n')),Object(o.mdx)("h5",null,"with icon"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Hyperlink destination="https://www.edx.org">\n  <Icon\n    id="SampleIcon"\n    className="fa fa-book"\n    screenReaderText="Visit edX Home"\n  />\n</Hyperlink>\n')),Object(o.mdx)("h5",null,"Props"),Object(o.mdx)(a.StaticQuery,{query:"1587376557",render:function(e){var t=e.componentMetadata;return null==t?null:Object(o.mdx)(l.a,{propMetaData:t.props,mdxType:"PropsTable"})},mdxType:"StaticQuery"}))}d.isMDXComponent=!0},X8hv:function(e,t,n){var r=n("Ck4i"),o=n("R7tm"),c=n("0jh0"),a=n("uDP2");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n("q1tI"),p=n("7ljp"),s=p.useMDXComponents,f=p.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,c=e.children,i=a(e,["scope","components","children"]),p=s(n),d=m(t),b=l.useMemo((function(){if(!c)return null;var e=u({React:l,mdx:f},d),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,t]);return l.createElement(b,u({components:p},i))}},dQcQ:function(e,t,n){var r=n("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,t,n){var r=n("hMe3");e.exports=function(e){if(Array.isArray(e))return r(e)}}}]);
//# sourceMappingURL=component---src-pages-components-hyperlink-mdx-d71233f8eb17f996b930.js.map