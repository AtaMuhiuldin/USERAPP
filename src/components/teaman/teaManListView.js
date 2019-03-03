import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import SingleTeaManLI from './singleTeaManLI';

class TeaManList extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Content>
                    <SingleTeaManLI key={0} navigation={this.props.navigation} />
                    <SingleTeaManLI key={1} navigation={this.props.navigation} />
                    <SingleTeaManLI key={2} navigation={this.props.navigation} />
                    <SingleTeaManLI key={3} navigation={this.props.navigation} />
                    <SingleTeaManLI key={4} navigation={this.props.navigation} />

                </Content>
            </Container>
        );
    }
}

export default TeaManList;