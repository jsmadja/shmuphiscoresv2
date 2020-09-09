<template>
  <game-template
    v-if="game"
    :game="game"
    :rankings="rankings"
    :user="user"
    @selectPlatform="onSelectPlatform"
    @goToPlayer="goToPlayer"
    @configureGame="onConfigureGame"
    @addScore="onAddScore"
  />
</template>

<script lang="ts">
import GameTemplate from "@/components/templates/GameTemplate.vue";
import { Ranking } from "@/models/ranking";
import Vue from "vue";
import { mapGetters } from "vuex";

const defaultSetting = (setting: Ranking, value) =>
  setting[value] ? setting[value].id || "" : "";

export default Vue.extend({
  name: "Game",
  components: { GameTemplate },
  computed: {
    ...mapGetters(["user", "game", "rankings"]),
  },
  created() {
    this.$store
      .dispatch("fetchGame", this.$route.params.id)
      .then(() => this.$store.dispatch("addViewedGame", this.game));
    this.$store.dispatch("fetchRankings", this.$route.params.id);
  },
  methods: {
    onSelectPlatform(platform) {
      this.$router.push(`/platform/${platform.name}`);
    },
    goToPlayer(player) {
      this.$router.push(`/players/${player.id}`);
    },
    onConfigureGame() {
      this.$router.push(`/games/${this.game.id}/edit`);
    },
    onAddScore({ ranking }) {
      this.$router.push(
        `/games/${this.game.id}/score?mode=${defaultSetting(
          ranking,
          "mode"
        )}&difficulty=${defaultSetting(ranking, "difficulty")}`
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.ranking-name {
  cursor: pointer;

  &.selected {
    border-left: solid 3px orange;
    padding-left: 5px;
  }
}
</style>
