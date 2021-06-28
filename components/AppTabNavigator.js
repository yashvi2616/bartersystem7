import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';

export const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/home.png')}
          style={{ width: 25, height: 25 }}
        />
      ),
      tabBarLabel: 'Home',
    },
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/exchange.png')}
          style={{ width: 45, height: 45}}
        />
      ),
      tabBarLabel: 'Exchange',
    },
  },
});
