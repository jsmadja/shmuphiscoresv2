<template>
  <player-template
    :loading="loading"
    :scores="scores"
    @goToGame="goToGame"
    @goToPlatform="goToPlatform"
    @goToScore="goToScore"
  />
</template>

<script lang="ts">
import { getScoresByShmupPlayer } from "@/repository";
import { defineComponent } from "vue";
import PlayerTemplate from "@/components/templates/PlayerTemplate.vue";
import { Score } from "@/models/score";

export default defineComponent({
  name: "ShmupPlayer",
  components: { PlayerTemplate },
  async created() {
    this.loading = true;
    this.scores = await getScoresByShmupPlayer(+this.$route.params.id);
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      scores: [] as Score[],
    };
  },
  methods: {
    goToGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
    goToPlatform(platform) {
      this.$router.push(`/platform/${platform.name}`);
    },
    goToScore(score) {
      this.$router.push(`/score/${score.id}`);
    },
  },
});
</script>
