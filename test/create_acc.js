let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/f1b5409214e24944a575794c925e514a'));

let acc = web3.eth.accounts.create();

console.log(acc);