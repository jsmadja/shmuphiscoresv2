import Vue from "vue";
import Vuex from "vuex";
import { PlatformWithGameCount } from "@/models/platforms";
import { Player } from "@/models/player";
import { Game } from "@/models/game";
import { Ranking } from "@/models/ranking";
import _ from "lodash";
import {
  createDifficulty,
  createGame,
  createMode,
  createPlatforms,
  createScore,
  createShip,
  createStage,
  editScore,
  fetchGame,
  fetchGames,
  fetchLastScores,
  fetchMyGames,
  fetchMyLastScores,
  fetchPlatforms,
  fetchPlayers,
  fetchRankings,
  fetchScore,
  fetchUser,
} from "@/repository";

Vue.use(Vuex);

export const actions = {
  fetchUser(context) {
    return fetchUser().then((user) => context.commit("setUser", user));
  },
  fetchPlatforms(context) {
    return fetchPlatforms().then((platforms) =>
      context.commit("setPlatforms", platforms)
    );
  },
  fetchPlayers(context) {
    return fetchPlayers().then((players) =>
      context.commit("setPlayers", players)
    );
  },
  fetchGames(context) {
    return fetchGames().then((games) => context.commit("setGames", games));
  },
  fetchMyGames(context) {
    return fetchMyGames().then((games) => context.commit("setMyGames", games));
  },
  fetchGame(context, id) {
    return fetchGame(id).then((game) => context.commit("setGame", game));
  },
  fetchRankings(context, id) {
    return fetchRankings(id).then((game) =>
      context.commit("setRankings", game)
    );
  },
  fetchLastScores(context) {
    return fetchLastScores().then((scores) =>
      context.commit("setLastScores", scores)
    );
  },
  fetchScore(context, id) {
    return fetchScore(id).then((score) => context.commit("setScore", score));
  },
  fetchMyLastScores(context) {
    return fetchMyLastScores().then((scores) => {
      context.commit("setMyLastScoresLoading", false);
      context.commit("setMyLastScores", scores);
    });
  },
  async createGame(context, game) {
    return createGame(game).then((response) => {
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
    return createScore(score)
      .then((response) => {
        context.dispatch("showSuccessToast", `Score has been submitted`);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  async editScore(context, score) {
    return editScore(score)
      .then((response) => {
        context.dispatch("showSuccessToast", `Score has been updated`);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  async createMode(context, { game, mode }) {
    return createMode({ game, mode })
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
  async createDifficulty(context, { game, difficulty }) {
    return createDifficulty({ game, difficulty })
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
    return createStage({ game, stage })
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
    return createShip({ game, ship })
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
    return createPlatforms({ game, platforms })
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
    score: null,
    rankings: [] as Ranking[],
    showToast: false,
    toastMessage: "",
    toastColor: "success",
    lastScores: [],
    myLastScores: [],
    myLastScoresLoading: true,
    recentlyViewedGames: [] as Game[],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setScore(state, score) {
      state.score = score;
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
      state.rankings = _.orderBy(rankings, (ranking) => -ranking.scores.length);
    },
    setGame(state, game) {
      state.game = game;
    },
    setMyLastScoresLoading(state, myLastScoresLoading) {
      state.myLastScoresLoading = myLastScoresLoading;
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
    myLastScoresLoading: (state) => state.myLastScoresLoading,
    score: (state) => state.score,
  },
});
