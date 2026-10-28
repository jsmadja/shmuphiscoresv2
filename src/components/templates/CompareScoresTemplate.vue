<template>
  <div class="k-container k-page">
    <h1>Compare scores</h1>

    <section class="versus">
      <div class="k-panel versus__side versus__side--p1">
        <span class="versus__label">1P</span>
        <v-autocomplete
          :items="players"
          v-model="selectedPlayer1"
          item-value="id"
          item-text="name"
          hide-no-data
          hide-selected
          hide-details
          label="Player 1"
          placeholder="Start typing to search"
          outlined
          dense
          @change="() => $emit('selectPlayer1', selectedPlayer1)"
        ></v-autocomplete>
        <span v-if="versus.length" class="versus__wins k-score"
          >{{ wins1 }} <small>WINS</small></span
        >
      </div>
      <div class="versus__vs k-scan" aria-hidden="true">VS</div>
      <div class="k-panel versus__side versus__side--p2">
        <span class="versus__label">2P</span>
        <v-autocomplete
          :items="players"
          item-value="id"
          item-text="name"
          v-model="selectedPlayer2"
          hide-no-data
          hide-selected
          hide-details
          label="Player 2"
          placeholder="Start typing to search"
          outlined
          dense
          @change="() => $emit('selectPlayer2', selectedPlayer2)"
        ></v-autocomplete>
        <span v-if="versus.length" class="versus__wins versus__wins--p2"
          >{{ wins2 }} <small>WINS</small></span
        >
      </div>
    </section>

    <p v-if="versus.length" class="k-page__lead">
      {{ versus.length }} leaderboards in common · Gap = how far apart the two
      scores are
    </p>

    <div v-if="loading && selectedPlayer1 && selectedPlayer2" class="k-panel">
      <v-skeleton-loader
        v-for="i in 5"
        :key="i"
        type="list-item"
      ></v-skeleton-loader>
    </div>
    <div v-else-if="versus.length" class="k-panel versus-table">
      <table>
        <caption class="k-sr-only">
          Player 1 versus Player 2
        </caption>
        <thead>
          <tr>
            <th scope="col">Game</th>
            <th scope="col">Mode · Difficulty</th>
            <th scope="col" class="num">1P</th>
            <th scope="col" class="num">2P</th>
            <th scope="col" class="num">Gap</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in sortedVersus"
            :key="i"
            @click="$emit('goToGame', row)"
          >
            <td class="versus-table__game">{{ row.game.title }}</td>
            <td class="versus-table__cat">{{ category(row) }}</td>
            <td class="num" :class="row.wonByPlayer1 ? 'win1' : 'lose'">
              {{ row.score1.rank | formatRank }} ·
              {{ row.score1.value | formatNumber }}
            </td>
            <td class="num" :class="row.wonByPlayer1 ? 'lose' : 'win2'">
              {{ row.score2.rank | formatRank }} ·
              {{ row.score2.value | formatNumber }}
            </td>
            <td class="num" :class="row.wonByPlayer1 ? 'win1' : 'win2'">
              {{ row.scoreGap }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else-if="selectedPlayer1 && selectedPlayer2 && !loading">
      No leaderboard in common.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Comparison {
  game: { title: string };
  mode?: { name: string };
  difficulty?: { name: string };
  scoreGap: number;
  wonByPlayer1: boolean;
}

export default Vue.extend({
  name: "CompareScoresTemplate",
  props: ["players", "versus", "currentUserId", "loading"],
  data() {
    return {
      selectedPlayer1: null,
      selectedPlayer2: null,
    };
  },
  computed: {
    sortedVersus(): Comparison[] {
      return [...(this.versus as Comparison[])].sort(
        (a, b) => b.scoreGap - a.scoreGap
      );
    },
    wins1(): number {
      return (this.versus as Comparison[]).filter((c) => c.wonByPlayer1).length;
    },
    wins2(): number {
      return (this.versus as Comparison[]).length - this.wins1;
    },
  },
  methods: {
    category(row: Comparison): string {
      return (
        [row.mode && row.mode.name, row.difficulty && row.difficulty.name]
          .filter(Boolean)
          .join(" · ") || "—"
      );
    },
  },
  mounted() {
    this.selectedPlayer1 = this.currentUserId;
  },
});
</script>

<style scoped lang="scss">
@import "../../custom.scss";

.versus {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: stretch;

  &__side {
    flex: 1 1 320px;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__label {
    font-family: $font-score;
    font-size: 22px;
    letter-spacing: 0.1em;
    color: var(--k-accent);
  }

  &__side--p2 &__label {
    color: var(--k-text);
  }

  &__wins {
    font-size: 46px;

    small {
      font-size: 22px;
      color: var(--k-muted);
      text-shadow: none;
    }

    &--p2 {
      font-family: $font-score;
      color: var(--k-text);
      line-height: 1;
    }
  }

  &__vs {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-family: $font-display;
    font-weight: 700;
    font-size: 64px;
    color: var(--k-cta);
  }
}

.versus-table {
  overflow-x: auto;

  table {
    width: 100%;
    min-width: 760px;
    border-collapse: collapse;
  }

  th {
    text-align: left;
    padding: 12px 16px;
    font-family: $font-display;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--k-muted);
    border-bottom: 1px solid var(--k-border);
  }

  td {
    padding: 10px 16px;
    border-top: 1px solid var(--k-track);
  }

  tbody tr {
    cursor: pointer;

    &:hover {
      background: var(--k-track);
    }
  }

  .num {
    text-align: right;
    white-space: nowrap;
  }

  td.num {
    font-family: $font-score;
    font-size: 24px;
  }

  &__game {
    font-family: $font-display;
    font-weight: 700;
    font-size: 18px;
  }

  &__cat {
    color: var(--k-muted);
    font-size: 13px;
  }

  .win1 {
    color: var(--k-accent);
    text-shadow: var(--k-glow);
  }

  .win2 {
    color: var(--k-text);
  }

  .lose {
    color: var(--k-muted);
  }
}
</style>
