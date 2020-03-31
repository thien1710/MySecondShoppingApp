import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, Alert } from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

import icBack from '../../media/appIcon/backs.png';
export default class Collection extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View />
          <Text style={{ fontSize: 20 }}>Order History</Text>
          <TouchableOpacity onPress={() => Alert.alert('hi')}>
            <Image source={icBack} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
        </View>
        <View style = {styles.body}>
          <ScrollView>
            <View style={styles.orderRow}>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.textStyle} >Order id:</Text>
                <Text style={styles.textStyle} >SPRING COLLECTION</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.textStyle} >OrderTime:</Text>
                <Text style={styles.textStyle} >SPRING COLLECTION</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.textStyle} >Status:</Text>
                <Text style={styles.textStyle} >SPRING COLLECTION</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={styles.textStyle} >Total</Text>
                <Text style={styles.textStyle} >SPRING COLLECTION</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

    );
  }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
  body: {
flex:10, backgroundColor: '#F6F6F6'
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
  orderRow: {
    height: height / 4.5,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    justifyContent: 'space-around',
    borderRadius: 2,

    shadowColor: '#DFDFDF',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 8,
  },
  textStyle: {
    fontSize: 15,
    color: '#AFAEAF'
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',

  },
});
