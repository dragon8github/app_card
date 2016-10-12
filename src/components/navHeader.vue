<template>
	<div class="mui-navbar">
			<div class="mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center">
				<button type="button" v-show = "_left" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon" :class="_lefticon"></span>
				</button>
				<h1 class="mui-center mui-title" v-text="_title">标题</h1>
				<a class="mui-icon mui-pull-right"  v-show = "_right" :class="_righticon"></a>
			</div>
	</div>  
</template>

<script>
	export default {
		props: {
			//标题
			_title:{type:String,default: '标题'},
			//是否显示左边的图标(默认开启)
			_left:{type:Boolean,default:true},
			//是否显示右边的图标(默认关闭)
			_right:{type:Boolean,default:false},
			//左边的图标（只能是mui内置的）
			_lefticon:{type:String,default:"mui-icon-left-nav"},
			//右边的图标
			_righticon:{type:String,default:"mui-icon-plusempty"}					
		}
	}
</script>

<style lang="css" scoped>
	
	div.mui-navbar-inner.mui-bar.mui-bar-nav.mui-navbar-center {
		background: #37363b;		
	}
	.mui-pull-right{color:#fff;}
</style>