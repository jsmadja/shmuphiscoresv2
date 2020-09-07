<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 v-if="history.length > 0">{{ history[0].gameTitle }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <shmup-table :headers="headers" :items="history">
          <template v-slot:item.createdAt="{ item }">
            {{ formatDate(item.createdAt) }}
          </template>
          <template v-slot:item.gapWithPreviousScore="{ item }">
            <span v-if="item.gapWithPreviousScore > 0"
              >+{{ item.gapWithPreviousScore }}%</span
            >
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

export default Vue.extend({
  components: { ShmupTable },
  props: ["history"],
  data: () => ({
    headers: [
      { text: "Date", value: "createdAt" },
      { text: "Stage", value: "stage.name", align: "end" },
      { text: "Score", value: "value", align: "end" },
      { text: "Score Gap", value: "gapWithPreviousScore", align: "end" },
      { text: "Comment", value: "comment" },
    ],
  }),
  computed: {
    labels: function () {
      return this.history.map((score: Score) =>
        moment(score.createdAt).format("L")
      );
    },
    value: function () {
      return this.history.map((score: Score) => score.value);
    },
  },
  methods: {
    formatDate: function (date) {
      return moment(date).format("L");
    },
  },
});
</script>
