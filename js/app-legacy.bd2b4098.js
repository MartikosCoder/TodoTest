(function(t){function e(e){for(var n,r,c=e[0],d=e[1],s=e[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);f&&f(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=d(d.s=o[0]))}return t}var n={},r={app:0},a={app:0},i=[];function c(t){return d.p+"js/"+({}[t]||t)+"-legacy."+{"chunk-0b96b7e7":"80df3451","chunk-187604f0":"5ed6ae7a","chunk-1da16083":"a34aa06d"}[t]+".js"}function d(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.e=function(t){var e=[],o={"chunk-0b96b7e7":1,"chunk-187604f0":1,"chunk-1da16083":1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-0b96b7e7":"6ae27c32","chunk-187604f0":"437bf09f","chunk-1da16083":"8b249cc6"}[t]+".css",a=d.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===a))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],u=s.getAttribute("data-href");if(u===n||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],f.parentNode.removeChild(f),o(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.src=c(t);var l=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(f);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},d.m=t,d.c=n,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(o,n,function(e){return t[e]}.bind(null,n));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/TodoTest/",d.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],i=(o("034f"),o("2877")),c={},d=Object(i["a"])(c,r,a,!1,null,null,null),s=d.exports,u=(o("7db0"),o("c975"),o("d81d"),o("a434"),o("2909")),l=o("5530"),f=o("2f62");n["a"].use(f["a"]);var p=new f["a"].Store({state:{todo_list:JSON.parse(localStorage.getItem("todo_list"))||[],todo_active:{}},getters:{all_todos:function(t){return t.todo_list},active_todo:function(t){return t.todo_active},specific_todo:function(t){return function(e){return Object(l["a"])({},t.todo_list.find((function(t){return t.id===e})))}}},mutations:{ADD_TODO:function(t){var e=Math.max.apply(Math,Object(u["a"])(t.todo_list.map((function(t){return t.id}))));t.todo_list.push({id:e>0?e+1:1,title:"",items:[]})},REMOVE_TODO:function(t,e){t.todo_list.splice(e,1)},CHANGE_TODO:function(t,e){var o=e.index,n=e.new_todo;t.todo_list.splice(o,1,n)},UPDATE_ACTIVE:function(t,e){t.todo_active=e},SET_ACTIVE_TODO:function(t,e){t.todo_active=e},SAVE_STATE:function(t){localStorage.setItem("todo_list",JSON.stringify(t.todo_list))}},actions:{addTodo:function(t){var e=t.commit,o=t.getters,n=t.dispatch;e("ADD_TODO"),n("setActive",o.all_todos[o.all_todos.length-1].id),e("SAVE_STATE")},removeTodo:function(t,e){var o=t.commit,n=t.getters;o("REMOVE_TODO",n.all_todos.map((function(t){return t.id})).indexOf(e)),o("SAVE_STATE")},changeTodo:function(t){var e=t.commit,o=t.getters;e("CHANGE_TODO",{index:o.all_todos.map((function(t){return t.id})).indexOf(o.active_todo.id),new_todo:o.active_todo}),e("SAVE_STATE")},updateActive:function(t,e){var o=t.commit;o("UPDATE_ACTIVE",e)},setActive:function(t,e){var o=t.commit,n=t.getters;o("SET_ACTIVE_TODO",n.specific_todo(e))},clearActive:function(t){var e=t.commit;e("SET_ACTIVE_TODO",{})}}}),m=(o("d3b7"),o("8c4f")),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"home-page"},[t.all_todos.length>0?o("ul",{staticClass:"home-page__todo-list flex"},t._l(t.all_todos,(function(e){return o("TodoCard",{key:e.id,attrs:{todo:e},on:{modalRequired:t.openModal}})})),1):o("div",{staticClass:"home-page__empty-msg flex"},[t._v("Nothing here. Add new TODO!")]),o("button",{staticClass:"home-page__add-btn good",on:{click:t.createNewTodo}},[t._v("Add")]),o("section",{staticClass:"modal",class:{flex:t.modal_is_opened}},[o("div",{staticClass:"modal_container flex"},[o("span",[t._v("Are you sure?")]),o("div",{staticClass:"modal_panel flex"},[o("button",{on:{click:t.discardCommand}},[t._v("No")]),o("button",{on:{click:t.acceptCommand}},[t._v("Yes")])])])])])},h=[],v={name:"Home",data:function(){return{stack_id:null,modal_is_opened:!1}},computed:Object(l["a"])({},Object(f["c"])(["all_todos","active_todo"])),components:{TodoCard:function(){return o.e("chunk-187604f0").then(o.bind(null,"7d7b"))}},methods:Object(l["a"])({},Object(f["b"])(["addTodo","removeTodo"]),{createNewTodo:function(){this.addTodo(),this.$router.push("/edit/".concat(this.active_todo.id))},openModal:function(t){this.$set(this,"stack_id",t),this.$set(this,"modal_is_opened",!0)},discardCommand:function(){this.$set(this,"stack_id",null),this.$set(this,"modal_is_opened",!1)},acceptCommand:function(){this.removeTodo(this.stack_id),this.discardCommand()}})},b=v,g=(o("cccb"),Object(i["a"])(b,_,h,!1,null,null,null)),T=g.exports;n["a"].use(m["a"]);var O=[{path:"*",name:"Home",component:T},{path:"/edit/:id",name:"Edit",props:!0,component:function(){return o.e("chunk-0b96b7e7").then(o.bind(null,"1071"))}}],E=new m["a"]({routes:O}),y=E;n["a"].config.productionTip=!1,new n["a"]({store:p,router:y,render:function(t){return t(s)}}).$mount("#app")},"5ced":function(t,e,o){},"85ec":function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a}});
//# sourceMappingURL=app-legacy.bd2b4098.js.map