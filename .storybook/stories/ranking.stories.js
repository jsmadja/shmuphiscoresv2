import {action} from "@storybook/addon-actions";
import Ranking from "../../src/components/organisms/Ranking";

const ranking = {
        "mode": {"id": 1, "name": "Version 1.5", "scoreType": ""},
        "difficulty": {"id": 4, "name": "Original"},
        "scores": [{
            "rank": 1,
            "value": 425027421,
            "player": {"id": 146, "name": "Rechiku"},
            "photo": "http://www.hostingpics.net/viewer.php?id=813400futari15Original351746382.jpg",
            "inp": "http",
            "replay": "http://www.youtube.com/watch?v=cFnEqP_UP_A&feature=youtu.be",
            "stage": "ALL",
            "id": 4,
            "comment": "All(Lx4) Reco Normal",
            "oneCC": true
        }, {
            "rank": 2,
            "value": 375804585,
            "player": {"id": 12, "name": "kawaijb"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "ALL",
            "id": 5,
            "comment": "Reco normal ALL (Lx2)",
            "oneCC": true
        }, {
            "rank": 3,
            "value": 351746382,
            "player": {"id": 150, "name": "Undef"},
            "photo": "http://www.hostingpics.net/viewer.php?id=813400futari15Original351746382.jpg",
            "inp": null,
            "replay": "",
            "stage": "ALL",
            "id": 8894,
            "comment": "Reco Normale",
            "oneCC": true
        }, {
            "rank": 4,
            "value": 326813672,
            "player": {"id": 354, "name": "HUU"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "ALL",
            "id": 6,
            "comment": "Reco Normal",
            "oneCC": true
        }, {
            "rank": 5,
            "value": 277218745,
            "player": {"id": 14, "name": "Aliquantic"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "5",
            "id": 7,
            "comment": "Reco normal stage 5 Boss",
            "oneCC": false
        }, {
            "rank": 6,
            "value": 276836578,
            "player": {"id": 161, "name": "KAB"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "ALL",
            "id": 8,
            "comment": "Palm normal",
            "oneCC": true
        }, {
            "rank": 7,
            "value": 275250788,
            "player": {"id": 16, "name": "Sezi"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "5",
            "id": 9,
            "comment": "palm abnormal stage 5boss",
            "oneCC": false
        }, {
            "rank": 8,
            "value": 257262671,
            "player": {"id": 284, "name": "neo90"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "ALL",
            "id": 10,
            "comment": "Reco normal",
            "oneCC": true
        }, {
            "rank": 9,
            "value": 241314692,
            "player": {"id": 171, "name": "Y'om"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "ALL",
            "id": 11,
            "comment": "Reco Normal ALL(lx1)",
            "oneCC": true
        }, {
            "rank": 10,
            "value": 241163346,
            "player": {"id": 1, "name": "anzymus"},
            "photo": "http://hiscores.shmup.com/photos/1528479280588-20180608193220756x1008.jpg",
            "inp": null,
            "replay": "",
            "stage": "ALL",
            "id": 14494,
            "comment": "",
            "oneCC": true
        }, {
            "rank": 11,
            "value": 231207990,
            "player": {"id": 586, "name": "E.T.E"},
            "photo": null,
            "inp": null,
            "replay": null,
            "stage": "ALL",
            "id": 12,
            "comment": "Palm Abnormal",
            "oneCC": true
        },
        ]
    };

const noScoreRanking = {
    "mode": {"id": 1, "name": "Version 1.5", "scoreType": ""},
    "difficulty": {"id": 4, "name": "Original"},
    "scores": []
};

const timerScoreRanking = {
    "mode": {"id": 1, "name": "Version 1.5", "scoreType": "timer"},
    "difficulty": {"id": 4, "name": "Original"},
    "scores": [{
    "rank": 1,
    "value": -62167219534946,
    "player": {"id": 146, "name": "Rechiku"},
    "photo": "http://www.hostingpics.net/viewer.php?id=813400futari15Original351746382.jpg",
    "inp": "http",
    "replay": "http://www.youtube.com/watch?v=cFnEqP_UP_A&feature=youtu.be",
    "stage": "ALL",
    "id": 4,
    "comment": "All(Lx4) Reco Normal",
    "oneCC": true
}]};

export default {
    title: "Organism/Ranking",
};

export const defaultRanking = () => ({
    components: {Ranking},
    template: `
        <Ranking current-player-id="1" :ranking="ranking" @addScore="onAddScore" />`,
    data: () => ({ ranking}),
    methods: {
        onAddScore: action('onAddScore'),
    },
});

export const emptyRanking = () => ({
    components: {Ranking},
    template: `
        <Ranking current-player-id="1" :ranking="ranking" @addScore="onAddScore" />`,
    data: () => ({ ranking: noScoreRanking}),
    methods: {
        onAddScore: action('onAddScore'),
    },
});

export const timerRanking = () => ({
    components: {Ranking},
    template: `
        <Ranking current-player-id="1" :ranking="ranking" @addScore="onAddScore" />`,
    data: () => ({ ranking: timerScoreRanking}),
    methods: {
        onAddScore: action('onAddScore'),
    },
});
