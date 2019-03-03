import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WHITE_COLOR, PRIMARY_COLOR } from '../../themes/color';
class SingleTransection extends Component {
    state = {
        transectionDate: '10/5/2019',
        amount: 12000
    }
    render() {
        return (
            <View style={Styles.container}>

                <View style={Styles.date}>
                    <Text style={Styles.dateText}>{this.state.transectionDate}</Text>
                </View>
                <View style={Styles.amount}>
                    <Text style={Styles.amountText}>{this.state.amount}{" Rs"}</Text>
                </View>

            </View>
        );
    }
}

export default SingleTransection;
const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        borderWidth: 2,
        borderColor: PRIMARY_COLOR,
        borderRadius: 20,
        marginTop: 10
    },
    date: {
        flex: 5,
        justifyContent: "center"
    },
    dateText: {
        fontSize: 20,
        padding: 10,
        color: PRIMARY_COLOR
    },
    amount: {
        flex: 3,
        justifyContent: "center",
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 17,
        padding: 5,
        fontWeight: "bold"
    },
    amountText: {
        fontSize: 25,

        color: WHITE_COLOR
    }
});