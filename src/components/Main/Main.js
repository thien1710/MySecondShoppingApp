import React, { Component } from 'react';
import { StyleSheet, Text, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import Header from './ScreenObjects/Header'
import Collection from './ScreenObjects/Collection';
import Category from './ScreenObjects/Category'
// import TopProduct from './ScreenObjects/TopProduct'
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
        //     <Button
        //   title='Open Drawer'
        //   onPress={() => {
        //     this.props.navigation.openDrawer();
        //   }} />

            <ScrollView style={styles.container}>

                {/* HEADER */}

                <Header navigation={this.props.navigation} />

                {/* MAIN */}

                {/* SPRING COLLECTION */}
                {/* <Collection navigation={this.props.navigation} /> */}

                {/* LIST OF CATEGORY */}
                {/* <Category /> */}

                {/* TOP PRODUCT */}
                {/* <TopProduct /> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
