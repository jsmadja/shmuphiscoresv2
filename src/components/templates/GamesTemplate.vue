<template>
  <div class="k-container k-page">
    <div class="k-page__head">
      <div>
        <p v-if="kicker" class="k-kicker">{{ kicker }}</p>
        <h1>
          {{ title }}
          <span class="k-score k-page__count">{{ games.length || "" }}</span>
        </h1>
        <p class="k-page__lead">{{ subtitle }}</p>
      </div>
      <div class="k-page__tools">
        <label for="games-search" class="k-sr-only">Search a game</label>
        <input
          id="games-search"
          v-model="search"
          type="search"
          class="k-input"
          placeholder="Search a game"
          @input="onSearch(search)"
        />
      </div>
    </div>

    <nav v-if="!search" aria-label="Jump to letter" class="k-letters">
      <button
        v-for="l in letters"
        :key="l.label"
        type="button"
        class="k-letters__item"
        :class="{ 'k-letters__item--current': l.label === currentLetter }"
        :aria-pressed="l.label === currentLetter ? 'true' : 'false'"
        :disabled="l.count === 0"
        @click="selectLetter(l.label)"
      >
        {{ l.label }}
      </button>
    </nav>

    <h2 class="k-page__group">
      {{ search ? `“${search}”` : currentLetter }}
      <span class="k-page__group-count">· {{ filtered.length }} games</span>
    </h2>

    <div v-if="loading" class="k-cover-grid">
      <v-skeleton-loader
        v-for="i in 12"
        :key="i"
        type="image"
        height="220"
      ></v-skeleton-loader>
    </div>
    <div v-else class="k-cover-grid">
      <a
        v-for="game in visible"
        :key="game.id"
        :href="`/games/${game.id}`"
        class="k-cover-card"
        @click.prevent="$emit('selectGame', game)"
      >
        <img
          v-if="game.cover"
          :src="coverUrl(game.cover)"
          :alt="`${game.title} cover`"
          loading="lazy"
          class="k-cover-card__img"
        />
        <span v-else class="k-cover-card__img k-cover-card__img--empty">{{
          initials(game.title)
        }}</span>
        <span class="k-cover-card__title">{{ game.title }}</span>
        <span v-if="platformNames(game)" class="k-cover-card__meta">{{
          platformNames(game)
        }}</span>
      </a>
    </div>

    <div v-if="filtered.length > visible.length" class="k-page__more">
      <button type="button" class="k-btn k-btn--ghost" @click="limit += 48">
        Show {{ Math.min(48, filtered.length - visible.length) }} more
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { coverUrl } from "@/coverUrl";

const SESSION_STORAGE_GAME_SEARCH = "game-search";
const LETTERS = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface GameItem {
  id: number;
  title: string;
  cover?: string;
  platforms?: Array<{ name: string }>;
}

function letterOf(title: string): string {
  const first = (title || "").trim().charAt(0).toUpperCase();
  return first >= "A" && first <= "Z" ? first : "#";
}

export default Vue.extend({
  name: "GamesTemplate",
  props: {
    title: String,
    kicker: String,
    lead: String,
    games: { type: Array, default: () => [] },
    loading: Boolean,
    rememberSearch: { type: Boolean, default: true },
  },
  data() {
    return {
      search:
        (this.rememberSearch &&
          sessionStorage.getItem(SESSION_STORAGE_GAME_SEARCH)) ||
        "",
      letter: "",
      limit: 48,
    };
  },
  computed: {
    subtitle(): string {
      if (this.lead) {
        return this.lead;
      }
      return this.title === "My Games"
        ? "Every game you have at least one score on"
        : "Every shoot'em up on the leaderboards";
    },
    letters(): Array<{ label: string; count: number }> {
      const counts: Record<string, number> = {};
      (this.games as GameItem[]).forEach((g) => {
        const l = letterOf(g.title);
        counts[l] = (counts[l] || 0) + 1;
      });
      return LETTERS.map((label) => ({ label, count: counts[label] || 0 }));
    },
    currentLetter(): string {
      if (this.letter) {
        return this.letter;
      }
      const first = this.letters.find((l) => l.count > 0 && l.label !== "#");
      return first ? first.label : "A";
    },
    filtered(): GameItem[] {
      const games = this.games as GameItem[];
      if (this.search) {
        const q = this.search.toLowerCase();
        return games.filter((g) => g.title.toLowerCase().includes(q));
      }
      return games.filter((g) => letterOf(g.title) === this.currentLetter);
    },
    visible(): GameItem[] {
      return this.filtered.slice(0, this.limit);
    },
  },
  methods: {
    coverUrl,
    onSearch(search: string) {
      this.limit = 48;
      if (this.rememberSearch) {
        sessionStorage.setItem(SESSION_STORAGE_GAME_SEARCH, search);
      }
    },
    selectLetter(letter: string) {
      this.letter = letter;
      this.limit = 48;
    },
    initials(title: string): string {
      return title
        .replace(/[^A-Za-z0-9 ]/g, "")
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w.charAt(0))
        .join("")
        .toUpperCase();
    },
    platformNames(game: GameItem): string {
      if (!game.platforms || game.platforms.length === 0) {
        return "";
      }
      const names = game.platforms.map((p) => p.name);
      return names.length > 3
        ? `${names.slice(0, 3).join(" · ")} +${names.length - 3}`
        : names.join(" · ");
    },
  },
});
</script>
