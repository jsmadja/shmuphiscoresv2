import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
    lastScores: [],
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
      setTimeout(() => (state.showToast = false), 2000);
    },
    setLastScores(state, scores) {
      state.lastScores = scores;
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
    fetchLastScores(context) {
      return fetch(`${api}/scores`)
        .then((response) => response.json())
        .then((scores) => context.commit("setLastScores", scores));
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
    createMode(context, { game, mode }) {
      return axios
        .post(`${api}/games/${game.id}/modes`, mode)
        .then((response) => {
          this.dispatch(
            "showSuccessToast",
            `Mode ${mode.value} has been submitted`
          );
          this.commit("setGame", response.data);
          return response;
        })
        .catch((error) => {
          this.dispatch("showErrorToast", error);
          throw new Error(error);
        });
    },
    createDifficulty(context, { game, difficulty }) {
      return axios
        .post(`${api}/games/${game.id}/difficulties`, difficulty)
        .then((response) => {
          this.dispatch(
            "showSuccessToast",
            `Difficulty ${difficulty.value} has been submitted`
          );
          this.commit("setGame", response.data);
          return response;
        })
        .catch((error) => {
          this.dispatch("showErrorToast", error);
          throw new Error(error);
        });
    },
    createStage(context, { game, stage }) {
      return axios
        .post(`${api}/games/${game.id}/stages`, stage)
        .then((response) => {
          this.dispatch(
            "showSuccessToast",
            `Stage ${stage.value} has been submitted`
          );
          this.commit("setGame", response.data);
          return response;
        })
        .catch((error) => {
          this.dispatch("showErrorToast", error);
          throw new Error(error);
        });
    },
    createShip(context, { game, ship }) {
      return axios
        .post(`${api}/games/${game.id}/ships`, ship)
        .then((response) => {
          this.dispatch(
            "showSuccessToast",
            `Ship ${ship.value} has been submitted`
          );
          this.commit("setGame", response.data);
          return response;
        })
        .catch((error) => {
          this.dispatch("showErrorToast", error);
          throw new Error(error);
        });
    },
    createPlatforms(context, { game, platforms }) {
      return axios
        .post(`${api}/games/${game.id}/platforms`, platforms)
        .then((response) => {
          this.dispatch(
            "showSuccessToast",
            `Platforms ${platforms} has been submitted`
          );
          this.commit("setGame", response.data);
          return response;
        })
        .catch((error) => {
          this.dispatch("showErrorToast", error);
          throw new Error(error);
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
    lastScores: (state) => state.lastScores,
  },
});
