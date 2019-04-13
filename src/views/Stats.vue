<template>
  <div id="app">
    <NavBar selected="stats"/>
    <div id="chart">
      <StatsNumbers />
      <StatsList />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import aggregateStats from '../AggregateStats.js'

aggregateStats(tenant => {
  console.log(tenant);
});
import StatsNumbers from '../components/StatsNumbers.vue'
import StatsList from '../components/StatsList.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    StatsNumbers,
    StatsList
  }
}
</script>

<style scoped>
  * {
    text-align: center;
  }

  #chart {
    margin: auto;
    margin-top: 30px;
    width: 1400px;
    min-width: 70vw;
    max-width: 90vw;
  }
</style>
