(this["webpackJsonpreact-autocomplete"]=this["webpackJsonpreact-autocomplete"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"a":{"users":[{"id":"123-s2-546","name":"John Jacobs","items":["bucket","bottle"],"address":"1st Cross, 9th Main, abc Apartment","pincode":"5xx012"},{"id":"123-s3-146","name":"David Mire","items":["Bedroom Set"],"address":"2nd Cross, BTI Apartment","pincode":"4xx012"},{"id":"223-a1-234","name":"Soloman Marshall","items":["bottle"],"address":"Riverbed Apartment","pincode":"4xx032"},{"id":"121-s2-111","name":"Ricky Beno","items":["Mobile Set"],"address":"Sunshine City","pincode":"5xx072"},{"id":"123-p2-246","name":"Sikander Singh","items":["Air Conditioner"],"address":"Riverbed Apartment","pincode":"4xx032"},{"id":"b23-s2-321","name":"Ross Wheeler","items":["Mobile"],"address":"1st Cross, 9th Main, abc Apartement","pincode":"5xx012"},{"id":"113-n2-563","name":"Ben Bish","items":["Kitchen Set","Chair"],"address":"Sunshine City","pincode":"5xx072"},{"id":"323-s2-112","name":"John Michael","items":["Refrigerator"],"address":"1st Cross, 9th Main, abc Apartement","pincode":"5xx012"},{"id":"abc-34-122","name":"Jason Jordan","items":["Mobile"],"address":"Riverbed Apartment","pincode":"4xx032"}]}}')},function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),s=n.n(c),i=(n(11),n(2)),o=(n(12),n(5)),u=n(1),l=function(e){var t=e.htmlId,n=e.onMouseEnter,r=e.onMouseLeave,c=e.onClick,s=Object(u.a)(e,["htmlId","onMouseEnter","onMouseLeave","onClick"]);return a.a.createElement("div",{className:"autocomplete__result",tabIndex:"0",id:t,onMouseEnter:n,onMouseLeave:r,onClick:c},s.children)};var d="ARROWDOWN",m="ARROWUP",v="ENTER",f="ESCAPE";function h(e,t){return-1===e.indexOf(t)?-1:parseInt(e.replace(t,""))}var p,b=(p=function(e){var t=e.htmlId,n=e.name,r=e.type,c=void 0===r?"text":r,s=e.onChange,i=e.placeholder,o=e.value,l=e.error,d=e.children,m=e.classList,v=e.forwardedRef,f=Object(u.a)(e,["htmlId","name","type","onChange","placeholder","value","error","children","classList","forwardedRef"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",Object.assign({id:t,type:c,name:n,placeholder:i,value:o,onChange:s,className:"".concat(m.join(" ")," ").concat(l?"searchBox__input--error":""),ref:v},f)),d,l&&a.a.createElement("div",{className:"searchBox__error"},l))},Object(r.forwardRef)((function(e,t){var n=e.items,c=void 0===n?[]:n,s=e.renderItem,o=e.primaryKey,b=e.onReady,E=void 0===b?function(e,t){}:b,L=e.onSelect,x=void 0===L?function(e){}:L,y=e.noResultText,g=void 0===y?"No items matches the result.":y,w=e.reset,O=void 0===w?function(){}:w,R=e.itemIdPrefix,C=void 0===R?"autocomplete-":R,j=Object(u.a)(e,["items","renderItem","primaryKey","onReady","onSelect","noResultText","reset","itemIdPrefix"]),_=Object(r.useRef)(null),k=Object(r.useRef)(null),M=Object(r.useRef)(0),S=Object(r.useRef)([]),I=function(e,t){var n=Object(r.useState)([]),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){s(t?e.filter((function(e){return Object.values(e).join(" ").toLowerCase().indexOf(t.toLowerCase())>-1})):[])}),[e,t]),c}(c,j.value);Object(r.useEffect)((function(){var e=_.current,t=k.current;return _.current.addEventListener("keydown",J),k.current.addEventListener("keydown",W),k.current.addEventListener("focus",A),_.current.style.width=k.current.style.width,E(k.current,_.current),document.addEventListener("keydown",N),function(){e.removeEventListener("keydown",J),t.removeEventListener("keydown",W),t.removeEventListener("focus",A),document.removeEventListener("click",N)}}),[]),Object(r.useEffect)((function(){if(S.current=I,I.length){_.current.classList.contains("hide")&&_.current.classList.remove("hide");var e=_.current.children;M.current&&e[M.current]&&e[M.current].classList.remove("active"),M.current=0}}),[I]);var N=function(e){e.key.toUpperCase()===f&&(_.current.classList.contains("hide")||_.current.classList.add("hide"))},A=function(e){var t=function(e){var t=e.getBoundingClientRect();return{left:t.left+window.scrollX,top:t.top+window.scrollY}}(k.current),n=t.left,r=t.top;_.current.style.left=n,_.current.style.top=r,_.current.classList.contains("hide")&&_.current.classList.remove("hide")},B=function(e){var t=S.current[e];k.current.focus(),x(t),_.current.classList.contains("hide")||_.current.classList.add("hide")},J=function(e){var t=_.current.children,n=t.length;switch(e.key.toUpperCase()){case m:return t[M.current].classList.remove("active"),0===M.current?void k.current.focus():(M.current--,void t[M.current].classList.add("active"));case d:if(M.current===n-1)return;return t[M.current].classList.remove("active"),M.current++,void t[M.current].classList.add("active");case v:return t[M.current].classList.remove("active"),void B(M.current)}},W=function(e){var t=_.current.children;if(e.key.toUpperCase()===d&&t.length)return t[M.current].focus(),void t[M.current].classList.add("active")},T=function(e){var t=h(e.target.id,C),n=_.current.children;n[M.current].classList.remove("active"),n[t]&&(M.current=t,n[M.current].classList.add("active"))},U=function(e){var t=h(e.target.id,C),n=_.current.children;n[t]&&(M.current=t,n[M.current].classList.remove("active"))},F=function(e){var t=h(e.target.id,C),n=_.current.children;n[t]&&(M.current=t,n[M.current].classList.remove("active"),B(M.current))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"autocomplete__clear__text",onClick:O},"X"),a.a.createElement(p,Object.assign({},j,{forwardedRef:k})),a.a.createElement("div",{className:"autocomplete__results",ref:_,tabIndex:"0"},I.map((function(e,t){return a.a.createElement(l,Object.assign({key:e[o]},e,{htmlId:"".concat(C).concat(t),onMouseEnter:T,onMouseLeave:U,onClick:F}),s(e))})),j.value&&!I.length?a.a.createElement("div",{className:"autocomplete__no__results"},g):null))})));n(13);var E=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],u=Object(r.useCallback)((function(e){e.focus()}),[]);return a.a.createElement("div",null,a.a.createElement("header",{className:"app__header"},a.a.createElement("div",{className:"app__header--wrapper"},a.a.createElement(b,{items:o.a.users,renderItem:function(e){var t=e.id,n=e.name,r=e.address,c=e.pincode,s=e.items;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",null,a.a.createElement("strong",null,t)),a.a.createElement("p",{className:"render__name"},n),a.a.createElement("address",null,r,", ",c,", ",s.join(", ")))},primaryKey:"id",onChange:function(e){var t=e.target;s(t.value)},value:c,ref:e,onReady:u,onSelect:function(e){var t=e.name;s(t)},placeholder:"Search users by ID, address, name...",classList:["searchBox__input"],noResultText:"No User Found",reset:function(){s("")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.000e6709.chunk.js.map