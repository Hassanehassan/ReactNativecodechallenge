import {createSlice} from '@reduxjs/toolkit';

const loginslice = createSlice({
  name: 'login',
  initialState: {
    isAuth: false,
    isLoading: false,
    error: '',
    token: '',
  },
  reducers: {
    loginPending(state) {
      state.isLoading = true;
    },
    loginFulfilled(state, action) {
      state.isLoading = false;
      state.isAuth = true;
      state.token = action.payload;
    },
    loginRejected(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.isLoading = false;
      state.error = '';
      state.token = '';
    },
  },
});

export const loginaction = loginslice.actions;

export default loginslice;
