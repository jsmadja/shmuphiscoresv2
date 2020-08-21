import Vue from "vue";
import Vuex from "vuex";
import { PlatformWithGameCount } from "@/models/platforms";

Vue.use(Vuex);

const api = "https://shmuphiscoresv2-api.herokuapp.com";

export default new Vuex.Store({
  state: {
    user: null,
    platforms: [] as PlatformWithGameCount[],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPlatforms(state, platforms: PlatformWithGameCount[]) {
      state.platforms = platforms;
    },
  },
  actions: {
    fetchUser(context) {
      fetch(`${api}/me`)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user));
    },
    fetchPlatforms(context) {
      fetch(`${api}/platforms`)
        .then((response) => response.json())
        .then((platforms: PlatformWithGameCount[]) =>
          context.commit("setPlatforms", platforms)
        );
    },
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    platforms: (state) => {
      return state.platforms;
    },
  },
});
