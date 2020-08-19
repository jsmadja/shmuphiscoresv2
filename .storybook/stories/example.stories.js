import { storyFactory } from '../util/helpers'
import HelloWorld from "../../src/components/HelloWorld";

export default { title: 'BaseCard' }

const story = storyFactory()

export const asDefault = () => story({
  components: {HelloWorld},
  template: `
    <HelloWorld/>
  `,
})
