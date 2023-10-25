import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedIn: false,
  },
  getters: {},
  mutations: {
    setLoggedIn: (state, payload) => {
      state.loggedIn = payload;
    },
  },
  actions: {
    login: (context) => {
      console.log('store-login');
      context.commit('setLoggedIn', true);
    },
    logout: (context) => {
      context.commit('setLoggedIn', false);
    },
  },
  modules: {},
});
