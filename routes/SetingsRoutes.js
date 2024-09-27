import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SetingsScreen from '../screens/Setings/SetingsScreen';

const SetingsRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SetingsScreen" component={SetingsScreen} />
    </Stack.Navigator>
  );
};

export default SetingsRoutes;
