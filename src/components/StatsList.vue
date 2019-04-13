<template>
  <div>
    <table>
      <StatsListElement
        v-for="tenant in tenantList"
        v-bind:key="tenant.address"
        v-bind:start="start"
        v-bind:end="end"
        v-bind:details="tenant"
        v-bind:periodsNumber="periodsNumber"
      />
      
    </table>

    <!-- Ruler should be hardcoded -->
    <span class="ruler-label">Jan 2016</span>
    <span class="ruler-label">Jul 2016</span>
    <span class="ruler-label">Jan 2017</span>
    <span class="ruler-label">Jul 2017</span>
    <span class="ruler-label">Jan 2018</span>
    <span class="ruler-label">Jul 2018</span>
    <span class="ruler-label">Jan 2019</span>
    <span class="ruler-label">Now</span>
  </div>

</template>

<script>
import StatsListElement from './StatsListElement'
import State from '../State.js'
import Blockchain from '../Blockchain.js'

State.startEventListening()

export default {
  data () {
    return {
      start: "Jan 2017",
      end: "Jan 2019",
      state: State.state,
    }
  },
  components: {
    StatsListElement
  },
  computed: {
    tenantList () {
      let l = []
      let counter = 1
      for (let addr in this.state.stats.tenants) {
        l.push(Object.assign(this.state.stats.tenants[addr], {id: counter++}))
      }
      return l
    }
  },
  asyncComputed: {
    async periodsNumber () {
      let res = await Blockchain.getCurrentPeriod()
      let res = 20
      return res
    }
  },
  name: "StatsList",
}
</script>

<style>
  table {
    /* border: 1px solid black; */
    border: none;
    
    width: 90vw;
  }
  .ruler-label {
    margin-left: 7vw;
  }
</style>