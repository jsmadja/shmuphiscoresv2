<template>
  <v-container>
    <!-- Ranking Menu -->
    <v-row v-if="!hideRankingMenu" class="d-none d-sm-flex">
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
                >-</span
              >
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
    <!-- Infos -->
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="2">
        <v-row>
          <v-col cols="12" sm="6" md="12">
            <v-card tile><Cover :url="game.cover" :alt="game.title" /></v-card>
          </v-col>
          <v-col class="pa-1">
            <v-menu offset-x nudge-right="5">
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  class="ma-2"
                  color="green"
                  text-color="white"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-avatar left class="green darken-4">
                    {{ (game.platforms || []).length }}
                  </v-avatar>
                  Platforms
                </v-chip>
              </template>
              <v-list color="green" dense>
                <v-list-item
                  v-for="(platform, index) in game.platforms"
                  :key="index"
                  @click="$emit('selectPlatform', platform)"
                  dark
                  color="green"
                >
                  <v-list-item-title>{{ platform.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu offset-x open-on-hover nudge-right="5">
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  class="ma-2"
                  color="amber"
                  text-color="white"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-avatar left class="amber darken-4">
                    {{ (game.difficulties || []).length }}
                  </v-avatar>
                  Difficulties
                </v-chip>
              </template>
              <v-list color="amber" dense>
                <v-list-item
                  v-for="(difficulty, index) in game.difficulties"
                  :key="index"
                  dark
                  color="amber"
                >
                  <v-list-item-title>{{ difficulty.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu offset-x open-on-hover nudge-right="5">
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  class="ma-2"
                  color="grey"
                  text-color="white"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-avatar left class="grey darken-4">
                    {{ (game.modes || []).length }}
                  </v-avatar>
                  Modes
                </v-chip>
              </template>
              <v-list color="grey" dense>
                <v-list-item
                  v-for="(mode, index) in game.modes"
                  :key="index"
                  dark
                  color="grey darken-4"
                >
                  <v-list-item-title>{{ mode.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col>
            <v-btn
              tile
              small
              class="mr-1 mb-3 elevation-5"
              dark
              color="orange"
              @click="$emit('addScore', { game })"
            >
              <v-icon left small>mdi-plus</v-icon>
              Add Score
            </v-btn>
            <v-btn
              tile
              small
              depressed
              class="mr-1 mb-3"
              target="_blank"
              :href="game.thread"
            >
              <v-icon left small>mdi-eye</v-icon>
              Read Topic
            </v-btn>
            <v-btn tile small depressed @click="$emit('configureGame', game)">
              <v-icon left small>mdi-cog</v-icon>
              Configure
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <!-- Rankings -->
      <v-col cols="12" sm="11" md="8" lg="10">
        <Ranking
          :ranking="ranking"
          v-for="(ranking, i) in rankings"
          :key="`ranking-${i}`"
          :id="`ranking-${i}`"
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
import Cover from "../atoms/Cover.vue";

export default Vue.extend({
  name: "Game",
  props: ["game", "rankings", "currentPlayerId", "hideRankingMenu"],
  components: { Ranking, Cover },
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
