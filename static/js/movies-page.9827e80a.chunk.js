/*! For license information please see movies-page.9827e80a.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{34:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return d}));var c=n(36),a=n.n(c),r="https://api.themoviedb.org/3/",o="6da14ee54f4b325908f75ac46dfb1018",i=function(){return a.a.get("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(t){return t.data.results}))},u=function(t){return a.a.get("".concat(r,"search/movie?query=").concat(t,"&api_key=").concat(o)).then((function(t){return t.data.results}))},s=function(t){return a.a.get("".concat(r,"movie/").concat(t,"?api_key=").concat(o)).then((function(t){return t.data}))},f=function(t){return a.a.get("".concat(r,"movie/").concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.data.cast}))},d=function(t){return a.a.get("".concat(r,"movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(t){return t.data.results}))}},37:function(t,e,n){"use strict";var c=n(8),a=n(2),r=(n(38),n(9)),o=n(1);e.a=Object(a.f)((function(t){var e=t.movies,n=t.location;return Object(o.jsx)("ul",{className:"movies__list",children:e.map((function(t){return Object(o.jsx)("li",{className:"movies__item",children:Object(o.jsx)(c.b,{to:{pathname:"".concat(r.a.movies,"/").concat(t.id),state:{from:n}},children:t.title||t.original_name})},t.id)}))})}))},38:function(t,e,n){},66:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c=n(35),a=n(0),r=n(2),o=(n(66),n(34)),i=n(37),u=n(1),s=function(t){var e=t.match,n=Object(a.useState)(""),s=Object(c.a)(n,2),f=s[0],d=s[1],m=Object(a.useState)([]),h=Object(c.a)(m,2),b=h[0],j=h[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"MoviesPage__form",onSubmit:function(t){t.preventDefault(),Object(o.d)(f).then((function(t){j(t)}))},children:[Object(u.jsx)("input",{type:"search",autoFocus:!0,onChange:function(t){return d(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Seacrh"})]}),Object(u.jsx)(r.a,{path:"".concat(e.path),render:function(){return Object(u.jsx)(i.a,{movies:b})}})]})};s.defaultProps={query:"",movies:[]},e.default=s}}]);
//# sourceMappingURL=movies-page.9827e80a.chunk.js.map