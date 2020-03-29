import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import AppInMain from './src/components/AppInMain';

// StatusBar.setHidden(true);
export default class App extends Component {
  render() {
    return <AppInMain />;
  }
}

AppRegistry.registerComponent('MyShop', () => App);

