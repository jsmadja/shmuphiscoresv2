import {action} from "@storybook/addon-actions";
import GameInformations from "../../../src/components/organisms/GameInformations.vue";
import {boolean, withKnobs} from '@storybook/addon-knobs';
import game from "../data/game.json";

export default {
    title: "Organism/GameInformations",
    decorators: [withKnobs],
};

export const defaultGameInformations = () => ({
    components: {GameInformations},
    template: `
        <v-col cols="2">
            <game-informations :game="game"
                               :hide-add-score-button="hideAddScoreButton"
                               :hide-go-to-game-button="hideGoToGameButton"
                               :hide-configure-button="hideConfigureButton"
                               @configureGame="onConfigureGame"
                               @selectPlatform="onSelectPlatform"
                               @addScore="onAddScore"
                               @goToGamePage="onGoToGamePage" />
        </v-col>`,
    data: () => ({ game }),
    props: {
        hideAddScoreButton: {default: boolean('hideAddScoreButton', true)},
        hideGoToGameButton: {default: boolean('hideGoToGameButton', true)},
        hideConfigureButton: {default: boolean('hideConfigureButton', true)},
    },
    methods: {
        onAddScore: action('onAddScore'),
        onSelectPlatform: action('onSelectPlatform'),
        onConfigureGame: action('onConfigureGame'),
        onGoToGamePage: action('onGoToGamePage'),
    },
});

