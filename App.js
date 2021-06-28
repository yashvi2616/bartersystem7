import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';
import ExchangeScreen from './screens/ExchangeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import firebase from 'firebase';
import db from './config'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#322e2f' },
});
