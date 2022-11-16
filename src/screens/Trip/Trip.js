import React, {useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import MapView, {Marker} from 'react-native-maps';
import styling from './Styling';
import JobDetails from '../../components/JobDetails';
import {SwipeablePanel} from 'react-native-swipe-up-panel';
import StartModal from '../../components/StartModal';

const {width, height} = Dimensions.get('window');

const Trip = ({navigation}) => {
  const [isPanelActive, setIsPanelActive] = useState(true);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    orientation: 'portrait',
    smallPanelHeight: Dimensions.get('window').height / 2.2,
    allowTouchOutside: true,
    noBackgroundOpacity: true,
    backgroundColor: 'red',
    noBar: true,
    onPressCloseButton: () => closePanel(),
  });

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
        centerTitle={'Trip'}
        rightIcon1Onpress={() => {}}
      />
      <View
        style={{
          flex: 1,
        }}>
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          style={{
            width: width,
            flex: 1,
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

      <View style={{flex: 0.5, backgroundColor: 'white'}}>
        <SwipeablePanel
          style={{
            backgroundColor: 'white',
            borderRadius: 68,
          }}
          {...panelProps}
          isActive={isPanelActive}>
          <StartModal
            viewHide={false}
            image={Assets.dummyImageSquare}
            userName={'User Name'}
            userNameNo={'123456789'}
            tripId={'Trip ID: AB_001'}
            pickUpLocationTitle={'Drop off Location:'}
            pickUpLocation={'A-15, block 2, Street XYZ'}
            dropLocationTitle={'Drop off Location:'}
            dropLocation={'A-15, block 2, Street XYZ'}
            price={'10000'}
            date={'12/12/2202'}
            time={'12:12'}
            onPressPick={() => {}}
            onPressDrop={() => {}}
            onPressStartRide={() => {}}
            btnTitleOne={'Accept'}
            onPressCancel={() => {
              navigation.goBack();
            }}
            onPressLeftIcon={() => {
              navigation.navigate('Chat');
            }}
            btnTitleTwo={'Reject'}
          />
        </SwipeablePanel>
      </View>
    </View>
  );
};

export default Trip;
