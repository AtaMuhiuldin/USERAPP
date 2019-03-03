import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { BORDER_COLOR, PRIMARY_COLOR } from '../../themes/color';

class SingleCatagory extends React.Component {

  render() {
    const { catagory } = this.props;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.push("ProductScreen")} style={Styles.container}>
        <View key={0} style={Styles.subContainer}>
          <View key={0} style={Styles.thumbnail}>
            <Image key={0}
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={{ width: 70, height: 70 }}
            />
          </View>
          <View key={1} style={Styles.title}>
            <Text key={0} style={Styles.titleText}>
              {catagory.key}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SingleCatagory;

const Styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 150
  },
  subContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: BORDER_COLOR,
    backgroundColor: "white"
  },
  thumbnail: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 25,
    color: PRIMARY_COLOR,
    fontWeight: "600"
  }
});
