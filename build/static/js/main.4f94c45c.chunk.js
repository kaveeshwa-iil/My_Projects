(this.webpackJsonpmy_projects=this.webpackJsonpmy_projects||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(21),o=a.n(c),l=(a(31),a(5)),s=a(2),i=a(4),m=[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}],u=(a(32),function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],b=s[1],d=Object(n.useState)(0),E=Object(i.a)(d,2),p=E[0],f=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app"},u?r.a.createElement("div",{className:"score-section"},"You scored ",p," out of ",m.length):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"question-section"},r.a.createElement("div",{className:"question-count"},r.a.createElement("span",null,"Question ",a+1),"/",m.length),r.a.createElement("div",{className:"question-text"},m[a].questionText)),r.a.createElement("div",{className:"answer-section"},m[a].answerOptions.map((function(e){return r.a.createElement("button",{className:"button-x",onClick:function(){return function(e){e&&f(p+1);var t=a+1;t<m.length?c(t):b(!0)}(e.isCorrect)}},e.answerText)}))))),r.a.createElement("div",{className:"back-container"},r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("button",{className:"button-back"},"Back"))))}),b=(a(38),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"headline"},"My Projects"),r.a.createElement("div",{className:"container--main"},r.a.createElement("div",{className:"button--container"},r.a.createElement(l.b,{to:"/quiz"}," ",r.a.createElement("button",{className:"home-buttons"},"Quiz")),r.a.createElement(l.b,{to:"/tours"}," ",r.a.createElement("button",{className:"home-buttons"},"Tours")),r.a.createElement(l.b,{to:"/reviews"}," ",r.a.createElement("button",{className:"home-buttons"},"Reviews")),r.a.createElement(l.b,{to:"/todo"}," ",r.a.createElement("button",{className:"home-buttons"},"ToDos")))))}),d=a(18),E=a.n(d),p=a(23),f=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"loading..."))},h=function(e){var t=e.id,a=e.image,c=e.info,o=e.name,l=e.price,s=e.removeTour,m=Object(n.useState)(!1),u=Object(i.a)(m,2),b=u[0],d=u[1];return r.a.createElement("article",{className:"single-tour"},r.a.createElement("img",{src:a,alt:o}),r.a.createElement("footer",null,r.a.createElement("div",{className:"tour-info"},r.a.createElement("h4",null,o),r.a.createElement("h4",{className:"tour-price"},"$",l)),r.a.createElement("p",null,b?c:"".concat(c.substring(0,200),"..."),r.a.createElement("button",{onClick:function(){return d(!b)}},b?"show less":"  read more")),r.a.createElement("button",{className:"delete-btn",onClick:function(){return s(t)}},"not interested")))},v=function(e){var t=e.tours,a=e.removeTour;return r.a.createElement("section",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",{className:"headline--tours"},"our tours"),r.a.createElement("div",{className:"underline"})),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e,{removeTour:a}))}))))};a(40);var N=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),m=s[0],u=s[1],b=function(){var e=Object(p.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c(!1),u(a),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),c(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(f,null),r.a.createElement("div",{className:"back-container"},r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("button",{className:"button-back"},"Back"))))):0===m.length?r.a.createElement("main",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"no tours left"),r.a.createElement("button",{className:"btn",onClick:function(){return b()}},"refresh")),r.a.createElement("div",{className:"back-container"},r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("button",{className:"button-back"},"Back")))):r.a.createElement("main",null,r.a.createElement(v,{tours:m,removeTour:function(e){var t=m.filter((function(t){return t.id!==e}));u(t)}}),r.a.createElement("div",{className:"back-container"},r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("button",{className:"button-back"},"Back"))))},g=[{id:1,name:"susan smith",job:"web developer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},{id:2,name:"anna johnson",job:"web designer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},{id:3,name:"peter jones",job:"intern",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},{id:4,name:"bill anderson",job:"the boss",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}],x=a(13),j=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=g[a],l=o.name,s=o.job,m=o.image,u=o.text,b=function(e){return e>g.length-1?0:e<0?g.length-1:e};return r.a.createElement("article",{className:"review"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:m,alt:l,className:"person-img"}),r.a.createElement("span",{className:"quote-icon"},r.a.createElement(x.c,null))),r.a.createElement("h4",{className:"author"},l),r.a.createElement("p",{className:"job"},s),r.a.createElement("p",{className:"info"},u),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"prev-btn",onClick:function(){c((function(e){return b(e-1)}))}},r.a.createElement(x.a,null)),r.a.createElement("button",{className:"next-btn",onClick:function(){c((function(e){return b(e+1)}))}},r.a.createElement(x.b,null))),r.a.createElement("button",{className:"random-btn",onClick:function(){var e=Math.floor(Math.random()*g.length);e===a&&(e=a+1),c(b(e))}},"surprise me"))};a(41);var w=function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"our reviews"),r.a.createElement("div",{className:"underline"})),r.a.createElement(j,null)),r.a.createElement("div",{className:"back-container"},r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("button",{className:"button-back"},"Back"))))},k=a(14);var T=function(e){var t=Object(n.useState)(e.edit?e.edit.value:""),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useRef)(null);Object(n.useEffect)((function(){l.current.focus()}));var s=function(e){o(e.target.value)},m=function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),o("")};return r.a.createElement("form",{onSubmit:m,className:"todo-form"},e.edit?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{placeholder:"Update your item",value:c,onChange:s,name:"text",ref:l,className:"todo-input edit"}),r.a.createElement("button",{onClick:m,className:"todo-button edit"},"Update")):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{placeholder:"Add a todo",value:c,onChange:s,name:"text",className:"todo-input",ref:l}),r.a.createElement("button",{onClick:m,className:"todo-button"},"Add todo")))},C=a(24),O=a(25),y=function(e){var t=e.todos,a=e.completeTodo,c=e.removeTodo,o=e.updateTodo,l=Object(n.useState)({id:null,value:""}),s=Object(i.a)(l,2),m=s[0],u=s[1];return m.id?r.a.createElement(T,{edit:m,onSubmit:function(e){o(m.id,e),u({id:null,value:""})}}):t.map((function(e,t){return r.a.createElement("div",{className:e.isComplete?"todo-row complete":"todo-row",key:t},r.a.createElement("div",{key:e.id,onClick:function(){return a(e.id)}},e.text),r.a.createElement("div",{className:"icons"},r.a.createElement(C.a,{onClick:function(){return c(e.id)},className:"delete-icon"}),r.a.createElement(O.a,{onClick:function(){return u({id:e.id,value:e.text})},className:"edit-icon"})))}))};var q=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"What's the Plan for Today?"),r.a.createElement(T,{onSubmit:function(e){var t;if(e.text&&!/^\s*$/.test(e.text)){var n=[e].concat(Object(k.a)(a));c(n),(t=console).log.apply(t,Object(k.a)(a))}}}),r.a.createElement(y,{todos:a,completeTodo:function(e){var t=a.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));c(t)},removeTodo:function(e){var t=Object(k.a)(a).filter((function(t){return t.id!==e}));c(t)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&c((function(a){return a.map((function(a){return a.id===e?t:a}))}))}}))};a(42);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"todo-app"},r.a.createElement(q,null)),r.a.createElement("div",{className:"back-container"},r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("button",{className:"button-back"},"Back"))))};function B(){return r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:b}),r.a.createElement(s.a,{path:"/quiz",exact:!0,component:u}),r.a.createElement(s.a,{path:"/tours",exact:!0,component:N}),r.a.createElement(s.a,{path:"/reviews",exact:!0,component:w}),r.a.createElement(s.a,{path:"/todo",exact:!0,component:S})))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4f94c45c.chunk.js.map