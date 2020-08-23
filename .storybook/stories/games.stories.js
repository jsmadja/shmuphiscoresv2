import {action} from '@storybook/addon-actions';
import GamesTemplate from "../../src/components/templates/GamesTemplate";

export default {
    title: "Template/Games",
};
export const withGames = () => ({
    components: {GamesTemplate},
    template: `
        <GamesTemplate :games="games" @selectGame="onSelectGame" @selectPlatform="onSelectPlatform"/>`,
    data: () => ({
        games: [
            {
                "cover": "/covers/14.jpg",
                "id": 409,
                "title": "Mushihimesama",
                "platforms": [
                    "PCB"
                ],
                "players": 0,
                "scores": 0,
                "oneccs": 0
            },
            {
                "cover": "/covers/386.jpg",
                "id": 386,
                "title": "Dangun Feveron",
                "platforms": [
                    "MAME",
                    "PCB"
                ],
                "players": 0,
                "scores": 0,
                "oneccs": 0
            },
            {
                "cover": "/covers/182.jpg",
                "id": 182,
                "title": "Blade Buster",
                "platforms": [
                    "NES"
                ],
                "players": 10,
                "scores": 14,
                "oneccs": 0
            }]
    }),
    methods: {
        onSelectGame: action('onSelectGame'),
        onSelectPlatform: action('onSelectPlatform'),
    },
});
