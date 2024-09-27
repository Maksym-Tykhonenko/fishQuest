import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeRoutes from './routes/HomeRoutes';
import SetingsRoutes from './routes/SetingsRoutes';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          //tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#75ba84',
          tabBarInactiveBackgroundColor: '#205c5c',
        }}>
        <Tab.Screen name="HomeRoutes" component={HomeRoutes} />
        <Tab.Screen name="SetingsRoutes" component={SetingsRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
