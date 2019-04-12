<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h4>History</h4>
    </div>
    <div class="
      mdl-cell
      mdl-cell--3-offset-desktop
      mdl-cell--6-col-desktop
      mdl-cell--12-col-tablet
      mdl-cell--12-col-phone
      trasnaction-list">
      <table class="mdl-list">
        <Transaction v-for="transaction in transactions" v-bind:key="transaction.period" v-bind:details="transaction"/>
      </table>
    </div>
  </div>
</template>

<script>
import State from '../State.js'
import Transaction from './Transaction'

export default {
  name: "TransactionHistory",
  data () {
    return {
      state: State.state,
      // TODO fetch transactions dynamically
      // Types : enum ['pending', 'withdrawal', 'saved', 'rejected']
      transactions: [
        {
          timestamp: 1,
          type: 'pending',
          amount: 100
        },
        {
          timestamp: 2,
          type: 'saved',
          amount: 1000
        },
        {
          timestamp: 2,
          type: 'withdrawal',
          amount: 100
        }
      ]
    }
  },
  components: {
    Transaction
  }
};
</script>

<style scoped>
  .transaction-list {
    /* text-align: center; */
    margin: auto;
  }
</style>