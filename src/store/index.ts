import Vue from "vue";
import Vuex from "vuex";
import { PlatformWithGameCount } from "@/models/platforms";
import { api } from "@/api";
import { Player } from "@/models/player";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    platforms: [] as PlatformWithGameCount[],
    players: [] as Player[],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPlatforms(state, platforms: PlatformWithGameCount[]) {
      state.platforms = platforms;
    },
    setPlayers(state, players: Player[]) {
      state.players = players;
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
    fetchPlayers(context) {
      return fetch(`${api}/players`)
        .then((response) => response.json())
        .then((players) => context.commit("setPlayers", players));
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
    players: (state) => {
      return state.players;
    },
  },
});
