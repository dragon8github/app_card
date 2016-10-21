/* 加载项目需要的全局css和js */
require('css/mui.min.css') 
require('ico')
require('css/common.css')


import Vue from 'vue'
import vueTap from 'v-tap'; 		 //支持手机端和Pc端的点击事件
import fastclick from 'fastclick'	 //解决手机端 click 点击延迟
import zepto from 'webpack-zepto' 	 //jquery、zepto
import store from './vuex/store'	 // vuex相关
import router from './router'		 //路由相关
import Velocity from 'velocity-animate'

Vue.use(vueTap)
fastclick.attach(document.body) 	   //解决手机端 click 点击延迟


const app = new Vue({
	router,
	store
}).$mount('#app')


window.$ = zepto   					   //zepto
window.mui = require('js/mui.min.js')  //UI框架的核心js
window.router = router;				   //路由文件
window.Velocity = Velocity;