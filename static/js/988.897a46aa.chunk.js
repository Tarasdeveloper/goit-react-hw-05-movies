"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[988],{526:function(n,e,t){t.d(e,{P:function(){return u}});var r,a=t(168),u=t(444).ZP.main(r||(r=(0,a.Z)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 15px;\n"])))},988:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,u,i=t(861),o=t(439),c=t(757),s=t.n(c),p=t(855),f=t(614),d=t(953),l=t(791),v=t(87),m=t(391),x=t(526),h=t(168),g=t(444),Z=g.ZP.input(r||(r=(0,h.Z)(["\n  width: 500px;\n  display: flex;\n  padding: 10px;\n  font-size: 20px;\n  border: 1px solid black;\n  /* border-radius: 5px; */\n"]))),b=g.ZP.form(a||(a=(0,h.Z)(["\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n"]))),w=g.ZP.button(u||(u=(0,h.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  color: #fff;\n  background-color: skyblue;\n  border: none;\n  /* border-radius: 5px; */\n"]))),j=t(184);function k(n){var e=n.formSubmit,t=n.errorMessage,r=(0,l.useState)(""),a=(0,o.Z)(r,2),u=a[0],i=a[1];return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(b,{onSubmit:function(n){n.preventDefault(),""!==u?(e(u),i("")):t()},children:[(0,j.jsx)(w,{type:"submit",children:"Search"}),(0,j.jsx)(Z,{type:"text",name:"query",autoFocus:!0,value:u,onChange:function(n){i(n.target.value.toLowerCase().trim())},autoComplete:"off",placeholder:"find a movie"})]})})}var y="idle",S="pending",P="rejected",_="resolved",z=function(){var n=(0,l.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,v.lr)(),u=(0,o.Z)(a,2),c=u[0],h=u[1],g=(0,l.useState)(null),Z=(0,o.Z)(g,2),b=Z[0],w=Z[1],z=(0,l.useState)(y),C=(0,o.Z)(z,2),q=C[0],M=C[1];(0,l.useEffect)((function(){var n=c.get("query"),e=function(){var e=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return M(S),e.prev=3,e.next=6,(0,m.z1)(n);case 6:if(t=e.sent,r(t),M(_),w(""),0!==t.length){e.next=15;break}return r([]),w("Movie don't find."),M(P),e.abrupt("return");case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),M(P),w(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]);return(0,j.jsxs)(x.P,{children:[(0,j.jsx)(k,{formSubmit:function(n){h({query:n})},errorMessage:function(){w("You didn't enter anything! Try again in English!"),r([]),M(P)}}),q===P&&(0,j.jsx)(p.Z,{message:b}),q===_&&(0,j.jsx)(d.Z,{movies:t}),q===S&&(0,j.jsx)(f.Z,{})]})}},391:function(n,e,t){t.d(e,{zv:function(){return p},TP:function(){return s},tx:function(){return f},Df:function(){return o},z1:function(){return c}});var r=t(861),a=t(757),u=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"839ee1ac45e2249141bd738796b376ad",adult:!1,language:"en-US"};var o=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a,o=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,n.next=3,i.Z.get("/search/movie?query=".concat(e,"&page=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},855:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(184);function a(n){var e=n.message;return(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:e})})}},953:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(689),u=t(87),i=t(184),o=function(n){var e=n.id,t=n.title,r=n.poster,o=(0,a.TH)();return(0,i.jsx)("li",{children:(0,i.jsxs)(u.rU,{to:"/movies/".concat(e),state:{from:o},children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg",alt:"{title}"})}),(0,i.jsx)("h2",{children:t||"No tittle"})]})})},c=t(168),s=t(444).ZP.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  margin-top: 10px;\n"]))),p=function(n){var e=n.movies;return(0,i.jsx)(s,{children:e.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,i.jsx)(o,{id:e,title:t,poster:r},e)}))})}}}]);
//# sourceMappingURL=988.897a46aa.chunk.js.map