<template>
  <v-container>
    <v-row v-if="user.authenticated">
      <v-col>
        <h1>My last scores</h1>
      </v-col>
    </v-row>
    <v-row v-if="user.authenticated">
      <v-col v-if="myLastScoresLoading" cols="12" sm="6" lg="6">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col
        v-for="(score, i) in myLastScores"
        :key="i"
        cols="12"
        sm="6"
        lg="6"
      >
        <score-card
          :score="score"
          :show-player="false"
          :show-edit-button="true"
          @goToGame="goToGame"
          @addScore="addScore"
          @editScore="editScore"
          @goToPlatform="goToPlatform"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1>Community last scores</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="lastScoresLoading" cols="12" sm="6" lg="6">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-col>
      <v-col v-for="(score, i) in lastScores" :key="i" cols="12" sm="6" lg="6">
        <score-card
          :score="score"
          :show-edit-button="score.player.id === user.id"
          :show-add-button="score.player.id === user.id"
          @goToGame="goToGame"
          @addScore="addScore"
          @editScore="editScore"
          @goToPlayer="goToPlayer"
          @goToPlatform="goToPlatform"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ScoreCard from "@/components/organisms/ScoreCard.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "HomeTemplate",
  components: { ScoreCard },
  props: [
    "myLastScores",
    "lastScores",
    "lastScoresLoading",
    "myLastScoresLoading",
  ],
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    goToPlayer(player) {
      this.$emit("goToPlayer", player);
    },
    goToGame(game) {
      this.$emit("goToGame", game);
    },
    goToPlatform(platformName) {
      this.$emit("goToPlatform", platformName);
    },
    addScore(score) {
      this.$emit("addScore", score);
    },
    editScore(score) {
      this.$emit("editScore", score);
    },
  },
});
</script>
<style lang="scss" scoped></style>
