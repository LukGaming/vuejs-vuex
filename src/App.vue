<template>
  <div id="app">
    Teste
    <button @click="incrementCounter">Incremento</button>
    <button @click="resetCounter">Reset</button>
    <div>{{ counter }}</div>
  </div>
</template>

<script>
import {
  GET_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER
} from '@/store/mutations-types'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({ incrementCounter: INCREMENT_COUNTER, resetCounter: RESET_COUNTER }),
  },
  computed: {
    ...mapGetters({ counter: GET_COUNTER })
  }
}
</script>

<style>
</style>
