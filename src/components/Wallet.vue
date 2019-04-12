<template>
  <div class="mdl-grid" id="wallet">
    <div class="mdl-cell mdl-cell--12-col">
      <Balance />
    </div>
    <div class="mdl-cell mdl-cell--12-col">
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
  }
</style>

