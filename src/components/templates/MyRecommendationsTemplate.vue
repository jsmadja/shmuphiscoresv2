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
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Try a new mode"
          v-if="myRecommendations.unplayedMode"
          :content="`Play <b>${myRecommendations.unplayedMode.mode.name}</b> mode of <b>${myRecommendations.unplayedMode.game.title}</b>.`"
          :game="myRecommendations.unplayedMode.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Try a new difficulty"
          v-if="myRecommendations.unplayedDifficulty"
          :content="`Play <b>${myRecommendations.unplayedDifficulty.difficulty.name}</b> difficulty of <b>${myRecommendations.unplayedDifficulty.game.title}</b>.`"
          :game="myRecommendations.unplayedDifficulty.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Discover a new game"
          v-if="myRecommendations.unplayedGame"
          :content="`Add your first score on <b>${myRecommendations.unplayedGame.game.title}</b>.`"
          :game="myRecommendations.unplayedGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Long time no see"
          v-if="myRecommendations.oldestScoredGame"
          :content="`Remember, you've scored it, long time ago ... <b>${myRecommendations.oldestScoredGame.game.title}</b>.`"
          :game="myRecommendations.oldestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Try again, do your best"
          v-if="myRecommendations.latestScoredGame"
          :content="`Keep going on <b>${myRecommendations.latestScoredGame.game.title}</b>.`"
          :game="myRecommendations.latestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Just a couple more shots"
          v-if="myRecommendations.nearestScoredGame"
          :content="`The next place is at hand, play <b>${myRecommendations.nearestScoredGame.game.title}</b>.`"
          :game="myRecommendations.nearestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Learning curve is high"
          v-if="myRecommendations.farestScoredGame"
          :content="`You're far far from the next place, play <b>${myRecommendations.farestScoredGame.game.title}</b>.`"
          :game="myRecommendations.farestScoredGame.game"
        />
      </v-col>
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
});
</script>
