import {action} from "@storybook/addon-actions";
import FloatingMenu from "../../../src/components/organisms/FloatingMenu.vue";
import myLastScores from "../data/my-last-scores";
import games from "../data/games";

export default {
    title: "Organism/FloatingMenu",
};

const methods = { goToGame: action('goToGame') };

export const defaultTemplate = () => ({
    components: {FloatingMenu},
    template: `<floating-menu :my-last-scores="myLastScores"
                              :recently-viewed-games="recentlyViewedGames"
                              @goToGame="goToGame" />`,
    data: () => ({
        myLastScores,
        recentlyViewedGames: _.take(games, 6)
    }),
    methods
});

export const noLastScores = () => ({
    components: {FloatingMenu},
    template: `<floating-menu :my-last-scores="myLastScores"
                              :recently-viewed-games="recentlyViewedGames"
                              @goToGame="goToGame" />`,
    data: () => ({
        myLastScores: [],
        recentlyViewedGames: _.take(games, 6)
    }),
    methods
});

export const noRecentlyViewedGames = () => ({
    components: {FloatingMenu},
    template: `<floating-menu :my-last-scores="myLastScores"
                              :recently-viewed-games="recentlyViewedGames"
                              @goToGame="goToGame" />`,
    data: () => ({
        myLastScores,
        recentlyViewedGames: []
    }),
    methods
});

export const noHistory = () => ({
    components: {FloatingMenu},
    template: `<floating-menu :my-last-scores="[]"
                              :recently-viewed-games="[]"
                              @goToGame="goToGame" />`
});