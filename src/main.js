import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import ApiService from './common/api.service';
import router from './router';
import store from './store';

import './style.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

ApiService.init();

// router.beforeEach((to, from, next) => {
//   Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// });

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
