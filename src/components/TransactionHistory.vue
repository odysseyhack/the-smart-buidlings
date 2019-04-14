<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h3>Transaction history</h3>
    </div>
    <div class="
      mdl-cell
      mdl-cell--2-offset-desktop
      mdl-cell--6-col-desktop
      mdl-cell--1-offset-tablet
      mdl-cell--12-col-tablet
      mdl-cell--12-col-phone
      trasnaction-list">
      <table class="mdl-list">
        <Transaction v-if="currentStatus == 'pending'" v-bind:details="{type: 'pending', period: currentPeriod}" />
        <Transaction v-for="transaction in transactions" v-bind:key="transaction.period" v-bind:details="transaction"/>
      </table>
    </div>
  </div>
</template>

<script>
import State from '../State.js'
import Transaction from './Transaction'

State.startHistoryEventListening()

export default {
  name: "TransactionHistory",
  data () {
    return {
      state: State.state,
      // TODO fetch transactions dynamically
      // Types : enum ['pending', 'withdrawal', 'saved', 'rejected']
      // transactions: [
      //   {
      //     timestamp: 1,
      //     type: 'pending',
      //     amount: 100
      //   },
      //   {
      //     timestamp: 2,
      //     type: 'saved',
      //     amount: 1000
      //   },
      //   {
      //     timestamp: 2,
      //     type: 'withdrawal',
      //     amount: 100
      //   }
      // ]
    }
  },
  props: {
    currentStatus: String,
    currentPeriod: Number
  },
  computed: {
    transactions () {
      let txs = Object.values(this.state.history)
      let res = txs.map(function (tx) {
        tx.type = tx.choice
        if (tx.type == 'savings') {
          tx.amount = 5
        }
        if (tx.type == 'cash') {
          tx.amount = 4
        }
        return tx
      })
      console.log(res)
      return res
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
