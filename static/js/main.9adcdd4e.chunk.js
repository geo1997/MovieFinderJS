(this.webpackJsonpmovie_finder=this.webpackJsonpmovie_finder||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(8),i=t.n(c),l=(t(7),t(2)),o=t(3),s=t(4),m=t(5),v=function(){return n.a.createElement("nav",{className:"#1565c0 blue darken-3"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"#",class:"brand-logo center"},"Movie Finder ")))},h=function(e){var a=e.handleSubmit,t=e.searchChange;e.searchItem;return n.a.createElement("div",{className:"container",style:{marginTop:30}},n.a.createElement("div",{className:"row"},n.a.createElement("section",{className:"col s8  offset-s2 "},n.a.createElement("div",{className:"card-panel hoverable"},n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{placeholder:"search movie",type:"text",onChange:t,onKeyPress:a}))))))},d=(t(14),t(1)),u=t.n(d);u()((function(){u()(".card").hover((function(){u()(this).find("> .card-image > img.activator").click()}),(function(){u()(this).find("> .card-reveal > .card-title").click()}))}));var p=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"viewMovie",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.id;window.location.href=e}},{key:"render",value:function(){return n.a.createElement("div",{className:"col s12 m6 l3"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image waves-effect waves-block waves-dark"},null==this.props.image?n.a.createElement("img",{className:"activator",src:"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6",alt:"card image",style:{width:"100%",height:300}}):n.a.createElement("img",{className:"activator",src:"http://image.tmdb.org/t/p/w185".concat(this.props.image),alt:"card image",style:{width:"100%",height:300}})),n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},this.props.title,n.a.createElement("i",{className:"material-icons right"},"more_vert")),n.a.createElement("p",null,n.a.createElement("a",{onClick:this.viewMovie.bind(this)},"More Details"))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},this.props.title,n.a.createElement("i",{className:"material-icons right"},"close")),n.a.createElement("h4",null,"Release Date"),n.a.createElement("p",null,this.props.rel_date),n.a.createElement("h4",null,"Popularity"),n.a.createElement("p",null,this.props.pop))))}}]),t}(n.a.Component),f=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card -content grey lighten-4 -panel hoverable"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement(p,{key:e.movie.id,image:e.movie.poster_path,title:e.movie.title,overview:e.movie.overview,id:e.movie.id,rel_date:e.movie.release_date,pop:e.movie.popularity}),n.a.createElement("td",null,n.a.createElement("h2",null,e.movie.title),n.a.createElement("p",null,e.movie.overview))))))},g=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).state={},r.performSearch("avengers"),r}return Object(o.a)(t,[{key:"performSearch",value:function(e){var a=this,t="https://api.themoviedb.org/3/search/movie?api_key=b906337d1552ee7c39e869eafd4cde73&query="+e;u.a.ajax({url:t,success:function(e){console.log("Feteched succesfully"),console.log(e);var t=e.results,r=[];t.forEach((function(e){var a=n.a.createElement(f,{key:e.id,id:e.id,movie:e});r.push(a)})),a.setState({rows:r})},error:function(e,a,t){console.error("Failed to fetch")}})}},{key:"searchChange",value:function(e){console.log(e.target.value);var a=e.target.value;this.performSearch(a)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null),n.a.createElement(h,{searchChange:this.searchChange.bind(this)}),this.state.rows)}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9adcdd4e.chunk.js.map