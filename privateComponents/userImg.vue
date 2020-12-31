<template>
	<view class="userImg" :style="{'background': getRandomColor()}">
			{{name}}
	</view>
</template>

<script>
	export default {
		name: "userImg",
		props: {
			name: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		},
		
		methods: {
			getRandom(max, min){
				return Math.floor(Math.random() * (max - min + 1)) + min;
			},
			
			getRandomColor() {
				var c1 = this.getRandom(125, 255);
				var c2 = this.getRandom(50, 200);
				var c3 = this.getRandom(100, 200);
				return 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')'
			}
			 
		}
	}
</script>

<style lang="scss">
.userImg{
	width: 60rpx;
	height: 60rpx;
	border-radius: 50%;
	font-size: 24rpx;
	color: #fff;
	text-align: center;
	line-height: 60rpx;
}
</style>
