import PlayersTemplate from "../../src/components/templates/PlayersTemplate";

export default {
    title: "Template/Players",
};

export const withPlayers = () => ({
    components: {PlayersTemplate},
    template: `<PlayersTemplate :players="players" current-player-id="6" />`,
    data: () => ({
        players: [
            {
                "id": 1612,
                "name": "2a03",
            },
            {
                "id": 6,
                "name": "yace",
            },
            {
                "id": 231,
                "name": "M.Knight",
            },
        ]
    })
});
