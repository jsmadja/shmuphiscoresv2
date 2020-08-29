import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { PlatformWithGameCount } from "@/models/platforms";
import { api } from "@/api";
import { Player } from "@/models/player";
import { Game } from "@/models/game";
import { Ranking } from "@/models/ranking";
import _ from "lodash";
Vue.use(Vuex);

export const actions = {
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
  fetchMyGames(context) {
    return fetch(`${api}/me/games`)
      .then((response) => response.json())
      .then((games) => context.commit("setMyGames", games));
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
  fetchMyLastScores(context) {
    return fetch(`${api}/me/scores`)
      .then((response) => response.json())
      .then((scores) => context.commit("setMyLastScores", scores));
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
        context.dispatch(
          "showSuccessToast",
          `${game.title} has been submitted`
        );
        return response.json();
      } else {
        context.dispatch("showErrorToast", response.status);
        throw new Error("Error: " + response.status);
      }
    });
  },
  async createScore(context, score) {
    const form = new FormData();
    Object.entries(score)
      .filter((e) => !!e[1])
      .forEach((e) => form.append(e[0], e[1] as any));
    if (score.photo) form.append("photo", score.photo);
    if (score.inp) form.append("inp", score.inp);
    const config = { headers: { "content-type": "multipart/form-data" } };
    return axios
      .post(`${api}/me/scores`, form, config)
      .then((response) => {
        context.dispatch("showSuccessToast", `Score has been submitted`);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createMode(context, { game, mode }) {
    return axios
      .post(`${api}/games/${game.id}/modes`, mode)
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Mode ${mode.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createDifficulty(context, { game, difficulty }) {
    return axios
      .post(`${api}/games/${game.id}/difficulties`, difficulty)
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Difficulty ${difficulty.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createStage(context, { game, stage }) {
    return axios
      .post(`${api}/games/${game.id}/stages`, stage)
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Stage ${stage.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createShip(context, { game, ship }) {
    return axios
      .post(`${api}/games/${game.id}/ships`, ship)
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Ship ${ship.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createPlatforms(context, { game, platforms }) {
    return axios
      .post(`${api}/games/${game.id}/platforms`, platforms)
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Platforms ${platforms} has been submitted`
        );
        context.commit("setGame", response.data);
        return response;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  showSuccessToast(context, message) {
    context.commit("setToastMessage", { message, color: "success" });
  },
  showErrorToast(context, message) {
    context.commit("setToastMessage", { message, color: "red" });
  },
  addViewedGame(context, game) {
    context.state.recentlyViewedGames.push(game);
    context.commit(
      "setRecentlyViewedGames",
      _(context.state.recentlyViewedGames).uniqBy("id").take(6).value()
    );
  },
};

export default new Vuex.Store({
  state: {
    user: null,
    platforms: [] as PlatformWithGameCount[],
    players: [] as Player[],
    myGames: [] as Game[],
    games: [] as Game[],
    game: null,
    rankings: [] as Ranking[],
    showToast: false,
    toastMessage: "",
    toastColor: "success",
    lastScores: [],
    myLastScores: [],
    recentlyViewedGames: [] as Game[],
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
    setMyGames(state, games: Game[]) {
      state.myGames = games;
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
    setMyLastScores(state, scores) {
      state.myLastScores = scores;
    },
    setRecentlyViewedGames(state, games) {
      state.recentlyViewedGames = games;
    },
  },
  actions,
  getters: {
    user: (state) => state.user,
    platforms: (state) => state.platforms,
    players: (state) => state.players,
    games: (state) => state.games,
    myGames: (state) => state.myGames,
    game: (state) => state.game,
    rankings: (state) => state.rankings,
    showToast: (state) => state.showToast,
    toastMessage: (state) => state.toastMessage,
    toastColor: (state) => state.toastColor,
    lastScores: (state) => state.lastScores,
    myLastScores: (state) => state.myLastScores,
    recentlyViewedGames: (state) => state.recentlyViewedGames,
  },
});
