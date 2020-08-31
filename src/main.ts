import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import HighchartsVue from "highcharts-vue";
import { formatNumber, formatRank, formatTime } from "./filters/index";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import VueClipboard from "vue-clipboard2";

Sentry.init({
  dsn:
    "https://bf7fe4a7fe794de8a5cbd53a3870468b@o438398.ingest.sentry.io/5403013",
  integrations: [new VueIntegration({ Vue, attachProps: true })],
});

Vue.config.productionTip = false;

Vue.use(VueClipboard);
Vue.use(HighchartsVue);

Vue.filter("formatNumber", formatNumber);
Vue.filter("formatRank", formatRank);
Vue.filter("formatTime", formatTime);

window.Store = store;

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
