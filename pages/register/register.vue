<template>
	<view class="page">
		<img :src="require('@/assert/img/login/logo.png')"/>
		<view class="body">
			<view>
				<view class="list">
					<InputBody leftIcon=" " placeholder="请输入用户名称"/>
				</view>
				<view class="list">
					<InputBody leftIcon=" " ref="mobile" placeholder="请输入11位手机号"/>
				</view>
				<view class="list" style="display: flex; align-items: center;">
					<InputBody leftIcon=" " style="flex: 1;" placeholder="请输入验证码"/>
					<view class="yzm" :style="{color: yzmType ? '#999' : '#FF8A0D'}" @click="yzmFn">
						{{yzmType ? `重新发送(${countdown}s)` : '获取验证码'}}
					</view>
				</view>
				<view class="list">
					<InputBody leftIcon=" " :password="true" placeholder="请输入密码"/>
				</view>
				<view class="list">
					<InputBody leftIcon=" " :password="true" placeholder="请确认密码"/>
				</view>
			</view>
			<view class="auxiliary">
				<view></view>
				<view @click="setPasswordFn">已有账号，前往登陆</view>
			</view>
			<button type="primary">注 册</button>
			
		</view>
		
		 
	</view>
</template>

<script>
	import InputBody from '../login/input.vue';
	
	export default {
		data() {
			return {
				yzmType: false,
				countdown: 60,
			};
		},
		components: {
			InputBody
		},
		methods: {
			setPasswordFn(){
				this.$Router.push({
					path: '/pages/login/login'
				})
			},
			yzmFn(){
				const mobile = this.$refs.mobile.inValue;
				
				if(!this.yzmType){
					// if(!mobile){
					// 	this.popupFn('warn', '提示', '请填写手机号码')
					// 	return false; 
					// }
					// if(!(/^1[3456789]\d{9}$/.test(mobile))){
					// 	this.popupFn('warn', '提示', '手机号码有误，请重填')
					// 	return false; 
					// }
				
					this.yzmType = true;
					this.countdownfn = setInterval(() => {
						this.countdown--;
						if(this.countdown <= 0){
							clearInterval(this.countdownfn);
							this.yzmType = false;
							this.countdown = 60;
						}
					}, 1000);
				
					// httpApi.sendMobileCode({
					// 	mobile: mobile
					// }, res => {
						
					// 	this.yzmType = true;
					// 	this.countdownfn = setInterval(() => {
					// 		this.countdown--;
					// 		if(this.countdown <= 0){
					// 			clearInterval(this.countdownfn);
					// 			this.yzmType = false;
					// 			this.countdown = 60;
					// 		}
					// 	}, 1000);
					// }, err => {
					// 	this.message = {
					// 		type: 'error',
					// 		message: err,
					// 		time: 2000
					// 	}
					// 	this.$refs.popupMessage.open();	
					// })
				}
			},
		},
		
	}
</script>

<style lang="scss" scoped>
	.page{
		text-align: center;
		padding-top: 20%;
		img{
			width: 140rpx;
			height: 280rpx;
			margin: 30rpx auto;
		}
		.body{
			margin: 50rpx 50rpx;
			.list{
				border-bottom: 1rpx solid #cecece;
				margin-bottom: 30rpx;
				.yzm{
					border: 2rpx solid #FF8A0D;
					border-radius: 30px;
					font-size: 24rpx;
					width: 200rpx;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					color: #FF8A0D;
				}
			}
			button{
				height: 46px;
				line-height: 46px;
				border-radius: 23px;
				margin-top: 50rpx;
				margin-bottom: 50rpx;
				background: linear-gradient(-87deg, #FFBA00, #FF7B11);
			}
		}
	}
	.auxiliary{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		font-size: 26rpx;
		color: #FF8A0D;
		&.register{
			color: #999
		}
	}
</style>
