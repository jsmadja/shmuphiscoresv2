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
          <v-card-text>
            <v-data-table
              hide-default-footer
              :headers="computedHeaders"
              :items="platformRows"
              :search="search"
              :dense="$vuetify.breakpoint.smAndDown"
              :sort-by="['title']"
              :sort-desc="[false]"
              @click:row="handleClick"
              mobile-breakpoint="0"
              :loading="platforms.length === 0"
              :footer-props="{
                disableItemsPerPage: true,
                itemsPerPageOptions: [-1],
              }"
            >
              <template v-slot:item.games="{ item }">
                <div class="text-end">{{ item.games }} games</div>
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
import {
  platformNames,
  PlatformWithGameCount,
} from "../../models/platforms.ts";

export default Vue.extend({
  name: "PlatformsTemplate",
  props: ["platforms"],
  data: () => ({
    search: "",
    headers: [
      { value: "code", text: "Code", hide: "smAndDown" },
      { value: "title", text: "Title" },
      { value: "games", text: "# Games", align: "right", hide: "smAndDown" },
    ],
  }),
  computed: {
    platformRows: function () {
      return (this as any).platforms.map((p) => ({
        code: p.title,
        title: platformNames.get(p.title) || p.title,
        games: p.games,
      }));
    },
    computedHeaders() {
      return (this as any).headers.filter(
        (h: any) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
  },
  methods: {
    handleClick(row: PlatformWithGameCount) {
      this.$emit("selectPlatform", row);
    },
  },
});
</script>
