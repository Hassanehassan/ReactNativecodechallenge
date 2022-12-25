import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginaction} from '../store/Slice/LoginSlice';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';

const ArticlesScreen = props => {
  return (
    <View>
      <Text>Articles</Text>
    </View>
  );
};
export const screenOptions = {
  headerTitle: 'Articles',
  headerRight: () => {
    const dispatch = useDispatch();
    return (
      <View style={{width: 70, justifyContent: 'center'}}>
        <TouchableNativeFeedback
          onPress={() => {
            dispatch(loginaction.logout());
          }}>
          <LinearGradient colors={['#fff', 'grey']}>
            <Text style={[styles.textSign]}>Logout</Text>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  textSign: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default ArticlesScreen;
