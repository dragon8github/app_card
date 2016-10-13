<template>
	
	<nav class="mui-bar mui-bar-tab">
			
			<a class="mui-tab-item mui-active">
				<router-link :class="abc" to="order">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">订单</span>
				</router-link>
			</a>
			
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
	</nav>
	
</template>

<style scoped>
	.mui-bar{
		
	}
</style>