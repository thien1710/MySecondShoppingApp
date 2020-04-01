import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, Dimensions, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import icBack from '../../../media/appIcon/backList.png';
import icCart from '../../../media/appIcon/cartfull_white.png';
import sp1 from '../../../media/appIcon/midi.jpeg';

const { width, height } = Dimensions.get('window');
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    }
  }
  plus() {
    this.setState({
      result: this.state.result + 1
    })
  }
  minus() {
    this.setState({
      result: this.state.result - 1
    })
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => Alert.alert('hi')}>
            <Image source={icBack} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Cart</Text>
          <View />
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.orderRow}>
              <Image source={sp1} style={styles.imageStyle}></Image>

              <View style={{ paddingHorizontal: 10, flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                  <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, color: '#afaeaf' }} >Lace Sleeve Si</Text>
                    <Text style={{ fontSize: 25, color: '#afaeaf', paddingBottom: 6 }}>X</Text>
                  </View>
                  <Text style={{ fontSize: 20, color: '#B10D65', paddingBottom: 6 }}>117$</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ marginBottom: 5, justifyContent: 'space-between', width: 100, flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => { this.plus() }}>
                        <Text style={{ fontSize: 18, color: '#000' }} >+</Text>
                      </TouchableOpacity>
                      <Text style={{ fontSize: 16, color: '#000' }}>{this.state.result}</Text>
                      <TouchableOpacity onPress={() => { this.minus() }}>
                        <Text style={{ fontSize: 18, color: '#000' }} >-</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 15, color: '#B10D65' }}>Show Details</Text>
                  </View>
                </View>

              </View>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.footer}>


          <Text style={styles.textFooter}>TOTAL 350$ CHECKOUT NOW</Text>


        </TouchableOpacity>
      </View>

    );
  }
}

const imageWidth = width / 3 - 30;
const imageHeight = imageWidth / 361 * 452;

const styles = StyleSheet.create({
  textFooter: {
    fontSize: 19,
    color: '#fff'
  },
  wrapper: {
    flex: 1, backgroundColor: '#d3d3d3'
  },
  header: {
    backgroundColor: '#34B089',
    justifyContent: 'space-between',
    paddingLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    flex: 1,
  },
  body: {
    flex: 10, backgroundColor: '#d3d3d3'
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34B089',
    margin: 10,
    borderRadius: 2,
    height: 45,
  },
  orderRow: {
    height: height / 4,
    backgroundColor: '#fff',
    margin: 10,
    padding: 12,
    paddingRight: 5,
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
  circle: {
    backgroundColor: 'yellow',
    width: 15,
    height: 15,
    borderRadius: 20,
    marginRight: 7
  },
});
