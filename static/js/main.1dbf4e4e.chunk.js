(this.webpackJsonpgithubapi=this.webpackJsonpgithubapi||[]).push([[0],{94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(28),s=a.n(c),o=a(31),i=a(44),u=a(74),p=a(23),l={q:"",totalCount:0,repositoriesCards:[],page:0,errorMessage:null,isLoading:!1},j=a(27),b=a.n(j),O=a(20),d=a(67),h=a(48),x=a(49),f=function(){function e(){Object(h.a)(this,e)}return Object(x.a)(e,[{key:"search",value:function(){var e=Object(d.a)(b.a.mark((function e(t){var a,r,n,c,s=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.length>1&&void 0!==s[1]?s[1]:1,r=t.trim()){e.next=4;break}return e.abrupt("return",{total_count:0,items:[]});case 4:return a=a<=0?1:a,e.prev=5,e.next=8,fetch("https://api.github.com/search/repositories?per_page=".concat(10,"&q=").concat(r,"&page=").concat(a),{headers:{Authorization:"token ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react_github_api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_TOKEN)}});case 8:return n=e.sent,e.next=11,n.json();case 11:if(c=e.sent,200===n.status){e.next=14;break}throw c;case 14:return e.abrupt("return",c);case 17:throw e.prev=17,e.t0=e.catch(5),e.t0;case 20:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),_=new f,g=b.a.mark(v),y=b.a.mark(m),E=b.a.mark(C),S=b.a.mark(R),T=b.a.mark(w);function v(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.c)({type:"SET_TOTAL_COUNT",payload:{totalCount:0}});case 2:return t.next=4,Object(O.c)({type:"SET_PAGE",payload:{page:1}});case 4:return t.next=6,Object(O.c)({type:"SET_Q",payload:e.payload});case 6:return t.next=8,Object(O.c)({type:"*SEARCH",payload:e.payload});case 8:case"end":return t.stop()}}),g)}function m(e){var t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(O.c)({type:"SET_REPOSITORIES_CARDS",payload:{repositoriesCards:[]}});case 2:return a.next=4,Object(O.c)({type:"SET_IS_LOADING",payload:{isLoading:!0}});case 4:return a.prev=4,a.next=7,Object(O.a)(_.search,e.payload.q,e.payload.page);case 7:return t=a.sent,a.next=10,Object(O.c)({type:"SET_TOTAL_COUNT",payload:{totalCount:t.total_count}});case 10:return a.next=12,Object(O.c)({type:"SET_REPOSITORIES_CARDS",payload:{repositoriesCards:t.items}});case 12:a.next=18;break;case 14:return a.prev=14,a.t0=a.catch(4),a.next=18,Object(O.c)({type:"SET_ERROR_MESSAGE",payload:{errorMessage:a.t0.message}});case 18:return a.prev=18,a.next=21,Object(O.c)({type:"SET_IS_LOADING",payload:{isLoading:!1}});case 21:return a.finish(18);case 22:case"end":return a.stop()}}),y,null,[[4,14,18,22]])}function C(e){var t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(O.c)({type:"SET_PAGE",payload:e.payload});case 2:return a.next=4,Object(O.d)((function(e){return e.q}));case 4:return t=a.sent,a.next=7,Object(O.c)({type:"*SEARCH",payload:{q:t,page:e.payload.page}});case 7:case"end":return a.stop()}}),E)}function R(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.c)({type:"SET_ERROR",payload:e.payload});case 2:case"end":return t.stop()}}),S)}function w(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)("*SET_Q",v);case 2:return e.next=4,Object(O.b)(300,"*SEARCH",m);case 4:return e.next=6,Object(O.e)("*SET_PAGE",C);case 6:return e.next=8,Object(O.e)("*SET_ERROR",R);case 8:case"end":return e.stop()}}),T)}var A=Object(u.a)(),k=Object(i.c)((function(e,t){switch(e=e||l,t.type){case"SET_Q":return Object(p.a)(Object(p.a)({},e),{},{q:t.payload.q||""});case"SET_TOTAL_COUNT":return Object(p.a)(Object(p.a)({},e),{},{totalCount:t.payload.totalCount||0});case"SET_REPOSITORIES_CARDS":return Object(p.a)(Object(p.a)({},e),{},{repositoriesCards:t.payload.repositoriesCards||[]});case"SET_PAGE":return Object(p.a)(Object(p.a)({},e),{},{page:t.payload.page||0});case"SET_ERROR_MESSAGE":return Object(p.a)(Object(p.a)({},e),{},{errorMessage:t.payload.errorMessage||null});case"SET_IS_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.payload.isLoading||!1});default:return e}}),Object(i.a)(A));A.run(w);var I=k,L=(a(94),a(15)),P=a(144),D=a(146),G=a(140),q=a(148),M=a(147),N=a(141),H=a(149),z=a(150),F=a(2);var U=function(e){var t=e.name,a=e.html_url,r=e.avatar_url,n=e.stargazers_count,c=e.description,s=e.topics;return Object(F.jsxs)(P.a,{sx:{mb:1},raised:!0,children:[Object(F.jsx)(D.a,{avatar:Object(F.jsx)(G.a,{src:r,children:"R"}),title:t,titleTypographyProps:{fontSize:25},subheader:"\u2b50".concat(n)}),Object(F.jsxs)(q.a,{children:[Object(F.jsx)(M.a,{variant:"body2",children:c}),s.map((function(e){return Object(F.jsx)(N.a,{label:e,sx:{mr:1,mt:1}})}))]}),Object(F.jsx)(H.a,{children:Object(F.jsx)(z.a,{href:a,target:"_blank",underline:"always",children:"\u0412 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"})})]})},W=a(133),K=a(142);var Q=function(){return Object(F.jsxs)(W.a,{spacing:1,sx:{margin:"0 auto 10px auto",border:"1px solid rgba(0, 0, 0, 0.11)",padding:1,width:530},children:[Object(F.jsx)(K.a,{variant:"rectangular",width:530,height:20,animation:"wave"}),Object(F.jsx)(K.a,{variant:"circular",width:40,height:40,animation:"wave"}),Object(F.jsx)(K.a,{variant:"rectangular",width:530,height:118,animation:"wave"})]})},B=a(138),J=a(151),V=a(136),X=a(152);var Y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.q})),a=Object(r.useCallback)((function(t){e({type:"*SET_Q",payload:{q:t.target.value}})}),[e]),n=Object(o.c)((function(e){return e.isLoading})),c=Object(o.c)((function(e){return e.errorMessage})),s=Object(o.c)((function(e){return e.totalCount})),i=Object(o.c)((function(e){return e.page})),u=Object(o.c)((function(e){return e.repositoriesCards})),p=Object(r.useState)(0),l=Object(L.a)(p,2),j=l[0],b=l[1];Object(r.useEffect)((function(){var e=Math.ceil(s/10);b(e>100?100:e)}),[s]);var O=Object(r.useCallback)((function(t,a){e({type:"*SET_PAGE",payload:{page:a}})}),[e]),d=Object(r.useState)(120),h=Object(L.a)(d,2),x=h[0],f=h[1];return Object(r.useEffect)((function(){f(120+(j>0?50:0)+(100==i?20:0))}),[j,i]),Object(F.jsxs)(J.a,{sx:{my:4,paddingTop:"".concat(x+20,"px")},maxWidth:"sm",children:[Object(F.jsxs)(P.a,{sx:{my:2,padding:"10px",position:"fixed",width:"530px",backgroundColor:"#fff",zIndex:9,height:x,top:0},children:[Object(F.jsx)(V.a,{value:t,onChange:a,helperText:"\u0412\u0432\u0435\u0434\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f",label:"\u041f\u043e\u0438\u0441\u043a",fullWidth:!0}),Object(F.jsxs)("h3",{children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432: ",s]}),s>0?Object(F.jsx)(B.a,{count:j,color:"primary",onChange:O,page:i}):null,100==i?Object(F.jsx)(M.a,{color:"red",children:"\u0413\u0438\u0442\u0445\u0430\u0431 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 :("}):null]}),Object(F.jsx)(X.a,{children:n?Object(F.jsx)(Q,{}):u.map((function(e,t){return Object(F.jsx)(U,{name:e.name,html_url:e.html_url,avatar_url:e.owner.avatar_url,stargazers_count:e.stargazers_count,description:e.description,topics:e.topics},t.toString())}))}),c?Object(F.jsxs)(M.a,{color:"red",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",c]}):null]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},$=a(143),ee=a(73),te=a(37),ae=Object(ee.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:te.a.A400}}});s.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(o.a,{store:I,children:Object(F.jsx)($.a,{theme:ae,children:Object(F.jsx)(Y,{})})})}),document.getElementById("root")),Z()}},[[96,1,2]]]);
//# sourceMappingURL=main.1dbf4e4e.chunk.js.map