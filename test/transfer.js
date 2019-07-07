let Web3 = require('web3');
const Tx = require("ethereumjs-tx");

let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/f1b5409214e24944a575794c925e514a'));

let account1 = "0xe762361a8103c4585120fdf71A4f7E1188E3e35C";
let account2 = "0xEd3F9a7cB680F742099B0C89028BE152a08A0957";
let privateKey = "CABF69B0031C4BC2746BDD181A15BB51F78B85AB095BFD066B15D7C2B240622A";

const GWei = 9;
const unit = 10 ** GWei;
const gasLimit = 21000;
const gasPrice = 21 * unit;

// web3.eth.accounts.signTransaction(tx, privateKey, (err, res) => {
//     console.log("err:   ", err);
//     console.log("res:   ", res);
// });

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//     console.log("txCount:     ", txCount);
//     console.log("err:    ", err);
//     if(!err){
//         // const txObject = {
//         //     nonce:    web3.utils.toHex(txCount),
//         //     to:       account2,
//         //     value:    web3.utils.toHex(web3.utils.toWei('1', 'ether')),
//         //     gasLimit: web3.utils.toHex(21000),
//         //     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
//         // }

//         let txObject = {
//             // nonce: web3.utils.toHex(txCount),
//             // gasPrice: web3.utils.toHex(gasPrice),
//             // gasLimit: web3.utils.toHex(gasLimit),
//             // from: account1,
//             to: account2,
//             value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
//             gas: 2000000
//         };
        
//         web3.eth.accounts.signTransaction(txObject, privateKey, (err, res) => {
//             console.log("err:   ", err);
//             console.log("res:   ", res);
//         });

//         // const tx = new Tx(txObject);
//         // tx.sign(privateKey);
    
//         // const serializedTx = tx.serialize();
//         // const raw = '0x' + serializedTx.toString('hex');
    
//         // web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//         //     console.log('txHash:', txHash)
//         // })
//     }else if(err){
//         console.error("error..................!!!!!!!!")
//     }

// });


// web3.eth.unlockAccount()
// web3.eth.sendTransaction({
//     from: account1,
//     to: account2,
//     value: '1000000000000000'
// })
// .on('transactionHash', function(hash){
//     console.log("transactionHash:   ", hash);
// })
// .on('receipt', function(receipt){
//     console.log("receipt:   ", receipt);
// })
// .on('confirmation', function(confirmationNumber, receipt){ 
//     console.log("confirm:      ", confirmationNumber)
//  })
// .on('error', console.error);

// web3.eth.sendTransaction({
//     from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
//     to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
//     value: '1000000000000000'
// })
// .then(function(receipt){
//    console.log("success transaction!!!!!!!!!!!!!!!!!!!!!!")
// }).catch(() => {
//     console.log("error")
// });

// let from_acc = '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe';
// let to_acc = '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe';

// const privateKey1 = Buffer.from("CABF69B0031C4BC2746BDD181A15BB51F78B85AB095BFD066B15D7C2B240622A", 'hex')

// const txObject = {
//     nonce:    web3.utils.toHex(txCount),
//     to:       account2,
//     value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
//     gasLimit: web3.utils.toHex(21000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
// }

// web3.eth.sendTransaction({
//     from: from_acc,
//     to: to_acc,
//     value: '1000000000000000'
// })
// .then(function(receipt){

// });
// web3.eth.personal.unlockAccount(account1, "dkavlrtj89!", 600, () => {

//     web3.eth.sendTransaction({
//         from: account1,
//         to: account2, 
//         value:web3.utils.toWei('100',"ether")
//     })
//     .on("error", function(error) {
//     console.log("sendTransaction error:" + error);
//     })
//     .on("transactionHash", function(transactionHash) {
//         console.log("sendTransaction transactionHash:" + transactionHash);
//     })
//     .on("receipt", function(receipt) {
//         console.log("sendTransaction contract address: " + receipt.contractAddress); // contains the new contract address
//     })
//     .on("confirmation", function(confirmationNumber, receipt) {
//         console.log("sendTransaction confirmationNumber: " + confirmationNumber); // contains the new contract address});
//     })
// })

// web3.eth.signTransaction({
//   from: account1,
//   gasPrice: "20000000000",
//   gas: "21000",
//   to: account2,
//   value: "1000000000000000000",
//   data: ""
  // from:     account1,
  // to:       account2,
  // value:    web3.utils.toHex(web3.utils.toWei('1', 'ether')),
  // gasLimit: web3.utils.toHex(21000),
  // gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
  // data: ""
// }, (res) => {
//   console.log(res);
// });

let txObject = {
  // nonce: web3.utils.toHex(txCount),
  // gasPrice: web3.utils.toHex(gasPrice),
  // gasLimit: web3.utils.toHex(gasLimit),
  // from: account1,
  to: account2,
  value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
  gas: 2000000
};

web3.eth.accounts.signTransaction(txObject, privateKey, (err, res) => {
  console.log("err:   ", err);
  console.log("res:   ", res);
  // console.log(res.rawTransaction);
  // console.log(res.transactionHash)
  const request = require("request");
  let options = {
      uri: 'https://ropsten.infura.io/v3/f1b5409214e24944a575794c925e514a', 
      headers: { 
        'Content-Type': 'application/json' 
      },
      method: 'POST', 
      data: {
          // jsonrpc: "2.0", 
          // method: "eth_sendRawTransaction", 
          params: [res.rawTransaction
              // {
              //     nonce:    web3.utils.toHex(web3.eth.getTransactionCount(account1)),
              //     from:     account1,
              //     to:       account2,
              //     value:    web3.utils.toHex(web3.utils.toWei('1', 'ether')),
              //     gasLimit: web3.utils.toHex(21000),
              //     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
              // }
          ], 
          id: 1
      }
  }
  
  request(options, (error, response, body) => {
      console.log(error, " : ", response, " : ", body);
  });
});


// curl https://mainnet.infura.io/v3/YOUR-PROJECT-ID \
//     -X POST \
//     -H "Content-Type: application/json" \
//     -d '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],"id":1}'

// function sendSigned(txData, cb) {
//     const privKey = new Buffer(privateKey, 'hex')
//     const transaction = new Tx(txData)
//     transaction.sign(privKey)
//     const serializedTx = transaction.serialize().toString('hex')
//     web3.eth.sendSignedTransaction('0x' + serializedTx, cb)
// }

// web3.eth.getTransactionCount(account1).then(txCount => {

//     // construct the transaction data
//     const txData = {
//       nonce: web3.utils.toHex(txCount),
//       gasLimit: web3.utils.toHex(25000),
//       gasPrice: web3.utils.toHex(10e9), // 10 Gwei
//       to: account1,
//       from: account2,
//       value: web3.utils.toHex(web3.utils.toWei("1", 'ether'))
//     }
  
//     // fire away!
//     sendSigned(txData, function(err, result) {
//       if (err) return console.log('error', err)
//       console.log('sent', result)
//     })
  
//   })