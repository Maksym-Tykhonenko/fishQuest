import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Layaut from '../../components/Layaut';
import {COLORS} from '../../constants/Color';

const HomeScreen = ({navigation}) => {
  return (
    <Layaut>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PlayScreen');
          }}
          style={{
            width: 250,
            height: 80,
            borderWidth: 3,
            borderRadius: 20,
            borderColor: COLORS.text,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: COLORS.text,
              fontSize: 30,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Play
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 250,
            height: 80,
            borderWidth: 3,
            borderRadius: 20,
            borderColor: COLORS.text,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: COLORS.text,
              fontSize: 30,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Click Here
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 250,
            height: 80,
            borderWidth: 3,
            borderRadius: 20,
            borderColor: COLORS.text,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: COLORS.text,
              fontSize: 30,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Click Here
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 250,
            height: 80,
            borderWidth: 3,
            borderRadius: 20,
            borderColor: COLORS.text,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: COLORS.text,
              fontSize: 30,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </Layaut>
  );
};

export default HomeScreen;
