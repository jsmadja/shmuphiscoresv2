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
import { Prop, Provide } from "vue-property-decorator";
import { Platform } from "@/models/ranking";
import Component from "vue-class-component";

@Component
export default class AddPlatforms extends Vue {
  @Prop() usedPlatforms!: Platform[];
  @Prop() platforms!: Platform[];

  @Provide() selectedPlatforms = [];

  get availablePlatforms(): Platform[] {
    return _.difference(this.platforms, this.usedPlatforms);
  }

  addPlatforms(): void {
    this.$emit("add", this.selectedPlatforms);
    this.selectedPlatforms = [];
  }
}
</script>
