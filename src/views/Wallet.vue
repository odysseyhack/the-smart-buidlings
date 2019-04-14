<template>
  <div id="app">
    <NavBar selected="wallet"/>
    <Wallet v-bind:currentPeriod="currentPeriod" />
    <QuestionModalDialog />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Wallet from '../components/Wallet.vue'
import QuestionModalDialog from '../components/QuestionModalDialog.vue'
import Blockchain from '../Blockchain.js'

export default {
  name: 'app',
  components: {
    Wallet,
    NavBar,
    QuestionModalDialog
  },
  asyncComputed: {
    async currentPeriod () {
      return await Blockchain.getCurrentPeriod()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700');

body {
color: #497C99 !important;
}

h1, h2, h3, h4 {
font-weight: 500;
color: #184E6D !important;
}
</style>
