<template>
  <GameTemplate
    v-if="game"
    :game="game"
    :rankings="rankings"
    :current-player-id="user.id"
    @selectPlatform="onSelectPlatform"
    @configureGame="onConfigureGame"
  />
</template>

<script>
import GameTemplate from "@/components/templates/GameTemplate";
import Vue from "vue";
import { mapGetters } from "vuex";

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
    onConfigureGame() {
      this.$router.push(`/game/${this.game.id}/edit`);
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
