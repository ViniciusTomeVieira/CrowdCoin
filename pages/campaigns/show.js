import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {

    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.GetSummary().call();
        
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
            </Layout>
            
        )
    };
}

export default CampaignShow;