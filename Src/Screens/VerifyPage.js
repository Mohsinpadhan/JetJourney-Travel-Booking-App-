import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { useNavigation } from '@react-navigation/native';



const VerifyPage = () => {
const navigation=useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>OTP Verification</Text>
      <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 13 }}>
        Please check your email www.mohsinpadhan2@gmail{'\n'}.com To see the verification code
      </Text>
      <Text style={styles.otp}>OTP Code</Text>
      <View style={styles.otpinput}>
        <TextInput
          style={styles.input}
          placeholder=''
        />

        <TextInput
          style={styles.input}
          placeholder=''
        />

        <TextInput
          style={styles.input}
          placeholder=''
        />

        <TextInput
          style={styles.input}
          placeholder=''
        />

      </View>
      <View style={styles.Botton}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: '800' }}>Verify</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 35, marginVertical: 10 }}>
        <Text>Resend code To</Text>
        <Text>01:54</Text>
      </View>
    </View>
  )
}

export default VerifyPage

const styles = StyleSheet.create({
  Heading: {
    textAlign: 'center',
    marginTop: 70,
    fontSize: 25,
    color: '#000000',
    fontWeight: '500',

  },
  otp: {
    fontSize: 25,
    color: '#000000',
    fontWeight: '400',
    marginHorizontal: 20,
    marginVertical: 20,

  },
  input: {
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    borderColor: '#ff6347',
    marginHorizontal: 15,
    textAlign: 'center',
    fontSize: 20,
    padding: 5
  },
  otpinput: {
    flexDirection: 'row'
  },
  Botton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff6347',
    width: 300,
    height: 40,
    marginHorizontal: 30,
    borderRadius: 12,
    padding: 5,
    backgroundColor: '#ff6347',
    marginTop: 60,
  },
})