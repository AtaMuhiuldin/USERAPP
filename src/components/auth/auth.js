import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../../themes/color';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Toast, Footer } from 'native-base';

import Auth from 'react-native-phone-input';

class LoginSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: 'Your Phone Number',
            isValid: false,
            bottonValue: 'Cancel',
            isConferm: false
        };
        this.updateInfo = this.updateInfo.bind(this);
        this.changeButton = this.changeButton.bind(this);
        // this.createAlert = this.createAlert.bind(this);
    }

    updateInfo() {
        if (this.phone.isValidNumber()) {
            this.confermPhoneNumer();
            this.setState({
                phoneNumber: this.phone.getValue(),
                isValid: this.phone.isValidNumber(),
            });
        } else {
            this.setState({ phoneNumber: 'Phone Number Incorrect' });
            alert('Please Enter the Right Phone Number');
        }
    }

    changeButton() {
        this.setState({
            bottonValue: 'Confirm',
        });
    }
    confermPhoneNumer() {
        this.setState({ isConferm: true });
    }
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header androidStatusBarColor="#000000" style={{ backgroundColor: '#efefef' }}>
                        <Body style={{ justifyContent: 'center', alignItems: 'center', flex: 3 }}>
                            <Title style={{ color: '#000000', marginLeft: 40 }}>{this.state.phoneNumber}</Title>
                        </Body>
                        <Right>
                            <Button
                                transparent
                                style={{ justifyContent: 'flex-end', flex: 2 }}
                                onPress={this.updateInfo}
                            >
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#2f10c2' }}>
                                    {this.state.bottonValue}
                                </Text>
                            </Button>
                        </Right>
                    </Header>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.2 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'black' }}>Please confirm your country code and</Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>enter your mobile number </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f9f9f9',
                        paddingLeft: '20%',
                    }}
                >
                    <Auth
                        ref={ref => {
                            this.phone = ref;
                        }}
                        initialCountry="pk"
                        onChangePhoneNumber={this.changeButton}
                    />
                </View>
                <View style={{ flex: 2 }} />
                {
                    this.state.isConferm ?
                        <Footer style={{ backgroundColor: "#ffffff" }}>
                            <Button onPress={() => this.props.navigation.navigate("HomeScreen")} style={{ flex: 1, backgroundColor: PRIMARY_COLOR }} rounded>
                                <Text style={{ color: "#fff", fontWeight: "bold" }}> Conferm And Log in </Text>
                            </Button>
                        </Footer> : false
                }


            </Container>
        );
    }
}
export default LoginSignUp;
