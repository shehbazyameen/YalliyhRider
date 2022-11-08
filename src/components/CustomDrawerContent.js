import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {colors} from '../config/Colors';
import {Assets} from '../assets';
import fonts from '../assets/fonts';
import Buton from './Buton';
import CustomModal from './CustomModal';
import {labels} from '../config/Labels';
import {normalize} from '../config/FontsNormalize';

const {width, height} = Dimensions.get('window');

export default function CustomDrawerContent({props, navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //
  const renderModal = () => {
    return (
      <>
        <View style={styles.viewMain}>
          <View style={styles.view1}>
            <View style={styles.viewLine} />
            <View style={[styles.marginTop]} />
            <View style={[styles.marginTop4]} />
            <Image source={Assets.logout} resizeMode="contain" />
            <View style={[styles.marginTop]} />
            <View style={[styles.marginTop4]} />
            <Text style={styles.txtAlert}>{'Logout'}</Text>
            <View style={[styles.marginTop4]} />
            <Text style={styles.txtAreYouSure}>{labels.areYouLogout}</Text>
            <View style={styles.viewBtn}>
              <Buton
                title={labels.yes}
                // onPress={toggleModal}
              />
              <View style={styles.width12} />
              <Buton
                backgroundColor={colors.colorWhite}
                title={labels.no}
                color={colors.black}
                borderWidth={1}
                onPress={toggleModal}
              />
            </View>
          </View>
        </View>
      </>
    );
  };
  //All States
  const [list, setList] = useState([
    {
      key: 0,
      title: 'Profile',
      image: Assets.userAvatarFilled,
      onPress: () => {
        navigation.navigate('Profile');
      },
    },
    {
      key: 1,
      title: 'My Earning',
      image: Assets.cash,
      onPress: () => {
        // navigation.navigate();
      },
    },
    {
      key: 2,
      title: 'My Vehicles',
      image: Assets.car,
      onPress: () => {
        navigation.navigate('MyVehicles');
      },
    },
    {
      key: 3,
      title: 'Ratings and Reviews',
      image: Assets.star,
      onPress: () => {
        navigation.navigate('RatingsReviews');
      },
    },
    {
      key: 4,
      title: 'Contact Admin',
      image: Assets.call,
      onPress: () => {
        navigation.navigate('ContactUs');
      },
    },

    {
      key: 5,
      title: 'LogOut',
      image: Assets.logOut,
      onPress: () => {
        toggleModal();
      },
    },
  ]);

  return (
    <>
      <DrawerContentScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.viewImageProfile}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.touchClose}
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <Image source={Assets.close} resizeMode={'contain'} />
          </TouchableOpacity>
          <View style={styles.padding30}>
            <Image
              source={Assets.dummyImageSquare}
              resizeMode={'contain'}
              style={styles.imageProfile}
            />
            <Text numberOfLines={2} style={[styles.profileTitle]}>
              {'User Name !'}
            </Text>
          </View>
        </View>
        <View style={[styles.viewTouch]}>
          {list.map((item, index) => {
            return (
              <>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.touchTxt]}
                  onPress={item.onPress}>
                  <Image
                    source={item.image}
                    style={styles.hW}
                    resizeMode="contain"
                  />
                  <Text style={[styles.txtTouch]}>{item.title}</Text>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </DrawerContentScrollView>
      <CustomModal
        // backdropColor={colors.transparent}
        Children={renderModal()}
        isModalVisible={isModalVisible}
        onBackdropPress={() => {
          toggleModal();
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  padding30: {padding: 30},
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryColor85,
  },
  viewImageProfile: {
    backgroundColor: colors.primaryColor85,
    flex: 0.4,
  },
  imageProfile: {
    height: width / 6.5,
    width: width / 6.5,
    borderRadius: 100,
  },
  viewTouch: {
    flex: 1,
    backgroundColor: colors.primaryColor85,
  },
  hW: {
    height: 20,
    width: 20,
  },
  touchClose: {
    position: 'absolute',
    right: 0,
    padding: 22,
    paddingVertical: 12,
  },
  txtTouch: {
    fontFamily: fonts.PoppinsRegular,
    // fontSize: 16,
    fontSize: normalize(14),
    color: colors.colorWhite,
    paddingHorizontal: 12,
  },
  profileTitle: {
    fontFamily: fonts.PoppinsBold,
    // fontSize: 20,
    fontSize: normalize(18),
    color: colors.colorWhite,
    paddingTop: 12,
  },

  touchTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 30,
    height: width / 9,
  },

  //
  marginTop: {marginTop: 16},
  marginTop4: {marginTop: 4},
  view1: {
    backgroundColor: colors.colorWhite,
    padding: 22,
    marginTop: 16,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMain: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#AFB1B340',
    borderRadius: 68,
  },
  viewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
  },
  width12: {width: 12},
  txtAlert: {
    // fontSize: 14,
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsBold,
    color: colors.black,
  },

  txtAreYouSure: {
    // fontSize: 14,
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    textAlign: 'center',
  },
  viewLine: {
    height: 2,
    backgroundColor: colors.lightGray,
    width: 70,
  },
});
