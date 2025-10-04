<template>
  <platform-template
    :platform-title="platformTitle"
    :games="games"
    @selectGame="goToGamePage"
    @selectPlatform="onSelectPlatform"
  />
</template>

<script lang="ts">
import PlatformTemplate from "@/components/templates/PlatformTemplate.vue";
import { Game } from "@/models/game";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { api } from "@/api";

export default defineComponent({
  name: "Platform",
  data: () => ({
    games: [] as Game[],
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
      .then((games: Game[]) => (this.games = games));
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
