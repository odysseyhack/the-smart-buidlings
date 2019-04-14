<template>
  <div class="mdl-grid">
    <Claim
      img="job.png"
      class="mdl-cell--2-offset-desktop"
      title="I have a job"
      description="
      Please upload your payment slip for validation. After successful validation
      you will receive €100."
      @uploaded="handleJobClaim" />

    <Claim
      img="sold.png"
      title="I'm moving out"
      description="
      Please upload your payment slip for validation. After successful validation
      your savings will be payed out."
      @uploaded="handleMoveOutClaim" />
  </div>
</template>

<script>
import Blockchain from '../Blockchain.js';
import Claim from './Claim';
import State from '../State.js';

export default {
  data() {
    return {
      state: State,
    };
  },
  components: {
    Claim
  },
  props: {
    currentStatus: String
  },
  methods: {
    handleJobClaim() {
      this.state.showQuestionModalDialog(choice => {
        Blockchain.claimReward(choice);
      })
    },

    handleMoveOutClaim() {
      Blockchain.claimMoveOut();
    },
  },
  name: "Claims",
};
</script>

<style>

</style>
