// // Mac dinh nho cai dat them 2 thu vien 
////npm install react-native-screens react-native-safe-area-context

import React from 'react';
import { View, Text , SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentRoot from "./ComponentRoot"
import DemoCallback from "./DemoCallback"
import DemoDeviceEvenEmitter from "./DemoDeviceEvenEmitter"



const Stack = createNativeStackNavigator();

function DemoNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="ComponentRoot" 
      
      >
        <Stack.Screen name= "DemoCallback" component={DemoCallback}/>
        <Stack.Screen name="ComponentRoot" component={ComponentRoot} />
        <Stack.Screen name ="DemoDeviceEvenEmitter" component = {DemoDeviceEvenEmitter} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DemoNavigation;

