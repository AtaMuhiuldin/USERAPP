import React, { Component } from 'react';
import MyCart from '../components/cart/myCart';
import SimpleHeader from '../components/headers/simpleHeader';

class CartScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: <SimpleHeader backButton={true} navigation={navigation} />
        }
    }
    state = {}
    render() {
        return (<MyCart />);
    }
}

export default CartScreen;