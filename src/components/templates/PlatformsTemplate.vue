<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Platforms</h1>
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
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="platforms"
            :search="search"
            @click:row="handleClick"
            mobile-breakpoint="0"
            :footer-props="{
              disableItemsPerPage: true,
              itemsPerPageOptions: [-1],
            }"
          >
            <template v-slot:item.title="{ item }">
              {{ item.title }}
            </template>
            <template v-slot:item.games="{ item }">
              <div class="text-end">{{ item.games }} games</div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { PlatformWithGameCount } from "@/models/platforms.ts";

export default Vue.extend({
  name: "PlatformsTemplate",
  props: ["platforms"],
  data: () => ({
    search: "",
    headers: [
      { value: "title", text: "Title" },
      { value: "games", text: "# Games", align: "right" },
    ],
  }),
  methods: {
    handleClick(row: PlatformWithGameCount) {
      this.$emit("selectPlatform", row);
    },
  },
});
</script>
