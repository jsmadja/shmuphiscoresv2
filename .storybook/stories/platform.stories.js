import { action } from '@storybook/addon-actions';
import PlatformTemplate from "../../src/components/templates/PlatformTemplate";

export default {
    title: "Template/Platform",
};
export const withGames = () => ({
    components: {PlatformTemplate},
    template: `<PlatformTemplate platform-title="PCB" :games="games" @selectGame="onSelectGame"/>`,
    data: () => ({
        games: [
            {
                "id": 409,
                "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=13258",
                "cover": "/covers/14.jpg",
                "title": "Mushihimesama",
                "platforms": [
                    {
                        "id": 975,
                        "name": "PCB"
                    }
                ],
                "difficulties": [
                    {
                        "id": 551,
                        "name": "ULTRA"
                    }
                ],
                "modes": [
                    {
                        "id": 966,
                        "name": "ARCADE Original",
                        "scoreType": ""
                    }
                ],
                "ships": [

                ],
                "stages": [
                    {
                        "id": 6068,
                        "name": "1"
                    },
                    {
                        "id": 6069,
                        "name": "1 BOSS"
                    },
                    {
                        "id": 6070,
                        "name": "2"
                    }
                ]
            }]
    }),
    methods: {
        onSelectGame: action('onSelectGame'),
    },
});
