pragma solidity ^0.5.0;


import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract TutorialToken is ERC20, ERC20Detailed {

  uint public INITIAL_SUPPLY = 10000;

  constructor() public ERC20Detailed("TutorialToken", "TT", 0) {
     _mint(msg.sender, INITIAL_SUPPLY);
  }
}
