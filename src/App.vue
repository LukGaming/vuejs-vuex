<template>
  <div id="app">
    Teste
    <button @click="INCREMENT_COUNTER">Incremento</button>
    <button @click="RESET_COUNTER">Reset</button>
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
    ...mapMutations({ INCREMENT_COUNTER, RESET_COUNTER }),
  },
  computed: {
    ...mapGetters({ counter: GET_COUNTER })
  }
}
</script>

<style>
</style>
