(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},137:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),i=(a(108),a(109),a(110),a(2));var o=function(){return Object(i.jsx)("span",{className:"header",onClick:function(){return window.scroll(0,0)},children:"\ud83c\udfac Entertainment Hub \ud83c\udfa5"})},l=a(10),u=a(209),d=a(212),j=a(214),b=a(92),p=a.n(b),f=a(93),O=a.n(f),h=a(66),m=a.n(h),v=a(94),g=a.n(v),x=a(15),_=Object(u.a)({root:{width:"100%",position:"fixed",backgroundColor:"#2d313a",bottom:0,zIndex:100}});function y(){var e=_(),t=c.a.useState(0),a=Object(l.a)(t,2),r=a[0],s=a[1],o=Object(x.f)();return Object(n.useEffect)((function(){return 0===r?o.push("/"):1===r?o.push("/movie"):2===r?o.push("/series"):3===r?o.push("/search"):void 0}),[r,o]),Object(i.jsxs)(d.a,{value:r,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(i.jsx)(j.a,{label:"Trending",style:{color:"white"},icon:Object(i.jsx)(p.a,{})}),Object(i.jsx)(j.a,{label:"Movie",style:{color:"white"},icon:Object(i.jsx)(O.a,{})}),Object(i.jsx)(j.a,{label:"tv",style:{color:"white"},icon:Object(i.jsx)(g.a,{})}),Object(i.jsx)(j.a,{label:"search",style:{color:"white"},icon:Object(i.jsx)(m.a,{})})]})}var w=a(70),S=a(220),k=a(14),N=a.n(k),C=a(20),P=a(21),G=a.n(P),T=a(217),E="https://image.tmdb.org/t/p/w300",M="https://image.tmdb.org/t/p/w500",B="https://www.movienewz.com/img/films/poster-holder.jpg",I=a(224),U=a(215),z=a(176),D=a(216),F=a(96),A=a.n(F),J=(a(137),a(95)),L=a.n(J),q=(a(171),a(172),function(e){return e.preventDefault()}),H=function(e){var t=e.media_type,a=e.id,c=Object(n.useState)(),r=Object(l.a)(c,2),s=r[0],o=r[1],u=null===s||void 0===s?void 0:s.map((function(e){return Object(i.jsxs)("div",{className:"carouselItem",children:[Object(i.jsx)("img",{src:e.profile_path?"".concat(E,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:q,className:"carouselItem_img"}),Object(i.jsx)("b",{className:"carouselItem_txt",children:null===e||void 0===e?void 0:e.name})]})})),d=function(){var e=Object(C.a)(N.a.mark((function e(){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/credits?api_key=").concat("e317bafff23111b216dcafa16ba6f4bc","&language=en-US"));case 2:n=e.sent,c=n.data,console.log("crdits",c),o(c.cast);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(i.jsx)(L.a,{mouseTracking:!0,responsive:{0:{items:3},512:{items:5},1024:{item:7}},infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,autoPlay:!0,items:u})},R=Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function V(e){var t=e.children,a=e.media_type,c=e.id,r=R(),s=Object(n.useState)(!1),o=Object(l.a)(s,2),u=o[0],d=o[1],j=Object(n.useState)(),b=Object(l.a)(j,2),p=b[0],f=b[1],O=Object(n.useState)(),h=Object(l.a)(O,2),m=h[0],v=h[1],g=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"?api_key=").concat("e317bafff23111b216dcafa16ba6f4bc","&language=en-US"));case 2:t=e.sent,n=t.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){g(),x()}),[]);var x=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"/videos?api_key=").concat("e317bafff23111b216dcafa16ba6f4bc","&language=en-US"));case 2:n=e.sent,r=n.data,v(null===(t=r.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{type:"button",className:"media",onClick:function(){d(!0)},children:t}),Object(i.jsx)(I.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:u,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500},children:Object(i.jsx)(z.a,{in:u,children:p&&Object(i.jsx)("div",{className:r.paper,children:Object(i.jsxs)("div",{className:"contentModal",children:[Object(i.jsx)("img",{className:"content_portrait",src:p.poster_path?"".concat(M,"/").concat(p.poster_path):B,alt:p.title||p.name}),Object(i.jsx)("img",{className:"content_landscape",src:p.backdrop_path?"".concat(M,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.title||p.name}),Object(i.jsxs)("div",{className:"contentModal_about",children:[Object(i.jsxs)("span",{className:"contentModal_title",children:[p.name||p.title,"(",(p.first_air_date||p.release_date||"---").substring(0,4),")"]}),p.tagline&&Object(i.jsx)("i",{className:"tagline",children:p.tagline}),Object(i.jsx)("span",{className:"contentModal_description",children:p.overview}),Object(i.jsx)("div",{children:Object(i.jsx)(H,{media_type:a,id:c})}),Object(i.jsx)(D.a,{variant:"contained",startIcon:Object(i.jsx)(A.a,{}),color:"secondary",target:"_blank",href:"https://www.youtube.com/watch?v=".concat(m),children:"Watch the Trailer"})]})]})})})})]})}a(173);var W=function(e){var t=e.id,a=e.poster,n=e.date,c=e.title,r=e.media_type,s=e.vote_average;return Object(i.jsxs)(V,{media_type:r,id:t,children:[Object(i.jsx)(T.a,{badgeContent:s,color:s>6?"primary":"secondary"}),Object(i.jsx)("img",{className:"poster",alt:c,src:a?"".concat(E,"/").concat(a):B}),Object(i.jsx)("b",{className:"title",children:c}),Object(i.jsxs)("span",{className:"subtitle",children:["tv"===r?"Tv Series":"Movie",Object(i.jsx)("span",{className:"subtitle",children:n})]})]})},K=(a(174),a(223)),Q=a(97),X=a(218),Y=Object(Q.a)({palette:{type:"dark"}});var Z=function(e){var t=e.setPage,a=e.numofPage,n=void 0===a?10:a;return Object(i.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(i.jsx)(X.a,{theme:Y,children:Object(i.jsx)(K.a,{count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"primary"})})})};var $=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),o=s[0],u=s[1],d=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("e317bafff23111b216dcafa16ba6f4bc","&page=").concat(a));case 2:t=e.sent,n=t.data,u(n.results),console.log(n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log("".concat("e317bafff23111b216dcafa16ba6f4bc")),Object(n.useEffect)((function(){d()}),[a]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"Trending"}),Object(i.jsx)("div",{className:"trending",children:o&&o.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.release_date||e.first_air_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(i.jsx)(Z,{setPage:c})]})},ee=a(73),te=a(225);var ae=function(e){var t=e.selectesGeners,a=e.setSelectedGeners,c=e.Genre,r=e.setGenres,s=e.setPage,o=e.type,l=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/genre/".concat(o,"/list?api_key=").concat("e317bafff23111b216dcafa16ba6f4bc","&language=en-US"));case 2:t=e.sent,a=t.data,r(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return l(),function(){r({})}}),[]),Object(i.jsxs)("div",{style:{padding:"6px 0"},children:[t&&t.map((function(e){return Object(i.jsx)(te.a,{label:e.name,style:{margin:2},clickable:!0,size:"small",color:"primary",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),r([].concat(Object(ee.a)(c),[e])),s(1)}(e)}},e.id)})),c&&c.map((function(e){return Object(i.jsx)(te.a,{label:e.name,style:{margin:2},clickable:!0,color:"primary",size:"small",onClick:function(){return function(e){a([].concat(Object(ee.a)(t),[e])),r(c.filter((function(t){return t.id!==e.id}))),s(1)}(e)}},e.id)}))]})},ne=function(e){return e<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))};var ce=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(),j=Object(l.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(l.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)([]),g=Object(l.a)(v,2),x=g[0],_=g[1],y=ne(h),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("e317bafff23111b216dcafa16ba6f4bc","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(y));case 2:t=e.sent,n=t.data,u(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[a,y]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"Movie"}),Object(i.jsx)(ae,{selectesGeners:h,setSelectedGeners:m,Genre:x,setGenres:_,setPage:c,type:"movie"}),Object(i.jsx)("div",{className:"trending",children:o.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.release_date||e.first_air_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),b>1&&Object(i.jsx)(Z,{setPage:c,numofPage:b})]})};var re=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(),j=Object(l.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(l.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)([]),g=Object(l.a)(v,2),x=g[0],_=g[1],y=ne(h),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("e317bafff23111b216dcafa16ba6f4bc","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(y));case 2:t=e.sent,n=t.data,u(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[a,y]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"Tv Series"}),Object(i.jsx)(ae,{selectesGeners:h,setSelectedGeners:m,Genre:x,setGenres:_,setPage:c,type:"tv"}),Object(i.jsx)("div",{className:"trending",children:o.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.release_date||e.first_air_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),b>1&&Object(i.jsx)(Z,{setPage:c,numofPage:b})]})},se=a(221),ie=a(222),oe=a(219);var le=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),s=Object(l.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(),j=Object(l.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)(""),O=Object(l.a)(f,2),h=O[0],v=O[1],g=Object(n.useState)(),x=Object(l.a)(g,2),_=x[0],y=x[1],w=Object(Q.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("e317bafff23111b216dcafa16ba6f4bc","&language=en-US&query=").concat(h,"&page=").concat(o,"&include_adult=false"));case 2:t=e.sent,n=t.data,y(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),S()}),[a,o]),Object(i.jsxs)("div",{children:[Object(i.jsxs)(X.a,{theme:w,children:[Object(i.jsxs)("div",{style:{display:"flex",margin:"15px 0"},children:[Object(i.jsx)(se.a,{style:{flex:1},className:"searchBox",label:"search",variant:"filled",onChange:function(e){return v(e.target.value)}}),Object(i.jsx)(D.a,{variant:"contained",style:{marginLeft:10},onClick:S,children:Object(i.jsx)(m.a,{})})]}),Object(i.jsxs)(ie.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),u(1)},children:[Object(i.jsx)(oe.a,{style:{width:"50%"},label:"search Movies"}),Object(i.jsx)(oe.a,{style:{width:"50%"},label:"search TVSeries"})]})]}),Object(i.jsxs)("div",{className:"trending",children:[_&&_.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.release_date||e.first_air_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),h&&!_&&(a?Object(i.jsx)("h2",{children:"No Series Found"}):Object(i.jsx)("h2",{children:"No Movies Found"}))]}),b>1&&Object(i.jsx)(Z,{setPage:u,numofPage:b})]})};var ue=function(){return Object(i.jsx)("div",{children:"404"})};var de=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(w.a,{children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(S.a,{children:Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{path:"/",exact:!0,component:$}),Object(i.jsx)(x.a,{path:"/movie",component:ce}),Object(i.jsx)(x.a,{path:"/series",component:re}),Object(i.jsx)(x.a,{path:"/search",component:le}),Object(i.jsx)(x.a,{component:ue})]})})}),Object(i.jsx)(y,{})]})})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(de,{})}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.ca123c95.chunk.js.map