import React, { Component } from 'react';
import { StyleSheet, Button, TouchableNativeFeedback } from 'react-native';
import { View, Container, Content, Text } from 'native-base';
import AddRoutine from '../components/routine/addRoutine';
import { PRIMARY_COLOR, WHITE_COLOR } from '../themes/color';

class RoutineAddScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    state = {}
    render() {
        return (
            <Container style={Styles.container}>
                <Content style={Styles.subContainer}>
                    <AddRoutine navigation={this.props.navigation} />
                </Content>
                <View style={Styles.btnContainer}>
                    <TouchableNativeFeedback onPress={() => 1 + 1}>
                        <View style={Styles.btnAddRoutine}>
                            <Text style={Styles.btnText}>Add New Routine</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </Container>
        );
    }
}

export default RoutineAddScreen;
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

});