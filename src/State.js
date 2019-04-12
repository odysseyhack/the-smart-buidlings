let Store = {
  debug: true,
  state: {
    message: 'Something'
  },
  get (prop) {
    if (prop) {
      return this.state[prop]
    } else {
      return this.state
    }
    
  },
  setMessageAction (newValue) {
    // if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    // if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = 'ZXC'
  }
}

export default Store