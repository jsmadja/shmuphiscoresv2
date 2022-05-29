<template>
  <score-template
    :history="history"
    :can-edit="canEdit()"
    @goToEditScore="goToEditScore"
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
      if (!this.user && this.history && this.history[0].player) {
        return false;
      }
      return this.user.id === this.history[0].player.id;
    },
    goToEditScore(score) {
      this.$router.push(`/games/${score.game.id}/scores/${score.id}/edit`);
    },
  },
});
</script>
