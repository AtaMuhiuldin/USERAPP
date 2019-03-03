import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DatePicker } from 'native-base';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../themes/color';

class AllAccountFilter extends Component {
    state = {
        startDate: '',
        endDate: '',
        totalPayable: 12000
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.dateCol}>
                    <View style={Styles.dateContainer} >
                        <Text style={Styles.lblDate}>
                            StartDate:
                        </Text>
                        <View style={Styles.date}>
                            <DatePicker

                                onDateChange={(value) => this.setState({ startDate: value })}
                                textStyle={{ color: WHITE_COLOR }}
                                placeHolderTextStyle={{ color: WHITE_COLOR, fontWeight: "bold" }}

                            />
                        </View>

                    </View>
                    <View style={Styles.dateContainer}>
                        <Text style={Styles.lblDate}>
                            EndDate:
                        </Text>
                        <View style={Styles.date}>
                            <DatePicker

                                onDateChange={(value) => this.setState({ endDate: value })}
                                textStyle={{ color: WHITE_COLOR }}
                                placeHolderTextStyle={{ color: WHITE_COLOR }}

                            />
                        </View>
                    </View>
                </View>
                <View style={Styles.amountCol}>
                    <Text style={Styles.amountText}>{this.state.totalPayable}{" Rs"}</Text>
                </View>
            </View>
        );
    }
}

export default AllAccountFilter;

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        backgroundColor: PRIMARY_COLOR,
    },
    dateCol: {
        flex: 5,

        paddingBottom: 10
    },
    dateContainer: {
        flex: 1,
        flexDirection: "row"
    },
    lblDate: {
        flex: 2,
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 5,
        color: WHITE_COLOR

    },
    date: {
        flex: 4,

    },
    amountCol: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    amountText: {
        color: WHITE_COLOR,
        fontSize: 30,

    }
});