import React from 'react';
import { View, Text } from 'react-native';

const screenOptions = {
  // common: {
  //   headerStyle: {
  //     backgroundColor: 'rgb(50, 60, 168)',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // }
};

const commonOptions = {};

const routeList = {
  BudgetBook: {
    title: 'Budget Book',
    Component: () => <View><Text>Hi</Text></View>,
  },
};

export default {
  initialRouteName: Object.keys(routeList)[0],
  screenOptions,
  routeList
};