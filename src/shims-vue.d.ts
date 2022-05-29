import { Component } from "vue";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

export type VueStory = {
  template: string;
  components: Record<string, Component>;
  methods?: Record<string, unknown>;
  data?: () => unknown;
  props?: Record<string, unknown>;
};
