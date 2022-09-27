const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json'); // Now is the factory, not the interface directly

const provider = new HDWalletProvider(
  'ozone risk suffer north hamster speak cannon shaft bike demand anger spoon',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/259164015f264f53842f61f50488a30f'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) // Here it changes too
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
// Contract deployed to 0xb79D3DDFF822cB8B6fb8907e00B9635ac84dc9C6