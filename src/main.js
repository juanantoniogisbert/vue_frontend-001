import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ApiService from './common/api.service';

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false

Vue.use(BootstrapVue)

ApiService.init();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
