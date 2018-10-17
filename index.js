var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./dapp/build/contracts/PayForContents.json', 'utf8'));

const myAddress = "0xa4a717ab24c148428180ae28a8947802c6ddfe71";

const cAddress = "0xaf143d9769a6988967e2f6131b429cbe9909dc8e"

console.log("coinbase:",web3.eth.coinbase);

//コントラクトを呼び出すアカウントのアドレス
let coinbase = web3.eth.accounts[0];


//コントラクトのインスタンスを生成
//const contract = web3.eth.contract(abi).at(address);

//console.log(contract.address);

var PayForContents = web3.eth.contract(contract.abi).at(cAddress);

//コントラクトのget関数を実行
let name = PayForContents.test.call();
console.log("name:",name); //h

let value = PayForContents.getPaidAmount(myAddress);
let status = PayForContents.getUserStatus(myAddress);

console.log("value:", value.toString()); //
console.log("status:", status); //