import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';
import {normalize} from '../../config/FontsNormalize';

export default StyleSheet.create({
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
