import {Dimensions, StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';
import {normalize} from '../../config/FontsNormalize';
import {vh, vw} from '../../config/Unit';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  viewJobsDetails: {
    width: '100%',
    backgroundColor: '#AFB1B390',
    borderRadius: 40,
    height: Dimensions.get('window').height / 2.6,
  },
  marginTop8: {
    marginTop: 8,
  },

  viewMain: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#AFB1B340',
    borderRadius: 68,
  },
  hw32: {
    height: 32,
    width: 32,
  },
  Container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  padding22: {
    paddingHorizontal: 16,
    // backgroundColor: 'red',
    flex: 1,
  },

  //Modal
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

  textViewDetails: {
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.textColorLogin,
    textDecorationLine: 'underline',
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

  //
  //
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
  width12: {
    width: 12,
  },
  marginTop: {
    marginTop: 16,
  },
  marginTop4: {
    marginTop: 4,
  },
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
});
