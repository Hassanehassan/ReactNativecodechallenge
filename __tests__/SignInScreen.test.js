import React from 'react';
import SignInScreen from '../src/screens/SignInScreen';
import store from '../src/store/index';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import config from '../config';

global.fetch = jest.fn((username, password) =>
  fetch(config.API_URL_POST, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (username === 'candidate' && password === 'P@ssw0rd') {
      Promise.resolve({
        json: () =>
          Promise.resolve({accessToken: 'HSHJKAJLNWNHYhahujiCFSGKLXALMASD'}),
      });
    } else {
      Promise.resolve({
        json: () =>
          Promise.resolve({message: 'Please check your login credentials'}),
      });
    }
  }),
);

describe('loginScreen', () => {
  test('Input fields', () => {
    const loginScreen = render(
      <Provider store={store}>
        <SignInScreen />
      </Provider>,
    );
    const username = loginScreen.getByPlaceholderText('Your Username');
    const password = loginScreen.getByPlaceholderText('Your Password');
    const Button = loginScreen.getByText('login');
    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
    expect(Button).toBeTruthy();
  });

  test('loginApiFailed', async () => {
    const loginScreen = render(
      <Provider store={store}>
        <SignInScreen />
      </Provider>,
    );
    const Button = loginScreen.getByText('login');
    const username = loginScreen.getByPlaceholderText('Your Username');
    const password = loginScreen.getByPlaceholderText('Your Password');
    await act(async () => {
      await fireEvent.changeText(username, 'hello');
      await fireEvent.changeText(password, 'hello');
    });
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({username, password}),
      }),
    );
    await act(async () => {
      await fireEvent.press(Button);
    });
    waitFor(() => {
      expect(loginScreen.getByText(message)).toBeTruthy();
    });
  });

  test('loginApiSuccess', async () => {
    const loginScreen = render(
      <Provider store={store}>
        <SignInScreen />
      </Provider>,
    );

    const Button = loginScreen.getByText('login');
    const username = loginScreen.getByPlaceholderText('Your Username');
    const password = loginScreen.getByPlaceholderText('Your Password');
    await act(async () => {
      await fireEvent.changeText(username, 'candidate');
      await fireEvent.changeText(password, 'P@ssw0rd');
    });
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({username, password}),
      }),
    );
    await act(async () => {
      await fireEvent.press(Button);
    });
    waitFor(() => {
      expect(store.getState().login.token).not.toBe('');
    });
  });

  test('disableButton', async () => {
    const loginScreen = render(
      <Provider store={store}>
        <SignInScreen />
      </Provider>,
    );
    const username = loginScreen.getByPlaceholderText('Your Username');
    const password = loginScreen.getByPlaceholderText('Your Password');
    const Button = loginScreen.getByTestId('Button');
    fireEvent.changeText(username, '');
    fireEvent.changeText(password, '');
    fireEvent.press(Button);
    expect(Button.props.children.props.disabled).toStrictEqual(true);
  });

  test('enable Button when field not vide', async () => {
    const loginScreen = render(
      <Provider store={store}>
        <SignInScreen />
      </Provider>,
    );
    const username = loginScreen.getByPlaceholderText('Your Username');
    const password = loginScreen.getByPlaceholderText('Your Password');
    const Button = loginScreen.getByTestId('Button');
    fireEvent.changeText(username, 'Hassane');
    fireEvent.changeText(password, 'Hello');
    expect(Button.props.children.props.disabled).toStrictEqual(false);
  });
});
