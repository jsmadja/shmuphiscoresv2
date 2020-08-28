<template>
  <div>
    <home-template
      :lastScores="lastScores"
      :myLastScores="myLastScores"
      :lastScoresLoading="lastScoresLoading"
      :myLastScoresLoading="myLastScoresLoading"
    />
  </div>
</template>

<script lang="ts">
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { mapGetters } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {
    HomeTemplate,
  },
  data: () => ({
    myLastScoresLoading: true,
    lastScoresLoading: true,
  }),
  created() {
    this.$store
      .dispatch("fetchLastScores")
      .then(() => (this.lastScoresLoading = false));
    this.$store
      .dispatch("fetchMyLastScores")
      .then(() => (this.myLastScoresLoading = false));
  },
  computed: {
    ...mapGetters(["lastScores", "myLastScores"]),
  },
});
</script>
