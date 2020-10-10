import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import FaveScreen from './src/screen/FavoriteQuotesScreen';
import QuoTD from './src/screen/QuoteOfTheDayScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fave" component={FaveScreen} />
        <Stack.Screen name="QOTD" component={QuoTD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
