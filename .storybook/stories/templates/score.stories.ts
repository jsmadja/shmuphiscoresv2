import ScoreTemplate from "../../../src/components/templates/ScoreTemplate.vue";
import history from "../data/score.history";

export default {
    title: "Template/Score",
};

export const withScoreHistory = () => ({
    components: {ScoreTemplate},
    template: `
      <score-template :history="history"/>`,
    data: () => ({ history })
});
