export default {
	state: {
		// 权限集合
		authList: [],
	},
	mutations: {
		// 初始化权限状态
		initAuth(state) {
			let authList = localStorage.getItem('authList')
			if (authList) {
				authList = JSON.parse(authList)
				state.authList = authList
			}
		},
		// 设置权限
		setAuth(state, authList) {
			state.authList = authList
			// 持久化存储
			localStorage.setItem('authList', JSON.stringify(authList))
		},
		// 清除权限
		removeAuth(state) {
			state.authList = []
			localStorage.removeItem('authList')
		}
	}
}