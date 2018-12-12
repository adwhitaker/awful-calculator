import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const types = {
    ADD_NUMBER: 'ADD_NUMBER',
    UPDATE_INPUT: 'UPDATE_INPUT',
}

export default new Vuex.Store({
    state: {
        input: '',
        total: 0,
        counter: 0,
    },
    getters: {
        combinedTotal(state) {
            return state.total + state.counter
        },
    },
    mutations: {
        [types.ADD_NUMBER](state, newAmount) {
            state.counter = state.counter + 1
            state.total = state.total + newAmount
            state.input = ''
        },
        [types.UPDATE_INPUT](state, value) {
            state.input = state.input.toString() + value.toString()
        },
    },
    actions: {
        [types.ADD_NUMBER]({ commit, state }) {
            commit(types.ADD_NUMBER, Number(state.input))
        },
        [types.UPDATE_INPUT]({ commit }, value) {
            commit(types.UPDATE_INPUT, value)
        },
    },
})
