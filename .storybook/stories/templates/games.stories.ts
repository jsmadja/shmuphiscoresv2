import {action} from '@storybook/addon-actions';
import GamesTemplate from "../../../src/components/templates/GamesTemplate.vue";
import games from "../data/games";

export default {
    title: "Template/Games",
};
export const withGames = () => ({
    components: {GamesTemplate},
    template: `<games-template :games="games" @selectGame="onSelectGame" />`,
    data: () => ({ games }),
    methods: {
        onSelectGame: action('onSelectGame'),
    },
});
