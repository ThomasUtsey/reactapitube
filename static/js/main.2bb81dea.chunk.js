(this.webpackJsonpreactapitube=this.webpackJsonpreactapitube||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),s=a(8),l=a.n(s),o=a(2),u=a(3),m=a(5),d=a(4),v=a(6),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onSubmitHandler=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a.onChangeHandler=function(e){a.setState({term:e.target.value})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui segment searchbar"},i.a.createElement("form",{onSubmit:this.onSubmitHandler,className:"ui form search-input"},i.a.createElement("div",{className:"ui inverted left icon input massive"},i.a.createElement("input",{onChange:this.onChangeHandler,value:this.state.term,type:"text",placeholder:"Video search ...."}),i.a.createElement("i",{className:"search icon"}))))}}]),t}(i.a.Component),h=(a(24),function(e){var t=e.video;if(console.log("vid detail",t),null!==t){var a="https://youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",{className:"ui segment video-detail"},i.a.createElement("div",{className:"ui embed video"},i.a.createElement("iframe",{title:"Video Player",src:a,frameBorder:"2"})),i.a.createElement("h4",{className:"ui header"}," ",t.snippet.title),i.a.createElement("p",null,t.snippet.description))}return i.a.createElement("h2",null,"Please search for a video to play")}),f=(a(10),function(e){return console.log(e.select),i.a.createElement("div",{onClick:function(){e.select(e.video)},className:"video-item"},i.a.createElement("img",{alt:"youtubeicon",src:e.video.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:" txt "},e.video.snippet.title))}),b=function(e){var t=e.list.map((function(t){return i.a.createElement(f,{select:e.select,video:t})}));return i.a.createElement("div",{className:"ui relaxed divided list video-list"},t)},E=a(17),y=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",key:"AIzaSyCs3OK3jQfrDCwCmjbm6wEsAsYiMJH4MVQ"}}),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],sVid:null},a.onSearchSubmit=function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(y.get("/search",{params:{q:e}}));case 2:t=n.sent,a.setState({videos:t.data.items,sVid:t.data.items[0]});case 4:case"end":return n.stop()}}))},a.onVidSelect=function(e){a.setState({sVid:e})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("js cardio")}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("h1",{style:{textAlign:"center"}},"Youtube Search Engine"),i.a.createElement(p,{onSubmit:this.onSearchSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(h,{video:this.state.sVid})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(b,{select:this.onVidSelect,list:this.state.videos})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2bb81dea.chunk.js.map