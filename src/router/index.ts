import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import Score from "../views/Score.vue";
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
  // for backward compatibility with shmup.com
  {
    path: "/game/:id/new_score",
    name: "AddScore",
    component: AddScore,
  },
  {
    path: "/games/:id/score",
    name: "AddScore",
    component: AddScore,
  },
  {
    path: "/games/:gameId/scores/:scoreId/edit",
    name: "EditScore",
    component: EditScore,
  },
  // for backward compatibility with shmup.com
  {
    path: "/game/:id",
    name: "Game",
    component: Game,
  },
  {
    path: "/games/:id",
    name: "Game",
    component: Game,
  },
  {
    path: "/score/:id",
    name: "Score",
    component: Score,
  },
  {
    path: "/games/:id/edit",
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
    path: "/players/:id",
    name: "Player",
    component: Player,
  },
  // for backward compatibility with shmup.com
  {
    path: "/player/:id",
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
