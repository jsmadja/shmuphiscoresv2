<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ game.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col col="12" lg="2">
        <game-informations
          :game="game"
          :hide-add-score-button="true"
          @goToGamePage="goToGamePage"
          @configureGame="goToGameEdit"
        />
      </v-col>
      <v-col>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1"
              >Register your score</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step :complete="step > 2" step="2"
              >Copy Forum Code</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step step="3">Paste on forum</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <score-form
                :game="game"
                :mode="mode"
                :difficulty="difficulty"
                :ship="ship"
                :stage="stage"
                :platform="platform"
                @createScore="onCreateScore"
              />
            </v-stepper-content>
            <v-stepper-content step="2">
              <score-forum-code @copy="onCopy" :score="score" />
            </v-stepper-content>
            <v-stepper-content step="3">
              <post-score-to-forum :game="game" />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import GameInformations from "@/components/organisms/GameInformations.vue";
import Vue from "vue";
import ScoreForm from "@/components/organisms/ScoreForm.vue";
import ScoreForumCode from "@/components/organisms/ScoreForumCode.vue";
import PostScoreToForum from "@/components/molecules/PostScoreToForum.vue";

export default Vue.extend({
  components: {
    ScoreForumCode,
    GameInformations,
    ScoreForm,
    PostScoreToForum,
  },
  props: [
    "game",
    "score",
    "mode",
    "difficulty",
    "ship",
    "stage",
    "platform",
    "step",
  ],
  methods: {
    onCreateScore(score) {
      this.$emit("createScore", score);
    },
    onCopy() {
      this.$emit("copy");
    },
    goToGamePage() {
      this.$emit("goToGamePage");
    },
    goToGameEdit() {
      this.$emit(`goToGameEdit`);
    },
  },
});
</script>
