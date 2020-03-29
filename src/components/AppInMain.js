import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from '../../components/Home';
import List from '../../components/List';
import Item from '../../components/Item';
import Main from '../components/Main/Main'
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'

// import SafeAreaView from 'react-native-safe-area-view';

const TestDrawerItem = (props) => (
  <View>
    <Text>
      Đây là component được hiển thị liên kết dưới dạng link trong Drawer
    </Text>
    <DrawerItems {...props} />
  </View>
);

const ItemDrawer = createDrawerNavigator({
  'Home': Main,
  // 'Home': Home,
  'Link đến TestDrawerItem function component': TestDrawerItem
}, {
  contentComponent: CustomDrawer
}
);

const ListItemStack = createStackNavigator({
  'List': List,
  //   'StackHome': Home,
  'Item': Item,
  // 'Home': ItemDrawer
});

const IndexNavigator = createBottomTabNavigator({
  'Main': ItemDrawer,
  'List': ListItemStack
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === "Main") {
        iconName = `ios-home`;
      } else if (routeName === "List") {
        iconName = `ios-analytics`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  })
});

const AppInMain = createAppContainer(IndexNavigator);

export default AppInMain; 