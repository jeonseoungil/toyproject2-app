(()=>{"use strict";var e={3826:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var r=n(4760),o=n(2982),i=n(885),l=n(5004),d=n(9385),a=n(1054),u=n(668),s=n(5288),c=n(6591),f=n(2629),g=u.default.create({container:{flexDirection:"row",alignItems:"center",width:"90%",paddingTop:80},input:{flex:1,borderWidth:1,borderColor:"darkorange",borderRadius:30,height:40,paddingLeft:30,alignItems:"center"},button:{backgroundColor:"orange",width:90,height:35,borderRadius:30,alignItems:"center",justifyContent:"center",position:"absolute",right:3,top:"205%"}});const h=function(e){var t=e.addText,n=(0,l.useState)(""),r=(0,i.default)(n,2),o=r[0],u=r[1];return(0,f.jsxs)(d.default,{style:g.container,children:[(0,f.jsx)(c.default,{style:g.input,placeholder:"\uc624\ub298\uc758 \uc77c\uc815\uc744 \ub123\uc5b4 \uc8fc\uc138\uc694",value:o,onChangeText:function(e){return u(e)}}),(0,f.jsx)(s.default,{style:g.button,onPress:function(){""!==o&&(t(o),u(""))},children:(0,f.jsx)(a.default,{children:"\ud655\uc778"})})]})};var b=n(4942);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,b.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=u.default.create({container:{flexDirection:"row",alignItems:"center",width:"90%",paddingTop:80},input:{flex:1,borderWidth:1,borderColor:"darkorange",borderRadius:30,height:40,paddingLeft:30,alignItems:"center"},button:{backgroundColor:"orange",width:90,height:35,borderRadius:30,alignItems:"center",justifyContent:"center",position:"absolute",right:3,top:"205%"}});const y=function(e){var t=e.retext,n=e.data,r=e.setData,o=e.setreaddtoggleIn,u=(0,l.useState)(t.text),g=(0,i.default)(u,2),h=g[0],b=g[1];return(0,f.jsxs)(d.default,{style:j.container,children:[(0,f.jsx)(c.default,{style:j.input,placeholder:"Enter text",value:h,onChangeText:function(e){b(e)}}),(0,f.jsx)(s.default,{style:j.button,onPress:function(){if(""!==h){var e=n.map((function(e){return e.id===t.id?x(x({},e),{},{text:h}):e}));r(e),o(!1),b("")}},children:(0,f.jsx)(a.default,{children:"\ud655\uc778"})})]})};var v=n(6921),m=n(4193),w=u.default.create({itemContainer:{flexDirection:"row",alignItems:"center",width:350,height:30,borderRadius:10,backgroundColor:"white",elevation:1,alignItems:"center",marginBottom:30,paddingLeft:20,overflow:"visible"},highlighted:{textDecorationLine:"line-through",color:"red",paddingLeft:20,fontSize:20},textStyle:{paddingLeft:20,fontSize:20,fontWeight:"bold"},pButton:{width:15,height:15,borderRadius:7.5,alignItems:"center",justifyContent:"center",backgroundColor:"white",elevation:1,position:"absolute",right:10},strongButton:{width:25,height:25,borderColor:"#81f712",borderRadius:12.5,alignItems:"center",justifyContent:"center",backgroundColor:"white",position:"absolute",right:35,top:"110%"},bButton:{width:25,height:25,borderColor:"#81f712",borderRadius:12.5,alignItems:"center",justifyContent:"center",backgroundColor:"white",position:"absolute",right:5,top:"110%"},endToggle:{alignItems:"center",justifyContent:"center",position:"absolute",right:10},pencilButton:{width:25,height:25,borderRadius:12.5,alignItems:"center",justifyContent:"center",backgroundColor:"white",position:"absolute",right:65,top:"110%"}});const O=function(e){var t=e.item,n=e.isSelected,r=e.toggleStrongAndB,o=e.deleteLi,u=e.redOver,c=e.readdt,g=t.id,h=t.text,b=(0,l.useState)(!1),p=(0,i.default)(b,2),x=p[0],j=p[1],y=(0,l.useState)(!1),v=(0,i.default)(y,2),O=v[0],S=v[1];return(0,f.jsxs)(d.default,{style:w.itemContainer,children:[(0,f.jsx)(a.default,{style:x?w.highlighted:w.textStyle,children:g}),(0,f.jsx)(a.default,{style:x?w.highlighted:w.textStyle,children:h}),O?(0,f.jsx)(d.default,{style:w.endToggle,children:(0,f.jsx)(m.default,{name:"check-circle",size:30,color:"#81f712"})}):(0,f.jsx)(s.default,{style:w.pButton,onPress:r,children:(0,f.jsx)(a.default,{})}),n&&(0,f.jsx)(s.default,{style:w.strongButton,onPress:function(){return function(e){t.id===e&&(j(!0),S(!0),u())}(g)},children:(0,f.jsx)(m.default,{name:"check",size:15,color:"#81f712"})}),n&&(0,f.jsx)(s.default,{style:w.bButton,onPress:function(){return o(g)},children:(0,f.jsx)(m.default,{name:"trash",size:15,color:"#81f712"})}),n&&(0,f.jsx)(s.default,{style:w.pencilButton,onPress:function(){return c(g)},children:(0,f.jsx)(m.default,{name:"pencil",size:15,color:"#81f712"})})]})};var S=u.default.create({container:{width:"100%",justifyContent:"center",alignItems:"center",marginTop:80}});const C=function(e){var t=e.data,n=e.selectedItemId,r=e.toggleStrongAndB,o=e.deleteLi,i=e.redOver,l=e.readdt;return(0,f.jsx)(d.default,{style:S.container,children:(0,f.jsx)(v.default,{data:t,keyExtractor:function(e){return e.id.toString()},renderItem:function(e){var t=e.item;return(0,f.jsx)(O,{item:t,isSelected:t.id===n,toggleStrongAndB:function(){return r(t.id)},deleteLi:o,redOver:i,readdt:l})}})})};var k=[{id:1,text:"\uc218\uc601\ud558\uae30"},{id:2,text:"\ubc25\uba39\uae30"},{id:3,text:"\uacf5\ubd80\ud558\uae30"},{id:4,text:"\uc218\uc601\ud558\uae30"},{id:5,text:"\ubc25\uba39\uae30"},{id:6,text:"\uacf5\ubd80\ud558\uae30"}],I=u.default.create({container:{flex:1,alignItems:"center"},title:{fontSize:40,fontWeight:"bold",paddingBottom:40,width:"100%",textAlign:"center",paddingTop:"30%",backgroundColor:"skyblue",color:"white"},toggleButton:{backgroundColor:"blue",width:50,height:50,borderRadius:50,alignItems:"center",justifyContent:"center",position:"absolute",bottom:50},toggleText:{color:"white",fontSize:40}});const P=function(){var e=(0,l.useState)(k),t=(0,i.default)(e,2),n=t[0],r=t[1],u=(0,l.useState)(!1),c=(0,i.default)(u,2),g=c[0],b=c[1],p=(0,l.useState)(!1),x=(0,i.default)(p,2),j=x[0],v=x[1],m=(0,l.useState)({}),w=(0,i.default)(m,2),O=w[0],S=w[1];(0,l.useEffect)((function(){g&&v(!1)}),[g]);var P=(0,l.useState)(null),B=(0,i.default)(P,2),T=B[0],R=B[1],D=(0,l.useRef)(7);return(0,f.jsxs)(d.default,{style:I.container,children:[(0,f.jsx)(a.default,{style:I.title,children:"daily todo list"}),g&&(0,f.jsx)(h,{addText:function(e){if(v(!1),""!==e){D.current;r([].concat((0,o.default)(n),[{id:D.current++,text:e}])),b(!1)}}}),j&&(0,f.jsx)(y,{retext:O,data:n,setData:r,setreaddtoggleIn:v}),(0,f.jsx)(C,{data:n,selectedItemId:T,toggleStrongAndB:function(e){R(e===T?null:e)},deleteLi:function(e){r(n.filter((function(t){return t.id!==e})))},redOver:function(){!0===j&&v(!1),R(null),alert("\uc77c\uc815\uc774 \uc644\ub8cc \ucc98\ub9ac\ub429\ub2c8\ub2e4.")},readdt:function(e){R(null),b(!1);var t=n.find((function(t){return t.id===e}));t?(S(t),v(!0),console.log(O)):console.log("\ud574\ub2f9 \uc77c\uc815\uc744 \uac00\uc9c4 \ud56d\ubaa9\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")}}),g?(0,f.jsx)(s.default,{style:I.toggleButton,onPress:function(){return b(!1)},children:(0,f.jsx)(a.default,{style:I.toggleText,children:"-"})}):(0,f.jsx)(s.default,{style:I.toggleButton,onPress:function(){return b(!0)},children:(0,f.jsx)(a.default,{style:I.toggleText,children:"+"})})]})};function B(){return r.default.setBackgroundColor("skyblue"),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(P,{})})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var l=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],d=!0,a=0;a<r.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(d=!1,i<l&&(l=i));if(d){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[l,d,a]=r,u=0;if(l.some((t=>0!==e[t]))){for(o in d)n.o(d,o)&&(n.m[o]=d[o]);if(a)var s=a(n)}for(t&&t(r);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[306],(()=>n(6271)));r=n.O(r)})();
//# sourceMappingURL=main.73774130.js.map