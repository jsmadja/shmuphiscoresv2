<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Platforms</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <shmup-table
          :headers="headers"
          :items="platformRows"
          :sort-by="['title']"
          :sort-desc="[false]"
          @click:row="handleClick"
          :hide-default-footer="true"
          :loading="platforms.length === 0"
          :footer-props="{
            disableItemsPerPage: true,
            itemsPerPageOptions: [-1],
          }"
        >
          <template v-slot:item.games="{ item }">
            <div class="text-end">{{ item.games }} games</div>
          </template>
        </shmup-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { platformNames } from "@/models/platforms";
import ShmupTable from "@/components/molecules/ShmupTable.vue";

export default Vue.extend({
  name: "PlatformsTemplate",
  props: ["platforms"],
  components: { ShmupTable },
  data: () => ({
    headers: [
      { value: "code", text: "Code", hide: "smAndDown" },
      { value: "title", text: "Title" },
      { value: "games", text: "# Games", align: "end", hide: "smAndDown" },
    ],
  }),
  computed: {
    platformRows: function () {
      return this.platforms.map((p) => ({
        code: p.title,
        title: platformNames.get(p.title) || p.title,
        games: p.games,
      }));
    },
  },
  methods: {
    handleClick(row) {
      this.$emit("selectPlatform", row);
    },
  },
});
</script>
