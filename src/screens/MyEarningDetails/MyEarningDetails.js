import React, {useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import MapView, {Marker} from 'react-native-maps';
import styling from './Styling';
import SwipeUpDown from 'react-native-swipe-up-down';

const MyEarningDetails = ({navigation}) => {
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
        centerTitle={labels.details}
        rightIcon1Onpress={() => {}}
      />
      <View>
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2,
          }}
          initialRegion={{
            latitude: 24.8681908,
            longitude: 67.0650614,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0122,
          }}>
          <Marker coordinate={{latitude: 24.8681908, longitude: 67.0650614}}>
            <Image style={styling.hw32} source={Assets.restaurantLocation} />
          </Marker>
        </MapView>
      </View>
      <View style={styling.padding22}>
        <SwipeUpDown
          // itemMini={show => <ItemFull show={show} />}
          // itemFull={hide => <ItemFull hide={hide} />}
          onShowMini={() => console.log('mini')}
          onShowFull={() => console.log('full')}
          animation="spring"
          // disableSwipeIcon
          extraMarginTop={100}
          iconColor="yellow"
          iconSize={30}
          swipeHeight={300}
          style={{backgroundColor: '#000', height: 200}} // style for swipe
        />
      </View>
    </View>
  );
};

export default MyEarningDetails;
