import { VueStory } from "@/shims-vue";
import MyRecommendationsTemplate from "../../../src/components/templates/MyRecommendationsTemplate.vue";
import myRecommendations from "../data/my-recommendations";
import { action } from "@storybook/addon-actions";

export default {
  title: "Template/MyRecommendations",
};
export const WithoutRecommendations = (): VueStory => ({
  components: { MyRecommendationsTemplate },
  template: `<my-recommendations-template :my-recommendations="myRecommendations"
                                            :my-recommendations-loading="myRecommendationsLoading" />`,
  data: () => ({
    myRecommendationsLoading: true,
    myRecommendations: {},
  }),
});

export const WithRecommendations = (): VueStory => ({
  components: { MyRecommendationsTemplate },
  template: `<my-recommendations-template :my-recommendations="myRecommendations"
                                            :my-recommendations-loading="myRecommendationsLoading"
                                            @goToGame="goToGame"
    />`,
  data: () => ({
    myRecommendationsLoading: false,
    myRecommendations,
  }),
  methods: {
    goToGame: action("goToGame"),
  },
});
