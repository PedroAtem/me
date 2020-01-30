import Vue from "vue";
import Vuex from "vuex";

import me from "./me";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { me },
  getters: {
    getMe: state => state.me
  },
  mutations: {},
  actions: {},
  modules: {}
});
