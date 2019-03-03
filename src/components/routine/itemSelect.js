import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox, Container, Left, Right, ListItem, Body, Header } from 'native-base';

class ItemSelect extends Component {
    state = {
        selected: false
    }
    render() {
        return (
            <TouchableOpacity style={Styles.container} onPress={() => this.setState({ selected: !this.state.selected })}>
                <View style={Styles.container}>
                    <View style={Styles.txtContainer}>
                        <Text style={Styles.text}>{this.props.text ? this.props.text : "Text"}</Text>
                    </View>
                    <View style={Styles.cbContainer}>
                        <CheckBox checked={this.state.selected} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ItemSelect;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10
    },
    txtContainer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    cbContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    }

});