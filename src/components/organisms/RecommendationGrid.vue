<template>
  <div class="reco-grid">
    <template v-for="type in types">
      <v-skeleton-loader
        v-if="pending.includes(type)"
        :key="`pending-${type}`"
        type="card"
      ></v-skeleton-loader>
      <recommendation-card
        v-else-if="recommendations[type]"
        :key="type"
        :title="cards[type].title"
        :content="cards[type].content(recommendations[type])"
        :game="recommendations[type].game"
        @goToGame="$emit('goToGame', $event)"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import RecommendationCard from "../molecules/RecommendationCard.vue";
import {
  Recommendation,
  RecommendationType,
  Recommendations,
} from "@/models/recommendations";

const cards: Record<
  RecommendationType,
  { title: string; content: (recommendation: Recommendation) => string }
> = {
  unplayedMode: {
    title: "Try a new mode",
    content: (r) => `Play ${r.mode?.name} mode of ${r.game.title}.`,
  },
  unplayedDifficulty: {
    title: "Try a new difficulty",
    content: (r) => `Play ${r.difficulty?.name} difficulty of ${r.game.title}.`,
  },
  unplayedGame: {
    title: "Discover a new game",
    content: (r) => `Add your first score on ${r.game.title}.`,
  },
  oldestScoredGame: {
    title: "Long time no see",
    content: (r) =>
      `Remember, you've scored it, long time ago ... ${r.game.title}.`,
  },
  latestScoredGame: {
    title: "Try again, do your best",
    content: (r) => `Keep going on ${r.game.title}.`,
  },
  nearestScoredGame: {
    title: "Just a couple more shots",
    content: (r) => `The next place is at hand, play ${r.game.title}.`,
  },
  farestScoredGame: {
    title: "Learning curve is high",
    content: (r) => `You're far far from the next place, play ${r.game.title}.`,
  },
};

export default Vue.extend({
  name: "RecommendationGrid",
  components: { RecommendationCard },
  props: {
    // Recommendation types to show, in order
    types: { type: Array as PropType<RecommendationType[]>, required: true },
    recommendations: {
      type: Object as PropType<Partial<Recommendations>>,
      default: () => ({}),
    },
    // Types still loading, shown as skeletons
    pending: {
      type: Array as PropType<RecommendationType[]>,
      default: () => [],
    },
  },
  data: () => ({ cards }),
});
</script>

<style lang="scss" scoped>
.reco-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
</style>
