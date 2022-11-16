import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Assets} from '../assets';
import fonts from '../assets/fonts';
import {colors} from '../config/Colors';
import {normalize} from '../config/FontsNormalize';
import {labels} from '../config/Labels';
import Buton from './Buton';
import CustomListUser from './CustomListUser';
import ListText from './ListText';

const StartModal = ({
  onPressPick = () => {},
  onPressDrop = () => {},
  onPressStartRide = () => {},
  onPressCancel = () => {},
  image,
  userName,
  userNameNo,
  tripId,
  pickUpLocationTitle,
  pickUpLocation,
  dropLocationTitle,
  dropLocation,
  price,
  date,
  time,
  btnTitleOne = '',
  btnTitleTwo = '',
  bottom = 0,
  onPressLeftIcon,
  viewHide = true,
}) => {
  return (
    <>
      <View style={[viewHide && styling.viewMain, {bottom: bottom}]}>
        {!viewHide && (
          <>
            <View style={styling.viewLine} />
            <View style={[styling.marginTop]} />
          </>
        )}

        <View style={styling.view1}>
          <View>
            <CustomListUser
              image={image}
              title={userName}
              subTitle={userNameNo}
              icon={Assets.chat}
              height={50}
              onPressLeftIcon={onPressLeftIcon}
            />
            <Text style={styling.textTitle} numberOfLines={1}>
              {tripId}
            </Text>
            <View style={styling.viewFlexRow}>
              <View style={styling.view32}>
                <Image resizeMode={'contain'} source={Assets.sendJob} />
                <View style={styling.padding12}>
                  <Image resizeMode={'contain'} source={Assets.LineVerticle} />
                </View>
                <Image resizeMode={'contain'} source={Assets.pin} />
              </View>

              <View style={styling.viewListText}>
                <View style={styling.view2ListText}>
                  <ListText
                    onPress={onPressPick}
                    title={pickUpLocationTitle}
                    subTitle={pickUpLocation}
                    height={50}
                  />
                </View>

                <View style={styling.viewTimAbove}>
                  <ListText
                    onPress={onPressDrop}
                    title={dropLocationTitle}
                    subTitle={dropLocation}
                    height={50}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styling.padding22}>
            <Text style={styling.textTime} numberOfLines={1}>
              {'Time:'}
            </Text>
            <Text style={styling.textHours} numberOfLines={1}>
              {time}
            </Text>
          </View>

          <View style={styling.viewTime}>
            <View>
              <Text style={styling.textTime} numberOfLines={1}>
                {'Date:'}
              </Text>
              <Text style={styling.textHours} numberOfLines={1}>
                {date}
              </Text>
            </View>
            <View style={styling.padding42}>
              <Text style={styling.textTime} numberOfLines={1}>
                {'Amount:'}
              </Text>
              <Text style={styling.textHours} numberOfLines={1}>
                {'$' + price}
              </Text>
            </View>
          </View>

          <View style={styling.viewBtn}>
            <Buton title={btnTitleOne} onPress={onPressStartRide} />
            <View style={styling.width12} />
            <Buton
              backgroundColor={colors.colorWhite}
              title={btnTitleTwo}
              color={colors.black}
              borderWidth={1}
              onPress={onPressCancel}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default StartModal;

const styling = StyleSheet.create({
  marginTop: {
    marginTop: 16,
  },

  viewLine: {
    height: 1.2,
    backgroundColor: colors.lightGray,
    width: 70,
    position: 'absolute',
    alignSelf: 'center',
    margin: 22,
  },
  view2ListText: {
    position: 'absolute',
    top: -20,
  },
  viewListText: {
    paddingHorizontal: 12,
    flexDirection: 'column',
  },
  padding12: {
    paddingVertical: 12,
  },
  view32: {
    width: 32,
    alignItems: 'center',
  },
  viewFlexRow: {
    flexDirection: 'row',
  },
  view1: {
    backgroundColor: colors.colorWhite,
    padding: 22,
    marginTop: 16,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
  },
  viewMain: {
    position: 'absolute',
    width: '100%',
    // bottom: 0,
    backgroundColor: '#AFB1B340',
    borderRadius: 68,
  },
  viewTimAbove: {
    position: 'absolute',
    bottom: -10,
  },
  padding42: {paddingRight: 42},
  padding22: {
    paddingVertical: 22,
  },
  viewTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  width12: {width: 12},
  viewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
  },
  Container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },

  //Modal
  textTitle: {
    // fontSize: 10,
    fontSize: normalize(9),
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
    paddingBottom: 28,
  },

  textTime: {
    // fontSize: 10,
    fontSize: normalize(9),
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
  },
  textHours: {
    // fontSize: 12,
    fontSize: normalize(10),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
  },
});
