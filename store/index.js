import Vue from 'vue'
import Vuex from 'vuex'

import user from "./modules/user.js"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
		user
	},
})
export default store
