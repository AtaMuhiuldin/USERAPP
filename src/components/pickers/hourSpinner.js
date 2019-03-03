import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;
class HourSpinner extends Component {

    state = {
        selectedItem: 2,
        itemList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    };
    onPickerSelect(index) {
        this.setState({
            selectedItem: index,
        });
        this.props.onHourChange(this.state.itemList[this.state.selectedItem]);
        // Alert.alert(this.state.itemList[this.state.selectedItem])
    }

    onAddItem = () => {
        var name = 'OnAddItem'
        if (this.state.itemList.indexOf(name) == -1) {
            this.state.itemList.push(name)
        }
        this.setState({
            selectedItem: this.state.itemList.indexOf(name),
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hr
                </Text>
                <Picker style={{ width: 100, height: 180 }}
                    selectedValue={this.state.selectedItem}
                    itemStyle={{ color: "white", fontSize: 26 }}
                    onValueChange={(index) => this.onPickerSelect(index)}>
                    {this.state.itemList.map((value, i) => (
                        <PickerItem label={value} value={i} key={"time" + value} />
                    ))}
                </Picker>
                {/* <Text style={{ margin: 20, color: '#ffffff' }}>
                    HH：{this.state.itemList[this.state.selectedItem]}
                </Text> */}


            </View>
        );
    }
}
export default HourSpinner;

const styles = StyleSheet.create({
    container: {
        width: "33.33%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
    },
});