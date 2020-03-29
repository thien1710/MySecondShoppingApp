import React from 'react';
import {View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from '../../components/Home';
import List from '../../components/List';
import Item from '../../components/Item';

const TestDrawerItem = (props) => (
  <View>
    <Text>
      Đây là component được hiển thị liên kết dưới dạng link trong Drawer
    </Text>
  </View>
);

const ItemDrawer = createDrawerNavigator({
  'Item': Item,
  'Link đến TestDrawerItem function component': TestDrawerItem
});

const ListItemStack = createStackNavigator({
  'List': List,
  'Item': ItemDrawer
});

const IndexNavigator = createBottomTabNavigator({
  'Home': Home,
  'List': ListItemStack
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === "Home") {
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