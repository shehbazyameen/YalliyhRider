import React, {useState} from 'react';
import {View, Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import styling from './Styling';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import MapView from 'react-native-maps';
import Buton from '../../components/Buton';

const Home = ({navigation}) => {
  return (
    <View style={[styling.Container]}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.menu}
        leftRoute={() => {
          navigation.openDrawer();
        }}
        centerTitle={labels.youAreOnline}
        rightIcon1={Assets.bell}
        rightIcon1Onpress={() => {
          navigation.navigate('Notification');
          // navigation.navigate('Chat');
        }}
      />
      <View>
        <MapView
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          initialRegion={{
            latitude: 24.8681908,
            longitude: 67.0650614,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      <View style={styling.viewMain}>
        <View style={styling.view1}>
          <View style={styling.viewLine} />
          <View style={[styling.marginTop]} />

          <View style={styling.viewFlex}>
            <Text style={styling.textOffline}>{'Go Online'}</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('RiderList');
              }}>
              <Image source={Assets.offline} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={[styling.marginTop]} />
          <Buton
            title={labels.registerVehicle}
            onPress={() => {
              navigation.navigate('RegisterVehicle');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
