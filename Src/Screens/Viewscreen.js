import { StyleSheet, Text, View , ImageBackground,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Viewscreen = () => {
  return (
         <ImageBackground style={{flex:1}} source={require('../Assests/Group90.png')} >
              <Text style={styles.heading}>View</Text>
              <Image source={require('../Assests/Group94.png')} style={styles.image94}/>

              <Image source={require('../Assests/Group93.png')} style={styles.img93}/>
           <View style={styles.footer}>
             <View style={styles.main}>
                <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Niladri Reservoir</Text>
                 <View style={{flexDirection:'row'}}>
                   <Image source={require('../Assests/star.png')} style={styles.star}/>
                   <Text style={{color:'#fff',fontSize:15,  marginTop:5}}>4.7</Text>
                </View>
             </View>
{/* Second containt  */}
          <View style={styles.secondmain}>
              <View style={{flexDirection:'row',}}>
                <Image source={require('../Assests/location.png')} style={styles.location}/>
                <Text style={{color:'#fff', marginTop:8}}>Tekergat, Sumanganj</Text>
              </View>
              <View style={{flexDirection:'row',borderRadius:40, marginTop:8 }}>
                 <Image source={require('../Assests/admin1.png')} style={styles.View}/>
                 <Text style={{color:'white',backgroundColor:'#a7ccc7',borderRadius:10,padding:2,height:24}}>+50</Text>
              </View>
              </View>
    {/* 3rd View */}
         
          <View style={{flexDirection:'row',gap:20}}>
                <Image source={require('../Assests/clock.png')} style={styles.location}/>
                <Text style={{color:'#fff', marginTop:8}}>45 minutes</Text>
              </View>
              {/* button */}
              <View style={styles.Button}>
           <TouchableOpacity>
               <Text style={{fontSize:20,color:'white',fontWeight:'800'}}>See On The Map</Text>
               </TouchableOpacity>
           </View>


           </View>
         </ImageBackground>
  )
}

export default Viewscreen

const styles = StyleSheet.create({
  heading:{
    fontSize:20,
    fontWeight:'500',
    color:'#fff',
    textAlign:'center',
    marginVertical:50,
  },
  image94:{
    marginHorizontal:160,
    
  },
  img93:{
    marginVertical:30,
    marginHorizontal:30
  },
  footer:{
    width:300,
    height:250,
    backgroundColor:'#000'  ,
    opacity:.6 ,
    borderRadius:40,
    marginHorizontal:30,
    padding:15,
    },
    star:{
      width:15,
      height:15,
      marginTop:8
    },
    main:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    location:{
      width:17,
      height:17,
      marginTop:10,

    },
    View:{
      width:25,
      height:25,
      backgroundColor:'#a7ccc7',
      borderRadius:40
    },
   
    secondmain:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
Button:{
alignItems:'center',
  borderWidth:1,
  borderColor:'#ff6347',
  width:250,
  height:40,
  borderRadius:12,
  padding:5,
  backgroundColor:'#ff6347',
  marginTop:50,
  marginLeft:10
},    

})
