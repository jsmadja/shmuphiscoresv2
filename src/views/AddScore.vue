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
    :previous-score="previousScore"
    @copy="onCopy"
    @createScore="onCreateScore"
    @goToGamePage="onGoToGamePage"
    @goToGameEdit="onGoToGameEdit"
    @loadPreviousScore="onLoadPreviousScore"
  />
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Vue from "vue";
import AddScoreTemplate from "@/components/templates/AddScoreTemplate.vue";
import { fetchPreviousUserScoreOfGames } from "@/repository";
import { Score } from "@/models/score";

export default Vue.extend({
  components: {
    AddScoreTemplate,
  },
  data(): {
    previousScore: Score | null;
    step: number | null;
    mode: number | null;
    difficulty: number | null;
    platform: number | null;
    ship: number | null;
    stage: number | null;
    score: Score | null;
  } {
    return {
      step: 1,
      mode: null,
      difficulty: null,
      platform: null,
      ship: null,
      stage: null,
      score: null,
      previousScore: null,
    };
  },
  created() {
    fetchPreviousUserScoreOfGames(+this.$route.params.id).then((scores) => {
      if (scores.length > 0) {
        const previousScore = scores[0];
        delete previousScore.id;
        delete previousScore.inp;
        delete previousScore.photo;
        delete previousScore.replay;
        this.previousScore = previousScore;
      } else {
        this.previousScore = null;
      }
    });

    this.$store.dispatch("fetchGame", this.$route.params.id);
    const { mode, difficulty, platform, ship, stage } = this.$route.query;
    this.mode = parseInt(mode as string);
    this.difficulty = parseInt(difficulty as string);
    this.platform = parseInt(platform as string);
    this.ship = parseInt(ship as string);
    this.stage = parseInt(stage as string);
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
    async onCreateScore(score) {
      this.score = await this.$store.dispatch("createScore", score);
      this.step = 2;
    },
    onLoadPreviousScore() {
      this.score = this.previousScore;
    },
  },
});
</script>
