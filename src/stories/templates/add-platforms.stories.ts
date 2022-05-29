import { VueStory } from "@/shims-vue";
import { action } from "@storybook/addon-actions";
import AddPlatforms from "../../../src/components/atoms/AddPlatforms.vue";

export default {
  title: "Atom/AddPlatforms",
};
export const Add = (): VueStory => ({
  components: { AddPlatforms },
  template: `<add-platforms :platforms="platforms" :used-platforms="usedPlatforms" @add="onAdd"/>`,
  data: () => ({
    platforms: ["NG", "PCB", "SNES"],
    usedPlatforms: ["NG"],
  }),
  methods: { onAdd: action("add") },
});
