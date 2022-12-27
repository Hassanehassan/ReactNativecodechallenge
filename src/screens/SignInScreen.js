import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TextInput,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {postLoginInput} from '../store/action/PostLoginInput';

import Colors from '../constants/Colors';

const loginValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInScreen = props => {
  const [SecureTextEntry, setSecureTextEntry] = useState(true);

  const updateSecureTextEntry = () => {
    setSecureTextEntry(SecureTextEntry => !SecureTextEntry);
  };
  const dispatch = useDispatch();
  const {isAuth, isLoading, error} = useSelector(state => state.login);

  const submitHandler = user => {
    dispatch(postLoginInput(user));
  };

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validateOnMount={true}
      onSubmit={(values, actions) => {
        submitHandler(values);
        actions.resetForm();
      }}
      validationSchema={loginValidationSchema}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View style={styles.screen}>
          <StatusBar
            backgroundColor={Colors.primary}
            barStyle="light-content"
          />
          <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <Icon name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Username"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              {!errors.username && values.username.length !== 0 ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {errors.username && touched.username && (
              <Text style={styles.errors}>{errors.username}</Text>
            )}
            <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                style={styles.textInput}
                autoCapitalize="none"
                secureTextEntry={SecureTextEntry ? true : false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableNativeFeedback onPress={updateSecureTextEntry}>
                {SecureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableNativeFeedback>
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errors}>{errors.password}</Text>
            )}
            <View style={styles.button}>
              <TouchableNativeFeedback
                disabled={!values.username || !values.password || isLoading}
                onPress={handleSubmit}>
                <LinearGradient
                  colors={
                    !values.username || !values.password || isLoading
                      ? ['#71a7a742', 'grey']
                      : ['#08d4c4', Colors.accent]
                  }
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#fff',
                      },
                    ]}>
                    Login
                  </Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            {isLoading && (
              <View>
                <ActivityIndicator size="large" color="rgb(48, 128, 90)" />
              </View>
            )}
            {error && (
              <View style={styles.errorcontainer}>
                <Text style={styles.errors}>{error}</Text>
              </View>
            )}
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};
export const screenOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: Colors.accent,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: Colors.accent,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: Colors.accent,
    fontFamily: 'bold',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  errorcontainer: {
    marginTop: 10,
  },
});
export default SignInScreen;
