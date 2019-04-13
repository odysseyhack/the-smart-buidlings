<template>
      <div class="
      mdl-cell
      mdl-cell--4-col-desktop
      mdl-cell--6-col-tablets
      mdl-cell--12-col-phone
      stats-number
    ">
      <h2>{{ number }}</h2>
      </div>
</template>

<script>
export default {
  props: {
    number : String
  },
  name: "StatsNumber",
}
</script>

<style scoped>
</style>
