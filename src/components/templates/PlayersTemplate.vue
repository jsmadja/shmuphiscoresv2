<template>
  <div class="k-container k-page">
    <div class="k-page__head">
      <div>
        <h1>
          Players
          <span class="k-score k-page__count">{{ players.length || "" }}</span>
        </h1>
        <p class="k-page__lead">The shmup.com community on the leaderboards</p>
      </div>
      <div class="k-page__tools">
        <label for="players-search" class="k-sr-only">Find a player</label>
        <input
          id="players-search"
          v-model="search"
          type="search"
          class="k-input"
          placeholder="Find a player"
          @input="limit = 120"
        />
      </div>
    </div>

    <nav v-if="!search" aria-label="Jump to letter" class="k-letters">
      <button
        v-for="l in letters"
        :key="l.label"
        type="button"
        class="k-letters__item players-letter"
        :class="{ 'k-letters__item--current': l.label === currentLetter }"
        :aria-pressed="l.label === currentLetter ? 'true' : 'false'"
        :disabled="l.count === 0"
        @click="selectLetter(l.label)"
      >
        {{ l.label }}
        <span class="k-letters__count">{{ l.count }}</span>
      </button>
    </nav>

    <h2 class="k-page__group">
      {{ search ? `“${search}”` : currentLetter }}
      <span class="k-page__group-count">· {{ filtered.length }} players</span>
    </h2>

    <div v-if="players.length === 0" class="k-panel players-list">
      <v-skeleton-loader
        v-for="i in 8"
        :key="i"
        type="list-item"
      ></v-skeleton-loader>
    </div>
    <div v-else class="k-panel players-list">
      <a
        v-for="player in visible"
        :key="player.id"
        :href="`/players/${player.id}`"
        class="players-list__item"
        :class="{ 'players-list__item--me': player.id == currentPlayerId }"
        @click.prevent="$emit('goToPlayer', player)"
      >
        <span class="players-list__initial" aria-hidden="true">{{
          initial(player.name)
        }}</span>
        <span class="players-list__name">{{ player.name }}</span>
      </a>
    </div>

    <div v-if="filtered.length > visible.length" class="k-page__more">
      <button type="button" class="k-btn k-btn--ghost" @click="limit += 120">
        Show {{ Math.min(120, filtered.length - visible.length) }} more
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const LETTERS = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface PlayerItem {
  id: number;
  name: string;
}

function letterOf(name: string): string {
  const first = (name || "").trim().charAt(0).toUpperCase();
  return first >= "A" && first <= "Z" ? first : "#";
}

export default Vue.extend({
  name: "PlayersTemplate",
  props: {
    players: { type: Array, default: () => [] },
    currentPlayerId: [Number, String],
  },
  data() {
    return {
      search: "",
      letter: "",
      limit: 120,
    };
  },
  computed: {
    sorted(): PlayerItem[] {
      return [...(this.players as PlayerItem[])].sort((a, b) =>
        a.name.trim().localeCompare(b.name.trim(), undefined, {
          sensitivity: "base",
        })
      );
    },
    letters(): Array<{ label: string; count: number }> {
      const counts: Record<string, number> = {};
      this.sorted.forEach((p) => {
        const l = letterOf(p.name);
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
    filtered(): PlayerItem[] {
      if (this.search) {
        const q = this.search.toLowerCase();
        return this.sorted.filter((p) => p.name.toLowerCase().includes(q));
      }
      return this.sorted.filter((p) => letterOf(p.name) === this.currentLetter);
    },
    visible(): PlayerItem[] {
      return this.filtered.slice(0, this.limit);
    },
  },
  methods: {
    selectLetter(letter: string) {
      this.letter = letter;
      this.limit = 120;
    },
    initial(name: string): string {
      return (name || "?").trim().charAt(0).toUpperCase();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.players-letter {
  min-width: 54px;
  height: 52px;
}

.players-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0 20px;
  padding: 10px 18px;

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 42px;
    border-bottom: 1px solid var(--k-track);
    color: var(--k-text) !important;
    text-decoration: none !important;

    &:hover {
      color: var(--k-accent) !important;
    }

    &--me {
      color: var(--k-accent) !important;
      font-weight: 700;
    }
  }

  &__initial {
    width: 26px;
    height: 26px;
    flex: none;
    border-radius: 4px;
    background: var(--k-track);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: $font-score;
    font-size: 18px;
    color: var(--k-accent);
  }

  &__name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
