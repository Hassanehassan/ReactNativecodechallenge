import {createSlice} from '@reduxjs/toolkit';

const articleslice = createSlice({
  name: 'article',
  initialState: {
    articles: [],
    isLoading: false,
    errors: null,
  },
  reducers: {
    getAllArticlesPending(state) {
      state.isLoading = true;
    },
    getAllArticlesFulfilled(state, action) {
      state.articles = [...state.articles, ...action.payload];
      state.isLoading = false;
      state.errors = '';
    },
    getAllArticlesRejected(state, action) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const articleaction = articleslice.actions;

export default articleslice;
