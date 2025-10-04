<template>
  <my-recommendations-template
    :my-recommendations="myRecommendations"
    :myRecommendationsLoading="myRecommendationsLoading"
    @goToGame="goToGame"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Game } from "@/models/game";
import MyRecommendationsTemplate from "@/components/templates/MyRecommendationsTemplate.vue";
import { getMyRecommendations } from "@/repository";

export default defineComponent({
  name: "MyRecommendations",
  components: { MyRecommendationsTemplate },
  async mounted() {
    this.myRecommendationsLoading = true;
    this.myRecommendations = await getMyRecommendations();
    this.myRecommendationsLoading = false;
  },
  data: () => ({
    myRecommendationsLoading: true,
    myRecommendations: {},
  }),
  methods: {
    goToGame(game: Game) {
      this.$router.push(`/games/${game.id}`);
    },
  },
});
</script>
