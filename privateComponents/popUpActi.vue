<template>
	<view class="adsdsad">
		<uni-popup ref="message" type="message">
			<uni-popup-message
				:type="type" 
				:message="message" 
				:duration="duration">
			</uni-popup-message>
		</uni-popup>
		
		<uni-popup ref="popup" :maskClick="maskClick"  type="dialog">
		    <uni-popup-dialog
		    	:type="type" 
		    	:mode="mode" 
				:title="title" 
		    	:content="content"
		    	:value='value'
		    	:placeholder="placeholder"
		    	:before-close="beforeClose"
		    	@close="close" 
		    	@confirm="confirm"
		     ></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	/**
	 * 基于uni-ui 的 popup 组件，提供常用的弹层再次封装，
	 * 
	 */
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import Vue from "vue";
	export default {
		name: 'PrivatePopUp',
	    components: {
	        uniPopup,
	        uniPopupMessage,
	        uniPopupDialog
	    },
		data(){
			return {
				popupAnimation: true, //是否开启动画
				popupType: 'message', // message预置样式 ：消息提示  dialog预置样式 ：对话框    share预置样式 ：底部弹出分享示例
				maskClick: true, //蒙版点击是否关闭弹窗
				
				
				type: 'success',// 消息提示主题，可选值： success/warn/info/error
				message: '', // message 提示信息消息提示文字
				duration: 3000,// message 消息显示时间 设置为0 将不会关闭
				
				mode: 'base',
				title: '',
				content: '',
				value: '',
				placeholder: '',
				beforeClose: false,
				absee: '这是一伙个'
			}
		},
	
		mounted() {
			
			//  注册绑定全局变量方法顶部提示框
			 Vue.prototype.$messageRef = {
				 open: this.messageFn,
			 }
			 
			 //  注册绑定全局变量方法中间对话框
			Vue.prototype.$popupRef = {
				 open: this.openFn,
			}
		},
		methods: {
			
			messageFn(data){
				this.type = data.type ||  'success';
				this.message = data.message ||  '';
				this.duration = data.duration ||  2000;
				this.$refs.message.open();
			},
			
			/**
			 * 打开弹出框
			 * **/
			openFn(data, _close){
			
				// 防止注册上一次的方法
				Vue.prototype.$_close = _close || null;

				this.popupAnimation = data.popupAnimation == undefined ? true : data.popupAnimation;
				
				this.maskClick = data.maskClick == undefined ? true : data.maskClick;
				this.type = data.type ||  'success';
				this.mode = data.mode ||  'base';
				this.title = data.title ||  '';
				this.content = data.content ||  '';
				this.value = data.value ||  '';
				this.placeholder = data.placeholder ||  '';
				
				this.$refs.popup.open();
				
			},
			/**
			 * 点击dialog取消按钮触发 
			 * 
			 * **/
			close(done){
				done();
			},
			/**
			 * 点击dialog确定按钮触发
			 * 
			 * **/
			confirm(done, value){
				if(this.$_close){
					this.$_close(done, value)
					return;
				}
				done();
			},
		}
	}
</script>

<style>
</style>
