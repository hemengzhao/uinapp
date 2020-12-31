<template>
	<view class="flexColumn empyt">
		<img :src="require('@/assert/img/404.png')"/>
		<text class="title">你暂无该模块功能权限，<br/>请联系管理员开通功能权限</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.empyt{
	height: 100%;
	justify-content: center;
	// background-color: #FFF;
	img{
		width: 730rpx;
		height: 366rpx;
	}
	.title{
		margin-top: 10%;
		font-size: 36rpx;
		color: #1E1E1E;
		text-align: center;
	}
}
</style>
