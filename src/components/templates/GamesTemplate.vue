<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Games</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
              :items="games"
              :search="search"
              @click:row="(row) => $emit('selectGame', row)"
              mobile-breakpoint="0"
              :loading="games.length === 0"
            >
              <template v-slot:item.cover="{ item }">
                <Cover
                  :url="item.cover"
                  :alt="item.title"
                  width="100"
                  max-height="50"
                  height="50"
                />
              </template>
              <template v-slot:item.title="{ item }">
                {{ item.title }}
              </template>
              <template v-slot:item.platforms="{ item }">
                <v-btn
                  @click="$emit('selectPlatform', i)"
                  v-for="i in item.platforms"
                  x-small
                  dark
                  depressed
                  color="green"
                  tile
                  :key="i"
                  class="mr-0 pl-1 pr-1"
                  >{{ i }}</v-btn
                >
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Cover from "../atoms/Cover.vue";

export default Vue.extend({
  name: "GamesTemplate",
  props: ["games"],
  components: { Cover },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "",
          value: "cover",
          hide: "smAndDown",
        },
        {
          text: "Title",
          value: "title",
        },
        {
          text: "Platforms",
          value: "platforms",
        },
        {
          text: "Players",
          value: "players",
          align: "right",
          hide: "smAndDown",
        },
        {
          text: "Scores",
          value: "scores",
          align: "right",
          hide: "smAndDown",
        },
        {
          text: "1CC",
          value: "oneccs",
          align: "right",
          hide: "smAndDown",
        },
      ],
    };
  },
  computed: {
    computedHeaders() {
      return (this as any).headers.filter(
        (h) => !h.hide || !(this.$vuetify as any).breakpoint[h.hide]
      );
    },
  },
});
</script>
