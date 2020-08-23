<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ platformTitle }}</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="(item, i) in games"
        cols="12"
        :key="i"
        xs="12"
        sm="12"
        md="12"
        lg="6"
      >
        <v-card @click="handleClick(item)">
          <div class="d-flex justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <cover :url="item.cover" :alt="platformTitle" />
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Game } from "@/models/game";
import Cover from "../atoms/Cover.vue";

export default Vue.extend({
  name: "PlatformTemplate",
  props: ["platformTitle", "games"],
  components: { Cover },
  methods: {
    handleClick(row: Game) {
      this.$emit("selectGame", row);
    },
  },
});
</script>
