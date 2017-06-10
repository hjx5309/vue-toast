/*!
 * @license MIT
 * version:1.0.0-bate0
 * anthor: Alex Wen
 * Xi'an
 * Email: wenxinghua1990@163.com
 */
webpackJsonp([0],[,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),a=e.n(o),i=e(11),s=e.n(i),r=e(5);a.a.use(r.a,{theme:"success",globalPosition:{top:"10%"}}),new a.a({el:"#app",template:"<App/>",components:{App:s.a}})},function(t,n,e){"use strict";var o=e(10),a=e.n(o),i={};i.install=function(t,n){var e=t.extend(a.a),o=function(t){t.target.parentNode.childNodes.length>1?t.target.parentNode.removeChild(t.target):t.target.parentNode.parentNode.removeChild(t.target.parentNode)};e.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",o)},t.prototype.$toast=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(new e).$mount(document.createElement("div")),a=t.duration||n.duration||2500;o.message="string"==typeof t?t:t.message,o.position=t.position||n.position||"top right",o.globalPosition=n.globalPosition||{},o.instancePosition=t.instancePosition||{},o.theme=t.theme||n.theme||"info";var i=document.getElementsByClassName("toast-container");return i.length?(o.$el=o.$el.childNodes[0],i[0].append(o.$el)):n.container?document.getElementById(n.container).children[0].appendChild(o.$el):document.body.appendChild(o.$el),o.visible=!0,setTimeout(function(){o.close()},a),o}},n.a=i},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{visible:!0,position:"",message:"",theme:"",globalPosition:{},instancePosition:{}}},computed:{ifGlobalPosition:function(){for(var t in this.globalPosition)return!0;return!1}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app",data:function(){return{toast:"toast plugin example"}},methods:{},created:function(){this.$toast("welcome"),this.$toast("to meet you")}}},function(t,n,e){n=t.exports=e(1)(void 0),n.push([t.i,"\n.mySwiper[data-v-4b33c4a4] {\n  margin: 0 auto;\n}\n",""])},function(t,n,e){n=t.exports=e(1)(void 0),n.push([t.i,"\n.toast-container {\n  position: absolute;\n}\n.toast-container.right {\n    right: 0;\n}\n.toast-container.left {\n    left: 0;\n}\n.toast-container.middle {\n    top: 50%;\n}\n.toast-container.top {\n    top: 0%;\n}\n.toast-container.bottom {\n    top: 90%;\n}\n.toast {\n  position: relative;\n  word-wrap: break-word;\n  padding: 10px;\n  text-align: center;\n  opacity: 0.9;\n  transition: transform .5s;\n  z-index: 9999;\n  font-size: 1rem;\n  min-width: 15rem;\n  max-width: 80%;\n  color: #fff;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n}\n.toast.hidden {\n    transform: translate(-50%, -50%) scale(0);\n}\n.toast.primary {\n    background: #0275d8;\n}\n.toast.success {\n    background: #5cb85c;\n}\n.toast.info {\n    background: #fff;\n    color: #5cb85c;\n}\n.toast.warning {\n    background: #ff5b77;\n}\n.toast.danger {\n    background: #d9534f;\n}\n.toast.inverse {\n    background: #292b2c;\n}\n.toast.faded {\n    background: #f7f7f7;\n}\n.fade-enter-active, .fade-leave-active {\n  transition: transform .5s;\n}\n.fade-enter, .fade-leave-active {\n  transform: translate(-50%, -50%) scale(0);\n}\n",""])},function(t,n,e){e(15);var o=e(2)(e(6),e(13),null,null);t.exports=o.exports},function(t,n,e){e(14);var o=e(2)(e(7),e(12),"data-v-4b33c4a4",null);t.exports=o.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"myToast"},[e("i",[t._v(t._s(t.toast))])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.ifGlobalPosition?e("div",{staticClass:"toast-container",class:[t.position],style:t.globalPosition},[e("div",{staticClass:"toast",class:[{hidden:!t.visible},t.theme],style:t.instancePosition},[e("i",[t._v(t._s(t.message))])])]):e("div",{staticClass:"toast-container",class:[t.position]},[e("div",{staticClass:"toast",class:[{hidden:!t.visible},t.theme],style:t.instancePosition},[e("i",[t._v(t._s(t.message))])])])},staticRenderFns:[]}},function(t,n,e){var o=e(8);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(3)("ffd9a82c",o,!0)},function(t,n,e){var o=e(9);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(3)("5c8e7a05",o,!0)},,,function(t,n,e){t.exports=e(4)}],[18]);
//# sourceMappingURL=example.build.js.map