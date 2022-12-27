import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Colors from '../constants/Colors';

const SearchComponent = props => {
  return (
    <View style={styles.searchWrapperStyle}>
      <Feather name="search" size={20} color="white" style={styles.iconStyle} />
      <TextInput
        placeholder="Search here..."
        placeholderTextColor="white"
        style={styles.searchInputStyle}
      />
      <Icon size={18} name="close" color="white" style={styles.iconStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapperStyle: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
  },
  iconStyle: {
    marginVertical: 15,
  },
  searchInputStyle: {
    fontSize: 18,
    color: 'white',
    maxWidth: '60%',
  },
});

export default SearchComponent;
