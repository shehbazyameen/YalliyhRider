import React from 'react';
import {Text, StyleSheet, Dimensions, View, Image} from 'react-native';
import {Assets} from '../assets';
import fonts from '../assets/fonts';
import {Rating} from 'react-native-ratings';
import {colors} from '../config/Colors';

const {width, height} = Dimensions.get('window');

const RatingProfile = ({
  title,
  Description,
  image = Assets.dummyImageSquare,
  date,
  height = width / 3,
}) => {
  return (
    <View style={[styles.centerView, {height: height}]}>
      <View style={{}}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={styles.image}
          borderRadius={100}
        />
      </View>

      <View style={styles.viewText}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.textDate} numberOfLines={1}>
          {date}
        </Text>

        <Rating
          // ratingImage={Assets.HeaderBack}
          readonly={true}
          ratingColor="#3498db"
          ratingBackgroundColor="#c8c7c8"
          ratingCount={5}
          imageSize={13}
          style={{paddingVertical: 2}}
        />
        <Text style={styles.textDescription} numberOfLines={3}>
          {Description}
        </Text>
      </View>
    </View>
  );
};

export default RatingProfile;

const styles = StyleSheet.create({
  viewText: {paddingHorizontal: 14, flex: 1, alignItems: 'flex-start'},
  image: {
    height: width / 5,
    width: width / 5,
    borderWidth: 3,
    borderColor: '#F4F4F4',
  },
  centerView: {
    flexDirection: 'row',
  },
  hW: {
    height: 32,
    width: 32,
  },

  textDate: {
    fontSize: 10,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    // marginBottom: -10,
  },

  textTitle: {
    fontSize: 14,
    fontFamily: fonts.PoppinsBold,
    color: colors.black,
    // marginBottom: -10,
  },
  textDescription: {
    fontSize: 10,
    fontFamily: fonts.PoppinsRegular,
    color: colors.lightGray,
    lineHeight: 18,
  },
});
