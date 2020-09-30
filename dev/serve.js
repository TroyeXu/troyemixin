import Vue from 'vue'
import Dev from './serve.vue'
import router from './router/index.js'
Vue.config.productionTip = false
import { axios } from '../src/index'
console.log(111, axios(11, 23))
new Vue({
  render: (h) => h(Dev),
  router,
}).$mount('#app')
