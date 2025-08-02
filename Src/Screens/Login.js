import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AlertNotificationRoot, ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateAndLogin = () => {
    // Validation logic
    if (!email) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Validation Error',
        textBody: 'Email is required!',
        button: 'Close',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Invalid Email',
        textBody: 'Please enter a valid email address!',
        button: 'Close',
      });
      return;
    }

    if (!password) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Validation Error',
        textBody: 'Password is required!',
        button: 'Close',
      });
      return;
    }

    if (password.length < 6) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Weak Password',
        textBody: 'Password must be at least 6 characters long!',
        button: 'Close',
      });
      return;
    }

    // If validation passes
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'You have logged in successfully!',
      button: 'OK',
    });
    
    // Add a 2-second delay before navigating
    setTimeout(() => {
      navigation.navigate('Bottomnavigation');
    }, 2000);
  }    
  return (
    <AlertNotificationRoot>
      <View style={styles.mainView}>
        <View style={styles.headingView}>
          <Text style={styles.mainheading}>Login now</Text>
          <Text style={styles.sheading}>Please sign in to continue our app</Text>
        </View>
        <TextInput
          style={styles.Input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.Password}
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => navigation.navigate('Forgotscreen')}>
          <Text style={{ color: '#ff6347', marginTop: -30, marginLeft: 210 }}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={validateAndLogin}>
          <View style={styles.Botton}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: '800' }}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ textAlign: 'center', marginTop: 30, color: '#ff6347' }}>Signup</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Or connect</Text>
        <View style={{ flexDirection: 'row', gap: 20, marginLeft: 120, margin: 40 }}>
          <Image source={require('../Assests/facebook.png')} style={{ width: 30, height: 30 }} />
          <Image source={require('../Assests/instagram.png')} style={{ width: 30, height: 30 }} />
          <Image source={require('../Assests/twitter.png')} style={{ width: 30, height: 30 }} />
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

export default Login;

const styles = StyleSheet.create({
  headingView: {
    marginVertical: 40,
  },
  mainheading: {
    fontSize: 30,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  sheading: {
    textAlign: 'center',
    marginVertical: 10,
  },
  Input: {
    fontSize: 15,
    borderColor: '#ff6347',
    borderWidth: 1,
    width: 300,
    height: 40,
    marginLeft: 30,
    borderRadius: 12,
    backgroundColor: '#EEEEEE',
  },
  Password: {
    fontSize: 15,
    borderColor: '#FF6500',
    borderWidth: 1,
    width: 300,
    height: 40,
    marginLeft: 30,
    borderRadius: 12,
    marginVertical: 30,
    backgroundColor: '#EEEEEE',
  },
  Botton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: 300,
    height: 40,
    marginHorizontal: 30,
    borderRadius: 12,
    padding: 5,
    backgroundColor: '#ff6347',
    marginTop: 70,
  },
});
