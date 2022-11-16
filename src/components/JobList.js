import React from 'react';
import {Text, StyleSheet, Dimensions, View, Image} from 'react-native';
import {Assets} from '../assets';
import fonts from '../assets/fonts';
import {Rating} from 'react-native-ratings';
import {colors} from '../config/Colors';
import {normalize} from '../config/FontsNormalize';
import {labels} from '../config/Labels';
import Buton from './Buton';

const {width, height} = Dimensions.get('window');

const JobList = ({
  onPressCancel = () => {},
  onPressDetails = () => {},
  title,
  Description,
  image = Assets.dummyImageSquare,
  date,
  height = 120,
  rating = 0,
}) => {
  return (
    <View style={[styles.centerView, {height: height}]}>
      <View style={[styles.viewInner]}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={styles.image}
          borderRadius={100}
        />

        <View style={styles.viewText}>
          <View style={styles.viewTitle}>
            <Text style={styles.textDescription} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.textTitle} numberOfLines={1}>
              {'Rs 230'}
            </Text>
          </View>

          <View style={styles.viewRating}>
            <View style={styles.viewInnerRating}>
              <Rating
                // ratingImage={Assets.HeaderBack}
                readonly={true}
                ratingColor="#3498db"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={1}
                imageSize={10}
              />
              <Text style={styles.textRating} numberOfLines={1}>
                {rating}
              </Text>
            </View>
            <Text style={styles.textDate} numberOfLines={1}>
              {date}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.viewBtn}>
        <Buton
          height={30}
          backgroundColor={colors.colorWhite}
          title={labels.cancel}
          color={colors.black}
          borderWidth={1}
          onPress={onPressCancel}
        />
        <View style={styles.width12} />
        <Buton onPress={onPressDetails} title={labels.details} height={30} />
      </View>
    </View>
  );
};

export default JobList;

const styles = StyleSheet.create({
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  viewInnerRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  viewInner: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
  },
  width12: {
    width: 12,
  },
  viewText: {
    paddingHorizontal: 14,
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    height: width / 6.5,
    width: width / 6.5,
    borderWidth: 3,
    borderColor: '#F4F4F4',
  },
  centerView: {
    // flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  hW: {
    height: 32,
    width: 32,
  },

  textDate: {
    fontSize: normalize(9),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
  },

  textRating: {
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    paddingHorizontal: 2,
  },

  textTitle: {
    // fontSize: 14,
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsBold,
    color: colors.black,
    // marginBottom: -10,
  },
  textDescription: {
    // fontSize: 10,
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
  },
});
