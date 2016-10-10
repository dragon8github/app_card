<template>
	<div>
		<div class="mui-navbar">
			<div class="mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>
				</button>
				<h1 class="mui-center mui-title">全部订单</h1>
			</div>
		</div>   
		
		<div class="mui-content">
				<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<a id="all_order" class="mui-control-item" href="#item1mobile">
						全部 <span class="arrow-down"></span>
					</a> 
					<a class="mui-control-item" href="#item2mobile">
						待付款
					</a>
					<a class="mui-control-item" href="#item3mobile">
						待发货
					</a>
					<a class="mui-control-item" href="#item3mobile">
						待收货
					</a>
				</div>
				
				<!-- 拖拉条 -->
				<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-3"></div>
				
				<div class="mui-slider-group">
					<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">	
						<div id="scroll1" class="mui-scroll-wrapper">
							<div class="mui-scroll">
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
											<button type="button" class="mui-btn mui-btn-danger _bottom_div_btn">
												支付
											</button>
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
	
</template>


<style scoped>
		.mui-scroll-wrapper{overflow: visible}
		.mui-slider{overflow: visible}
		div.mui-content{margin-top:44px;margin-bottom: 0px;}
		div#sliderSegmentedControl{background: #fff;height:58px;line-height: 58px;}
		.mui-segmented-control .mui-control-item{line-height: 58px;}		
		.arrow-down{ width: 0;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #000;position: absolute;top:49%;margin-left:5px;}
		.mui-control-item{position: relative;}
		.mui-segmented-control.mui-segmented-control-inverted~.mui-slider-progress-bar{background: #cb6270;}
		.mui-table-view{margin-top:15px;}
		.mui-table-view-cell{padding: 11px 15px 0px 11px;}
		.mui-slider .mui-slider-group .mui-slider-item img{width:auto;}
		#slider{height: 100%;}
		.mui-table-view:last-child{margin-bottom:120px;}
		
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