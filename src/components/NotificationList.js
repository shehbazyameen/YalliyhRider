import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {Assets} from '../assets';
import fonts from '../assets/fonts';
import {colors} from '../config/Colors';
import Buton from './Buton';

const {width, height} = Dimensions.get('window');

const NotificationList = ({
  onPressCancel = () => {},
  onPress = () => {},
  title,
  dateTime,
  height = 80,
  image = Assets.bellIcon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.centerView, {height: height}]}>
      <View style={styles.flexDirectionRow}>
        <View>
          <Image
            style={styles.heightWidth}
            borderRadius={100}
            source={image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.flex1}>
          <Text style={styles.textTitle} numberOfLines={2}>
            {title}
          </Text>

          <View style={styles.view1}>
            <Text style={styles.textSubTitle} numberOfLines={2}>
              {dateTime}
            </Text>
            <View style={{width: 12}} />

            <Buton
              backgroundColor={colors.black}
              title={'New'}
              color={colors.colorWhite}
              borderWidth={1}
              onPress={onPressCancel}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
  },
  flex1: {
    flex: 1,
    paddingHorizontal: 8,
  },
  heightWidth: {
    height: width / 6,
    width: width / 6,
    backgroundColor: colors.primaryOrangeColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  centerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hW: {
    height: 32,
    width: 32,
  },

  textTitle: {
    fontSize: 10,
    fontFamily: fonts.PoppinsRegular,
    color: colors.lightGray,
  },
  textSubTitle: {
    fontSize: 12,
    fontFamily: fonts.PoppinsBold,
    color: colors.black,
  },
});
