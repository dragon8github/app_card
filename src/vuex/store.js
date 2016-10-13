/* 套路1：引入vue相关 */
import Vue from 'vue'
import Vuex from 'vuex'

/* 使用vuex */
Vue.use(Vuex)

/* 导入state和mutations */
import base from './modules/base'

/* Store注意大写 */
export default new Vuex.Store({
	modules: {
		base
	},
	getters:require('./getters'),
	actions:require('./actions')  
})
