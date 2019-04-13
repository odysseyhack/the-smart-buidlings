<template>
  <div class="mdl-grid">
    <div class="
      mdl-cell
      mdl-cell--6-col-desktop
      mdl-cell--6-col-tablets
      mdl-cell--12-col-phone
    ">
      <img src="../../public/save-icon.png">
      <h1>€{{ savings }}</h1>
      <p>Savings</p>
    </div>
    <div class="
      mdl-cell
      mdl-cell--6-col-desktop
      mdl-cell--6-col-tablets
      mdl-cell--12-col-phone
    ">
      <img src="../../public/payout-icon.png">
      <h1>€1000</h1>
      <p>Balance</p>
    </div>
  </div>
</template>

<script>
import Blockchain from '../Blockchain.js';

let data = { savings: 88 };

let vm = {
  name: 'Balance',
  data: function() {
    return data;
  },
  methods: {
    updateSavings: async function(newValue) {
      console.log(`Updating with ${newValue}`);
      data.savings = newValue;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.web3.eth.getAccounts(async (err, accounts) => {
    vm.methods.updateSavings(await Blockchain.getSavings(accounts[0]));
  });
}, false);

export default vm;
</script>

<style>

</style>
