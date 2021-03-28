(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(6),r=n.n(s),a=(n(14),n(2)),i=n(5),o=n.n(i),l=n(7),u=n(8),j="SET_INPUT",d="SET_LOADING",b="SET_QUIZES",x="NEXT_QUESTION",h=n(3),O=function(e,t){var n=t.payload;switch(t.type){case j:return Object(a.a)(Object(a.a)({},e),{},Object(h.a)({},n.name,n.value));case d:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case b:return Object(a.a)(Object(a.a)({},e),{},{quizes:n,loading:!1,hasQuizStarted:!0});case x:return Object(a.a)(Object(a.a)({},e),{},{currentQuestionIndex:e.currentQuestionIndex===e.quizes.length-1?e.currentQuestionIndex:e.currentQuestionIndex+1});default:return Object(a.a)({},e)}},f=n(0),v=Object(c.createContext)(),m={category:"Linux",difficulty:"Easy",questions:5,loading:!1,quizes:[],hasQuizStarted:!1,currentQuestionIndex:0},p=function(e){var t=e.children,n=Object(c.useReducer)(O,m),s=Object(u.a)(n,2),r=s[0],i=s[1],h=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:d}),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,i({type:b,payload:c}),console.log(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(v.Provider,{value:Object(a.a)(Object(a.a)({},r),{},{handleInput:function(e){var t=e.target,n=t.value,c=t.name;console.log({value:n,name:c}),i({type:j,payload:{name:c,value:n}})},handleSubmit:function(e){e.preventDefault();var t="https://quizapi.io/api/v1/questions?apiKey=".concat("ugZIkGEUifiDiBtyeQ5U1QamafMTZuWUnzNPmzYv","&category=").concat(r.category,"&difficulty=").concat(r.difficulty,"&limit=").concat(r.questions);h(t)},nextQuestion:function(){i({type:x})}}),children:t})},y=function(){return Object(c.useContext)(v)},g=function(){var e=y(),t=e.handleInput,n=e.questions,c=e.difficulty,s=e.category,r=e.handleSubmit;return Object(f.jsxs)("form",{className:"form",onSubmit:r,children:[Object(f.jsxs)("div",{className:"form-control flex",children:[Object(f.jsx)("label",{htmlFor:"category",children:"Category"}),Object(f.jsxs)("select",{name:"category",id:"category",value:s,onChange:t,children:[Object(f.jsx)("option",{value:"Linux",children:"Linux"}),Object(f.jsx)("option",{value:"DevOps",children:"DevOps"}),Object(f.jsx)("option",{value:"Networking",children:"Networking"}),Object(f.jsx)("option",{value:"JavaScript",children:"Programming (PHP, JS, Pythong and etc.)"}),Object(f.jsx)("option",{value:"Cloud",children:"Cloud"}),Object(f.jsx)("option",{value:"Docker",children:"Docker"}),Object(f.jsx)("option",{value:"Kubernetes",children:"Kubernetes"})]})]}),Object(f.jsxs)("div",{className:"form-control flex",children:[Object(f.jsx)("label",{htmlFor:"difficulty",children:"Difficulty"}),Object(f.jsxs)("select",{name:"difficulty",id:"difficulty",value:c,onChange:t,children:[Object(f.jsx)("option",{value:"Easy",children:"Easy"}),Object(f.jsx)("option",{value:"Medium",children:"Medium"}),Object(f.jsx)("option",{value:"Hard",children:"Hard"})]})]}),Object(f.jsxs)("div",{className:"form-control flex",children:[Object(f.jsx)("label",{htmlFor:"questions",children:"Questions"}),Object(f.jsx)("input",{name:"questions",type:"number",id:"questions",value:n,onChange:t,min:"2"})]}),Object(f.jsx)("button",{type:"submit",className:"sbm_btn",children:"Let's Go"})]})};function w(){return Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("h2",{children:"Loading..."})})}var _=n(9);function N(){var e=y(),t=e.quizes,n=e.currentQuestionIndex,c=e.nextQuestion,s=t[n],r=s.question,a=s.answers,i=a.answer_a,o=a.answer_b,l=a.answer_c,u=a.answer_d,j=a.answer_e,d=a.answer_f,b=s.correct_answers,x={question:r,answers:[i,o,l,u,j,d],correct_answers:[b.answer_a_correct,b.answer_b_correct,b.answer_c_correct,b.answer_d_correct,b.answer_e_correct,b.answer_f_correct]};return console.log(x),Object(f.jsxs)("div",{className:"outer",children:[Object(f.jsxs)("div",{className:"quiz",children:[Object(f.jsxs)("header",{className:"header flex",children:[Object(f.jsx)("div",{className:"questions",children:Object(f.jsxs)("p",{children:["Questions ",n+1,"/",t.length]})}),Object(f.jsx)("div",{className:"write_answere",children:Object(f.jsxs)("span",{children:[Object(f.jsx)(_.a,{className:"tick"}),"4"]})})]}),Object(f.jsxs)("section",{className:"section",children:[Object(f.jsxs)("div",{className:"q",children:[Object(f.jsxs)("p",{children:["Question ",n+1]}),Object(f.jsx)("h3",{children:r})]}),Object(f.jsx)("div",{className:"options",children:x.answers.map((function(e,t){if(e)return Object(f.jsx)("button",{children:e},t)}))})]})]}),Object(f.jsx)("button",{className:"next_q",onClick:c,children:"Next Question"})]})}var Q=function(){var e=y(),t=e.loading;return e.hasQuizStarted?Object(f.jsx)("div",{className:"container flex",children:Object(f.jsx)(N,{})}):Object(f.jsx)("div",{className:"container flex",children:t?Object(f.jsx)(w,{}):Object(f.jsx)(g,{})})};r.a.render(Object(f.jsx)(p,{children:Object(f.jsx)(Q,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.344c6901.chunk.js.map