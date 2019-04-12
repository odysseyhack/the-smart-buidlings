import Vue from 'vue'
import Voting from './views/Voting.vue'
import Wallet from './views/Wallet.vue'
import NotFound from './views/NotFound.vue'
import Stats from './views/Stats'

Vue.config.productionTip = false

const routes = {
  '/': Wallet,
  '/wallet': Wallet,
  '/stats': Stats,
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
