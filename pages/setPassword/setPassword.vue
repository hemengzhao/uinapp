<template>
	<view class="page">
		<img :src="require('@/assert/img/login/logo.png')"/>
		<view class="body">
			<view v-show="!next">
				<view class="list">
					<InputBody ref="mobile" leftIcon="phone" placeholder="请输入11位手机号"/>
				</view>
				<view class="list" style="display: flex; align-items: center;">
					<InputBody ref="yzm" leftIcon="locked" style="flex: 1;" placeholder="请输入验证码"/>
					<view class="yzm" :style="{color: yzmType ? '#999' : '#FF8A0D'}" @click="yzmFn">
						{{yzmType ? `重新发送(${countdown}s)` : '获取验证码'}}
					</view>
				</view>
			</view>
			<view v-show="next">
				<view class="list">
					<InputBody ref="password" leftIcon="locked" :password="true" placeholder="请输入密码"/>
				</view>
				<view class="list">
					<InputBody ref="confirmPassword" leftIcon="locked" :password="true" placeholder="请确认密码"/>
				</view>
			</view>
			<view class="auxiliary">
				<view></view>
				<view @click="setPasswordFn">已有账号，前往登陆</view>
			</view>
			
			<button type="primary" @click="nextFn">{{next ? '完成' : '下一步'}}</button>
			
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
				next: false,
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
				
				if(!this.yzmType){
					const mobile = this.$refs.mobile.inValue;
					if(!mobile){
						this.errPopouFn('请填写手机号码');
						return false; 
					}
					if(!(/^1[3456789]\d{9}$/.test(mobile))){
						this.errPopouFn('请填写正确的手机号码');
						return false; 
					}
				
					this.yzmType = true;
					this.countdownfn = setInterval(() => {
						this.countdown--;
						if(this.countdown <= 0){
							clearInterval(this.countdownfn);
							this.yzmType = false;
							this.countdown = 60;
						}
					}, 1000);
				
				}
			},
			nextFn(){
				if(this.next){
					const password = this.$refs.password.inValue;
					const confirmPassword = this.$refs.confirmPassword.inValue;
					if(!password){
						this.errPopouFn('请输入新密码');
						return false; 
					}
					if(!confirmPassword){
						this.errPopouFn('请确认新密码');
						return false; 
					}
					if(password != confirmPassword){
						this.errPopouFn('两次密码输入不一致！');
						return false; 
					}
					this.$popupRef.open({
						type: 'error',
						popupType: 'dialog',
						title: '提示',
						content: '修改成功，是否前往登陆页面？',
					}, (dome) => {
						dome();
						this.$Router.push({
							path: '/pages/login/login'
						})
					})
				} else {
					const mobile = this.$refs.mobile.inValue;
					const yzm = this.$refs.yzm.inValue;
					if(!mobile){
						this.errPopouFn('请填写手机号码');
						return false; 
					}
					if(!(/^1[3456789]\d{9}$/.test(mobile))){
						this.errPopouFn('请填写正确的手机号码');
						return false; 
					}
					if(!yzm){
						this.errPopouFn('请填写验证码');
						return false; 
					}
					this.next = !this.next;
				}
			},
			errPopouFn(content){
				this.$popupRef.open({
					type: 'error',
					popupType: 'dialog',
					title: '提示',
					content: content,
				})
			}
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
				margin-bottom: 20rpx;
					
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
