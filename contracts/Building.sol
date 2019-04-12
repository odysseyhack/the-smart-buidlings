pragma solidity >=0.5.0 <0.6.0;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

import './Token.sol';

contract Building is Ownable {
  using SafeMath for uint;

  enum Perk {
    RENT_DISCOUNT,
    SAVINGS_BONUS
  }

  uint public SECONDS_IN_PERIOD = 100;

  Token token;
  uint rent;
  uint savingsBonus;
  uint rentDiscount;
  uint public creationTime;

  mapping(address => bool) isTenant;
  mapping(address => uint) tenantSavings;

  mapping(address => mapping(uint => bool)) wasOutcomeCompleted;
  mapping(address => mapping(uint => uint)) claimedRentDiscount;

  event OutcomeAchieved(address indexed tenant,
                        uint period,
                        uint rentDiscount,
                        uint savingsBonus);

  constructor(Token _token,
              uint _rent,
              uint _rentDiscount,
              uint _savingsBonus) public {
    token = _token;
    rent = _rent;
    rentDiscount = _rentDiscount;
    savingsBonus = _savingsBonus;
    creationTime = block.timestamp;
  }

  function payIn(uint amount) public {
    bool success = token.transferFrom(msg.sender, address(this), amount);
    require(success);
  }

  function onboardTenant(address tenant) public onlyOwner {
    isTenant[tenant] = true;
  }

  function claimOutcome(uint period, Perk perk) public onlyTenant {
    address tenant = msg.sender;
    require(
      period == currentPeriod(),
      'Period is not the current period');
    require(
      !wasOutcomeCompleted[tenant][period],
      'Outcome was already completed');

    wasOutcomeCompleted[tenant][period] = true;

    if (perk == Perk.RENT_DISCOUNT) {
      claimedRentDiscount[tenant][period] = rentDiscount;
      emit OutcomeAchieved(tenant, period, rentDiscount, 0);
    } else {
      tenantSavings[tenant] += savingsBonus;
      emit OutcomeAchieved(tenant, period, 0, savingsBonus);
    }
  }

  function getSavings(address tenant) public view returns (uint) {
    return tenantSavings[tenant];
  }

  function getRent(address tenant, uint period) public view returns (uint) {
    uint discountedRent = claimedRentDiscount[tenant][period];
    if (discountedRent > 0) {
      return discountedRent;
    } else {
      return rent;
    }
  }

  function currentPeriod() private view returns (uint) {
    return timestampToPeriod(block.timestamp);
  }

  function timestampToPeriod(uint timestamp) private view returns (uint) {
    return timestamp.sub(creationTime).div(SECONDS_IN_PERIOD);
  }

  modifier onlyTenant() {
    require(isTenant[msg.sender], 'Can only be called by a tenant');
    _;
  }
}
