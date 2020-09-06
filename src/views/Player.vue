<template>
  <player-template
    :loading="loading"
    :scores="scores"
    @goToGame="goToGame"
    @goToPlatform="goToPlatform"
  />
</template>

<script lang="ts">
import { getScoresByPlayer } from "@/repository";
import Vue from "vue";
import PlayerTemplate from "@/components/templates/PlayerTemplate.vue";

export default Vue.extend({
  name: "Player",
  components: { PlayerTemplate },
  async created() {
    this.loading = true;
    this.scores = await getScoresByPlayer(this.$route.params.id);
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      scores: [],
    };
  },
  methods: {
    goToGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
    goToPlatform(platform) {
      this.$router.push(`/platform/${platform.name}`);
    },
  },
});
</script>
