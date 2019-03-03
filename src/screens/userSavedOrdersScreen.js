import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import SimpleHeader from '../components/headers/simpleHeader';
import { Container, Content, Text } from 'native-base';
import SingleSavedOrder from '../components/orders/singleSavedOrder';
import { PRIMARY_COLOR, WHITE_COLOR } from '../themes/color';
class UserSavedOrdersScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: <SimpleHeader backButton={true} navigation={navigation} />
        }
    }
    state = {}
    render() {
        return (
            <Container style={Styles.container}>
                <Content style={Styles.subContainer}>
                    <SingleSavedOrder />
                    <SingleSavedOrder />
                    <SingleSavedOrder />
                    <SingleSavedOrder />
                    <SingleSavedOrder />
                </Content>
                <View style={Styles.btnContainer}>
                    <TouchableNativeFeedback onPress={() => 1 + 1}>
                        <View style={Styles.btnAddRoutine}>
                            <Text style={Styles.btnText}>Create New Meal</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </Container>
        );
    }
}
export default UserSavedOrdersScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1
    },
    btnContainer: {
        width: "98%",
        height: 50,
        alignSelf: "center",
        margin: 5,
        backgroundColor: '#00000000'

    },
    btnAddRoutine: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    btnText: {
        color: WHITE_COLOR,
        fontSize: 20

    }
})