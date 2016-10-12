<template>
	<div>	
		<nav-header :_title="mytitle" :_right="myright"></nav-header>
		
		<div class="mui-content _mycards">
			<div class="_card1 _background_1">
				<div class="_card1_background"><i class="icon iconfont _card1_background_font">&#xe606;</i></div>
				<div class="_card1_main">
					<div class="_card1_top">
						<div class="_card1_top_left">
							<i class="icon iconfont _card1_top_left_font">&#xe606;</i>
						</div>						
						<div  class="_card1_top_center">
							<span>中国工商银行</h4>
							<h5 class="_h5">信用卡</h5>
						</div>						
						<div class="_card1_top_right">
							支持快捷支付
						</div>
					</div>
					<h3 class="_card1_bottom"><span class="__card1_bottom_shenglue">**** **** ****</span> 5899</h3>
				</div>
			</div>
			
			<div class="_card1 _background_2">
				<div class="_card1_background"><i class="icon iconfont _card1_background_font">&#xe606;</i></div>
				<div class="_card1_main">
					<div class="_card1_top">
						<div class="_card1_top_left">
							<i class="icon iconfont _card1_top_left_font">&#xe606;</i>
						</div>						
						<div  class="_card1_top_center">
							<span>中国工商银行</h4>
							<h5 class="_h5">信用卡</h5>
						</div>						
						<div class="_card1_top_right">
							支持快捷支付
						</div>
					</div>
					<h3 class="_card1_bottom"><span class="__card1_bottom_shenglue">**** **** ****</span> 5899</h3>
				</div>
			</div>
			
			<div class="_card1 _background_3">
				<div class="_card1_background"><i class="icon iconfont _card1_background_font">&#xe606;</i></div>
				<div class="_card1_main">
					<div class="_card1_top">
						<div class="_card1_top_left">
							<i class="icon iconfont _card1_top_left_font">&#xe606;</i>
						</div>						
						<div  class="_card1_top_center">
							<span>中国工商银行</h4>
							<h5 class="_h5">信用卡</h5>
						</div>						
						<div class="_card1_top_right">
							支持快捷支付
						</div>
					</div>
					<h3 class="_card1_bottom"><span class="__card1_bottom_shenglue">**** **** ****</span> 5899</h3>
				</div>
			</div>
			
			<div class="_card1 _background_4">
				<div class="_card1_background"><i class="icon iconfont _card1_background_font">&#xe606;</i></div>
				<div class="_card1_main">
					<div class="_card1_top">
						<div class="_card1_top_left">
							<i class="icon iconfont _card1_top_left_font">&#xe606;</i>
						</div>						
						<div  class="_card1_top_center">
							<span>中国工商银行</h4>
							<h5 class="_h5">信用卡</h5>
						</div>						
						<div class="_card1_top_right">
							支持快捷支付
						</div>
					</div>
					<h3 class="_card1_bottom"><span class="__card1_bottom_shenglue">**** **** ****</span> 5899</h3>
				</div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
	import navHeader from 'components/navHeader'

	export default {
		data () {
			return {
				mytitle : "我的银行卡",
				myright : true
			}
		},
		components: {
			navHeader
		}
	}
</script>


<style scoped>		
		html,body,.mui-content{background: #2d3132;font-family: "微软雅黑";overflow-x: hidden;}
		.mui-bar-nav{box-shadow: none;}
		div.mui-content{    margin-top: 44px;margin-bottom:0;padding:10px 0px;}
		
		#_add{color: #fff;font-weight: bolder;font-size:30px;} 
		._mycards{display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;color:#fff}
		._card1{margin:20px;border-radius:5px;position:relative;padding:20px 20px 20px;}
		._card1_background{position: absolute;right:-35px;top:65px;z-index: 1;}
		._card1_background_font{font-size:130px;color:rgba(240, 240, 240,.25);}
		._card1_main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;z-index: 2;} 
		._card1_top{display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin-bottom:20px;}
		._card1_top_left{width:20%;max-width:80px;min-width: 50px;text-align: left;}
		._card1_top_center{width:50%;}
		._card1_bottom{text-align: right;}
		._h5{color: #fff;}
		._card1_top_left_font{font-size:44px;}
		._card1_top_right{-ms-flex-item-align: start;align-self: flex-start;font-size:14px;-webkit-box-flex: 1;-ms-flex: auto;flex: auto;text-align: right;}
		.__card1_bottom_shenglue{position: relative;top:4px;}
		
		._background_1{background: rgba(8,154,144,.6);}
		._background_2{background: rgba(199, 68, 68,.6);}
		._background_3{background: rgba(55, 90, 171,.6);}
		._background_4{background: rgba(174, 221, 107,.6);}
		
	</style>