import React from 'react';
import { StyleSheet } from 'react-native';
// Import the Navigation component from your src/screens folder
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Src/Screens/Navigation'; // Adjust path if necessary
import Flat from './Src/Screens/Flat';
import Onboarding from './Src/Screens/Onboarding';
import Login from './Src/Screens/Login';
import Bottomnavigation from './Src/Screens/Bottomnavigation';
import Niladriscreen from './Src/Screens/Niladriscreen';
import Viewscreen from './Src/Screens/Viewscreen';
import Forgotscreen from './Src/Screens/Forgotscreen';
import VerifyPage from './Src/Screens/VerifyPage';
import Calender from './Src/Screens/Calender';
import Popularscreen from './Src/Screens/Popularscreen';
import Profilescreen from './Src/Screens/Profilescreen';
// import Navigation from './Src/Screens/Navigation';
import PopularPackege from './Src/Screens/PopularPackege';
 import Favoritescreen from './Src/Screens/Favoritescreen';
import Homescreen from './Src/Screens/Homescreen';
import Searchscreen from './Src/Screens/Searchscreen';

const App = () => {
  return (
   
//<Searchscreen/>
     <NavigationContainer>
       <Navigation/>
       </NavigationContainer> 

    //<Favoritescreen/> 


  );
}

export default App;

const styles = StyleSheet.create({});
