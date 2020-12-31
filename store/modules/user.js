
import utilsServices from "@/serverApi/utilsServices.js";

const state = {
	userInfo: {},
	userId: 0,
	token: uni.getStorageSync('uinappAuthorization'),//token  uinappAuthorization key值可以自己更换
}
const getters = {
	get_userInfo: state => {
		return state.userInfo
	},
	get_token: state => {
		return state.token
	},
	get_userId: state => {
		return state.userId
	}

}

const mutations = {
	chang_user_userInfo(state, payload){
		state.userInfo = payload.userInfo;
		state.userId = payload.userInfo && payload.userInfo.id;
	},
	chang_user_token(state, payload){
		state.token = payload.token;
	},
}

const actions = {
	actions_user_userInfo({commit}){
		// 这里的 Promise  reject方法 还是有一点问题的  但是不影响使用
		return new Promise((resolve, reject) => {
			utilsServices.userIfon(res => {
				commit('chang_user_userInfo', {
					userInfo: res.data.data
				});
				resolve(res);
			}, error => {
			// 暂时调试都返回成功
			  // reject(error);
			  
			  resolve('暂时调试都返回成功');
			});
		})
	},
}

export default {
  namespaced: true, //带命名空间
  state,
  mutations,
  actions,
  getters
}
