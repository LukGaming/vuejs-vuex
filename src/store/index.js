import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { counter } from './modules/counter'
export default new Vuex.Store({
  modules: {
    counter
  }
})
