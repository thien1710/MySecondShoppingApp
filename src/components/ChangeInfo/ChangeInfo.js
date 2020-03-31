import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  Image, TextInput, Dimensions, Alert
} from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

import icBack from '../../media/appIcon/backs.png';
export default class Collection extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View />
          <Text style={{ fontSize: 20 }}>User Information</Text>
          <TouchableOpacity onPress={() => Alert.alert('hi')}>
            <Image source={icBack} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TextInput placeholder='Enter your name'
            style={styles.textInput}
          />
          <TextInput placeholder='Enter your address'
            style={styles.textInput}
          />
          <TextInput placeholder='Enter your phone'
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.signInContainer}>
            <Text style={styles.signInTextStyle}>
CHANGE YOUT INFORMATION
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    );
  }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1
  },
  body: {
    flex: 10,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#3EBA77',
    justifyContent: 'space-between',
    paddingLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    flex: 1,
  },
  wrapper: {
    flex: 1, backgroundColor: '#fff'
  },
  signInContainer: {
    backgroundColor: '#2ABB9C',
    height: 45,
    borderRadius: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    
  },
  signInTextStyle: {
      color: '#FFF', 
      fontSize: 15, 
      paddingHorizontal: 20
  },
});
