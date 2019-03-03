import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  PRIMARY_COLOR,
  WHITE_COLOR,
  ACTIVITY_BACKGROUND
} from '../../themes/color';
import {
  Badge,
  Text,
} from "native-base";

class SingleSavedOrder extends Component {
  render() {
    return (
      <View>
        <Badge style={styles.wrapperBadgeStyle}>
          <View style={styles.firstViewStyle}>
            <View style={{ flex: 1 }}>
              <Badge info style={styles.firstViewInnerBadgeStyle}>
                <View style={{ flex: 1.5 }}>
                  <Text style={styles.firstViewInnerBadgefirstTextStyle}>
                    Meal Name
                  </Text>
                </View>
                <View style={{ flex: 3 }}>
                  <Text style={styles.firstViewInnerBadgeSecondTextStyle}>
                    Chai(2),Biscuit(4),Sandwich(5),blah blah blah blah blah blah
                  </Text>
                </View>
              </Badge>
            </View>
          </View>
          {/* Button Views */}
          <View style={styles.secondViewStyle}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <View style={styles.touchableOpacityMapViewStyle}>
                  <Text style={styles.touchableOpacityMapViewTextStyle}>
                    View
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <View style={styles.touchableOpacityOrderViewStyle}>
                  <Text style={styles.touchableOpacityOrderViewTextStyle}>
                    Add Meal
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Badge>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperBadgeStyle: {
    height: 170,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: ACTIVITY_BACKGROUND
  },
  firstViewStyle: {
    flex: 1.3,
    marginTop: 10
  },
  imageViewStyle: {
    flex: 1
  },
  imageStyle: {
    flex: 1
  },
  firstViewInnerBadgeStyle: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    flex: 3,
    alignSelf: "center"
  },
  firstViewInnerBadgefirstTextStyle: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "left"
  },
  firstViewInnerBadgeSecondTextStyle: {
    color: PRIMARY_COLOR,
    fontSize: 18,
    marginTop: 3,
    textAlign: "left"
  },
  secondViewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  touchableOpacityMapViewStyle: {
    backgroundColor: WHITE_COLOR,
    margin: 10,
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    borderRadius: 20
  },
  touchableOpacityMapViewTextStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: PRIMARY_COLOR
  },
  touchableOpacityOrderViewStyle: {
    backgroundColor: PRIMARY_COLOR,
    margin: 10,
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    borderRadius: 20
  },
  touchableOpacityOrderViewTextStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: WHITE_COLOR
  }
});

export default SingleSavedOrder;
