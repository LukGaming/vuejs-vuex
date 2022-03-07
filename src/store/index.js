import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {
  GET_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER
} from '../store/mutations-types'
export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    [GET_COUNTER] (state) {
      return state.counter
    }
  },
  actions: {},
  mutations: {
    [INCREMENT_COUNTER] (state) {
      state.counter++
    },
    [RESET_COUNTER] (state) {
      state.counter = 0
    }
  }
})
