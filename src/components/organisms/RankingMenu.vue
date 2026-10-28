<template>
  <nav aria-label="Leaderboards" class="ranking-menu k-panel">
    <p class="ranking-menu__title">LEADERBOARDS</p>
    <ul class="ranking-menu__list">
      <li v-for="(ranking, i) in rankings" :key="`menu-ranking-${i}`">
        <button
          v-if="ranking"
          type="button"
          class="ranking-menu__item"
          :class="{ 'ranking-menu__item--current': isActive(i) }"
          :aria-current="isActive(i) ? 'true' : null"
          @click="() => $emit('goTo', `#ranking-${i}`)"
        >
          {{ label(ranking) || "Leaderboard" }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RankingMenu",
  props: ["intersectedRanking", "rankings"],
  methods: {
    isActive(i: number): boolean {
      return !!this.intersectedRanking[`intersect-ranking-${i}`];
    },
    label(ranking): string {
      return [
        ranking.mode && ranking.mode.name,
        ranking.difficulty && ranking.difficulty.name,
      ]
        .filter(Boolean)
        .join(" · ");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.ranking-menu {
  position: sticky;
  top: 16px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding: 14px 10px;

  &__title {
    margin: 0 6px 8px;
    font-family: $font-score;
    font-size: 20px;
    letter-spacing: 0.1em;
    color: var(--k-accent);
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    width: 100%;
    text-align: left;
    padding: 8px 8px;
    border: 0;
    border-left: 3px solid transparent;
    border-radius: 0 4px 4px 0;
    background: transparent;
    color: var(--k-text2);
    font-family: $font-display;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.2;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: var(--k-accent);
    }

    &--current {
      border-left-color: var(--k-accent);
      background: var(--k-track);
      color: var(--k-accent);
    }
  }
}
</style>
