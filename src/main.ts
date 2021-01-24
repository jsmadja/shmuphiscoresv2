import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import {
  formatNumber,
  formatRank,
  formatTime,
  formatDateFromNow,
} from "./filters/index";
import VueClipboard from "vue-clipboard2";

Vue.config.productionTip = false;

Vue.use(VueClipboard);

Vue.filter("formatNumber", formatNumber);
Vue.filter("formatRank", formatRank);
Vue.filter("formatTime", formatTime);
Vue.filter("formatDateFromNow", formatDateFromNow);

(window as typeof window & { Store: typeof store }).Store = store;

new Vue({
  router,
  store,
  vuetify,
  filters: {
    formatNumber,
    formatRank,
    formatTime,
  },
  render: (h) => h(App),
}).$mount("#app");
