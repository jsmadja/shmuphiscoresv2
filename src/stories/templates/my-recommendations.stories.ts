import { VueStory } from "@/shims-vue";
import MyRecommendationsTemplate from "../../../src/components/templates/MyRecommendationsTemplate.vue";
import myRecommendations from "../data/my-recommendations";
import { recommendationTypes } from "@/models/recommendations";
import { action } from "@storybook/addon-actions";

export default {
  title: "Template/MyRecommendations",
};
export const Loading = (): VueStory => ({
  components: { MyRecommendationsTemplate },
  template: `<my-recommendations-template :my-recommendations="myRecommendations"
                                            :pending-recommendations="pendingRecommendations" />`,
  data: () => ({
    pendingRecommendations: recommendationTypes,
    myRecommendations: {},
  }),
});

export const PartiallyLoaded = (): VueStory => ({
  components: { MyRecommendationsTemplate },
  template: `<my-recommendations-template :my-recommendations="myRecommendations"
                                            :pending-recommendations="pendingRecommendations"
                                            @goToGame="goToGame"
    />`,
  data: () => ({
    pendingRecommendations: ["nearestScoredGame", "farestScoredGame"],
    myRecommendations: {
      ...myRecommendations,
      nearestScoredGame: undefined,
      farestScoredGame: undefined,
    },
  }),
  methods: {
    goToGame: action("goToGame"),
  },
});

export const WithRecommendations = (): VueStory => ({
  components: { MyRecommendationsTemplate },
  template: `<my-recommendations-template :my-recommendations="myRecommendations"
                                            :pending-recommendations="pendingRecommendations"
                                            @goToGame="goToGame"
    />`,
  data: () => ({
    pendingRecommendations: [],
    myRecommendations,
  }),
  methods: {
    goToGame: action("goToGame"),
  },
});
