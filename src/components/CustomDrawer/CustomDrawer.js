import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image  } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

const CustomDrawer = props => (
    <ScrollView style={{ backgroundColor: 'yellow' }}>
        <View style={styles.container}>
            <Image source={require('../../media/temp/profile.png')}
                style={{ width: 100, height: 100 }} />
            <DrawerItems {...props} />
        </View>
    </ScrollView>
);

export default CustomDrawer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
