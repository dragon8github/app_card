<template>
	<div class="container_inner">
		<header class="app-header">
			<nav-header :_title="mytitle" ></nav-header> 
		</header>
		<div class="mui-content _content">
				<div id='login-form' class="mui-input-group">
					<div class="mui-input-row ">
						<i class="icon iconfont" id="yonghu">&#xe602;</i>
						<a class="mui-navigate-right"></a>
						<label>持卡人</label>
						<input id='account' type="text" class="mui-input-clear mui-input" placeholder="信用卡持卡人姓名">
					</div>
					<div class="mui-input-row">
						<label>还款卡号</label>
						<input id='password' type="password" class="mui-input-clear mui-input" placeholder="还款信用卡卡号">
					</div>
					<div class="mui-input-row">
						<label>还款金额</label>
						<input id='password' type="password" class="mui-input-clear mui-input" placeholder="单笔50-5000元">
					</div>
				</div>
					
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell">
							<a href="#notifications" class="mui-navigate-right"><label for="">开户行</label><span class="placeholder">请选择信用卡开户行</span></a>
						</li>
					</ul>
					
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell">
							<a href="#notifications" class="mui-navigate-right"><label for="">开户地</label><span class="placeholder">请选择信用卡开户地</span></a>
						</li>
					</ul>
					
					<h5>到账通知</h5>
					
					<ul class="mui-table-view mui-table-view-chevron">						
						<div class="mui-input-row">
							<i class="icon iconfont" id="tongxunlu">&#xe601;</i>
							<a class="mui-navigate-right"></a>
							<label>手机号码通知</label>
							<input id='password' type="password" class="mui-input-clear mui-input" placeholder="短信通知手机号码">
						</div>
					</ul>
					
					<div id="checkbox_div">
						<input type="checkbox" name="" id="form_checkbox" value="" />
						<span id="checkbox_font">同意并确认<a>《易通百通信用卡还款服务协议》</a></span>
					</div>
					
					<div id="form_sublie">
						<a class="mui-btn mui-btn-success mybtnColor">
							下一步
						</a>
					</div>
		</div>
	</div>
</template>

<script>
 import navHeader from 'components/navHeader'
 export default {
 	data () {
 		return {
 			mytitle : "信用卡还款"
 		} 		
 	}
 	,components:{
 		navHeader
 	},
 	beforeRouteEnter (to, from, next) {
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不！能！获取组件实例 `this`
		// 因为当钩子执行前，组件实例还没被创建
		next( vm => {
		vm.$parent.route_pipe(true);
		});
	},
	beforeRouteLeave (to, from, next) {
		this.$parent.route_pipe(false);
		next();
	}
 }
</script>

<style lang="css" scoped>
		div.mui-content{padding-top: 20px;}
		.mui-table-view{margin-top:20px}
		h5{margin:15px 0px 0px 15px;}
		#checkbox_div{text-align: center;margin: 20px 0px;font-size:13px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}
		#form_checkbox{border-radius: 0;width:20px;height: 20px;border:1px solid #ccc;}
		#checkbox_font{padding-left:10px}
		#form_sublie{display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-ms-flex-line-pack: center;align-content: center;}
		#form_sublie a{min-width:264px;width:70%;max-width:300px;height:45px;color:#fff;font-size:20px;}
		.mybtnColor{background: #ffa684;}
		.mybtnColor:active{background: #f0571d;}
		::-webkit-input-placeholder{font-size:14px;}
		.placeholder{color:#a9a9a9;margin-left:30px;font-size:14px;}
		#tongxunlu{float:right;position:absolute;right:33px;top:10px;color:#537092;}
		#yonghu{font-size:29px;position:absolute;right:33px;top:10px;color:#537092}
</style>