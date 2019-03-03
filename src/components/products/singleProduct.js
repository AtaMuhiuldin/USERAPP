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
    Footer,
    FooterTab,
    Button,
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

class SingleProduct extends Component {
    state = {
        quantity: 0
    }
    addQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }
    removeQuantity = () => {
        if (this.state.quantity > 0) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    render() {
        return (
            <Container style={{ height: 140 }}>
                <Badge style={styles.wrapperBadgeStyle}>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Thumbnail
                                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                                style={styles.imageeStyle}
                            />
                        </View>
                        <View
                            style={{
                                flex: 2,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Text style={styles.imageRightSideTextStyle}>Green Tea</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                textAlign: "center",
                                justifyContent: "center"
                            }}
                        >
                            <TouchableOpacity onPress={() => this.removeQuantity()}>
                                <View style={styles.touchableOpacityPlusMinusViewStyle}>
                                    <Text style={styles.touchableOpacityPlusMinusViewTextStyle}>
                                        -
                                     </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                textAlign: "center",
                                justifyContent: "center"
                            }}
                        >
                            <View style={styles.numViewStyle}>
                                <Text style={styles.numViewTextStyle}>{this.state.quantity}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                textAlign: "center",
                                justifyContent: "center"
                            }}
                        >
                            <TouchableOpacity onPress={() => this.addQuantity()}>
                                <View style={styles.touchableOpacityPlusMinusViewStyle}>
                                    <Text style={styles.touchableOpacityPlusMinusViewTextStyle}>
                                        +
                                     </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: PRIMARY_COLOR,
                                    marginRight: 13,
                                    fontWeight: "bold"
                                }}
                            >
                                20 Rs
              </Text>
                        </View>
                        <View style={{ flex: 4 }} />
                    </View>
                </Badge>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    wrapperBadgeStyle: {
        height: 120,
        width: "95%",
        // marginLeft: 10,
        marginTop: 20,
        alignSelf: "center",
        backgroundColor: ACTIVITY_BACKGROUND
    },
    imageeStyle: {},
    imageRightSideTextStyle: {
        fontSize: 20,
        color: PRIMARY_COLOR,
        fontWeight: "bold"
    },
    touchableOpacityPlusMinusViewStyle: {
        backgroundColor: PRIMARY_COLOR,
        margin: 8,
        height: 40,
        fontWeight: "bold",
        borderRadius: 13
    },
    touchableOpacityPlusMinusViewTextStyle: {
        fontWeight: "bold",
        fontSize: 25,
        color: WHITE_COLOR,
        marginTop: 11
    },
    numViewStyle: {
        backgroundColor: PRIMARY_COLOR,
        margin: 8,
        height: 50,
        fontWeight: "bold",
        borderRadius: 13
    },
    numViewTextStyle: {
        fontWeight: "bold",
        fontSize: 25,
        color: WHITE_COLOR,
        marginTop: 16
    }
});

export default SingleProduct;
