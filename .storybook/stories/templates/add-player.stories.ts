import { action } from '@storybook/addon-actions';
import AddPlayerTemplate from '../../../src/components/templates/AddPlayerTemplate.vue';

export default {
    title: "Template/AddPlayer",
};
export const addPlayer = () => ({
    components: {AddPlayerTemplate},
    template: `<add-player-template @createPlayer="onCreatePlayer" />`,
    data: () => ({}),
    methods: { onCreatePlayer: action('onCreatePlayer') },
});
