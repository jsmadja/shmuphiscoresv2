<template>
  <v-container>
    <v-row
      v-if="!hideRankingMenu && rankings.length > 1"
      class="d-none d-sm-flex"
    >
      <ranking-menu
        :rankings="rankings"
        :intersected-ranking="isIntersecting"
        @goTo="(target) => $vuetify.goTo(target)"
      />
    </v-row>
    <v-row>
      <v-col>
        <h1>{{ game.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="2">
        <game-informations
          :game="game"
          @configureGame="$emit('configureGame', game)"
          @selectPlatform="(platform) => $emit('selectPlatform', platform)"
          @addScore="onAddScore"
          :hide-go-to-game-button="true"
          :hide-add-score-button="!user || !user.authenticated"
          :hide-configure-button="!user || !user.administrator"
        />
      </v-col>
      <!-- Rankings -->
      <v-col cols="12" sm="11" md="8" lg="10">
        <v-progress-linear
          v-if="rankings.length <= 0"
          indeterminate
          color="orange"
        ></v-progress-linear>
        <Ranking
          :ranking="ranking"
          :current-player-id="user ? user.id : 0"
          v-for="(ranking, i) in rankings"
          :hide-add-score-button="!user || !user.authenticated"
          :key="`ranking-${i}`"
          :id="`ranking-${i}`"
          @addScore="onAddScore"
          @goToPlayer="goToPlayer"
          @goToScore="goToScore"
        >
          <div
            v-intersect="{
              handler: onIntersect,
              options: {
                threshold: [0, 0.5],
              },
            }"
            :id="`intersect-ranking-${i}`"
          />
        </Ranking>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Ranking from "@/components/organisms/Ranking.vue";
import GameInformations from "@/components/organisms/GameInformations.vue";
import RankingMenu from "@/components/organisms/RankingMenu.vue";

export default Vue.extend({
  name: "Game",
  props: ["game", "rankings", "hideRankingMenu", "user"],
  components: { Ranking, GameInformations, RankingMenu },
  data() {
    return {
      isIntersecting: {} as unknown,
    };
  },
  computed: {
    intersection: {
      get: function (): unknown {
        return this.isIntersecting;
      },
      set: function (isIntersecting: unknown) {
        this.isIntersecting = isIntersecting;
      },
    },
  },
  methods: {
    onIntersect(entries: IntersectionObserverEntry[]) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const intersection = {};
        intersection[entry.target.id] = entry.isIntersecting;
        this.intersection = intersection;
      }
    },
    onAddScore(ranking) {
      this.$emit("addScore", { ranking });
    },
    goToPlayer(player) {
      this.$emit("goToPlayer", player);
    },
    goToScore(score) {
      this.$emit("goToScore", score);
    },
  },
});
</script>

<style lang="scss" scoped>
h3 {
  font-weight: bold;
}
</style>
