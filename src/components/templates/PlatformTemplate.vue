<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ platformName }}</h1>
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
              :items="games"
              :search="search"
              @click:row.self="(row) => $emit('selectGame', row)"
              mobile-breakpoint="0"
              :loading="games.length === 0"
            >
              <template v-slot:item.cover="{ item }">
                <cover
                  :url="item.cover"
                  :alt="item.title"
                  :contain="true"
                  width="50"
                />
              </template>
              <template
                v-slot:item.title="{ item }"
                @click="(row) => $emit('selectGame', row)"
              >
                {{ item.title }}
              </template>
              <template v-slot:item.platforms="{ item }">
                <v-btn
                  @click="() => onSelectPlatform(platform)"
                  v-for="platform in item.platforms"
                  x-small
                  dark
                  depressed
                  color="green"
                  tile
                  :key="platform.id"
                  class="mr-0 pl-1 pr-1"
                  >{{ platform.name }}</v-btn
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
import { platformNames } from "../../models/platforms.ts";

export default Vue.extend({
  name: "PlatformTemplate",
  props: ["platformTitle", "games"],
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
        {
          text: "All Platforms",
          value: "platforms",
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
    platformName() {
      return platformNames.get(this.platformTitle);
    },
  },
  methods: {
    onSelectPlatform(platform) {
      this.$emit("selectPlatform", platform);
    },
  },
});
</script>
