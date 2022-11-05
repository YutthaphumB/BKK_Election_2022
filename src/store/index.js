import {createStore} from 'vuex'
import dapp from './modules/dapp';
import candidate from './modules/candidate';
import voter from './modules/voter';

export default createStore({
    state: {
      dappState: dapp.state,
    },
    mutations: {},
    actions: {},
    modules: {
        dapp,
        candidate,
        voter,
    },
    getters: {
        getCounterState: function (state) {
            return state.dappState.currentAccount;
        },
    }
})