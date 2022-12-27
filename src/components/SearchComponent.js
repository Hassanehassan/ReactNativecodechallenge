import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';

import Colors from '../constants/Colors';
import {articleaction} from '../store/Slice/ArticleSlice';

const SearchComponent = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.searchWrapperStyle}>
      <Feather name="search" size={20} color="white" style={styles.iconStyle} />
      <TextInput
        placeholder="Search here..."
        placeholderTextColor="white"
        style={styles.searchInputStyle}
        onChangeText={value => dispatch(articleaction.searchArticles(value))}
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
