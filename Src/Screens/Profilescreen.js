import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Profilescreen = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.mainView}>
            <View style={styles.imgView}>
            <Image source={require('../Assests/backicon.png')} style={styles.backicon}/>
           </View>
              <Text style={styles.heading}>Profile</Text>
              <View style={styles.imgView}>
              <Image source={require('../Assests/edit.png')} style={styles.backicon}/>
              </View>
        </View>
        {/* profile section */}
        <View style={styles.item}>
            <Image source={require('../Assests/profile.png')}/>
            <Text style={styles.user}>Mohsin Padhan</Text>
            <Text>mohsinpadhan423@gmail.com</Text>
        </View>
        {/* score contant */}
        <View style={styles.score}>
            <View style={styles.View}>
                <Text style={styles.scortext}>Reward Points</Text>
                <Text style={styles.point}>360</Text>
            </View>
            <View style={styles.View}>
                <Text style={styles.scortext}>Travel Trips</Text>
                <Text style={styles.point}>238</Text>
            </View>
            <View style={styles.View}>
                <Text style={styles.scortext}>Bucket List</Text>
                <Text style={styles.point}>473</Text>
            </View>
        </View>
        {/* other components */}
        <View >
             <View style={styles.maincontent}>
                <Image source={require('../Assests/user1.png')} style={styles.img}/>
                <Text style={styles.texth}>Profile</Text>
                <Image source={require('../Assests/back.png')} style={styles.back}/>
            </View> 
            {/* 2nd */}
            <View style={styles.maincontent}>
                <Image source={require('../Assests/bookmark.png')} style={styles.img}/>
                <Text style={styles.texth}>Bookmarks</Text>
                <Image source={require('../Assests/back.png')} style={styles.bookback}/>
            </View> 
            {/* 3rd */}
            <View style={styles.maincontent}>
                <Image source={require('../Assests/trip.png')} style={styles.img}/>
                <Text style={styles.texth}>Previous Trip</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Viewscreen')} > 
                    <Image source={require('../Assests/back.png')} style={styles.tripback}/>
                    </TouchableOpacity>
 
            </View> 
            {/* 4th */}
            <View style={styles.maincontent}>
                <Image source={require('../Assests/settings.png')} style={styles.img}/>
                <Text style={styles.texth}>Settings</Text>
                <Image source={require('../Assests/back.png')} style={styles.setback}/>
            </View> 
            {/* 5th */}
            <View style={styles.maincontent}>
                <Image source={require('../Assests/user1.png')} style={styles.img}/>
                <Text style={styles.texth}>Log Out</Text>
                <Image source={require('../Assests/back.png')} style={styles.varback}/>
            </View> 
        </View>
    </View>
  )
}

export default Profilescreen

const styles = StyleSheet.create({
    container:{
        height:760,
       backgroundColor:'#FBFBFB',
       padding:10
     },
     mainView:{
        flexDirection:'row', 
          justifyContent:'space-between',  
        backgroundColor:'white',
        height:50,
        borderRadius:20,
        alignItems:'center'
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
        imgView:{
            height:30,
            width:30,
            backgroundColor:'#EEEEEE',
            padding:5,
            borderRadius:20,
        },
        item:{
            height:250,
            paddingVertical:30,
            alignItems:'center',
            backgroundColor:'#ffff',
            borderRadius:20,
        },
        user:{
            fontSize:18,
            color:'#000',
            fontWeight:'500',
        },
        score:{
            flexDirection:'row',
            justifyContent:'space-between',
            
        },
        scortext:{
            fontSize:15,
            color:'#000',
            fontWeight:'500',
        },
        View:{
            alignItems:'center',
            width:110,
            height:60,
            backgroundColor:'#ffff',
            borderRadius:10,
            marginVertical:5,
        },
        point:{
            color:'#ff6347',
            fontWeight:'600',
            fontSize:17,
            paddingTop:5
        },
        img:{
            width:20,
            height:20,
        },
        maincontent:{
            flexDirection:'row',
            gap:20,
            alignItems:'center',
            width:340,
            height:50,
            backgroundColor:'#ffff',
            padding:5,
            borderRadius:20,
            marginVertical:5
            
        },
        texth:{
            fontSize:15,
            fontWeight:'450',
            color:'#000'
        },
        back:{
            width:20,
            height:20,
            marginLeft:150
        },
        bookback:{
            width:20,
            height:20,
            marginLeft:119
        },

        tripback:{
            width:20,
            height:20,
            marginLeft:106
        },

        setback:{
            width:20,
            height:20,
            marginLeft:137
        },
        varback:{
            width:20,
            height:20,
          marginLeft:138,
        },
})