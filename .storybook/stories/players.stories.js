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
                "firstRankCount": 99,
                "secondRankCount": 43,
                "thirdRankCount": 18,
                "oneCreditCount": 191,
                "scores": 195
            },
            {
                "id": 6,
                "name": "yace",
                "firstRankCount": 86,
                "secondRankCount": 45,
                "thirdRankCount": 28,
                "oneCreditCount": 172,
                "scores": 252
            },
            {
                "id": 231,
                "name": "M.Knight",
                "firstRankCount": 73,
                "secondRankCount": 30,
                "thirdRankCount": 21,
                "oneCreditCount": 78,
                "scores": 192
            },
        ]
    })
});
