import { VueStory } from "@/shims-vue";
import PlatformButton from "../../components/atoms/PlatformButton.vue";

export default {
  title: "Atom/PlatformButton",
};

export const DefaultTemplate = (): VueStory => ({
  components: { PlatformButton },
  template: `<platform-button name="PCB" />`,
});
