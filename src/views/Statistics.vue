<template>
  <div class="k-container k-page">
    <div>
      <p class="k-kicker">&gt; SERVICE MODE · BOOKKEEPING</p>
      <h1>Statistics</h1>
    </div>

    <section aria-label="Totals" class="stats-kpis">
      <div
        v-for="kpi in kpis"
        :key="kpi.label"
        class="k-panel stats-kpis__item"
      >
        <span class="k-score stats-kpis__value">{{ kpi.value || "…" }}</span>
        <span class="stats-kpis__label">{{ kpi.label }}</span>
      </div>
    </section>

    <section v-if="topPlatforms.length > 0" class="stats-chart">
      <h2 class="k-page__group">Games per platform · top 15</h2>
      <div
        class="k-panel stats-chart__panel"
        role="img"
        :aria-label="chartLabel"
      >
        <div v-for="p in topPlatforms" :key="p.title" class="stats-chart__row">
          <span class="stats-chart__name">{{ p.title }}</span>
          <span class="stats-chart__track"
            ><span class="stats-chart__bar" :style="{ width: p.pct }"></span
          ></span>
          <span class="k-score stats-chart__count">{{ p.games }}</span>
        </div>
      </div>
    </section>

    <section>
      <h2 class="k-page__group">Full report</h2>
      <div class="k-panel stats-report">
        <iframe
          width="100%"
          height="750"
          style="border: none"
          title="Detailed statistics report"
          src="https://datastudio.google.com/embed/reporting/6947ac0c-7689-49ec-861c-e75dba344402/page/maKJB"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { PlatformWithGameCount } from "@/models/platforms";

export default Vue.extend({
  name: "Statistics",
  created() {
    this.$store.dispatch("fetchPlatforms");
    this.$store.dispatch("fetchGames");
    this.$store.dispatch("fetchPlayers");
  },
  computed: {
    ...mapGetters(["platforms", "games", "players"]),
    kpis(): Array<{ value: number; label: string }> {
      return [
        { value: this.games.length, label: "GAMES" },
        { value: this.players.length, label: "PLAYERS" },
        { value: this.platforms.length, label: "PLATFORMS" },
      ];
    },
    topPlatforms(): Array<PlatformWithGameCount & { pct: string }> {
      const sorted = [...(this.platforms as PlatformWithGameCount[])]
        .sort((a, b) => b.games - a.games)
        .slice(0, 15);
      const max = Math.max(1, ...sorted.map((p) => p.games));
      return sorted.map((p) => ({
        ...p,
        pct: `${Math.round((p.games / max) * 100)}%`,
      }));
    },
    chartLabel(): string {
      const top = this.topPlatforms;
      if (top.length === 0) {
        return "";
      }
      const first = top[0];
      const last = top[top.length - 1];
      return (
        `Bar chart of the ${top.length} platforms with the most games, ` +
        `from ${first.title} with ${first.games} ` +
        `down to ${last.title} with ${last.games}`
      );
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../custom.scss";

.stats-kpis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;

  &__item {
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
  }

  &__value {
    font-size: 64px;
  }

  &__label {
    font-family: $font-display;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.14em;
    color: var(--k-muted);
  }
}

.stats-chart {
  display: flex;
  flex-direction: column;
  gap: 14px;

  &__panel {
    padding: 22px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--k-inset);
  }

  &__row {
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr) 48px;
    gap: 12px;
    align-items: center;
  }

  &__name {
    font-family: $font-display;
    font-weight: 700;
    text-transform: uppercase;
    text-align: right;
  }

  &__track {
    height: 16px;
    border-radius: 2px;
    background: var(--k-surface);
  }

  &__bar {
    display: block;
    height: 16px;
    border-radius: 2px;
    background: var(--k-cta);
    box-shadow: var(--k-glow);
  }

  &__count {
    font-size: 22px;
  }
}

.stats-report {
  overflow: hidden;
  margin-top: 14px;
}
</style>
