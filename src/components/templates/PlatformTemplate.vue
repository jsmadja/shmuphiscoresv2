<template>
  <games-template
    :title="platformTitle"
    :kicker="platformName ? `> PLATFORM · ${platformName}` : '> PLATFORM'"
    :lead="lead"
    :games="games"
    :loading="loading"
    :remember-search="false"
    @selectGame="(game) => $emit('selectGame', game)"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { platformNames } from "@/models/platforms";
import GamesTemplate from "@/components/templates/GamesTemplate.vue";

export default Vue.extend({
  name: "PlatformTemplate",
  props: {
    platformTitle: String,
    games: { type: Array, default: () => [] },
    loading: Boolean,
  },
  components: { GamesTemplate },
  computed: {
    platformName(): string {
      return (platformNames.get(this.platformTitle) || "").toUpperCase();
    },
    lead(): string {
      return `Every shoot'em up with a leaderboard on ${
        platformNames.get(this.platformTitle) || this.platformTitle
      }`;
    },
  },
});
</script>
