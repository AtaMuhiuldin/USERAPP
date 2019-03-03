import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation/navigations';
import CustomizeProduct from './src/components/products/customizeProduct';
import SingleCustomProduct from './src/components/products/singleCustomProduct';
import AllAccountSummery from './src/components/accounts/allAccountSummery';
import AllAccountFilter from './src/components/accounts/allAccountFilter';
import SingleTransection from './src/components/accounts/singleTransection';
import AllAccountScreen from './src/screens/allAccountScreen';
import AddRoutine from './src/components/routine/addRoutine';
import TimePicker from './src/components/pickers/timePicker';
import store from './src/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});

