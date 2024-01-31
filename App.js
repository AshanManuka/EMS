import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import PrinterScreen from './screen/PrinterScreen';
import { setupDatabase } from './screen/Database';
import { setupBusinessTable, setupItemTable, setupQuickItemTable } from './screen/Database';
import BusinessScreen from './screen/BusinessScreen';
import SellScreen from './screen/SellScreen';
import SellItemScreen from './screen/SellItemScreen';

const stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    setupDatabase();
    setupBusinessTable();
    setupItemTable();
    setupQuickItemTable();
  }, []);


  return (
    <NavigationContainer>
      <stack.Navigator>   
        <stack.Screen
          name= 'Home' options={{headerShown: false}}
          component={HomeScreen}
        />
        <stack.Screen
          name= 'selling' options={{headerShown: false}}
          component={SellScreen}
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
        <stack.Screen
          name= 'sellItem' options={{headerShown: false}}
          component={SellItemScreen}
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
