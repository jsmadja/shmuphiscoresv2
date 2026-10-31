<template>
  <my-recommendations-template
    :my-recommendations="myRecommendations"
    :pending-recommendations="pendingRecommendations"
    @goToGame="goToGame"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Game } from "@/models/game";
import MyRecommendationsTemplate from "@/components/templates/MyRecommendationsTemplate.vue";
import { fetchMyRecommendations } from "@/repository";
import {
  recommendationTypes,
  RecommendationType,
  Recommendations,
} from "@/models/recommendations";

export default Vue.extend({
  name: "MyRecommendations",
  components: { MyRecommendationsTemplate },
  mounted() {
    fetchMyRecommendations((recommendations, types) => {
      this.myRecommendations = {
        ...this.myRecommendations,
        ...recommendations,
      };
      this.pendingRecommendations = this.pendingRecommendations.filter(
        (type) => !types.includes(type)
      );
    });
  },
  data: () => ({
    pendingRecommendations: [...recommendationTypes] as RecommendationType[],
    myRecommendations: {} as Partial<Recommendations>,
  }),
  methods: {
    goToGame(game: Game) {
      this.$router.push(`/games/${game.id}`);
    },
  },
});
</script>
