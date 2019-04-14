<template>
  <div class="mdl-grid">
    <Claim img="job.png" class="mdl-cell--2-offset-desktop" title="I have a job" description="
      Please upload your payment slip for validation. After successful validation
      you will receive €100.
    "/>

    <Claim img="sold.png" title="I'm moving out" description="
      Please upload your payment slip for validation. After successful validation
      your savings will be payed out.
    "/>
    <!-- <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-card mdl-shadow--2dp claim-card">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Moving to another house</h2>
      </div>
    </div> -->
  </div>
</template>

<script>
import Claim from './Claim'

export default {
  components: {
    Claim
  },
  props: {
    currentStatus: String
  },
  name: "Claims",
};
</script>

<style>

</style>
