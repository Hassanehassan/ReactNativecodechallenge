import {configureStore} from '@reduxjs/toolkit';

import loginslice from './Slice/LoginSlice';
import articleslice from './Slice/ArticleSlice';

const store = configureStore({
  reducer: {login: loginslice.reducer, article: articleslice.reducer},
});

export default store;
