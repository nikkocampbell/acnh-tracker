import Vue from 'vue';
import Vuex from 'vuex';
import fishData from '../data/fish';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hemisphere: 'north',
    time: '00:00:00',
    month: 1,
    fish: fishData.map((f) => ({
      ...f,
      caught: false,
      canCatch: false,
    })),
  },
  getters: {
    hour(state) {
      return parseInt(state.time.split(':')[0], 10);
    },
  },
  mutations: {
    updateHemisphere(state, value) {
      state.hemisphere = value;
    },
    updateTime(state, value) {
      state.time = value;
    },
    updateMonth(state, value) {
      state.month = value;
    },
    updateCanCatch(state, { id, value, list }) {
      const index = state[list].findIndex((i) => i.id === id);
      state[list][index].canCatch = value;
    },
    updateCaught(state, { id, value, list }) {
      const index = state[list].findIndex((i) => i.id === id);
      state[list][index].caught = value;
    },
  },
  actions: {
    updateHemisphere({ commit }, value) {
      commit('updateHemisphere', value);
    },
    updateTime({ commit }, value) {
      commit('updateTime', value);
    },
    updateMonth({ commit }, value) {
      commit('updateMonth', value);
    },
    updateCanCatch({ commit }, { id, value, list }) {
      commit('updateCanCatch', { id, value, list });
    },
    updateCaught({ commit }, { id, value, list }) {
      commit('updateCaught', { id, value, list });
    },
  },
  modules: {
  },
});
