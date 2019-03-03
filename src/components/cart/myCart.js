import React, { Component } from 'react';

import { Container, Content } from 'native-base';
import CartSummery from './cartSummerty';
import SingleProduct from '../products/singleProduct';
class MyCart extends Component {
    state = {}
    render() {
        return (
            <Container key={0}>
                <CartSummery key={0} />

                <Content key={1}>
                    <SingleProduct key={0} />
                    <SingleProduct key={1} />
                    <SingleProduct key={2} />

                </Content>
            </Container>);
    }
}

export default MyCart;