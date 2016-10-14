<template>
	<div>
		<nav-header :_title="mytitle"></nav-header>
		
		
		<div class="mui-content _repay">
				<div class="_username"><h3>李钊鸿</h3></div>
				<div class="_card"><i class="icon iconfont _card_font">&#xe606;</i> 工商银行 6222 0220 1000 3194 053</div>
				<div class="_money"><h2>￥136.00</h2></div>
				<div class="_maybe">预计2小时内到账</div>
				
				<div id="_white">
					<div>含手续费 :<span>￥3.00</span></div>
					<div>到账通知 :<span>15916875957</span></div>
					<div>开户城市 :<span>广东东莞</span></div>
				</div>
				
				<div id="_footer">
					<button type="button" class="mui-btn mui-btn-warning">
							立即付款
					</button>
				</div>
		</div>
	</div>
</template>

<script>
	import navHeader from 'components/navHeader'

	export default {
		data () {
			return {
				mytitle : "确认还款信息",
				myright : true
			}
		},
		components: {
			navHeader
		}
	}
</script>

<style lang="css" scoped>
		html,body{font-family: "微软雅黑";}
		.mui-btn-warning{background: #f0571d;width: 100%;height: 50px;font-size:21px;}
		
		
		._repay div{margin:10px auto 0px;}
		._repay{display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}
		#_footer{width: 80%;margin: 40px auto 0px;}
		#_white{margin-top:40px;background: #fff;text-align: left;width: 100%;padding: 10px 10px 15px 10px;}
		._card_font{font-size:16px;}
		#_white div{color:#9c9c9c;} 
		#_white div span{color:#000;font-size:20px;margin-left:10px;}
		._maybe{color:#e74840;font-weight: bold;}
		._card{color: #656565;}
</style>