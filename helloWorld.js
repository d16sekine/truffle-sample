var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./dapp/build/contracts/HelloWorld.json', 'utf8'));

const myAdress = "0xa4a717ab24c148428180ae28a8947802c6ddfe71";

console.log("coinbase:",web3.eth.coinbase);

//コントラクトを呼び出すアカウントのアドレス
let coinbase = web3.eth.accounts[0];


//コントラクトのインスタンスを生成
//const contract = web3.eth.contract(abi).at(address);

//console.log(contract.address);

var HelloWorld = web3.eth.contract(contract.abi).at("0x2f2de052430dfc625333feb0c9a5c8d93023078b");

//コントラクトのget関数を実行
let name = HelloWorld.say.call();
console.log("name:",name); //hanako