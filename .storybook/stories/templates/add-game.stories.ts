import { action } from '@storybook/addon-actions';
import AddGameTemplate from "../../../src/components/templates/AddGameTemplate.vue";

export default {
    title: "Template/AddGame",
};
export const createGame = () => ({
    components: {AddGameTemplate},
    template: `<add-game-template :platforms="platforms" :user="user" @createGame="onCreateGame" />`,
    data: () => ({
        platforms: ["NG", "PCB", "SNES"],
        user: {},
    }),
    methods: { onCreateGame: action('onCreateGame') },
});
