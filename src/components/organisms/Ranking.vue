<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card tile>
          <v-card-title>
            <h3 v-if="ranking">
              <span v-if="ranking && ranking.mode">{{
                ranking.mode.name
              }}</span>
              <span
                v-if="
                  ranking &&
                  ranking.mode &&
                  ranking.difficulty &&
                  ranking.mode.name &&
                  ranking.difficulty.name
                "
              >
                -
              </span>
              <span v-if="ranking && ranking.difficulty">{{
                ranking.difficulty.name
              }}</span>
            </h3>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              class="search-input pr-3"
              v-if="ranking.scores.length > 0"
            ></v-text-field>
            <v-btn
              color="primary"
              dark
              small
              outlined
              @click="$emit('addScore', ranking)"
            >
              <v-icon left>mdi-plus</v-icon>
              Add Score
            </v-btn>
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
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-chip
                        x-small
                        outlined
                        class="mr-1 pl-1 pr-1"
                        v-bind="attrs"
                        v-on="on"
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
                  >{{ item.value | formatTime }}</span
                >
                <span v-else class="float-right">{{
                  item.value | formatNumber
                }}</span>
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

export default Vue.extend({
  name: "Ranking",
  props: ["ranking", "currentPlayerId"],
  data() {
    return {
      search: "",
      headers: [
        { text: "Rank", value: "rank", align: "right" },
        { text: "Player", value: "player.name" },
        { text: "Score", value: "value", align: "right" },
        { text: "Stage", value: "stage", align: "right", hide: "smAndDown" },
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
    computedHeaders() {
      return (this as any).headers.filter(
        (h: any) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
  },
  methods: {
    rowClasses(item: Score) {
      if (item.player.id == this.currentPlayerId) {
        return "orange lighten-5";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.search-input {
  line-height: 1rem;
  padding-top: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.photo-tooltip-class {
  background: none;
}

h3 {
  font-weight: bold;
}
</style>
