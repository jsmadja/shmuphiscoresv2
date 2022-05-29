import { VueStory } from "@/shims-vue";
import PlayerTemplate from "../../../src/components/templates/PlayerTemplate.vue";
import { action } from "@storybook/addon-actions";
import scores from "../data/my-last-scores";

const methods = {
  goToGame: action("goToGame"),
  goToPlatform: action("goToPlatform"),
  goToScore: action("goToScore"),
};

export default {
  title: "Template/Player",
};

export const WithoutPlayer = (): VueStory => ({
  components: { PlayerTemplate },
  template: `<player-template :scores="scores" :loading="false"/>`,
  data: () => ({ scores: [] }),
});

export const WithPlayerLoading = (): VueStory => ({
  components: { PlayerTemplate },
  template: `<player-template :scores="scores" :loading="true"/>`,
  data: () => ({ scores: [] }),
});

export const WithPlayer = (): VueStory => ({
  components: { PlayerTemplate },
  template: `<player-template :scores="scores"
                                :loading="false"
                                @goToGame="goToGame"
                                @goToPlatform="goToPlatform"
                                @goToScore="goToScore" />`,
  methods,
  data: () => ({ scores }),
});
