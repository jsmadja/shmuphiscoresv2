import {action} from "@storybook/addon-actions";
import ScoreCard from "../../../src/components/organisms/ScoreCard.vue";
import timerScore from "../data/last-score.timer.json";
import lastScores from "../data/last-scores.json";

export default {
    title: "Organism/ScoreCard",
};

const methods = {
    onAddScore: action('onAddScore'),
    onEditScore: action('onEditScore'),
};

export const timeScore = () => ({
    components: {ScoreCard},
    template: `<v-col cols="6"><score-card :score="score" @addScore="onAddScore" @editScore="onEditScore" /></v-col>`,
    data: () => ({ score: timerScore}),
    methods,
});

export const numericScore = () => ({
    components: {ScoreCard},
    template: `<v-col cols="6"><score-card :score="score" @addScore="onAddScore" @editScore="onEditScore" /></v-col>`,
    data: () => ({ score: lastScores[0]}),
    methods,
});