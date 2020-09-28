import Vue from 'vue'
import Dev from './serve.vue'
import router from './router/index.js'
Vue.config.productionTip = false
import lib from '../dist/mylib.common'
Vue.use(lib)
new Vue({
  render: (h) => h(Dev),
  router,
}).$mount('#app')
