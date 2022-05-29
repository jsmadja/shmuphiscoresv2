import {action} from '@storybook/addon-actions';
import AddPlatforms from "../../../src/components/atoms/AddPlatforms.vue";

export default {
    title: "Atom/AddPlatformsForm",
};
export const addPlatform = () => ({
    components: {AddPlatforms},
    template: `<add-platforms :usedPlatforms="['PCB']" :platforms="['PS1', 'PS2', 'PCB']" @add="addPlatforms" />`,
    methods: {
        addPlatforms: action('addPlatforms'),
    },
});
