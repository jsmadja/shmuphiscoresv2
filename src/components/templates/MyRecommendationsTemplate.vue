<template>
  <div class="k-container k-page">
    <div>
      <p class="k-kicker">&gt; SELECT YOUR NEXT STAGE</p>
      <h1>Your next runs</h1>
      <p class="k-page__lead">
        Picked from your scores and the games you haven't tried yet.
      </p>
    </div>

    <template v-if="myRecommendationsLoading">
      <p class="k-kicker reco-loading">ANALYSING YOUR SCORES…</p>
      <div class="reco-grid">
        <v-skeleton-loader
          v-for="index in 7"
          :key="index"
          type="card"
        ></v-skeleton-loader>
      </div>
    </template>

    <template v-else>
      <section v-for="group in groups" :key="group.title" class="reco-group">
        <h2 class="k-page__group">{{ group.title }}</h2>
        <div class="reco-grid">
          <recommendation-card
            v-for="(recommendation, i) in group.items"
            :key="i"
            @goToGame="goToGame"
            :title="recommendation.title"
            :content="recommendation.content"
            :game="recommendation.target['game']"
          />
        </div>
      </section>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RecommendationCard from "../molecules/RecommendationCard.vue";
import { Game } from "@/models/game";

export default Vue.extend({
  name: "MyRecommendationsTemplate",
  components: { RecommendationCard },
  props: ["myRecommendations", "myRecommendationsLoading"],
  methods: {
    goToGame(game: Game) {
      this.$emit("goToGame", game);
    },
  },
  computed: {
    groups(): Array<{ title: string; items: Array<{ target?: unknown }> }> {
      const all = this.recommendations as Array<{ target?: unknown }>;
      return [
        {
          title: "Expand your collection",
          items: all.slice(0, 3).filter((r) => r.target),
        },
        {
          title: "Climb the leaderboards",
          items: all.slice(3).filter((r) => r.target),
        },
      ].filter((g) => g.items.length > 0);
    },
    recommendations: function (): Array<{
      title: string;
      target?: { game?: unknown };
      content: string;
    }> {
      const recommendations = this.myRecommendations;
      const unplayedDifficulty = recommendations.unplayedDifficulty;
      const unplayedMode = recommendations.unplayedMode;
      const unplayedGame = recommendations.unplayedGame;
      return [
        {
          title: "Try a new mode",
          target: unplayedMode,
          content: unplayedMode
            ? `Play ${unplayedMode.mode.name} mode of ${unplayedMode.game.title}.`
            : "",
        },
        {
          title: "Try a new difficulty",
          target: unplayedDifficulty,
          content: unplayedDifficulty
            ? `Play ${unplayedDifficulty.difficulty.name} difficulty of ${unplayedDifficulty.game.title}.`
            : "",
        },
        {
          title: "Discover a new game",
          target: unplayedGame,
          content: unplayedGame
            ? `Add your first score on ${unplayedGame.game.title}.`
            : "",
        },
        {
          title: "Long time no see",
          target: recommendations.oldestScoredGame,
          content: recommendations.oldestScoredGame
            ? `Remember, you've scored it, long time ago ... ${recommendations.oldestScoredGame.game.title}.`
            : "",
        },
        {
          title: "Try again, do your best",
          target: recommendations.latestScoredGame,
          content: recommendations.latestScoredGame
            ? `Keep going on ${recommendations.latestScoredGame.game.title}.`
            : "",
        },
        {
          title: "Just a couple more shots",
          target: recommendations.nearestScoredGame,
          content: recommendations.nearestScoredGame
            ? `The next place is at hand, play ${recommendations.nearestScoredGame.game.title}.`
            : "",
        },
        {
          title: "Learning curve is high",
          target: recommendations.farestScoredGame,
          content: recommendations.farestScoredGame
            ? `You're far far from the next place, play ${recommendations.farestScoredGame.game.title}.`
            : "",
        },
      ];
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

.reco-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
</style>
