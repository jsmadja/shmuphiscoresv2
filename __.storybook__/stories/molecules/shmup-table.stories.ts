import {action} from "@storybook/addon-actions";
import ShmupTable from "../../../src/components/molecules/ShmupTable.vue";

export default {
    title: "Molecules/ShmupTable",
};

const methods = {
    rowClick: action('rowClick'),
    itemClassPredicate: function (item) {
        return item.id % 2 === 1;
    }
};

export const defaultTemplate = () => ({
    components: {ShmupTable},
    template: `
      <shmup-table :items="items" :headers="headers" :item-class-predicate="itemClassPredicate"
                   @row:click="rowClick"/>`,
    data: () => ({
        items: [{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}],
        headers: [{text: "Id", value: "id"}, {text: "Name", value: "name"}]
    }),
    methods
});

export const disableMobileBreakpoint = () => ({
    components: {ShmupTable},
    template: `
      <div>
      <h1>Mobile Breakpoint Disabled</h1>
      <shmup-table :items="items"
                   :headers="headers"
                   :disable-mobile-breakpoint="true"
                   :item-class-predicate="itemClassPredicate"
                   @row:click="rowClick"/>
      <br/>
      <h1>Mobile Breakpoint Enabled (default)</h1>
      <shmup-table :items="items"
                   :headers="headers"
                   :disable-mobile-breakpoint="false"
                   :item-class-predicate="itemClassPredicate"
                   @row:click="rowClick"/>
      </div>`,
    data: () => ({
        items: [
            {id: 1, name: 'One', firstname: 'Alpha', city: "Paris"},
            {id: 2, name: 'Two', firstname: 'Bravo', city: "New-York"},
            {id: 3, name: 'Three', firstname: 'Charlie', city: "London"}
        ],
        headers: [
            {text: "Id", value: "id"},
            {text: "Name", value: "name"},
            {text: "Firstname", value: "firstname"},
            {text: "City", value: "city"},
        ]
    }),
    methods
});

export const loadingState = () => ({
    components: {ShmupTable},
    template: `
      <shmup-table :items="items" :headers="headers" :loading="true" :item-class-predicate="itemClassPredicate"
                   @row:click="rowClick"/>`,
    data: () => ({
        items: [],
        headers: []
    }),
    methods
});

export const withSlot = () => ({
    components: {ShmupTable},
    template: `
      <shmup-table :items="items"
                   :headers="headers"
                   :item-class-predicate="itemClassPredicate"
                   @row:click="rowClick">
      <template v-slot:item.name="{ item }">
        <b style="color:red">{{ item.name }}</b>
      </template>
      </shmup-table>`,
    data: () => ({
        items: [{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}],
        headers: [{text: "Id", value: "id"}, {text: "Name", value: "name"}]
    }),
    methods
});