import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ApiService from './common/api.service';

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'

Vue.config.productionTip = false

ApiService.init();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
