import Vue from "vue";

const formatNumber = Vue.filter("formatNumber", (value) => {
  if (!value) {
    return "";
  }
  return value.toLocaleString("de");
});

export default formatNumber;
