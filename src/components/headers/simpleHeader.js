import React, { Component } from 'react';
import { Header, Left, Right, Text, Icon, Button } from 'native-base';
import { WHITE_COLOR, PRIMARY_COLOR } from '../../themes/color';
import { ActionSheetCustom as OptionActionSheet } from 'react-native-custom-actionsheet';
class SimpleHeader extends Component {
    state = {
        options: [
            { component: <Text>MyProfile</Text>, height: 40 },
            { component: <Text style={{ width: "100%", height: "100%", textAlign: "center", paddingTop: 8 }} onPress={() => { this.optionActionSheet.hide(); this.props.navigation.push("UserSavedOrdersScreen") }} >MySavedOrders</Text>, height: 40 },
            { component: <Text>MyAccounts</Text>, height: 40 },
            { component: <Text style={{ width: "100%", height: "100%", textAlign: "center", paddingTop: 8 }} onPress={() => { this.optionActionSheet.hide(); this.props.navigation.push("RoutineAddScreen") }} >Add New Routine</Text>, height: 40 },
            'Cancel'
        ],
        CANCEL_BUTTON_INDEX: 4
    }
    render() {
        const { goBack } = this.props;
        return (
            <Header hasTabs={this.props.hasTabs} noShadow>
                <Left>
                    {/* <Icon name="arrow-back" style={{ backgroundColor: "white" }} /> */}
                    {
                        this.props.backButton ?
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                            : false
                    }
                    {/* <Button transparent>
                        <Icon name='arrow-back' />
                    </Button> */}
                </Left>
                <Text>
                    {this.props.text ? this.props.text : ""}
                </Text>
                <Right>
                    {
                        this.props.submitButton ?
                            <Button rounded style={{ backgroundColor: WHITE_COLOR, height: 30, marginBottom: 7 }} >
                                <Text style={{ color: PRIMARY_COLOR }}>Submit</Text>
                            </Button> : false
                    }

                    {
                        this.props.cartButton ?
                            <Button transparent onPress={() => this.props.navigation.push("CartScreen")}>
                                <Icon name='cart' />
                            </Button>
                            : false
                    }


                    <Button transparent onPress={() => this.optionActionSheet.show()}>
                        <Icon name='ellipsis-v' type="FontAwesome" />
                    </Button>



                </Right>



                <OptionActionSheet
                    ref={sheet => this.optionActionSheet = sheet}
                    options={this.state.options}
                    cancelButtonIndex={this.state.CANCEL_BUTTON_INDEX}
                />


            </Header>
        );
    }
}

export default SimpleHeader;