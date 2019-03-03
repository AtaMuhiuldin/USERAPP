import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
    PRIMARY_COLOR,
    WHITE_COLOR,
    ACTIVITY_BACKGROUND
} from '../../themes/color';
import {
    Container,
    Header,
    Title,
    Item,
    Content,
    Button,
    Footer,
    FooterTab,
    Input,
    Left,
    Right,
    Body,
    Icon,
    Badge,
    Text,
    ListItem,
    CheckBox,
    Card,
    CardItem,
    Image,
    Thumbnail
} from "native-base";

class CartSummery extends Component {
    render() {
        return (

            <Badge style={styles.wrapperBadgeStyle}>
                <View style={{ flex: 1.5, flexDirection: "row" }}>
                    <View
                        style={{ flex: 1, textAlign: "center", justifyContent: "center" }}
                    >
                        <Text style={styles.firstViewTextStyle}>120 Rs.</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <View style={styles.touchableOpacitySubmitViewStyle}>
                                <Text style={styles.touchableOpacitySubmitViewTextStyle}>
                                    Submit
                  </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View
                        style={{
                            flex: 1.1,
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Text style={styles.TexTextStyle}>Tex.</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Text style={styles.TexPriceTextStyle}>5 Rs</Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row"
                    }}
                >
                    <View
                        style={{
                            flex: 1.1,
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Text style={styles.subTotalTextStyle}>Sub Total</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Text style={styles.subTotalPriceTextStyle}>60 Rs</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View
                        style={{
                            flex: 1.1,
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Text style={styles.serviceChargesTextStyle}>
                            Service Charges
              </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Text style={styles.serviceChargesPriceTextStyle}>60 Rs</Text>
                    </View>
                </View>
            </Badge>

        );
    }
}

const styles = StyleSheet.create({
    wrapperBadgeStyle: {
        height: 170,
        width: "95%",
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: ACTIVITY_BACKGROUND
    },
    firstViewStyle: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10
    },
    touchableOpacitySubmitViewStyle: {
        backgroundColor: PRIMARY_COLOR,
        margin: 8,
        height: 40,
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        borderRadius: 20
    },
    touchableOpacitySubmitViewTextStyle: {
        fontWeight: "bold",
        fontSize: 18,
        color: WHITE_COLOR
    },
    firstViewTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 24,
        marginTop: 10,
        fontWeight: "bold"
    },
    firstViewSubmitButtonStyle: {
        backgroundColor: PRIMARY_COLOR,
        width: 130,
        height: 45,
        borderRadius: 10,
        marginLeft: 90,
        marginTop: 5
    },
    firstViewSubmitButtonTextStyle: {
        color: WHITE_COLOR,
        fontSize: 19,
        fontWeight: "bold",
        marginLeft: 15
    },
    secondViewStyle: {
        flex: 1,
        flexDirection: "row"
    },
    TexTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginTop: 8,
        marginRight: 115
    },
    TexPriceTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginTop: 8
    },
    subTotalTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginTop: 6,
        marginRight: 60
    },
    subTotalPriceTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginTop: 7
    },
    serviceChargesTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginTop: 4
    },
    serviceChargesPriceTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginTop: 7
    }
});

export default CartSummery;
