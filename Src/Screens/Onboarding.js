import React, { useState } from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native'; 
import AppIntroSlider from 'react-native-app-intro-slider'; 
// import SignupScreen from './SignupScreen';  // Ensure LoginScreen is a registered route 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; 
import Login from '../Screens/Login';





const slides = [ 
  
  { 
    key: 1, 
    image: require('../Assests/image1.png'), 
    title: 'Life is short and the \n world is Wide ' , 
    text: 'At Friends tours and travel, we customize \n reliable and trustworthy educational tours \n to destinations all over the world', 
  }, 
  { 
    key: 2, 
    image: require('../Assests/image2.png'), 
    title: 'It’s a big world out \n there go explore', 
    text: 'To get the best of your adventure you just \n need to leave and go where you like. we are \n waiting for you', 
    

  }, 
  { 
    key: 3, 
    image: require('../Assests/image3.png'), 
    title: ' People don’t take trips, \n trips take  people', 
    text: 'To get the best of your adventure you just \n need to leave and go where you like. we are \n waiting for you ',
   

  } 
]; 

const Onboarding = () => { 
  
  const [showRealApp, setShowRealApp] = useState(false); 

  const renderItem = ({ item }) => { 
    return ( 
      <View style={styles.slide}> 
        <View style={styles.imgslide}> 
          <Image source={item.image} style={styles.images} /> 
        </View> 
        <Text style={styles.title}>{item.title}</Text> 
        <Text style={styles.text}>{item.text}</Text> 
      </View> 
    ); 
  }; 

  const renderDoneButton = () => {
    return (
      // <View style={styles.doneButton}>
        <Text style={styles.goButton}>Let's Go!!!</Text>
      // </View>
    );
  };

  const onDone = () => {
    // User finished the introduction. Navigate to the login screen
    setShowRealApp(true);
  };


  return showRealApp ? (
    <Login /> // Show the login screen directly if showRealApp is true
  ) : (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      dotStyle={styles.inactiveDot}
      activeDotStyle={styles.activeDot}
      renderDoneButton={renderDoneButton}
    />
  );
}; 


export default Onboarding

const styles = StyleSheet.create({ 
  slide: { 
    flex: 1, 
    backgroundColor: '#ffffff', // Change background color of each slide 
  }, 
  title: { 
    fontSize: hp(4), 
    color: '#000', 
    textAlign: 'center', 
    marginTop: hp(8), 
    fontWeight: 'bold', 
  }, 
  text: { 
    fontSize: hp(2), 
    color: '#000', 
    textAlign: 'center', 
    marginTop: hp(6), 
  }, 
  imgslide: { 
    backgroundColor: 'azure', 
    height: hp(55), 
    width: wp(100), 
    borderBottomEndRadius: 40, 
    borderBottomLeftRadius: 40, 
    alignSelf: 'center', 
    borderRadius: 40 
  }, 
  images: { 
    height: hp(60), 
    width: wp(100), 
    marginTop:wp(-10),
    alignSelf: 'center',
    borderRadius:30 
  }, 
  // Dot customization
  inactiveDot: {
    backgroundColor: '#d3d3d3', // Inactive dot color (grey)
    width: wp(3), 
    height: hp(1), 
    borderRadius: 5, 
  }, 
  activeDot: {
    backgroundColor: '#FF6500', // Active dot color (tomato)
    width: wp(6), 
    height: hp(1), 
    borderRadius: 5, 
  },
  // Button customization
  skipButton: {
    backgroundColor: '#ff6347', // Skip button color
    borderRadius: 20,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    fontSize:20
    
    
  },
  nextButton: {
    backgroundColor: '#32cd32', // Next button color (lime green)
    borderRadius: 20,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    
  },
  nextLabel: {
    color: 'blue', // White text for "Next"
    fontWeight: 'bold',
  },
  goButton: {
    color: '#ff6347', // Tomato color for "Get Started"
    fontWeight: 'bold',
    margin:14
  }

}); 


