import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [
	{path:'/index',redirect: '/'},	// 重定向
	{path:'/',component:require('./views/index')},
	{
		path:'/order',
		component:require('./views/order'),
		children:[
			{path:':id',component:require('./views/orderDetails'),children:[
				{path:'/form',component:require('./views/form')}
			]}
		]
	},			
	{path:'/card',component:require('./views/card')},
	{path:'/add',component:require('./views/add')},
	// {path:'/form',component:require('./views/form')},
	{path:'/repay',component:require('./views/repay')},
	{path:'/protocol',component:require('./views/protocol')}	
]


/* 实例化路由 */
const router = new VueRouter({
	routes : map
})



router.beforeEach((to, from, next) => {
	//console.log(to,from);
	next();
})


// 这个是用来动态获取和设置后退地址的
router.afterEach((to, from) => {
	
})





export default router;