import {addDecorator} from "@storybook/vue";
import { withVuetify } from './addon-vuetify'

addDecorator(withVuetify)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
