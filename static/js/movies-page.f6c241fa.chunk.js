(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{34:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return h}));var c=n(36),a=n.n(c),r="https://api.themoviedb.org/3/",o="6da14ee54f4b325908f75ac46dfb1018",i=function(){return a.a.get("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(t){return t.data.results}))},u=function(t){return a.a.get("".concat(r,"search/movie?query=").concat(t,"&api_key=").concat(o)).then((function(t){return t.data.results}))},s=function(t){return a.a.get("".concat(r,"movie/").concat(t,"?api_key=").concat(o)).then((function(t){return t.data}))},f=function(t){return a.a.get("".concat(r,"movie/").concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.data.cast}))},h=function(t){return a.a.get("".concat(r,"movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(t){return t.data.results}))}},37:function(t,e,n){"use strict";var c=n(9),a=n(2),r=(n(38),n(7)),o=n(1);e.a=Object(a.g)((function(t){var e=t.movies,n=t.location;return Object(o.jsx)("ul",{className:"movies__list",children:e.map((function(t){return Object(o.jsx)("li",{className:"movies__item",children:Object(o.jsx)(c.b,{to:{pathname:"".concat(r.a.movies,"/").concat(t.id),state:{from:n}},children:t.title||t.original_name})},t.id)}))})}))},38:function(t,e,n){},66:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c=n(35),a=n(0),r=(n(66),n(34)),o=n(37),i=n(1),u=function(t){var e=t.history,n=t.location,u=Object(a.useState)(""),s=Object(c.a)(u,2),f=s[0],h=s[1],d=Object(a.useState)([]),m=Object(c.a)(d,2),b=m[0],j=m[1];Object(a.useEffect)((function(){n.search&&Object(r.d)(n.search.substr(7)).then((function(t){j(t)}))}),[n]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{className:"MoviesPage__form",onSubmit:function(t){t.preventDefault(),f&&e.push({search:"query=".concat(f)})},children:[Object(i.jsx)("input",{type:"search",autoFocus:!0,onChange:function(t){return h(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Seacrh"})]}),Object(i.jsx)(o.a,{movies:b})]})};u.defaultProps={query:"",movies:[]},e.default=u}}]);
//# sourceMappingURL=movies-page.f6c241fa.chunk.js.map