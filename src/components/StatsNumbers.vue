<template>
  <div class="mdl-grid">
    <StatsNumber number="100%" />
    <StatsNumber number="100 GBP" />
    <StatsNumber number="2000 people" />
    <StatsNumber number="2316" />
    <StatsNumber number="17 months" />
    <StatsNumber number="636" />
  </div>
</template>

<script>
import StatsNumber from './StatsNumber'

export default {
  name: "StatsListElement",
  components: {
    StatsNumber
  }
}
</script>