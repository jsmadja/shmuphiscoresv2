import { action } from '@storybook/addon-actions';
import CompareScoresTemplate from "../../../src/components/templates/CompareScoresTemplate.vue";
import players from "../data/players";
import versus from "../data/versus";

export default {
    title: "Template/CompareScores",
};
const methods = {
    selectPlayer1: action('selectPlayer1'),
    selectPlayer2: action('selectPlayer2'),
    goToGame: action('goToGame'),
};

export const defaultTemplate = () => ({
    components: {CompareScoresTemplate},
    template: `<compare-scores-template :loading="loading"
                                        :current-user-id="currentUserId"
                                        :versus="versus"
                                        :players="players"
                                        @selectPlayer1="selectPlayer1"
                                        @selectPlayer2="selectPlayer2"
                                        @goToGame="goToGame" />`,
    data: () => ({
        players,
        versus: versus.comparisons,
        currentUserId: 0,
        loading: false
    }),
    methods,
});

export const withLoading = () => ({
    components: {CompareScoresTemplate},
    template: `<compare-scores-template :loading="loading"
                                        :current-user-id="currentUserId"
                                        :versus="versus"
                                        :players="players"
                                        @selectPlayer1="selectPlayer1"
                                        @selectPlayer2="selectPlayer2"
                                        @goToGame="goToGame" />`,
    data: () => ({
        players,
        versus: [],
        currentUserId: 0,
        loading: true
    }),
    methods,
});