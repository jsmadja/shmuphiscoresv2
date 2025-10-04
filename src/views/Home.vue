<template>
  <home-template
    :lastScores="lastScores"
    :myLastScores="myLastScores"
    :lastScoresLoading="lastScoresLoading"
    :myLastScoresLoading="myLastScoresLoading"
    :user="user"
    @goToGame="goToGame"
    @goToPlatform="goToPlatform"
    @goToPlayer="goToPlayer"
    @addScore="addScore"
    @editScore="editScore"
    @goToScore="goToScore"
  />
</template>

<script lang="ts">
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import { goToScore } from "@/router/routes";

function defaultSetting(setting) {
  if (setting && setting.id) {
    return setting.id;
  }
  return "";
}

export default defineComponent({
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
    ...mapGetters([
      "user",
      "lastScores",
      "myLastScores",
      "myLastScoresLoading",
    ]),
  },
  methods: {
    goToGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
    goToPlatform(platformName) {
      this.$router.push(`/platform/${platformName}`);
    },
    goToPlayer(player) {
      this.$router.push(`/players/${player.id}`);
    },
    addScore(score) {
      this.$router.push(
        `/games/${score.game.id}/score?mode=${defaultSetting(
          score.mode
        )}&difficulty=${defaultSetting(
          score.difficulty
        )}&stage=${defaultSetting(score.stage)}&ship=${defaultSetting(
          score.ship
        )}&platform=${score.platform.id}`
      );
    },
    editScore(score) {
      this.$router.push(`/games/${score.game.id}/scores/${score.id}/edit`);
    },
    goToScore(score) {
      goToScore(score);
    },
  },
});
</script>
