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
      headers: [{ text: "Player", value: "name" }],
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
