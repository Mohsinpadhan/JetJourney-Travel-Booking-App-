import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';

import  Homescreen from './Homescreen';
import Calender from './Calender';
import Profilescreen from './Profilescreen';
import Popularscreen from './Popularscreen';
import Searchscreen from './Searchscreen';



const Tab = createBottomTabNavigator();
export default function App() {
  return (
    //  <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          ImageBarActiveTintColor:'tomato',
        }}
      >
        <Tab.Screen
  name="Home"
  component={Homescreen}
  options={{headerShown: false,
    tabBarIcon: ({ color, size, focused }) => (
    <Image source={require('../Assests/home.png')} style={[{width:20,height:20,tintColor: focused? 'tomato': '#000'}]}/>),
  }}
/>

       
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={{  headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../Assests/calender.png')} style={[{width:23,height:23,tintColor: focused? 'tomato': '#000'}]}/>
            ),
          }}
        />
         <Tab.Screen
          name="Search"
          component={Searchscreen}
          options={{  headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={require('../Assests/search.png')} style={[{width:24,height:24,tintColor: focused? 'tomato': '#000'}]} />
            ),
          }}
        />
         <Tab.Screen
          name="Popular"
          component={Popularscreen}
          options={{  headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={require('../Assests/popular.png')} style={[{width:23,height:23,tintColor: focused? 'tomato': '#000'}]} />
            ),
          }}
        />

<Tab.Screen
          name="Profile"
          component={Profilescreen}
          options={{  headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={require('../Assests/user1.png')} style={[{width:23,height:23,tintColor: focused? 'tomato': '#000'}]} />
            ),
          }}
        />
        
      </Tab.Navigator>
    //  </NavigationContainer>
  );
}
