import Vue from "vue";
import App from "./App.vue";

export default context => {
  return new Vue({
    ...App,
    data: () => context.data
  });
};
