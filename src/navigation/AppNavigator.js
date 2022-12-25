import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AuthNavigator} from './StackNavigator';
import {ArticlesNavigator} from './StackNavigator';

const AppNavigator = props => {
  const {isAuth} = useSelector(state => state.login);
  return (
    <NavigationContainer>
      {isAuth && <ArticlesNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};
export default AppNavigator;
