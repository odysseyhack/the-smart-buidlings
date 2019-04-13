<template>
  <div id="app">
    <NavBar selected="stats"/>
    <div id="chart">
      Chart will be here
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import aggregateStats from '../AggregateStats.js'

aggregateStats(tenant => {
  console.log(tenant);
});

export default {
  name: 'app',
  components: {
    NavBar
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
    height: 600px;
    min-width: 70vw;
    max-width: 90vw;
    background: lightcyan;
  }
</style>
