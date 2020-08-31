import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import Players from "../views/Players.vue";
import EditGame from "../views/EditGame.vue";
import AddGame from "../views/AddGame.vue";
import Game from "../views/Game.vue";
import MyGames from "../views/MyGames.vue";
import MyProfile from "../views/MyProfile.vue";
import MyRecommendations from "../views/MyRecommendations.vue";
import CompareScores from "../views/CompareScores.vue";
import Statistics from "../views/Statistics.vue";
import Platforms from "../views/Platforms.vue";
import Platform from "../views/Platform.vue";
import Player from "../views/Player.vue";
import AddScore from "../views/AddScore.vue";
import EditScore from "../views/EditScore.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/platforms",
    name: "Platforms",
    component: Platforms,
  },
  {
    path: "/platform/:platformTitle",
    name: "Platform",
    component: Platform,
  },
  {
    path: "/add-game",
    name: "AddGame",
    component: AddGame,
  },
  {
    path: "/game/:id/score",
    name: "AddScore",
    component: AddScore,
  },
  {
    path: "/game/:gameId/scores/:scoreId/edit",
    name: "EditScore",
    component: EditScore,
  },
  {
    path: "/game/:id",
    name: "Game",
    component: Game,
  },
  {
    path: "/game/:id/edit",
    name: "EditGame",
    component: EditGame,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/my-games",
    name: "My Games",
    component: MyGames,
  },
  {
    path: "/my-profile",
    name: "My Profile",
    component: MyProfile,
  },
  {
    path: "/compare-scores",
    name: "CompareScores",
    component: CompareScores,
  },
  {
    path: "/my-recommendations",
    name: "My Recommendations",
    component: MyRecommendations,
  },
  {
    path: "/players",
    name: "All Players",
    component: Players,
  },
  {
    path: "/player",
    name: "Player",
    component: Player,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
