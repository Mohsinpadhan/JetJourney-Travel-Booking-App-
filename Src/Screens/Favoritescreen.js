import { StyleSheet, Text, View,Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Favoritescreen = () => {
  const navigation=useNavigation();
  return (
     <View style={styles.container}>
        <View style={styles.mainView}>
        <View style={styles.imgView}>
              <Image source={require('../Assests/backicon.png')} style={styles.backicon}/>
              </View>
              <Text style={styles.heading}>Favorite Places</Text>
           
         </View>
            <View>
              <Text style={styles.mainh}>Favorite Place</Text>
            </View>
           {/* start place callection */}
           <View style={styles.collection}>
            {/* 1st packege */}
            <View style={styles.first}>
            <TouchableOpacity onPress={()=>navigation.navigate('Niladriscreen')}>
                <View  style={styles.fpackege}>
                  <Image source={require('../Assests/popular1.png')}/>
                  <Text style={styles.name}>Niladri Reservoir</Text>
                  <View style={{flexDirection:'row',marginVertical:5,alignItems:'center',gap:2,}} >     
                    <Image source={require('../Assests/location1.png')} style={styles.location}/>
                    <Text style={styles.Ltext}>Tekerganj Sumanganj</Text>
                  </View>
                </View>
                </TouchableOpacity>
{/* 2nd */}
<View  style={styles.fpackege}>
                  <Image source={require('../Assests/popular2.png')}/>
                  <Text style={styles.name}>Casa las Tirtugas</Text>
                  <View style={{flexDirection:'row',marginVertical:5,alignItems:'center',gap:2,}} >     
                    <Image source={require('../Assests/location1.png')} style={styles.location}/>
                    <Text style={styles.Ltext}>A.V devas(Maxico)</Text>
                  </View>
                 
                </View>
                </View>
                {/* 3rd,,,2nd row */}
                <View style={styles.secondp}>

                <View  style={styles.fpackege}>
                  <Image source={require('../Assests/popular3.png')}/>
                  <Text style={styles.name}>Aonang Villa Resort</Text>
                  <View style={{flexDirection:'row',marginVertical:5,alignItems:'center',gap:2,}} >     
                    <Image source={require('../Assests/location1.png')} style={styles.location}/>
                    <Text style={styles.Ltext}>Bastola, Islampur</Text>
                  </View>
                </View>

                {/*  4th packege*/}

                <View  style={styles.fpackege}>
                  <Image source={require('../Assests/popular4.png')}/>
                  <Text style={styles.name}>Lake Of Lugano</Text>
                  <View style={{flexDirection:'row',marginVertical:5,alignItems:'center',gap:2,}} >     
                    <Image source={require('../Assests/location1.png')} style={styles.location}/>
                    <Text style={styles.Ltext}>Switzerland(U.S)</Text>
                  </View>
                </View>
                </View>
                   {/* 3rd row */}    
                  
                   <View style={styles.secondp}>

<View  style={styles.fpackege}>
  <Image source={require('../Assests/popular3.png')}/>
  <Text style={styles.name}>Aonang Villa Resort</Text>
  <View style={{flexDirection:'row',marginVertical:5,alignItems:'center',gap:2,}} >     
    <Image source={require('../Assests/location1.png')} style={styles.location}/>
    <Text style={styles.Ltext}>Bastola, Islampur</Text>
  </View>
</View>

{/*  5th packege*/}

<View  style={styles.fpackege}>
  <Image source={require('../Assests/popular4.png')}/>
  <Text style={styles.name}>Lake Of Lugano</Text>
  <View style={{flexDirection:'row',marginVertical:5,alignItems:'center',gap:2,}} >     
    <Image source={require('../Assests/location1.png')} style={styles.location}/>
    <Text style={styles.Ltext}>Switzerland(U.S)</Text>
  </View>
</View>
</View>
                   
           </View>
           
    </View>
  )
}

export default Favoritescreen

const styles = StyleSheet.create({
  container:{
    height:760,
   backgroundColor:'#FBFBFB',
   padding:10
 },

 mainView:{
  flexDirection:'row', 
  gap:100,  
  padding:10,
  backgroundColor:'white',
  height:50,
  borderRadius:20,
  alignItems:'center'
},

imgView:{
  height:30,
  width:30,
  backgroundColor:'#EEEEEE',
  padding:5,
  borderRadius:20,
},

backicon:{
  width:20,
  height:20,
},
heading:{
  fontSize:17,
  fontWeight:'500',
  color:'black',
  
  },
  mainh:{
    fontSize:20,
    color:'#000',
    padding:20,
    backgroundColor:'white',
    marginTop:2,
    marginBottom:30,
    fontWeight:'500'
  },
  collection:{
    padding:10,
  },
  name:{
    fontSize:14,
    color:'#000',
    fontWeight:'500'
  },
  location:{
    width:10,
    height:10,
},
Ltext:{
  fontSize:12,
},
rating:{
  fontSize:10,
  color:'#000'
},
fpackege:{
  backgroundColor:'#ffff',
  width:150,
  padding:5,
  borderRadius:20,
}
,
first:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:-35,
},
 secondp:{
flexDirection:'row',
  justifyContent:'space-between',
  marginVertical:5,
 },

})