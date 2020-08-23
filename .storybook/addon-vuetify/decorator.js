// Imports
import Vue from 'vue'
import Vuetify from 'vuetify'
import { makeDecorator } from '@storybook/addons'
import formatNumber from "../../src/filters/formatNumber";

// Utilities
import deepmerge from 'deepmerge'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '../../src/custom.scss';

Vue.use(Vuetify)

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
      vuetify,
      components: { WrappedComponent },
      filters: { formatNumber },
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
