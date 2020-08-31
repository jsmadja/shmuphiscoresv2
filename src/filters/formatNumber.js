import Vue from "vue";
import { formatNumber as fNumber } from "../formaters";

export const formatNumber = Vue.filter("formatNumber", (value) => {
  if (!value) {
    return "";
  }
  return fNumber(value);
});
