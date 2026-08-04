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
import { defineComponent } from "vue";
import GamesTemplate from "@/components/templates/GamesTemplate";

export default defineComponent({
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
