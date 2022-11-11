import React, {useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import MapView, {Marker} from 'react-native-maps';
import styling from './Styling';
import JobDetails from '../../components/JobDetails';

const {width, height} = Dimensions.get('window');

const MyEarningDetails = ({navigation}) => {
  const [isPanelActive, setIsPanelActive] = useState(true);

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    orientation: 'portrait',
    smallPanelHeight: Dimensions.get('window').height / 2,
    currentHeight: 200,
    allowTouchOutside: true,
    noBackgroundOpacity: true,
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
        centerTitle={labels.details}
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
            height: height / 1.95,
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
      <View style={styling.viewJobsDetails}>
        <JobDetails
          panelProps={panelProps}
          isPanelActive={isPanelActive}
          title={'User Name'}
          PickUpLocation={'Pick up Location:'}
          PickUpLocationAddress={'A-15, block 2, Street XYZ'}
          dropOffLocation={'Drop off Location:'}
          dropOffLocationAddress={'A-15, block 2, Street XYZ'}
          time={'12:12'}
          date={'12/12/2022'}
          Amount={'10$'}
          appliedPromocode={'123432'}
          discountedFare={'$3'}
          ddminsCommission={'$20'}
          totalAmount={'$100'}
          description={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
          }
        />
      </View>
    </View>
  );
};

export default MyEarningDetails;
