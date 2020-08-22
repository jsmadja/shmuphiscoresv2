import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games3.vue";
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
    path: "/add-score",
    name: "AddScore",
    component: AddScore,
  },
  {
    path: "/score/:id/edit",
    name: "EditScore",
    component: EditScore,
  },
  {
    path: "/game/:id",
    name: "Game",
    component: Game,
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
    component: () => import("../views/Players.vue"),
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
