import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../constants/Colors';

const SearchComponent = props => {
  const [cliked, setCliked] = useState(false);
  const [inputValue, setInputValue] = useState(props.value);
  return (
    <View style={styles.searchWrapperStyle}>
      <Feather name="search" size={20} color="white" style={styles.iconStyle} />
      <TextInput
        value={inputValue}
        placeholder="Search here..."
        placeholderTextColor="white"
        style={styles.searchInputStyle}
        onChangeText={value => {
          props.onSearch(value);
          setInputValue(value);
        }}
        onFocus={() => {
          setCliked(true);
        }}
        onBlur={() => {
          setCliked(false);
        }}
      />
      {cliked && (
        <Icon
          style={styles.iconStyle}
          name="close"
          size={25}
          color="white"
          onPress={() => {
            setInputValue('');
            props.onSearch('');
          }}
        />
      )}
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
    maxWidth: '50%',
  },
});

export default SearchComponent;
