<template>
  <v-card tile @click="$emit('goToGame', game)">
    <v-card-text>
      <v-row dense>
        <v-col cols="12" lg="3">
          <Cover
            :url="game.cover"
            height="177"
            :contain="false"
            class="elevation-5"
          />
        </v-col>
        <v-col cols="12" lg="9" class="pl-2">
          <v-row>
            <v-col cols="12">
              <span class="title">{{ game.title }}</span>
            </v-col>
            <v-col cols="12" lg="12" class="pa-0 ma-0">
              <v-card-title class="headline">{{ title }}</v-card-title>
              <v-card-subtitle v-html="content"></v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Cover from "@/components/atoms/Cover.vue";

export default Vue.extend({
  name: "RecommendationCard",
  props: ["title", "content", "game"],
  components: { Cover },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 1.8rem !important;
  line-height: 1.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  display: block;
  cursor: pointer;
}
</style>
