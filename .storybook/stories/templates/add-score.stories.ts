import {action} from '@storybook/addon-actions';
import AddScoreTemplate from "../../../src/components/templates/AddScoreTemplate.vue";
import game from "../data/game";
import score from "../data/score";
import timerGame from "../data/game.timer";

const methods = {
    createScore: action('createScore'),
    editScore: action('editScore'),
    copy: action('copy'),
    goToGamePage: action('goToGamePage'),
    goToGameEdit: action('goToGameEdit'),
    loadPreviousScore: action('loadPreviousScore'),
};

export default {
    title: "Template/AddScore",
};

export const createScore = () => ({
    components: {AddScoreTemplate},
    template: `
      <add-score-template :game="game"
                          @createScore="createScore"
                          @editScore="editScore"
                          @copy="copy"
                          @goToGamePage="goToGamePage"
                          @goToGameEdit="goToGameEdit" />`,
    data: () => ({game}),
    methods,
});

export const createTimerScore = () => ({
    components: {AddScoreTemplate},
    template: `
      <add-score-template :game="game"
                          :mode="game.modes[1].id"
                          @createScore="createScore"
                          @editScore="editScore"
                          @copy="copy"
                          @goToGamePage="goToGamePage"
                          @goToGameEdit="goToGameEdit" />`,
    data: () => ({game: timerGame}),
    methods,
});

export const withDefaultValues = () => ({
    components: {AddScoreTemplate},
    template: `
      <add-score-template :game="game"
                          :mode="game.modes[0].id"
                          :difficulty="game.difficulties[0].id"
                          :ship="game.ships[0].id"
                          :platform="game.platforms[0].id"
                          :stage="game.stages[0].id"
                          @createScore="createScore"
                          @editScore="editScore"
                          @copy="copy"
                          @goToGamePage="goToGamePage"
                          @goToGameEdit="goToGameEdit" />`,
    data: () => ({ game }),
    methods,
});

export const withReferenceScore = () => ({
    components: {AddScoreTemplate},
    template: `
      <add-score-template :game="game"
                          :score="score"
                          @createScore="createScore"
                          @editScore="editScore"
                          @copy="copy"
                          @goToGamePage="goToGamePage"
                          @goToGameEdit="goToGameEdit" />`,
    data: () => ({ game, score }),
    methods,
});

export const withPreviousScore = () => ({
    components: {AddScoreTemplate},
    template: `
      <add-score-template :game="game"
                          :previousScore="score"
                          @createScore="createScore"
                          @editScore="editScore"
                          @copy="copy"
                          @goToGamePage="goToGamePage"
                          @goToGameEdit="goToGameEdit"
                          @loadPreviousScore="loadPreviousScore" />`,
    data: () => ({ game, score }),
    methods,
});