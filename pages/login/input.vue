<template>
	<view class="inputBody flexBeCenter">
		<uni-icons :type="leftIcon" :color="iconColor" :size="size"/>
		<input class="uni-input" :password="password" v-model="inValue" :placeholder="placeholder"/>
		<uni-icons type="clear" :color="iconColor" :size="size" v-if="clear && inValue" @click="inValue = '' "></uni-icons>
	</view>
</template>

<script>
	export default {
		name: 'InputBody',
		props: {
			leftIcon: {
				type: String,
				default: 'person'
			},
			value: {
				type: String,
				default: ''
			},
			clear: {
				type: Boolean,
				default: true
			},
			
			size: {
				type: String,
				default: '22'
			},
			iconColor: {
				type: String,
				default: '#999'
			},
			placeholder: {
				type: String,
				default: ''
			},
			password: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				inValue: '',
				isPassword: false,
			};
		},
		watch: {
			password: {
				handler(newVal){
					this.isPassword = newVal;
				},
				immediate: true
			},
			
		},
		
		methods: {
			change(e){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.inputBody{
		padding: 20rpx;
		text-align: left;
		.uni-input{
			flex: 1;
			margin: 0 10rpx;
		}
	}
</style>
