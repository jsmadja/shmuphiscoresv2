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
import { defineComponent } from "vue";
import RecommendationCard from "../molecules/RecommendationCard.vue";
import { Game } from "@/models/game";

export default defineComponent({
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
      const recommendations = this.myRecommendations;
      const unplayedDifficulty = recommendations.unplayedDifficulty;
      const unplayedMode = recommendations.unplayedMode;
      const unplayedGame = recommendations.unplayedGame;
      return [
        {
          title: "Try a new mode",
          target: unplayedMode,
          content: unplayedMode
            ? `Play <b>${unplayedMode.mode.name}</b> mode of <b>${unplayedMode.game.title}</b>.`
            : "",
        },
        {
          title: "Try a new difficulty",
          target: unplayedDifficulty,
          content: unplayedDifficulty
            ? `Play <b>${unplayedDifficulty.difficulty.name}</b> difficulty of <b>${unplayedDifficulty.game.title}</b>.`
            : "",
        },
        {
          title: "Discover a new game",
          target: unplayedGame,
          content: unplayedGame
            ? `Add your first score on <b>${unplayedGame.game.title}</b>.`
            : "",
        },
        {
          title: "Long time no see",
          target: recommendations.oldestScoredGame,
          content: recommendations.oldestScoredGame
            ? `Remember, you've scored it, long time ago ... <b>${recommendations.oldestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Try again, do your best",
          target: recommendations.latestScoredGame,
          content: recommendations.latestScoredGame
            ? `Keep going on <b>${recommendations.latestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Just a couple more shots",
          target: recommendations.nearestScoredGame,
          content: recommendations.nearestScoredGame
            ? `The next place is at hand, play <b>${recommendations.nearestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Learning curve is high",
          target: recommendations.farestScoredGame,
          content: recommendations.farestScoredGame
            ? `You're far far from the next place, play <b>${recommendations.farestScoredGame.game.title}</b>.`
            : "",
        },
      ];
    },
  },
});
</script>
