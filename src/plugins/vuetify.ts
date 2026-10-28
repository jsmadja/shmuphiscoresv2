import Vue from "vue";
import Vuetify from "vuetify/lib";
import { vuetifyTheme } from "./vuetifyTheme";

Vue.use(Vuetify);

export const THEME_STORAGE_KEY = "hiscores-theme";

function initialDark(): boolean {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) !== "light";
  } catch (e) {
    return true;
  }
}

export default new Vuetify({
  theme: {
    ...vuetifyTheme,
    dark: initialDark(),
  },
});
