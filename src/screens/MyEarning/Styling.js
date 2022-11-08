import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';
import {normalize} from '../../config/FontsNormalize';
import {vh, vw} from '../../config/Unit';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  padding22: {
    // padding: 22,
    paddingHorizontal: 16,
  },
  viewDatePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  paddingTop12: {
    paddingTop: 12,
  },
  width75: {
    width: '75%',
  },

  viewMap: {
    borderRadius: 22,
    zIndex: -1,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    height: vh * 16,
    width: '100%',
    alignSelf: 'center',
  },
  viewBorder: {
    backgroundColor: colors.colorWhite,
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -12,
  },
  //Modal
  textTitle: {
    fontSize: normalize(9),
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
    paddingBottom: 28,
  },

  textDate: {
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsRegular,
    color: colors.lightGray,
  },
  textViewDetails: {
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.textColorLogin,
    textDecorationLine: 'underline',
  },

  textTitleName: {
    fontSize: normalize(14),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontWeight: '900',
  },

  textPrice: {
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsBold,
    color: colors.black,
  },

  textTime: {
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

  textOffline: {
    fontSize: normalize(14),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontWeight: 'bold',
  },

  ///Modal styling
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 22,
  },

  marginTop: {marginTop: 16},
  marginTop4: {marginTop: 4},
  viewLine: {
    height: 2,
    backgroundColor: colors.lightGray,
    width: 70,
  },
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
});
