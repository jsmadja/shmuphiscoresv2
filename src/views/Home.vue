<template>
  <div>
    <home-template
      :lastScores="lastScores"
      :myLastScores="myLastScores"
      :lastScoresLoading="lastScoresLoading"
      :myLastScoresLoading="myLastScoresLoading"
      @goToGame="goToGame"
      @goToPlatform="goToPlatform"
      @goToPlayer="goToPlayer"
      @addScore="addScore"
      @editScore="editScore"
    />
  </div>
</template>

<script lang="ts">
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { mapGetters } from "vuex";
import Vue from "vue";

function defaultSetting(setting) {
  if (setting && setting.id) {
    return setting.id;
  }
  return "";
}

export default Vue.extend({
  name: "Home",
  components: {
    HomeTemplate,
  },
  data: () => ({
    lastScoresLoading: true,
  }),
  created() {
    this.$store
      .dispatch("fetchLastScores")
      .then(() => (this.lastScoresLoading = false));
  },
  computed: {
    ...mapGetters(["lastScores", "myLastScores", "myLastScoresLoading"]),
  },
  methods: {
    goToGame(game) {
      this.$router.push(`/game/${game.id}`);
    },
    goToPlatform(platformName) {
      this.$router.push(`/platform/${platformName}`);
    },
    goToPlayer(player) {
      this.$router.push(`/players/${player.id}`);
    },
    addScore(score) {
      this.$router.push(
        `/game/${score.game.id}/score?mode=${defaultSetting(
          score.mode
        )}&difficulty=${defaultSetting(
          score.difficulty
        )}&stage=${defaultSetting(score.stage)}&ship=${defaultSetting(
          score.ship
        )}&platform=${score.platform.id}`
      );
    },
    editScore(score) {
      this.$router.push(`/game/${score.game.id}/scores/${score.id}/edit`);
    },
  },
});
</script>
