import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import dashboard from "./modules/dashboard";
import user from "./modules/user";
import post from "./modules/post";

const store = new Vuex.Store({
  modules: {
    dashboard,
    user,
    post,
  },
});

export default store;
