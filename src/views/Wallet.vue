<template>
  <div id="app">
    <NavBar selected="wallet"/>
    <Wallet />
    <QuestionModalDialog />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Wallet from '../components/Wallet.vue'
import QuestionModalDialog from '../components/QuestionModalDialog.vue'

export default {
  name: 'app',
  components: {
    Wallet,
    NavBar,
    QuestionModalDialog
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
