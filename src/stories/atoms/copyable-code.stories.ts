import { action } from "@storybook/addon-actions";
import CopyableCode from "../../../src/components/atoms/CopyableCode.vue";
import { VueStory } from "@/shims-vue";

export default {
  title: "Atom/CopyableCode",
};
export const CopyStory = (): VueStory => ({
  components: { CopyableCode },
  template: `
        <copyable-code 
            title="Forum Code" 
            code="[b]Value[/b] [b]Value[/b] [b]Value[/b] [b]Value[/b] [b]Value[/b] [b]Value[/b] " 
            @copy="onCopy" />`,
  methods: {
    onCopy: action("copy"),
  },
});

export const LongTextStory = (): VueStory => ({
  components: { CopyableCode },
  template: `
        <copyable-code 
            title="Forum Code" 
            code="[b]Value[/b][b]Value[/b][b]Value[/b][b]Value[/b][b]Value[/b][b]Value[/b] " 
            @copy="onCopy" />`,
  methods: {
    onCopy: action("copy"),
  },
});
