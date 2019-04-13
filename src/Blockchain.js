import {ethers} from 'ethers'
import buildingContractJson from '../build/contracts/Building.json';
import Periods from './Periods'

const SPENDING_TYPE = {
  cash: 0,
  savings: 1
}
const BUILDING_ADDRESS = '0x7b6f9bE52C54f675DAF4529742aa0c4D85b9a0eF'
/* eslint-disable */
const provider = new ethers.providers.Web3Provider(web3.currentProvider)
/* eslint-enable */

export default {
  provider,

  claim (choice) {
    let contract = new ethers.Contract(BUILDING_ADDRESS, buildingContractJson.abi, provider)

    contract.claim(Periods.getCurrent(), SPENDING_TYPE[choice])
  },

  onboard (address) {
    // TODO
    console.log('Onboarding on blockchain: ' + address)
  }
}