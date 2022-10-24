import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeStack');
        }}>
        <Text>Splash</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
