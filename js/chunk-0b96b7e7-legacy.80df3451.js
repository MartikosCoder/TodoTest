(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b96b7e7"],{1071:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"edit-page"},[e("div",{staticClass:"edit-page__todo"},[e("div",{staticClass:"edit-page__todo__title"},[e("input",{attrs:{type:"text",name:"title",id:"title"},domProps:{value:t.active_todo.title},on:{blur:t.saveTitle}})]),e("section",{staticClass:"todo__items-block"},[e("div",{staticClass:"edit-page__todo__new-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_description,expression:"new_description"}],attrs:{type:"text",name:"new_item",id:"new_item",placeholder:"New task"},domProps:{value:t.new_description},on:{input:function(i){i.target.composing||(t.new_description=i.target.value)}}}),e("button",{staticClass:"good",on:{click:t.addNewItem}},[t._v("Add")])]),e("ul",{staticClass:"edit-page__todo__items-list"},t._l(t.active_todo.items,(function(t){return e("ItemEditor",{key:t.id,staticClass:"list-item",attrs:{id:t.id}})})),1)])]),e("div",{staticClass:"edit-page__controls flex"},[e("div",{staticClass:"controls__main"},[e("button",{staticClass:"controls__btn back",on:{click:function(i){return t.setConfirmation("discard")}}},[t._v("Back")]),e("button",{staticClass:"controls__btn danger",on:{click:function(i){return t.setConfirmation("remove")}}},[t._v("Remove")]),e("button",{staticClass:"controls__btn good",on:{click:t.updateTodo}},[t._v("Save")])]),e("div",{staticClass:"controls__additional"},[e("button",{staticClass:"controls__btn standard",on:{click:t.undo}},[t._v("Undo")]),e("button",{staticClass:"controls__btn standard",on:{click:t.redo}},[t._v("Redo")])])]),e("section",{staticClass:"modal",class:{flex:t.modal_is_opened}},[e("div",{staticClass:"modal_container flex"},[e("span",[t._v("Are you sure?")]),e("div",{staticClass:"modal_panel flex"},[e("button",{on:{click:t.discardCommand}},[t._v("No")]),e("button",{on:{click:t.acceptCommand}},[t._v("Yes")])])])])])},o=[],n=(e("99af"),e("d81d"),e("fb6a"),e("d3b7"),e("2909")),a=e("5530"),c=e("2f62"),d={name:"Edit",props:{id:String},data:function(){return{new_description:"",command:null,modal_is_opened:!1,history:[],revision:0,is_moving:!1}},components:{ItemEditor:function(){return e.e("chunk-1da16083").then(e.bind(null,"466e"))}},computed:Object(a["a"])({},Object(c["c"])(["all_todos","active_todo"])),created:function(){this.setActive(+this.id)},watch:{active_todo:{handler:function(t){if(!this.is_moving){var i=JSON.parse(JSON.stringify(t));this.$set(this,"history",this.history.slice(0,this.revision)),this.history.push(i),this.$set(this,"revision",this.revision+1)}this.$set(this,"is_moving",!1)},deep:!0}},methods:Object(a["a"])({},Object(c["b"])(["setActive","changeTodo","removeTodo","updateActive","clearActive"]),{addNewItem:function(){if(this.new_description.length>0){var t=Math.max.apply(Math,Object(n["a"])(this.active_todo.items.map((function(t){return t.id}))));this.active_todo.items=[].concat(Object(n["a"])(this.active_todo.items),[{id:t>0?t+1:1,checked:!1,description:this.new_description}]),this.$set(this,"new_description","")}},goToMain:function(){this.$router.push("/")},updateTodo:function(){this.changeTodo(),this.goToMain()},setConfirmation:function(t){this.$set(this,"modal_is_opened",!0),this.$set(this,"command",t)},discardCommand:function(){this.$set(this,"command",""),this.$set(this,"modal_is_opened",!1)},acceptCommand:function(){switch(this.command){case"remove":this.removeTodo(this.active_todo.id);break;case"discard":this.clearActive();break}this.goToMain()},saveTitle:function(t){this.$set(this.active_todo,"title",t.target.value)},updater:function(){var t=Object(a["a"])({},this.history[this.revision-1]);this.updateActive(t)},undo:function(){this.revision>1&&(this.$set(this,"revision",this.revision-1),this.$set(this,"is_moving",!0),this.updater())},redo:function(){this.revision<this.history.length&&(this.$set(this,"revision",this.revision+1),this.$set(this,"is_moving",!0),this.updater())}})},r=d,l=(e("d572"),e("2877")),h=Object(l["a"])(r,s,o,!1,null,null,null);i["default"]=h.exports},"99af":function(t,i,e){"use strict";var s=e("23e7"),o=e("d039"),n=e("e8b5"),a=e("861d"),c=e("7b0b"),d=e("50c4"),r=e("8418"),l=e("65f0"),h=e("1dde"),u=e("b622"),_=e("2d00"),v=u("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",f=_>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=h("concat"),g=function(t){if(!a(t))return!1;var i=t[v];return void 0!==i?!!i:n(t)},C=!f||!b;s({target:"Array",proto:!0,forced:C},{concat:function(t){var i,e,s,o,n,a=c(this),h=l(a,0),u=0;for(i=-1,s=arguments.length;i<s;i++)if(n=-1===i?a:arguments[i],g(n)){if(o=d(n.length),u+o>m)throw TypeError(p);for(e=0;e<o;e++,u++)e in n&&r(h,u,n[e])}else{if(u>=m)throw TypeError(p);r(h,u++,n)}return h.length=u,h}})},d572:function(t,i,e){"use strict";var s=e("fea3"),o=e.n(s);o.a},fea3:function(t,i,e){}}]);
//# sourceMappingURL=chunk-0b96b7e7-legacy.80df3451.js.map