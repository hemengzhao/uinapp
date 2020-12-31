<template>
	<view class="nav">
		 <uni-nav-bar class="priNavBar" 
			:left-icon="leftIcon" 
			 :color="color" 
			 :left-text="leftText"
			 :right-text="rightText"
			 :background-color="bgColor" 
			 :right-icon="rightIcon" 
			 :title="title"
			 
			 @clickLeft="clickLeft"
			 @clickRight="clickRight"
			 >
			 
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	export default {
		
		name: 'PriNavBar',
		props: {
			title: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#fff'
			},
			bgColor: {
				type: String,
				default: '#FF9D08'
			},
			leftIcon: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: ''
			},
			rightText: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: 'back'
			},
			leftText: {
				type: String,
				default: ''
			}
			
		},
		data() {
			return {
				
			}
		},
		components: {
			uniNavBar
		},
		methods: {
			clickLeft(){
				
				this.$emit("clickLeft");
			},
			clickRight(){
				this.$emit("clickRight");
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav{
		background-color: #FF9D08;
		padding-top: 20px;
		position: fixed;
		top: 0px;
		z-index: 99;
		width: 100%;
	}
	.priNavBar{
		width: 100%;
		background: rgba(0, 0, 0, 0);
		.uni-navbar--border[data-v-4afea59e]{
			background: rgba(0, 0, 0, 0) !important;
		}
		.uni-navbar__header[data-v-4afea59e]{
			background: rgba(0, 0, 0, 0) !important;
		}
		.uni-navbar__content[data-v-4afea59e]{
			background: rgba(0, 0, 0, 0) !important;
		}
		.uni-navbar__content[data-v-4afea59e]{
			background: rgba(0, 0, 0, 0) !important;
		}
	}
</style>
<style>
	.status_bar {
	      height: var(--status-bar-height);
		  
	      width: 100%;
	  }
</style>