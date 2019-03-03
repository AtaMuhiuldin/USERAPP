import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HourSpinner from './hourSpinner';
import MinSpinner from './minSpinner';
import PmSpinner from './pmSpinner';
import MyTime from '../../busineesLogic/MyTime';


class TimePicker extends Component {

    state = {
        hours: '01',
        minutes: '01',
        period: 'PM',
        selectedTime: new MyTime('00', '00', 'AM')


    }


    setHours = (hr) => {
        this.setState({ hours: hr });
        // this.setState({ selectedTime: new MyTime(this.state.minutes, hr, this.state.period) });
    }
    setMinutes = (min) => {
        this.setState({ minutes: min });
        // this.setState({ selectedTime: new MyTime(min, this.state.hours, this.state.period) });
    }
    setPreiod = (period) => {
        this.setState({ period: period });
        // this.setState({ selectedTime: new MyTime(this.state.minutes, this.state.hours, period) });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <HourSpinner onHourChange={this.setHours} />
                    <MinSpinner onMinutesChange={this.setMinutes} />
                    <PmSpinner onPeriodChange={this.setPreiod} />
                </View>
                <View style={styles.selectedTime}>
                    <Text style={styles.timeText}>{this.state.hours + ":" + this.state.minutes + " " + this.state.period}</Text>
                </View>
            </View>
        );
    }
}
export default TimePicker;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 300,

    },
    subContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#000000"
    },
    spinner: {
        width: "33.33%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1962dd',
    },
    selectedTime: {
        width: "100%",
        height: 30,
        backgroundColor: "#000000",

    },
    timeText: {
        color: "#fff",
        alignSelf: "center"
    }
});