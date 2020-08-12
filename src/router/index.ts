import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import SearchGame from "../views/SearchGame.vue";
import AddGame from "../views/AddGame.vue";
import Game from "../views/Game.vue";
import MyGames from "../views/MyGames.vue";
import MyProfile from "../views/MyProfile.vue";
import MyRecommendations from "../views/MyRecommendations.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search-game",
    name: "SearchGame",
    component: SearchGame
  },
  {
    path: "/add-game",
    name: "AddGame",
    component: AddGame
  },
  {
    path: "/game",
    name: "Game",
    component: Game
  },
  {
    path: "/my-games",
    name: "My Games",
    component: MyGames
  },
  {
    path: "/my-profile",
    name: "My Profile",
    component: MyProfile
  },
  {
    path: "/my-recommendations",
    name: "My Recommendations",
    component: MyRecommendations
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/players",
    name: "All Players",component: () => import("../views/Players.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
