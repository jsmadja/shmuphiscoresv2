<template>
  <my-recommendations-template
    :my-recommendations="myRecommendations"
    :myRecommendationsLoading="myRecommendationsLoading"
    @goToGame="goToGame"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Game } from "@/models/game";
import { mapGetters } from "vuex";
import MyRecommendationsTemplate from "@/components/templates/MyRecommendationsTemplate.vue";

export default Vue.extend({
  name: "MyRecommendations",
  components: { MyRecommendationsTemplate },
  created() {
    this.$store.dispatch("fetchMyRecommendations");
  },
  computed: {
    ...mapGetters(["myRecommendations", "myRecommendationsLoading"]),
  },
  methods: {
    goToGame(game: Game) {
      this.$router.push(`/game/${game.id}`);
    },
  },
});
</script>
