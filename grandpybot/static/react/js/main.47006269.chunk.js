(this.webpackJsonpreact_grandpybot=this.webpackJsonpreact_grandpybot||[]).push([[0],{13:function(e,t,a){e.exports=a(35)},18:function(e,t,a){},19:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(6),i=a.n(r),o=(a(18),a(7)),c=a(1),u=a(2),l=a(4),m=a(3),g=a(5),p=(a(19),a(20),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleMessageChange=function(e){a.setState({message:e.target.value})},a.handleSubmit=function(e){a.props.writeMessage("user",a.state.message),a.props.getAnswer(a.state.message),a.state.message="",e.preventDefault()},a.state={message:""},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"w-auto d-flex"},n.a.createElement("input",{className:"form-control input-lg",type:"text",value:this.state.message,onChange:this.handleMessageChange}),n.a.createElement("button",{type:"submit"},n.a.createElement("img",{src:"/static/react/send.png"}))))}}]),t}(s.Component)),h=a(10),d=a.n(h),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"Loading"==this.props.status?n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")):n.a.createElement("div",null)}}]),t}(s.Component);var f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.items,t=this.props.status;return n.a.createElement("div",{className:"chatbox my-2"},n.a.createElement("ul",Object.assign({className:"list-group"},this.props),e.map((function(e){return n.a.createElement("li",{className:(t={author:e.author},"grandpybot"==t.author?"list-group-item list-group-item-dark grandpybot mr-5 my-3 w-75":"list-group-item active user ml-5 my-3 w-75")},function(e){return e.img?n.a.createElement("img",{src:e.img,className:"map"}):e.url?n.a.createElement("p",null,e.message," ",n.a.createElement("a",{href:e.url},"[En savoir plus sur Wikipedia]")):e.message}(e));var t}))),n.a.createElement(b,{status:t}))}}]),t}(n.a.Component),v=d()(f),O=a(11),y=a.n(O),j=a(12),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.img,t=this.props.location,a="0"+e.toString(),s="static/img/grandpy/";return(j.isMobile||window.innerWidth<1200)&&(s+="mobile/"),n.a.createElement("div",null,n.a.createElement(y.a,{src:s+t+"/"+a+".png",alt:"Grandpy"}))}}]),t}(s.Component);var E=function(e){function t(){var e,a,s;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).writeMessage=function(t,a,s){var n={author:t,message:a,url:s};e.setState({message:[].concat(Object(o.a)(e.state.message),[n])})},e.writeMap=function(t){var a={author:"grandpybot",img:t.url,message:""};e.writeMessage("grandpybot",e.state.data.first_message,""),e.setState({message:[].concat(Object(o.a)(e.state.message),[a])}),e.writeMessage("grandpybot",e.state.data.second_message,e.state.data.url)},e.handleMessage=function(t){e.state.data=t,"OK"==e.state.data.status?(e.state.status="OK",e.getMap(t.address,t.location),e.state.img=t.img+1,e.state.img_location="anecdote"):(e.state.status=t.status,e.writeMessage("grandpybot",e.state.data.error_message),e.setState((function(){return{img:e.state.data.error_img+1,img_location:"failure"}})))},e.getAnswer=function(t){e.setState((function(){return{status:"Loading",img:1,img_location:"loading"}})),fetch("/update/",{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(e.handleMessage).catch()},e.getMap=function(t,a){e.state.success=!1;var s="https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=300x300&center="+t,n="&markers=color:blue7Clabel:S%7C"+a.lat+","+a.lng;fetch(s+n+"&key=AIzaSyBsl71VK0vPiuXN-OO1skM9lvYXCGI6pRI").then((function(e){return e})).then(e.writeMap).catch()},e.state={status:"OK",message:[{author:"grandpybot",message:"Salut mon chou, en quoi puis-je t'aider?"}],data:null,img:(a=1,s=4,Math.floor(a+Math.random()*(s-a))),img_location:"other"},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App-content d-flex"},n.a.createElement("div",{className:"card bg-secondary p-3"},n.a.createElement(v,{items:this.state.message,status:this.state.status}),n.a.createElement(p,{writeMessage:this.writeMessage,getAnswer:this.getAnswer})),n.a.createElement("div",{className:"ml-5"},n.a.createElement(w,{img:this.state.img,location:this.state.img_location})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.47006269.chunk.js.map