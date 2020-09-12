<template>
  <games-template
    title="Games"
    :games="games"
    :loading="loading"
    @selectGame="onSelectGame"
  />
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import GamesTemplate from "@/components/templates/GamesTemplate";

export default Vue.extend({
  title: "Games",
  components: { GamesTemplate },
  data: () => ({ loading: false }),
  created() {
    this.loading = true;
    this.$store.dispatch("fetchGames").then(() => (this.loading = false));
  },
  computed: {
    ...mapGetters(["games"]),
  },
  methods: {
    onSelectGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
  },
});
</script>
