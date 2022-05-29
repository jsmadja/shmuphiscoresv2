import ScoreTemplate from "../../../src/components/templates/ScoreTemplate.vue";
import history from "../data/score.history";
import historyTimerMode from "../data/score.timer.history";
import { VueStory } from "@/shims-vue";

export default {
  title: "Template/Score",
};

export const WithScoreHistoryStory = (): VueStory => ({
  components: { ScoreTemplate },
  template: `
      <score-template :history="history"/>`,
  data: () => ({ history }),
});

export const WithTimerScoreHistoryStory = (): VueStory => ({
  components: { ScoreTemplate },
  template: `
      <score-template :history="history"/>`,
  data: () => ({ history: historyTimerMode }),
});
