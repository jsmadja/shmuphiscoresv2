<template>
  <EditGameTemplate
    :game="game"
    :platforms="platformNames"
    @copyForumCode="onCopyForumCode"
    @goToGamePage="onGoToGamePage"
    @createMode="onCreateMode"
    @createDifficulty="onCreateDifficulty"
    @createStage="onCreateStage"
    @createShip="onCreateShip"
    @addPlatforms="onAddPlatforms"
  />
</template>

<script>
import EditGameTemplate from "@/components/templates/EditGameTemplate";
import Vue from "vue";
import { mapGetters } from "vuex";
import _ from "lodash";

export default Vue.extend({
  name: "EditGame",
  components: { EditGameTemplate },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchPlatforms");
    this.$store.dispatch("fetchGame", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["game", "platforms"]),
    platformNames: function () {
      return _(this.platforms)
        .orderBy(["games"], ["desc"])
        .map((p) => p.title)
        .value();
    },
  },
  methods: {
    onCopyForumCode() {
      this.$store.dispatch("showSuccessToast", "Copied!");
    },
    onGoToGamePage() {
      this.$router.push(`/games/${this.game.id}`);
    },
    onCreateMode(mode) {
      this.$store.dispatch("createMode", { game: this.game, mode });
    },
    onCreateDifficulty(difficulty) {
      this.$store.dispatch("createDifficulty", { game: this.game, difficulty });
    },
    onCreateShip(ship) {
      this.$store.dispatch("createShip", { game: this.game, ship });
    },
    onCreateStage(stage) {
      this.$store.dispatch("createStage", { game: this.game, stage });
    },
    onAddPlatforms(platforms) {
      this.$store.dispatch("createPlatforms", { game: this.game, platforms });
    },
  },
});
</script>
