import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { VueTypedJs } from 'vue-typed-js'
import VueCarousel from 'vue-carousel';
import VModal from 'vue-js-modal'

 
Vue.use(VModal)
Vue.use(VueCarousel);
Vue.use(VueTypedJs)

import './assets/css/blog.css';
import './assets/css/responsive.css';
import './assets/css/style.css';

import './assets/lib/bootstrap/css/bootstrap.css';
import './assets/lib/hover/hover.min.css';
import './assets/lib/ionicons/css/ionicons.min.css';
import './assets/lib/ionicons/fonts/ionicons.ttf';

import './assets/js/main';
import 'bootstrap/dist/js/bootstrap';

Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
