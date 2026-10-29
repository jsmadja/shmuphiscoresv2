<template>
  <score-template
    :history="history"
    :score-id="$route.params.id"
    :can-edit="canEdit()"
    @goToEditScore="goToEditScore"
    @deleteScore="deleteScore"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/api";
import ScoreTemplate from "@/components/templates/ScoreTemplate.vue";
import { mapGetters } from "vuex";
import { Score } from "@/models/score";

export default Vue.extend({
  components: { ScoreTemplate },
  data: (): { history: Score[] } => {
    return {
      history: [],
    };
  },
  created() {
    fetch(`${api}/scores/${this.$route.params.id}/history`)
      .then((response) => response.json())
      .then((history) => (this.history = history));
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    canEdit() {
      const first = this.history[0];
      return !!(
        this.user &&
        first &&
        first.player &&
        this.user.id === first.player.id
      );
    },
    goToEditScore(score) {
      this.$router.push(`/games/${score.game.id}/scores/${score.id}/edit`);
    },
    async deleteScore(score: Score) {
      await this.$store.dispatch("deleteScore", score.id);
      this.$router.push("/");
    },
  },
});
</script>
