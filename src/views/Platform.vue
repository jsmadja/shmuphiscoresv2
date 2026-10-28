<template>
  <platform-template
    :platform-title="platformTitle"
    :games="games"
    :loading="loading"
    @selectGame="goToGamePage"
  />
</template>

<script lang="ts">
import PlatformTemplate from "@/components/templates/PlatformTemplate.vue";
import { Game } from "@/models/game";
import Vue from "vue";
import { mapGetters } from "vuex";
import { api } from "@/api";

export default Vue.extend({
  name: "Platform",
  data: () => ({
    games: [] as Game[],
    loading: true,
  }),
  components: { PlatformTemplate },
  computed: {
    ...mapGetters(["platform"]),
    platformTitle() {
      return this.$route.params.platformTitle;
    },
  },
  created() {
    fetch(`${api}/platforms/${this.platformTitle}/games`)
      .then((response) => response.json())
      .then((games: Game[]) => {
        this.games = games;
        this.loading = false;
      });
  },
  methods: {
    goToGamePage(game: Game) {
      this.$router.push(`/games/${game.id}`);
    },
    onSelectPlatform(platform) {
      this.$router.push({
        name: "Platform",
        params: { platformTitle: platform.name },
      });
    },
  },
});
</script>

<style scoped></style>
