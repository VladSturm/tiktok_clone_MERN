(this.webpackJsonptiktok=this.webpackJsonptiktok||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),s=(a(33),a(7)),i=a.n(s),l=a(18),u=a(5),m=(a(35),a(20)),d=a.n(m),p=a(19);var v=function(e){var t=e.channel,a=e.description,n=e.song;return r.a.createElement("div",{className:"videoFooter"},r.a.createElement("div",{className:"videoFooter_text"},r.a.createElement("h3",null,"@",t),r.a.createElement("p",null,a),r.a.createElement("div",{className:"videoFooter_ticker"},r.a.createElement(d.a,{className:"videoFooter_icon"}),r.a.createElement(p.a,{mode:"smooth"},(function(e){e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n))})))),r.a.createElement("img",{className:"videoFooter_record",src:"https://static.thenounproject.com/png/934821-200.png",alt:""}))},f=(a(41),a(22)),E=a.n(f),h=a(23),g=a.n(h),k=a(24),b=a.n(k),N=a(25),S=a.n(N);var j=function(e){var t=e.likes,a=e.shares,c=e.messages,o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],l=s[1];return r.a.createElement("div",{className:"videoSidebar"},r.a.createElement("div",{className:"videoSidebar_button"},i?r.a.createElement(E.a,{fontSize:"large",onClick:function(e){l(!1)}}):r.a.createElement(g.a,{fontSize:"large",onClick:function(e){l(!0)}}),r.a.createElement("p",null,i?t+1:t)),r.a.createElement("div",{className:"videoSidebar_button"},r.a.createElement(b.a,{fontSize:"large"}),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"videoSidebar_button"},r.a.createElement(S.a,{fontSize:"large"}),r.a.createElement("p",null,a)))};a(42);var w=function(e){var t=e.url,a=e.channel,c=e.description,o=e.song,s=e.likes,i=e.shares,l=e.messages,m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=d[0],f=d[1],E=Object(n.useRef)(null);return r.a.createElement("div",{className:"video"},r.a.createElement("video",{onClick:function(){p?(E.current.pause(),f(!1)):(E.current.play(),f(!0))},className:"video_player",loop:!0,ref:E,src:t}),r.a.createElement(v,{channel:a,description:c,song:o}),r.a.createElement(j,{likes:s,shares:i,messages:l}))},O=(a(43),a(26)),_=a.n(O).a.create({baseURL:"https://tiktok-backend-mern-germany.herokuapp.com/"});var y=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/v2/posts");case 2:return t=e.sent,c(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app_videos"},a.map((function(e){var t=e.url,a=e.channel,n=e.description,c=e.song,o=e.likes,s=e.messages,i=e.shares;return r.a.createElement(w,{url:t,channel:a,description:n,song:c,likes:o,messages:s,shares:i})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.21e5373a.chunk.js.map