import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';

import AppNavigator from './AppNavigator';
import { DataProvider } from './context/GlobalState'

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return(
      <DataProvider>
        <AppContainer/>
      </DataProvider>
    ) 
  }
}

const styles = StyleSheet.create({
  
});
