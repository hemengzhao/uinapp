<template>
	<view class="pageBody">
		<view class="header">
			<u-tabs-swiper active-color="rgba(255, 138, 13, 1)" bar-width="120" ref="uTabs" 
				:list="list" :current="current" @change="change" :is-scroll="false"
				 swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper class="aas" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item1, index) in [1,2,3]" :key="index">
				<scroll-view scroll-y style="height: 100%;,width: 100%;" 
					lower-threshold="50" @scrolltolower="lower">
					<view class="content">
						<view v-for="item in 12" @click="detailsFn" :key="item" class="back">
							{{item1}}--{{item}}
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<privateUpFileAll ref="upfile" :captureType='3' :imgFile='false' accept=".doc,.xlsx" @change="fileChange"/>
	</view>
</template>

<script>
	import axios from 'axios';
	// import UpFileAll from "@/privateComponents/upFile.vue";
	export default {
		data() {
			return {
				list: [{
					name: '未开始'
				}, {
					name: '进行中',
					count: 5
				}, {
					name: '已完成'
				}],
				current: 0,
				swiperCurrent: 0,
			};
		},
		components: {
			// UpFileAll
		},
		mounted() {
			  

		},
		methods: {
			
			change(index) {
				this.swiperCurrent = index;
			},
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			lower(e) {
				console.log('页面滚动到底部的事件',e)
			},
			
			detailsFn(){
				console.log('页面滚动到底部的事件',this.$refs.upfile)
				this.$refs.upfile.triggerClick();
				
				return
				this.$Router.push({
					path: '/pages/details/details'
				})
			},
			
			fileChange(e){
				console.log(e, 'fileChange');
			}
		},
		onPullDownRefresh(){
			console.log('一般用于下拉刷新');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom(){
			console.log('页面滚动到底部的事件');
		}
	}
</script>

<style lang="scss" scoped>
	.pageBody{
		background: #F0F0F0;
		padding-top: 80rpx;
		display: flex;
		flex-direction: column;
		.header{
			position: fixed;
			top: 44px;
			width: 100%;
		}
		.aas{
			flex: 1;
		}
		.content{
			padding: 25rpx;
			overflow: auto;
			.back{
				height: 300rpx;
				border-radius: 6rpx;
				background-color: #fff;
				margin-bottom: 25rpx;
			}
		}
	}
</style>
