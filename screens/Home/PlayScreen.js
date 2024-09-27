import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Layaut from '../../components/Layaut';
import {COLORS} from '../../constants/Color';

const PlayScreen = ({navigation}) => {
  return (
    <Layaut>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Play Screen</Text>
      </View>
    </Layaut>
  );
};

export default PlayScreen;
