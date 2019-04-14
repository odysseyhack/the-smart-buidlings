<template>
  <div v-if="enabled === true" class="mdl-grid" id="wallet">
    <div class="mdl-cell mdl-cell--12-col">
      <h3>Your account</h3>
      <Balance />
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <h3>Request a bonus reward</h3>
      <Claims v-bind:currentStatus="currentStatus" />
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <TransactionHistory v-bind:currentStatus="currentStatus" v-bind:currentPeriod="currentPeriod" />
    </div>
  </div>
  <div v-else-if="enabled === false">
    <p>
    You don't have access to this page. If you are a new tenant
    and want to enroll, please share your Ethereum address with
    the building administrator:
    </p>
    <code>
    {{ address }}
    </code>
  </div>
</template>

<script>
import Balance from './Balance.vue'
import Claims from './Claims.vue'
import TransactionHistory from './TransactionHistory.vue'
import State from '../State.js'

import Blockchain from '../Blockchain.js';

export default {
  name: 'Wallet',
  data () {
    return {
      state: State.state,
    }
  },
  props: {
    currentPeriod: Number
  },
  computed: {
    currentStatus () {
      if (this.state.history[this.currentPeriod]) {
        return 'validated'
      }
      if (this.state.files) {
        return 'pending'
      }
      return 'free'
    }
  },
  asyncComputed: {
    enabled: async function() {
      let address = await Blockchain.account();
      return await Blockchain.isTenant(address);
    },
    address: async function() {
      return await Blockchain.account();
    }
  },
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
