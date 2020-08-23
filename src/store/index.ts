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
      return fetch(`${api}/games`, game);
    },
  },
  getters: {
    user: (state) => state.user,
    platforms: (state) => state.platforms,
    players: (state) => state.players,
    games: (state) => state.games,
    game: (state) => state.game,
    rankings: (state) => state.rankings,
  },
});
