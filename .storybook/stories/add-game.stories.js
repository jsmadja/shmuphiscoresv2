import { action } from '@storybook/addon-actions';
import AddGameTemplate from "../../src/components/templates/AddGameTemplate";

export default {
    title: "Template/AddGame",
};
export const createGame = () => ({
    components: {AddGameTemplate},
    template: `<AddGameTemplate :platforms="platforms" @createGame="onCreateGame"/>`,
    data: () => ({
        platforms: ["NG", "PCB", "SNES"]
    }),
    methods: {
        onCreateGame: action('onCreateGame'),
    },
});
