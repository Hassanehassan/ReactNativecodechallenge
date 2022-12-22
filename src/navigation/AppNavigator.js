import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { AuthNavigator } from './StackNavigator';
import { ArticlesNavigator } from './StackNavigator';

const AppNavigator = props => {
    const isAuth = true;
    return (
      <NavigationContainer>
        {isAuth && <ArticlesNavigator />}
        {!isAuth && <AuthNavigator />}
      </NavigationContainer>
    );
  };
  export default AppNavigator;