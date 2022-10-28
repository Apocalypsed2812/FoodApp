import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';

import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  
});
