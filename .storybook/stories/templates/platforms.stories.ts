import { action } from '@storybook/addon-actions';
import PlatformsTemplate from "../../../src/components/templates/PlatformsTemplate.vue";
import platforms from "../data/platforms.json";

export default {
    title: "Template/Platforms",
};

export const withoutPlatforms = () =>
    ({
        components: {PlatformsTemplate},
        template: `<platforms-template :platforms="platforms"/>`,
        data: () => ({ platforms: [] })
    });

export const withPlatforms = () => ({
    components: {PlatformsTemplate},
    template: `<platforms-template :platforms="platforms" @selectPlatform="onSelectPlatform"/>`,
    data: () => ({ platforms }),
    methods: {
        onSelectPlatform: action('onSelectPlatform'),
    },
});
