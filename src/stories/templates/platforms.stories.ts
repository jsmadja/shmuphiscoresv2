import { VueStory } from "@/shims-vue";
import { action } from "@storybook/addon-actions";
import PlatformsTemplate from "../../../src/components/templates/PlatformsTemplate.vue";
import platforms from "../data/platforms";

export default {
  title: "Template/Platforms",
};

export const WithoutPlatforms = (): VueStory => ({
  components: { PlatformsTemplate },
  template: `<platforms-template :platforms="platforms"/>`,
  data: () => ({ platforms: [] }),
});

export const WithPlatforms = (): VueStory => ({
  components: { PlatformsTemplate },
  template: `<platforms-template :platforms="platforms" @selectPlatform="onSelectPlatform"/>`,
  data: () => ({ platforms }),
  methods: {
    onSelectPlatform: action("onSelectPlatform"),
  },
});
