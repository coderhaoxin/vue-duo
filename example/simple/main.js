
import App from './component/app'
import Duo from 'vue-duo'
import Vue from 'vue'

Vue.use(Duo)

const app = new Vue(App)

app.$mount('#app')
