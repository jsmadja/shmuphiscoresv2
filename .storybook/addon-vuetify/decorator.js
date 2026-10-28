// Imports
import Vue from 'vue'
import Vuetify from 'vuetify'
import { makeDecorator } from '@storybook/addons'
import VueClipboard from 'vue-clipboard2';
import {formatNumber, formatTime, formatRank} from "@/filters";
// Utilities
import deepmerge from 'deepmerge'
import VueRouter from "vue-router";

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '../../src/theme.scss';
import { vuetifyTheme } from '@/plugins/vuetifyTheme';

Vue.use(VueClipboard);
Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [],
});

export default makeDecorator({
  name: 'withVuetify',
  parameterName: 'vuetify',
  wrapper: (storyFn, context, { parameters = {} }) => {
    const dark = context.globals.theme !== 'light'
    const vuetify = new Vuetify(deepmerge({
      theme: {
        ...vuetifyTheme,
        dark,
      },
    }, parameters))

    const WrappedComponent = storyFn(context)

    return Vue.extend({
      router,
      vuetify,
      components: { WrappedComponent },
      filters: { formatNumber, formatRank, formatTime },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped-component />
          </v-container>
        </v-app>
      `,
    })
  },
})
