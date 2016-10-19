import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [
	{path:'/index',redirect: '/'},	// 重定向
	{path:'/',component:require('./views/index')},
	{
		path:'/order',
		component:require('./views/order'),
		children:[
			{path:'/form',component:require('./views/form')}
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
	mode: 'history',
	routes : map
})



router.beforeEach((to, from, next) => {
	//console.log(to,from);
	next();
})


// 这个是用来动态获取和设置后退地址的
router.afterEach((to, from) => {
	//获取来路(未使用)
    let fromPath = from.path || '/';
    //获取跳转页
    //let toPath = to.path;
    //获取上一层(有可能为空),这个是为将来区别四大界面的路由使用的
    //let backPath = toPath.slice(0, toPath.lastIndexOf('/'));
    //调用Vuex
    store.dispatch('set_back_path', fromPath);
})




export default router;