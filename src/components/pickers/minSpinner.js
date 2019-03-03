import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;
class MinSpinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 2,
            itemList: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
                '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
                '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
                '51', '52', '53', '54', '55', '56', '57', '58', '59']
        };
    }

    onPickerSelect(index) {
        this.setState({
            selectedItem: index,
        });
        this.props.onMinutesChange(this.state.itemList[this.state.selectedItem]);
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
                    Min
                </Text>
                <Picker style={{ width: 100, height: 180 }}
                    selectedValue={this.state.selectedItem}
                    itemStyle={{ color: "white", fontSize: 26 }}
                    onValueChange={(index) => this.onPickerSelect(index)}>
                    {this.state.itemList.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money" + value} />
                    ))}
                </Picker>
                {/* <Text style={{ margin: 20, color: '#ffffff' }}>
                    HH：{this.state.itemList[this.state.selectedItem]}
                </Text> */}


            </View>
        );
    }
}
export default MinSpinner;

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