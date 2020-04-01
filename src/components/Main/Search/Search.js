import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  Image, TextInput, Dimensions, Alert
} from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

import icBack from '../../../media/appIcon/backList.png';
import icCart from '../../../media/appIcon/cartfull_white.png';
import sp1 from '../../../media/appIcon/midi.jpeg';

export default class Collection extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => Alert.alert('hi')}>
            <Image source={icBack} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Search</Text>
          <View />
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.orderRow}>
              <Image source={sp1} style={styles.imageStyle}></Image>

              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <View style={{ alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: 21, color: '#afaeaf', paddingBottom: 6 }} >Lace Sleeve Si</Text>
                  <Text style={{ fontSize: 16, color: '#B10D65', paddingBottom: 6 }}>117$</Text>
                  <Text style={{ fontSize: 16, color: '#000', paddingBottom: 6 }} >Material silk</Text>
                  <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: 16, color: '#000', paddingRight: 7}} >Color RoyalBlue</Text>
                    <View style={styles.circle}></View>
                    <Text style={{ fontSize: 16, color: '#B10D65', paddingRight: 5}}>Show Details</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

    );
  }
}

const imageWidth = width / 3 - 30;
const imageHeight = imageWidth / 361 * 452;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'yellow',
    width: 15,
    height: 15,
    borderRadius: 20,
    marginRight: 7
  },
  body: {
    flex: 10, backgroundColor: '#F6F6F6'
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
    height: height / 4,
    backgroundColor: '#fff',
    margin: 10,
    padding: 12,
    paddingRight:5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 2,

    shadowColor: '#DFDFDF',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 8,
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
