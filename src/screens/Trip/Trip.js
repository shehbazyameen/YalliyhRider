import React, {useState} from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import MapView, {Marker} from 'react-native-maps';
import styling from './Styling';
import {SwipeablePanel} from 'react-native-swipe-up-panel';
import StartModal from '../../components/StartModal';
import CustomModal from '../../components/CustomModal';
import Buton from '../../components/Buton';
import {colors} from '../../config/Colors';
import AcceptJob from '../../components/AcceptJob';
import {InputFeild} from '../../components/InputField';

const {width, height} = Dimensions.get('window');

const Trip = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleMessage, setModalVisibleMessage] = useState(false);
  const [amount, setamount] = useState('');

  const [modalPaid, setModalPaid] = useState(false);
  const [accept, setaccept] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  //
  const renderModal = () => {
    return (
      <>
        <View style={styling.viewMain}>
          <View style={styling.view1}>
            <View style={styling.viewLine} />
            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop4]} />
            <Image source={Assets.alert} resizeMode="contain" />
            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop4]} />
            <Text style={styling.txtAlert}>{'Alert'}</Text>
            <View style={[styling.marginTop4]} />
            <Text style={styling.txtAreYouSure}>
              {labels.areYouDeleteVehicle}
            </Text>
            <View style={styling.viewBtn}>
              <Buton
                title={labels.yes}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <View style={styling.width12} />
              <Buton
                backgroundColor={colors.colorWhite}
                title={labels.no}
                color={colors.black}
                borderWidth={1}
                onPress={() => {
                  FncOpen();
                }}
              />
            </View>
          </View>
        </View>
      </>
    );
  };

  //
  const MessageModal = () => {
    return (
      <>
        <View style={styling.viewMain}>
          <View style={styling.view1}>
            <View style={styling.viewLine} />
            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop4]} />
            <Image source={Assets.messageModal} resizeMode="contain" />
            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop4]} />
            <Text style={styling.txtAlert}>{'System Message'}</Text>
            <View style={[styling.marginTop4]} />

            <Text style={styling.txtAreYouSure}>
              {'Enter the amount received.'}
            </Text>
            <View style={{width: '80%'}}>
              <InputFeild
                // refValueCurrent={refenterpassword}
                keyboardType="numeric"
                onFocusBorderColor={false}
                returnKeyType={'done'}
                paddingHorizontal={0}
                paddingHorizontalRight={22}
                placeholder={'123'}
                leftIcon={Assets.lock}
                value={amount}
                onChange={e => setamount(e)}
              />
            </View>
            <View style={[styling.marginTop]} />
            <View style={styling.viewBtn}>
              <Buton
                title={'Submit'}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          </View>
        </View>
      </>
    );
  };

  const FncClose = () => {
    setIsPanelActive(false);
    setTimeout(() => {
      setModalVisible(true);
    }, 100);
  };

  //Close Modal and open swip
  const FncOpen = () => {
    setIsPanelActive(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 100);
  };

  //Close Modal and open swip
  const FncPaidOpen = () => {
    setIsPanelActive(false);
    setTimeout(() => {
      setModalVisibleMessage(true);
    }, 100);
  };

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
          {accept ? (
            <AcceptJob
              viewHide={false}
              riderName="Ride Started !"
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
              btnTitleOne={'✓ Mark Completed'}
              onPressCancel={() => {
                FncPaidOpen();
              }}
              btnTitleTwo={'Mark Paid'}
            />
          ) : (
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
              onPressStartRide={() => {
                setaccept(true);
              }}
              btnTitleOne={'Accept'}
              onPressCancel={() => {
                FncClose();
              }}
              onPressLeftIcon={() => {
                navigation.navigate('Chat');
              }}
              btnTitleTwo={'Reject'}
            />
          )}
        </SwipeablePanel>
      </View>

      <CustomModal
        // backdropColor={colors.transparent}
        Children={renderModal()}
        isModalVisible={isModalVisible}
        onBackdropPress={() => {
          // toggleModal;
        }}
      />
      <CustomModal
        // backdropColor={colors.transparent}
        Children={MessageModal()}
        isModalVisible={isModalVisibleMessage}
        onBackdropPress={() => {
          // setModalVisibleMessage(!isModalVisibleMessage);
        }}
      />
    </View>
  );
};

export default Trip;
