(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"0jh0":function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},"2klF":function(e,n){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"A2+M":function(e,n,t){var o=t("X8hv");e.exports={MDXRenderer:o}},Ck4i:function(e,n,t){var o=t("Q83E"),a=t("2klF");function r(n,t,l){return a()?e.exports=r=Reflect.construct:e.exports=r=function(e,n,t){var a=[null];a.push.apply(a,n);var r=new(Function.bind.apply(e,a));return t&&o(r,t.prototype),r},r.apply(null,arguments)}e.exports=r},KcSJ:function(e,n,t){"use strict";var o=t("q1tI"),a=t.n(o),r=t("A2+M"),l=t("7ljp"),i=t("MhRC"),c=(t("hZTp"),{pre:function(e){return a.a.createElement("div",e)},code:i.a}),s=function(e){var n=e.children,t=n;return"string"==typeof t&&(t=a.a.createElement(r.MDXRenderer,null,n)),a.a.createElement(l.MDXProvider,{components:c},t)};n.a=function(e){return a.a.createElement("div",null,a.a.createElement(s,null,e.children))}},Q83E:function(e,n){function t(n,o){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,o)}e.exports=t},R7tm:function(e,n,t){var o=t("qHws"),a=t("gC2u"),r=t("dQcQ"),l=t("m7BV");e.exports=function(e){return o(e)||a(e)||r(e)||l()}},VgBf:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return u})),t.d(n,"default",(function(){return m}));var o=t("8o2o"),a=(t("q1tI"),t("7ljp")),r=t("KcSJ"),l=t("Wbzz"),i=t("mwIZ"),c=t.n(i),s=t("NJaX"),d=t("BXwR"),u={},b={_frontmatter:u},p=r.a;function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)(p,Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"Data Table"),Object(a.mdx)(d.a,{frontmatter:c()(t,"pageContext.frontmatter")?t.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(a.mdx)("p",null,"The DataTable component is a wrapper that uses the ",Object(a.mdx)("a",{href:"https://react-table.tanstack.com/docs"},"react-table")," library to\ncreate tables. It can be used as is, or its subcomponents can be used on their own, allowing the developer full control."),Object(a.mdx)("h2",null,"Frontend filtering and sorting"),Object(a.mdx)("p",null,"For small tables (less than ~10,000 rows), filtering, sorting and pagination can be done\nquickly and easily on the frontend."),Object(a.mdx)("p",null,"In this example, a default TextFilter component is used for all columns. A default filter can be passed in,\nor a filter component can be defined on the column. See ",Object(a.mdx)("a",{href:"https://react-table.tanstack.com/docs/api/useFilters"},"react-table filters documentation"),"\nfor more information."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n  isSelectable\n  isSortable\n  isFilterable\n  defaultColumnValues={{ Filter: TextFilter }}\n  itemCount={7}\n  data={[\n    {\n      name: 'Lil Bub',\n      color: 'brown tabby',\n      famous_for: 'weird tongue',\n    },\n    {\n      name: 'Grumpy Cat',\n      color: 'siamese',\n      famous_for: 'serving moods',\n    },\n    {\n      name: 'Smoothie',\n      color: 'orange tabby',\n      famous_for: 'modeling',\n    },\n    {\n      name: 'Maru',\n      color: 'brown tabby',\n      famous_for: 'being a lovable oaf',\n    },\n    {\n      name: 'Keyboard Cat',\n      color: 'orange tabby',\n      famous_for: 'piano virtuoso',\n    },\n    {\n      name: 'Long Cat',\n      color: 'russian white',\n      famous_for:\n        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',\n    },\n    {\n      name: 'Zeno',\n      color: 'brown tabby',\n      famous_for: 'getting halfway there'\n    },\n  ]}\n  columns={[\n    {\n      Header: 'Name',\n      accessor: 'name',\n\n    },\n    {\n      Header: 'Famous For',\n      accessor: 'famous_for',\n    },\n    {\n      Header: 'Coat Color',\n      accessor: 'color',\n    },\n  ]}\n/>\n")),Object(a.mdx)("h2",null,"Backend filtering and sorting"),Object(a.mdx)("p",null,"For larger tables, it may make sense to do filtering, pagination and sorting on the backend.\nThe user must pass a fetchData function, which will be called when the filtering, sorting, or pagination\ndata changes."),Object(a.mdx)("strong",null,"NOTE"),": You will not see backend filtering and sorting work in this example; instead, you can see in the console what the fetchData function is called with.",Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<DataTable\n  isFilterable\n  manualFilters\n  defaultColumnValues={{ Filter: TextFilter }}\n  isPaginated\n  isSortable\n  manualSortBy\n  initialState={{\n    pageSize: 3,\n    pageIndex: 0\n  }}\n  itemCount={20}\n  fetchData={(currentState) => console.log(`This function will be called with the value: ${JSON.stringify(currentState)}}`)}\n  data={[\n  {\n    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",\n    "title": "Castle in the Sky",\n    "director": "Hayao Miyazaki",\n    "producer": "Isao Takahata",\n    "release_date": "1986",\n    "rt_score": "95",\n  },\n  {\n    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",\n    "title": "Grave of the Fireflies",\n    "director": "Isao Takahata",\n    "producer": "Toru Hara",\n    "release_date": "1988",\n    "rt_score": "97",\n  },\n  {\n    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",\n    "title": "My Neighbor Totoro",\n    "director": "Hayao Miyazaki",\n    "producer": "Hayao Miyazaki",\n    "release_date": "1988",\n    "rt_score": "93",\n  },\n  {\n    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",\n    "title": "Kiki\'s Delivery Service",\n    "director": "Hayao Miyazaki",\n    "producer": "Hayao Miyazaki",\n    "release_date": "1989",\n    "rt_score": "96",\n  },\n  {\n    "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",\n    "title": "Only Yesterday",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1991",\n    "rt_score": "100",\n  },\n  {\n    "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",\n    "title": "Porco Rosso",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "1992",\n    "rt_score": "94",\n  },\n  {\n    "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",\n    "title": "Pom Poko",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1994",\n    "rt_score": "78",\n  },\n  {\n    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",\n    "title": "Whisper of the Heart",\n    "director": "Yoshifumi Kondō",\n    "producer": "Toshio Suzuki",\n    "release_date": "1995",\n    "rt_score": "91",\n  },\n  {\n    "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",\n    "title": "Princess Mononoke",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "1997",\n    "rt_score": "92",\n  },\n  {\n    "id": "45204234-adfd-45cb-a505-a8e7a676b114",\n    "title": "My Neighbors the Yamadas",\n    "director": "Isao Takahata",\n    "producer": "Toshio Suzuki",\n    "release_date": "1999",\n    "rt_score": "75",\n  },\n  {\n    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",\n    "title": "Spirited Away",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2001",\n    "rt_score": "97",\n  },\n  {\n    "id": "90b72513-afd4-4570-84de-a56c312fdf81",\n    "title": "The Cat Returns",\n    "director": "Hiroyuki Morita",\n    "producer": "Toshio Suzuki",\n    "release_date": "2002",\n    "rt_score": "89",\n  },\n  {\n    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",\n    "title": "Howl\'s Moving Castle",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2004",\n    "rt_score": "87",\n  },\n  {\n    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",\n    "title": "Tales from Earthsea",\n    "director": "Gorō Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2006",\n    "rt_score": "41",\n  },\n  {\n    "id": "758bf02e-3122-46e0-884e-67cf83df1786",\n    "title": "Ponyo",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2008",\n    "rt_score": "92",\n  },\n  {\n    "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",\n    "title": "Arrietty",\n    "director": "Hiromasa Yonebayashi",\n    "producer": "Toshio Suzuki",\n    "release_date": "2010",\n    "rt_score": "95",\n  },\n  {\n    "id": "45db04e4-304a-4933-9823-33f389e8d74d",\n    "title": "From Up on Poppy Hill",\n    "director": "Gorō Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2011",\n    "rt_score": "83",\n  },\n  {\n    "id": "67405111-37a5-438f-81cc-4666af60c800",\n    "title": "The Wind Rises",\n    "director": "Hayao Miyazaki",\n    "producer": "Toshio Suzuki",\n    "release_date": "2013",\n    "rt_score": "89",\n  },\n  {\n    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",\n    "title": "The Tale of the Princess Kaguya",\n    "director": "Isao Takahata",\n    "producer": "Yoshiaki Nishimura",\n    "release_date": "2013",\n    "rt_score": "100",\n  },\n  {\n    "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",\n    "title": "When Marnie Was There",\n    "director": "Hiromasa Yonebayashi",\n    "producer": "Yoshiaki Nishimura",\n    "release_date": "2014",\n    "rt_score": "92",\n  }\n]}\n  columns={[\n    {\n      Header: \'Title\',\n      accessor: \'title\',\n\n    },\n    {\n      Header: \'Director\',\n      accessor: \'director\',\n    },\n    {\n      Header: \'Release date\',\n      accessor: \'release_date\',\n    },\n  ]}\n  bulkActions={[\n    {\n      buttonText: \'Download CSV\',\n      handleClick: (selectedRows) => console.log(\'Enrolling \', selectedRows),\n    },\n  ]}\n/>\n')),Object(a.mdx)("h2",null,"Actions and Bulk actions"),Object(a.mdx)("p",null,"Actions and bulk actions are actions that are performed on table rows, though bulk actions can be used for\nactions that apply to the whole table. It is up to the user to determine what the action does."),Object(a.mdx)("h3",null,"Bulk Actions"),Object(a.mdx)("p",null,"The first two bulk actions will be displayed as buttons, while the remaining bulk actions will be displayed in a\noverflow dropdown menu. The bulk actions are called with the selected rows."),Object(a.mdx)("h3",null,"Actions"),Object(a.mdx)("p",null,"An action can be definied as an additional column on the table. The Cell property can be definied to display\nany component that a user requires. It will receive the row as props."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n  isSelectable\n  itemCount={7}\n  bulkActions={[\n    {\n      buttonText: 'Enroll',\n      handleClick: (selectedRows) => console.log('Enrolling ', selectedRows),\n    },\n    {\n      buttonText: 'Assign',\n      handleClick: (selectedRows) => console.log('Assigning ', selectedRows),\n    },\n    {\n      buttonText: 'Extra action 1',\n      handleClick: (selectedRows) => console.log('Extra action 1', selectedRows),\n    },\n    {\n      buttonText: 'Extra action 2',\n      handleClick: (selectedRows) => console.log('Extra action 2 ', selectedRows),\n    },\n  ]}\n  additionalColumns={[\n    {\n      id: 'action',\n      Header: 'Action',\n      // Proptypes disabled as this prop is passed in separately\n      // eslint-disable-next-line react/prop-types\n      Cell: ({ row }) => <Button variant=\"link\" onClick={() => console.log(\"Assign\", row)}>Assign</Button>,\n    }\n  ]}\n  data={[\n    {\n      name: 'Lil Bub',\n      color: 'brown tabby',\n      famous_for: 'weird tongue',\n    },\n    {\n      name: 'Grumpy Cat',\n      color: 'siamese',\n      famous_for: 'serving moods',\n    },\n    {\n      name: 'Smoothie',\n      color: 'orange tabby',\n      famous_for: 'modeling',\n    },\n    {\n      name: 'Maru',\n      color: 'brown tabby',\n      famous_for: 'being a lovable oaf',\n    },\n    {\n      name: 'Keyboard Cat',\n      color: 'orange tabby',\n      famous_for: 'piano virtuoso',\n    },\n    {\n      name: 'Long Cat',\n      color: 'russian white',\n      famous_for:\n        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',\n    },\n    {\n      name: 'Zeno',\n      color: 'brown tabby',\n      famous_for: 'getting halfway there'\n    },\n  ]}\n  columns={[\n    {\n      Header: 'Name',\n      accessor: 'name',\n\n    },\n    {\n      Header: 'Famous For',\n      accessor: 'famous_for',\n    },\n    {\n      Header: 'Coat Color',\n      accessor: 'color',\n    },\n  ]}\n/>\n")),Object(a.mdx)("h2",null,"Props"),Object(a.mdx)("h3",null,"DataTable"),Object(a.mdx)(l.StaticQuery,{query:"3220974948",render:function(e){var n=e.dataTable,t=e.bulkActions,o=e.table,r=e.cell,l=e.headerCell,i=e.row,c=e.headerRow,d=e.filterStatus,u=e.smartStatus,b=e.rowStatus,p=e.selectionStatus,m=e.pagination,f=e.textFilter;return Object(a.mdx)("div",null,n?Object(a.mdx)(s.a,{propMetaData:n.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.Table"),o?Object(a.mdx)(s.a,{propMetaData:o.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.BulkActions"),t?Object(a.mdx)(s.a,{propMetaData:t.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.TableRow"),i?Object(a.mdx)(s.a,{propMetaData:i.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.TableHeaderRow"),c?Object(a.mdx)(s.a,{propMetaData:c.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.TableCell"),r?Object(a.mdx)(s.a,{propMetaData:r.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.TableHeaderCell"),l?Object(a.mdx)(s.a,{propMetaData:l.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.SmartStatus"),u?Object(a.mdx)(s.a,{propMetaData:u.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.RowStatus"),b?Object(a.mdx)(s.a,{propMetaData:b.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.SelectionStatus"),p?Object(a.mdx)(s.a,{propMetaData:p.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.FilterStatus"),d?Object(a.mdx)(s.a,{propMetaData:d.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"DataTable.TablePagination"),m?Object(a.mdx)(s.a,{propMetaData:m.props,mdxType:"PropsTable"}):null,Object(a.mdx)("h4",null,"TextFilter"),f?Object(a.mdx)(s.a,{propMetaData:f.props,mdxType:"PropsTable"}):null)},mdxType:"StaticQuery"}))}m.isMDXComponent=!0},X8hv:function(e,n,t){var o=t("Ck4i"),a=t("R7tm"),r=t("0jh0"),l=t("uDP2");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=t("q1tI"),d=t("7ljp"),u=d.useMDXComponents,b=d.mdx,p=t("BfwJ").useMDXScope;e.exports=function(e){var n=e.scope,t=e.components,r=e.children,i=l(e,["scope","components","children"]),d=u(t),m=p(n),f=s.useMemo((function(){if(!r)return null;var e=c({React:s,mdx:b},m),n=Object.keys(e),t=n.map((function(n){return e[n]}));return o(Function,["_fn"].concat(a(n),[""+r])).apply(void 0,[{}].concat(a(t)))}),[r,n]);return s.createElement(f,c({components:d},i))}},dQcQ:function(e,n,t){var o=t("hMe3");e.exports=function(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}},gC2u:function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}},m7BV:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,n,t){var o=t("hMe3");e.exports=function(e){if(Array.isArray(e))return o(e)}}}]);
//# sourceMappingURL=component---src-pages-table-datatable-mdx-61f295809d0cd48e607b.js.map