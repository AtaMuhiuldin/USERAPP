import React, { Component } from 'react';
import { Container, Content, Text, Header, Tab, Tabs, TabHeading, Icon, Button } from 'native-base';
import SimpleHeader from '../components/headers/simpleHeader';
import MapTab from '../components/tabs/mapTab';
import ListTab from '../components/tabs/listTab';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return { header: <SimpleHeader navigation={navigation} /> }
    }
    state = {}


    render() {
        return (
            <Container key={0}>
                <Tabs key={2}>
                    <Tab key={0} heading={<TabHeading><Icon type="FontAwesome" name="th-list" /><Text>ListView</Text></TabHeading>}>
                        <ListTab navigation={this.props.navigation} />
                    </Tab>
                    <Tab key={1} heading={<TabHeading><Icon type="FontAwesome" name="globe" /><Text>MapView</Text></TabHeading>}>
                        <MapTab navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>);
    }
}
export default HomeScreen;