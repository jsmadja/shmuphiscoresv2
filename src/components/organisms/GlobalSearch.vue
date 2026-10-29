<template>
  <div role="search" class="k-search" @focusout="onFocusOut">
    <label for="global-search" class="k-sr-only"
      >Search games and players</label
    >
    <v-icon small class="k-search__icon" aria-hidden="true">mdi-magnify</v-icon>
    <input
      id="global-search"
      ref="input"
      v-model="query"
      type="search"
      autocomplete="off"
      placeholder="Games, players…"
      class="k-search__input"
      role="combobox"
      aria-autocomplete="list"
      aria-controls="global-search-results"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-activedescendant="activeId"
      @focus="onFocus"
      @input="active = 0"
      @keydown.down.prevent="move(1)"
      @keydown.up.prevent="move(-1)"
      @keydown.enter.prevent="choose(results[active])"
      @keydown.esc="close"
    />
    <kbd v-if="!query" class="k-search__kbd" aria-hidden="true">/</kbd>

    <div
      v-if="open"
      id="global-search-results"
      class="k-search__panel"
      :style="panelStyle"
    >
      <ul v-if="results.length > 0" role="listbox" class="k-search__list">
        <template v-for="(result, i) in results">
          <li
            v-if="i === 0 || results[i - 1].kind !== result.kind"
            :key="`${result.kind}-title`"
            role="presentation"
            class="k-search__group"
          >
            <span>{{ result.kind === "game" ? "Games" : "Players" }}</span>
            <span>{{
              result.kind === "game" ? games.length : players.length
            }}</span>
          </li>
          <li
            :id="`global-search-${i}`"
            :key="`${result.kind}-${result.id}`"
            role="option"
            :aria-selected="i === active ? 'true' : 'false'"
            class="k-search__option"
            :class="{ 'k-search__option--active': i === active }"
            @mousedown.prevent="choose(result)"
            @mousemove="active = i"
          >
            <cover
              v-if="result.kind === 'game'"
              :url="result.cover"
              :alt="result.title"
              width="36"
              height="48"
              :contain="true"
              class="k-search__cover"
            />
            <span v-else class="k-search__avatar" aria-hidden="true">{{
              result.title.charAt(0).toUpperCase()
            }}</span>
            <span class="k-search__text">
              <span class="k-search__name"
                >{{ result.pre }}<mark>{{ result.hit }}</mark
                >{{ result.post }}</span
              >
              <span v-if="result.detail" class="k-search__detail">{{
                result.detail
              }}</span>
            </span>
          </li>
        </template>
      </ul>
      <p v-else-if="loading" class="k-search__empty">Loading…</p>
      <p v-else class="k-search__empty">
        No game or player matches “{{ query.trim() }}”
      </p>
      <div class="k-search__footer">
        <span aria-hidden="true"
          ><kbd>↑↓</kbd> move <kbd>↵</kbd> open <kbd>esc</kbd> close</span
        >
        <router-link
          v-if="games.length > 0"
          :to="{ path: '/games', query: { search: query.trim() } }"
          @click.native="close"
          >All games →</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Cover from "@/components/atoms/Cover.vue";
import { Game } from "@/models/game";
import { Player } from "@/models/player";

const MAX_GAMES = 5;
const MAX_PLAYERS = 3;

interface Result {
  kind: "game" | "player";
  id: number;
  title: string;
  cover?: string;
  detail?: string;
  pre: string;
  hit: string;
  post: string;
}

function highlight(text: string, q: string) {
  const i = text.toLowerCase().indexOf(q);
  return {
    pre: text.slice(0, i),
    hit: text.slice(i, i + q.length),
    post: text.slice(i + q.length),
  };
}

