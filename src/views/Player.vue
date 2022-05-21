<template>
  <player-template
    :loading="loading"
    :scores="scores"
    :can-edit="canEdit()"
    @goToGame="goToGame"
    @goToPlatform="goToPlatform"
    @goToScore="goToScore"
    @goToEditScore="goToEditScore"
  />
</template>

<script lang="ts">
import { getScoresByPlayer } from "@/repository";
import Vue from "vue";
import PlayerTemplate from "@/components/templates/PlayerTemplate.vue";
import { Score } from "@/models/score";
import { goToScore } from "@/router/routes";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Player",
  components: { PlayerTemplate },
  async created() {
    this.loading = true;
    this.playerId = +this.$route.params.id;
    this.scores = await getScoresByPlayer(this.playerId);
    this.loading = false;
  },
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      loading: true,
      scores: [] as Score[],
      playerId: -1,
    };
  },
  methods: {
    canEdit() {
      return this.user?.id === +this.$route.params.id;
    },
    goToGame(game) {
      this.$router.push(`/games/${game.id}`);
    },
    goToPlatform(platform) {
      this.$router.push(`/platform/${platform.name}`);
    },
    goToScore(score) {
      goToScore(score);
    },
    goToEditScore(score) {
      this.$router.push(`/games/${score.game.id}/scores/${score.id}/edit`);
    },
  },
});
</script>
