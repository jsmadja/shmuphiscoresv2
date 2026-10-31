import { VueStory } from "@/shims-vue";
import GameTemplate from "../../../src/components/templates/GameTemplate.vue";
import { action } from "@storybook/addon-actions";
import rankings from "../data/rankings";
import game from "../data/game";

export default {
  title: "Template/Game",
};
export const DefaultGame = (): VueStory => ({
  components: { GameTemplate },
  template: `
        <game-template current-player-id="1"
                       :game="game"
                       :user="user"
                       :rankings="rankings"
                       @configureGame="onConfigureGame"
                       @selectPlatform="onSelectPlatform"
                       @addScore="onAddScore" 
                       @goToScore="onGoToScore"
        />`,
  data: () => ({
    game,
    rankings,
    user: {
      authenticated: true,
      administrator: true,
    },
  }),
  methods: {
    onAddScore: action("onAddScore"),
    onSelectPlatform: action("onSelectPlatform"),
    onConfigureGame: action("onConfigureGame"),
    onGoToScore: action("goToScore"),
  },
});

// The player (id 12) has a score in the first ranking only
const rankingsWithMyScores = [
  rankings[0],
  {
    ...rankings[0],
    mode: { id: 2, name: "Arrange" },
    scores: rankings[0].scores.filter((score) => score.player.id !== 12),
  },
];

export const WithMyScores = (): VueStory => ({
  components: { GameTemplate },
  template: `
        <game-template :game="game"
                       :user="user"
                       :rankings="rankings"
                       @goToScore="onGoToScore"
        />`,
  data: () => ({
    game,
    rankings: rankingsWithMyScores,
    user: {
      id: 12,
      authenticated: true,
    },
  }),
  methods: {
    onGoToScore: action("goToScore"),
  },
});
