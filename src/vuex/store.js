import Vue from "vue"
import "babel-polyfill"
import Vuex from "vuex"

import user from "./modules/user.js"
import auth from "./modules/auth.js"
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		auth
	}
})