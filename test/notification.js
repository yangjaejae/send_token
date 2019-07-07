let Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var filter = web3.eth.filter('latest');

// localhost:8545 노드에 block 생성시 콜백함수 실행
filter.watch(function(error, result){
    var block = web3.eth.getBlock(result, true);
    console.log('current block #' + block.number);
    console.log('current block info' + JSON.stringify(block));
});