pragma solidity ^0.4.22;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract MyTokens is StandardToken {

    string public _name = "SampleDappCoin";  //変更可能
    string public _symbol = "SDC"; //変更可能
    uint8 public _decimals = 18;
    uint public INITIAL_SUPPLY = 1000; //変更可能

    mapping(address => uint) private _balances;

    constructor() public {
     _balances[msg.sender] = INITIAL_SUPPLY;
  }

}
