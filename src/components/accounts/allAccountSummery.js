import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../themes/color';
class AllAccountSummery extends Component {
    state = {
        totalPayable: 1200,
        payableValue: 1200
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                    <Text style={Styles.txtTotalPayable}>
                        {this.state.payableValue}{" Rs"}
                    </Text>
                    <Text style={Styles.lblTotalPayable}>
                        Payables
                     </Text>
                </View>
            </View>
        );
    }
}

export default AllAccountSummery;

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 110,
        backgroundColor: PRIMARY_COLOR

    },
    subContainer: {
        width: "70%",
        height: "100%",
        alignSelf: "center",
        flexDirection: "column",

        padding: 5

    },
    txtTotalPayable: {
        flex: 4,
        fontSize: 50,
        color: WHITE_COLOR
    },
    lblTotalPayable: {
        flex: 3,
        marginLeft: 5,
        fontSize: 20,
        color: WHITE_COLOR
    }
});