import Cover from "../../../src/components/atoms/Cover.vue";
import { action } from "@storybook/addon-actions";
import { VueStory } from "@/shims-vue";

export default {
  title: "Atom/Cover",
};

const methods = {
  click: action("click"),
};

export const WithoutHiscoresPrefixUrl = (): VueStory => ({
  components: { Cover },
  template: `<v-col cols="2"><cover url="/covers/151.jpg" alt="cover" @click="click"/></v-col>`,
  methods,
});

export const WithFullUrl = (): VueStory => ({
  components: { Cover },
  template: `<v-col cols="2"><cover url="https://nsa40.casimages.com/img/2019/10/18/191018104533607309.jpg" alt="cover"/></v-col>`,
  methods,
});

export const WithoutUrl = (): VueStory => ({
  components: { Cover },
  template: `<v-col cols="2"><cover url="" alt="cover"/></v-col>`,
  methods,
});
