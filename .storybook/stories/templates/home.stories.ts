import { action } from '@storybook/addon-actions';
import HomeTemplate from "../../../src/components/templates/HomeTemplate.vue";
import superadmin from "../data/user.superadmin";
import lastScores from "../data/last-scores";
import myLastScores from "../data/my-last-scores";

export default {
    title: "Template/Home",
};
const methods = {
    goToGame: action('goToGame'),
    goToPlatform: action('goToPlatform'),
    goToPlayer: action('goToPlayer'),
    addScore: action('addScore'),
    editScore: action('editScore'),
};

export const defaultAnonymousLoadingTemplate = () => ({
    components: {HomeTemplate},
    template: `<home-template :my-last-scores="myLastScores"
                     :user="user"
                     :last-scores="lastScores"
                     :last-scores-loading="lastScoresLoading"
                     :my-last-scores-loading="myLastScoresLoading"
                      @goToGame="goToGame"
                      @goToPlatform="goToPlatform"
                      @goToPlayer="goToPlayer"
                      @addScore="addScore"
                      @editScore="editScore"
    />`,
    data: () => ({
        user: {},
        myLastScores: [],
        lastScores: [],
        lastScoresLoading: true,
        myLastScoresLoading: true,
    }),
    methods,
});

export const defaultAuthenticatedLoadingTemplate = () => ({
    components: {HomeTemplate},
    template: `<home-template :my-last-scores="myLastScores"
                     :user="user"
                     :last-scores="lastScores"
                     :last-scores-loading="lastScoresLoading"
                     :my-last-scores-loading="myLastScoresLoading"
                      @goToGame="goToGame"
                      @goToPlatform="goToPlatform"
                      @goToPlayer="goToPlayer"
                      @addScore="addScore"
                      @editScore="editScore"
    />`,
    data: () => ({
        user: superadmin,
        myLastScores: [],
        lastScores: [],
        lastScoresLoading: true,
        myLastScoresLoading: true,
    }),
    methods,
});

export const defaultAuthenticatedTemplate = () => ({
    components: {HomeTemplate},
    template: `<home-template :my-last-scores="myLastScores"
                     :user="user"
                     :last-scores="lastScores"
                     :last-scores-loading="lastScoresLoading"
                     :my-last-scores-loading="myLastScoresLoading"
                      @goToGame="goToGame"
                      @goToPlatform="goToPlatform"
                      @goToPlayer="goToPlayer"
                      @addScore="addScore"
                      @editScore="editScore"
    />`,
    data: () => ({
        user: superadmin,
        myLastScores,
        lastScores,
        lastScoresLoading: false,
        myLastScoresLoading: false,
    }),
    methods,
});

