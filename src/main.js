import Vue from 'vue'
import Voting from './Voting.vue'
import Wallet from './Wallet.vue'
import NotFound from './NotFound.vue'

Vue.config.productionTip = false

const routes = {
  '/': Wallet,
  '/wallet': Wallet,
  '/voting': Voting
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
}).$mount('#app')
