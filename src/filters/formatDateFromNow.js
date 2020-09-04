import Vue from "vue";
import moment from "moment";

export const formatDateFromNow = Vue.filter("formatDateFromNow", (date) => {
  return moment(date).fromNow();
});
