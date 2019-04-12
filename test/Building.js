const Building = artifacts.require('Building');
const Token = artifacts.require('Token');

contract('Building', ([owner, tenant]) => {
  const RENT = 10;
  const RENT_DISCOUNT = 2;
  const SAVINGS_BONUS = 3;

  let token;
  let building; 

  beforeEach(async () => {
    token = await Token.new({from: owner});
    await token.mint(owner, 9001);

    building = await Building.new(
      token.address, RENT, RENT_DISCOUNT, SAVINGS_BONUS, {from: owner});
  });

  it('should allow access to creationTime', async () => {
    let minuteAgo = new Date();
    minuteAgo.setMinutes(minuteAgo.getMinutes() - 1);

    let minuteAfter = new Date();
    minuteAfter.setMinutes(minuteAfter.getMinutes() + 1);

    let creationTime = new Date(await building.creationTime() * 1000);
    expect(creationTime).to.be.above(minuteAgo);
    expect(creationTime).to.be.below(minuteAfter);
  });
});
