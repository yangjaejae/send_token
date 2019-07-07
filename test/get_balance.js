const request = require("request");

let address = "0xe762361a8103c4585120fdf71A4f7E1188E3e35C";

// web3.eth.getBalance(address, (err, wei) => {
//     balance = web3.utils.fromWei(wei, 'ether')
//     console.log(balance);
// });

let req_url = "https://api-ropsten.etherscan.io/api?module=account&action=balance&address=0xe762361a8103c4585120fdf71A4f7E1188E3e35C&tag=latest&apikey=ZR378TQF5VMWZN3KU1JY7P4Z37I49IRH1I"
request(req_url, (error, response, body) => {
    // wei 단위로 결과값 출력 0.000000000000000001
    try{
        let res_headers = response.rawHeaders;
        let res_body = JSON.parse(response.body);
        let res_eth = res_body.result / 1000000000000000000;
        console.log(res_headers);
        console.log(res_body);
        console.log(res_eth);
    }catch (except){
        console.log(except);
    }finally{
        console.log("FINALLY");
    }
});
