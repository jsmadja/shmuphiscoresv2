import { Store } from "vuex";
import { Router, RouteLocationNormalizedLoaded } from "vue-router";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<any>;
    $copyText: (text: string, container?: HTMLElement) => Promise<unknown>;
    $router: Router;
    $route: RouteLocationNormalizedLoaded;
    $vuetify: any;
    $filters: {
      formatNumber: (value: any) => string;
      formatRank: (value: any) => string;
      formatTime: (value: any) => string;
      formatDateFromNow: (value: any) => string;
    };
  }
}
