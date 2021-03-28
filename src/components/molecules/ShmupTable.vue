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
        :hide-default-footer="hideDefaultFooter"
        :footer-props="footerProps"
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
    "hide-default-footer",
    "footer-props",
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
        ? "orange lighten-5"
        : "";
    },
    onSearch() {
      this.$emit("search", this.filter);
    },
  },
});
</script>
