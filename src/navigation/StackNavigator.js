import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/Colors';
import SignInScreen,{screenOptions as authScreenOptions} from '../screens/SignInScreen';
import ArticlesScreen,{screenOptions as ArticleScreenOptions} from '../screens/ArticlesScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor:Colors.primary 
  },
  headerTintColor:'white'
};

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="login"
        component={SignInScreen}
        options={authScreenOptions}
      />
    </Stack.Navigator>
  );
};


export const ArticlesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="article"
        component={ArticlesScreen}
        options={ArticleScreenOptions}
      />
    </Stack.Navigator>
  );
};