export default Vue.extend({
  name: "GlobalSearch",
  components: { Cover },
  data: () => ({
    query: "",
    active: 0,
    focused: false,
    loading: false,
    panelStyle: {} as Record<string, string>,
  }),
  computed: {
    ...mapGetters({ allGames: "games", allPlayers: "players" }),
    q(): string {
      return this.query.trim().toLowerCase();
    },
    open(): boolean {
      return this.focused && this.q.length > 0;
    },
    games(): Game[] {
      return (this.allGames as Game[]).filter((game) =>
        game.title.toLowerCase().includes(this.q)
      );
    },
    players(): Player[] {
      return (this.allPlayers as Player[]).filter((player) =>
        player.name.toLowerCase().includes(this.q)
      );
    },
    results(): Result[] {
      if (!this.q) {
        return [];
      }
      const games = this.games.slice(0, MAX_GAMES).map((game) => ({
        kind: "game" as const,
        id: game.id,
        title: game.title,
        cover: game.cover,
        detail: (game.platforms || []).map((p) => p.name).join(" · "),
        ...highlight(game.title, this.q),
      }));
      const players = this.players.slice(0, MAX_PLAYERS).map((player) => ({
        kind: "player" as const,
        id: player.id,
        title: player.name,
        ...highlight(player.name, this.q),
      }));
      return [...games, ...players];
    },
    activeId(): string | undefined {
      return this.open && this.results.length > 0
        ? `global-search-${this.active}`
        : undefined;
    },
  },
  mounted() {
    document.addEventListener("keydown", this.onShortcut);
    window.addEventListener("resize", this.placePanel);
    window.addEventListener("scroll", this.placePanel, true);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onShortcut);
    window.removeEventListener("resize", this.placePanel);
    window.removeEventListener("scroll", this.placePanel, true);
  },
  methods: {
    onShortcut(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const typing =
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (event.key === "/" && !typing) {
        event.preventDefault();
        (this.$refs.input as HTMLInputElement).focus();
      }
    },
    // The drawer scrolls (and so clips), so the panel is fixed and placed
    // under the field to overflow onto the page.
    placePanel() {
      const rect = (this.$refs.input as HTMLElement).getBoundingClientRect();
      this.panelStyle = {
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
        width: `${Math.min(440, window.innerWidth - rect.left - 16)}px`,
      };
    },
    async onFocus() {
      this.focused = true;
      this.placePanel();
      if (this.allGames.length > 0 && this.allPlayers.length > 0) {
        return;
      }
      this.loading = true;
      await Promise.all([
        this.allGames.length === 0 && this.$store.dispatch("fetchGames"),
        this.allPlayers.length === 0 && this.$store.dispatch("fetchPlayers"),
      ]);
      this.loading = false;
    },
    onFocusOut(event: FocusEvent) {
      if (!this.$el.contains(event.relatedTarget as Node)) {
        this.focused = false;
      }
    },
    move(step: number) {
      const count = this.results.length;
      if (count > 0) {
        this.active = (this.active + step + count) % count;
      }
    },
    choose(result?: Result) {
      if (!result) {
        return;
      }
      this.$router.push(
        result.kind === "game" ? `/games/${result.id}` : `/players/${result.id}`
      );
      this.close();
    },
    close() {
      this.query = "";
      this.active = 0;
      (this.$refs.input as HTMLInputElement).blur();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/custom.scss";

.k-search {
  position: relative;

  &__icon {
    position: absolute;
    left: 12px;
    top: 14px;
    color: var(--k-muted) !important;
  }

  &__input {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    padding: 0 36px;
    border-radius: 6px;
    border: 1px solid var(--k-border2);
    background: var(--k-surface);
    color: var(--k-text);
    font: inherit;

    &::placeholder {
      color: var(--k-muted);
    }
    &:focus {
      outline: none;
      border-color: var(--k-accent);
      box-shadow: 0 0 0 3px rgba(255, 138, 51, 0.18);
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
  }

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 4px;
    border-radius: 3px;
    border: 1px solid var(--k-border2);
    background: transparent;
    box-shadow: none;
    color: var(--k-muted);
    font-family: $font-score;
    font-size: 16px;
  }

  &__kbd {
    position: absolute;
    right: 10px;
    top: 12px;
  }

  &__panel {
    position: fixed;
    z-index: 10;
    background: var(--k-surface);
    border: 1px solid var(--k-border2);
    border-radius: 10px;
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
    overflow: hidden;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 4px 0;
  }

  &__group {
    display: flex;
    justify-content: space-between;
    padding: 10px 14px 6px;
    font-family: $font-display;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--k-muted);

    &:not(:first-child) {
      margin-top: 4px;
      border-top: 1px solid var(--k-border);
    }
  }

  &__option {
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 14px;
    cursor: pointer;

    &--active {
      background: var(--k-track);
      box-shadow: inset 3px 0 0 var(--k-accent);
    }
  }

  &__cover {
    flex: none;
    border-radius: 4px;
  }

  &__avatar {
    flex: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--k-track);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: $font-score;
    font-size: 22px;
    color: var(--k-accent);
  }

  &__text {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__name {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    mark {
      background: transparent;
      color: var(--k-accent);
      font-weight: 700;
    }
  }

  &__detail {
    font-size: 13px;
    color: var(--k-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__empty {
    margin: 0;
    padding: 18px 14px;
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-top: 1px solid var(--k-border);
    background: var(--k-header);
    font-size: 13px;
    color: var(--k-muted);

    a {
      font-weight: 600;
    }
  }
}
</style>
