import { VueStory } from "@/shims-vue";
import { action } from "@storybook/addon-actions";
import PlatformTemplate from "../../../src/components/templates/PlatformTemplate.vue";
import games from "../data/games";

export default {
  title: "Template/Platform",
};
export const WithGames = (): VueStory => ({
  components: { PlatformTemplate },
  template: `<platform-template platform-title="MD" :games="games" @selectPlatform="onSelectPlatform" @selectGame="onSelectGame"/>`,
  data: () => ({ games }),
  methods: {
    onSelectGame: action("onSelectGame"),
    onSelectPlatform: action("onSelectPlatform"),
  },
});
