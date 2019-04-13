// TODO add logging here
// import Blockchain from './Blockchain'

let State = {
  debug: true,
  state: {
    message: 'Something',
    modalVisible: false,
    modalCb: null,
    eth: {
    }  
  },
  showQuestionModalDialog (cb) {
    this.modalVisible = true
    this.modalCb = cb
    var dialog = document.querySelector('dialog');
    dialog.showModal();
  },
  setMessageAction (newValue) {
    // if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    // if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = 'ZXC'
  },
  runCallback (choice) {
    if (this.modalCb) {
      this.modalCb(choice);
    }
  }
}

export default State