import {action} from "@storybook/addon-actions";
import GameInformations from "../../src/components/organisms/GameInformations";
import {boolean, withKnobs} from '@storybook/addon-knobs';

const game = {
    "id": 2,
    "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=17554",
    "cover": "https://hiscores.shmup.com/covers/2.jpg",
    "title": "Mushihimesama Futari",
    "platforms": [{"id": 4, "name": "MAME"}, {"id": 2, "name": "PCB"}, {"id": 3, "name": "X360"}],
    "difficulties": [{"id": 4, "name": "Original"}, {"id": 5, "name": "Maniac"}, {"id": 6, "name": "God"}, {
        "id": 7,
        "name": "Ultra"
    }],
    "modes": [
        {"id": 1, "name": "Version 1.5", "scoreType": ""},
        {
            "id": 2,
            "name": "Black Label",
            "scoreType": ""
        },
        {"id": 3, "name": "Version arrange", "scoreType": ""}, {
            "id": 1048,
            "name": "Version 1.01",
            "scoreType": null
        }
    ],
    "ships": [],
    "stages": [{"id": 5, "name": "1"}, {"id": 274, "name": "1 BOSS"}, {"id": 6, "name": "2"}, {
        "id": 275,
        "name": "2 BOSS"
    }, {"id": 7, "name": "3"}, {"id": 276, "name": "3 BOSS"}, {"id": 8, "name": "4"}, {
        "id": 277,
        "name": "4 BOSS"
    }, {"id": 9, "name": "5"}, {"id": 278, "name": "5 BOSS"}, {"id": 279, "name": "True Last Boss"}, {
        "id": 10,
        "name": "ALL"
    }]
};

export default {
    title: "Organism/GameInformations",
    decorators: [withKnobs],
};

export const defaultGameInformations = () => ({
    components: {GameInformations},
    template: `
        <v-col cols="2">
            <game-informations :game="game"
                               @configureGame="onConfigureGame"
                               @selectPlatform="onSelectPlatform"
                               @addScore="onAddScore"
                               @goToGamePage="onGoToGamePage"
                               :hide-add-score-button="hideAddScoreButton"
                               :hide-go-to-game-button="hideGoToGameButton"
                               :hide-configure-button="hideConfigureButton"
            />
        </v-col>`,
    data: () => ({
        game,
    }),
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

