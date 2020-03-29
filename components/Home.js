import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <Button
          title='Open Drawer'
          onPress={() => {
            this.props.navigation.openDrawer();
          }} />
          <TouchableOpacity
        onPress={() => {
            this.props.navigation.navigate('Item');
        }}>
            <Text>Navigate to Item screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}