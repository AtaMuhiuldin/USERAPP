import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;
class PmSpinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 2,
            itemList: ['AM', 'PM']
        };
    }

    onPickerSelect(index) {
        this.setState({
            selectedItem: index,
        });
        this.props.onPeriodChange(this.state.itemList[this.state.selectedItem]);

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
export default PmSpinner;

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