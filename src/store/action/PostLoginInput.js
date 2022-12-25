import {loginaction} from '../Slice/LoginSlice';

export const postLoginInput = user => {
  return async dispatch => {
    dispatch(loginaction.loginPending());

    const postLogin = async () => {
      const response = await fetch('http://34.245.213.76:3000/auth/signin', {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data;
    };
    try {
      const data = await postLogin();
      dispatch(loginaction.loginFulfilled(data.accessToken));
    } catch (error) {
      dispatch(loginaction.loginRejected(error.message));
    }
  };
};
