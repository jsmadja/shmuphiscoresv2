import { VueStory } from "@/shims-vue";
import { action } from "@storybook/addon-actions";
import GamesTemplate from "../../../src/components/templates/GamesTemplate.vue";
import games from "../data/games";

export default {
  title: "Template/Games",
};
export const WithGames = (): VueStory => ({
  components: { GamesTemplate },
  template: `<games-template title="Games" :games="games" @selectGame="onSelectGame" />`,
  data: () => ({ games }),
  methods: {
    onSelectGame: action("onSelectGame"),
  },
});
