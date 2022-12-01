import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Home, Results, EditFilter } from '../screens';
import { setAllData, setAllDates } from '../features';
import { useAppDispatch } from '../store';
import User from '../Data/userId';
const Stack = createNativeStackNavigator<RootStackParamList>();
function Navigation() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(setAllData(User));
    let dateIds = {};
    for (const key of Object.keys(User)) {
      for (const dateKey of Object.keys(User[key].calendar.dateToDayId)) {
        dateIds = {
          ...dateIds,
          [User[key].calendar.dateToDayId[dateKey]]: dateKey,
        };
      }
    }
    dispatch(setAllDates(dateIds));
  }, []);
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
