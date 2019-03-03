import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { Alert } from 'react-native';
import SimpleHeader from '../components/headers/simpleHeader';
import Catagories from '../components/products/catagories';
class ProductCatagoryScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: <SimpleHeader cartButton={true} submitButton={true} backButton={true} navigation={navigation} />
        }
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
    state = {}
    render() {
        return (
            <Catagories navigation={this.props.navigation} />
        );
    }
}

export default ProductCatagoryScreen;