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
</style>
