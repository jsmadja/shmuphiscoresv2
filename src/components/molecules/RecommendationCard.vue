<template>
  <article class="reco-card k-panel">
    <img
      v-if="game.cover"
      :src="coverUrl(game.cover)"
      :alt="`${game.title} cover`"
      loading="lazy"
      class="reco-card__cover"
    />
    <div
      v-else
      class="reco-card__cover reco-card__cover--empty"
      aria-hidden="true"
    >
      {{ initials }}
    </div>
    <div class="reco-card__body">
      <span class="reco-card__kind">{{ title.toUpperCase() }}</span>
      <span class="reco-card__game">{{ game.title }}</span>
      <span class="reco-card__text">{{ content }}</span>
      <div class="reco-card__actions">
        <button
          type="button"
          class="k-btn k-btn--cta"
          @click="$emit('goToGame', game)"
        >
          Leaderboard
        </button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { coverUrl } from "@/coverUrl";

export default Vue.extend({
  name: "RecommendationCard",
  props: ["title", "content", "game"],
  computed: {
    initials(): string {
      return (this.game.title || "")
        .replace(/[^A-Za-z0-9 ]/g, "")
        .split(/\s+/)
        .slice(0, 2)
        .map((w: string) => w.charAt(0))
        .join("")
        .toUpperCase();
    },
  },
  methods: {
    coverUrl,
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.reco-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__cover {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;

    &--empty {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--k-inset);
      font-family: $font-score;
      font-size: 64px;
      color: var(--k-accent);
    }
  }

  &__body {
    padding: 14px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1 1 auto;
  }

  &__kind {
    font-family: $font-score;
    font-size: 19px;
    letter-spacing: 0.08em;
    color: var(--k-accent);
  }

  &__game {
    font-family: $font-display;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.1;
  }

  &__text {
    color: var(--k-text2);
    font-size: 14px;
    line-height: 1.5;
    flex: 1 1 auto;
  }

  &__actions {
    margin-top: 6px;

    .k-btn {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
