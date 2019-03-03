import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import RoutineItem from './routineItem';
import TimePicker from '../pickers/timePicker';
import { ActionSheetCustom as ShortDaysActionSheet } from 'react-native-custom-actionsheet';
import { ActionSheetCustom as WeekDaysActionSheet } from 'react-native-custom-actionsheet';
import ItemSelect from './itemSelect';
// import ItemSelect from './itemSelect';


class AddRoutine extends Component {
    state = {
        options: [
            <Text>Once</Text>,
            <Text>Daily</Text>,
            <Text>Mon to Fri</Text>,
            <Text onPress={() => { this.shortDaysActionSheet.hide(); this.weekDaysActionSheet.show() }}>Custom</Text>,
            'Cancel'
        ],
        CANCLE_BUTTON_INDEX: 4,


        // optionsWeekDays: [
        //     'Saturday',
        //     'Sunday',
        //     'Monday',
        //     'Tuesday',
        //     'Wednesday',
        //     'Thursday',
        //     'Friday',
        //     'Cancel'
        // ],
        optionsWeekDays: [
            { component: <ItemSelect text="Saturday" />, height: 40 },
            { component: <ItemSelect text="Sunday" />, height: 40 },
            { component: <ItemSelect text="Monday" />, height: 40 },
            { component: <ItemSelect text="Tuesday" />, height: 40 },
            { component: <ItemSelect text="Wednesday" />, height: 40 },
            { component: <ItemSelect text="Thursday" />, height: 40 },
            { component: <ItemSelect text="Friday" />, height: 40 },
            'Cancel',
            'Done'
        ],
        CANCEL_WEEKDAYS_BUTTON_INDEX: 7,
        DISCTRUCTIVE_BUTTON_INDEX: 8
    }
    render() {
        return (
            <Container style={Styles.container}>
                <TimePicker />
                <View style={Styles.controles}>
                    <Content>
                        <TouchableOpacity onPress={() => this.shortDaysActionSheet.show()}>
                            <RoutineItem label="Rpeat" text="mon-fri" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.push("UserSavedOrdersScreen")}>
                            <RoutineItem label="Meal" text="breakfast" />
                        </TouchableOpacity>
                    </Content>
                </View>
                <ShortDaysActionSheet
                    ref={sheet => this.shortDaysActionSheet = sheet}
                    options={this.state.options}
                    title="Select Period"
                    cancleButtonIndex={this.state.CANCLE_BUTTON_INDEX}
                />

                <WeekDaysActionSheet
                    ref={sheet => this.weekDaysActionSheet = sheet}
                    options={this.state.optionsWeekDays}
                    title="Select Days"
                    cancleButtonIndex={this.state.CANCEL_WEEKDAYS_BUTTON_INDEX}
                    distructiveButtonIndex={this.state.DISCTRUCTIVE_BUTTON_INDEX}
                />

            </Container>
        );
    }
}
export default AddRoutine;

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    timePicker: {
        flex: 4,
        backgroundColor: "#000000"
    },
    controles: {
        flex: 5,

    }
});