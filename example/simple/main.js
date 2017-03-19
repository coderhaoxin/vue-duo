
import App from './component/app'
import Duo from 'duo'
import Vue from 'vue'

Vue.use(Duo)

new Vue({
  el: '#app',
  render: h => h(App)
})
