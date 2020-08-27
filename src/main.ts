import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import HighchartsVue from "highcharts-vue";
import formatNumber from "./filters/formatNumber";
import formatRank from "./filters/formatRank";
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

new Vue({
  router,
  store,
  vuetify,
  filters: {
    formatNumber,
    formatRank,
  },
  render: (h) => h(App),
}).$mount("#app");
