<template>
  <GamesTemplate title="My Games" :games="myGames" @selectGame="onSelectGame" />
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import GamesTemplate from "@/components/templates/GamesTemplate";

export default Vue.extend({
  title: "MyGames",
  components: { GamesTemplate },
  created() {
    this.$store.dispatch("fetchMyGames");
  },
  computed: {
    ...mapGetters(["myGames"]),
  },
  methods: {
    onSelectGame(game) {
      this.$router.push(`/game/${game.id}`);
    },
  },
});
</script>
