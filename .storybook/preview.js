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

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Site theme",
    defaultValue: "dark",
    toolbar: {
      icon: "mirror",
      items: ["dark", "light"],
    },
  },
}
