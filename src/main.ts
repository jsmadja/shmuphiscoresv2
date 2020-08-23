import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import HighchartsVue from "highcharts-vue";
import formatNumber from "./filters/formatNumber";

Vue.config.productionTip = false;

Vue.use(HighchartsVue);

Vue.filter("formatNumber", formatNumber);

new Vue({
  router,
  store,
  vuetify,
  filters: {
    formatNumber,
  },
  render: (h) => h(App),
}).$mount("#app");
