import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb79D3DDFF822cB8B6fb8907e00B9635ac84dc9C6'
);

export default instance;