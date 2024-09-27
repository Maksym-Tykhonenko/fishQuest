import React, {Children} from 'react';
import {ImageBackground, View} from 'react-native';

const Layaut = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/bckgr.jpeg')}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Layaut;
