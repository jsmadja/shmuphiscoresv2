<template>
  <v-container>
    <v-row>
      <v-col class="game-head">
        <h1>{{ game.title }}</h1>
        <button
          type="button"
          class="k-btn k-btn--ghost game-head__favorite"
          :class="{ 'game-head__favorite--on': isFavorite }"
          :aria-pressed="isFavorite ? 'true' : 'false'"
          @click="$emit('toggleFavorite', game)"
        >
          <v-icon>{{ isFavorite ? "mdi-star" : "mdi-star-outline" }}</v-icon>
          {{ isFavorite ? "Favourite" : "Add to favourites" }}
        </button>
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
          :hide-add-score-button="!user.authenticated"
          :hide-configure-button="!user.administrator"
        />
      </v-col>
      <!-- Rankings -->
      <v-col cols="12" md="8" :lg="hasRankingMenu ? 8 : 10">
        <v-progress-linear
          v-if="rankings.length <= 0"
          indeterminate
          color="orange"
        ></v-progress-linear>
        <Ranking
          :ranking="ranking"
          :current-player-id="user.id"
          v-for="(ranking, i) in rankings"
          :hide-add-score-button="!user.authenticated"
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
      <v-col v-if="hasRankingMenu" lg="2" class="d-none d-lg-block">
        <ranking-menu
          :rankings="rankings"
          :intersected-ranking="isIntersecting"
          @goTo="(target) => $vuetify.goTo(target)"
        />
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
  props: ["game", "rankings", "hideRankingMenu", "user", "isFavorite"],
  components: { Ranking, GameInformations, RankingMenu },
  data() {
    return {
      isIntersecting: {},
    };
  },
  computed: {
    hasRankingMenu(): boolean {
      return !this.hideRankingMenu && this.rankings.length > 1;
    },
    intersection: {
      get: function (): Record<string, boolean> {
        return this.isIntersecting;
      },
      set: function (isIntersecting: Record<string, boolean>) {
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

.game-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;

  &__favorite {
    .v-icon {
      color: inherit !important;
    }

    &--on {
      border-color: var(--k-accent);
      color: var(--k-first) !important;

      .v-icon {
        color: var(--k-accent) !important;
      }
    }
  }
}
</style>
