(this.webpackJsonppismo=this.webpackJsonppismo||[]).push([[0],{63:function(t,n,e){"use strict";e.r(n);var r,o,i,c,s,a=e(0),l=e.n(a),u=e(30),d=e.n(u),h=e(35),b=e(2),m=e(19),p=e(8),f=e(4),x=f.c.div(r||(r=Object(p.a)(["\n\twidth: 100%;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 5px;\n"]))),j=f.c.header(o||(o=Object(p.a)(["\n\twidth: 100%;\n\tmax-width: 1200px;\n\tmargin: 20px auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\timg {\n\t\twidth: 200px;\n\t}\n\n\tspan {\n\t\tfont-size: ",";\n\t\ttext-decoration: underline;\n\t}\n"])),(function(t){return t.theme.sizes.fontSizes.big})),g=f.c.form(i||(i=Object(p.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]))),O=f.c.div(c||(c=Object(p.a)(["\n\tmargin-top: 30px;\n\tdisplay: grid;\n\twidth: 100%;\n\tgrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n\talign-self: center;\n\tjustify-self: center;\n\tgap: 5%;\n"]))),w=Object(a.createContext)({}),v=f.c.div(s||(s=Object(p.a)(["\n\twidth: 100%;\n\n\tinput {\n\t\twidth: 100%;\n\t\theight: 40px;\n\t\tpadding: 3px;\n\t\tborder: 1px solid ",";\n\t\tborder-radius: 5px;\n\t\t::placeholder {\n\t\t}\n\t}\n"])),(function(t){return t.theme.colors.gray})),y=e(1);var z,k,S=function(){var t=l.a.useContext(w).setSearch;return Object(y.jsx)(v,{children:Object(y.jsx)("input",{type:"search",name:"search",placeholder:"Digite aqui o nome de um filme",onChange:function(n){return t(n.target.value)}})})},C=f.c.div(z||(z=Object(p.a)(["\n\twidth: 250px;\n\theight: 300px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\tborder-radius: 20px;\n\ttransition: 1s ease;\n\n\th3 {\n\t\tmargin-top: 20px;\n\t\tfont-weight: bold;\n\t\tfont-size: ",";\n\t}\n\n\tspan {\n\t\tmargin: 10px 0;\n\t\tfont-size: ",";\n\t\tcolor: ",";\n\t}\n\n\th4 {\n\t\tmargin-top: 100px;\n\t\tfont-weight: bold;\n\t\tfont-size: ",";\n\t\tcolor: ",";\n\t}\n\n\tp {\n\t\tcolor: ",";\n\t}\n\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.1);\n\t\tborder: 3px solid inherit;\n\t}\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.secondary}),(function(t){return t.theme.sizes.fontSizes.normal}),(function(t){return t.theme.sizes.fontSizes.normal}),(function(t){return t.theme.colors.gray}),(function(t){return t.theme.sizes.fontSizes.normal}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primary})),F=f.c.button(k||(k=Object(p.a)(["\n\tmargin-top: 20px;\n\twidth: 80%;\n\theight: 40px;\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-size: ",";\n\tborder: 1px solid ",";\n\n\tborder-radius: 5px;\n\t&:hover {\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.sizes.fontSizes.normal}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.white})),D=function(t){var n=t.movie,e=n.title,r=n.episode_id,o=n.created;return Object(y.jsxs)(C,{children:[Object(y.jsxs)("h3",{children:[" ",e]}),Object(y.jsxs)("span",{children:["Eps\xf3dio ",r]}),Object(y.jsx)("h4",{children:"Lan\xe7ado:"}),Object(y.jsx)("p",{children:new Date(o).toLocaleDateString("pt-br")}),Object(y.jsx)(F,{type:"button",children:"Selecionar"})]})},E=function(){return{count:0,results:[]}},L=e(34),J=e.n(L).a.create({baseURL:"https://swapi.dev/api",timeout:3e3}),R=function(){var t=l.a.useState(E),n=Object(m.a)(t,2),e=n[0],r=n[1],o=l.a.useState(""),i=Object(m.a)(o,2),c=i[0],s=i[1];l.a.useEffect((function(){J.get("/films").then((function(t){var n=t.data;r(n)})).catch((function(){return console.log("Houve um erro")}))}),[]);return Object(y.jsxs)(x,{children:[Object(y.jsxs)(j,{children:[Object(y.jsx)("img",{src:"/pismo-logo.png",alt:""}),Object(y.jsx)("span",{children:" Filmes"})]}),Object(y.jsxs)(g,{children:[Object(y.jsx)(w.Provider,{value:{setSearch:s},children:Object(y.jsx)(S,{})}),Object(y.jsx)(O,{children:(c?e.results.filter((function(t){return t.title.toLowerCase().includes(c)})):e.results).map((function(t){return Object(y.jsx)(D,{movie:t},t.episode_id)}))})]})]})},_=[{path:"/",exact:!0,component:R},{path:"/movies",exact:!0,component:R}];var q=function(){return Object(y.jsx)(b.c,{children:_.map((function(t){return Object(y.jsx)(b.a,Object(h.a)({},t),null===t||void 0===t?void 0:t.path)}))})};var A,B=function(){return Object(y.jsx)(q,{})},H=e(16),I=Object(f.b)(A||(A=Object(p.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 89%;  \n    box-sizing: border-box;\n    scroll-behavior: smooth;\n    font-family: 'Roboto', sans-serif;\n    \n  }\n  body {\n    background-color: #fff;\n    font-family: var(--font-family);\n    overflow-x: hidden;\n  }\n  \n  button{\n    &:hover{\n      cursor: pointer;\n    }\n  }\n  ::-webkit-scrollbar {\n    width: 8px;\n    transition: 0.3s ease;\n  }\n  ::-webkit-scrollbar-track {\n    background: var(--shadow-color);\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #1c1733;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"])));d.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(f.a,{theme:{colors:{gray:"#C5C5C5",secondary:"#FFDFA2",primary:"#E38903",white:"#FFF",black:"#000"},sizes:{fontSizes:{small:"0.8rem",normal:"1rem",big:"1.5rem"}}},children:Object(y.jsxs)(H.a,{children:[Object(y.jsx)(B,{}),Object(y.jsx)(I,{})]})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.22c61ccc.chunk.js.map