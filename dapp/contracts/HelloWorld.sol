pragma solidity ^0.4.22;


contract HelloWorld {

  string public word;
    
    constructor(string _word) public{
        word = _word;
    }
    
    function say() view public returns(string){
        return word;
    }
    
}
