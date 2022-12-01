import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Home, Results, EditFilter } from '../screens';
const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Results' component={Results} />
        <Stack.Screen name='EditFilter' component={EditFilter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
