import Vue from "vue";

Vue.filter("img_username", function (data) {
  return data.charAt(0).toUpperCase();
});
