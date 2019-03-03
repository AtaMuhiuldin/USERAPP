import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import SimpleHeader from '../components/headers/simpleHeader';
import Auth from '../components/auth/auth';
class AuthScreen extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Content id={2}>
                    <Auth navigation={this.props.navigation} />
                </Content>
            </Container>
        );
    }
}

export default AuthScreen;