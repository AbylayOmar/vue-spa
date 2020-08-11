// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Aba from './components/Aba'
import Nauka from './components/Nauka'

Vue.config.productionTip = false



const router = new Router({
  routes: [
    {
      path: '/aba',
      name:'aba',
      component: Aba,
    },
    {
      path: '/nauka',
      name:'nauka',
      component: Nauka,
    },
 ]
})

Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
