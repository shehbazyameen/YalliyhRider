import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import styling from './Styling';
import {Assets} from '../../assets';
import {ScrollView} from 'react-native';
import Buton from '../../components/Buton';
import {labels} from '../../config/Labels';
import CustomHeader from '../../components/CustomHeader';
const {width, height} = Dimensions.get('window');

const Trip = ({navigation}) => {
  return (
    <View style={styling.mainContainer}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.arrowLeftShort}
        leftRoute={() => {
          navigation.goBack();
        }}
        centerTitle={labels.profile}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />
      <View style={[styling.paddingHorizontal45]}>
        <ImageBackground
          source={Assets.tripBack}
          style={{
            height: height,
            // padding: 22,
          }}
          resizeMode="contain">
          <View style={[styling.marginTop]} />

          <Text style={[styling.textNoRider]}>No Rides Available</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Trip;
