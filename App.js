import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import AppInMain from './src/components/AppInMain';

//import for editing screen
import Odh from './src/components/ProductDetail/ProductDetail'

StatusBar.setHidden(true);
export default class App extends Component {
  render() {
    return <Odh />;
  }
}

AppRegistry.registerComponent('MyShop', () => App);

