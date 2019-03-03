//  code written by farhan
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
    PRIMARY_COLOR,
    WHITE_COLOR,
    ACTIVITY_BACKGROUND
} from '../../themes/color';
import {
    Container,
    Badge,
    Text,
    Thumbnail
} from "native-base";

class SingleTeaManLI extends Component {
    render() {
        return (
            <Container style={{ height: 185 }}>
                <Badge style={styles.wrapperBadgeStyle}>
                    <View style={styles.firstViewStyle}>
                        <View
                            style={{
                                flex: 1.4,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Thumbnail
                                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Badge info style={styles.firstViewInnerBadgeStyle}>
                                <View style={{ flex: 1.5 }}>
                                    <Text style={styles.firstViewInnerBadgefirstTextStyle}>
                                        Chai Wala Name
                  </Text>
                                </View>
                                <View style={{ flex: 3 }}>
                                    <Text style={styles.firstViewInnerBadgeSecondTextStyle}>
                                        Jinnah Town Beside Ali Garh Clod Store, Sahiwal
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
                                        View on Map
                  </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.push("ProductCatagories")}>
                                <View style={styles.touchableOpacityOrderViewStyle}>
                                    <Text style={styles.touchableOpacityOrderViewTextStyle}>
                                        Order
                  </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Badge>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    wrapperBadgeStyle: {
        height: 170,
        width: "95%",
        marginTop: 10,
        // marginLeft: 10,
        alignSelf: "center",
        backgroundColor: ACTIVITY_BACKGROUND
    },
    firstViewStyle: {
        flex: 1.3,
        flexDirection: "row",
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
        marginRight: 7
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

export default SingleTeaManLI;
