import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
    PRIMARY_COLOR,
    WHITE_COLOR,
    ACTIVITY_BACKGROUND
} from "../../themes/color";
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

    Thumbnail
} from "native-base";

class CombinePages extends Component {
    render() {
        return (
            <Container>
                <Badge style={styles.wrapperBadgeStyle}>
                    <View style={styles.firstViewStyle}>
                        <Image
                            source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                            style={styles.imageStyle}
                        />
                        <Badge info style={styles.firstViewInnerBadgeStyle}>
                            <Text style={styles.firstViewInnerBadgefirstTextStyle}>
                                Chai Wala Name
              </Text>
                            <Text style={styles.firstViewInnerBadgeSecondTextStyle}>
                                Jinnah Town Beside Ali Garh Clod Store, Sahiwal
              </Text>
                        </Badge>
                    </View>

                    <View style={styles.secondViewStyle}>
                        <Button primary style={styles.viewOnMapButtonStyle}>
                            <Text style={styles.viewOnMapButtonTextStyle}>View on Map</Text>
                        </Button>

                        <Button primary style={styles.orderButtonStyle}>
                            <Text style={styles.orderButtonTextStyle}>Order</Text>
                        </Button>
                    </View>
                </Badge>

                {/* Second */}

                <Badge style={styles.wrapperBadgeStyle}>
                    <View style={styles.firstViewStyle}>
                        <Text style={styles.firstViewTextStyle}>120 Rs.</Text>
                        <Button success style={styles.firstViewSubmitButtonStyle}>
                            <Text style={styles.firstViewSubmitButtonTextStyle}>Submit</Text>
                        </Button>
                    </View>

                    <View style={styles.secondViewStyle}>
                        <Text style={styles.TexTextStyle}>Tex.</Text>

                        <Text style={styles.TexPriceTextStyle}>5 Rs</Text>
                    </View>
                    <View style={styles.secondViewStyle}>
                        <Text style={styles.subTotalTextStyle}>Sub Total</Text>

                        <Text style={styles.subTotalPriceTextStyle}>60</Text>
                    </View>

                    <View style={styles.secondViewStyle}>
                        <Text style={styles.serviceChargesTextStyle}>Service Charges</Text>

                        <Text style={styles.serviceChargesPriceTextStyle}>60</Text>
                    </View>
                </Badge>

                {/* Third */}

                <Badge style={styles.badgeStyle}>
                    <View style={styles.firstViewStyle}>
                        <View
                            style={{
                                flex: 3,
                                flexDirection: "row"
                            }}
                        >
                            <Image
                                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                                style={styles.imageeStyle}
                            />
                            <Text style={styles.imageRightSideTextStyle}>Green Tea</Text>
                        </View>
                        <View style={styles.buttonsViewStyle}>
                            <Button info style={styles.plusMinusButtonStyle}>
                                <Text style={styles.plusMinusTextStyle}>+</Text>
                            </Button>
                            <Button info style={styles.numberButtonStyle}>
                                <Text style={styles.numberTextStyle}>1</Text>
                            </Button>
                            <Button info style={styles.plusMinusButtonStyle}>
                                <Text style={styles.plusMinusTextStyle}>-</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={styles.firstViewStyle}>
                        <Text style={{ fontSize: 22, color: PRIMARY_COLOR, marginTop: 10 }}>
                            20 Rs.
            </Text>
                    </View>
                </Badge>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    wrapperBadgeStyle: {
        height: 220,
        width: 385,
        marginTop: 20,
        marginLeft: 14,
        backgroundColor: ACTIVITY_BACKGROUND
    },
    firstViewStyle: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10
    },
    imageStyle: {
        height: 120,
        width: 120,
        borderRadius: 60
    },
    firstViewInnerBadgeStyle: {
        backgroundColor: ACTIVITY_BACKGROUND,
        width: 240,
        height: 130,
        borderRadius: 10,
        marginLeft: 10
    },
    firstViewInnerBadgefirstTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 15,
        marginLeft: 0,
        textAlign: "left"
    },
    firstViewInnerBadgeSecondTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 20,
        marginTop: 5,
        marginLeft: 0,
        textAlign: "left"
    },
    secondViewStyle: {
        flex: 1,
        flexDirection: "row"
    },
    viewOnMapButtonStyle: {
        marginTop: 35,
        marginLeft: 9,
        width: 170,
        height: 50,
        borderRadius: 15,
        backgroundColor: WHITE_COLOR
    },
    viewOnMapButtonTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
        marginLeft: 10
    },
    orderButtonStyle: {
        marginTop: 35,
        marginLeft: 15,
        width: 170,
        height: 50,
        borderRadius: 15,
        backgroundColor: PRIMARY_COLOR
    },
    orderButtonTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: WHITE_COLOR,
        marginLeft: 35
    },

    // second

    firstViewStyle: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10
    },
    firstViewTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 24,
        marginTop: 20,
        marginLeft: 30,
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
        marginLeft: 35,
        marginTop: 22
    },
    TexPriceTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginLeft: 132,
        marginTop: 22
    },
    subTotalTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginLeft: 35,
        marginTop: 10
    },
    subTotalPriceTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginLeft: 80,
        marginTop: 10
    },
    serviceChargesTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginLeft: 35
    },
    serviceChargesPriceTextStyle: {
        color: PRIMARY_COLOR,
        fontSize: 22,
        marginLeft: 15
    },

    // third

    badgeStyle: {
        height: 140,
        width: 385,
        marginTop: 20,
        marginLeft: 14,
        backgroundColor: ACTIVITY_BACKGROUND
    },
    imageeStyle: {
        height: 55,
        width: 55,
        borderRadius: 25,
        marginTop: 12
    },
    imageRightSideTextStyle: {
        fontSize: 24,
        color: PRIMARY_COLOR,
        marginTop: 30,
        marginLeft: 5,
        fontWeight: "bold"
    },
    buttonsViewStyle: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    plusMinusButtonStyle: {
        marginTop: 7,
        height: 35,
        borderRadius: 15,
        backgroundColor: PRIMARY_COLOR
    },
    numberButtonStyle: {
        marginTop: 1,
        height: 45,
        borderRadius: 15,
        backgroundColor: PRIMARY_COLOR
    },
    plusMinusTextStyle: {
        color: WHITE_COLOR,
        fontSize: 35
    },
    numberTextStyle: {
        color: WHITE_COLOR,
        fontSize: 30
    }
});

export default CombinePages;
