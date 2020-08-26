import {action} from '@storybook/addon-actions';
import GamesTemplate from "../../src/components/templates/GamesTemplate";

export default {
    title: "Template/Games",
};
export const withGames = () => ({
    components: {GamesTemplate},
    template: `
        <GamesTemplate :games="games" @selectGame="onSelectGame" />`,
    data: () => ({
        games: [
            {
                "cover": "/covers/14.jpg",
                "id": 409,
                "title": "Mushihimesama",
            },
            {
                "cover": "/covers/386.jpg",
                "id": 386,
                "title": "Dangun Feveron",
            },
            {
                "cover": "/covers/182.jpg",
                "id": 182,
                "title": "Blade Buster",
                "platforms": [
                    "NES"
                ],
            }]
    }),
    methods: {
        onSelectGame: action('onSelectGame'),
    },
});
