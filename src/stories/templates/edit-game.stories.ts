import { VueStory } from "@/shims-vue";
import EditGameTemplate from "../../../src/components/templates/EditGameTemplate.vue";
import { action } from "@storybook/addon-actions";
import game from "../data/game";
import platforms from "../data/platforms";

export default {
  title: "Template/EditGame",
};
export const DefaultGame = (): VueStory => ({
  components: { EditGameTemplate },
  template: `<edit-game-template :game="game" 
                          :platforms="platforms"
                          @copyForumCode="onCopyForumCode"
                          @addPlatforms="onAddPlatforms"
                          @createMode="onCreateMode"
                          @createDifficulty="onCreateDifficulty"
                          @createShip="onCreateShip"
                          @createStage="onCreateStage"
                          @goToGamePage="onGoToGamePage" />`,
  data: () => ({
    game,
    platforms: platforms.map((p) => p.title),
  }),
  methods: {
    onCopyForumCode: action("copyForumCode"),
    onAddPlatforms: action("addPlatforms"),
    onCreateMode: action("createMode"),
    onCreateDifficulty: action("createDifficulty"),
    onCreateShip: action("createShip"),
    onCreateStage: action("createStage"),
    onGoToGamePage: action("goToGamePage"),
  },
});
