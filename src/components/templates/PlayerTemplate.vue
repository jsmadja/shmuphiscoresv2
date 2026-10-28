<template>
  <div class="k-container k-page">
    <section class="player-head">
      <div class="player-head__avatar k-score" aria-hidden="true">
        {{ playerName ? playerName.charAt(0).toUpperCase() : "?" }}
      </div>
      <div class="player-head__text">
        <p class="k-kicker">&gt; PLAYER</p>
        <h1 v-if="playerName" class="player-head__name">{{ playerName }}</h1>
        <h1 v-else-if="!loading">This player has no scores</h1>
      </div>
      <router-link
        v-if="playerName"
        to="/compare-scores"
        class="k-btn k-btn--ghost"
        >Compare</router-link
      >
    </section>

    <section
      v-if="scores.length > 0"
      aria-label="Statistics"
      class="player-stats"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="k-panel player-stats__item"
      >
        <span
          class="k-score player-stats__value"
          :class="{ 'player-stats__value--plain': !stat.highlight }"
          >{{ stat.value }}</span
        >
        <span class="player-stats__label">{{ stat.label }}</span>
      </div>
    </section>

    <section v-if="platformStats.length > 0" class="k-panel player-platforms">
      <h2 class="player-platforms__title">By platform</h2>
      <div
        v-for="p in platformStats"
        :key="p.name"
        class="player-platforms__row"
      >
        <span class="player-platforms__name">{{ p.name }}</span>
        <span class="player-platforms__track"
          ><span class="player-platforms__bar" :style="{ width: p.pct }"></span
        ></span>
        <span class="k-score player-platforms__count">{{ p.count }}</span>
      </div>
    </section>

    <h2 v-if="scores.length > 0" class="k-page__group">All scores</h2>
    <v-row>
      <v-col cols="12">
        <shmup-table
          :items="scores"
          :headers="headers"
          :sort-by="['rank']"
          :sort-desc="[false]"
        >
          <template v-slot:item.game.cover="{ item }">
            <cover
              @click="goToGame(item)"
              :url="item.game.cover"
              :alt="item.game.title"
              width="50"
              :contain="true"
              class="ma-1"
            />
          </template>
          <template v-slot:item.game.title="{ item }">
            <span class="game-title" @click="goToGame(item)">{{
              item.game.title
            }}</span>
          </template>
          <template v-slot:item.platform.name="{ item }">
            <platform-button
              :name="item.platform ? item.platform.name : ''"
              @click="() => goToPlatform(item)"
            />
          </template>
          <template v-slot:item.rank="{ item }">
            {{ item.rank | formatRank }}
          </template>
          <template v-slot:item.createdAt="{ item }">
            {{ item.createdAt | formatDateFromNow }}
          </template>
          <template v-slot:item.value="{ item }">
            <span
              class="k-score k-score--cell"
              @click.self="() => goToScore(item)"
              v-if="item.mode && item.mode.scoreType === 'timer'"
              >{{ item.value | formatTime }}</span
            >
            <span
              class="k-score k-score--cell"
              @click.self="() => goToScore(item)"
              v-else
              >{{ item.value | formatNumber }}</span
            >
          </template>
          <template v-slot:item.onecc="{ item }">
            <one-c-c-chip v-if="item.onecc" />
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon v-if="canEdit" small class="mr-2" @click="editScore(item)">
              mdi-pencil
            </v-icon>
          </template>
        </shmup-table>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Cover from "../atoms/Cover.vue";
import ShmupTable from "@/components/molecules/ShmupTable.vue";
import OneCCChip from "@/components/atoms/OneCCChip.vue";
import PlatformButton from "@/components/atoms/PlatformButton.vue";

export default Vue.extend({
  name: "PlayerTemplate",
  components: { Cover, ShmupTable, OneCCChip, PlatformButton },
  props: ["loading", "scores", "canEdit"],
  data() {
    return {
      headers: [
        { text: "", value: "game.cover", hide: "smAndDown" },
        { text: "Game", value: "game.title" },
        { text: "Mode", value: "mode.name", hide: "smAndDown" },
        { text: "Difficulty", value: "difficulty.name", hide: "smAndDown" },
        {
          text: "Stage",
          value: "stage.name",
          align: "right",
          hide: "smAndDown",
        },
        { text: "Score", value: "value", align: "right" },
        { text: "Rank", value: "rank", align: "right" },
        { text: "1CC", value: "onecc", hide: "smAndDown" },
        { text: "Platform", value: "platform.name", hide: "smAndDown" },
        { text: "Date", value: "createdAt", hide: "smAndDown" },
        this.canEdit ? { text: "Actions", value: "actions" } : undefined,
      ].filter(Boolean),
    };
  },
  computed: {
    playerName(): string {
      return this.scores && this.scores.length > 0
        ? this.scores[0].player.name
        : "";
    },
    stats(): Array<{ value: number; label: string; highlight: boolean }> {
      const scores = this.scores || [];
      const games = new Set(scores.map((s) => s.game && s.game.id));
      return [
        { value: scores.length, label: "SCORES", highlight: false },
        { value: games.size, label: "GAMES", highlight: false },
        {
          value: scores.filter((s) => s.rank === 1).length,
          label: "FIRST PLACES",
          highlight: true,
        },
        {
          value: scores.filter((s) => s.onecc).length,
          label: "1CC RUNS",
          highlight: false,
        },
      ];
    },
    platformStats(): Array<{ name: string; count: number; pct: string }> {
      const counts: Record<string, number> = {};
      (this.scores || []).forEach((s) => {
        const name = s.platform ? s.platform.name : "?";
        counts[name] = (counts[name] || 0) + 1;
      });
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const top = sorted.slice(0, 5);
      const other = sorted.slice(5).reduce((sum, [, c]) => sum + c, 0);
      if (other > 0) {
        top.push(["Other", other]);
      }
      const max = Math.max(1, ...top.map(([, c]) => c));
      return top.map(([name, count]) => ({
        name,
        count,
        pct: `${Math.round((count / max) * 100)}%`,
      }));
    },
  },
  methods: {
    goToGame(row) {
      this.$emit("goToGame", row.game);
    },
    goToPlatform(row) {
      this.$emit("goToPlatform", row.platform);
    },
    goToScore(row) {
      this.$emit("goToScore", row);
    },
    editScore(row) {
      this.$emit("goToEditScore", row);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.player-head {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  align-items: center;

  &__avatar {
    width: 112px;
    height: 112px;
    border-radius: 16px;
    background: var(--k-inset);
    border: 1px solid var(--k-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 84px;
  }

  &__text {
    flex: 1 1 320px;
  }

  &__name {
    font-size: 84px;
    line-height: 0.9;
  }
}

.player-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;

  &__item {
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
  }

  &__value {
    font-size: 60px;

    &--plain {
      color: var(--k-text);
      text-shadow: none;
    }
  }

  &__label {
    font-family: $font-display;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.14em;
    color: var(--k-muted);
  }
}

.player-platforms {
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__title {
    font-size: 24px;
    margin: 0 0 4px;
  }

  &__row {
    display: grid;
    grid-template-columns: 140px minmax(0, 1fr) 60px;
    gap: 12px;
    align-items: center;
  }

  &__name {
    font-family: $font-display;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__track {
    height: 8px;
    border-radius: 2px;
    background: var(--k-track);
  }

  &__bar {
    display: block;
    height: 8px;
    border-radius: 2px;
    background: var(--k-cta);
  }

  &__count {
    font-size: 24px;
    text-align: right;
  }
}

.game-title:hover {
  cursor: pointer;
}
</style>
