<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card tile>
          <v-card-title>
            <v-row>
              <v-col cols="12" lg="5">
                <h3 v-if="ranking">
                  {{ rankingName }}
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
              :show-expand="!$vuetify.breakpoint.smAndDown"
            >
              <template v-slot:item.comment="{ item }">
                <v-chip
                  class="float-left mr-3 pr-1 pl-1"
                  v-if="item.oneCC"
                  dark
                  x-small
                  tile
                  depressed
                  color="orange"
                  >1CC</v-chip
                >
                <v-spacer></v-spacer>
                <span
                  style="
                    max-width: 100px;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                  >{{ item.comment }}</span
                >
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
                <div class="float-left d-none d-sm-flex">
                  <v-tooltip
                    v-if="item.photo"
                    top
                    content-class="photo-tooltip-class"
                    nudge-right="50"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-chip
                        x-small
                        outlined
                        class="mr-1 pl-1 pr-1"
                        v-bind="attrs"
                        v-on="on"
                        :href="item.photo"
                        target="_blank"
                        ><v-icon small>mdi-camera</v-icon></v-chip
                      >
                    </template>
                    <v-img :src="item.photo" max-width="250" />
                  </v-tooltip>
                  <v-chip
                    x-small
                    class="pl-1 pr-1"
                    dark
                    tile
                    v-if="item.replay"
                    :href="item.replay"
                    target="_blank"
                    color="red"
                  >
                    <v-icon x-small>mdi-play</v-icon>
                  </v-chip>
                  <v-chip
                    class="ml-1 pl-2 pr-2"
                    x-small
                    v-if="item.inp"
                    :href="item.inp"
                    target="_blank"
                  >
                    INP
                  </v-chip>
                </div>
                <span
                  v-if="ranking.mode && ranking.mode.scoreType === 'timer'"
                  class="float-right"
                  @click.self="() => goToScore(item)"
                  >{{ item.value | formatTime }}</span
                >
                <span
                  v-else
                  class="float-right"
                  @click.self="() => goToScore(item)"
                  >{{ item.value | formatNumber }}</span
                >
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
import { defineComponent } from "vue";
import { Score } from "@/models/score";
import { DataTableHeader } from "vuetify";

interface DataTableHeader2 extends DataTableHeader {
  hide?: string;
}

export default defineComponent({
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
      if (item.player.id == this.currentPlayerId) {
        return "orange lighten-5";
      }
    },
    goToScore(score: Score) {
      this.$emit("goToScore", score);
    },
  },
});
</script>

<style lang="scss" scoped>
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
