<template>
  <compare-scores-template
    :players="players"
    :versus="versus"
    :currentUserId="user.id"
    :loading="loading"
    @selectPlayer1="onSelectPlayer1"
    @selectPlayer2="onSelectPlayer2"
    @goToGame="onGoToGame"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import CompareScoresTemplate from "@/components/templates/CompareScoresTemplate.vue";
import { api } from "@/api";
import store from "@/store";

export default Vue.extend({
  name: "CompareScores.vue",
  components: { CompareScoresTemplate },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchPlayers").then(() => (this.loading = false));
  },
  mounted() {
    this.player1 = this.user.id;
  },
  data() {
    return {
      player1: null,
      player2: null,
      versus: [],
      loading: true,
    };
  },
  beforeRouteEnter(from, to, next) {
    const _window: typeof window & { Store?: typeof store } = window;
    if (_window.Store) {
      return _window.Store.dispatch("fetchUser").then(() => next());
    }
    next();
  },
  computed: {
    ...mapGetters(["players", "user"]),
  },
  methods: {
    onGoToGame(row) {
      this.$router.push(`/games/${row.game.id}`);
    },
    onSelectPlayer1(player) {
      this.player1 = player;
      this.fetchVersus();
    },
    onSelectPlayer2(player) {
      this.player2 = player;
      this.fetchVersus();
    },
    fetchVersus() {
      if (this.player1 && this.player2) {
        this.loading = true;
        fetch(`${api}/players/${this.player1}/versus/${this.player2}`)
          .then((response) => response.json())
          .then((versus) => (this.versus = versus.comparisons))
          .then(() => (this.loading = false));
      }
    },
  },
});
</script>
