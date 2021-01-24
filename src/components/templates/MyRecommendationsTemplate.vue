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
      const {
        unplayedMode,
        unplayedDifficulty,
        unplayedGame,
        oldestScoredGame,
        latestScoredGame,
        target,
        farestScoredGame,
      } = this.myRecommendations;
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
          target: oldestScoredGame,
          content: oldestScoredGame
            ? `Remember, you've scored it, long time ago ... <b>${oldestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Try again, do your best",
          target: latestScoredGame,
          content: latestScoredGame
            ? `Keep going on <b>${latestScoredGame.game.title}</b>.`
            : "",
        },
        {
          title: "Just a couple more shots",
          target: target,
          content: target
            ? `The next place is at hand, play <b>${target.game.title}</b>.`
            : "",
        },
        {
          title: "Learning curve is high",
          target: farestScoredGame,
          content: farestScoredGame
            ? `You're far far from the next place, play <b>${farestScoredGame.game.title}</b>.`
            : "",
        },
      ];
    },
  },
});
</script>
