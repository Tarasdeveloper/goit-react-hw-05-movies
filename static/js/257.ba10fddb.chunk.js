"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{391:function(t,e,n){n.d(e,{zv:function(){return f},TP:function(){return o},tx:function(){return p},Df:function(){return i},z1:function(){return s}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"839ee1ac45e2249141bd738796b376ad",adult:!1,language:"en-US"};var i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,t.next=3,c.Z.get("/search/movie?query=".concat(e,"&page=").concat(n));case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},257:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),u=n(689),c=n(391),i=n(855),s=n(184);function o(t){var e=t.credits;return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,r=t.profilePath;return(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg",alt:n})}),(0,s.jsx)("h2",{children:n||"Without  name"})]},e)}))})})}var f=function(){var t=(0,u.UO)().movieId,e=(0,a.useState)(),n=(0,r.Z)(e,2),f=n[0],p=n[1],d=(0,a.useState)(),v=(0,r.Z)(d,2),h=v[0],l=v[1];return(0,a.useEffect)((function(){(0,c.zv)(t).then((function(t){if(0!==t.length){var e=t.cast.map((function(t){return{id:t.id,name:t.name,profilePath:t.profile_path}}));p(e)}else l("There is no information about the cast")})).catch((function(t){return l(t.message)}))}),[t]),(0,s.jsxs)("div",{children:[h&&(0,s.jsx)(i.Z,{message:h}),f&&(0,s.jsx)(o,{credits:f})]})}},855:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(184);function a(t){var e=t.message;return(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:e})})}}}]);
//# sourceMappingURL=257.ba10fddb.chunk.js.map