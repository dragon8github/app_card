/* 套路0： 加载项目需要的全局css和js */
require('css/mui.min.css') 
require('ico')
require('css/common.css')



/* 套路1：引入vue相关  */
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueTap from 'v-tap';  //支持手机端和Pc端的点击事件
import fastclick from 'fastclick'
import zepto from 'webpack-zepto' 
import sync from 'vuex-router-sync'
import store from './vuex/store'
import Vuex from 'vuex'



/* 套路2：使用第三方  */
Vue.use(VueRouter)
Vue.use(vueTap)


/* 套路3： 配置路由规则 */
const map = [
	{path:'/',component:require('./views/Hello')},
	{path:'/order',component:require('./views/order')},
	{path:'/order/:id',component:require('./views/orderDetails')},
	{path:'/card',component:require('./views/card')},
	{path:'/add',component:require('./views/add')},
	{path:'/form',component:require('./views/form')},
	{path:'/repay',component:require('./views/repay')},
	{path:'/protocol',component:require('./views/protocol')}
]


/* 套路4：实例化路由 */
const router = new VueRouter({
	routes : map
})

router.afterEach((to, from) => {
	//console.log(router)
})

/* 套路5 加入全局变量 */
window.$ = zepto   					   //zepto
window.mui = require('js/mui.min.js')  //UI框架的核心js
window.router = router;				   //路由文件
fastclick.attach(document.body) // 这个插件特别常用，解决手机端 click点击延迟


// sync(store,router)


/* 套路6：启动Vue以及路由 */
const app = new Vue({
	router
}).$mount('#app')

