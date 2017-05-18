
import App from './component/app'
import VueRx from 'vue-rx'
import Duo from 'vue-duo'
import Vue from 'vue'

Vue.use(VueRx)
Vue.use(Duo)

const app = new Vue(App)

app.$mount('#app')
