<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Players</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="computedHeaders"
              :items="players"
              :search="search"
              :item-class="rowClasses"
              mobile-breakpoint="0"
              :dense="$vuetify.breakpoint.smAndDown"
              :loading="players.length === 0"
            >
              <template v-slot:item.scores="{ item }">
                {{ item.scores }} scores
              </template>
              <template v-slot:item.firstRankCount="{ item }">
                {{ item.firstRankCount }}
                <v-icon color="amber accent-2">mdi-medal</v-icon>
              </template>
              <template v-slot:item.secondRankCount="{ item }">
                {{ item.secondRankCount }}
                <v-icon color="blue-grey lighten-4">mdi-medal</v-icon>
              </template>
              <template v-slot:item.thirdRankCount="{ item }">
                {{ item.thirdRankCount }}
                <v-icon color="brown lighten-1">mdi-medal</v-icon>
              </template>
              <template v-slot:item.oneCreditCount="{ item }">
                {{ item.oneCreditCount }}
                <v-chip
                  class="pr-1 pl-1"
                  dark
                  x-small
                  tile
                  depressed
                  color="orange"
                  >1CC</v-chip
                >
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PlayersTemplate",
  props: ["players", "currentPlayerId"],
  data() {
    return {
      search: "",
      headers: [
        { text: "Player", value: "name" },
        {
          text: "1st",
          value: "firstRankCount",
          hide: "smAndDown",
          align: "right",
        },
        {
          text: "2nd",
          value: "secondRankCount",
          hide: "smAndDown",
          align: "right",
        },
        {
          text: "3rd",
          value: "thirdRankCount",
          hide: "smAndDown",
          align: "right",
        },
        {
          text: "1CC",
          value: "oneCreditCount",
          hide: "smAndDown",
          align: "right",
        },
        { text: "Scores", value: "scores", align: "right" },
      ],
    };
  },
  computed: {
    computedHeaders() {
      return this.headers.filter(
        (h) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
  },
  methods: {
    rowClasses(item) {
      if (item.id == this.currentPlayerId) {
        return "orange lighten-5";
      }
    },
  },
});
</script>
