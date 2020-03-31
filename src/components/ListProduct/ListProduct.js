import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    Image, TextInput, Dimensions, Alert
} from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

import icBack from '../../media/appIcon/back_white.png';
import icCart from '../../media/appIcon/cartfull_white.png';
import imgListProduct from '../../media/temp/little.jpg';

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Alert.alert('hi')}>
                        <Image source={icBack} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>List Of Product</Text>
                    <TouchableOpacity onPress={() => Alert.alert('hi')}>
                        <Image source={icCart} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Image source={imgListProduct} style={styles.imgListProduct}></Image>
                    <View style={styles.viewTextTitle}>
                        <Text style={styles.textStyleTitle}>BLACK OF THE / </Text>
                        <Text style={styles.textStylePrice}>124$</Text>
                    </View>
                    <Text style={styles.textSubtitle}>A maxi dress A maxi dress A maxi dress A maxi dress
                    A maxi dress A maxi dress A maxi dress A maxi dress
                    A maxi dress A maxi dress A maxi dress A maxi dress
                    A maxi dress A maxi dress A maxi dress A maxi dress
                    A maxi dress A maxi dress A maxi dress A maxi dress
                    A maxi dress A maxi dress A maxi dress A maxi dress
                    A maxi dress A maxi dress A maxi dress A maxi dress
                    </Text>
                    <View style={styles.bottomView}>
                        <View>
                        <TouchableOpacity>
                            <Text style={styles.textBottom}>Material leather</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#B10D65', marginRight: 10 }}>Color Khaki</Text>
                            </TouchableOpacity>
                            <View style={styles.textBottomColor}></View>
                        </View>
                        
                    </View>
                </View>
            </View>

        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    textBottomColor: {
        backgroundColor: 'yellow',
        width: 15,
        height: 15,
        borderRadius: 20,
        borderColor: '#B10D65',
        borderWidth: 0.5
    },
    textBottom: {
        color: '#B10D65'
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        height: 45,
        margin:40,
        // padding: 40
    },
    textSubtitle: {
        margin: 20,
        fontSize: 13,
        color: '#afaeaf',
        paddingTop: 20
    },
    textStylePrice: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    textStyleTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewTextTitle: {
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d7d7d7',
        flexDirection: 'row'
    },
    wrapper: {
        flex: 1, backgroundColor: '#ddd'
    },
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
    header: {
        backgroundColor: '#34B089',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5,
        flex: 1,
    },
    body: {
        flex: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        margin: 10,
        borderRadius: 5,

        shadowColor: '#DFDFDF',
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 8,
    },

    imgListProduct: {
        height: imageHeight,
        width: imageWidth,
        margin: 10,
        marginTop: 20,
        // marginHorizontal: 20,
    },
});
