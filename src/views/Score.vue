<template>
  <score-template :history="history" />
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/api";
import ScoreTemplate from "@/components/templates/ScoreTemplate.vue";

export default Vue.extend({
  components: { ScoreTemplate },
  data: () => ({
    history: [],
  }),
  created() {
    fetch(`${api}/scores/${this.$route.params.id}/history`)
      .then((response) => response.json())
      .then((history) => (this.history = history));
  },
});
</script>
