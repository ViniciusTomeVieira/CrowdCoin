import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };

    onSubmit = async (event) => {
        event.preventDefault(); //This makes the browser to not submit the form

        const accounts = await web3.eth.getAccounts();
        await factory.method.createCampaign(this.state.minimumContribution).send({
            from: accounts[0] // This dont require any gas, because metamask do the math for us
        });
    }

    render () {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei" 
                            labelPosition='right'
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;