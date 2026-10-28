import Vue from "vue";
import Vuetify from "vuetify/lib";

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
    dark: initialDark(),
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#FF781B",
        secondary: "#FF8A33",
        accent: "#FF8A33",
        error: "#D92B26",
      },
      light: {
        primary: "#FF781B",
        secondary: "#A84600",
        accent: "#A84600",
        error: "#B42318",
      },
    },
  },
});
