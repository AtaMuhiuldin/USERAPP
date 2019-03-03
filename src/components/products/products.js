import React from 'react';
import { Container, Content } from 'native-base';
import SingleProduct from './singleProduct';

class Products extends React.Component {
    state = {}
    render() {
        return (
            <Container>
                <Content>
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </Content>

            </Container>
        );
    }
}
export default Products;