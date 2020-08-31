<template>
  <add-score-template
    :game="game"
    :step="step"
    :score="score"
    @copy="onCopy"
    @createScore="onCreateScore"
    @editScore="onEditScore"
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
    };
  },
  beforeRouteEnter(to, from, next) {
    const $store = (window as any).Store;
    Promise.all([
      $store.dispatch("fetchScore", to.params.scoreId),
      $store.dispatch("fetchGame", to.params.gameId),
    ]).then(() => next());
  },
  computed: {
    ...mapGetters(["game", "score"]),
  },
  methods: {
    onCopy() {
      this.$store.dispatch("showSuccessToast", "Copied!");
      this.step = 3;
    },
    onGoToGamePage() {
      this.$router.push(`/game/${this.game.id}`);
    },
    onGoToGameEdit() {
      this.$router.push(`/game/${this.game.id}/edit`);
    },
    onCreateScore(score) {
      this.$store
        .dispatch("createScore", score)
        .then((score) => (this.score = score))
        .then(() => (this.step = 2));
    },
    onEditScore(score) {
      this.$store
        .dispatch("editScore", score)
        .then((score) => (this.score = score))
        .then(() => (this.step = 2));
    },
  },
});
</script>
