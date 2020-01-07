// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/common.css'
import '../src/assets/css/index.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import BScroll from 'better-scroll'

// Vue.use(BScroll)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

// 导航守卫 可实现跳转前验证登录
router.beforeEach((to, from, next) => {
  let str = '<p>个人中心</p>'
  if (to.meta.title) {
    document.getElementById('top-logo-change').innerHTML = to.meta.title
    if (to.meta.title === str) {
      document.getElementById('top-nav-right').innerHTML = '<img src="/static/topnav/kf.png" alt="搜索">'
    } else {
      document.getElementById('top-nav-right').innerHTML = '<img src="/static/topnav/ss.png" alt="搜索">'
    }
    // document.title = to.meta.title
  }
  next()
})
