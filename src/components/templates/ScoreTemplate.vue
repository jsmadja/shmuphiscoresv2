<template>
  <v-container>
    <v-row v-if="history.length > 0">
      <v-col>
        <h1>{{ history[0].gameTitle }}</h1>
        <h2>by {{ history[0].player.name }}</h2>
        <h3>on ranking {{ rankingName }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <shmup-table :headers="headers" :items="history">
          <template v-slot:item.createdAt="{ item }">
            {{ formatDate(item.createdAt) }}
          </template>
          <template v-slot:item.value="{ item }">
            <span v-if="item.mode && item.mode.scoreType === 'timer'">
              {{ item.value | formatTime }}
            </span>
            <span v-else>
              {{ item.value | formatNumber }}
            </span>
          </template>
          <template v-slot:item.gapWithPreviousScore="{ item }">
            <span
              v-if="
                item.gapWithPreviousScore && item.gapWithPreviousScore !== 0
              "
              >{{ item.gapWithPreviousScore }}%</span
            >
          </template>
          <template v-slot:item.1CC="{ item }">
            <OneCCChip v-if="item['1CC']" />
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon v-if="canEdit" small class="mr-2" @click="editScore(item)">
              mdi-pencil
            </v-icon>
          </template>
        </shmup-table>
        <v-card tile>
          <v-card-title>Graphical Evolution</v-card-title>
          <v-card-text>
            <v-sparkline
              auto-draw
              :labels="labels"
              :value="value"
              color="orange"
              line-width="0.5"
              padding="16"
              label-size="3"
            ></v-sparkline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import moment from "moment";
import Vue from "vue";
import { Score } from "@/models/score";
import ShmupTable from "@/components/molecules/ShmupTable.vue";
import OneCCChip from "@/components/atoms/OneCCChip.vue";

export default Vue.extend({
  components: { OneCCChip, ShmupTable },
  props: ["canEdit", "history"],
  computed: {
    headers: function () {
      return [
        { text: "Date", value: "createdAt" },
        { text: "Stage", value: "stage.name", align: "end" },
        { text: "Score", value: "value", align: "end" },
        { text: "Score Gap", value: "gapWithPreviousScore", align: "end" },
        { text: "Comment", value: "comment" },
        { text: "", value: "1CC" },
        this.canEdit ? { text: "Actions", value: "actions" } : undefined,
      ].filter(Boolean);
    },
    labels: function () {
      return this.history.map((score: Score) =>
        moment(score.createdAt).format("L")
      );
    },
    value: function () {
      return this.history.map((score: Score) => score.value);
    },
    rankingName: function () {
      const historyArray = this.history as Score[];
      const score = historyArray.length > 0 ? historyArray[0] : ({} as Score);
      let rankingName = "";
      rankingName += score && score.mode ? score.mode.name : "";
      rankingName +=
        score &&
        score.mode &&
        score.difficulty &&
        score.mode.name &&
        score.difficulty.name
          ? " - "
          : "";
      rankingName += score && score.difficulty ? score.difficulty.name : "";
      return rankingName;
    },
  },
  methods: {
    formatDate: function (date) {
      return moment(date).format("L");
    },
    editScore(row) {
      this.$emit("goToEditScore", row);
    },
  },
});
</script>
