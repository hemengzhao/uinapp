<!-- 
 文件上传组件，解决uiapp无法上传非图片文件的问题
 
 本组件仅只有上传，做了大小，格式限制 默认2M以内的所有文件，
 可以直接在main.js里全局注册组件方法
 import PrivateUpFileAll from './privateComponents/upFile.vue';
 Vue.component('privateUpFileAll', PrivateUpFileAll)
 也可以单独引用
 
 
 captureType   1调取照相机，2调用摄像机  3调用录音  4拍照或图库 5 录像或图库  6录音或图库 
 这个功能只测试了安卓， 安卓3和6效果有差别 在不同的微信和浏览器中表现不一样 其中微信3和6效果一样
 ios录音不能使用 
 仅测试部分 建议谨慎使用，
 
 
 -->

<template>
	<view>
		<view ref="input" style="height: 0; overflow: hidden;" class="input">
		
		</view> 
	</view>
</template>

<script>
	export default {
		name: 'PrivateUpFileAll',
		props: {
			accept: { //以逗号分割的字符串，文件类型限制
				tyep: String,
				default: ''
			},
			size: { //单位M
				type: Number,
				default: 2
			},
			imgFile: {//是否只上传图片类型
				tyep: Boolean,
				default: false
			},
			captureType: { //1调取照相机，2调用摄像机  3调用录音，  
				tyep: Number,
				default: 0
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			var input = document.createElement('input')
				
				input.type = 'file'
				input.id = '_upfile'
				if(this.captureType == 1){
					input.accept="image/*"
					input.capture = "camera"
				} else if(this.captureType == 2){
					input.accept="video/*"
					input.capture = "camcorder"
				} else if(this.captureType == 3){
					input.accept="audio/*"
					input.capture = "microphone"
				}if(this.captureType == 4){
					input.accept="image/*"
				} else if(this.captureType == 5){
					input.accept="video/*"
				} else if(this.captureType == 6){
					input.accept="audio/*"
				}
				// input.mutiple = "mutiple"  多选不起作用
				console.log(input)
				
				input.onchange = (event) => {
					const file = event.target.files && event.target.files[0];
					if(file){
						this.fileUp(file);
					}
					
					// let data = new FormData();
					// data.append('fileName', event.target.files[0]);
					// data.append('appName', '123');
					// console.log(data, 'datadata')  
					// axios.post(`/meetingcloud/core/fileUpload`, data).then((res) => {
					// 	 console.log(res, 'resresres')  
					// }).catch((err) => {
					//    console.log(err, 'catchcatch errerr')  
					// });
				}  
				this.$refs.input.$el.appendChild(input)
		},
		methods: {
			fileUp(e){
				const fileName = e.name;
				const photoExt=fileName.substr(fileName.lastIndexOf(".")).toLowerCase();//获得文件后缀名
				// 大小限制  但是手机的相机的照片一般都会很大的
				if(this.size && e.size > 1024*1024*this.size){
					this.errPopouFn(`文件不能大于${this.size}M`);
					return
				}
				
				if(this.captureType){
					this.$emit('change', e);
					return
				}
				// 文件类型限制
				if(this.imgFile){
					if(/^imgage\//.test(e.type)){
						this.$emit('change', e);
					} else {
						this.errPopouFn('请选择图片格式文件');
					}
				} else if(this.accept){
					const type = this.accept.split(',');
					if(type.indexOf(photoExt) > -1){
						this.$emit('change', e);
					} else {
						this.errPopouFn('请选择正确的格式文件');
					}
				} else {
					this.$emit('change', e);
				}
				
			},
			triggerClick(){
				const input = this.$refs._upfile;
				document.querySelector("#_upfile").click();
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

<style>

</style>
