import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/Home/HomeScreen';
import PlayScreen from '../screens/Home/PlayScreen';

const HomeRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PlayScreen" component={PlayScreen} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
