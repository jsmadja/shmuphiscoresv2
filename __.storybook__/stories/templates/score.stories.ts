import ScoreTemplate from "../../../src/components/templates/ScoreTemplate.vue";
import history from "../data/score.history";
import historyTimerMode from "../data/score.timer.history";

export default {
    title: "Template/Score",
};

export const withScoreHistory = () => ({
    components: {ScoreTemplate},
    template: `
      <score-template :history="history"/>`,
    data: () => ({ history })
});

export const withTimerScoreHistory = () => ({
    components: {ScoreTemplate},
    template: `
      <score-template :history="history"/>`,
    data: () => ({ history: historyTimerMode })
});
