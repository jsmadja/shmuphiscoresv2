import { action } from '@storybook/addon-actions';
import PlatformsTemplate from "../../src/components/templates/PlatformsTemplate";

export default {
    title: "Template/Platforms",
};

export const withoutPlatforms = () =>
    ({
        components: {PlatformsTemplate},
        template: `<PlatformsTemplate :platforms="platforms"/>`,
        data: () => ({
            platforms: [],
        })
    });

export const withPlatforms = () => ({
    components: {PlatformsTemplate},
    template: `<PlatformsTemplate :platforms="platforms" @selectPlatform="onSelectPlatform"/>`,
    data: () => ({
        platforms: [
            {title: "NG", games: 4},
            {title: "PCB", games: 99},
        ]
    }),
    methods: {
        onSelectPlatform: action('onSelectPlatform'),
    },
});
