import Vue from "vue";

export const formatNumber = Vue.filter("formatNumber", (value) => {
  if (!value) {
    return "";
  }
  return value.toLocaleString("de");
});
