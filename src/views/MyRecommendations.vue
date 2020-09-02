<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>My Recommendations</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Try a new mode"
          :content="`Play <b>${recommendations.unplayedMode.mode.name}</b> mode of <b>${recommendations.unplayedMode.game.title}</b>.`"
          :game="recommendations.unplayedMode.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Try a new difficulty"
          :content="`Play <b>${recommendations.unplayedDifficulty.difficulty.name}</b> difficulty of <b>${recommendations.unplayedDifficulty.game.title}</b>.`"
          :game="recommendations.unplayedDifficulty.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Discover a new game"
          :content="`Add your first score on <b>${recommendations.unplayedGame.game.title}</b>.`"
          :game="recommendations.unplayedGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Long time no see"
          :content="`Remember, you've scored it, long time ago ... <b>${recommendations.oldestScoredGame.game.title}</b>.`"
          :game="recommendations.oldestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Try again, do your best"
          :content="`Keep going on <b>${recommendations.latestScoredGame.game.title}</b>.`"
          :game="recommendations.latestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Just a couple more shots"
          :content="`The next place is at hand, play <b>${recommendations.nearestScoredGame.game.title}</b>.`"
          :game="recommendations.nearestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          @goToGame="goToGame"
          title="Learning curve is high"
          :content="`You're far far from the next place, play <b>${recommendations.farestScoredGame.game.title}</b>.`"
          :game="recommendations.farestScoredGame.game"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        v-if="false"
        :headers="headers"
        :items="killList"
      ></v-data-table>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import RecommendationCard from "@/components/molecules/RecommendationCard.vue";
import { Game } from "@/models/game";

export default Vue.extend({
  name: "MyRecommendations",
  components: { RecommendationCard },
  mounted() {
    fetch("http://localhost:8080/api/me/recommendations")
      .then((response) => response.json())
      .then((recommendations) => (this.recommendations = recommendations));
    //fetch("http://localhost:8080/api/me/kill-list")
    //  .then((response) => response.json())
    //  .then((killList) => (this.killList = killList));
  },
  data: () => ({
    recommendations: [],
    killList: [],
    headers: [
      {
        text: "Game",
        value: "score.game.title",
      },
      { text: "Ratio", value: "ratio" },
    ],
  }),
  methods: {
    goToGame(game: Game) {
      this.$router.push(`/game/${game.id}`);
    },
  },
});
</script>
