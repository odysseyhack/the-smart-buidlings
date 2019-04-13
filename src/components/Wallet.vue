<template>
  <div class="mdl-grid" id="wallet">
    <div class="mdl-cell mdl-cell--12-col">
      <h3>Your account</h3>
      <Balance />
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <h3>Request a bonus reward</h3>
      <Claims />
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <TransactionHistory />
    </div>
  </div>
</template>

<script>
import Balance from './Balance.vue'
import Claims from './Claims.vue'
import TransactionHistory from './TransactionHistory.vue'

export default {
  name: "Wallet",
  components: {
    Balance,
    Claims,
    TransactionHistory
  }
};
</script>

<style scoped>
  * {
    text-align: center;
    font-family: Rubik !important;
  }

  h3 {
    padding-left: 1vw;
    padding-top:20px;
  }
</style>
