import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styling from './Styling';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import MapView, {Marker} from 'react-native-maps';

const MyEarning = ({navigation}) => {
  return (
    <View style={[styling.Container]}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.arrowLeftShort}
        leftRoute={() => {
          navigation.goBack();
        }}
        centerTitle={labels.myEarnings}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />
      <View style={styling.padding22}>
        <View style={styling.viewMap}>
          <MapView
            scrollEnabled={false}
            zoomEnabled={false}
            style={styling.mapView}
            initialRegion={{
              latitude: 24.8681908,
              longitude: 67.0650614,
              latitudeDelta: 0.0122,
              longitudeDelta: 0.0122,
            }}>
            <Marker coordinate={{latitude: 24.8681908, longitude: 67.0650614}}>
              <Image
                style={{height: 32, width: 32}}
                source={Assets.restaurantLocation}
              />
            </Marker>
          </MapView>
        </View>

        <View style={[styling.viewDatePrice, styling.paddingTop12]}>
          <Text style={[styling.textDate]}>2/22/2022</Text>
          <Text style={[styling.textPrice]}>$ 10</Text>
        </View>
        <Text style={[styling.textTitleName]}>Title</Text>
        <View style={[styling.viewDatePrice]}>
          <Text style={[styling.textDate, styling.width75]}>
            A-15,block 2,Street XYZ A-15,block 2,Street XYZ A-15,block 2,Street
            XYZ
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styling.textViewDetails]}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyEarning;
