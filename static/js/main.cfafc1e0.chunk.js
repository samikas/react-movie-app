(window["webpackJsonpmovie-app"]=window["webpackJsonpmovie-app"]||[]).push([[0],{23:function(e,t,a){},38:function(e,t,a){e.exports=a(67)},44:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),o=a.n(n),i=a(34),c=a.n(i),r=(a(44),a(13)),p=a(14),l=a(16),s=a(15),m=a(17),u=(a(23),a(35)),v=a.n(u),d={POPULAR_URL:"https://api.themoviedb.org/3/movie/popular?api_key=a01df817e220cd955937381999b0924e",TOP_RATED_URL:"https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=a01df817e220cd955937381999b0924e",IMG_BASE_URL:"https://image.tmdb.org/t/p/w342/",NO_POSTER_URL:'"img/noposter.jpg"',BASE_URL:"https://api.themoviedb.org/3/search/movie?api_key=a01df817e220cd955937381999b0924e&language=en-US&page=1&include_adult=false&query="};function h(e){var t=[];return e.map(function(e){var a={};return a.title=e.title,null===e.poster_path?a.poster=d.NO_POSTER_URL:a.poster=d.IMG_BASE_URL+e.poster_path,a.year=e.release_date.slice(0,4),a.rating=e.vote_average,t.push(a)}),t}var g=a(11),E=a(12);var f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={movieData:[]},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a="https://api.themoviedb.org/3/movie/",n="?api_key=a01df817e220cd955937381999b0924e";"popular"===this.props.type?e=a+"popular"+n:"topRated"===this.props.type?e=a+"top_rated"+n:"upcoming"===this.props.type?e=a+"upcoming"+n:"nowPlaying"===this.props.type&&(e=a+"now_playing"+n),v.a.get(e).then(function(e){return e.data}).then(function(e){t.setState({movieData:h(e.results)})})}},{key:"render",value:function(){return o.a.createElement("div",null,(e=this.state.movieData,o.a.createElement("div",{className:"movie-list"},e.map(function(e,t){return o.a.createElement("div",{className:"movie",key:t},o.a.createElement("img",{className:"poster-img",src:e.poster,alt:e.title}),o.a.createElement("div",{className:"poster-info "},o.a.createElement("p",null,e.title),o.a.createElement("p",null,o.a.createElement(g.a,{icon:E.b})," ",e.rating),o.a.createElement("p",null,e.year)))}))));var e}}]),t}(o.a.Component),y=a(9),b=a(7),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.addActiveClass=function(e){a.state.active?a.setState({active:""}):a.setState({active:!0})},a.popularMovies=function(){return o.a.createElement(f,{type:"popular"})},a.topRatedMovies=function(){return o.a.createElement(f,{type:"topRated"})},a.upcomingMovies=function(){return o.a.createElement(f,{type:"upcoming"})},a.nowPlayingMovies=function(){return o.a.createElement(f,{type:"nowPlaying"})},a.state={value:"",active:"",movieData:[]},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"navi-wrapper"},o.a.createElement("h3",{className:"site-title"},"Movie app"),o.a.createElement(g.a,{onClick:this.addActiveClass,className:"menu-icon",icon:E.a}),o.a.createElement("div",{className:"navi-links ".concat(this.state.active?"menu-active":"")},o.a.createElement(g.a,{onClick:this.addActiveClass,className:"close-menu-icon",icon:E.c}),o.a.createElement(y.b,{to:"/"},"Home"),o.a.createElement(y.b,{to:"/top-rated"},"Top rated"),o.a.createElement(y.b,{to:"/upcoming"},"Upcoming "),o.a.createElement(y.b,{to:"now-playing"},"Now playing "))),o.a.createElement(b.a,{exact:!0,path:"/",component:this.popularMovies}),o.a.createElement(b.a,{path:"/top-rated",component:this.topRatedMovies}),o.a.createElement(b.a,{path:"/upcoming",component:this.upcomingMovies}),o.a.createElement(b.a,{path:"/now-playing",component:this.nowPlayingMovies}),o.a.createElement(b.a,{path:"/search",component:this.searching})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.cfafc1e0.chunk.js.map