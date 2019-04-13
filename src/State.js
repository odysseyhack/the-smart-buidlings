// import aggregateStats from './AggregateStats'

function aggregateStats(cb) {
  let tenantsInternal = [
    {
      address: '0x123',
      onboarding: Math.floor(Math.random() * 4) + 1,
      outcomes: [
        {
          period: Math.floor(Math.random() * 4) + 5,
          choice: 'savings'
        },
        {
          period: Math.floor(Math.random() * 4) + 5,
          choice: 'savings'
        },
        {
          period: Math.floor(Math.random() * 4) + 5,
          choice: 'savings'
        }
      ]
    },
    {
      address: '0x124',
      onboarding: Math.floor(Math.random() * 4) + 1,
      outcomes: [
        {
          period: Math.floor(Math.random() * 4) + 5,
          choice: 'savings'
        },
        {
          period: Math.floor(Math.random() * 4) + 5,
          choice: 'savings'
        },
        {
          period: Math.floor(Math.random() * 4) + 5,
          choice: 'savings'
        }
      ]
    },
  ]
  for (let tenant of tenantsInternal) {
    cb({
      jobsCreated: 10,
      currentlyEmployed: 12,
      avgTimeToIndependence: 45,
      nowIndependent: 12,
      avgTimeToFindJob: 3,
      tenant,
    })
  }
}


import {pick} from 'lodash'


import dialogPolyfill from 'dialog-polyfill';

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
