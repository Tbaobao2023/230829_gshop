import Vue from 'vue'
import App from './App.vue'

// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
// 引入Vuex的store对象
import store from './store'

// 引入图标样式
import './common/icon/iconfont.css'

// 应用插件
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
