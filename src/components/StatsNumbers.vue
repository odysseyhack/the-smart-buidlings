<template>
  <div class="mdl-grid">
    <StatsNumber v-bind:number="state.stats.numbers.jobsCreated" unit="jobs" title="Jobs created" />
    <StatsNumber v-bind:number="state.stats.numbers.nowIndependent" unit="people" title="Now independent" />
    <StatsNumber v-bind:number="state.stats.numbers.currentlyEmployed" unit="people" title="Currently employed" />
    <StatsNumber v-bind:number="state.stats.numbers.avgTimeToFindJob" unit="months" title="Avg time to find job"/>
    <StatsNumber v-bind:number="state.stats.numbers.avgTimeToIndependence" unit="months" title="Avg time be independent" />
    <!-- TODO implement saved -->
    <StatsNumber v-bind:number="42" unit="times" title="Saving instead of cashing" />
  </div>
</template>

<script>
import StatsNumber from './StatsNumber'
import State from '../State.js'

export default {
  name: "StatsListElement",
  data () {
    return {
      state: State.state
    }
  },
  components: {
    StatsNumber
  }
}
</script>