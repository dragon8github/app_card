<template>
	<div class="mui-content">
		<div class="mui-navbar">
			<div class="mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>
				</button>
				<h1 class="mui-center mui-title">我的银行卡</h1>
			</div>
		</div>   
		
		<div class="mui-content">
			<div class="_button_div">
				<div class="_btn_flex">
						<div class="_add">+</div>
						<div class="_bank">添加银行卡 </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="css" scoped>

		.mui-content,body{background: #2d3132;font-family: "微软雅黑";height: 100%;}
		.mui-bar-nav{box-shadow: none;}
		div.mui-content{margin-top:10px;margin-bottom:0;padding:15px 0px;}
		
		._button_div{width: 80%;margin: 0 auto;}
		._button_div:hover{cursor: pointer;}
		._btn_flex{display: flex;justify-content:center;align-items: center; background: transparent;width: 100%;height: 43px;font-size:30px;border:2px solid #545454;border-radius: 5px;margin-top: 20px;color:#8f8f8f}
		._add{background: transparent;border:1px solid #919191;border-radius:100%;width:26px;height: 26px;text-align: center;}
		._bank{margin-left:15px;font-size:17px;}
</style>