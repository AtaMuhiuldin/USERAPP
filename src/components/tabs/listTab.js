import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import TeaManList from '../teaman/teaManListView';
class ListTab extends Component {
    state = {}
    render() {
        return (
            <TeaManList key={1} navigation={this.props.navigation} />
        );
    }
}
export default ListTab;