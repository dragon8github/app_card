<template>
	<div>
			<div class="mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center">
				<button type="button" v-show = "_left" class="_leftIco mui-left  mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<router-link :to="backPath" class="mui-icon" :class="_lefticon">
						
					</router-link>
				</button>
				<h1 class="mui-center mui-title _title" v-text="_title">标题 </h1>
				<a class="_rightIco mui-icon mui-pull-right"  v-show = "_right" :class="_righticon"></a>
			</div>
	</div>  
</template> 

<script>
	import { mapGetters  } from 'vuex'　　
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
		},
		computed: {
		    ...mapGetters([
	          'backPath',  //之后就可以在template中使用了如：:class="{'_effect--50':decline}"  或者script中如 console.log(this.decline);
		    ])
		}
	}
</script>

<style lang="css" scoped>
	
	div.mui-navbar-inner.mui-bar.mui-bar-nav.mui-navbar-center {
		background: #37363b;		
	}
	.mui-pull-right{color:#fff;}
</style>