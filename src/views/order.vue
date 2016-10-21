<template>
	<div>
		<div class="container " >
			<header class="app-header">
				<nav-header :_title="mytitle" :_left="myleft" class="_effect" :class="{'_effect--50':decline}" ></nav-header>
			</header>
			 
			<div class="mui-content _effect" :class="{'_effect--30':decline}">
				<div id="slider" class="mui-slider">

					<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
						<a id="all_order" class="mui-control-item" v-tap="{methods:change_title}">
							全部 <span class="arrow-down" ></span>
						</a> 
						<a class="mui-control-item" v-tap="{methods:change_title}">
							待付款
						</a>
						<a class="mui-control-item" v-tap="{methods:change_title}">
							待发货
						</a>
						<a class="mui-control-item" v-tap="{methods:change_title}">
							待收货
						</a>
					</div>
					
					<!-- 拖拉条 -->
					<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-3"></div>
					
					<div class="mui-slider-group">
						<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">	
							<div id="scroll1" class="mui-scroll-wrapper">
								<div class="mui-scroll">

									<ul class="mui-table-view" v-show="all || payment">									
										<li class="mui-table-view-cell">										
											<div>																
												<div class="_img_div"><img src="../assets/images/xykhk.png" /></div>
												<div class="_center_div">
													<p class="_center_div_p1">信用卡还款</p>
													<p>还款账号：***4591</p>
													<p>03-03 12:15</p>
												</div>									
												
												<div class="_right_div">												
													<p class="_right_div_p1">等待还款</p>
													<h4>￥32.80</h4>
													<p>含手续费<span class="_right_div_p3_span">￥2</span></p>
												</div>
											</div>												
											<div class="_link"></div>
											<div class="_bottom_div">											
												<span class="_bottom_div_font">共 1 件商品</span>
												
												<router-link to="/form" class="mui-btn mui-btn-danger _bottom_div_btn">支付</router-link>
												
											</div>
										</li>									
									</ul>		

									<ul class="mui-table-view">									
										<li class="mui-table-view-cell">										
											<div>																
												<div class="_img_div"><img src="../assets/images/sjcz.png" /></div>
												<div class="_center_div">
													<p class="_center_div_p1">手机充值</p>
													<p>15916875152</p>
													<p>03-03 12:15</p>
												</div>									
												
												<div class="_right_div">												
													<p class="_right_div_p1_2">已完成</p>
													<h4>50.00</h4>
													<p>含手续费<span class="_right_div_p3_span">￥2</span></p>
												</div>
											</div>												
											<div class="_link"></div>
											<div class="_bottom_div">											
												<span class="_bottom_div_font">共 1 件商品</span>
											</div>
										</li>									
									</ul>
									<ul class="mui-table-view">									
										<li class="mui-table-view-cell">										
											<div>																
												<div class="_img_div"><img src="../assets/images/fjp.png" /></div>
												<div class="_center_div">
													<p class="_center_div_p1">飞机票</p>
													<p>15916875152</p>
													<p>03-03 12:15</p>
												</div>									
												
												<div class="_right_div">												
													<p class="_right_div_p1_2">已完成</p>
													<h4>50.00</h4>
													<p>含手续费<span class="_right_div_p3_span">￥2</span></p>
												</div>
											</div>												
											<div class="_link"></div>
											<div class="_bottom_div">											
												<span class="_bottom_div_font">共 1 件商品</span>
											</div>
										</li>									
									</ul>
									<ul class="mui-table-view">									
										<li class="mui-table-view-cell">										
											<div>																
												<div class="_img_div"><img src="../assets/images/xykhk.png" /></div>
												<div class="_center_div">
													<p class="_center_div_p1">信用卡还款</p>
													<p>还款账号：***4591</p>
													<p>03-03 12:15</p>
												</div>									
												
												<div class="_right_div">												
													<p class="_right_div_p1">等待还款</p>
													<h4>￥32.80</h4>
													<p>含手续费<span class="_right_div_p3_span">￥2</span></p>
												</div>
											</div>												
											<div class="_link"></div>
											<div class="_bottom_div">											
												<span class="_bottom_div_font">共 1 件商品</span>
											</div>
										</li>									
									</ul>		
								</div>
							</div> 
						</div>	
					</div>
				</div>
			</div>
		</div>
		 <transition name="slide-fade"    v-on:before-enter="beforeEnter"
										  v-on:enter="enter"
										  v-on:leave="leave"
		  >
		          <router-view  keep-alive></router-view>
		 </transition>  
	</div>
	
