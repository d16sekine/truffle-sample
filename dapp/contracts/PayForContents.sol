pragma solidity ^0.4.22;


contract PayForContents {

  struct Info {
    uint endTime;
    bool status;
    uint paidAmount;
  }

  //ToDo いずれZeppelin使う
  // address public owner;
  // address public service;

  //

  mapping(address => Info) public userInfo;

  constructor() {
    //owner = msg.sender;
  }

  function pay() public payable {
    require(msg.value > 0);
    userInfo[msg.sender].paidAmount += msg.value;
    userInfo[msg.sender].endTime = now + 60; //1 minute
    userInfo[msg.sender].status = true;    
  }

  function getUserStatus(address _from) public view returns (bool){
    return userInfo[_from].status;
  }

  function getPaidAmount(address _from) public view returns (uint amount) {
    return userInfo[_from].paidAmount;
  }

  function test() public pure returns (string) {
    return "OK";
  }

  // function getBalance() public view returns (uint amount) {
  //   return this.balance;
  // }

}
