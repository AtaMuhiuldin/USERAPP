import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Button } from 'native-base';
import { PRIMARY_COLOR, BORDER_COLOR } from '../../themes/color';

class RoutineSwitchItem extends Component {
    state = {
        label: "Label",
        text: "text"
    }
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.lblRoutine}>{this.props.label ? this.props.label : "Label"}</Text>
                <Text style={Styles.txtRoutine}>{this.props.text ? this.props.text : "Text"}</Text>
                <Button rounded style={Styles.icon} transparent>
                    <Icon name='arrow-forward' />
                </Button>
            </View>);
    }
}

export default RoutineSwitchItem;

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3,

    },
    lblRoutine: {
        flex: 3,
        fontSize: 17,
        paddingLeft: 10,
        color: PRIMARY_COLOR

    },
    txtRoutine: {
        flex: 3,
        textAlign: "right",
        fontSize: 17,
        color: PRIMARY_COLOR
    },
    icon: {
        flex: 1,
        marginTop: 3
    }
});