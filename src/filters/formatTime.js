import Vue from "vue";
import { formatTime as timeFormatter } from "../formaters";

export const formatTime = Vue.filter("formatTime", (value) => {
  if (!value) {
    return "";
  }
  return timeFormatter(value);
});
