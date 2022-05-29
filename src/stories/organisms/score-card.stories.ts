import { VueStory } from "@/shims-vue";
import { action } from "@storybook/addon-actions";
import ScoreCard from "../../../src/components/organisms/ScoreCard.vue";
import timerScore from "../data/last-score.timer";
import lastScores from "../data/last-scores";

export default {
  title: "Organism/ScoreCard",
};

const methods = {
  onAddScore: action("onAddScore"),
  onEditScore: action("onEditScore"),
  onGoToScore: action("onGoToScore"),
};

export const TimeScore = (): VueStory => ({
  components: { ScoreCard },
  template: `
      <v-col cols="6">
      <score-card :score="score" @addScore="onAddScore" @editScore="onEditScore" @goToScore="onGoToScore" />
      </v-col>`,
  data: () => ({ score: timerScore }),
  methods,
});

export const NumericScore = (): VueStory => ({
  components: { ScoreCard },
  template: `
      <v-col cols="6">
      <score-card :score="score" @addScore="onAddScore" @editScore="onEditScore" @goToScore="onGoToScore" />
      </v-col>`,
  data: () => ({ score: lastScores[0] }),
  methods,
});
