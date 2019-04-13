const Building = artifacts.require('Building');
const Token = artifacts.require('Token');

module.exports = async function(deployer, _, [owner]) {
  await deployer.deploy(Token, {from: owner});
  await deployer.deploy(Building, Token.address, 4, 5, {from: owner});
}
