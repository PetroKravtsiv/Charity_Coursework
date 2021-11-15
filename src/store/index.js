import { createStore } from "vuex";
import auth from "./auth.store";
import charity from "./charity.store";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    charity,
  },
});
