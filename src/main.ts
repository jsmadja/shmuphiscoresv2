import { createApp } from "vue";
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
import useClipboard from "vue-clipboard3";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

// Make clipboard available globally
const { toClipboard } = useClipboard();
app.config.globalProperties.$copyText = toClipboard;

// Vue 3 doesn't have global filters, so we'll provide them via globalProperties
app.config.globalProperties.$filters = {
  formatNumber,
  formatRank,
  formatTime,
  formatDateFromNow,
};

app.mount("#app");
