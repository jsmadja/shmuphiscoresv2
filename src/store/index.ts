import Vue from "vue";
import Vuex from "vuex";
import { PlatformWithGameCount } from "@/models/platforms";
import { api } from "@/api";
import { Player } from "@/models/player";
import { Game } from "@/models/game";
import { Ranking } from "@/models/ranking";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    platforms: [] as PlatformWithGameCount[],
    players: [] as Player[],
    games: [] as Game[],
    game: null,
    rankings: [] as Ranking[],
    showToast: false,
    toastMessage: "",
    toastColor: "success",
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
    setGames(state, games: Game[]) {
      state.games = games;
    },
    setRankings(state, rankings: Ranking[]) {
      state.rankings = rankings;
    },
    setGame(state, game) {
      state.game = game;
    },
    setToastMessage(state, opts) {
      state.toastMessage = opts.message;
      state.toastColor = opts.color;
      state.showToast = true;
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
    fetchGames(context) {
      return fetch(`${api}/games`)
        .then((response) => response.json())
        .then((games) => context.commit("setGames", games));
    },
    fetchGame(context, id) {
      return fetch(`${api}/games/${id}`)
        .then((response) => response.json())
        .then((game) => context.commit("setGame", game));
    },
    fetchRankings(context, id) {
      return fetch(`${api}/games/${id}/rankings`)
        .then((response) => response.json())
        .then((game) => context.commit("setRankings", game));
    },
    async createGame(context, game) {
      return fetch(`${api}/games`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      }).then((response) => {
        if (response.ok) {
          this.dispatch("showSuccessToast", `${game.title} has been submitted`);
          return response.json();
        } else {
          this.dispatch("showErrorToast", response.status);
          throw new Error("Error: " + response.status);
        }
      });
    },
    showSuccessToast(context, message) {
      context.commit("setToastMessage", { message, color: "success" });
    },
    showErrorToast(context, message) {
      context.commit("setToastMessage", { message, color: "red" });
    },
  },
  getters: {
    user: (state) => state.user,
    platforms: (state) => state.platforms,
    players: (state) => state.players,
    games: (state) => state.games,
    game: (state) => state.game,
    rankings: (state) => state.rankings,
    showToast: (state) => state.showToast,
    toastMessage: (state) => state.toastMessage,
    toastColor: (state) => state.toastColor,
  },
});
