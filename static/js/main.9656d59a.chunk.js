(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,o=n(6),s=n.n(o),r=n(4),a=n(7),u=n(1),i=(n(12),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="None",t.ALPABET="Alpabet",t.LENGTH="Length"}(c||(c={}));var b=function(){var t=Object(u.useState)(!1),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(u.useState)(c.NONE),b=Object(r.a)(s,2),j=b[0],h=b[1],d=Object(u.useState)(!1),O=Object(r.a)(d,2),p=O[0],N=O[1],m=function(t,e,n){var o=Object(a.a)(t);return o.sort((function(t,n){switch(e){case c.ALPABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&o.reverse(),o}(l,j,p);return Object(i.jsx)("div",{className:"App",children:n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return h(c.ALPABET)},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return h(c.LENGTH)},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return N((function(t){return!t}))},children:"Reverse"}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){h(c.NONE),N(!1)},children:"Reset"})]}),Object(i.jsx)("ul",{className:"Goods",children:m.map((function(t){return Object(i.jsx)("li",{className:"Goods__item",children:t},t)}))})]}):Object(i.jsx)("button",{type:"button",className:"button button--start",onClick:function(){return o(!0)},children:"Start"})})};s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9656d59a.chunk.js.map