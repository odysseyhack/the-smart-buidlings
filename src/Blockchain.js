import { ethers } from 'ethers'

import buildingContractJson from '../build/contracts/Building.json';

const SPENDING_TYPE = {
  cash: 0,
  savings: 1
}

const BUILDING_ADDRESS = '0x66D5d082573dfaA8Fd11178e37B651CeD645A8c4';
const PERIOD_LENGTH = 100;

window.ethereum.enable();

const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
const signer = provider.getSigner();

export default {
  provider,

  async claim(choice) {
    if (SPENDING_TYPE[choice] === undefined) {
      throw new Error(`Unknown reward "${choice}"`);
    }
    console.log(`Claiming "${choice}" (${SPENDING_TYPE[choice]})`);
    await this.contract().claimOutcome(
      this.getCurrentPeriod(), SPENDING_TYPE[choice], { gasLimit: 2000000 });
  },

  async onboard(address) {
    await this.contract().onboardTenant(address);
  },

  async getSavings(tenantAddress) {
    return await this.contract().getSavings(tenantAddress);
  },

  async getCurrentPeriod() {
    let creationTime = await this.contract().creationTime();
    let now = new Date();
    return Math.floor((now - creationTime) / (PERIOD_LENGTH * 1000));
  },

  contract() {
    return new ethers.Contract(
      BUILDING_ADDRESS, buildingContractJson.abi, signer);
  }
}
