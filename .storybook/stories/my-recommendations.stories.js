import MyRecommendationsTemplate from "../../src/components/templates/MyRecommendationsTemplate";

export default {
    title: "Template/MyRecommendations",
};
export const withoutRecommendations = () => ({
    components: {MyRecommendationsTemplate },
    template: `
        <my-recommendations-template :my-recommendations="myRecommendations" my-recommendations-loading="myRecommendationsLoading" />`,
    data: () => ({
        myRecommendationsLoading: true,
        myRecommendations: {},
    })
});
