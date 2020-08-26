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
        >Add</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";

export default Vue.extend({
  name: "AddPlatforms",
  props: ["usedPlatforms", "platforms"],
  data: () => ({
    selectedPlatforms: [],
  }),
  computed: {
    availablePlatforms: function () {
      return _.difference(this.platforms, this.usedPlatforms);
    },
  },
  methods: {
    addPlatforms: function () {
      this.$emit("add", (this as any).selectedPlatforms);
      (this as any).selectedPlatforms = [];
    },
  },
});
</script>
