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
import '../../src/custom.scss';

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
    // Reduce to one new URL?
    const searchParams = new URL(window.location).searchParams
    const dark = searchParams.get('eyes-variation') === 'dark'
    const rtl = searchParams.get('eyes-variation') === 'rtl'
    const vuetify = new Vuetify(deepmerge({
      rtl,
      theme: {
        dark,
        themes: {
          light: {
            primary: "#ff9800",
          },
        }
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
