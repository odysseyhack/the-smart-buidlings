<template>
  <div id="app">
    <NavBar selected="onboard"/>
    <h5>Please provide eth address for a new tenant</h5>
    <input class="mdl-textfield__input" type="text" id="address" v-model="address">
    <button @click="onboard()" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      Add
    </button>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Blockchain from '../Blockchain.js'

export default {
  name: 'app',
  data () {
    return {
      address: ""
    }
  },
  components: {
    NavBar,
  },
  methods: {
    onboard () {
      Blockchain.onboard(this.address)
    }
  }
}
</script>

<style scoped>
  * {
    text-align: center;
    margin-top: 40px;
  }



</style>
