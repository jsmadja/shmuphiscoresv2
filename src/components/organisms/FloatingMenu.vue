<template>
  <v-menu top left nudge-top="10" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        fixed
        absolute
        dark
        fab
        bottom
        right
        color="orange"
        class="mr-1 mb-10 mb-sm-13 mb-md-13 mb-lg-13"
      >
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </template>

    <v-list flat dense>
      <v-subheader
        v-if="recentlyViewedGames.length === 0 && myLastScores.length === 0"
      >
        NO HISTORY
      </v-subheader>
      <v-subheader v-if="recentlyViewedGames && recentlyViewedGames.length > 0"
        >RECENTLY VIEWED</v-subheader
      >
      <v-list-item
        v-for="game in recentlyViewedGames"
        :key="`game-${game.id}`"
        style="cursor: pointer"
        @click="$emit('goToGame', game)"
      >
        <v-list-item-avatar tile>
          <cover :url="game.cover" />
        </v-list-item-avatar>
        <v-list-item-title class="game-title">{{
          game.title
        }}</v-list-item-title>
      </v-list-item>
      <v-divider
        v-if="
          recentlyViewedGames &&
          recentlyViewedGames.length > 0 &&
          myLastScores &&
          myLastScores.length > 0
        "
      ></v-divider>
      <v-subheader v-if="myLastScores.length > 0">LAST SCORES</v-subheader>
      <v-list-item
        v-for="score in myLastScores"
        :key="`score-${score.id}`"
        style="cursor: pointer"
        @click="$emit('goToGame', score.game)"
      >
        <v-list-item-avatar tile>
          <cover :url="score.game.cover" />
        </v-list-item-avatar>
        <v-list-item-title class="game-title">{{
          score.game.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cover from "../atoms/Cover.vue";

export default defineComponent({
  name: "FloatingMenu",
  components: { Cover },
  props: ["myLastScores", "recentlyViewedGames"],
});
</script>
<style lang="scss" scoped>
.game-title {
  max-width: 200px;
  white-space: normal;
}
</style>
