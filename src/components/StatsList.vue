<template>
  <div>
    <table>
      <StatsListElement
        v-for="tenant in tenants"
        v-bind:key="tenant.id"
        v-bind:start="start"
        v-bind:end="end"
        v-bind:details="tenant"
        periodsNumber="12"
      />
    </table>

    <!-- Ruler should be hardcoded -->
    <span class="ruler-label">Jan 2017</span>
    <span class="ruler-label">Jan 2018</span>
    <span class="ruler-label">Jan 2019</span>
    <span class="ruler-label">Jan 2019</span>
    <span class="ruler-label">Now</span>
  </div>

</template>

<script>
import StatsListElement from './StatsListElement'

export default {
  data () {
    return {
      start: "Jan 2017",
      end: "Jan 2019",
      tenants: [
        {
          id: 1,
          something: '123'
        },
        {
          id: 2,
          something: '123'
        },
        {
          id: 3,
          something: '123'
        },
        {
          id: 4,
          something: '123'
        }
      ] 
    }
  },
  components: {
    StatsListElement
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
    margin-left: 10vw;
  }
</style>