<template>
  <GamesTemplate :games="games" @selectGame="onSelectGame" />
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import GamesTemplate from "@/components/templates/GamesTemplate";

export default Vue.extend({
  title: "Games",
  components: { GamesTemplate },
  created() {
    this.$store.dispatch("fetchGames");
  },
  computed: {
    ...mapGetters(["games"]),
  },
  methods: {
    onSelectGame(game) {
      this.$router.push(`/game/${game.id}`);
    },
  },
});
</script>
