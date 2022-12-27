import {loginaction} from '../Slice/LoginSlice';
import config from '../../../config';

export const postLoginInput = user => {
  return async dispatch => {
    dispatch(loginaction.loginPending());
    try {
      const response = await fetch(config.API_URL_POST, {
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
      dispatch(loginaction.loginFulfilled(data.accessToken));
    } catch (error) {
      dispatch(loginaction.loginRejected(error.message));
    }
  };
};
