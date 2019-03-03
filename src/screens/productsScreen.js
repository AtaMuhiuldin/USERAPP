import React, { Component } from 'react';
import Products from '../components/products/products';
import { Text } from 'react-native';
import SimpleHeader from '../components/headers/simpleHeader';

class ProductScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: <SimpleHeader cartButton={true} submitButton={true} backButton={true} navigation={navigation} />
        }
    }
    state = {}
    render() {
        return (<Products navigation={this.props.navigation} />);
    }
}

export default ProductScreen;