import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Layaut from '../../components/Layaut';

const SetingsScreen = () => {
  return (
    <Layaut>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings Screen</Text>
      </View>
    </Layaut>
  );
};

export default SetingsScreen;
