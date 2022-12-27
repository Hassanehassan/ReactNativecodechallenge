import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';
import {loginaction} from '../store/Slice/LoginSlice';
import ArticleItem from '../components/ArticleItem';
import {getArticles} from '../store/action/GetArticles';
import SearchComponent from '../components/SearchComponent';

const ArticlesScreen = props => {
  const dispatch = useDispatch();
  const {articles} = useSelector(state => state.article);
  useEffect(() => {
    dispatch(getArticles(0));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        numColumns={2}
        renderItem={({item}) => <ArticleItem article={item} />}
      />
    </View>
  );
};
export const screenOptions = {
  headerTitle: '',
  headerRight: () => {
    const dispatch = useDispatch();
    return (
      <View style={styles.buttoncontainer}>
        <TouchableNativeFeedback
          onPress={() => {
            dispatch(loginaction.logout());
          }}>
          <LinearGradient style={{borderRadius: 10}} colors={['#fff', '#fff']}>
            <Text style={styles.textSign}>Logout</Text>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
    );
  },
  headerLeft: () => {
    return <SearchComponent />;
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textSign: {
    fontSize: 20,
    color: Colors.primary,
    margin: 2,
  },
  buttoncontainer: {
    width: 70,
    justifyContent: 'center',
  },
});

export default ArticlesScreen;
