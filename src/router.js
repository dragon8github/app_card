import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [
	// 重定向
	{path:'/index',redirect: '/'},
	// 路由根路径
	{path:'/',component:require('./views/index'),
		// 定义子路由
		children:[
			{path:'/order',component:require('./views/order')},			
			{path:'/card',component:require('./views/card')},
			{path:'/add',component:require('./views/add')},
			{path:'/form',component:require('./views/form')},
			{path:'/repay',component:require('./views/repay')},
			{path:'/protocol',component:require('./views/protocol')}
		]
	},
	// 正常路由
	{path:'/order/:id',component:require('./views/orderDetails')}
]


/* 实例化路由 */
const router = new VueRouter({
	routes : map
})

router.afterEach((to, from) => {
	//console.log(to, from)
})


export default router;