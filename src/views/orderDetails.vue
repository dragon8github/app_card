<template>
	<div class="container_inner">
		<div class="_header">
			<div class="_header_ico">
				<i class="icon iconfont">&#xe607;</i>
			</div>
			<div class="_header_right">
				<h4>待支付</h4>
				<h1>￥6005.00</h1>
			</div>
		</div>
		
		<div class="_body">
			<div class="_body_top">
				<div class="_body_top_left"><img src="../assets/images/xykhk.png"/></div>
				<div class="_body_top_right">
					<p class="_body_top_right_p1">信用卡还款<span>（共1笔）</span></p>
					<p class="_body_top_right_p2">还款卡号：***4591（*建华）</p>
					<p class="_body_top_right_p3">还款金额：<span>￥6005.00</span></p>
					<p class="_body_top_right_p4">含手续费：￥5.00</p>
				</div>
			</div>
			<div class="_body_bottom">
					<div class="_body_bottom_right"></div>
					<div>
						<p>订单编号：1000082427569522</p>
						<p>下单时间：2016-03-03 12:15:27</p>
						<p>订单来源：APP</p>
					</div>
			</div>
		</div>
		
		<div class="_footer">
			<router-link to="/form" class="mui-btn mui-btn-warning">
					立即支付
			</router-link>
			<p class="_footer_p"><a href="javascript:;" @click="_cannelOrder">取消订单</a></p>
		</div>
		 <transition name="slide-fade">
		          <router-view  keep-alive></router-view>
		 </transition>  
	</div>
</template>

<script>
	export default {
		methods: {
			_cannelOrder () {
				 mui.confirm('MUI是个好框架，确认？', 'Hello MUI', ['否', '是'], function(e) 
			    {
			        if (e.index == 1) 
			        {
			            mui.toast('你刚确认MUI是个好框架');
			        } 
			        else 
			        {
			             mui.toast('MUI没有得到你的认可，继续加油');
			        }
			    })
			}
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

<style scoped>		
		.mui-btn-warning{background: #f0571d;width: 100%;height: 50px;font-size:21px;}


	
		._header{height: 100px;background: #566991;color:#fff;display: -webkit-box;display: -ms-flexbox;display: flex;}
		._header h1,._header h4{font-weight: normal;}
		._header_ico{width: 20%;max-width:80px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;text-align: center;}
		._header_right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}
		._body{background:#fff;margin-top:15px;margin-bottom:40px;padding:15px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;}
		._body_top{display: -webkit-box;display: -ms-flexbox;display: flex;padding-bottom: 5px;}
		._body_top_left{width:25%;max-width: 100px;text-align: center;}
		._body_bottom_right{width: 25%;max-width: 100px;}
		._body_top_right{width: 75%;}
		._body_top_right_p1{color:#000;font-size:16px;font-weight: bold;}
		._body_bottom{display: -webkit-box;display: -ms-flexbox;display: flex;border-top:1px solid #f8f8f8;padding-top:10px;}
		._footer{width: 80%;margin: 0 auto;}
		._footer_p{text-align: right;margin-top: 15px;}		
	</style>