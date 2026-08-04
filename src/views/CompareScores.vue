<template>
  <compare-scores-template
    v-if="user"
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
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import CompareScoresTemplate from "@/components/templates/CompareScoresTemplate.vue";
import { api } from "@/api";

export default defineComponent({
  name: "CompareScores.vue",
  components: { CompareScoresTemplate },
  created() {
    Promise.all([
      this.$store.dispatch("fetchUser"),
      this.$store.dispatch("fetchPlayers"),
    ]).then(() => {
      this.player1 = this.user.id;
      this.loading = false;
    });
  },
  data() {
    return {
      player1: null,
      player2: null,
      versus: [],
      loading: true,
    };
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
    async fetchVersus() {
      if (this.player1 && this.player2) {
        this.loading = true;
        const response = await fetch(
          `${api}/players/${this.player1}/versus/${this.player2}`
        );
        const versus = await response.json();
        this.versus = versus.comparisons;
        this.loading = false;
      }
    },
  },
});
</script>
