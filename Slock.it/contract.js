const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546');

web3.eth.getBlockNumber().then((s) => {
  console.log('s', s);
}).catch((e) => {
  console.log('e', e);
});