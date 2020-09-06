import PlayersTemplate from "../../../src/components/templates/PlayersTemplate.vue";
import players from "../data/players.json";

export default {
    title: "Template/Players",
};

export const withPlayers = () => ({
    components: {PlayersTemplate},
    template: `<players-template :players="players" current-player-id="6" />`,
    data: () => ({ players })
});
