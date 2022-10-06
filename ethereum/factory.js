import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd45cEBD78C2977Dc170EAc9389843382328BADf5'
);

export default instance;