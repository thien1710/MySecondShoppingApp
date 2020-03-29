import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppInMain from './src/components/AppInMain';

export default class App extends Component {
  render() {
    return <AppInMain />;
  }
}

AppRegistry.registerComponent('MyShop', () => App);

