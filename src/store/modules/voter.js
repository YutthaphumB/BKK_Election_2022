import axios from "axios"
const state = {
  voter: [],
};

const getters = {};

const mutations = {
  SET_VOTER(state, data) {
    state.voter = data;
  },
};

const actions = {
  async getPostVoter({ commit }) {
     await axios.get("https://backend-bkk-2022.herokuapp.com/voter")
     .then(response => {
        commit('SET_VOTER', response.data)
    })
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
