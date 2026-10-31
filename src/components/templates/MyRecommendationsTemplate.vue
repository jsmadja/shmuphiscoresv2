<template>
  <div class="k-container k-page">
    <div>
      <p class="k-kicker">&gt; SELECT YOUR NEXT STAGE</p>
      <h1>Your next runs</h1>
      <p class="k-page__lead">
        Picked from your scores and the games you haven't tried yet.
      </p>
    </div>

    <p v-if="pendingRecommendations.length > 0" class="k-kicker reco-loading">
      ANALYSING YOUR SCORES…
    </p>

    <section v-for="group in groups" :key="group.title" class="reco-group">
      <h2 class="k-page__group">{{ group.title }}</h2>
      <recommendation-grid
        :types="group.types"
        :recommendations="myRecommendations"
        :pending="pendingRecommendations"
        @goToGame="goToGame"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import RecommendationGrid from "../organisms/RecommendationGrid.vue";
import { Game } from "@/models/game";
import { RecommendationType, Recommendations } from "@/models/recommendations";

const allGroups: Array<{ title: string; types: RecommendationType[] }> = [
  {
    title: "Expand your collection",
    types: ["unplayedMode", "unplayedDifficulty", "unplayedGame"],
  },
  {
    title: "Climb the leaderboards",
    types: [
      "oldestScoredGame",
      "latestScoredGame",
      "nearestScoredGame",
      "farestScoredGame",
    ],
  },
];

export default Vue.extend({
  name: "MyRecommendationsTemplate",
  components: { RecommendationGrid },
  props: {
    myRecommendations: {
      type: Object as PropType<Partial<Recommendations>>,
      default: () => ({}),
    },
    pendingRecommendations: {
      type: Array as PropType<RecommendationType[]>,
      default: () => [],
    },
  },
  methods: {
    goToGame(game: Game) {
      this.$emit("goToGame", game);
    },
  },
  computed: {
    // Groups with at least one recommendation, loaded or still loading
    groups(): Array<{ title: string; types: RecommendationType[] }> {
      return allGroups.filter((group) =>
        group.types.some(
          (type) =>
            this.pendingRecommendations.includes(type) ||
            this.myRecommendations[type]
        )
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.reco-loading {
  margin-bottom: -8px;
}

.reco-group {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
