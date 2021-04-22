import Vue from 'vue'
import Router from 'vue-router'

// 首页
import index from '@/views/index'

Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',//hash模式可改为history 模式 需要配置nginx
  routes: [
    {
      path: '/',
      component: index,
      meta: {
        title: '主页',
        requireAuth: false
      }
    },
    {
      path: '/index',
      component: index,
      meta: {
        title: '主页',
        requireAuth: false
      },
    },
  ]
})
