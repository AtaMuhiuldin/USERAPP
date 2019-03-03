import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SingleCustomProduct from './singleCustomProduct';
import { Container, Content, Button, Text } from 'native-base';

import { PRIMARY_COLOR } from '../../themes/color';
class CustomizeProduct extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Content style={Styles.container}>
                    <SingleCustomProduct key={0} />
                    <SingleCustomProduct key={1} />
                    <SingleCustomProduct key={2} />
                    <SingleCustomProduct key={3} />
                    <SingleCustomProduct key={4} />
                </Content>

                <View style={Styles.footer}>
                    <Button rounded style={Styles.btnAdd}><Text style={Styles.btnAddText}>Add</Text></Button>
                </View>

            </Container>);
    }
}

export default CustomizeProduct;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    footer: {
        height: 50,
        width: "100%",

    },
    btnAdd: {
        width: '95%',
        backgroundColor: PRIMARY_COLOR,
        alignSelf: "center"
    },
    btnAddText: {
        width: "100%",
        textAlign: "center"
    }
})