import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xA37C7fE8e6CCf2E1DA9f90EDc221d9C35983DD57'
);

export default instance;