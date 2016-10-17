import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [

	{path:'/index',redirect: '/'},	// 重定向
	{path:'/',component:require('./views/index')},
	{path:'/order',component:require('./views/order'),
		children:[
			{path:':id',component:require('./views/orderDetails')}
		]	
	},			
	{path:'/card',component:require('./views/card')},
	{path:'/add',component:require('./views/add')},
	{path:'/form',component:require('./views/form')},
	{path:'/repay',component:require('./views/repay')},
	{path:'/protocol',component:require('./views/protocol')}
]


/* 实例化路由 */
const router = new VueRouter({
	routes : map
})

router.afterEach((to, from) => {
	console.log(to, from)
})


export default router;