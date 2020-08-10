import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import SearchGame from "../views/SearchGame.vue";
import Game from "../views/Game.vue";
import MyGames from "../views/MyGames.vue";

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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
