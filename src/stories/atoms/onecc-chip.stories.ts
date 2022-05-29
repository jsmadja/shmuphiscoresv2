import { VueStory } from "@/shims-vue";
import OneCCChip from "../../../src/components/atoms/OneCCChip.vue";

export default {
  title: "Atom/OneCCChip",
};

export const DefaultTemplate = (): VueStory => ({
  components: { OneCCChip },
  template: `<one-c-c-chip />`,
});
