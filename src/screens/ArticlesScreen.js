import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Colors from '../constants/Colors';
import {loginaction} from '../store/Slice/LoginSlice';
import ArticleItem from '../components/ArticleItem';
import {getArticles} from '../store/action/GetArticles';
import SearchComponent from '../components/SearchComponent';
import {articleaction} from '../store/Slice/ArticleSlice';
import MyButton from '../components/MyButton';

const ArticlesScreen = props => {
  const [currentpage, setcurrentpage] = useState(0);
  const [isRefreshing, setisRefreshing] = useState(false);
  const dispatch = useDispatch();
  const {
    articles,
    isLoading,
    errors,
    filteredArticles,
    searchInput,
    first,
    lastRes,
  } = useSelector(state => state.article);
  const articleshow = searchInput ? filteredArticles : articles;
  const messageShow = !searchInput
    ? 'articles not found!'
    : 'failed to search...';
  useEffect(() => {
    dispatch(getArticles(currentpage));
  }, [dispatch, currentpage]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <FlatList
        data={articleshow}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        numColumns={2}
        renderItem={({item}) => <ArticleItem article={item} />}
        onEndReached={
          lastRes.length === 0 || searchInput
            ? null
            : () => {
                setcurrentpage(currentpage + 1);
              }
        }
        onEndReachedThreshold={0}
        onRefresh={
          errors
            ? () => {
                setisRefreshing(true);
                dispatch(getArticles(currentpage));
                setisRefreshing(false);
              }
            : () => {
                setisRefreshing(true);
                if (currentpage !== 0) {
                  setcurrentpage(0);
                  dispatch(articleaction.refreshing());
                }
                setisRefreshing(false);
              }
        }
        refreshing={isRefreshing}
      />
      {isLoading && <ActivityIndicator size="large" color="rgb(48, 128, 90)" />}
      {errors && !isLoading && (
        <View style={styles.containerError}>
          <Text style={styles.error}>{errors}</Text>
          <Text style={styles.error}>please pull down to refresh</Text>
        </View>
      )}
      {articleshow.length === 0 && !first && (
        <View style={styles.containerError}>
          <Text style={styles.error}>{messageShow}</Text>
        </View>
      )}
    </View>
  );
};
export const screenOptions = {
  headerTitle: '',
  headerRight: () => {
    const dispatch = useDispatch();
    const logouHandler = () => {
      dispatch(loginaction.logout());
      dispatch(articleaction.refreshing());
    };
    return (
      <MyButton
        viewStyle={styles.buttoncontainer}
        onPress={logouHandler}
        linearStyle={{borderRadius: 10}}
        colors={['#fff', '#fff']}
        textStyle={styles.textSign}
        text="Logout"
      />
    );
  },
  headerLeft: () => {
    const dispatch = useDispatch();
    const searchHandler = value => {
      dispatch(articleaction.searchArticles(value));
    };
    return <SearchComponent onSearch={searchHandler} />;
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  error: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerError: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttoncontainer: {
    width: 70,
    justifyContent: 'center',
  },
  textSign: {
    fontSize: 20,
    color: Colors.primary,
    margin: 2,
  },
});

export default ArticlesScreen;
