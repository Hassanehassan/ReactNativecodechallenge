import {createSlice} from '@reduxjs/toolkit';

const articleslice = createSlice({
  name: 'article',
  initialState: {
    articles: [],
    isLoading: false,
    errors: null,
    filteredArticles: [],
    searchInput: '',
    lastRes: [],
    first: true,
  },
  reducers: {
    searchArticles(state, action) {
      state.searchInput = action.payload;
      state.filteredArticles = state.articles.filter(article => {
        return (
          article.headline.main
            .toString()
            .toLowerCase()
            .match(state.searchInput.toString().toLowerCase()) ||
          article.abstract
            .toString()
            .toLowerCase()
            .match(action.payload.toString().toLowerCase())
        );
      });
    },
    refreshing(state) {
      state.articles = [];
      state.lastRes = [];
      state.errors = null;
      state.filteredArticles = [];
      state.searchInput = '';
    },
    getAllArticlesPending(state) {
      state.isLoading = true;
    },
    getAllArticlesFulfilled(state, action) {
      state.articles = [...state.articles, ...action.payload];
      state.isLoading = false;
      state.first = false;
      state.errors = '';
      state.lastRes = action.payload;
    },
    getAllArticlesRejected(state, action) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const articleaction = articleslice.actions;

export default articleslice;
