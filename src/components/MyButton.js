import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MyButton = props => {
  const {viewStyle, onPress, linearStyle, colors, textStyle, text, disabled} =
    props;
  return (
    <View style={viewStyle}>
      <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
        <LinearGradient style={linearStyle} colors={colors}>
          <Text style={textStyle}>{text}</Text>
        </LinearGradient>
      </TouchableNativeFeedback>
    </View>
  );
};

export default MyButton;
