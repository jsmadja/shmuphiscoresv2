<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ title }}</h1>
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
                  width="50"
                  :contain="true"
                  class="ma-1"
                />
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
  props: ["title", "games"],
  components: { Cover },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "",
          value: "cover",
          hide: "smAndDown",
          width: 100,
        },
        {
          text: "Title",
          value: "title",
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
