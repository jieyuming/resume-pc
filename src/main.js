// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引用自定义方法
import './utils/directive'
import "babel-polyfill"
import Vuex from 'vuex';
// 引入整个ElementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// 按需加载 ElementUI
import './utils/elementUi'
// 引入icon
import './assets/icon/iconfont.css';
import less from 'less'
import App from './App'
import router from './router'
// 引入状态管理
import store from './vuex/store'
// 引入axios
import axios from 'axios'
// 复制到剪切板
import VueClipboard from 'vue-clipboard2'
import VueBus from 'vue-bus';
// 自定义主题颜色
import '../theme/index.css'

import api from "./api/index"
Vue.prototype.$api = api //方便组件使用 this.$api 读取所有api

Vue.use(VueBus);
import moment from 'moment'//导入文件
Vue.prototype.$moment = moment;//赋值使用
moment.locale('zh-cn');//需要汉化


Vue.use(VueClipboard);
Vue.prototype.$axios = axios


Vue.use(Vuex)
Vue.use(less)

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  console.error(err)
  console.error(info)
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }
  // if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
  //   if (store.state.user.loginStatus) {
  //     next();
  //   } else {
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   }
  // } else {
  //   next()
  // }
  next()
})

