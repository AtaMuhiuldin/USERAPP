import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import AllAccountSummery from '../components/accounts/allAccountSummery';
import AllAccountFilter from '../components/accounts/allAccountFilter';
import SingleTransection from '../components/accounts/singleTransection';
class AllAccountScreen extends Component {
    state = {}
    render() {
        return (
            <Container>
                <AllAccountSummery />
                <AllAccountFilter />
                <Content>
                    <SingleTransection />
                    <SingleTransection />
                    <SingleTransection />
                    <SingleTransection /><SingleTransection />
                    <SingleTransection /><SingleTransection />
                    <SingleTransection /><SingleTransection />
                    <SingleTransection /><SingleTransection />
                    <SingleTransection />
                </Content>


            </Container>
        );
    }
}

export default AllAccountScreen;