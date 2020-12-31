<template>
	<view class="page">
		<img :src="require('@/assert/img/login/logo.png')"/>
		<view class="body">
			<view v-if="loginType">
				<view class="list">
					<InputBody leftIcon="phone" ref="mobile" 
					 placeholder="请输入11位手机号"/>
				</view>
				<view class="list" style="display: flex; align-items: center;">
					<InputBody leftIcon="locked" :clear="false" style="flex: 1;" ref="yam" placeholder="请输入验证码"/>
					
					<view class="yzm" :style="{color: yzmType ? '#999' : '#FF8A0D', borderColor: yzmType ? '#999' : '#FF8A0D'}" @click="yzmFn">
						{{yzmType ? `重新发送( ${countdown}s )` : '获取验证码'}}
					</view>
				</view>
			</view>
			
			<view v-else>
				<view class="list">
					<InputBody leftIcon="phone" ref="account" placeholder="请输入账号"/>
				</view>
				<view class="list" style="display: flex; align-items: center;">
					<InputBody style="flex: 1;" :clear="false" :password="passwoedShow" leftIcon="locked" ref="passwoed" placeholder="请输入密码"/>
					<uni-icons :type="pasIco" size="26" @click="pasTypeFn"/>
				</view>
			</view>
			<button type="primary" @click="loginFn">登 录</button>
			
			<view class="auxiliary">
				<view @click="loginType = !loginType">{{loginType ? '账号密码登陆' : '验证码登陆'}}</view>
				<view class="division">|</view>
				<view @click="setPasswordFn">忘记密码</view>
			</view>
			<view class="auxiliary register">
				<view></view>
				<view @click="registerFn">暂无账号，前往注册</view>
			</view>
			
		</view>
		
		 
	</view>
</template>

<script>
	import InputBody from './input.vue';
	import { mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers } from 'vuex'
	// //使用createNamespacedHelpers 需要在模块中添加namespaced:true属性，其中参数的js文件导入时的模块名
	const userVuex = createNamespacedHelpers("user")
	export default {
		data() {
			return {
				loginType: false,
				yzmType: false,
				countdown: 60,
				pasIco: 'eye',
				passwoedShow: true,
			};
		},
		components: {
			InputBody
		},
		methods: {
			...userVuex.mapMutations(['chang_user_token', 'chang_user_userInfo']),
			setPasswordFn(){
				this.$Router.push({
					path: '/pages/setPassword/setPassword'
				})
			},
			registerFn(){
				this.$Router.push({
					path: '/pages/register/register'
				})
				// this.$messageRef.open({
				// 	type: 'error',
				// 	title: '提示',
				// 	message: 'aadas',
				// })
			},
			pasTypeFn(){
				if(this.passwoedShow){
					this.pasIco = "eye-slash"
				} else {
					this.pasIco = "eye"
				}
				this.passwoedShow = !this.passwoedShow;
			},
			
			yzmFn(){
				const mobile = this.$refs.mobile.inValue;
				if(!this.yzmType){
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
			
			loginFn(){
				if(this.loginType){
					const mobile = this.$refs.mobile.inValue;
					const yam = this.$refs.yam.inValue;
					if(!mobile){
						this.errPopouFn('请填写手机号码');
						return false; 
					}
					if(!(/^1[3456789]\d{9}$/.test(mobile))){
						this.errPopouFn('请填写正确的手机号码');
						return false; 
					}
					if(!yam){
						this.errPopouFn('请填写验证码');
						return false; 
					}
				} else {
					const account = this.$refs.account.inValue;
					const passwoed = this.$refs.passwoed.inValue;
					if(!account){
						this.errPopouFn('请填写账号信息');
						return false; 
					}
					if(!passwoed){
						this.errPopouFn('请填写密码');
						return false; 
					}
				}
				this.chang_user_userInfo({
					userInfo: {
						id: 123,
						name: 'zhangsan'
					}
				})
				this.chang_user_token({
					token: 'token'
				})
				this.$Router.push({
					path: '/pages/home/home'
				})
			},
			errPopouFn(content){
				this.$popupRef.open({
					type: 'error',
					popupType: 'dialog',
					title: '提示',
					content: content,
				})
			}
		}
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
			margin: 50rpx 100rpx;
			.list{
				border-bottom: 1rpx solid #cecece;
				margin-bottom: 40rpx;
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
		justify-content: center;
		padding: 5rpx 20rpx;
		font-size: 30rpx;
		color: rgba(244, 106, 33, 1);
		&.register{
			color: #999
		}
		.division{
			margin: 0 20rpx;
			
		}
	}
</style>
