import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = () => {
    if (name.trim().length === 0) {
      Alert.alert("Invalid Name", "Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    if (password.trim().length < 6) {
      Alert.alert("Invalid Password", "Password must be at least 6 characters long.");
      return;
    }

    Alert.alert("Success", "Sign-up successful!");
    // Navigate to next screen
    navigation.navigate('Bottomnavigation');
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.headingView}>
        <Text style={styles.mainHeading}>Sign up now</Text>
        <Text style={styles.subHeading}>Please fill in the details to create an account</Text>
      </View>
      <TextInput
        style={styles.inputName}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.password}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: '800' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center' }}>
        Already have an account?{' '}
        <TouchableOpacity>
          <Text style={{ color: '#FF6500', fontWeight: '600' }}>Sign in</Text>
        </TouchableOpacity>
      </Text>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Or connect</Text>
      <View style={{ flexDirection: 'row', gap: 20, marginLeft: 120, margin: 40 }}>
        <Image source={require('../Assests/facebook.png')} style={{ width: 30, height: 30 }} />
        <Image source={require('../Assests/instagram.png')} style={{ width: 30, height: 30 }} />
        <Image source={require('../Assests/twitter.png')} style={{ width: 30, height: 30 }} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingView: {
    marginVertical: 40,
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    marginVertical: 10,
  },
  inputName: {
    fontSize: 15,
    borderWidth: 1,
    width: 300,
    height: 40,
    marginLeft: 30,
    borderRadius: 12,
    marginVertical: 30,
    backgroundColor: '#EEEEEE',
    borderColor: '#FF6500',
  },
  input: {
    fontSize: 15,
    borderColor: '#FF6500',
    borderWidth: 1,
    width: 300,
    height: 40,
    marginLeft: 30,
    borderRadius: 12,
    backgroundColor: '#EEEEEE',
  },
  password: {
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
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff6347',
    width: 300,
    height: 40,
    marginHorizontal: 30,
    borderRadius: 12,
    padding: 5,
    backgroundColor: '#ff6347',
    marginVertical: 70,
  },
});
