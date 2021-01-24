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
import { Score } from "@/models/score";

Vue.use(Vuex);

export const actions = {
  fetchUser(context: typeof store): unknown {
    return fetchUser().then((user) => context.commit("setUser", user));
  },
  fetchPlatforms(context: typeof store): unknown {
    return fetchPlatforms().then((platforms) =>
      context.commit("setPlatforms", platforms)
    );
  },
  fetchPlayers(context: typeof store): unknown {
    return fetchPlayers().then((players) =>
      context.commit("setPlayers", players)
    );
  },
  fetchGames(context: typeof store): unknown {
    return fetchGames().then((games) => context.commit("setGames", games));
  },
  fetchMyGames(context: typeof store): unknown {
    return fetchMyGames().then((games) => context.commit("setMyGames", games));
  },
  fetchGame(context: typeof store, id: number): unknown {
    return fetchGame(id).then((game) => context.commit("setGame", game));
  },
  fetchRankings(context: typeof store, id: number): unknown {
    return fetchRankings(id).then((game) =>
      context.commit("setRankings", game)
    );
  },
  fetchLastScores(context: typeof store): unknown {
    return fetchLastScores().then((scores) =>
      context.commit("setLastScores", scores)
    );
  },
  fetchScore(context: typeof store, id: number): unknown {
    return fetchScore(id).then((score) => context.commit("setScore", score));
  },
  fetchMyLastScores(context: typeof store): unknown {
    return fetchMyLastScores().then((scores) => {
      context.commit("setMyLastScoresLoading", false);
      context.commit("setMyLastScores", scores);
    });
  },
  async createGame(context: typeof store, game: Game): Promise<Game> {
    const response = await createGame(game);
    if (response.ok) {
      await context.dispatch(
        "showSuccessToast",
        `${game.title} has been submitted`
      );
      return response.json();
    } else {
      await context.dispatch("showErrorToast", response.status);
      throw new Error("Error: " + response.status);
    }
  },
  createScore(context: typeof store, score: Score): Promise<Score> {
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
  editScore(context: typeof store, score: Score): Promise<Score> {
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
  createMode(
    context: typeof store,
    { game, mode }: { game: Game; mode: { value: string } }
  ): Promise<Game> {
    return createMode({ game, mode })
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Mode ${mode.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createDifficulty(
    context: typeof store,
    { game, difficulty }: { game: Game; difficulty: { value: string } }
  ): Promise<Game> {
    return createDifficulty({ game, difficulty })
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Difficulty ${difficulty.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createStage(
    context: typeof store,
    { game, stage }: { game: Game; stage: { value: string } }
  ): Promise<Game> {
    return createStage({ game, stage })
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Stage ${stage.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createShip(
    context: typeof store,
    { game, ship }: { game: Game; ship: { value: string } }
  ): Promise<Game> {
    return createShip({ game, ship })
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Ship ${ship.value} has been submitted`
        );
        context.commit("setGame", response.data);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  createPlatforms(
    context: typeof store,
    { game, platforms }: { game: Game; platforms: string[] }
  ): Promise<Game> {
    return createPlatforms({ game, platforms })
      .then((response) => {
        context.dispatch(
          "showSuccessToast",
          `Platforms ${platforms} has been submitted`
        );
        context.commit("setGame", response.data);
        return response.data;
      })
      .catch((error) => {
        context.dispatch("showErrorToast", error);
        throw new Error(error);
      });
  },
  showSuccessToast(context: typeof store, message: string): void {
    context.commit("setToastMessage", { message, color: "success" });
  },
  showErrorToast(context: typeof store, message: string): void {
    context.commit("setToastMessage", { message, color: "red" });
  },
  addViewedGame(context: typeof store, game: Game): void {
    context.state.recentlyViewedGames.push(game);
    context.commit(
      "setRecentlyViewedGames",
      _(context.state.recentlyViewedGames).uniqBy("id").take(6).value()
    );
  },
};

const store = new Vuex.Store({
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
export default store;
