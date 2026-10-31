<template>
  <home-template
    :lastScores="lastScores"
    :myLastScores="myLastScores"
    :lastScoresLoading="lastScoresLoading"
    :myLastScoresLoading="myLastScoresLoading"
    :user="user"
    :platforms="platforms"
    :favoriteGames="favoriteGames"
    :favoriteBests="favoriteBests"
    :myRecommendations="myRecommendations"
    :pendingRecommendations="pendingRecommendations"
    @goToGame="goToGame"
    @goToPlatform="goToPlatform"
    @goToPlayer="goToPlayer"
    @addScore="addScore"
    @editScore="editScore"
    @deleteScore="deleteScore"
    @goToScore="goToScore"
    @toggleFavorite="toggleFavorite"
  />
</template>

<script lang="ts">
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { mapGetters } from "vuex";
import Vue from "vue";
import { goToScore } from "@/router/routes";
import { fetchMyRecommendations, getScoresByPlayer } from "@/repository";
import { Score } from "@/models/score";
import {
  recommendationTypes,
  RecommendationType,
  Recommendations,
} from "@/models/recommendations";

function defaultSetting(setting) {
  if (setting && setting.id) {
    return setting.id;
  }
  return "";
}

export default Vue.extend({
  name: "Home",
  components: {
    HomeTemplate,
  },
  data: () => ({
    lastScoresLoading: true,
    myScores: [] as Score[],
    recommendationsRequested: false,
    myRecommendations: {} as Partial<Recommendations>,
    pendingRecommendations: [] as RecommendationType[],
  }),
  created() {
    this.$store
      .dispatch("fetchLastScores")
      .then(() => (this.lastScoresLoading = false));
    this.$store.dispatch("fetchPlatforms");
  },
  computed: {
    ...mapGetters([
      "user",
      "lastScores",
      "myLastScores",
      "myLastScoresLoading",
      "platforms",
      "favoriteGames",
    ]),
    // Best ranked score of the player on each game, to show on favourites
    favoriteBests(): Record<number, Score> {
      const bests: Record<number, Score> = {};
      this.myScores.forEach((score: Score) => {
        const gameId = score.game ? score.game.id : undefined;
        if (gameId === undefined) {
          return;
        }
        const best = bests[gameId];
        if (!best || (score.rank || Infinity) < (best.rank || Infinity)) {
          bests[gameId] = score;
        }
      });
      return bests;
    },
  },
  watch: {
    user: {
      immediate: true,
      async handler(user) {
        if (user && user.authenticated) {
          this.loadRecommendations();
        }
        if (user && user.authenticated && this.favoriteGames.length > 0) {
          this.myScores = await getScoresByPlayer(user.id);
        }
      },
    },
  },
  methods: {
    loadRecommendations() {
      if (this.recommendationsRequested) {
        return;
      }
      this.recommendationsRequested = true;
      this.pendingRecommendations = [...recommendationTypes];
      fetchMyRecommendations((recommendations, types) => {
        this.myRecommendations = {
          ...this.myRecommendations,
          ...recommendations,
        };
        this.pendingRecommendations = this.pendingRecommendations.filter(
          (type) => !types.includes(type)
        );
      });
    },
    goToGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
    goToPlatform(platformName) {
      this.$router.push(`/platform/${platformName}`);
    },
    goToPlayer(player) {
      this.$router.push(`/players/${player.id}`);
    },
    addScore(score) {
      this.$router.push(
        `/games/${score.game.id}/score?mode=${defaultSetting(
          score.mode
        )}&difficulty=${defaultSetting(
          score.difficulty
        )}&stage=${defaultSetting(score.stage)}&ship=${defaultSetting(
          score.ship
        )}&platform=${score.platform.id}`
      );
    },
    editScore(score) {
      this.$router.push(`/games/${score.game.id}/scores/${score.id}/edit`);
    },
    deleteScore(score) {
      this.$store.dispatch("deleteScore", score.id);
    },
    goToScore(score) {
      goToScore(score);
    },
    toggleFavorite(game) {
      this.$store.dispatch("toggleFavoriteGame", game);
    },
  },
});
</script>
