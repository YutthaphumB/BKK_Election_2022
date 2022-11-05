const state = {
  currentAccount: "currentAccount",
  currentContract: "currentContract",
  contractAddress: "contractAddress",
  manager: "manager",
  voter: "voter",
  isConnected: false,
  score: [],
};

const getters = {
  
};

const mutations = {
  SET_ACCOUNT(state, payload) {
    state.currentAccount = payload;
  },
  SET_CONTRACT(state, payload) {
    state.currentContract = payload;
  },
  SET_MANAGER(state, payload) {
    state.manager = payload;
  },
  SET_VOTER(state, payload) {
    state.voter = payload;
  },
  SET_CONNECTED(state, payload) {
    state.isConnected = payload;
  },
  SET_SCORE(state, payload) {
    state.score = payload;
  },
  SET_CONTRACT_ADD(state, payload) {
    state.contractAddress = payload;
  },
};

const actions = {
  setAcc({commit}, payload) {
    commit("SET_ACCOUNT", payload);
  },
  setCon({commit}, payload) {
    commit("SET_CONTRACT", payload);
  },
  setConAdd({commit}, payload) {
    commit("SET_CONTRACT_ADD", payload);
  },
  setManaget({commit}, payload) {
    commit("SET_MANAGER", payload);
  },
  setVoter({commit}, payload) {
    commit("SET_VOTER", payload);
  },
  setConnected({commit}, payload) {
    commit("SET_CONNECTED", payload);
  },
  setScore({commit}, payload) {
    commit("SET_SCORE", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
