import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import AppInMain from './src/components/AppInMain';

//import for editing screen
import Authentication from './src/components/Authentication/Authentication'

StatusBar.setHidden(true);
export default class App extends Component {
  render() {
    return <AppInMain />;
  }
}

AppRegistry.registerComponent('MyShop', () => App);

