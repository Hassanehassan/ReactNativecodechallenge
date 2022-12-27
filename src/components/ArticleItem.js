import React from 'react';
import {View, Text, StyleSheet, Dimensions, Linking} from 'react-native';

import Colors from '../constants/Colors';

const ArticleItem = props => {
  const {headline, abstract, web_url} = props.article;

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{headline.main}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text>
          {abstract.substring(0, 100)}
          {abstract.length > 100 ? <Text>...</Text> : ''}
        </Text>
      </View>
      <View style={styles.urlcontainer}>
        <Text
          style={{color: Colors.primary}}
          onPress={() => Linking.openURL(web_url)}>
          Go to url
        </Text>
      </View>
    </View>
  );
};
const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    color: 'black',
  },
  titlecontainer: {
    marginBottom: 3,
    flex: 1,
    alignItems: 'flex-start',
  },
  urlcontainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
  container: {
    backgroundColor: '#d0ecea',
    width: width / 2 - 10,
    padding: 8,
    borderRadius: 10,
    marginTop: 15,
  },
});

export default ArticleItem;
