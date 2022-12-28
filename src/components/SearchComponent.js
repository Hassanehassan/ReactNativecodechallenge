import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
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
        onChangeText={value => props.onSearch(value)}
      />
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
