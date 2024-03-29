import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios
// vue.js added
// vue.js added
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
