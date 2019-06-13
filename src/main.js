import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';

import App from './App.vue';

Vue.config.productionTip = false;

library.add(fas, fab, far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

axios.get('./config.json').then((res) => {
  Vue.prototype.$config = res.data;
  new Vue({
    render: h => h(App),
  }).$mount('#app');
});
