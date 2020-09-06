import GameTemplate from "../../../src/components/templates/GameTemplate.vue";
import {action} from "@storybook/addon-actions";
import rankings from "../data/rankings.json";
import game from "../data/game.json";

export default {
    title: "Template/Game",
};
export const defaultGame = () => ({
    components: {GameTemplate},
    template: `
        <game-template current-player-id="1"
                       :game="game"
                       :user="user"
                       :rankings="rankings"
                       @configureGame="onConfigureGame"
                       @selectPlatform="onSelectPlatform"
                       @addScore="onAddScore" 
        />`,
    data: () => ({
        game,
        rankings,
        user: {},
    }),
    methods: {
        onAddScore: action('onAddScore'),
        onSelectPlatform: action('onSelectPlatform'),
        onConfigureGame: action('onConfigureGame'),
    },
});

