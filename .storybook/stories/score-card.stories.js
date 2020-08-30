import {action} from "@storybook/addon-actions";
import Ranking from "../../src/components/organisms/Ranking";
import ScoreCard from "../../src/components/organisms/ScoreCard";

const timerScore =
    {
        "game": {
          "cover": "https://hiscores.shmup.com/covers/2.jpg",
        },
        "rank": 1,
        "value": -62167219534946,
        "player": {
            "id": 111,
            "name": "chepaki"
        },
        "createdAt": "2014-06-10T22:28:07.000+00:00",
        "photo": null,
        "inp": null,
        "replay": "https://www.youtube.com/watch?v=2_y3z-D6KkU",
        "stage": {name: "1"},
        "id": 9838,
        "comment": "",
        "oneCC": false,
        "mode": {
            "id": 317,
            "createdAt": "2014-06-10T22:28:07.000+00:00",
            "name": "Time Attack",
            "sortOrder": 317,
            "scoreType": "timer"
        },
        "difficulty": {
            "id": 231,
            "createdAt": "2014-06-10T22:28:07.000+00:00",
            "name": "Normal",
            "sortOrder": 231
        },
        "platform": {
          "name": "PCE"
        },
    };

const numericalScore =
    {
        "game": {
            "cover": "https://hiscores.shmup.com/covers/2.jpg",
        },
        "rank": 1,
        "value": 62167219534946,
        "player": {
            "id": 111,
            "name": "chepaki"
        },
        "createdAt": "2014-06-10T22:28:07.000+00:00",
        "photo": null,
        "inp": null,
        "replay": "https://www.youtube.com/watch?v=2_y3z-D6KkU",
        "stage": {name: "1"},
        "id": 9838,
        "comment": "",
        "oneCC": false,
        "mode": {
            "id": 317,
            "createdAt": "2014-06-10T22:28:07.000+00:00",
            "name": "Normal",
            "sortOrder": 317,
            "scoreType": ""
        },
        "difficulty": {
            "id": 231,
            "createdAt": "2014-06-10T22:28:07.000+00:00",
            "name": "Normal",
            "sortOrder": 231
        },
        "platform": {
            "name": "PCE"
        },
    };

export default {
    title: "Organism/ScoreCard",
};

export const timeScore = () => ({
    components: {ScoreCard},
    template: `
        <score-card :score="score" @addScore="onAddScore" @editScore="onEditScore" />`,
    data: () => ({ score: timerScore}),
    methods: {
        onAddScore: action('onAddScore'),
        onEditScore: action('onEditScore'),
    },
});

export const numericScore = () => ({
    components: {ScoreCard},
    template: `
        <score-card :score="score" @addScore="onAddScore" @editScore="onEditScore" />`,
    data: () => ({ score: numericalScore}),
    methods: {
        onAddScore: action('onAddScore'),
        onEditScore: action('onEditScore'),
    },
});
