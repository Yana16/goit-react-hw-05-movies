"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{383:function(r,t,e){e.d(t,{Hg:function(){return s},M1:function(){return f},Pg:function(){return o},tx:function(){return p},z1:function(){return i}});var n=e(861),a=e(757),c=e.n(a),u=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9403572a0ca29edc08cf527581f60a81"}}),s=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/trending/movie/day");case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(t));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},76:function(r,t,e){e.r(t),e.d(t,{default:function(){return v}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(689),i=e(791),o=e(383),p="Cast_cast__m5y0R",f=e(184),v=function(){var r=(0,s.UO)().movieId,t=(0,i.useState)([]),e=(0,a.Z)(t,2),c=e[0],v=e[1],h=c.map((function(r){var t=r.cast_id,e=r.character,n=r.name,a=r.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:""}),(0,f.jsx)("h2",{className:p,children:n}),(0,f.jsxs)("h2",{className:p,children:["Character: ",e]})]},t)}));return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.M1)(r);case 3:e=t.sent,v(e.data.cast),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n=t.t0.response,console.log(n.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,f.jsx)("ul",{children:h})}}}]);
//# sourceMappingURL=76.8ee54047.chunk.js.map