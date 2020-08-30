<template>
  <v-container>
    <!-- Ranking Menu -->
    <v-row
      v-if="!hideRankingMenu && rankings.length > 1"
      class="d-none d-sm-flex"
    >
      <v-navigation-drawer
        clipped
        fixed
        right
        class="mt-14"
        permanent
        expand-on-hover
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Rankings
            </v-list-item-title>
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
              @click="$vuetify.goTo(`#ranking-${i}`)"
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
              <span v-if="ranking.difficulty">{{
                ranking.difficulty.name
              }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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
          @addScore="onAddScore"
          :hide-go-to-game-button="true"
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
          :current-player-id="currentPlayerId"
          v-for="(ranking, i) in rankings"
          :key="`ranking-${i}`"
          :id="`ranking-${i}`"
          @addScore="onAddScore"
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
import Ranking from "../organisms/Ranking.vue";
import GameInformations from "../organisms/GameInformations.vue";

export default Vue.extend({
  name: "Game",
  props: ["game", "rankings", "currentPlayerId", "hideRankingMenu"],
  components: { Ranking, GameInformations },
  data() {
    return {
      isIntersecting: {},
    };
  },
  computed: {
    intersection: {
      get: function (): any {
        return this.isIntersecting;
      },
      set: function (isIntersecting: any) {
        this.isIntersecting = isIntersecting;
      },
    },
  },
  methods: {
    isActive(ranking: string) {
      return this.isIntersecting[ranking];
    },
    onIntersect(entries: IntersectionObserverEntry[]) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const intersection = {} as any;
        intersection[entry.target.id] = entry.isIntersecting;
        this.intersection = intersection;
      }
    },
    onAddScore(ranking) {
      this.$emit("addScore", { ranking });
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
h3 {
  color: orange;
  font-weight: bold;
}
</style>
