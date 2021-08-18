(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(12),o=n.n(i),b=n(5),s=n(6),d=n(7),l=n(18),u=n.n(l),j=n(8),O=n(22),p=n(2),h=n(19),m=n(14),x=n.n(m),f=Object(s.b)("contacts/ADD_CONTACT",(function(e){return{payload:Object(h.a)({id:x.a.generate()},e)}})),g=Object(s.b)("contacts/DELETE_CONTACT"),v=Object(s.b)("contacts/FILTER_CONTACT"),y=Object(s.c)([],(a={},Object(j.a)(a,f,(function(e,t){var n=t.payload;return-1!==e.map((function(e){return e.name})).indexOf(n.name)?(alert("".concat(n.name," is already in Contacts")),e):[n].concat(Object(O.a)(e))})),Object(j.a)(a,g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),C=Object(s.c)("",Object(j.a)({},v,(function(e,t){return t.payload}))),k=Object(p.b)({items:y,filter:C}),w=n(20),A=n.n(w),T={key:"contacts",storage:u.a,blacklist:["filter"]},F=Object(s.a)({reducer:{contacts:Object(d.g)(T,k)},devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}}).concat(A.a)}}),D=Object(d.h)(F),L=n(21),z=(n(42),n(43),n(4));var E=Object(z.a)("div",{target:"e1kgskd60"})({name:"1yjx7km",styles:"padding:20px"}),S=n(1);var q=function(e){var t=e.children;return Object(S.jsx)(E,{children:t})},N=n(17);var P=Object(z.a)("form",{target:"e1tyi0860"})({name:"1lt7dkk",styles:"border:2px solid black;border-radius:3px;padding:10px;width:300px;& button{margin-top:10px;}& label,input{display:block;}"});function B(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(N.a)(r,2),o=i[0],s=i[1],d=Object(b.b)(),l=function(e){var t=e.target,n=t.id,c=t.value;switch(n){case"name":a(c);break;case"number":s(c);break;default:return}};return Object(S.jsxs)(P,{onSubmit:function(e){e.preventDefault(),d(f({name:n,number:o})),a(""),s("")},children:[Object(S.jsx)("label",{htmlFor:"name",children:"Name"}),Object(S.jsx)("input",{type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:l}),Object(S.jsx)("label",{htmlFor:"number",children:"Phone"}),Object(S.jsx)("input",{type:"text",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:o,onChange:l}),Object(S.jsx)("button",{type:"submit",children:"Add Contact"})]})}var I=function(e){return e.contacts.filter},J=function(e){var t=function(e){return e.contacts.items}(e),n=I(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))};var Z=Object(z.a)("ul",{target:"en7yiki0"})({name:"icefr9",styles:"padding:10px;width:300px;list-style-type:square"});var _=Object(z.a)("li",{target:"e1sxdvvq0"})({name:"hc2ht2",styles:"display:flex;justify-content:space-between;&:not(:last-child){margin-bottom:10px;}"});function M(){var e=Object(b.c)(J),t=Object(b.b)();return Object(S.jsx)(Z,{children:e.map((function(e){return Object(S.jsxs)(_,{children:[Object(S.jsxs)("span",{children:[e.name,": ",e.number]}),Object(S.jsx)("button",{type:"button",onClick:function(){return t(g(e.id))},children:"Delete"})]},e.id)}))})}var R=Object(z.a)("div",{target:"embolca0"})({name:"101yy88",styles:"border:1px dashed black;padding:10px;width:300px;border-radius:3px"}),$=x.a.generate();function G(){var e=Object(b.c)(I),t=Object(b.b)();return Object(S.jsx)(R,{children:Object(S.jsxs)("label",{children:["Find contact by name",Object(S.jsx)("input",{id:$,value:e,onChange:function(e){return t(v(e.target.value))},name:"filter"})]})})}var H=function(){return Object(S.jsxs)(q,{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(B,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(G,{}),Object(S.jsx)(M,{})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(b.a,{store:F,children:Object(S.jsx)(L.a,{loading:null,persistor:D,children:Object(S.jsx)(H,{})})})}),document.getElementById("root")),K()}},[[45,1,2]]]);
//# sourceMappingURL=main.e7bd2022.chunk.js.map