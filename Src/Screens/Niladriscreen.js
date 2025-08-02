import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Niladriscreen = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container} >
      <Image source={require('../Assests/Group1.png')} style={styles.bgimage}/>
      
        <View style={styles.bottompage}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <Text style={styles.heading}>Niladri Reservoir</Text>
            <Text>Tekergat Sunamganj</Text>
            </View>
            <View style={{backgroundColor:'#f0e5e4',borderRadius:40,width:60,height:60,padding:10}}>
                <Image source={require('../Assests/admin1.png')} style={{width:40,height:40,}}/>
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
                 <Text>Tekergat</Text>
                 <Text style={{color:'black'}}>4.7 <Text style={{color:'grey'}}>(2498)</Text></Text>
                 <Text style={{color:'#ff6347'}}>$59<Text style={{color:'black'}}>/person </Text></Text>
              </View>
              <View style={styles.imagecollection}>
              <Image source={require('../Assests/collection1.jpg')} style={{width:50,height:50, marginTop:10}}/>
              <Image source={require('../Assests/collection2.jpg')} style={{width:50,height:50, marginTop:10}}/>
              <Image source={require('../Assests/collection3.jpg')} style={{width:50,height:50, marginTop:10}}/>
              <Image source={require('../Assests/collection4.jpg')} style={{width:50,height:50, marginTop:10}}/>
              <Image source={require('../Assests/collection5.jpg')} style={{width:50,height:50, marginTop:10}}/>
           </View>
           <Text style={{fontSize:18,color:'black',fontWeight:'500',marginVertical:15,}}>About Destination</Text>
           <Text>
           You will get a complete travel package on the beaches. Packages in the form of airline tickets,
            recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC...<Text style={{color:'orange'}}> Read More</Text> 
           </Text>
           <TouchableOpacity>
           <View style={styles.Button}>
            <Text style={styles.buttontext}>Book Now</Text>
           </View>
           </TouchableOpacity>
        </View>
    </View>
  )
}

export default Niladriscreen

const styles = StyleSheet.create({
   
    bgimage:{
        width:370,
        height:400
    },
    bottompage:{
        backgroundColor:'#fff',
        height:500,
        width:370,
        borderRadius:60,
        marginTop:-80,
        padding:20
    },
    heading:{
        fontSize:20,
        fontWeight:'500',
        color:'#000'
    },
    imagecollection:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Button:{
        alignItems:'center',
        borderWidth:1,
        borderColor:'#ff6347',
        width:330,
        height:40,
        borderRadius:12,
        padding:5,
        backgroundColor:'#ff6347',
        marginVertical:20,
      },
    buttontext:{
        color:'white',
        fontSize:20,
        fontWeight:'600',
        textAlign:'center',
    }
    
})