</template>

<script>
 import navHeader from 'components/navHeader'
 import { mapActions } from 'vuex'

 export default {
 	data () {
 		return {
 			mytitle : "全部订单",
 			all : true,
 			payment: false,
 			Wait_delivery : false,
 			Wait_goods : false,
 			myleft: false,
 			decline:false
 		} 		
 	}, 
 	methods: {
 		change_title (para) { 	
 			var e = para.event;
 			var index = $(e.target).index();
 			var text = $(e.target).text();
 			if( !text.trim() ) return false;	 
 			$("#sliderProgressBar").css("left",25 * index + "%");
 			this.mytitle = text.trim() + "订单";
 		},
	    route_pipe (b) {
	    	this.decline = b;
	    },
		  
		beforeEnter: function (el) {
		     Velocity(el.querySelector("._content"),{translateX: "80%"},0);
		     Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},0);
		     Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:0},0);
		},
		enter: function (el, done) {
		    Velocity(el.querySelector("._content"),{translateX: "0%"},350,"ease");
		    Velocity(el.querySelector("._title"),{translateX: "0%",opacity:1},350,"ease");
			Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:1},100); 
			done();  //神坑，如果不加上这个的话，路由不会停止。一直保持在class-enter-active状态
		},
		leave: function (el, done) {
		  	 Velocity(el.querySelector("._content"),{translateX: "100%"},350,"ease");
		  	 Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},350,"ease");
		     Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:0},350,"ease");
		  	 setTimeout(()=> {
		  	 	done();  //神坑，如果不加上这个的话，路由不会停止。一直保持在class-leave-active状态,并且不会消失
		  	 },200)
		}
 	},
 	components:{
 		navHeader
 	},
 	created () {
 		let self = this;
 	}

 }
</script>

<style scoped>
		#sliderProgressBar{transition: all .2s ease}
		.mui-scroll{background: #efeff4}
		.mui-scroll-wrapper{overflow: visible}
		.mui-slider{overflow: visible}
		div#sliderSegmentedControl{background: #fff;height:58px;line-height: 58px;}
		.mui-segmented-control .mui-control-item{line-height: 58px;}		
		.arrow-down{ width: 0;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #000;position: absolute;top:49%;margin-left:5px;}
		.mui-control-item{position: relative;}
		.mui-segmented-control.mui-segmented-control-inverted~.mui-slider-progress-bar{background: #cb6270;}
		.mui-table-view{margin-top:15px;}
		.mui-table-view-cell{padding: 11px 15px 0px 11px;}
		.mui-slider .mui-slider-group .mui-slider-item img{width:auto;}
		#slider{height: 100%;}
		.mui-table-view:last-child{margin-bottom:70px;}
		button a{color:#fff;}
		
		._img_div{width:25%;float:left;height:60px;text-align: center;max-width: 85px;}
		._img_div img{width:65px;height:61px;}
		._center_div{width:50%;float:left;height:60px;display:block;text-overflow:ellipsis; white-space:nowrap; overflow:hidden; }
		._center_div_p1{color:#000;font-weight: bold;}
		._right_div{width:25%;float:left;height:60px;text-align: right;padding-right: 5px;overflow-wrap: break-word;}
		._right_div_p1{color:#f06530;font-weight: bold;}
		._right_div_p1_2{color:#aaaaaa;font-weight: bold;}
		._right_div_p3_span{color:#000;}
		._link{clear: both;height: 20px;width: 100%;border-bottom: 1px solid #ebebeb;}
		._bottom_div{height: 40px;clear:both;position: relative;}
		._bottom_div_font{position:absolute;left:25%;top:7px;color:#8f8f94;font-size: 14px;}
		._bottom_div_btn{float:right;height:25px;font-size:12px;width:70px;line-height: 10px;background: #f0571d;position: absolute;right:15px;top:7px;}
</style>