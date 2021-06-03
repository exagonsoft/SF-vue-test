import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: null,
  },
  mutations: {
    setUsers(state, newUserList) {
      state.userList = newUserList;
    },
  },
  actions: {
    UPDATE_USERS({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3004/users')
          .then((response) => response.json())
          .then((data) => {
            commit('setUsers', data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
