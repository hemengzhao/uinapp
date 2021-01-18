// router/index.js
import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

import store from '@/store';

Vue.use(Router)
//初始化
const router = new Router({
    routes: [...modules]//路由表
});

// 路由白名单
const whiteList = ['/pages/login/login', '/pages/404/404', '/pages/register/register', '/pages/setPassword/setPassword'];

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next();
	return
		if(whiteList.indexOf(to.path) > -1){
			next()
		} else if(store.getters['user/get_token']){
			if(store.getters['user/userId']){
				next()
			} else {
				store.dispatch('user/actions_user_userInfo').then(data => {
					next();
				}).catch(err => {
					next({path: '/pages/login/login'})
				});
			}
		} else {
			next({path: '/pages/login/login'})
		}
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router;
