<template>
  <div class="k-container k-page">
    <div class="k-page__head">
      <div>
        <h1>
          Platforms
          <span class="k-score k-page__count">{{
            platforms.length || ""
          }}</span>
        </h1>
        <p class="k-page__lead">
          Original boards, emulation, consoles, computers and phones
        </p>
      </div>
      <div class="k-page__tools">
        <label for="platforms-search" class="k-sr-only">Filter platforms</label>
        <input
          id="platforms-search"
          v-model="search"
          type="search"
          class="k-input"
          placeholder="Filter platforms"
        />
        <div role="group" aria-label="Sort" class="k-segmented">
          <button
            type="button"
            class="k-segmented__item"
            :class="{ 'k-segmented__item--on': sort === 'games' }"
            :aria-pressed="sort === 'games' ? 'true' : 'false'"
            @click="sort = 'games'"
          >
            Most games
          </button>
          <button
            type="button"
            class="k-segmented__item"
            :class="{ 'k-segmented__item--on': sort === 'title' }"
            :aria-pressed="sort === 'title' ? 'true' : 'false'"
            @click="sort = 'title'"
          >
            A → Z
          </button>
        </div>
      </div>
    </div>

    <div v-if="platforms.length === 0" class="platforms-grid">
      <v-skeleton-loader
        v-for="i in 12"
        :key="i"
        type="list-item-two-line"
      ></v-skeleton-loader>
    </div>
    <div v-else class="platforms-grid">
      <a
        v-for="platform in platformRows"
        :key="platform.code"
        :href="`/platform/${platform.code}`"
        class="platform-card"
        @click.prevent="$emit('selectPlatform', platform)"
      >
        <span class="platform-card__top">
          <span class="platform-card__code">{{ platform.code }}</span>
          <span class="k-score platform-card__count">{{ platform.games }}</span>
        </span>
        <span class="platform-card__name">{{ platform.title }}</span>
        <span class="platform-card__track"
          ><span
            class="platform-card__bar"
            :style="{ width: barWidth(platform.games) }"
          ></span
        ></span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { platformNames, PlatformWithGameCount } from "@/models/platforms";

interface PlatformRow {
  code: string;
  title: string;
  games: number;
}

export default Vue.extend({
  name: "PlatformsTemplate",
  props: {
    platforms: { type: Array, default: () => [] },
  },
  data: () => ({
    search: "",
    sort: "games",
  }),
  computed: {
    platformRows(): PlatformRow[] {
      const q = this.search.toLowerCase();
      const rows = (this.platforms as PlatformWithGameCount[])
        .map((p) => ({
          code: p.title,
          title: platformNames.get(p.title) || p.title,
          games: p.games,
        }))
        .filter(
          (p) =>
            !q ||
            p.code.toLowerCase().includes(q) ||
            p.title.toLowerCase().includes(q)
        );
      return this.sort === "games"
        ? rows.sort((a, b) => b.games - a.games)
        : rows.sort((a, b) => a.code.localeCompare(b.code));
    },
    maxGames(): number {
      return Math.max(
        1,
        ...(this.platforms as PlatformWithGameCount[]).map((p) => p.games)
      );
    },
  },
  methods: {
    barWidth(games: number): string {
      return `${Math.max(2, Math.round((games / this.maxGames) * 100))}%`;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px;
}

.platform-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 14px 12px;
  border-radius: 8px;
  background: var(--k-surface);
  border: 1px solid var(--k-border);
  color: var(--k-text) !important;
  text-decoration: none !important;

  &:hover {
    border-color: var(--k-accent);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px;
  }

  &__code {
    font-family: $font-display;
    font-weight: 700;
    font-size: 19px;
    text-transform: uppercase;
  }

  &__count {
    font-size: 26px;
  }

  &__name {
    color: var(--k-muted);
    font-size: 12px;
  }

  &__track {
    height: 4px;
    margin-top: 4px;
    border-radius: 2px;
    background: var(--k-track);
  }

  &__bar {
    display: block;
    height: 4px;
    border-radius: 2px;
    background: var(--k-cta);
  }
}
</style>
