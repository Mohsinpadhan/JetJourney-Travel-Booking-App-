import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';


const Forgotscreen = () => {
  const navigation=useNavigation();
         const[email, setEmail] =useState('');
         const handleResetPassword =() =>{
          if(email.trim()=== ''){
            Alert.alert('Validation Error','Please enter your email !');
          }
          else{
            Alert.alert('Success','Reset link sent to your email ');
          
          }
        };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot password</Text>
      <Text style={{textAlign:'center',marginVertical:20}}>Enter your email account to reset {"\n"}
        your password</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter your email'
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        />

<View style={styles.Botton}>
           <TouchableOpacity onPress={()=>navigation.navigate('VerifyPage')}>
               <Text style={{fontSize:20,color:'white',fontWeight:'800'}}>Reset password</Text>
               </TouchableOpacity>
           </View>
    </View>
  )
};

export default Forgotscreen

const styles = StyleSheet.create({
  heading:{
    textAlign:'center',
    marginTop:70,
    fontSize:25,
    color:'#000000',
    fontWeight:'500'
  },
  input:{
    borderWidth:1,
    width:300,
    height:40,
    borderRadius:12,
    marginHorizontal:30,
    marginVertical:30,
    backgroundColor:'#EEEEEE',
    borderColor:'#FF6500',
  },
  Botton:{
    alignItems:'center',
    borderWidth:1,
    borderColor:'#ff6347',
    width:300,
    height:40,
    marginHorizontal:30,
    borderRadius:12,
    padding:5,
    backgroundColor:'#ff6347',
    marginVertical:20,
  },
})