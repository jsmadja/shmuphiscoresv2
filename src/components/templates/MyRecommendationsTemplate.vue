<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My Recommendations</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <template v-if="myRecommendationsLoading">
        <v-col
          :key="index"
          v-for="index in 7"
          cols="12"
          xs="12"
          sm="6"
          md="6"
          lg="6"
        >
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
      </template>
      <template v-for="(recommendation, i) in recommendations">
        <v-col
          xs="12"
          sm="12"
          md="12"
          lg="6"
          :key="i"
          v-if="recommendation.target"
        >
          <recommendation-card
            @goToGame="goToGame"
            :title="recommendation.title"
            :content="recommendation.content"
            :game="recommendation.target['game']"
          />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import RecommendationCard from "../molecules/RecommendationCard.vue";
import { Game } from "@/models/game";

export default Vue.extend({
  name: "MyRecommendationsTemplate",
  components: { RecommendationCard },
  props: ["myRecommendations", "myRecommendationsLoading"],
  methods: {
    goToGame(game: Game) {
      this.$emit("goToGame", game);
    },
  },
  computed: {
    recommendations: function () {
      return [
        {
          title: "Try a new mode",
          target: this.myRecommendations.unplayedMode,
          content: this.myRecommendations.unplayedMode
            ? `Play <b>${this.myRecommendations.unplayedMode.mode.name}</b> mode of <b>${this.myRecommendations.unplayedMode.game.title}</b>.`
            : "",
        },
        {
          title: "Try a new difficulty",
          target: this.myRecommendations.unplayedDifficulty,
          content: this.myRecommendations.unplayedDifficulty
            ? `Play <b>${this.myRecommendations.unplayedDifficulty.difficulty.name}</b> difficulty of <b>${this.myRecommendations.unplayedDifficulty.game.title}</b>.`
            : "",
        },
        {
          title: "Discover a new game",
          target: this.myRecommendations.unplayedGame,
          content: this.myRecommendations.unplayedGame
            ? `Add your first score on <b>${this.myRecommendations.unplayedGame.game.title}</b>.`
            : "",
        },
        {
          title: "Long time no see",
          target: this.myRecommendations.oldestScoredGame,
          content: this.myRecommendations.oldestScoredGame
            ? `Remember, you've scored it, long time ago ... <b>${this.myRecommendations.oldestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Try again, do your best",
          target: this.myRecommendations.latestScoredGame,
          content: this.myRecommendations.latestScoredGame
            ? `Keep going on <b>${this.myRecommendations.latestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Just a couple more shots",
          target: this.myRecommendations.nearestScoredGame,
          content: this.myRecommendations.nearestScoredGame
            ? `The next place is at hand, play <b>${this.myRecommendations.nearestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Learning curve is high",
          target: this.myRecommendations.farestScoredGame,
          content: this.myRecommendations.farestScoredGame
            ? `You're far far from the next place, play <b>${this.myRecommendations.farestScoredGame.game.title}</b>.`
            : "",
        },
      ];
    },
  },
});
</script>
