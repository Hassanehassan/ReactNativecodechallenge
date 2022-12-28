import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const Input = props => {
  const {
    Icon,
    secureTextEntry,
    placeholder,
    onChangeText,
    onBlur,
    value,
    name,
    text,
  } = props;
  return (
    <>
      <Text style={styles.text_footer}>{text}</Text>
      <View style={styles.action}>
        <Icon name={name} color="#05375a" size={20} />
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          value={value}
        />
        {props.children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text_footer: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight:'bold'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: Colors.accent,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: Colors.accent,
    fontFamily: 'bold',
    fontSize: 20,
  },
});

export default Input;
