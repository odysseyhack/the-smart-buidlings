<template>
      <div class="
      mdl-cell
      mdl-cell--4-col-desktop
      mdl-cell--6-col-tablets
      mdl-cell--12-col-phone
      stats-number
    ">
      <h2>{{ numberText }}</h2>
      <h5>{{ unit }}</h5>
      <p>{{ title }}</p>
      </div>
</template>

<script>
export default {
  props: {
    number : Number,
    title: String,
    unit: String
  },
  computed: {
    numberText: function() {
      if (this.$props.number !== null && this.$props.number !== undefined) {
        return this.$props.number.toString();
      } else {
        return '-';
      }
    }
  },
  name: "StatsNumber",
}
</script>

<style scoped>
</style>
