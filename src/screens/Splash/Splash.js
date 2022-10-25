import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styling from './Styling';
import {Assets} from '../../assets';
import {Image} from 'react-native';
import {StatusBar} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeStack');
    }, 1000);
  });

  return (
    <ImageBackground
      source={Assets.splashBackImage}
      style={[styling.Container]}
      resizeMode={'cover'}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styling.splashView}>
        <Image source={Assets.LogoSplash} />
      </View>
    </ImageBackground>
  );
};

export default Splash;
