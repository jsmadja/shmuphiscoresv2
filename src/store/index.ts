import Vue from "vue";
import Vuex from "vuex";
import { PlatformWithGameCount } from "@/models/platforms";
import { api } from "@/api";

Vue.use(Vuex);

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
      return fetch(`${api}/me`)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user));
    },
    fetchPlatforms(context) {
      return fetch(`${api}/platforms`)
        .then((response) => response.json())
        .then((platforms: PlatformWithGameCount[]) =>
          context.commit("setPlatforms", platforms)
        );
    },
    async createGame(context, game) {
      return fetch(`${api}/games`, game);
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
