import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import PrinterScreen from './screen/PrinterScreen';
import { setupDatabase } from './screen/Database';
import { setupBusinessTable } from './screen/Database';
import BusinessScreen from './screen/BusinessScreen';

const stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    setupDatabase();
    setupBusinessTable();
  }, []);


  return (
    <NavigationContainer>
      <stack.Navigator>   
        <stack.Screen
          name= 'Home' options={{headerShown: false}}
          component={HomeScreen}
        />
        <stack.Screen
          name= 'Details' options={{headerShown: false}}
          component={DetailScreen}
        />
        <stack.Screen
          name= 'Printers' options={{headerShown: false}}
          component={PrinterScreen}
        />
        <stack.Screen
          name= 'business' options={{headerShown: false}}
          component={BusinessScreen}
        />
        
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
