import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BookDonateScreen from '../screens/ExchangeScreen';
import RecieverDetailsScreen  from '../screens/ReceiverDetailScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'BookDonateList'
  }
);