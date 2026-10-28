<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card tile class="k-ranking">
          <v-card-title>
            <v-row>
              <v-col cols="12" lg="5">
                <h3 v-if="ranking" class="k-ranking__title">
                  BEST PLAYERS<template v-if="rankingName">
                    · {{ rankingName }}</template
                  >
                </h3>
              </v-col>
              <v-col cols="12" lg="5">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  class="search-input ma-0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="2">
                <v-btn
                  color="primary"
                  dark
                  small
                  outlined
                  class="add-score-button"
                  v-if="!hideAddScoreButton"
                  :block="$vuetify.breakpoint.smAndDown"
                  @click="$emit('addScore', ranking)"
                >
                  <v-icon left>mdi-plus</v-icon>
                  Add Score
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text v-if="ranking.scores.length > 0">
            <v-data-table
              :headers="computedHeaders"
              :items="ranking.scores"
              :item-class="rowClasses"
              :search="search"
              :dense="$vuetify.breakpoint.smAndDown"
              mobile-breakpoint="0"
              :items-per-page="-1"
              hide-default-footer
              :show-expand="!$vuetify.breakpoint.smAndDown"
            >
              <template v-slot:item.comment="{ item }">
                <div class="k-cell">
                  <span v-if="item.oneCC" class="k-tag k-tag--1cc">1CC</span>
                  <span class="k-cell__comment">{{ item.comment }}</span>
                </div>
              </template>
              <template v-slot:item.player.name="{ item }">
                <span @click="() => $emit('goToPlayer', item.player)">{{
                  item.player.name
                }}</span>
              </template>
              <template v-slot:item.rank="{ item }">
                {{ item.rank | formatRank }}
              </template>
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">{{ item.comment }}</td>
              </template>
              <template v-slot:item.value="{ item }">
                <div class="k-cell k-cell--end">
                  <span class="k-cell__proofs d-none d-sm-flex">
                    <v-tooltip
                      v-if="item.photo"
                      top
                      content-class="photo-tooltip-class"
                      nudge-right="50"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <a
                          v-bind="attrs"
                          v-on="on"
                          :href="item.photo"
                          target="_blank"
                          rel="noopener"
                          class="k-tag k-tag--icon"
                          aria-label="Photo proof"
                          ><v-icon small>mdi-camera</v-icon></a
                        >
                      </template>
                      <v-img :src="item.photo" max-width="250" />
                    </v-tooltip>
                    <a
                      v-if="item.replay"
                      :href="item.replay"
                      target="_blank"
                      rel="noopener"
                      class="k-tag k-tag--icon"
                      aria-label="Replay"
                      ><v-icon small>mdi-play</v-icon></a
                    >
                    <a
                      v-if="item.inp"
                      :href="item.inp"
                      target="_blank"
                      rel="noopener"
                      class="k-tag"
                      >INP</a
                    >
                  </span>
                  <span
                    v-if="ranking.mode && ranking.mode.scoreType === 'timer'"
                    @click.self="() => goToScore(item)"
                    >{{ item.value | formatTime }}</span
                  >
                  <span v-else @click.self="() => goToScore(item)">{{
                    item.value | formatNumber
                  }}</span>
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Score } from "@/models/score";
import { DataTableHeader } from "vuetify";

interface DataTableHeader2 extends DataTableHeader {
  hide?: string;
}

export default Vue.extend({
  name: "Ranking",
  props: ["ranking", "currentPlayerId", "hideAddScoreButton"],
  data(): {
    headers: DataTableHeader2[];
    search: string;
  } {
    return {
      search: "",
      headers: [
        { text: "Rank", value: "rank", align: "end" },
        { text: "Player", value: "player.name" },
        { text: "Score", value: "value", align: "end" },
        { text: "Stage", value: "stage", align: "end", hide: "smAndDown" },
        {
          text: "Comment",
          value: "comment",
          hide: "smAndDown",
          class: "comment-header",
        },
        { text: "", value: "data-table-expand", hide: "smAndDown" },
      ],
    };
  },
  computed: {
    computedHeaders(): DataTableHeader2[] {
      return this.headers.filter(
        (h) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
    rankingName(): string {
      let rankingName = "";
      rankingName +=
        this.ranking && this.ranking.mode ? this.ranking.mode.name : "";
      rankingName +=
        this.ranking &&
        this.ranking.mode &&
        this.ranking.difficulty &&
        this.ranking.mode.name &&
        this.ranking.difficulty.name
          ? " - "
          : "";
      rankingName +=
        this.ranking && this.ranking.difficulty
          ? this.ranking.difficulty.name
          : "";
      return rankingName;
    },
  },
  methods: {
    rowClasses(item: Score) {
      const classes: string[] = [];
      if (item.rank === 1) {
        classes.push("k-row--first");
      }
      if (item.player.id == this.currentPlayerId) {
        classes.push("k-row--me");
      }
      return classes.join(" ");
    },
    goToScore(score: Score) {
      this.$emit("goToScore", score);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../custom.scss";

.k-ranking {
  background: var(--k-inset) !important;
  box-shadow: var(--k-inset-shadow) !important;

  &__title {
    font-family: $font-score !important;
    font-weight: 400 !important;
    font-size: 30px;
    letter-spacing: 0.12em;
    word-break: normal;
    overflow-wrap: break-word;
    color: var(--k-accent);
    text-shadow: var(--k-glow);
  }

  ::v-deep .v-data-table {
    background: transparent !important;
  }

  ::v-deep tbody td {
    font-family: $font-score;
    font-size: 24px !important;
    color: var(--k-text2);
  }

  ::v-deep tbody td:nth-child(3) {
    color: var(--k-accent);
  }

  ::v-deep .k-row--first td {
    color: var(--k-first) !important;
    text-shadow: var(--k-glow);
  }

  ::v-deep .k-row--me td {
    background: var(--k-track);
  }
}

.search-input {
  padding-top: 0;
}

.photo-tooltip-class {
  background: none;
}

.add-score-button {
  display: inline-flex;
}

h3 {
  font-weight: bold;
  display: inline-flex;
}
</style>
