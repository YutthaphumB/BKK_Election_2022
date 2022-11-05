import axios from "axios"
const state = {
  candidateValue: [],
};

const getters = {};

const mutations = {
  SET_CANDIDATE(state, data) {
    state.candidateValue = data;
  },
};

const actions = {
  async getPostCandidate({ commit }) {
     await axios.get("http://localhost:3000/candidate")
     .then(response => {
        commit('SET_CANDIDATE', response.data)
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
