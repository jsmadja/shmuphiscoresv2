<template>
  <v-card>
    <v-card-text>
      <h2 class="mb-5">Add Platforms</h2>
      <v-select
        v-model="selectedPlatforms"
        outlined
        :items="availablePlatforms"
        multiple
        label="Platforms"
        hide-details
        required
      ></v-select>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :disabled="selectedPlatforms.length <= 0"
        text
        color="primary"
        @click="addPlatforms"
        >Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import { Platform } from "@/models/ranking";

export default Vue.extend({
  name: "AddPlatforms",
  props: ["usedPlatforms", "platforms"],
  data: function () {
    return {
      selectedPlatforms: [],
    };
  },
  computed: {
    availablePlatforms: function (): Platform[] {
      return _.difference(this.platforms, this.usedPlatforms);
    },
  },
  methods: {
    addPlatforms(): void {
      this.$emit("add", this.selectedPlatforms);
      this.selectedPlatforms = [];
    },
  },
});
</script>
