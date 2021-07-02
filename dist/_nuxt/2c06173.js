(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(t,e,r){"use strict";r.r(e);r(32);var n=r(8),o=Object(n.a)({data:function(){return{name:"",email:"",username:""}},mounted:function(){this.getInitials()},updated:function(){this.auth&&this.getInitials()},computed:{auth:function(){return this.$store.getters.auth}},methods:{logout:function(){this.$store.commit("setToken",null),this.$router.push("/login/")},getInitials:function(){var t,e=this,r={Authorization:"Token "+this.$store.getters.token};this.$axios.get("auth/profile/",{headers:r}).then((function(r){var data=r.data;t=JSON.parse(JSON.stringify(data)),e.name=t.name,e.email=t.email,e.username=t.username}))}}}),l=(r(277),r(20)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"bg-blue-600"},[r("ul",{staticClass:"flex p-5 items-center justify-between"},[r("transition",[t.auth?r("ul",{staticClass:"flex space-x-4 items-center justify-between"},[r("li",[r("h1",{staticClass:"font-bold text-white text-xl"},[t._v("Todo")])]),t._v(" "),r("li",{staticClass:"font-semibold text-white"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Tasks")])],1)]):r("ul",{staticClass:"flex"},[r("li",{staticClass:"text-white mr-2"},[r("nuxt-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),r("li",{staticClass:"text-white"},[r("nuxt-link",{attrs:{to:"/register"}},[t._v("Register")])],1)])]),t._v(" "),t.auth?r("div",{staticClass:"w-28 inline-block relative"},[r("div",{class:["dropdown block"]},[r("button",{class:["rounded-b  py-2 px-4 w-auto h-auto -mx-12 font-semibold whitespace-no-wrap hover:bg-gray-900 rounded  items-center"]},[r("ul",[r("li",[r("img",{staticClass:"rounded-circle -mt-1",attrs:{src:"https://ui-avatars.com/api/?name="+t.name+"&background=random&size=32&color=fff&rounded=true&uppercase=true&bold=true"}}),t._v(" "),r("div",{staticClass:"todo-profile-name -mt-7.3 ml-10 text-white",attrs:{id:"profile-name"}},[t._v(t._s(t.name))])])])]),t._v(" "),r("ul",{class:["dropdown-menu absolute hidden text-gray-700 pt-1"]},[r("li",{},[r("button",{class:["bg-green-200 py-2 px-4 text-dark-400 block whitespace-no-wrap hover:bg-green-400 pr-5"],attrs:{tabindex:"-1",id:"menu-item-1","data-toggle":"dropdown",href:"#"},on:{click:t.logout}},[t._v("\n                Logout\n              ")])])])])]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},130:function(t,e,r){"use strict";r.r(e);r(34),r(22),r(33),r(41),r(23),r(42);var n=r(18),o=r(8);r(65);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c=Object(o.a)({emits:["newTask"],setup:function(t,e){var r=Object(o.e)({taskTitle:""}),c=Object(o.h)(),d=c.$axios,m=c.store,h=c.$toast;return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({addTask:function(){if(""===r.taskTitle)h.error("Empty field is not accepted");else{var data={title:r.taskTitle},t={Authorization:"Token "+m.getters.token};d.post("todo/create/",data,{headers:t}).then((function(t){t.data;e.emit("newTask"),r.taskTitle=""})).catch((function(t){h.error("Something went wrong")})),h.success("Task has been added")}}},Object(o.g)(r))}}),d=r(20),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("aside",{staticClass:"mx-auto flex justify-between mt-24 px-4"},[r("label",{staticClass:"flex-1",attrs:{for:"add task"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],staticClass:"\r\n          todo-add-task-input\r\n          px-4\r\n          py-2\r\n          placeholder-blueGray-300\r\n          text-blueGray-600\r\n          bg-white\r\n          rounded\r\n          text-sm\r\n          border border-blueGray-300\r\n          outline-none\r\n          focus:outline-none focus:ring\r\n          w-full\r\n        ",attrs:{id:"addTask",type:"text",name:"add task",placeholder:"Enter Task"},domProps:{value:t.taskTitle},on:{input:function(e){e.target.composing||(t.taskTitle=e.target.value)}}})]),t._v(" "),r("button",{class:["todo-add-task bg-transparent hover:bg-green-500 text-green-700 text-sm hover:text-white px-3  py-2 border border-green-500 hover:border-transparent rounded"],attrs:{type:"button"},on:{click:t.addTask}},[t._v("\r\n      Add Task\r\n    ")])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto flex justify-center mt-10 px-4"},[r("span",{staticClass:"inline-block justify-between bg-blue-600 py-1 mb-5 px-9 text-sm text-white font-bold rounded-full "},[t._v("Available Tasks")])])}],!1,null,null,null);e.default=component.exports},175:function(t,e,r){},176:function(t,e,r){},177:function(t,e,r){},178:function(t,e,r){},197:function(t,e,r){"use strict";var n=r(8),o=r(129),l=Object(n.a)({components:{Navbar:o.default}}),c=(r(278),r(20)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"bg-grey-lighter"},[r("header",[r("navbar")],1),t._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:r(129).default})},198:function(t,e,r){"use strict";r(73);var n={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(t){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100||t.percent<=0)&&(t.skipTimerCount=1,t.reversed=!t.reversed))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},o=(r(276),r(20)),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.a=component.exports},275:function(t,e,r){"use strict";r(175)},276:function(t,e,r){"use strict";r(176)},277:function(t,e,r){"use strict";r(177)},278:function(t,e,r){"use strict";r(178)},299:function(t,e,r){},302:function(t,e,r){"use strict";r.r(e);r(34),r(22),r(33),r(41),r(23),r(42);var n=r(18),o=r(8),l=r(0);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(l.d)({setup:function(){var t=Object(o.e)({inputUsername:"",inputPassword:""}),e=Object(o.h)(),r=e.redirect,n=e.$axios,l=e.store,c=e.$toast;return d(d({},Object(o.g)(t)),{},{login:function(){if(""!==t.inputUsername&&""!==t.inputPassword||(c.error("Please fill all the fields correctly."),0)){var e={username:t.inputUsername,password:t.inputPassword};c.info("Please wait..."),n.$post("auth/login/",e).then((function(t){var e=t.token;l.commit("setToken",e),r("/")})).catch((function(){c.error("Entered username or password is incorrect")}))}}})}}),h=r(20),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-lg mx-auto items-center justify-center px-2"},[r("div",{staticClass:"bg-white px-6 py-8 my-38 rounded shadow-md text-black w-full"},[r("h1",{staticClass:"mb-8 text-3xl text-center"},[t._v("Login")]),t._v(" "),r("label",{attrs:{for:"inputUsername"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputUsername,expression:"inputUsername"}],staticClass:"block border border-grey-light w-full p-3 rounded mb-4",attrs:{id:"inputUsername",type:"text",name:"inputUsername",placeholder:"Username"},domProps:{value:t.inputUsername},on:{input:function(e){e.target.composing||(t.inputUsername=e.target.value)}}})]),t._v(" "),r("label",{attrs:{for:"password"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPassword,expression:"inputPassword"}],staticClass:"block border border-grey-light w-full p-3 rounded mb-4",attrs:{id:"inputPassword",type:"password",name:"inputPassword",placeholder:"Password"},domProps:{value:t.inputPassword},on:{input:function(e){e.target.composing||(t.inputPassword=e.target.value)}}})]),t._v(" "),r("button",{class:["w-full h-auto text-center py-3 rounded bg-transparent text-green-500 hover:text-white hover:bg-green-500 border border-green-500 hover:border-transparent focus:outline-none my-1"],attrs:{type:"submit"},on:{click:t.login}},[t._v("\n      Login\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,r){"use strict";r.r(e);r(34),r(22),r(33),r(41),r(23),r(42);var n=r(18),o=(r(52),r(8));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(o.a)({setup:function(){var t=Object(o.e)({firstName:"",lastName:"",email:"",username:"",password:""}),e=Object(o.h)(),r=e.redirect,n=e.$axios,l=e.store,d=e.$toast;return c(c({},Object(o.g)(t)),{},{register:function(){if(""===t.firstName||""===t.lastName||""===t.email||""===t.username||""===t.password?(d.error("Please fill all the fields correctly."),0):/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t.email)||(d.error("Please enter a valid email address."),0)){var data={name:"".concat(t.firstName," ").concat(t.lastName),email:t.email,username:t.username,password:t.password};d.info("Please wait..."),n.$post("auth/register/",data).then((function(t){var e=t.token;l.commit("setToken",e),r("/")})).catch((function(){d.error("An account using same email or username is already created")}))}}})}}),m=r(20),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-lg mx-auto items-center justify-center px-2"},[r("div",{staticClass:"bg-white px-6 py-8 my-18 rounded shadow-md text-black w-full"},[r("h1",{staticClass:"mb-8 text-3xl text-center"},[t._v("Register")]),t._v(" "),r("label",{attrs:{for:"inputFirstName"}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.firstName,expression:"firstName",modifiers:{trim:!0}}],staticClass:"block border border-grey-light w-full p-3 rounded mb-4",attrs:{id:"inputFirstName",type:"text",name:"inputFirstName",placeholder:"First Name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("label",{attrs:{for:"inputLastName"}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.lastName,expression:"lastName",modifiers:{trim:!0}}],staticClass:"block border border-grey-light w-full p-3 rounded mb-4",attrs:{id:"inputLastName",type:"text",name:"inputLastName",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("label",{attrs:{for:"inputEmail"}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"block border border-grey-light w-full p-3 rounded mb-4",attrs:{id:"inputEmail",type:"email",name:"inputEmail",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("label",{attrs:{for:"inputUsername"}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}}],staticClass:"block border border-grey-light w-full p-3 rounded mb-4",attrs:{id:"inputUsername",type:"text",name:"inputUsername",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("label",{attrs:{for:"inputPassword"}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],staticClass:"block border border-grey-light w-full p-3 rounded mb-4",attrs:{id:"inputPassword",type:"password",name:"inputPassword",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("button",{staticClass:"\n        w-full\n        h-full\n        text-center\n        py-3\n        rounded\n        bg-transparent\n        text-green-500\n        hover:text-white hover:bg-green-500\n        border border-green-500\n        hover:border-transparent\n        focus:outline-none\n        my-1\n      ",attrs:{type:"submit"},on:{click:t.register}},[t._v("\n      Register\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,r){"use strict";r.r(e);var n=r(8),o=r(130),l=(r(161),Object(n.a)({middleware:"auth",components:{addTask:o.default},data:()=>({hello:"hello world!",todos:[],loading:!1}),mounted(){this.getTasks()},methods:{async getTasks(){this.loading=!0,this.todos=[];let t=[];const e={Authorization:"Token "+this.$store.getters.token};await this.$axios.get("todo/",{headers:e}).then((function({data:data}){data.forEach((function(e){e.editing=!1,t.push(e)}))})).catch((function(t){this.$toast.error("Unable to fetch tasks")})),this.todos=t,this.loading=!1},updateTask(t,e){this.todos[t].title||this.$toast.error("Empty field is not accepted");const r={Authorization:"Token "+this.$store.getters.token},data={title:this.todos[t].title};this.$axios.put("/todo/"+e+"/",data,{headers:r}).then((e=>{this.todos[t].editing=!this.todos[t].editing,this.$toast.success("Task has been updated")})).catch((function(t){this.$toast.error("Request cannot be processed")}))},editTask(t){this.todos[t].editing=!this.todos[t].editing},deleteTask(t,e){const r={Authorization:"Token "+this.$store.getters.token};this.$axios.delete("/todo/"+e+"/",{headers:r}).then((()=>{this.todos.splice(t,1),this.$toast.success("Task deleted succesfully")})).catch((t=>{this.$toast.error("Something went wrong")}))}}})),c=r(20),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-lg mx-auto px-6"},[r("add-task",{on:{newTask:t.getTasks}}),t._v(" "),r("transition",[t.loading?r("span",[t._v("Fetching Tasks....")]):r("ul",{staticClass:"flex-col mt-1 mx-auto"},t._l(t.todos,(function(e,n){return r("li",{key:e.id,staticClass:"\n          border\n          flex\n          border-gray-500\n          rounded\n          px-2\n          py-2\n          justify-between\n          items-center\n          mb-4\n          -mt-2\n        "},[r("label",{attrs:{for:e.id}},[e.editing?r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"todo.title"}],class:["appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring todo-edit-task-input"],attrs:{id:e.id,type:"text",name:e.title,placeholder:"Edit The Task"},domProps:{value:e.title},on:{input:function(r){r.target.composing||t.$set(e,"title",r.target.value)}}}):t._e()]),t._v(" "),r("div",{},[e.editing?r("button",{class:["bg-transparent hover:bg-gray-500 text-gray-700 text-sm hover:text-white py-2 px-3 border border-gray-500 hover:border-transparent rounded todo-update-task"],attrs:{id:"done",type:"button"},on:{click:function(r){return t.updateTask(n,e.id)}}},[t._v("\n            Done\n          ")]):t._e()]),t._v(" "),e.editing?t._e():r("div",{class:["todo-task text-gray-600 text-left"]},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),r("span",{},[e.editing?t._e():r("button",{class:["bg-transparent hover:bg-yellow-500 hover:text-white border border-yellow-500 hover:border-transparent rounded px-2 py-2"],staticStyle:{"margin-right":"5px"},attrs:{id:"edit",type:"button"},on:{click:function(e){return t.editTask(n)}}},[e.editing?t._e():r("img",{attrs:{src:"https://res.cloudinary.com/nishantwrp/image/upload/v1587486663/CSOC/edit.png",width:"18px",height:"20px",alt:"Edit"}})]),t._v(" "),e.editing?t._e():r("button",{class:["bg-transparent hover:bg-red-500 hover:text-white border border-red-500 hover:border-transparent rounded px-2 py-2"],attrs:{type:"button"},on:{click:function(r){return t.deleteTask(n,e.id)}}},[e.editing?t._e():r("img",{attrs:{src:"https://res.cloudinary.com/nishantwrp/image/upload/v1587486661/CSOC/delete.svg",width:"18px",height:"22px",alt:"Delete"}})])])])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AddTask:r(130).default})},54:function(t,e,r){"use strict";var n={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},o=(r(275),r(20)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[r("div",{staticClass:"error"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[r("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?r("p",{staticClass:"description"},[void 0===t.$route?r("a",{staticClass:"error-link",attrs:{href:"/"}}):r("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt")])])}],!1,null,null,null);e.a=component.exports}}]);