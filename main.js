import Vue from 'vue'
import App from './App'

//引入vuex
import store from './store'
Vue.prototype.$store = store

// 手机调试打开控制台
import vconsole from 'vconsole' // 引入vconsole
Vue.prototype.$vconsole = new vconsole()

// 路由
import router from './router'
import { RouterMount } from 'uni-simple-router'

// 引入uView库
import uView from 'uview-ui';
Vue.use(uView);


// 注册挂载 全局弹出框
import Message from "@/privateComponents/popUp.js";
Message();

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
// app.$mount()

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
