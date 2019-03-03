import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  SECONDRY_COLOR,
  BORDER_COLOR,
  ACTIVITY_BACKGROUND
} from '../../themes/color';
class Add extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity style={this.props.style} onPress={() => 1 + 1}>
        <View style={Styles.container}>
          <Text style={Styles.textStyle}>
            {text ? text : "Add"}
          </Text>
          <View style={Styles.iconContainerStyle}>
            <Text style={Styles.iconStyle}>+</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Add;

const Styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: SECONDRY_COLOR,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: BORDER_COLOR,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    flex: 5,
    fontSize: 30,
    color: ACTIVITY_BACKGROUND,
    fontWeight: "bold",

    textAlign: "center"
  },
  iconContainerStyle: {
    flex: 1
  },
  iconStyle: {
    color: ACTIVITY_BACKGROUND,
    fontSize: 50,
    backgroundColor: "#39643D",
    borderWidth: 0.1,
    borderRadius: 5,
    textAlign: "center"
  }
});
