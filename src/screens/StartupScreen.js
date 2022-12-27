import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';

const StartupScreen = props => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo1.jpeg')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>
          Ready to see the most beautiful articles?{' '}
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableNativeFeedback
            onPress={() => props.navigation.navigate('login')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Let's Go</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

export const screenOptions = {
  headerShown: false,
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  title: {
    color: Colors.accent,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StartupScreen;
