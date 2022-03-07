import {
  GET_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from '@/store/mutations-types'
export const counter = {
  namespaced: true,
  state: {
    counter: 0
  },
  getters: {
    [GET_COUNTER] (state) {
      return state.counter
    }
  },
  actions: {
    [INCREMENT_COUNTER] (state) {
      state.counter++
    }
  },
  mutations: {
    [INCREMENT_COUNTER] (state) {
      state.counter++
    },
    [RESET_COUNTER] (state) {
      state.counter = 0
    }
  }
}
