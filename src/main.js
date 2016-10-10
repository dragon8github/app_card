/* 套路0： 加载项目需要的全局css和js */
require('css/mui.min.css') 
require('ico')
require('css/common.css')

window.mui = require('js/mui.min.js')



/* 套路1：引入vue相关  */
import Vue from 'vue'
import VueRouter from 'vue-router'



/* 套路2：使用第三方  */
Vue.use(VueRouter)


/* 套路3： 配置路由规则 */
const map = [
	{path:'/',component:require('./components/Hello')},
	{path:'/order',component:require('./components/order')},
	{path:'/orderDetails',component:require('./components/orderDetails')},
	{path:'/card',component:require('./components/card')},
	{path:'/add',component:require('./components/add')},
	{path:'/form',component:require('./components/form')},
	{path:'/repay',component:require('./components/repay')},
	{path:'/protocol',component:require('./components/protocol')}

]

/* 套路4：实例化路由 */
const router = new VueRouter({
	routes : map
})

window.router = router;

/* 套路4：启动Vue */
const app = new Vue({
	router
}).$mount('#app')

