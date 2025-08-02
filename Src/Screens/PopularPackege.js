import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PopularPackege = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
            <View style={styles.imgView}>
            <Image source={require('../Assests/backicon.png')} style={styles.backicon}/>
           </View>
              <Text style={styles.heading}>Popular Packege</Text>
        </View>
         <Text style={styles.mainheading}>All Popular Trip Packege</Text>
         {/* start packeges */}
       <View style={styles.packege}>
          <View style={{flexDirection:'row', gap:15,}}>
              <Image source={require('../Assests/packege1.png')}/>
              <View>
                 <Text style={styles.name}>Santorani Islnd</Text>
                 {/* 2nd row */}
                 <View style={{flexDirection:'row',gap:8,alignItems:'center',marginVertical:8}}>
                 <Image source={require('../Assests/calender.png')} style={styles.icon}/>
                 <Text>16July-28July</Text> 
                 </View>
                 {/* 3rd row */}
                 <View style={{flexDirection:'row',gap:5,alignItems:'center',marginBottom:8}}>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Text style={styles.rate}>5.7</Text>
                 </View>
                 {/* 4rt */}
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Text>/29 Person Joined</Text>
                 </View>
                 </View>
                 <Text style={styles.price}>$820</Text>                 
           </View>
         

        </View>
        {/* 2nd packege */}

        <View style={styles.packege}>
          <View style={{flexDirection:'row', gap:15,}}>
              <Image source={require('../Assests/packege2.png')}/>
              <View>
                 <Text style={styles.name}>Bukita Rayandr</Text>
                 {/* 2nd row */}
                 <View style={{flexDirection:'row',gap:8,alignItems:'center',marginVertical:8}}>
                 <Image source={require('../Assests/calender.png')} style={styles.icon}/>
                 <Text>20Sep-29Sep</Text> 
                 </View>
                 {/* 3rd row */}
                 <View style={{flexDirection:'row',gap:5,alignItems:'center',marginBottom:8}}>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Text style={styles.rate}>5.4</Text>
                 </View>
                 {/* 4rt */}
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Text>/23 Person Joined</Text>
                 </View>
                 </View>
                 <Text style={styles.price}>$770</Text>                 
           </View>
         

        </View>

        {/* 3rd packege */}

        <View style={styles.packege}>
          <View style={{flexDirection:'row', gap:15,}}>
              <Image source={require('../Assests/packege3.png')}/>
              <View>
                 <Text style={styles.name}>Cluster Omega</Text>
                 {/* 2nd row */}
                 <View style={{flexDirection:'row',gap:8,alignItems:'center',marginVertical:8}}>
                 <Image source={require('../Assests/calender.png')} style={styles.icon}/>
                 <Text>14Nev-22Nev</Text> 
                 </View>
                 {/* 3rd row */}
                 <View style={{flexDirection:'row',gap:5,alignItems:'center',marginBottom:8}}>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Text style={styles.rate}>5.8</Text>
                 </View>
                 {/* 4rt */}
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Text>/26 Person Joined</Text>
                 </View>
                 </View>
                 <Text style={styles.price}>$960</Text>                 
           </View>
         

        </View>
        {/* 4th packege */}

        <View style={styles.packege}>
          <View style={{flexDirection:'row', gap:15,}}>
              <Image source={require('../Assests/packege4.png')}/>
              <View>
                 <Text style={styles.name}>Shajek Bandbo</Text>
                 {/* 2nd row */}
                 <View style={{flexDirection:'row',gap:8,alignItems:'center',marginVertical:8}}>
                 <Image source={require('../Assests/calender.png')} style={styles.icon}/>
                 <Text>12Dec-19Dec</Text> 
                 </View>
                 {/* 3rd row */}
                 <View style={{flexDirection:'row',gap:5,alignItems:'center',marginBottom:8}}>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Image source={require('../Assests/star.png')} style={styles.str}/>
                 <Text style={styles.rate}>5.7</Text>
                 </View>
                 {/* 4rt */}
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Image source={require('../Assests/admin1.png')} style={styles.str}/>
                 <Text>/21 Person Joined</Text>
                 </View>
                 </View>
                 <Text style={styles.price}>$750</Text>                 
           </View>
         

        </View>


        

       
    </View>
  )
}

export default PopularPackege

const styles = StyleSheet.create({
    container:{
        height:760,
       backgroundColor:'#FBFBFB',
       padding:10
     },
     mainView:{
        flexDirection:'row', 
         gap:90,
        backgroundColor:'white',
        height:50,
        borderRadius:20,
        alignItems:'center',
        
    
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

        mainheading:{
            fontSize:20,
            color:'#000',
            fontWeight:'500',
            backgroundColor:'#fff',
            height:100,
            paddingTop:40   
        },
        // packege start
        packege:{
            backgroundColor:'#ffff',
            height:130,
            padding:7,
            borderRadius:20,
            marginVertical:4
        },
        name:{
            fontSize:15,
            marginRight:50,
            color:'#000',
            fontWeight:'500'
        },
        price:{
            backgroundColor:'#ff6347',
            height:25,
            width:40,
            color:'#fff',
            borderRadius:10,
            padding:2,
            textAlign:'center',
            fontWeight:'500'

        },
        icon:{
            width:20,
            height:20,
        },
        str:{
            width:15,
            height:15,
        },
        rate:{
            fontSize:15,
            color:'#000'
        }
})