(window.webpackJsonpmoviepage=window.webpackJsonpmoviepage||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),s=(a(24),a(12)),i=a(13),o=a(14),u=a(17),m=a(15),h=a(18);var d=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var v=function(e){return r.a.createElement("div",{className:'row${props.fluid ? "-fluid : ""'},e.children)};var f=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",{className:t},e.children)};var E=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,e.heading)),r.a.createElement("div",{className:"card-body"},e.children))};var p=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"forms"},r.a.createElement("label",{htmlFor:"search"},"Search Movies"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"forms",placeholder:"Browse for Movies",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))};var g=function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"12px auto"}}),r.a.createElement("h4",null,"Directors: ",e.director," "),r.a.createElement("h4",null,"Genre: ",e.genre),r.a.createElement("h4",null,"REleased: ",e.released))},w=a(16),b=a.n(w),y={search:function(e){return b.a.get("https://www.omdbapi.com/?t="+e+"&apikey=trilogy")}},N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:{},search:""},a.searchMovies=function(e){y.search(e).then(function(e){return a.setState({result:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(s.a)({},n,t))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchMovies(a.state.search)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.searchMovies("Tommy Boy")}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(f,{size:"md-4"},r.a.createElement(E,{heading:this.state.result.Title||"Browse Movies"},this.state.result.Title?r.a.createElement(g,{title:this.state.result.Title,src:this.state.result.Poster,director:this.state.result.Director,genre:this.state.result.Genre,released:this.state.result.Released}):r.a.createElement("h2",null,"No Results"))),r.a.createElement(f,{size:"md-6"},r.a.createElement(E,{heading:"Search"},r.a.createElement(p,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})))))}}]),t}(n.Component);var S=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.5d14cca2.chunk.js.map