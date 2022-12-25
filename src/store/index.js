import {configureStore} from '@reduxjs/toolkit';

import loginslice from './Slice/LoginSlice';

const store = configureStore({
  reducer: {login: loginslice.reducer},
});

export default store;
