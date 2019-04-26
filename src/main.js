// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRx from 'vue-rx'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
// import Apei from 'a-pei'
import {VButton} from 'a-pei'

// Vue.use(Apei)
Vue.use(VButton)
// Vue.use(CountUp)
Vue.use(VueRx)
Vue.use(VueRouter)
// Vue.use(ToastPlugin)

const router = new VueRouter({
	routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app-box')
