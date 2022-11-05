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
     await axios.get("https://backend-bkk-2022.herokuapp.com/candidate")
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
