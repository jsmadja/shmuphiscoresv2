<template>
  <v-navigation-drawer
    clipped
    fixed
    right
    class="mt-16"
    permanent
    expand-on-hover
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Rankings </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item
        v-for="(ranking, i) in rankings"
        :key="`menu-ranking-${i}`"
        dense
      >
        <v-list-item-title
          class="ranking-name"
          :class="{ selected: isActive(`intersect-ranking-${i}`) }"
          @click="() => $emit('goTo', `#ranking-${i}`)"
          v-if="ranking"
        >
          <span v-if="ranking.mode">{{ ranking.mode.name }}</span>
          <span
            v-if="
              ranking.mode &&
              ranking.mode.name &&
              ranking.difficulty &&
              ranking.difficulty.name
            "
          >
            -
          </span>
          <span v-if="ranking.difficulty">{{ ranking.difficulty.name }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Game",
  props: ["intersectedRanking", "rankings"],
  methods: {
    isActive(ranking: string) {
      return this.intersectedRanking[ranking];
    },
  },
});
</script>

<style lang="scss" scoped>
.ranking-name {
  cursor: pointer;

  &.selected {
    border-left: solid 3px orange;
    padding-left: 5px;
    color: orange;
    font-weight: bold;
    margin-left: -0.5rem;
  }

  &:hover {
    color: orange;
    font-weight: bold;
  }
}
</style>
