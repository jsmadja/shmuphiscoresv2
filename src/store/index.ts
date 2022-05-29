import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { PlatformWithGameCount } from "@/models/platforms";
import { Player } from "@/models/player";
import { Game } from "@/models/game";
import { Ranking, Platform } from "@/models/ranking";
import _ from "lodash";
import {
  createDifficulty,
  createGame,
  createMode,
  createPlatforms,
  createPlayer,
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
import { AxiosError } from "axios";

Vue.use(Vuex);

interface S {
  user: null;
  platforms: PlatformWithGameCount[];
  players: Player[];
  myGames: Game[];
  games: Game[];
  game: null;
  score: null;
  rankings: Ranking[];
  recentlyViewedGames: Game[];
  showToast: boolean;
  toastMessage: string;
  toastColor: "success";
  lastScores: Score[];
  myLastScores: Score[];
  myLastScoresLoading: boolean;
}
type R = S;

export type GameConfigurationOption = {
  value: string;
  afterValue: number | undefined;
};
export const actions = {
  async fetchUser(context: ActionContext<S, R>): Promise<Player> {
    const user = await fetchUser();
    context.commit("setUser", user);
    return user;
  },
  fetchPlatforms(context: ActionContext<S, R>): Promise<void> {
    return fetchPlatforms().then((platforms) =>
      context.commit("setPlatforms", platforms)
    );
  },
  fetchPlayers(context: ActionContext<S, R>): Promise<void> {
    return fetchPlayers().then((players) =>
      context.commit("setPlayers", players)
    );
  },
  fetchGames(context: ActionContext<S, R>): Promise<void> {
    return fetchGames().then((games) => context.commit("setGames", games));
  },
  fetchMyGames(context: ActionContext<S, R>): Promise<void> {
    return fetchMyGames().then((games) => context.commit("setMyGames", games));
  },
  fetchGame(context: ActionContext<S, R>, id: Game["id"]): Promise<void> {
    return fetchGame(id).then((game) => context.commit("setGame", game));
  },
  fetchRankings(context: ActionContext<S, R>, id: Game["id"]): Promise<void> {
    return fetchRankings(id).then((game) =>
      context.commit("setRankings", game)
    );
  },
  fetchLastScores(context: ActionContext<S, R>): Promise<void> {
    return fetchLastScores().then((scores) =>
      context.commit("setLastScores", scores)
    );
  },
  fetchScore(context: ActionContext<S, R>, id: Score["id"]): Promise<void> {
    return fetchScore(id).then((score) => context.commit("setScore", score));
  },
  fetchMyLastScores(context: ActionContext<S, R>): Promise<void> {
    return fetchMyLastScores().then((scores) => {
      context.commit("setMyLastScoresLoading", false);
      context.commit("setMyLastScores", scores);
    });
  },
  async createGame(
    context: ActionContext<S, R>,
    game: Partial<Game>
  ): Promise<Game> {
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
  async createPlayer(
    context: ActionContext<S, R>,
    player: Partial<Player>
  ): Promise<Player> {
    const response = await createPlayer(player);
    if (response.ok) {
      await context.dispatch(
        "showSuccessToast",
        `${player.name} has been submitted`
      );
      return response.json();
    }
    await context.dispatch("showErrorToast", response.status);
    throw new Error("Error: " + response.status);
  },
  async createScore(
    context: ActionContext<S, R>,
    score: Partial<Score>
  ): Promise<Score> {
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
  async editScore(context: ActionContext<S, R>, score: Score): Promise<Score> {
    try {
      const response = await editScore(score);
      await context.dispatch("showSuccessToast", `Score has been updated`);
      const updatedScore = response.data;
      context.commit("setScore", updatedScore);
      return updatedScore;
    } catch (error) {
      context.dispatch("showErrorToast", error);
      throw new Error((error as AxiosError).message);
    }
  },
  async createMode(
    context: ActionContext<S, R>,
    { game, mode }: { game: Game; mode: GameConfigurationOption }
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
  async createDifficulty(
    context: ActionContext<S, R>,
    { game, difficulty }: { game: Game; difficulty: GameConfigurationOption }
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
    context: ActionContext<S, R>,
    { game, stage }: { game: Game; stage: GameConfigurationOption }
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
    context: ActionContext<S, R>,
    { game, ship }: { game: Game; ship: GameConfigurationOption }
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
    context: ActionContext<S, R>,
    { game, platforms }: { game: Game; platforms: Partial<Platform>[] }
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
  showSuccessToast(context: ActionContext<S, R>, message: string): void {
    context.commit("setToastMessage", { message, color: "success" });
  },
  showErrorToast(context: ActionContext<S, R>, message: string): void {
    context.commit("setToastMessage", { message, color: "red" });
  },
  addViewedGame(context: ActionContext<S, R>, game: Game): void {
    context.state.recentlyViewedGames.push(game);
    context.commit(
      "setRecentlyViewedGames",
      _(context.state.recentlyViewedGames).uniqBy("id").take(6).value()
    );
  },
};

const initialState: S = {
  user: null,
  platforms: [],
  players: [],
  myGames: [],
  games: [],
  game: null,
  score: null,
  rankings: [],
  showToast: false,
  toastMessage: "",
  toastColor: "success",
  lastScores: [],
  myLastScores: [],
  myLastScoresLoading: true,
  recentlyViewedGames: [],
};
export default new Vuex.Store({
  state: initialState,
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
      state.rankings = _(rankings)
        .filter((ranking) => ranking.scores.length > 0)
        .orderBy((ranking) => -ranking.scores.length)
        .value();
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
  actions: actions,
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
