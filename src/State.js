import dialogPolyfill from 'dialog-polyfill';
import { pick } from 'lodash';

import { aggregateStats } from './AggregateStats';

let State = {
  debug: true,
  state: {
    message: 'Something',
    modalVisible: false,
    modalCb: null,
    eth: {
    },
    stats: {
      tenants: {},
      numbers: {},
    }
  },
  startEventListening () {
    let prevThis = this;
    // let numbers = this.numbers
    aggregateStats(function (update) {
      function getOutcomesDict (outcomeList) {
        let outcomesDict = {}
        for (let outcome of outcomeList) {
          outcomesDict[outcome.period] = outcome
        }
        return outcomesDict
      }

      prevThis.state.stats.tenants[update.tenant.address] = update.tenant
      prevThis.state.stats.tenants[update.tenant.address].outcomes =
        getOutcomesDict(update.tenant.outcomes)

      prevThis.state.stats.numbers = pick(update, [
        'jobsCreated',
        'currentlyEmployed',
        'avgTimeToIndependence',
        'nowIndependent',
        'avgTimeToFindJob'
      ])
    })
  },
  showQuestionModalDialog (cb) {
    this.modalVisible = true;
    this.modalCb = cb;
    let dialog = document.querySelector('dialog');
    dialogPolyfill.registerDialog(dialog);
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
  },
}

export default State
