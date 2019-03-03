import React, { Component } from 'react';
import { View, Slider, Switch, Text, StyleSheet } from 'react-native';
import { PRIMARY_COLOR, SECONDRY_COLOR, WHITE_COLOR } from '../../themes/color';
class SingleCustomProduct extends Component {
    state = {
        enabled: true,
        quantity: 1,
        ingredientName: "cheeni",
        unit: "L"
    }
    render() {
        return (
            <View style={Styles.container}>
                <Switch onValueChange={(value) => this.setState({ enabled: value })} style={Styles.switch} value={this.state.enabled} />
                <Slider
                    disabled={!this.state.enabled}
                    style={Styles.track}
                    maximumValue={5}
                    value={this.state.quantity}
                    step={1}
                    onValueChange={(value) => this.setState({ quantity: value })}
                />
                <Text style={Styles.sizeText}>{this.state.unit}</Text>
                <Text style={Styles.nameText}>{this.state.ingredientName}</Text>
            </View>
        );
    }
}

export default SingleCustomProduct;

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        marginTop: 5,

    },
    switch: {
        flex: 1.5,
    },
    track: {
        flex: 6
    },
    sizeText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: PRIMARY_COLOR,
        color: WHITE_COLOR,
        borderRadius: 50,
        textAlign: 'center',
        paddingTop: 5

    },
    nameText: {
        flex: 3,
        fontSize: 18,
        padding: 5,
        color: PRIMARY_COLOR,
        fontWeight: "bold",
        paddingTop: 7
    }

});