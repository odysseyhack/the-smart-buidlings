<template>
  <div class="mdl-grid">
    <div class="
      mdl-cell
      mdl-cell--3-offset-desktop
      mdl-cell--3-col-desktop
      mdl-cell--2-col-tablets
      mdl-cell--12-col-phone
    ">
      <div class="balancebgleft">
        <img src="../../public/save-icon.png">
        <h1>€{{ savings }}</h1>
        <p>Deposit savings</p>
      </div>
    </div>
    <div class="
      mdl-cell
      mdl-cell--3-col-desktop
      mdl-cell--2-col-tablets
      mdl-cell--12-col-phone
    ">
      <div class="balancebg">
      <img src="../../public/payout-icon.png">
      <h1>3</h1>
      <p>Bonus rewards</p>
      </div>
    </div>
  </div>
</template>

<script>
import Blockchain from '../Blockchain.js';

let data = { savings: null };

let vm = {
  name: 'Balance',
  data: function() {
    return data;
  },
  methods: {
    updateSavings: async function(newValue) {
      data.savings = newValue;
    }
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  vm.methods.updateSavings(
    await Blockchain.getSavings(await Blockchain.account()));
}, false);

export default vm;
</script>

<style>
* {
  font-family: Rubik !important;
}

h1 {
  margin-bottom:-5px;
}

p {
  font-size: 16px;
  font-weight: 500;
}

.balancebg, .balancebgleft {
background: #FFF7E5;
border-radius: 20px;
padding-top: 60px;
padding-bottom: 40px;
}

</style>
