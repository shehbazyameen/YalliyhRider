import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import fonts from '../assets/fonts';
import {colors} from '../config/Colors';
import {normalize} from '../config/FontsNormalize';

const {width, height} = Dimensions.get('window');

const CustomListUser = ({
  onPressLeftIcon = () => {},
  image,
  title,
  subTitle,
  icon,
  height = width / 6,
}) => {
  return (
    <View style={[styles.viewMain, {height: height}]}>
      <View>
        <Image
          borderRadius={100}
          resizeMode={'contain'}
          style={styles.hW}
          source={image}
        />
      </View>
      <View style={styles.centerView}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.textSubTitle} numberOfLines={1}>
          {subTitle}
        </Text>
      </View>
      <TouchableOpacity onPress={onPressLeftIcon} activeOpacity={0.7}>
        <Image resizeMode={'contain'} style={styles.hW} source={icon} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomListUser;

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  hW: {
    height: 32,
    width: 32,
  },

  textTitle: {
    // fontSize: 28,
    fontSize: normalize(22),
    fontFamily: fonts.DongleRegular,
    color: colors.black,
    marginBottom: -10,
  },
  textSubTitle: {
    fontSize: normalize(14),
    fontFamily: fonts.DongleRegular,
    color: colors.lightGray,
  },
});
