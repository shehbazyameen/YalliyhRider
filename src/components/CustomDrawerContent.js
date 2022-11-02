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

const {width, height} = Dimensions.get('window');

export default function CustomDrawerContent({props, navigation}) {
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
        // navigation.navigate();
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
      onPress: () => {},
    },
  ]);

  return (
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
    fontSize: 16,
    color: colors.colorWhite,
    paddingHorizontal: 12,
  },
  profileTitle: {
    fontFamily: fonts.PoppinsBold,
    fontSize: 20,
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
});
