<template>
  <add-score-template
    v-if="score && game"
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
  async created() {
    await Promise.all([
      this.$store.dispatch("fetchScore", this.$route.params.scoreId),
      this.$store.dispatch("fetchGame", this.$route.params.gameId),
    ]);
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
    async onEditScore(score) {
      await this.$store.dispatch("editScore", score);
      this.step = 2;
    },
  },
});
</script>
