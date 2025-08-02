import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native-stack';
import Onboarding from '../Screens/Onboarding'
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import VerifyPage from './VerifyPage';
import Homescreen from './Homescreen';
import Bottomnavigation from './Bottomnavigation';
import Forgotscreen from './Forgotscreen';
import Viewscreen from './Viewscreen';
import Favoritescreen from './Favoritescreen';
import PopularPackege from './PopularPackege';
import Niladriscreen from './Niladriscreen';
import SearchDetailsScreen from './SearchDetailsScreen';
import TicketBook from './BookingSuccessScreen';
import  Calendar  from './Calender';
const Stack = createNativeStackNavigator();
const Navigation = () => {

  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgotscreen"
        component={Forgotscreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyPage"
        component={VerifyPage}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Bottomnavigation"
        component={Bottomnavigation}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="Calender"
        component={Calendar}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Viewscreen"
        component={Viewscreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Favoritescreen"
        component={Favoritescreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PopularPackege"
        component={PopularPackege}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Niladriscreen"
        component={Niladriscreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchDetailsScreen"
        component={SearchDetailsScreen
        }
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="TicketBook"
        component={TicketBook}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // </NavigationContainer> 
  );
};

export default Navigation;
