import { ethers } from 'ethers';

import buildingContractJson from '../build/contracts/Building.json';

// Ganache
const BUILDING_ADDRESS = '0x7b6f9bE52C54f675DAF4529742aa0c4D85b9a0eF';
const FIRST_BLOCK = 0;

export default function(callback) {
  console.log(ethers);
  let abi = buildingContractJson.abi;
  let web3Provider = new ethers.providers.Web3Provider(
    web3.currentProvider);

  let contract = new ethers.Contract(BUILDING_ADDRESS, abi, web3Provider);

  let filterOnboarding = contract.filters.TenantEnrolled();
  let filterOutcomes = contract.filters.OutcomeAchieved();
  let filterGraduation = contract.filters.TenantGraduated();

  let collectedData = {};

  contract.on(filterOnboarding, (tenant, period) => {
    collectedData.tenant = {
      onboarding: Number(period),
    };
    callback(collectedData.tenant);
  });

  contract.on(filterOutcomes, (tenant, period, instantCash, savingsBonus) => {
    if (!collectedData.tenant.outcomes) {
      collectedData.tenant.outcomes = [];
    }
    collectedData.tenant.outcomes.push({
      period,
      choice: (instantCash > 0 ? 'cash' : 'savings')
    });
    callback(collectedData.tenant);
  });

  contract.on(filterGraduation, (tenant, period) => {
    collectedData.tenant.assign({
      graduation: Number(period),
    });
    callback(collectedData.tenant);
  });

  web3Provider.resetEventsBlock(FIRST_BLOCK);
}
