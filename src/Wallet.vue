<template>
  <div id="app">
    <NavBar selected="wallet"/>
    <Wallet />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Wallet from './components/Wallet.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Wallet
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
