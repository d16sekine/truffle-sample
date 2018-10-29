pragma solidity ^0.4.22;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract MyTokens is ERC20, ERC20Detailed {

    string private _name = "SampleDappCoin";  //変更可能
    string private _symbol = "SDC"; //変更可能
    uint8 private _decimals = 18;

    address account = msg.sender;
    uint value = 1000000;
    constructor() ERC20Detailed( _name, _symbol, _decimals) public {
            _mint(account, value);
    }
  

}
