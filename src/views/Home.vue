<template>
  <div>
    <home-template
      :lastScores="lastScores"
      :myLastScores="myLastScores"
      :lastScoresLoading="lastScoresLoading"
      :myLastScoresLoading="myLastScoresLoading"
      @goToGame="(game) => goToGame(game)"
    />
  </div>
</template>

<script lang="ts">
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { mapGetters } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {
    HomeTemplate,
  },
  data: () => ({
    myLastScoresLoading: false,
    lastScoresLoading: true,
  }),
  created() {
    this.$store
      .dispatch("fetchLastScores")
      .then(() => (this.lastScoresLoading = false));
  },
  computed: {
    ...mapGetters(["lastScores", "myLastScores"]),
  },
  methods: {
    goToGame(game) {
      console.log(game);
      this.$router.push(`/game/${game.id}`);
    },
  },
});
</script>
