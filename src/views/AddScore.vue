<template>
  <add-score-template
    :game="game"
    :step="step"
    :mode="mode"
    :difficulty="difficulty"
    :ship="ship"
    :stage="stage"
    :platform="platform"
    :score="score"
    @copy="onCopy"
    @createScore="onCreateScore"
    @goToGamePage="onGoToGamePage"
    @goToGameEdit="onGoToGameEdit"
  />
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Vue from "vue";
import AddScoreTemplate from "@/components/templates/AddScoreTemplate.vue";

export default Vue.extend({
  components: {
    AddScoreTemplate,
  },
  data() {
    return {
      step: 1,
      mode: null,
      difficulty: null,
      platform: null,
      ship: null,
      stage: null,
      score: null,
    };
  },
  created() {
    this.$store.dispatch("fetchGame", this.$route.params.id);
    const { mode, difficulty, platform, ship, stage } = this.$route.query;
    const _this = this as any;
    _this.mode = parseInt(mode as string);
    _this.difficulty = parseInt(difficulty as string);
    _this.platform = parseInt(platform as string);
    _this.ship = parseInt(ship as string);
    _this.stage = parseInt(stage as string);
  },
  computed: {
    ...mapGetters(["game"]),
  },
  methods: {
    onCopy() {
      this.$store.dispatch("showSuccessToast", "Copied!");
      this.step = 3;
    },
    onGoToGamePage() {
      this.$router.push(`/games/${this.game.id}`);
    },
    onGoToGameEdit() {
      this.$router.push(`/games/${this.game.id}/edit`);
    },
    onCreateScore(score) {
      this.$store
        .dispatch("createScore", score)
        .then((score) => (this.score = score))
        .then(() => (this.step = 2));
    },
  },
});
</script>
