// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import  { ToastPlugin } from 'vux'
import APei from 'a-pei'
import '../node_modules/a-pei/dist/a-pei.css'

Vue.use(VueRouter)
Vue.use(ToastPlugin)
Vue.use(APei)

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
