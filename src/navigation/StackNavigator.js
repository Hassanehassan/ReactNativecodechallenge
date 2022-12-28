import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Colors from '../constants/Colors';
import SignInScreen, {
  screenOptions as AuthScreenOptions,
} from '../screens/SignInScreen';
import ArticlesScreen, {
  screenOptions as ArticleScreenOptions,
} from '../screens/ArticlesScreen';
import StartupScreen, {
  screenOptions as StartupScreenOptions,
} from '../screens/StartupScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
};

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="startup"
        component={StartupScreen}
        options={StartupScreenOptions}
      />
      <Stack.Screen
        name="login"
        component={SignInScreen}
        options={AuthScreenOptions}
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
