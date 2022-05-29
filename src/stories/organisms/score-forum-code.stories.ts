import { VueStory } from "@/shims-vue";
import { action } from "@storybook/addon-actions";
import ScoreForumCode from "../../../src/components/organisms/ScoreForumCode.vue";
import score from "../data/score";

export default {
  title: "Organism/ScoreForumCode",
};
const methods = {
  copy: action("copy"),
};
export const EmptyScoreForm = (): VueStory => ({
  components: { ScoreForumCode },
  template: `
      <score-forum-code :score="score" @copy="copy" />`,
  data: () => ({ score }),
  methods,
});
