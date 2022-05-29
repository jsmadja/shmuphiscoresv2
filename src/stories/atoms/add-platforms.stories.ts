import { action } from "@storybook/addon-actions";
import AddPlatforms from "../../../src/components/atoms/AddPlatforms.vue";
import { VueStory } from "@/shims-vue";

export default {
  title: "Atom/AddPlatformsForm",
};
export const AddPlatformStory = (): VueStory => ({
  components: { AddPlatforms },
  template: `<add-platforms :usedPlatforms="['PCB']" :platforms="['PS1', 'PS2', 'PCB']" @add="addPlatforms" />`,
  methods: {
    addPlatforms: action("addPlatforms"),
  },
});
