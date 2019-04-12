import ethers from 'ethers';

import tokenContractJson from '../build/Token.json';
import buildingContractJson from '../build/Building.json';

const BUILDING_ADDRESS = '0xDEADBEEF';
const FIRST_BLOCK = 4198878;

export default function*() {
  let abi = buildingContractJson.abi;
  let web3Provider = new ethers.providers.Web3Provider(
    web3.currentProvider, ethers.providers.networks.rinkeby);

  let contract = new ethers.Contract(BUILDING_ADDRESS, abi, web3Provider);

  let filterOnboarding = contract.filters.TenantEnrolled();
  let filterOutcomes = contract.filters.OutcomeAchieved();
  let filterGraduation = contract.filters.TenantGraduated();

  let collectedData = {};

  contract.on(filterOnboarding, (tenant, period) => {
    collectedData.tenant = {
      onboarding: Number(period),
    };
  });

  contract.on(filterOutcomes, (tenant, period, instantCash, savingsBonus) => {
    if (!collectedData.tenant.outcomes) {
      collectedData.tenant.outcomes = [];
    }
    collectedData.tenant.outcomes.push({
      period,
      choice: (instantCash > 0 ? 'cash' : 'savings')
    });
  });

  contract.on(filterGraduation, (tenant, period) => {
    collectedData.tenant.assign({
      graduation: Number(period),
    });
    yield collectedData.tenant;
  });

  contract.resetEventsBlock(FIRST_BLOCK);
}
