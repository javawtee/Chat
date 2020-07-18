import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './helpers/StackNavigator';
import routes from './root.stacks';

export default Navigator = () =>
  <NavigationContainer>
    <RootNavigator {...routes} />
  </NavigationContainer>
