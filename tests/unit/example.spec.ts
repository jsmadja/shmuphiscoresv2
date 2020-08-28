import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HomeTemplate.vue";

describe("HomeTemplate.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {},
    });
    expect(wrapper.text()).toMatch(`My last scores   mdi-pencil
                EDIT   mdi-pencil
                EDIT   mdi-pencil
                EDIT   mdi-pencil
                EDIT   mdi-pencil
                EDIT  Community last scores`);
  });
});
