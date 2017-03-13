
import App from './component/app'

import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'
import Vue from 'vue'

Vue.use(VueRx, Rx)

new Vue({
  el: '#app',
  render: h => h(App)
})
