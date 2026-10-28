<template>
  <v-card tile>
    <v-card-title>
      <v-text-field
        v-model="filter"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        @keyup="onSearch"
        clearable
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="computedHeaders"
        :items="items"
        :search="filter"
        :item-class="itemClass"
        :mobile-breakpoint="disableMobileBreakpoint ? 0 : undefined"
        :dense="$vuetify.breakpoint.smAndDown"
        :loading="loading"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        :items-per-page="-1"
        hide-default-footer
        @click:row.self="(item) => $emit('click:row', item)"
      >
        <template
          v-for="(_, scopedSlotName) in $scopedSlots"
          v-slot:[scopedSlotName]="slotData"
        >
          <slot :name="scopedSlotName" v-bind="slotData" />
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ShmupTable",
  props: [
    "items",
    "itemClassPredicate",
    "headers",
    "loading",
    "disableMobileBreakpoint",
    "sortBy",
    "sortDesc",
    "search",
  ],
  data() {
    return {
      filter: this.search || "",
    };
  },
  computed: {
    computedHeaders() {
      return this.headers.filter(
        (h) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
  },
  methods: {
    itemClass(item) {
      return this.itemClassPredicate && this.itemClassPredicate(item)
        ? "k-row--me"
        : "";
    },
    onSearch() {
      this.$emit("search", this.filter);
    },
  },
});
</script>
