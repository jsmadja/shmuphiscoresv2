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
          title="Try a new mode"
          :content="`Try <b>${recommendations.unplayedMode.mode.name}</b> mode of <b>${recommendations.unplayedMode.game.title}</b>.`"
          :game="recommendations.unplayedMode.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          title="Try a new difficulty"
          :content="`Try <b>${recommendations.unplayedDifficulty.difficulty.name}</b> difficulty of <b>${recommendations.unplayedDifficulty.game.title}</b>.`"
          :game="recommendations.unplayedDifficulty.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          title="Discover a new game"
          :content="`Add a score on <b>${recommendations.unplayedGame.game.title}</b>.`"
          :game="recommendations.unplayedGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          title="Long time no see"
          :content="`Remember, you've scored it, long time ago ... <b>${recommendations.oldestScoredGame.game.title}</b>.`"
          :game="recommendations.oldestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          title="Try again, do your best"
          :content="`Keep going on <b>${recommendations.latestScoredGame.game.title}</b>.`"
          :game="recommendations.latestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          title="Just a couple more shots"
          :content="`Keep going on <b>${recommendations.nearestScoredGame.game.title}</b>.`"
          :game="recommendations.nearestScoredGame.game"
        />
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="6">
        <recommendation-card
          title="Learning curve is hight"
          :content="`Keep going on <b>${recommendations.farestScoredGame.game.title}</b>.`"
          :game="recommendations.farestScoredGame.game"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import RecommendationCard from "@/components/molecules/RecommendationCard.vue";

export default Vue.extend({
  name: "MyRecommendations",
  components: { RecommendationCard },
  mounted() {
    fetch("http://localhost:8080/api/me/recommendations")
      .then((response) => response.json())
      .then((recommendations) => (this.recommendations = recommendations));
  },
  data: () => ({
    recommendations: [],
    items: [
      {
        src: "http://hiscores.shmup.com/covers/385.jpg",
        title: "Améliore ton score",
        artist:
          "Réduis l'écart entre toi et <b>mutmut02</b> sur <b>Gate of Thunder</b>, il y a un grand écart de points.",
      },
      {
        src: "http://hiscores.shmup.com/covers/2.jpg",
        title: "Monte dans le classement",
        artist:
          "Prend la place de <b>Y'om</b> sur <b>Mushihimesama Futari</b> dans le mode <b>Version 1.5</b> et la difficulté <b>Original</b>.",
      },
    ],
  }),
});
</script>
