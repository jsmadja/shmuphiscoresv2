import { action } from "@storybook/addon-actions";
import GameSettingForm from "../../../src/components/atoms/GameSettingForm.vue";
import { VueStory } from "@/shims-vue";

export default {
  title: "Atom/GameSettingForm",
};

const methods = {
  create: action("create"),
};

export const WithValues = (): VueStory => ({
  components: { GameSettingForm },
  template: `<game-setting-form settingName="mode" :values="['Arcade']" @create="create" />`,
  methods,
});

export const WithoutValues = (): VueStory => ({
  components: { GameSettingForm },
  template: `<game-setting-form settingName="mode" :values="[]" @create="create" />`,
  methods,
});
