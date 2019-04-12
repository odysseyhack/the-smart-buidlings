<template>
  <!-- <li class="mdl-list__item transaction-row" >
    <span class="mdl-list__item-primary-content">
      {{ details.period }}
      {{ details.type }}
      {{ details.amount }}
    </span>
  </li> -->


    <tr class="transaction-el">
      <td>
        <img v-if="details.type == 'saved'" src="../../public/pink-savings.png">
        <img v-if="details.type == 'withdrawal'" src="../../public/Coins.png">
        <img v-if="details.type == 'pending'" src="../../public/payslip.png">
      </td>

      <td v-if="details.type == 'saved'">
        Saved for deposit
      </td>
      <td v-if="details.type == 'withdrawal'">
        Withdrawal
      </td>
      <td v-if="details.type == 'pending'">
        Payslip submitted
      </td>
      <td> {{ date }} </td>
      <td v-if="details.type != 'pending'" >{{ '€' + amount }}</td>
      <td v-if="details.type == 'pending'" >
        <span class="pending">
          PENDING
        </span>
      </td>
    </tr>

      <!-- <span class="mdl-list__item-text-body">
        When: {{ month }}
      </span> -->
    <!-- <span class="mdl-list__item-secondary-content">
      <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
    </span> -->
</template>

<script>
export default {
  name: "Transaction",
  props: {
    details: Object
  },
  computed: {
    amount () {
      return this.details.amount + "GBP"
    },
    addedToSavings () {
      return this.details.type == "AS"
    },
    when () {
      return "January 2019"
    },
    date () {
      return 'Jan 2019'
    }
  }
};
</script>

<style scoped>
  .transaction-el {
    margin: auto;
    max-width: 400px;
    /* border: 1px black solid; */
  }

  td {
    width: 100%;
    width: 10vw;
  }

  .pending {
    border-radius: 5px;
    padding: 4px;
    background: lightblue;
  }
</style>