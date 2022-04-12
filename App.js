/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; // STATUS
// import { createNativeStackNavigator } from '@react-navigation/native-stack'; // STACK

import Home from "./src/pages/Home";
import Settings from "./src/pages/Settings";

/* MENU BURGER*/


/* MENU EN BAS */
/*const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
        {faBars}
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/pages/Home";
import Settings from "./src/pages/Settings";
import Profile from "./src/pages/Profile";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}