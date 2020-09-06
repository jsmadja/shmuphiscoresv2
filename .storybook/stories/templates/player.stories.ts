import PlayerTemplate from "../../../src/components/templates/PlayerTemplate.vue";
import {action} from "@storybook/addon-actions";
import scores from "../data/my-last-scores.json";

const methods = {
  goToGame: action('goToGame'),
  goToPlatform: action('goToPlatform'),
};

export default {
    title: "Template/Player",
};

export const withoutPlayer = () => ({
    components: {PlayerTemplate},
    template: `<player-template :scores="scores" :loading="false"/>`,
    data: () => ({ scores: [] })
});

export const withPlayerLoading = () => ({
    components: {PlayerTemplate},
    template: `<player-template :scores="scores" :loading="true"/>`,
    data: () => ({ scores: [] })
});

export const withPlayer = () => ({
    components: {PlayerTemplate},
    template: `<player-template :scores="scores" :loading="false" @goToGame="goToGame" @goToPlatform="goToPlatform" />`,
    methods,
    data: () => ({ scores })
});
