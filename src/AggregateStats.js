import { ethers } from 'ethers';

import buildingContractJson from '../build/contracts/Building.json';

// Ganache
const BUILDING_ADDRESS = '0x7b6f9bE52C54f675DAF4529742aa0c4D85b9a0eF';
const FIRST_BLOCK = 0;

function listenForTenantUpdates(callback) {
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
      address: tenant,
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

export function aggregateStats(callback) {
  let allTenantsWithJobs = new Set();
  let curTenantsWithJobs = new Set();
  let graduatedTenants = new Set();

  let programDuration = new Map();
  let joblessDuration = new Map();

  // TODO claim stats

  function update(tenant) {
    callback({
      jobsCreated: allTenantsWithJobs.size,
      currentlyEmployed: curTenantsWithJobs.size,
      avgTimeToIndependence: mapValuesAverage(programDuration),
      nowIndependent: graduatedTenants.size,
      avgTimeToFindJob: mapValuesAverage(joblessDuration),
      tenant,
    });
  }

  listenForTenantUpdates(tenant => {
    if (tenant.outcomes && tenant.outcomes.length > 0) {
      allTenantsWithJobs.add(tenant.address);
      curTenantsWithJobs.add(tenant.address);
      joblessDuration.set(
        tenant.address, tenant.outcomes[0].period - tenant.onboarding + 1);
    }

    if (tenant.graduation) {
      graduatedTenants.add(tenant.address);
      curTenantsWithJobs.delete(tenant.address);
      programDuration.set(
        tenant.address, tenant.graduation - tenant.onboarding + 1);
    }

    update(tenant);
  });
}

function mapValuesAverage(m) {
  if (m.size > 0) {
    return m.values().reduce((a, b) => a + b) / m.size;
  } else {
    return null;
  }
}
