(this.webpackJsonpreact_grandpybot=this.webpackJsonpreact_grandpybot||[]).push([[0],{13:function(e,t,a){e.exports=a(35)},18:function(e,t,a){},19:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(6),o=a.n(r),c=(a(18),a(7)),i=a(1),l=a(2),m=a(4),g=a(3),u=a(5),p=(a(19),a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleMessageChange=function(e){a.setState({message:e.target.value})},a.handleSubmit=function(e){a.props.getMessage("user",a.state.message),a.props.getAnswer(a.state.message),a.state.message="",e.preventDefault()},a.state={message:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"w-auto"},s.a.createElement("input",{className:"form-control input-lg",type:"text",value:this.state.message,onChange:this.handleMessageChange})))}}]),t}(n.Component)),h=a(10),d=a.n(h);a(11);var b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.items;return console.log(this.props),s.a.createElement("div",{className:"chatbox"},s.a.createElement("ul",Object.assign({className:"list-group"},this.props),e.map((function(e){return s.a.createElement("li",{className:(t={author:e.author},"grandpybot"==t.author?"list-group-item list-group-item-dark grandpybot mr-5 my-3":"list-group-item active user ml-5 my-3")},function(e){return e.img?s.a.createElement("img",{src:e.img}):e.message}(e));var t}))))}}]),t}(s.a.Component),f=d()(b,{isScrolledDownThreshold:100}),v=a(12),O=a.n(v),y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.img,t=this.props.location,a="0"+e.toString();return s.a.createElement("div",null,s.a.createElement(O.a,{src:"static/img/grandpy/"+t+"/"+a+".png",alt:"Grandpy"}))}}]),t}(n.Component);var j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(g.a)(t).call(this))).getMessage=function(t,a){var n={author:t,message:a};e.setState({message:[].concat(Object(c.a)(e.state.message),[n])})},e.writeMap=function(t){var a={author:"grandpybot",img:t.url,message:""};e.getMessage("grandpybot",e.state.data.first_message),e.setState({message:[].concat(Object(c.a)(e.state.message),[a])}),e.getMessage("grandpybot",e.state.data.second_message)},e.writeMessage=function(t){e.state.data=t,"OK"==t.status?(e.getMap(t.adress,t.location),e.state.img=t.img+1,e.state.img_location="anecdote"):"ZERO_RESULTS"==t.status&&(e.getMessage("grandpybot",t.error_message),e.setState((function(){return{img:t.error_img+1,img_location:"failure"}})))},e.getAnswer=function(t){fetch("/update/",{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(e.writeMessage).catch()},e.getMap=function(t,a){e.state.success=!1;var n="https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=300x300&center="+t,s="&markers=color:blue7Clabel:S%7C"+a.lat+","+a.lng;fetch(n+s+"&key=AIzaSyBsl71VK0vPiuXN-OO1skM9lvYXCGI6pRI").then((function(e){return e})).then(e.writeMap).catch()},e.state={message:[{author:"grandpybot",message:"Welcome !"}],data:null,img:Math.floor(1+3*Math.random()),img_location:"other"},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header d-flex"},s.a.createElement("div",{className:"card bg-secondary p-3 m-3"},s.a.createElement(f,{items:this.state.message,onScrolled:function(e){return console.log("the list was scrolled!")},onScrolledTop:function(e){return alert("scrolled to top!")}}),s.a.createElement(p,{getMessage:this.getMessage,getAnswer:this.getAnswer})),s.a.createElement("div",{className:"m-3"},s.a.createElement(y,{img:this.state.img,location:this.state.img_location}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.82d3ae28.chunk.js.map