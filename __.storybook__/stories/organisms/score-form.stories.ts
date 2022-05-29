import {action} from '@storybook/addon-actions';
import ScoreForm from "../../../src/components/organisms/ScoreForm.vue";

export default {
    title: "Organism/ScoreForm",
};
const methods = {
    onCreateScore: action('createScore'),
    onUpdateScore: action('updateScore'),
};
export const emptyScoreForm = () => ({
    components: {ScoreForm},
    template: `
        <score-form :game="game" @createScore="onCreateScore"/>`,
    data: () => ({
        game: {
            platforms: [],
            modes: [],
            difficulties: [],
            ships: [],
            stages: []
        },
    }),
    methods,
});

export const minimalScoreForm = () => ({
    components: {ScoreForm},
    template: `
        <score-form :game="game" @createScore="onCreateScore"/>`,
    data: () => ({
        game: {
            platforms: [{id: 1, name: "NG"}],
            modes: [],
            difficulties: [],
            ships: [],
            stages: []
        },
    }),
    methods,
});

export const updatableScoreForm = () => ({
    components: {ScoreForm},
    template: `
        <score-form :game="game" :score="score" @updateScore="onUpdateScore"/>`,
    data: () => ({
        game: {
            platforms: [{id: 1, name: "NG"}, {id: 2, name: "PCB"}],
            modes: [{id: 1, name: "Arcade"}, {id: 2, name: "Original"}],
            difficulties: [{id: 1, name: "Easy"}, {id: 2, name: "Hard"}],
            ships: [{id: 1, name: "Type A"}, {id: 2, name: "Type B"}],
            stages: [{id: 1, name: "1"}, {id: 2, name: "2"}]
        },
        score: {
            "rank": 1,
            "value": 62167219534946,
            "createdAt": "2014-06-10T22:28:07.000+00:00",
            "photo": "http://hiscores.shmup.com/photos/1598795038344-IMG2020083001185.jpg",
            "inp": "https://my.inp.file",
            "replay": "https://www.youtube.com/watch?v=2_y3z-D6KkU",
            "stage": {id: 1, name: "1"},
            "ship": {id: 1, name: "Type A"},
            "id": 9838,
            "comment": "My comment",
            "oneCC": false,
            "mode": {
                "id": 1,
                "name": "Arcade",
            },
            "difficulty": {
                "id": 1,
                "name": "Easy",
            },
            "platform": {
                "id": 1,
                "name": "NG",
            },
        }
    }),
    methods,
});

export const fullScoreForm = () => ({
    components: {ScoreForm},
    template: `
        <score-form :game="game" @createScore="onCreateScore"/>`,
    data: () => ({
        game: {
            platforms: [{id: 1, name: "NG"}],
            modes: [{id: 1, name: "Arcade"}],
            difficulties: [{id: 1, name: "Easy"}],
            ships: [{id: 1, name: "Type A"}],
            stages: [{id: 1, name: "1"}]
        },
    }),
    methods,
});

export const timerScoreForm = () => ({
    components: {ScoreForm},
    template: `
        <score-form :game="game" @createScore="onCreateScore"/>`,
    data: () => ({
        game: {
            platforms: [{id: 1, name: "NG"}],
            modes: [{id: 1, name: "Time Attack", scoreType: "timer"}, {id: 2, name: "Arcade"}],
            difficulties: [{id: 1, name: "Easy"}],
            ships: [{id: 1, name: "Type A"}],
            stages: [{id: 1, name: "1"}]
        },
    }),
    methods,
});
