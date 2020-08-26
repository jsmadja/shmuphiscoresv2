import EditGameTemplate from "../../src/components/templates/EditGameTemplate";
import {action} from "@storybook/addon-actions";

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
    "ships": [{"id": 1, "name": "Type A"}],
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
    title: "Template/EditGameTemplate",
};
export const defaultGame = () => ({
    components: {EditGameTemplate},
    template: `
        <EditGameTemplate :game="game" 
                          :platforms="platforms"
                          @copyForumCode="onCopyForumCode"
                          @addPlatforms="onAddPlatforms"
                          @createMode="onCreateMode"
                          @createDifficulty="onCreateDifficulty"
                          @createShip="onCreateShip"
                          @createStage="onCreateStage"
                          @goToGamePage="onGoToGamePage"
        />`,
    data: () => ({
        game,
        platforms: ["3DS", "Amiga"],
    }),
    methods: {
        onCopyForumCode: action('copyForumCode'),
        onAddPlatforms: action('addPlatforms'),
        onCreateMode: action('createMode'),
        onCreateDifficulty: action('createDifficulty'),
        onCreateShip: action('createShip'),
        onCreateStage: action('createStage'),
        onGoToGamePage: action('goToGamePage'),
    },
});

