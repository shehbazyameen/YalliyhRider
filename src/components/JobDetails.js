import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {normalize} from '../config/FontsNormalize';
import {SwipeablePanel} from 'react-native-swipe-up-panel';
import ListText from './ListText';
import {colors} from '../config/Colors';
import fonts from '../assets/fonts';
import CustomListUser from './CustomListUser';
import {Assets} from '../assets';
import {Rating} from 'react-native-ratings';

const JobDetails = ({
  panelProps,
  isPanelActive,
  title,
  PickUpLocation,
  PickUpLocationAddress,
  dropOffLocation,
  dropOffLocationAddress,
  time,
  date,
  Amount,
  appliedPromocode,
  discountedFare,
  ddminsCommission,
  totalAmount,
  description,
}) => {
  return (
    <SwipeablePanel {...panelProps} isActive={isPanelActive}>
      <View style={{marginTop: 16}}>
        <View style={styling.viewLine} />
      </View>

      <View style={styling.viewMain}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <CustomListUser title={title} image={Assets.userAvatar} />
            <ListText
              onPress={() => {}}
              title={PickUpLocation}
              subTitle={PickUpLocationAddress}
              paddingHorizontal={0}
              height={70}
            />
            <View style={styling.viewLineHorizontal} />

            <ListText
              onPress={() => {}}
              title={dropOffLocation}
              subTitle={dropOffLocationAddress}
              paddingHorizontal={0}
              height={70}
            />
            <View style={styling.viewLineHorizontal} />

            <View style={styling.flexrow}>
              <ListText
                onPress={() => {}}
                title={'Time:'}
                subTitle={time}
                paddingHorizontal={0}
                height={70}
              />

              <ListText
                onPress={() => {}}
                title={'Date:'}
                subTitle={date}
                paddingHorizontal={0}
                height={70}
              />
            </View>
            <View style={styling.viewFlexDirection}>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {'Amount:'}
              </Text>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {Amount}
              </Text>
            </View>

            <View style={styling.viewFlexDirection}>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {'Applied Promocode:'}
              </Text>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {appliedPromocode}
              </Text>
            </View>

            <View style={styling.viewFlexDirection}>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {'Discounted Fare:'}
              </Text>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {discountedFare}
              </Text>
            </View>

            <View style={styling.viewFlexDirection}>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {'Admins Commission:'}
              </Text>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {ddminsCommission}
              </Text>
            </View>

            <View style={[styling.viewFlexDirection, styling.marginTop8]}>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {'Total Amount:'}
              </Text>
              <Text style={styling.textSubTitle} numberOfLines={1}>
                {totalAmount}
              </Text>
            </View>

            <View>
              <Text style={styling.textRateReview} numberOfLines={1}>
                Rate And Review
              </Text>
              <View style={{alignSelf: 'flex-start', marginBottom: 12}}>
                <Rating
                  // ratingImage={Assets.HeaderBack}
                  readonly={true}
                  ratingColor="#3498db"
                  ratingBackgroundColor="#c8c7c8"
                  ratingCount={5}
                  minValue={5}
                  imageSize={13}
                  style={{paddingVertical: 2}}
                />
              </View>

              <Text style={styling.textDescription}>{description}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SwipeablePanel>
  );
};

const styling = StyleSheet.create({
  flexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewMain: {
    paddingHorizontal: 38,
    width: '100%',
    flex: 1,
  },
  marginTop8: {
    marginTop: 8,
  },

  viewLine: {
    height: 2,
    backgroundColor: colors.lightGray,
    width: 70,
    alignSelf: 'center',
  },
  viewLineHorizontal: {
    height: 0.8,
    backgroundColor: colors.lineColor,
    width: '94%',
    alignSelf: 'center',
  },

  viewBorder: {
    backgroundColor: colors.colorWhite,
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -12,
  },
  textSubTitle: {
    fontSize: normalize(10),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    lineHeight: 26,
  },
  viewFlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textRateReview: {
    fontSize: normalize(34),
    fontFamily: fonts.DongleRegular,
    color: colors.black,
    marginTop: 22,
  },
  textDescription: {
    fontSize: normalize(10),
    fontFamily: fonts.PoppinsLight,
    color: colors.black,
    // lineHeight: 26,
  },
});

export default JobDetails;
