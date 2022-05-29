import { VueStory } from "@/shims-vue";
import PlayersTemplate from "../../../src/components/templates/PlayersTemplate.vue";
import players from "../data/players";
import { action } from "@storybook/addon-actions";

export default {
  title: "Template/Players",
};

export const WithPlayers = (): VueStory => ({
  components: { PlayersTemplate },
  template: `<players-template :players="players" current-player-id="6" @goToPlayer="goToPlayer" />`,
  data: () => ({ players }),
  methods: {
    goToPlayer: action("goToPlayer"),
  },
});
