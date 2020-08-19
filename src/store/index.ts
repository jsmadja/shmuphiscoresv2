import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const api = "https://shmuphiscoresv2-api.herokuapp.com";

export default new Vuex.Store({
  state: {
    user: null,
    platforms: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
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
        .then((platforms) => context.commit("setPlatforms", platforms));
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
