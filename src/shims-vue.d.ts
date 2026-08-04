import { DefineComponent } from "vue";

declare module "*.vue" {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

export type VueStory = {
  template: string;
  components: Record<string, DefineComponent>;
  methods?: Record<string, unknown>;
  data?: () => unknown;
  props?: Record<string, unknown>;
};
